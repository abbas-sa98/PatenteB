import { useState } from 'react';
import { ChapterWithProgress } from '../types';
import { BookOpen, CheckCircle, ArrowRight, Lock, Phone, MessageSquare, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SyllabusChaptersProps {
  chapters: ChapterWithProgress[];
  onSelectChapter: (chapterId: number) => void;
  answeredQuestions: Record<string, string>;
  isPremium: boolean;
  onGoToProfile?: () => void;
}

export default function SyllabusChapters({ chapters, onSelectChapter, answeredQuestions, isPremium, onGoToProfile }: SyllabusChaptersProps) {
  const [selectedLockedCh, setSelectedLockedCh] = useState<ChapterWithProgress | null>(null);

  const handleChapterClick = (chapter: ChapterWithProgress) => {
    if (chapter.id > 1 && !isPremium) {
      setSelectedLockedCh(chapter);
    } else {
      onSelectChapter(chapter.id);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-6" id="syllabus-container">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#1d2b3e] font-sans" id="syllabus-title">
          Study Syllabus
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-sans" id="syllabus-subtitle">
          Select a chapter to start your driving license exam preparation. Chapter 1 is completely free!
        </p>
      </div>

      {/* Chapters list exactly like Image 3 */}
      <div className="flex flex-col gap-3 mb-10" id="chapters-list-wrapper">
        {chapters.map((chapter) => {
          const isChapterLocked = chapter.id > 1 && !isPremium;
          return (
            <motion.div
              key={chapter.id}
              whileHover={{ y: -1, scale: 1.002 }}
              onClick={() => handleChapterClick(chapter)}
              className="flex items-center justify-between p-5 bg-white border border-gray-150 rounded-xl cursor-pointer hover:bg-[#fbf9fa] transition-all group relative overflow-hidden"
              id={`chapter-card-${chapter.id}`}
            >
              {isChapterLocked && (
                <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 border-b border-l border-gray-150 rounded-bl-xl flex items-center justify-center text-slate-400 group-hover:text-amber-500 transition-colors">
                  <Lock size={14} />
                </div>
              )}

              <div className="flex items-center gap-4">
                {/* Circular Badge for index */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm ${
                    chapter.progress === 100
                      ? 'bg-emerald-50 text-emerald-600'
                      : isChapterLocked
                      ? 'bg-slate-50 text-slate-400 border border-slate-100'
                      : 'bg-[#efedef] text-gray-400 group-hover:text-[#1d2b3e]'
                  } transition-colors`}
                >
                  {isChapterLocked ? <Lock size={14} className="text-slate-400" /> : chapter.id}
                </div>

                {/* Title & translation */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm text-[#1d2b3e] tracking-tight group-hover:text-[#1d2b3e]/80 transition-colors">
                      {chapter.title}
                    </h3>
                    {isChapterLocked && (
                      <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 font-sans dir-rtl text-left">
                    {chapter.farsiTitle}
                  </p>
                </div>
              </div>

              {/* Action transition indicator */}
              <div className="flex items-center gap-4 pr-4">
                {isChapterLocked ? (
                  <span className="text-xs text-slate-400 font-mono group-hover:text-slate-650 transition-colors">Locked</span>
                ) : (
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-[#1d2b3e] transition-colors" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Locked Content Modal Popup Overlay */}
      <AnimatePresence>
        {selectedLockedCh && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-white rounded-3xl border border-slate-150 max-w-md w-full p-6 md:p-8 shadow-xl flex flex-col gap-6 relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedLockedCh(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 p-1.5 hover:bg-slate-50 rounded-full transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Header Accent */}
              <div className="flex flex-col items-center text-center gap-3 mt-2">
                <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 border border-amber-100 shadow-2xs">
                  <Lock size={22} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest font-bold uppercase font-mono text-[#1d2b3e]/60">
                    Chapter {selectedLockedCh.id} Locked
                  </span>
                  <h3 className="text-lg font-bold text-[#1d2b3e] font-sans mt-0.5 tracking-tight px-4">
                    {selectedLockedCh.title}
                  </h3>
                </div>
              </div>

              {/* Core required prompt message exactly as formatted */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center">
                <p className="text-slate-700 text-sm font-medium leading-relaxed font-sans whitespace-pre-line">
                  To purchase the full course for €20, please contact us using one of the communication methods listed below.

                  Thank you.
                </p>
              </div>

              {/* Direct Communication Channels Grid */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] tracking-wider uppercase font-extrabold font-mono text-slate-400 text-center">
                  Direct Contact Methods
                </span>
                
                <a 
                  href="https://wa.me/393757444945" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-[#25d366]/20 bg-[#25d366]/5 hover:bg-[#25d366]/10 text-[#128c7e] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare size={16} className="text-[#25d366]" />
                    <span className="text-xs font-bold font-sans">WhatsApp Chat Support</span>
                  </div>
                  <span className="text-[10px] font-mono select-all bg-white border border-[#25d366]/10 px-2 py-0.5 rounded text-slate-600">+39 375 744 4945</span>
                </a>

                <a 
                  href="https://t.me/PatenteFocus" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-[#0088cc]/20 bg-[#0088cc]/5 hover:bg-[#0088cc]/10 text-[#006699] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone size={16} className="text-[#0088cc]" />
                    <span className="text-xs font-bold font-sans">Telegram Account</span>
                  </div>
                  <span className="text-[10px] font-mono select-all bg-white border border-[#0088cc]/10 px-2 py-0.5 rounded text-slate-600">@PatenteFocus</span>
                </a>

                <a 
                  href="mailto:akhavi98@gmail.com?subject=Patente Focus Course Access €20"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail size={16} className="text-slate-500" />
                    <span className="text-xs font-bold font-sans">Email Support</span>
                  </div>
                  <span className="text-[10px] font-mono select-all bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600">akhavi98@gmail.com</span>
                </a>
              </div>


            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Aesthetic Glowing Road SVG Graphic exactly like the blurred image at bottom of Image 3 */}
      <div className="w-full h-40 bg-zinc-950 rounded-2xl overflow-hidden relative border border-transparent shadow-xs mb-4">
        {/* Dynamic Abstract Road Line Track */}
        <svg className="w-full h-full absolute inset-0 opacity-80" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="road-glow" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1d2b3e" stopOpacity="0" />
              <stop offset="35%" stopColor="#64748b" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#64748b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1d2b3e" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="ambience" cx="50%" cy="100%" r="90%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#090d16" stopOpacity="0.95" />
            </radialGradient>
          </defs>
          {/* Ambient space */}
          <rect width="800" height="200" fill="url(#ambience)" />
          
          {/* Simulated highway lane mark perspective */}
          <path d="M-100 180 C 200 130, 600 130, 900 180" stroke="url(#road-glow)" strokeWidth="6" strokeLinecap="round" />
          <path d="M-100 160 C 200 110, 600 110, 900 165" stroke="url(#road-glow)" strokeWidth="1.5" strokeDasharray="16, 24" />
          <path d="M-100 140 C 200 95, 600 95, 900 140" stroke="#334155" strokeWidth="1" strokeOpacity="0.4" />
          <path d="M400 0 L400 80" stroke="#cbd5e1" strokeWidth="0.5" strokeOpacity="0.1" />
        </svg>

        <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex flex-col justify-end p-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#9eadc5] font-mono">
            Focus Drive Strategy
          </span>
          <h4 className="text-white font-bold text-base mt-1 tracking-tight">
            Bilingual Italian Driving License Tutor
          </h4>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Practice with interactive lexical analysis, translated vocabulary, and driver safety theory insights in Persian/Farsi.
          </p>
        </div>
      </div>
    </div>
  );
}
