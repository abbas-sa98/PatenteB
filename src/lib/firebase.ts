import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, getDoc, setDoc, updateDoc, collection, getDocs, writeBatch } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { Chapter, VocabularyWord } from '../types';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId); /* CRITICAL: The app will break without this line */
export const auth = getAuth(app);

// Test Firestore connection initially
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface UserProfileData {
  userId: string;
  email?: string;
  streak: number;
  bookmarkedWordIds: string[];
  bookmarkedQuestionIds: string[];
  answeredQuestions: Record<string, 'Vero' | 'Falso'>;
  chaptersProgress: Record<string, number>;
  createdAt?: any;
  updatedAt?: any;
  isPremium?: boolean;
  paymentStatus?: 'none' | 'pending' | 'approved' | 'rejected';
  paymentReceiptName?: string;
  paymentReceiptDate?: string;
  paymentReceiptBase64?: string;
}

// Read user data from Firestore
export async function getUserProfile(userId: string): Promise<UserProfileData | null> {
  const path = `users/${userId}`;
  try {
    const userDocRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      return docSnap.data() as UserProfileData;
    }
    return null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return null;
  }
}

// Fetch all registered user profiles (admin view)
export async function getAllUserProfiles(): Promise<UserProfileData[]> {
  const path = 'users';
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const profiles: UserProfileData[] = [];
    querySnapshot.forEach((docSnap) => {
      profiles.push(docSnap.data() as UserProfileData);
    });
    return profiles;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return [];
  }
}

// Write/Save user data to Firestore
export async function saveUserProfile(userId: string, data: Partial<UserProfileData>): Promise<void> {
  const path = `users/${userId}`;
  try {
    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, {
      userId,
      ...data,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

// Read a single chapter from Firestore by ID (Lazy Load)
export async function getChapterByIdFromDb(chapterId: number): Promise<Chapter | null> {
  const path = `chapters/${chapterId}`;
  try {
    const docRef = doc(db, 'chapters', String(chapterId));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as Chapter;
    }
    return null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return null;
  }
}

// Read chapters from Firestore
export async function getChaptersFromDb(): Promise<Chapter[]> {
  const path = 'chapters';
  try {
    const querySnapshot = await getDocs(collection(db, 'chapters'));
    const chapters: Chapter[] = [];
    querySnapshot.forEach((docSnap) => {
      chapters.push(docSnap.data() as Chapter);
    });
    return chapters.sort((a, b) => a.id - b.id);
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return [];
  }
}

// Read vocabulary from Firestore
export async function getVocabularyFromDb(): Promise<VocabularyWord[]> {
  const path = 'vocabulary';
  try {
    const querySnapshot = await getDocs(collection(db, 'vocabulary'));
    const vocab: VocabularyWord[] = [];
    querySnapshot.forEach((docSnap) => {
      vocab.push(docSnap.data() as VocabularyWord);
    });
    return vocab;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return [];
  }
}

// Seed chapters & vocabulary database collections (called once when empty)
export async function seedChaptersAndVocabulary(
  chapters: Chapter[],
  vocabulary: VocabularyWord[]
): Promise<void> {
  const path = 'seeding';
  try {
    console.log("Starting chapters seeding...");
    const chapterBatch = writeBatch(db);
    chapters.forEach((champ) => {
      const chapterRef = doc(db, 'chapters', String(champ.id));
      chapterBatch.set(chapterRef, champ);
    });
    await chapterBatch.commit();
    console.log(`Seeded ${chapters.length} chapters.`);

    console.log("Starting vocabulary seeding...");
    // Split vocabulary into batches of 400 to prevent Firestore batch size limits (max 500)
    const vocabChunks: VocabularyWord[][] = [];
    const chunkSize = 400;
    for (let i = 0; i < vocabulary.length; i += chunkSize) {
      vocabChunks.push(vocabulary.slice(i, i + chunkSize));
    }

    for (const chunk of vocabChunks) {
      const vocabBatch = writeBatch(db);
      chunk.forEach((word) => {
        const wordRef = doc(db, 'vocabulary', word.id);
        vocabBatch.set(wordRef, word);
      });
      await vocabBatch.commit();
    }
    console.log(`Seeded ${vocabulary.length} vocab words successfully.`);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}
