import { useState, useEffect } from 'react';
import { initialChaptersMetadata, initialVocabulary } from './data/chapters';
import SyllabusChapters from './components/SyllabusChapters';
import LessonDetail from './components/LessonDetail';
import SavedWords from './components/SavedWords';
import ArchivioWords from './components/ArchivioWords';
import UserProfile from './components/UserProfile';
import AuthScreen from './components/AuthScreen';
import { auth, getUserProfile, saveUserProfile, getVocabularyFromDb, seedChaptersAndVocabulary, getChapterByIdFromDb } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { BookOpen, Star, User, Languages, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<'capitoli' | 'archivio' | 'salvate' | 'profilo'>('capitoli');
  
  // Selected chapter for Lesson detail view
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);

  // Authentication states
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  // Dynamic chapters and vocabulary loaded from database
  const [chapters, setChapters] = useState<any[]>(initialChaptersMetadata);
  const [vocabulary, setVocabulary] = useState<any[]>(initialVocabulary);
  const [fullChaptersCache, setFullChaptersCache] = useState<Record<number, any>>({});
  const [allLocalChapters, setAllLocalChapters] = useState<any[] | null>(null);
  const [isChapterLoading, setIsChapterLoading] = useState(false);

  // Persistence states - load initially from localStorage for seamless offline/guest transition
  const [bookmarkedWordIds, setBookmarkedWordIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('focus_drive_bookmarks_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('focus_drive_question_bookmarks_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, 'Vero' | 'Falso'>>(() => {
    try {
      const saved = localStorage.getItem('focus_drive_answers_v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [chaptersProgress, setChaptersProgress] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem('focus_drive_progress_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        const converted: Record<number, number> = {};
        Object.entries(parsed).forEach(([k, v]) => {
          converted[Number(k)] = v as number;
        });
        return converted;
      }
      return {};
    } catch {
      return {};
    }
  });
  const [streak, setStreak] = useState(3); // Default sample streaks to keep track inline

  // Premium & offline purchase states
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<'none' | 'pending' | 'approved' | 'rejected'>('none');
  const [paymentReceiptName, setPaymentReceiptName] = useState<string>('');
  const [paymentReceiptDate, setPaymentReceiptDate] = useState<string>('');
  const [paymentReceiptBase64, setPaymentReceiptBase64] = useState<string>('');
  const [isGuest, setIsGuest] = useState<boolean>(false);

  // Listen to Auth State changes and pull current synchronized profile info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        setAuthLoading(true);
        try {
          // Dynamic vocabulary loaded from database (chapters are lazy-loaded)
          let fetchedVocabulary = await getVocabularyFromDb();

          // Double check if vocabulary is outdated or empty
          let isOutdated = fetchedVocabulary.length < initialVocabulary.length;
          
          if (!isOutdated) {
            // Verify vocabulary entry details
            for (const localVocab of initialVocabulary) {
              const dbVocab = fetchedVocabulary.find(v => v.id === localVocab.id);
              if (!dbVocab || dbVocab.italian !== localVocab.italian || dbVocab.farsi !== localVocab.farsi) {
                isOutdated = true;
                break;
              }
            }
          }

          if (user.email === "akhavi98@gmail.com") {
             // Admin check if chapters are seeded
             const tryCh1 = await getChapterByIdFromDb(1);
             if (!tryCh1 || isOutdated) {
                console.log("Database collections are empty or outdated. Seeding initial chapters and vocabulary as admin...");
                // Lazy-load all chapter modules for seeding
                const allChapters = [];
                for (let i = 1; i <= 30; i++) {
                   const mod = await import(`./data/chapters/chapter${i}.ts`);
                   allChapters.push(mod[`chapter${i}`]);
                }
                await seedChaptersAndVocabulary(allChapters, initialVocabulary);
                fetchedVocabulary = await getVocabularyFromDb();
             }
          }

          if (fetchedVocabulary.length > 0) {
            setVocabulary(fetchedVocabulary);
          }

          const profile = await getUserProfile(user.uid);
          if (profile) {
            if (!profile.email && user.email) {
              await saveUserProfile(user.uid, { email: user.email });
            }
            const activeWords = profile.bookmarkedWordIds || [];
            const activeQuestions = profile.bookmarkedQuestionIds || [];
            const activeAnswers = profile.answeredQuestions || {};

            setBookmarkedWordIds(activeWords);
            setBookmarkedQuestionIds(activeQuestions);
            setAnsweredQuestions(activeAnswers);

            // Keep local storage perfectly updated so page refreshes don't fall back to older guest state
            localStorage.setItem('focus_drive_bookmarks_v1', JSON.stringify(activeWords));
            localStorage.setItem('focus_drive_question_bookmarks_v1', JSON.stringify(activeQuestions));
            localStorage.setItem('focus_drive_answers_v1', JSON.stringify(activeAnswers));
            
            setIsPremium(profile.isPremium || false);
            setPaymentStatus(profile.paymentStatus || 'none');
            setPaymentReceiptName(profile.paymentReceiptName || '');
            setPaymentReceiptDate(profile.paymentReceiptDate || '');
            setPaymentReceiptBase64(profile.paymentReceiptBase64 || '');
            
            if (profile.chaptersProgress) {
              const converted: Record<number, number> = {};
              Object.entries(profile.chaptersProgress).forEach(([k, v]) => {
                converted[Number(k)] = v as number;
              });
              setChaptersProgress(converted);
              localStorage.setItem('focus_drive_progress_v1', JSON.stringify(converted));
            } else {
              setChaptersProgress({});
              localStorage.setItem('focus_drive_progress_v1', JSON.stringify({}));
            }
            setStreak(profile.streak !== undefined ? profile.streak : 3);
          } else {
            // First-time load for user - save a base profile from pre-existing local states if any
            let finalWords = bookmarkedWordIds;
            let finalQuestions = bookmarkedQuestionIds;
            let finalAnswers = answeredQuestions;
            let finalProgress = chaptersProgress;

            try {
              const savedWords = localStorage.getItem('focus_drive_bookmarks_v1');
              if (savedWords) finalWords = JSON.parse(savedWords);
              
              const savedQuestions = localStorage.getItem('focus_drive_question_bookmarks_v1');
              if (savedQuestions) finalQuestions = JSON.parse(savedQuestions);
              
              const savedAnswers = localStorage.getItem('focus_drive_answers_v1');
              if (savedAnswers) finalAnswers = JSON.parse(savedAnswers);
              
              const savedProgress = localStorage.getItem('focus_drive_progress_v1');
              if (savedProgress) finalProgress = JSON.parse(savedProgress);
            } catch (err) {
              console.error("Error reading localStorage for first-time profile creation", err);
            }

            const initialMap: Record<string, number> = {};
            Object.entries(finalProgress).forEach(([k, v]) => {
              initialMap[String(k)] = v as number;
            });

            await saveUserProfile(user.uid, {
              userId: user.uid,
              email: user.email || '',
              streak: 3,
              bookmarkedWordIds: finalWords,
              bookmarkedQuestionIds: finalQuestions,
              answeredQuestions: finalAnswers,
              chaptersProgress: initialMap,
              isPremium: false,
              paymentStatus: 'none',
              paymentReceiptName: '',
              paymentReceiptDate: '',
              paymentReceiptBase64: '',
              createdAt: new Date().toISOString()
            });

            setBookmarkedWordIds(finalWords);
            setBookmarkedQuestionIds(finalQuestions);
            setAnsweredQuestions(finalAnswers);
            setChaptersProgress(finalProgress);

            setIsPremium(false);
            setPaymentStatus('none');
            setPaymentReceiptName('');
            setPaymentReceiptDate('');
            setPaymentReceiptBase64('');
          }
        } catch (err) {
          console.error("Could not load user profile metadata from Firestore", err);
        }
      } else {
        // Safe transfer state to guest/local profiles upon logout so user actions are not wiped
        try {
          const savedWords = localStorage.getItem('focus_drive_bookmarks_v1');
          setBookmarkedWordIds(savedWords ? JSON.parse(savedWords) : []);
          
          const savedQuestions = localStorage.getItem('focus_drive_question_bookmarks_v1');
          setBookmarkedQuestionIds(savedQuestions ? JSON.parse(savedQuestions) : []);
          
          const savedAnswers = localStorage.getItem('focus_drive_answers_v1');
          setAnsweredQuestions(savedAnswers ? JSON.parse(savedAnswers) : {});
          
          const savedProgress = localStorage.getItem('focus_drive_progress_v1');
          if (savedProgress) {
            const parsed = JSON.parse(savedProgress);
            const converted: Record<number, number> = {};
            Object.entries(parsed).forEach(([k, v]) => {
              converted[Number(k)] = v as number;
            });
            setChaptersProgress(converted);
          } else {
            setChaptersProgress({});
          }
        } catch (localErr) {
          console.error("Error restoring guest data from localStorage on logout:", localErr);
          setBookmarkedWordIds([]);
          setBookmarkedQuestionIds([]);
          setAnsweredQuestions({});
          setChaptersProgress({});
        }
        
        setStreak(3);
        setChapters(initialChaptersMetadata);
        setVocabulary(initialVocabulary);
        
        setIsPremium(false);
        setPaymentStatus('none');
        setPaymentReceiptName('');
        setPaymentReceiptDate('');
        setPaymentReceiptBase64('');
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Update bookmarks helper
  const handleToggleBookmark = (id: string) => {
    let freshBookmarks: string[] = [];
    if (bookmarkedWordIds.includes(id)) {
      freshBookmarks = bookmarkedWordIds.filter(wordId => wordId !== id);
    } else {
      freshBookmarks = [...bookmarkedWordIds, id];
    }
    setBookmarkedWordIds(freshBookmarks);
    localStorage.setItem('focus_drive_bookmarks_v1', JSON.stringify(freshBookmarks));

    if (currentUser) {
      saveUserProfile(currentUser.uid, { bookmarkedWordIds: freshBookmarks });
    }
  };

  // Update question bookmarks helper
  const handleToggleBookmarkQuestion = (id: string) => {
    let freshQuestionBookmarks: string[] = [];
    if (bookmarkedQuestionIds.includes(id)) {
      freshQuestionBookmarks = bookmarkedQuestionIds.filter(qId => qId !== id);
    } else {
      freshQuestionBookmarks = [...bookmarkedQuestionIds, id];
    }
    setBookmarkedQuestionIds(freshQuestionBookmarks);
    localStorage.setItem('focus_drive_question_bookmarks_v1', JSON.stringify(freshQuestionBookmarks));

    if (currentUser) {
      saveUserProfile(currentUser.uid, { bookmarkedQuestionIds: freshQuestionBookmarks });
    }
  };

  // Update answered question helper
  const handleAnswerQuestion = (qId: string, answer: 'Vero' | 'Falso') => {
    const updatedAnswers = {
      ...answeredQuestions,
      [qId]: answer
    };
    setAnsweredQuestions(updatedAnswers);
    localStorage.setItem('focus_drive_answers_v1', JSON.stringify(updatedAnswers));

    if (currentUser) {
      saveUserProfile(currentUser.uid, { answeredQuestions: updatedAnswers });
    }
  };

  // Sync database with local code configuration
  const handleSyncDb = async () => {
    try {
      const allChapters = [];
      for (let i = 1; i <= 30; i++) {
        const mod = await import(`./data/chapters/chapter${i}.ts`);
        allChapters.push(mod[`chapter${i}`]);
      }
      await seedChaptersAndVocabulary(allChapters, initialVocabulary);
      // We don't fetch all chapters anymore, just refresh vocabulary
      const fetchedVocabulary = await getVocabularyFromDb();
      if (fetchedVocabulary.length > 0) {
        setVocabulary(fetchedVocabulary);
      }
    } catch (err) {
      console.error("Failed to sync database", err);
      throw err;
    }
  };

  // Sync profile data dynamically with database after key changes
  const handleRefreshProfile = async () => {
    if (!currentUser) return;
    try {
      const profile = await getUserProfile(currentUser.uid);
      if (profile) {
        setIsPremium(profile.isPremium || false);
        setPaymentStatus(profile.paymentStatus || 'none');
        setPaymentReceiptName(profile.paymentReceiptName || '');
        setPaymentReceiptDate(profile.paymentReceiptDate || '');
        setPaymentReceiptBase64(profile.paymentReceiptBase64 || '');
      }
    } catch (err) {
      console.error("Could not refresh premium status", err);
    }
  };

  // Update chapters completion percentage
  const handleUpdateProgress = (chapterId: number, progress: number) => {
    const updatedProgress = {
      ...chaptersProgress,
      [chapterId]: progress
    };
    setChaptersProgress(updatedProgress);
    localStorage.setItem('focus_drive_progress_v1', JSON.stringify(updatedProgress));

    if (currentUser) {
      const dbFormat: Record<string, number> = {};
      Object.entries(updatedProgress).forEach(([k, v]) => {
        dbFormat[String(k)] = v as number;
      });
      saveUserProfile(currentUser.uid, { chaptersProgress: dbFormat });
    }
  };

  // Synchronize internal mock chapter progress based on state
  const chaptersWithUpdatedProgress = chapters.map(chapter => {
    const calculatedProgress = chaptersProgress[chapter.id] !== undefined 
      ? chaptersProgress[chapter.id] 
      : 0;
    return {
      ...chapter,
      progress: calculatedProgress
    };
  });

  useEffect(() => {
    if (activeTab === 'salvate' && !allLocalChapters) {
      setIsChapterLoading(true);
      (async () => {
        try {
          const imports = [];
          for (let i = 1; i <= 30; i++) {
            imports.push(import(`./data/chapters/chapter${i}.ts`));
          }
          const results = await Promise.all(imports);
          const fullArr = results.map((r, i) => r[`chapter${i+1}`]);
          setAllLocalChapters(fullArr);
        } catch(e) {
          console.error(e);
        } finally {
          setIsChapterLoading(false);
        }
      })();
    }
  }, [activeTab, allLocalChapters]);

  const handleSelectChapter = async (chapterId: number) => {
    setIsChapterLoading(true);
    let fullChapter = fullChaptersCache[chapterId];
    
    if (!fullChapter) {
      try {
        fullChapter = await getChapterByIdFromDb(chapterId);
        if (!fullChapter || !fullChapter.lessons) {
           console.log(`Fallback local load for chapter ${chapterId}...`);
           const mod = await import(`./data/chapters/chapter${chapterId}.ts`);
           fullChapter = mod[`chapter${chapterId}`];
        }
        setFullChaptersCache(prev => ({ ...prev, [chapterId]: fullChapter }));
      } catch(e) {
        console.error(e);
      }
    }
    
    setSelectedChapterId(chapterId);
    setIsChapterLoading(false);
  };

  const selectedChapterBase = selectedChapterId ? fullChaptersCache[selectedChapterId] : null;
  const selectedChapter = selectedChapterBase ? {
    ...selectedChapterBase,
    progress: chaptersProgress[selectedChapterBase.id] || 0
  } : null;

  // loading splash screen
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#fbf9fa] flex flex-col items-center justify-center font-sans text-slate-500 gap-3" id="app-auth-loader">
        <Loader2 className="animate-spin text-[#1d2b3e]" size={28} />
        <span className="text-[10px] uppercase font-mono tracking-widest font-black text-gray-400">
          Loading synchronized session...
        </span>
      </div>
    );
  }

  // If no user is signed in, force visual login and registration modal view
  if (!currentUser && !isGuest) {
    return (
      <div className="min-h-screen bg-[#fbf9fa] flex flex-col font-sans text-[#1b1b1d] justify-between pb-12" id="focus-drive-root-anonymous">
        {/* Sleek logo header */}
        <header className="bg-white border-b border-gray-150 py-4 px-6 font-sans">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="font-bold text-lg text-[#1d2b3e] tracking-tight select-none">
              Guida Sicura
            </span>
          </div>
        </header>

        <AuthScreen 
          onAuthSuccess={() => {
            setIsGuest(false);
            setActiveTab('capitoli');
          }} 
          onContinueAsGuest={() => {
            setIsGuest(true);
            setActiveTab('capitoli');
          }}
        />

        <footer className="text-center font-sans text-slate-400 text-[10px] uppercase tracking-wider font-bold">
          © 2026 Patente Focus - Educational System
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbf9fa] flex flex-col font-sans text-[#1b1b1d]" id="focus-drive-root">
      
      {/* Absolute Header exactly like Guida Sicura top bar in Image 3 */}
      <header className="sticky top-0 bg-white border-b border-gray-150 z-40 navbar-container px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-10">
            {/* Logo Brand Title */}
            <span
              onClick={() => {
                setSelectedChapterId(null);
                setActiveTab('capitoli');
              }}
              className="font-bold text-lg text-[#1d2b3e] tracking-tight hover:opacity-90 transition-all cursor-pointer select-none"
            >
              Guida Sicura
            </span>
 
            {/* Main Tabs Navigation */}
            <nav className="hidden md:flex items-center gap-1.5 h-full">
              <button
                onClick={() => {
                  setSelectedChapterId(null);
                  setActiveTab('capitoli');
                }}
                className={`px-3 py-1.5 mt-0.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeTab === 'capitoli'
                    ? 'text-[#1d2b3e] bg-slate-50'
                    : 'text-gray-400 hover:text-slate-800'
                }`}
              >
                Chapters
              </button>
              <button
                onClick={() => {
                  setSelectedChapterId(null);
                  setActiveTab('archivio');
                }}
                className={`px-3 py-1.5 mt-0.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeTab === 'archivio'
                    ? 'text-[#1d2b3e] bg-slate-50'
                    : 'text-gray-400 hover:text-slate-800'
                }`}
              >
                Archive
              </button>
              <button
                onClick={() => {
                  setSelectedChapterId(null);
                  setActiveTab('salvate');
                }}
                className={`px-3 py-1.5 mt-0.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeTab === 'salvate'
                    ? 'text-[#1d2b3e] bg-slate-50'
                    : 'text-gray-400 hover:text-slate-800'
                }`}
              >
                Saved
              </button>
              <button
                onClick={() => {
                  setSelectedChapterId(null);
                  setActiveTab('profilo');
                }}
                className={`px-3 py-1.5 mt-0.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeTab === 'profilo'
                    ? 'text-[#1d2b3e] bg-slate-50'
                    : 'text-gray-400 hover:text-slate-800'
                }`}
              >
                Profile
              </button>
            </nav>
          </div>
 
          {/* Profile Quick trigger with user insignia */}
          <div className="flex items-center gap-3">
            {isGuest ? (
              <button
                onClick={() => {
                  setIsGuest(false);
                  setActiveTab('capitoli');
                }}
                className="p-1 px-3 rounded-md text-[10px] uppercase font-mono tracking-wider font-extrabold border border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100/85 transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                Sign In / Sign Up
              </button>
            ) : (
              <button
                onClick={() => {
                  setSelectedChapterId(null);
                  setActiveTab('profilo');
                }}
                className="p-1 px-1.5 rounded-md hover:bg-slate-50 border border-gray-200 text-gray-400 hover:text-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
                title="User Profile"
              >
                <User size={16} />
                <span className="hidden md:inline text-[10px] uppercase font-mono tracking-wider font-bold">
                  {currentUser?.email?.split('@')[0]}
                </span>
              </button>
            )}
          </div>
        </div>
      </header>
 
      {/* Main Container Area with dynamic transition viewports */}
      <main className="flex-grow py-8 max-w-5xl w-full mx-auto animate-fade-in" id="focus-drive-main-viewport">
        <AnimatePresence mode="wait">
          {/* If a chapter is selected, we force rendering Chapter active lesson detail details, otherwise tabs */}
          {selectedChapterId !== null && selectedChapter ? (
            <motion.div
              key="chapter-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <LessonDetail
                chapter={selectedChapter}
                vocabulary={vocabulary}
                bookmarkedIds={bookmarkedWordIds}
                onToggleBookmark={handleToggleBookmark}
                bookmarkedQuestionIds={bookmarkedQuestionIds}
                onToggleBookmarkQuestion={handleToggleBookmarkQuestion}
                onBack={() => setSelectedChapterId(null)}
                onUpdateProgress={handleUpdateProgress}
                answeredQuestions={answeredQuestions}
                onAnswerQuestion={handleAnswerQuestion}
              />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              {activeTab === 'capitoli' && (
                <div className="relative">
                  {isChapterLoading && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center rounded-2xl">
                       <Loader2 className="animate-spin text-[#1d2b3e]" size={32} />
                    </div>
                  )}
                  <SyllabusChapters
                    chapters={chaptersWithUpdatedProgress}
                    onSelectChapter={handleSelectChapter}
                    answeredQuestions={answeredQuestions}
                    isPremium={isPremium}
                    onGoToProfile={() => setActiveTab('profilo')}
                  />
                </div>
              )}
              {activeTab === 'archivio' && (
                <ArchivioWords
                  words={vocabulary}
                  bookmarkedIds={bookmarkedWordIds}
                  onToggleBookmark={handleToggleBookmark}
                />
              )}
              {activeTab === 'salvate' && (
                <div className="relative">
                  {isChapterLoading && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center rounded-2xl">
                       <Loader2 className="animate-spin text-[#1d2b3e]" size={32} />
                    </div>
                  )}
                  <SavedWords
                    words={vocabulary}
                    bookmarkedIds={bookmarkedWordIds}
                    onToggleBookmark={handleToggleBookmark}
                    bookmarkedQuestionIds={bookmarkedQuestionIds}
                    onToggleBookmarkQuestion={handleToggleBookmarkQuestion}
                    chapters={allLocalChapters ? allLocalChapters.map(c => ({...c, progress: chaptersProgress[c.id] || 0})) : []}
                  />
                </div>
              )}
              {activeTab === 'profilo' && (
                <UserProfile
                  streak={streak}
                  bookmarkedCount={bookmarkedWordIds.length}
                  answeredCount={Object.keys(answeredQuestions).length}
                  chaptersProgress={chaptersProgress}
                  onSyncDb={handleSyncDb}
                  isAdmin={currentUser?.email === 'akhavi98@gmail.com'}
                  isPremium={isPremium}
                  paymentStatus={paymentStatus}
                  paymentReceiptName={paymentReceiptName}
                  paymentReceiptDate={paymentReceiptDate}
                  paymentReceiptBase64={paymentReceiptBase64}
                  onRefreshProfile={handleRefreshProfile}
                  isGuest={isGuest}
                  onSignInRequest={() => {
                    setIsGuest(false);
                    setActiveTab('capitoli');
                  }}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
 
      {/* Mobile Sticky Tab Navigation */}
      <div className="md:hidden sticky bottom-0 bg-white border-t border-gray-150 py-2.5 px-4 flex justify-between items-center z-40 shadow-sm" id="mobile-sticky-nav-menu">
        <button
          onClick={() => {
            setSelectedChapterId(null);
            setActiveTab('capitoli');
          }}
          className={`flex flex-col items-center gap-1 flex-1 text-center cursor-pointer ${activeTab === 'capitoli' && selectedChapterId === null ? 'text-[#1d2b3e]' : 'text-gray-400'}`}
        >
          <BookOpen size={16} />
          <span className="text-[10px] uppercase tracking-wider font-bold">Chapters</span>
        </button>
        <button
          onClick={() => {
            setSelectedChapterId(null);
            setActiveTab('archivio');
          }}
          className={`flex flex-col items-center gap-1 flex-1 text-center cursor-pointer ${activeTab === 'archivio' ? 'text-[#1d2b3e]' : 'text-gray-400'}`}
        >
          <Languages size={16} />
          <span className="text-[10px] uppercase tracking-wider font-bold">Archive</span>
        </button>
        <button
          onClick={() => {
            setSelectedChapterId(null);
            setActiveTab('salvate');
          }}
          className={`flex flex-col items-center gap-1 flex-1 text-center cursor-pointer ${activeTab === 'salvate' ? 'text-[#1d2b3e]' : 'text-gray-400'}`}
        >
          <Star size={16} />
          <span className="text-[10px] uppercase tracking-wider font-bold">Saved</span>
        </button>
        <button
          onClick={() => {
            setSelectedChapterId(null);
            setActiveTab('profilo');
          }}
          className={`flex flex-col items-center gap-1 flex-1 text-center cursor-pointer ${activeTab === 'profilo' ? 'text-[#1d2b3e]' : 'text-gray-400'}`}
        >
          <User size={16} />
          <span className="text-[10px] uppercase tracking-wider font-bold">Profile</span>
        </button>
      </div>
 
      {/* Persistent Visual Footer exactly like the bottom area of Image 2 & 3 */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-16 font-sans py-12 px-6 text-slate-500 text-xs">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6" id="footer-groudings-details">
          <div>
            <h4 className="text-sm font-bold text-[#1d2b3e] tracking-tight">PATENTE FOCUS</h4>
            <p className="text-gray-400 mt-1 max-w-sm">
              Cognitive learning methodology with bilingual focus designed for international students.
            </p>
            <p className="text-gray-400/80 mt-2 font-mono text-[10px]">
              © 2026 Patente Focus - Educational System. All rights reserved.
            </p>
          </div>
 
          <div className="flex gap-4 font-semibold text-slate-600">
            <a href="#" className="hover:text-[#1d2b3e] transition-colors">Methodology</a>
            <a href="#" className="hover:text-[#1d2b3e] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#1d2b3e] transition-colors">Support</a>
          </div>
        </div>
      </footer>
 
    </div>
  );
}
