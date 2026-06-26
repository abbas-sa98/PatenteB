export interface VocabularyWord {
  id: string;
  italian: string;
  farsi: string;
  explanation?: string; // Quick explanation/definition in Italian
  farsiExplanation?: string; // Farsi explanation
  isBookmarked?: boolean;
}

export interface QuizQuestion {
  id: string;
  italianText: string;
  farsiTranslation: string;
  correctAnswer: 'Vero' | 'Falso';
  userAnswer?: 'Vero' | 'Falso' | null;
  explanation?: string; // Smart explanation
}

export interface LessonSection {
  id: string;
  title: string;
  italianText: string;
  farsiTranslation: string;
  imageUrl?: string; // Optional custom uploaded image URL for this lesson
  vocabularyIds: string[]; // List of vocabulary IDs associated with this lesson
  questionIds: string[]; // List of quiz question IDs associated with this lesson
}

export interface Chapter {
  id: number;
  title: string;
  farsiTitle: string;
  lessons: LessonSection[];
  questions: QuizQuestion[];
}

export interface ChapterWithProgress extends Chapter {
  progress: number;
}

export interface UserProgressState {
  completedChapters: Record<number, boolean>;
  chapterProgress: Record<number, number>;
  bookmarkedWordIds: string[];
  viewedQuestions: string[];
  streak: number;
  lastPracticeDate?: string;
  answeredQuestions: Record<string, 'Vero' | 'Falso'>;
}
