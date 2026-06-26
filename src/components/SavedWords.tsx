import { useState } from 'react';
import { VocabularyWord, ChapterWithProgress } from '../types';
import { Volume2, Search, Trash2, BookOpen, Layers, HelpCircle, FileText, BookmarkCheck, Languages, CheckCircle2, XCircle, ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SavedWordsProps {
  words: VocabularyWord[];
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  bookmarkedQuestionIds: string[];
  onToggleBookmarkQuestion: (id: string) => void;
  chapters: ChapterWithProgress[];
}

export default function SavedWords({
  words,
  bookmarkedIds,
  onToggleBookmark,
  bookmarkedQuestionIds,
  onToggleBookmarkQuestion,
  chapters
}: SavedWordsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'words' | 'questions'>('all');
  const [showingAnswers, setShowingAnswers] = useState<Record<string, boolean>>({});
  const [translatedQuestions, setTranslatedQuestions] = useState<Record<string, boolean>>({});
  const [collapsedChapters, setCollapsedChapters] = useState<Record<number, boolean>>({});

  const toggleChapterCollapsed = (chapId: number) => {
    setCollapsedChapters(prev => ({
      ...prev,
      [chapId]: !prev[chapId]
    }));
  };

  const handleCollapseAll = () => {
    const nextCollapsed: Record<number, boolean> = {};
    chaptersWithSavedItems.forEach(item => {
      nextCollapsed[item.chapter.id] = true;
    });
    setCollapsedChapters(nextCollapsed);
  };

  const handleExpandAll = () => {
    setCollapsedChapters({});
  };

  const speakItalian = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const highlightTrickyWords = (text: string) => {
    const TRICKY_WORDS = [
      'soltanto', 'sempre', 'mai', 'unicamente', 'esclusivamente', 
      'solamente', 'ogni', 'qualsiasi', 'in ogni caso'
    ];
    
    // Pattern matches tricky words / phrases case-insensitively with boundary safety
    const pattern = new RegExp(`\\b(${TRICKY_WORDS.map(t => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})\\b`, 'gi');
    if (!pattern.test(text)) return <>{text}</>;
    
    const parts = text.split(pattern);
    return (
      <>
        {parts.map((part, index) => {
          const isTricky = TRICKY_WORDS.some(t => t.toLowerCase() === part.toLowerCase());
          if (isTricky) {
            return (
              <span
                key={index}
                className="inline-block text-red-600 font-bold border-b border-dashed border-red-400 px-0.5 bg-red-50/50 rounded-sm cursor-help whitespace-nowrap"
                title="Attenzione: questa è una parola chiave tassativa (tende a indicare risposte vere/false assolute!)"
              >
                {part}
              </span>
            );
          }
          return part;
        })}
      </>
    );
  };

  const getBookmarkedWordsInChapter = (chap: ChapterWithProgress) => {
    const wordIdsInChapter = new Set(chap.lessons.flatMap(l => l.vocabularyIds || []));
    return words.filter(w => 
      bookmarkedIds.includes(w.id) && 
      wordIdsInChapter.has(w.id) &&
      (w.italian.toLowerCase().includes(searchTerm.toLowerCase()) || 
       w.farsi.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const getBookmarkedQuestionsInChapter = (chap: ChapterWithProgress) => {
    return chap.questions.filter(q => 
      bookmarkedQuestionIds.includes(q.id) &&
      (q.italianText.toLowerCase().includes(searchTerm.toLowerCase()) || 
       q.farsiTranslation.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const handleToggleQuestionTranslate = (qId: string) => {
    setTranslatedQuestions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleToggleShowAnswer = (qId: string) => {
    setShowingAnswers(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Compile chapters containing active matches
  const chaptersWithSavedItems = chapters.map(chapter => {
    const savedWords = activeSubTab !== 'questions' ? getBookmarkedWordsInChapter(chapter) : [];
    const savedQuestions = activeSubTab !== 'words' ? getBookmarkedQuestionsInChapter(chapter) : [];
    return {
      chapter,
      savedWords,
      savedQuestions,
      totalCount: savedWords.length + savedQuestions.length
    };
  }).filter(item => item.totalCount > 0);

  const totalSavedWordsCount = words.filter(w => bookmarkedIds.includes(w.id)).length;
  const totalSavedQuestionsCount = bookmarkedQuestionIds.length;
  const grandTotalCount = totalSavedWordsCount + totalSavedQuestionsCount;

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-6" id="saved-dashboard-container">
      
      {/* Upper Main Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#1d2b3e] font-sans" id="saved-title-heading">
            Saved Library
          </h1>
          <p className="text-sm text-gray-500 mt-1 font-sans" id="saved-subtitle-paragraph">
            Manage your personal library of saved terms and practice questions grouped by chapters.
          </p>
        </div>

        {/* Total stats counters counts */}
        <div className="flex gap-2 shrink-0">
          <div className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg border border-emerald-150 text-xs font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{totalSavedWordsCount} Words Saved</span>
          </div>
          <div className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-150 text-xs font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span>{totalSavedQuestionsCount} Questions Saved</span>
          </div>
        </div>
      </div>

      {/* Grid Filter Operations Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" id="saved-controls-row">
        {/* View Mode Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-xl w-fit" id="saved-categories-tabs">
          <button
            onClick={() => setActiveSubTab('all')}
            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'all'
                ? 'bg-white text-[#1d2b3e] shadow-xs'
                : 'text-gray-500 hover:text-[#1d2b3e]'
            }`}
          >
            <Layers size={13} />
            <span>All ({grandTotalCount})</span>
          </button>
          
          <button
            onClick={() => setActiveSubTab('words')}
            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'words'
                ? 'bg-white text-[#1d2b3e] shadow-xs'
                : 'text-gray-500 hover:text-[#1d2b3e]'
            }`}
          >
            <FileText size={13} />
            <span>Words ({totalSavedWordsCount})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('questions')}
            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'questions'
                ? 'bg-white text-[#1d2b3e] shadow-xs'
                : 'text-gray-500 hover:text-[#1d2b3e]'
            }`}
          >
            <HelpCircle size={13} />
            <span>Questions ({totalSavedQuestionsCount})</span>
          </button>
        </div>

        {/* Simple Search Input */}
        <div className="relative min-w-[200px] md:w-72" id="saved-search-field-container">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search size={14} />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search within saved... / جستجو"
            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#1d2b3e] text-[#1b1b1d] transition-all font-sans"
          />
        </div>
      </div>

      {/* Chapters categorized lists displaying items */}
      <AnimatePresence mode="wait">
        {chaptersWithSavedItems.length > 0 ? (
          <motion.div
            key={`${activeSubTab}-${searchTerm}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="space-y-6"
            id="saved-chapters-categorized-list"
          >
            {/* Expand/Collapse All chapters shortcut helper links */}
            {chaptersWithSavedItems.length > 1 && (
              <div className="flex justify-end gap-3 mb-2 px-1">
                <button
                  type="button"
                  onClick={handleExpandAll}
                  className="text-[11px] font-bold text-slate-500 hover:text-[#1d2b3e] hover:underline cursor-pointer flex items-center gap-1 bg-transparent border-0"
                >
                  Expand all chapters
                </button>
                <span className="text-gray-300 text-xs">|</span>
                <button
                  type="button"
                  onClick={handleCollapseAll}
                  className="text-[11px] font-bold text-slate-500 hover:text-[#1d2b3e] hover:underline cursor-pointer flex items-center gap-1 bg-transparent border-0"
                >
                  Collapse all chapters
                </button>
              </div>
            )}

            {chaptersWithSavedItems.map(({ chapter, savedWords, savedQuestions }) => {
              const isCollapsed = !!collapsedChapters[chapter.id];
              return (
                <div 
                  key={chapter.id} 
                  className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-sm"
                >
                  
                  {/* Chapter Banner/Header Category Trigger */}
                  <button 
                    onClick={() => toggleChapterCollapsed(chapter.id)}
                    className={`w-full text-left bg-slate-50/50 p-4 px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 hover:bg-slate-100/60 transition-colors cursor-pointer select-none border-0 ${
                      !isCollapsed ? 'border-b border-gray-150' : ''
                    }`}
                  >
                    <div className="text-left">
                      <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-400">
                        CHAPTER {chapter.id} CATEGORY
                      </span>
                      <h2 className="text-base font-bold text-[#1d2b3e] tracking-tight font-sans">
                        {chapter.title}
                      </h2>
                      <p className="text-[11px] text-gray-500 mt-0.5 tracking-tight font-sans font-medium text-right sm:text-left dir-rtl max-sm:block">
                        {chapter.farsiTitle}
                      </p>
                    </div>

                    <div className="flex gap-3 items-center justify-between sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
                      <span className="text-xs font-mono font-bold text-slate-500 bg-white border border-gray-200/80 px-2.5 py-0.5 rounded-full select-none">
                        {(savedWords.length > 0 ? ` ${savedWords.length} terms` : '') + 
                         (savedWords.length > 0 && savedQuestions.length > 0 ? ' • ' : '') + 
                         (savedQuestions.length > 0 ? ` ${savedQuestions.length} questions` : '')}
                      </span>
                      <div className="p-1 rounded-lg bg-white border border-gray-200 text-gray-500 flex items-center justify-center shadow-3xs">
                        {isCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                      </div>
                    </div>
                  </button>

                  {/* Main Content inside this Chapter Card wrapped with framer-motion collapsible container */}
                  <AnimatePresence initial={false}>
                    {!isCollapsed && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 divide-y divide-gray-105 gap-6 flex flex-col md:block">
                          
                          {/* Words Segment */}
                          {savedWords.length > 0 && (
                            <div className="pb-5 md:pb-6">
                              <div className="flex items-center gap-1.5 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <h3 className="text-xs font-extrabold text-[#1d2b3e] uppercase tracking-wider font-mono">
                                  Saved Vocabulary ({savedWords.length})
                                </h3>
                              </div>
                              
                              <div className="bg-slate-50/20 rounded-xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
                                {savedWords.map((word) => (
                                  <div key={word.id} className="grid grid-cols-12 gap-3 px-4 py-3 items-center hover:bg-slate-50/30 transition-colors">
                                    {/* Italian word + audio trigger */}
                                    <div className="col-span-12 md:col-span-5 flex items-center gap-2">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          speakItalian(word.italian);
                                        }}
                                        className="p-1 px-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-[#1d2b3e] transition-all cursor-pointer flex items-center justify-center shrink-0"
                                        title="Pronunciation"
                                      >
                                        <Volume2 size={13} />
                                      </button>
                                      <div>
                                        <div className="font-semibold text-xs text-[#1d2b3e]">{word.italian}</div>
                                      </div>
                                    </div>

                                    {/* Farsi explanation */}
                                    <div className="col-span-10 md:col-span-6 text-right dir-rtl">
                                      <span className="font-medium text-xs text-slate-705 font-sans">{word.farsi}</span>
                                    </div>

                                    {/* Trash button */}
                                    <div className="col-span-2 md:col-span-1 flex justify-end">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          onToggleBookmark(word.id);
                                        }}
                                        className="p-1 px-1.5 text-gray-300 hover:text-red-650 hover:bg-red-50 rounded-md transition-all cursor-pointer"
                                        title="Delete bookmark"
                                      >
                                        <Trash2 size={13} />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Questions Segment */}
                          {savedQuestions.length > 0 && (
                            <div className="pt-5 md:pt-6 border-t border-gray-100">
                              <div className="flex items-center gap-1.5 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                <h3 className="text-xs font-extrabold text-[#1d2b3e] uppercase tracking-wider font-mono">
                                  Saved Practice Questions ({savedQuestions.length})
                                </h3>
                              </div>

                              <div className="space-y-3.5">
                                {savedQuestions.map((q) => (
                                  <div 
                                    key={q.id} 
                                    className="bg-white border border-gray-150 rounded-xl p-4 flex flex-col gap-3.5 hover:border-gray-250 transition-all shadow-2xs"
                                  >
                                    <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                                      
                                      {/* Action buttons on the right */}
                                      <div className="flex gap-1 items-center shrink-0 w-full md:w-auto md:ml-auto">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            speakItalian(q.italianText);
                                          }}
                                          className="p-1 px-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-[#1d2b3e] transition-all cursor-pointer"
                                          title="Pronunciation"
                                        >
                                          <Volume2 size={13} />
                                        </button>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggleQuestionTranslate(q.id);
                                          }}
                                          className={`p-1 px-1.5 rounded-md border text-[10px] font-bold uppercase tracking-wide transition-all cursor-pointer ${
                                            translatedQuestions[q.id]
                                              ? 'border-[#1d2b3e] bg-slate-50 text-[#1d2b3e]'
                                              : 'border-gray-250 text-gray-400 hover:text-slate-700'
                                          }`}
                                          title="Show Farsi Translation"
                                        >
                                          Farsi
                                        </button>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggleShowAnswer(q.id);
                                          }}
                                          className={`p-1 px-1.5 rounded-md border text-[10px] font-bold uppercase tracking-wide transition-all cursor-pointer ${
                                            showingAnswers[q.id]
                                              ? 'border-[#1d2b3e] bg-[#1d2b3e] text-white shadow-xs'
                                              : 'border-gray-250 text-slate-700 hover:bg-slate-55'
                                          }`}
                                          title="View correct answer"
                                        >
                                          {showingAnswers[q.id] ? "Hide Answer" : "Check Answer"}
                                        </button>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleBookmarkQuestion(q.id);
                                          }}
                                          className="p-1 px-1.5 text-gray-300 hover:text-red-650 hover:bg-red-50/70 rounded-md transition-all cursor-pointer"
                                          title="Remove question bookmark"
                                        >
                                          <Trash2 size={13} />
                                        </button>
                                      </div>
                                    </div>

                                    {/* Question Italian text */}
                                    <p className="text-[13px] text-slate-800 font-medium leading-relaxed font-sans">
                                      {highlightTrickyWords(q.italianText)}
                                    </p>

                                    {/* Translated text drawer panels */}
                                    <AnimatePresence>
                                      {translatedQuestions[q.id] && (
                                        <motion.p
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: 'auto' }}
                                          exit={{ opacity: 0, height: 0 }}
                                          className="text-xs text-gray-500 font-sans dir-rtl text-right italic font-medium leading-normal bg-slate-50/50 p-2.5 rounded-lg border border-dashed border-gray-100"
                                        >
                                          {q.farsiTranslation}
                                        </motion.p>
                                      )}
                                    </AnimatePresence>

                                    {/* Show correctness indicator */}
                                    <AnimatePresence>
                                      {showingAnswers[q.id] && (
                                        <motion.div
                                          initial={{ opacity: 0, y: -4 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -4 }}
                                          className={`p-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 ${
                                            q.correctAnswer === 'Vero'
                                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                                              : 'bg-red-50 text-red-850 border border-red-100'
                                          }`}
                                        >
                                          {q.correctAnswer === 'Vero' ? (
                                            <>
                                              <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                                              <span>Correct state: <b className="font-mono text-[10px] font-black uppercase tracking-widest">VERO</b> (True)</span>
                                            </>
                                          ) : (
                                            <>
                                              <XCircle size={14} className="text-red-550 shrink-0" />
                                              <span>Correct state: <b className="font-mono text-[10px] font-black uppercase tracking-widest">FALSO</b> (False)</span>
                                            </>
                                          )}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        ) : (
          /* Empty visual state illustration based on search / tab */
          <div className="bg-white rounded-2xl border border-gray-200 py-20 px-4 text-center">
            <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <BookmarkCheck className="text-gray-400" size={24} />
            </div>
            <h3 className="text-base font-bold text-[#1d2b3e] mb-1">Your library is currently empty</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-sans">
              {searchTerm 
                ? "No saved words or questions match your active keyword filter." 
                : "No items bookmarked! Go to local lessons and click on underlined grammar items or save important quiz statements to keep your workspace updated."}
            </p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
