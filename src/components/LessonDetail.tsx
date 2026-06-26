import { useState, useEffect } from 'react';
import { Chapter, ChapterWithProgress, VocabularyWord, QuizQuestion } from '../types';
import { ChevronDown, ChevronUp, Languages, Eye, EyeOff, Bookmark, BookmarkCheck, ArrowLeft, BrainCircuit, Sparkles, Volume2, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LessonDetailProps {
  chapter: ChapterWithProgress;
  vocabulary: VocabularyWord[];
  bookmarkedIds: string[];
  onToggleBookmark: (wordId: string) => void;
  bookmarkedQuestionIds: string[];
  onToggleBookmarkQuestion: (questionId: string) => void;
  onBack: () => void;
  onUpdateProgress: (chapterId: number, progress: number) => void;
  answeredQuestions: Record<string, 'Vero' | 'Falso'>;
  onAnswerQuestion: (questionId: string, answer: 'Vero' | 'Falso') => void;
}

export default function LessonDetail({
  chapter,
  vocabulary,
  bookmarkedIds,
  onToggleBookmark,
  bookmarkedQuestionIds,
  onToggleBookmarkQuestion,
  onBack,
  onUpdateProgress,
  answeredQuestions,
  onAnswerQuestion
}: LessonDetailProps) {
  const [translatedLessons, setTranslatedLessons] = useState<Record<string, boolean>>({});
  const [translatedQuestions, setTranslatedQuestions] = useState<Record<string, boolean>>({});
  const [showingAnswers, setShowingAnswers] = useState<Record<string, boolean>>({});
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>(() => {
    if (chapter.lessons && chapter.lessons.length > 0) {
      return { [chapter.lessons[0].id]: true };
    }
    return {};
  });
  
  // Selected word details for bottom sheet drawer
  const [activeVocab, setActiveVocab] = useState<VocabularyWord | null>(null);

  // Zoomed image modal state
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // AI Explanations cache
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>({});
  const [loadingAi, setLoadingAi] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Pronounce vocalization helper
  const speakItalian = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Keep track of calculated progress automatically
  useEffect(() => {
    const totalQuestions = chapter.questions.length;
    if (totalQuestions === 0) return;
    
    const answeredCount = chapter.questions.filter(q => answeredQuestions[q.id]).length;
    const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
    if (progressPercent !== chapter.progress) {
      onUpdateProgress(chapter.id, progressPercent);
    }
  }, [answeredQuestions, chapter.questions, chapter.id, chapter.progress, onUpdateProgress]);

  const toggleLessonTranslation = (lessonId: string) => {
    setTranslatedLessons(prev => ({
      ...prev,
      [lessonId]: !prev[lessonId]
    }));
  };

  const toggleQuestionTranslation = (qId: string) => {
    setTranslatedQuestions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const toggleShowAnswer = (qId: string) => {
    setShowingAnswers(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Render bold text helper inside explaining areas
  const renderFormattedText = (rawText: string) => {
    if (!rawText) return null;
    const parts = rawText.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-[#1d2b3e]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Helper to highlight terms inside raw lessons text with dotted underlines and highlight tricky license words in red
  const highlightVocabulary = (text: string, vocabIds: string[]) => {
    const vocabWords = vocabulary.filter(v => vocabIds.includes(v.id));
    const TRICKY_WORDS = [
      'soltanto', 'sempre', 'mai', 'unicamente', 'esclusivamente', 
      'solamente', 'ogni', 'qualsiasi', 'qualunque', 'in ogni caso', 'solo',
      'tranne', 'di norma', 'obbligatoriamente', 'obbligatorio', 'obbligatoria',
      'tutti', 'tutte', 'rapidamente', 'immediatamente', 'subito', 'chiunque',
      'completamente', 'assolutamente', 'tassativamente',
      'nessuno', 'nessuna', 'nessun', 'eccezione', 'escluso', 'esclusi',
      'esclusa', 'escluse', 'incluso', 'inclusi', 'inclusa', 'incluse',
      'generico', 'velocemente', 'solitamente'
    ];

    // Build lists of terms to search
    const allSearchItems = [
      ...vocabWords.map(w => ({ type: 'vocab' as const, value: w.italian, data: w })),
      ...TRICKY_WORDS.map(t => ({ type: 'tricky' as const, value: t }))
    ].sort((a, b) => b.value.length - a.value.length);

    if (allSearchItems.length === 0) return <>{text}</>;

    // Build regex, escaping special characters to be safe
    const pattern = new RegExp(`\\b(${allSearchItems.map(item => item.value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})\\b`, 'gi');
    
    const parts = text.split(pattern);
    return (
      <>
        {parts.map((part, index) => {
          const match = allSearchItems.find(item => item.value.toLowerCase() === part.toLowerCase());
          if (match) {
            const isTricky = TRICKY_WORDS.some(t => t.toLowerCase() === part.toLowerCase());
            
            if (match.type === 'vocab') {
              if (isTricky) {
                // Clicking vocabulary word displays translation popup, but it also has prominent red alert style
                return (
                  <span
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVocab(match.data);
                    }}
                    className="inline-block text-red-600 font-bold border-b-2 border-dotted border-red-500 cursor-pointer hover:bg-red-50 transition-colors px-0.5 rounded-sm"
                    title="Vedi traduzione Farsi (Parola chiave importante/tricky!)"
                  >
                    {part}
                  </span>
                );
              }
              return (
                <span
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVocab(match.data);
                  }}
                  className="inline-block border-b-2 border-dotted border-slate-400 cursor-pointer hover:bg-slate-100/80 transition-colors px-0.5 rounded-sm"
                  title="Vedi traduzione Farsi"
                >
                  {part}
                </span>
              );
            } else {
              // It is purely a tricky word (no vocab in lesson, but listed as alert word)
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
          }
          return part;
        })}
      </>
    );
  };

  // Query server side Gemini tutor endpoint for smart translation and interactive explanation
  const fetchAiTutorExplanation = async (text: string, type: 'question' | 'word', context: string, id: string) => {
    if (aiExplanations[id]) return; // already loaded
    
    setLoadingAi(p => ({ ...p, [id]: true }));
    try {
      const response = await fetch('/api/translate-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, context, type })
      });
      const data = await response.json();
      if (data.text) {
        setAiExplanations(p => ({ ...p, [id]: data.text }));
      } else {
        setAiExplanations(p => ({
          ...p,
          [id]: "AI explanation is temporarily unavailable."
        }));
      }
    } catch (err) {
      console.error(err);
      setAiExplanations(p => ({
        ...p,
        [id]: "Error connecting with the AI tutor server."
      }));
    } finally {
      setLoadingAi(p => ({ ...p, [id]: false }));
    }
  };

  // Custom premium SVG illustrations according to Italian regulations
  const renderSignIllustration = (type: string) => {
    switch (type) {
      case 'danger':
        return (
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
            <rect width="160" height="160" rx="8" fill="white" />
            {/* Warning triangle */}
            <polygon points="80,24 136,120 24,120" stroke="#ba1a1a" strokeWidth="8" fill="white" strokeLinejoin="miter" />
            <polygon points="80,30 131,118 29,118" stroke="white" strokeWidth="2" fill="none" />
            {/* Exclamation point mark */}
            <line x1="80" y1="60" x2="80" y2="92" stroke="black" strokeWidth="10" strokeLinecap="round" />
            <circle cx="80" cy="106" r="6" fill="black" />
          </svg>
        );
      case 'divieto':
        return (
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
            <rect width="160" height="160" rx="8" fill="white" />
            {/* Round prohibitory outline */}
            <circle cx="80" cy="80" r="48" stroke="#ba1a1a" strokeWidth="8" fill="white" />
            <line x1="48" y1="48" x2="112" y2="112" stroke="#ba1a1a" strokeWidth="8" />
          </svg>
        );
      case 'obbligo':
        return (
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
            <rect width="160" height="160" rx="8" fill="white" />
            {/* Round obligatory blue sign */}
            <circle cx="80" cy="80" r="48" fill="#1d2b3e" />
            {/* White arrow pointing right */}
            <path d="M50 80 H106 M96 68 L108 80 L96 92" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'precedenza':
        return (
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
            <rect width="160" height="160" rx="8" fill="white" />
            {/* Yield sign (upside down triangle) */}
            <polygon points="80,136 136,40 24,40" stroke="#ba1a1a" strokeWidth="8" fill="white" strokeLinejoin="miter" />
          </svg>
        );
      case 'semaforo':
        return (
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
            <rect width="160" height="160" rx="8" fill="white" />
            {/* Semaphore enclosure */}
            <rect x="64" y="32" width="32" height="96" rx="6" fill="#1b1b1d" />
            {/* Lights */}
            <circle cx="80" cy="48" r="10" fill="#ba1a1a" />
            <circle cx="80" cy="80" r="10" fill="#eab308" />
            <circle cx="80" cy="112" r="10" fill="#22c55e" />
          </svg>
        );
      case 'bike':
        return (
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
            <rect width="160" height="160" rx="8" fill="white" />
            {/* Obligatory blue circle for bike path */}
            <circle cx="80" cy="80" r="48" fill="#1d2b3e" />
            {/* Stylized white bicycle */}
            <g stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(10, 5) scale(0.85)">
              {/* Wheels */}
              <circle cx="48" cy="88" r="14" />
              <circle cx="108" cy="88" r="14" />
              {/* Frame */}
              <polygon points="48,88 74,88 86,62 60,62" />
              <polyline points="48,88 60,62 57,50 67,50" />
              <polyline points="74,88 96,62 92,48 82,48" />
              <line x1="108" y1="88" x2="96" y2="62" />
            </g>
          </svg>
        );
      case 'train':
        return (
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
            <rect width="160" height="160" rx="8" fill="white" />
            {/* Red warning triangle */}
            <polygon points="80,24 136,120 24,120" stroke="#ba1a1a" strokeWidth="8" fill="white" strokeLinejoin="miter" />
            {/* Inside railroad tracks sign or train symbol */}
            <g transform="translate(48, 64) scale(0.8)" stroke="black" strokeWidth="4" strokeLinecap="round">
              {/* Railroad parallel bars */}
              <line x1="10" y1="20" x2="70" y2="20" />
              <line x1="10" y1="40" x2="70" y2="40" />
              {/* Ties */}
              <line x1="20" y1="14" x2="20" y2="46" />
              <line x1="35" y1="14" x2="35" y2="46" />
              <line x1="50" y1="14" x2="50" y2="46" />
              <line x1="65" y1="14" x2="65" y2="46" />
            </g>
          </svg>
        );
      case 'road':
      default:
        // Precise warning Triangle "Incrocio con precedenza a destra" as shown in Image 2!
        return (
          <svg className="w-full h-full" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="160" rx="8" fill="white" />
            
            {/* Sign II.5: Intersection warning triangle */}
            <g transform="translate(10, 15) scale(0.7)">
              <polygon points="80,14 140,118 20,118" stroke="#ba1a1a" strokeWidth="9" fill="white" strokeLinejoin="miter" />
              <polygon points="80,20 135,116 25,116" stroke="white" strokeWidth="2.5" fill="none" />
              {/* Bold black crosses 'X' inside warning triangle */}
              <line x1="58" y1="56" x2="102" y2="100" stroke="black" strokeWidth="10" strokeLinecap="round" />
              <line x1="102" y1="56" x2="58" y2="100" stroke="black" strokeWidth="10" strokeLinecap="round" />
            </g>

            {/* Micro layout diagram next to sign */}
            <g transform="translate(100, 48) scale(0.9)">
              {/* Road lines */}
              <rect x="16" y="0" width="12" height="44" fill="#efedef" />
              <rect x="0" y="16" width="44" height="12" fill="#efedef" />
              {/* Central intersection node */}
              <circle cx="22" cy="22" r="1.5" fill="black" />
              {/* Red car moving onwards */}
              <rect x="20" y="28" width="4" height="7" rx="1" fill="#ba1a1a" />
              {/* Black navigation symbols */}
              <path d="M22 40 V3 Q22 3 22 3" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M40 22 H14" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
              {/* Small arrows on edges */}
              <path d="M22 5 L19 8 M22 5 L25 8" stroke="black" strokeWidth="1.2" />
              <path d="M5 22 L8 19 M5 22 L8 25" stroke="black" strokeWidth="1.2" />
            </g>
          </svg>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-6" id="lesson-detail-container">
      {/* Upper Navigation Row */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-150 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-[#1d2b3e] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Chapters</span>
        </button>
        
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-[#1d2b3e] bg-gray-100 px-2.5 py-1 rounded-full">
            Chapter {chapter.id}
          </span>
          <div className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center">
            <span className="text-xs font-bold text-[#1d2b3e]">P</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#1d2b3e] font-sans" id="chapter-title-header">
          Chapter {chapter.id} - {chapter.title}
        </h1>
        <p className="text-sm text-gray-500 font-sans mt-0.5 dir-rtl text-right">
          {chapter.farsiTitle}
        </p>
      </div>

      {/* Lesson Text Cards exactly like Image 2 */}
      <div className="flex flex-col gap-6 mb-12" id="lesson-detail-cards">
        {chapter.lessons.map((lesson) => {
          const lessonQuestions = chapter.questions.filter((q) => lesson.questionIds?.includes(q.id));
          const hasImage = !!(
            lesson.imageUrl &&
            lesson.imageUrl !== 'null' &&
            lesson.imageUrl !== 'NULL' &&
            lesson.imageUrl.trim() !== ''
          );
          const showImage = hasImage && !imageErrors[lesson.id];

          return (
            <div
              key={lesson.id}
              className="bg-white border border-gray-150 rounded-2xl p-5 md:p-6 relative flex flex-col"
            >
              {/* Header section with lesson title and Translation button */}
              <div className="flex items-center justify-between mb-3.5 border-b border-gray-100 pb-2">
                <h3 className="text-base font-bold text-[#1d2b3e] font-sans">
                  {lesson.title}
                </h3>
                <button
                  onClick={() => toggleLessonTranslation(lesson.id)}
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#1d2b3e] transition-colors cursor-pointer shrink-0"
                  id={`translate-btn-${lesson.id}`}
                >
                  <Languages size={13} />
                  <span>Translate Full Text</span>
                </button>
              </div>

              {/* Main reading content with text-wrap around the image */}
              <div className="flex-1 text-sm text-[#1b1b1d] leading-relaxed font-sans min-h-[60px] inline-block">
                {showImage && (
                  <div
                    onClick={() => setZoomedImage(lesson.imageUrl || null)}
                    className="relative group float-left mr-5 mb-3 w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-lg overflow-hidden border border-gray-150 p-1.5 flex items-center justify-center cursor-pointer transition-all hover:shadow-md hover:scale-103 shrink-0"
                    title="بزرگنمایی تصویر"
                  >
                    <img
                      src={lesson.imageUrl}
                      alt={lesson.title}
                      className="w-full h-full object-contain rounded-md animate-fade-in animate-duration-150"
                      referrerPolicy="no-referrer"
                      onError={() => setImageErrors((prev) => ({ ...prev, [lesson.id]: true }))}
                    />
                    {/* Hover Magnifying glass overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center rounded-lg">
                      <ZoomIn size={22} className="text-white drop-shadow-md scale-90 group-hover:scale-100 transition-transform duration-150" />
                    </div>
                  </div>
                )}

                <div className="whitespace-pre-line text-[#1b1b1d] font-sans">
                  {highlightVocabulary(lesson.italianText, lesson.vocabularyIds)}
                </div>

                {/* Smooth translation toggle panel */}
                <AnimatePresence>
                  {translatedLessons[lesson.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-dashed border-gray-150 pt-4 mt-4 w-full"
                    >
                      <p className="text-sm text-gray-650 leading-relaxed font-sans text-right dir-rtl whitespace-pre-line bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        {lesson.farsiTranslation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Practice Related Questions Section inside the card */}
              {lessonQuestions.length > 0 && (
                <div className="border-t border-gray-100/90 pt-4 mt-4 w-full">
                  <button
                    onClick={() => setExpandedLessons(prev => ({ ...prev, [lesson.id]: !prev[lesson.id] }))}
                    className="w-full flex items-center justify-between p-3.5 bg-slate-50/70 hover:bg-slate-50 transition-all rounded-xl border border-gray-150 cursor-pointer animate-none"
                  >
                    <div className="flex items-center gap-2.5">
                      {expandedLessons[lesson.id] ? (
                        <ChevronUp size={16} className="text-[#1d2b3e]" />
                      ) : (
                        <ChevronDown size={16} className="text-[#1d2b3e]" />
                      )}
                      <span className="text-xs font-bold text-[#1d2b3e] uppercase tracking-wider font-mono">
                        Practice related questions    ({lessonQuestions.length})
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedLessons[lesson.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white/50 rounded-xl divide-y divide-gray-100 border border-gray-100 mt-3"
                      >
                        {lessonQuestions.map((q) => {
                          return (
                            <div key={q.id} className="p-4 flex flex-col gap-3 hover:bg-slate-50/45 transition-colors">
                              {/* Top line of question item */}
                              <div className="grid grid-cols-12 gap-3 items-start">
                                
                                {/* Question Bookmark placement directly on the left */}
                                <div className="col-span-12 md:col-span-1 flex items-start pt-1 md:pt-0.5">
                                  <button
                                    onClick={() => onToggleBookmarkQuestion(q.id)}
                                    className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                                      bookmarkedQuestionIds.includes(q.id) ? 'border-emerald-250 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-400 hover:bg-slate-50'
                                    }`}
                                    title={bookmarkedQuestionIds.includes(q.id) ? "Remove Bookmark" : "Bookmark Question"}
                                  >
                                    {bookmarkedQuestionIds.includes(q.id) ? (
                                      <BookmarkCheck size={13} className="text-emerald-700" />
                                    ) : (
                                      <Bookmark size={13} />
                                    )}
                                  </button>
                                </div>

                                {/* Driving Statement content row */}
                                <div className="col-span-12 md:col-span-8 flex flex-col gap-2">
                                  <div className="text-[13px] text-slate-800 font-medium leading-relaxed font-sans">
                                    {highlightVocabulary(q.italianText, ['precedenza', 'incrocio', 'moderare_velocita', 'sorpassare'])}
                                  </div>

                                  {/* Question Farsi Translation toggle */}
                                  <AnimatePresence>
                                    {translatedQuestions[q.id] && (
                                      <motion.p
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-xs text-gray-500 font-sans dir-rtl text-right italic"
                                      >
                                        {q.farsiTranslation}
                                      </motion.p>
                                    )}
                                  </AnimatePresence>


                                </div>

                                {/* Right Hand Control Buttons columns */}
                                <div className="col-span-12 md:col-span-3 flex justify-end gap-2 items-center">
                                  <button
                                    onClick={() => speakItalian(q.italianText)}
                                    className="p-1 px-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-[#1d2b3e] transition-all cursor-pointer"
                                    title="Italian pronunciation"
                                  >
                                    <Volume2 size={13} />
                                  </button>
                                  <button
                                    onClick={() => toggleQuestionTranslation(q.id)}
                                    className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                                      translatedQuestions[q.id] ? 'border-[#1d2b3e] bg-slate-50 text-[#1d2b3e]' : 'border-gray-200 text-gray-400'
                                    }`}
                                    title="Translate"
                                  >
                                    <Languages size={13} />
                                  </button>
                                  <button
                                    onClick={() => toggleShowAnswer(q.id)}
                                    className={`p-1.5 rounded-lg border transition-all cursor-pointer flex items-center justify-center w-7 h-7 min-w-[28px] h-[28px] ${
                                      showingAnswers[q.id]
                                        ? q.correctAnswer === 'Vero'
                                          ? 'border-emerald-250 bg-emerald-50 text-emerald-700 font-bold text-xs'
                                          : 'border-rose-250 bg-rose-50 text-rose-700 font-bold text-xs'
                                        : 'border-gray-200 text-gray-400 hover:bg-slate-50'
                                    }`}
                                    title={showingAnswers[q.id] ? `Correct Answer: ${q.correctAnswer} (Click to hide)` : 'Reveal Answer'}
                                  >
                                    {showingAnswers[q.id] ? (
                                      q.correctAnswer === 'Vero' ? 'V' : 'F'
                                    ) : (
                                      <Eye size={13} />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Small floating translation window (no dim backdrop so user can see background text clearly) */}
      <AnimatePresence>
        {activeVocab && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-85 z-50 bg-white rounded-xl shadow-[0_10px_30px_rgba(15,23,42,0.18)] border border-slate-200 p-4 font-sans"
          >
            {/* Content Layout: vertical block with plenty of space for long terms/translations */}
            <div className="flex flex-col gap-3">
              {/* Top Row: Italian Vocab + Speak, Bookmarks, and Close Button */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="font-bold text-sm text-slate-900 whitespace-normal break-words tracking-tight uppercase">
                    {activeVocab.italian}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakItalian(activeVocab.italian);
                    }}
                    className="p-1 rounded-md hover:bg-slate-100 text-[#1d2b3e] transition-colors cursor-pointer shrink-0"
                    title="Pronounce"
                  >
                    <Volume2 size={14} />
                  </button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(activeVocab.id);
                    }}
                    className={`p-1 rounded-md border transition-colors cursor-pointer ${
                      bookmarkedIds.includes(activeVocab.id)
                        ? 'border-emerald-250 bg-emerald-50 text-emerald-700'
                        : 'border-slate-200 text-slate-400 hover:bg-slate-50'
                    }`}
                    title={bookmarkedIds.includes(activeVocab.id) ? "Saved Word" : "Save Word"}
                  >
                    {bookmarkedIds.includes(activeVocab.id) ? <BookmarkCheck size={13} /> : <Bookmark size={13} />}
                  </button>
                  
                  <button
                    onClick={() => setActiveVocab(null)}
                    className="p-1 rounded-md border border-slate-200 text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* Bottom Row: Persian Translation sit on its own line */}
              <div className="text-right dir-rtl w-full bg-slate-50/50 p-2.5 rounded-lg border border-slate-100/80">
                <p className="text-sm font-bold text-[#1d2b3e] tracking-normal whitespace-normal leading-relaxed break-words">
                  {activeVocab.farsi}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoomed Image Modal Overlay */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-10 backdrop-blur-xs cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 360 }}
              className="relative max-w-full max-h-full bg-white p-2 rounded-2xl shadow-2xl flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-white text-slate-900 rounded-full p-2 shadow-lg border border-slate-200 hover:bg-slate-100 transition-all cursor-pointer z-10"
                title="بستن"
              >
                <X size={16} />
              </button>
              <img
                src={zoomedImage}
                alt="Zoomed diagram"
                className="max-w-[92vw] max-h-[82vh] md:max-w-[80vw] md:max-h-[80vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
