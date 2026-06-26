import { useState } from 'react';
import { VocabularyWord } from '../types';
import { Search, Volume2, Bookmark, BookmarkCheck, LayoutGrid, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ArchivioWordsProps {
  words: VocabularyWord[];
  bookmarkedIds: string[];
  onToggleBookmark: (wordId: string) => void;
}

export default function ArchivioWords({ words, bookmarkedIds, onToggleBookmark }: ArchivioWordsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null);

  const filteredWords = words.filter(
    (word) =>
      word.italian.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.farsi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const speakItalian = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-6" id="archivio-container">
      {/* Top Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#1d2b3e] font-sans">
          Vocabulary Archive
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-sans">
          Comprehensive driver license glossary featuring Farsi translations, audio, and bilingual study guides.
        </p>
      </div>

      {/* Search and counters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <div className="relative flex-1 w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search terms in Italian or Persian... / واژه خود را جستجو کنید"
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1d2b3e] text-[#1b1b1d] font-sans"
          />
        </div>
        <div className="text-xs font-mono font-bold text-gray-400 self-end md:self-center bg-gray-50 border border-gray-150 px-3 py-1.5 rounded-md min-w-[100px] text-center">
          {filteredWords.length} Words
        </div>
      </div>

      {/* Dictionary dynamic list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWords.map((word) => {
          const isSaved = bookmarkedIds.includes(word.id);
          return (
            <div
              key={word.id}
              onClick={() => setSelectedWord(word)}
              className="bg-white border border-gray-150 rounded-xl p-4 cursor-pointer hover:bg-slate-50/50 transition-all flex flex-col justify-between group h-36"
            >
              <div>
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-[#1d2b3e] text-sm group-hover:text-slate-800 transition-colors truncate">
                    {word.italian}
                  </h4>
                  
                  {/* Action row with bookmark and voice */}
                  <div className="flex gap-1 items-center" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => speakItalian(word.italian)}
                      className="p-1 px-1.5 text-gray-400 hover:text-slate-800 hover:bg-gray-100 rounded"
                    >
                      <Volume2 size={13} />
                    </button>
                    <button
                      onClick={() => onToggleBookmark(word.id)}
                      className={`p-1.5 rounded-md transition-colors ${
                        isSaved ? 'text-emerald-600 hover:text-emerald-700' : 'text-gray-300 hover:text-slate-700'
                      }`}
                    >
                      {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-1 line-clamp-2 max-w-xs">
                  {word.explanation || "No Italian definition available."}
                </p>
              </div>

              {/* Farsi part */}
              <div className="text-right dir-rtl font-sans border-t border-gray-100 pt-2 mt-2">
                <span className="text-xs font-bold text-[#1d2b3e] font-sans">
                  {word.farsi}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Term detail display modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-lg border border-gray-100 flex flex-col gap-4 relative"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-[#1d2b3e] tracking-tight flex items-center gap-2">
                  {selectedWord.italian}
                  <button
                    onClick={() => speakItalian(selectedWord.italian)}
                    className="p-1 text-gray-400 hover:text-slate-800"
                  >
                    <Volume2 size={16} />
                  </button>
                </h3>
                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase font-mono">
                  Driving Glossary
                </span>
              </div>

              <button
                onClick={() => onToggleBookmark(selectedWord.id)}
                className={`p-2 rounded-full border transition-colors ${
                  bookmarkedIds.includes(selectedWord.id)
                    ? 'border-emerald-250 bg-emerald-50 text-emerald-700'
                    : 'border-gray-200 text-gray-400 hover:bg-slate-50'
                }`}
              >
                {bookmarkedIds.includes(selectedWord.id) ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              </button>
            </div>

            <div className="space-y-4">
              {selectedWord.explanation && (
                <div className="text-sm text-slate-650 bg-slate-50 p-3 rounded-lg leading-relaxed">
                  <p className="font-mono text-[9px] uppercase tracking-wide text-gray-400 mb-1">Italian Definition</p>
                  {selectedWord.explanation}
                </div>
              )}

              <div className="text-right dir-rtl leading-relaxed">
                <p className="font-mono text-[9px] text-gray-400 mb-1 text-left">ترجمه به فارسی / FARSI</p>
                <p className="text-lg font-bold text-slate-800 font-sans mb-1">{selectedWord.farsi}</p>
                {selectedWord.farsiExplanation && (
                  <p className="text-xs text-gray-500 font-sans">{selectedWord.farsiExplanation}</p>
                )}
              </div>
            </div>

            <button
              onClick={() => setSelectedWord(null)}
              className="w-full mt-2 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
