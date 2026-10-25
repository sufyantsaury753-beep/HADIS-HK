import { useState, useMemo } from 'react';
import { HADITHS_DATA, STAGES } from './data/hadiths';
import type { HadithItem } from './data/hadiths';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HadithFullEntry } from './components/HadithFullEntry';
import { QuoteCardModal } from './components/QuoteCardModal';
import { FivePillarsModal } from './components/FivePillarsModal';
import { RelationQuizModal } from './components/RelationQuizModal';
import { SavedHadithModal } from './components/SavedHadithModal';
import { Info, RotateCcw } from 'lucide-react';

export function App() {
  const [selectedStageId, setSelectedStageId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Modals for secondary tools
  const [activeQuoteHadith, setActiveQuoteHadith] = useState<HadithItem | null>(null);
  const [isOpenPillars, setIsOpenPillars] = useState<boolean>(false);
  const [isOpenQuiz, setIsOpenQuiz] = useState<boolean>(false);
  const [isOpenSaved, setIsOpenSaved] = useState<boolean>(false);

  // Saved Hadith IDs in localStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('hadis_keluarga_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleSaveHadith = (id: string) => {
    setSavedIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('hadis_keluarga_saved', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Filter Hadiths
  const filteredHadiths = useMemo(() => {
    return HADITHS_DATA.filter((item) => {
      // Stage filter
      if (selectedStageId !== 'all' && item.stageId !== selectedStageId) {
        return false;
      }

      // Tag filter
      if (selectedTag && !item.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase())) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inTranslation = item.terjemahan.toLowerCase().includes(q);
        const inKitab = item.kitab.toLowerCase().includes(q);
        const inRawi = item.rawi.toLowerCase().includes(q);
        const inTags = item.tags.some(t => t.toLowerCase().includes(q));
        const inMubadalah = item.pemaknaanMubadalah.ringkasan.toLowerCase().includes(q);
        return inTitle || inTranslation || inKitab || inRawi || inTags || inMubadalah;
      }

      return true;
    });
  }, [selectedStageId, selectedTag, searchQuery]);

  const savedHadithList = useMemo(() => {
    return HADITHS_DATA.filter(h => savedIds.includes(h.id));
  }, [savedIds]);

  const currentStageInfo = STAGES.find(s => s.id === selectedStageId);

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans">
      {/* 1. Slim Academic Top Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsOpenSaved(true)}
        onToggleMobileMenu={() => setIsMobileSidebarOpen(true)}
      />

      {/* 2. Main Two-Column Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex items-start">
        {/* Left Column: Library Index Sidebar */}
        <Sidebar
          selectedStageId={selectedStageId}
          onSelectStage={setSelectedStageId}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          savedCount={savedIds.length}
          onOpenSaved={() => setIsOpenSaved(true)}
          onOpenQuiz={() => setIsOpenQuiz(true)}
          onOpenPillars={() => setIsOpenPillars(true)}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Right Column: Reading Pane / Corpus Feed */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 bg-white">
          {/* Active Section Header */}
          <div className="pb-4 mb-6 border-b border-[#E5E7EB]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-[#111827] tracking-tight">
                  {currentStageInfo ? currentStageInfo.title : 'Seluruh Hadis Hukum Keluarga Islam'}
                </h1>
                <p className="text-xs text-[#6B7280] mt-1">
                  {currentStageInfo 
                    ? currentStageInfo.tagline 
                    : 'Kompilasi hadis hukum keluarga dengan pendekatan kesalingan (Mubadalah) dan maqashid syariah.'}
                </p>
              </div>

              {/* Status & Reset */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs font-mono font-medium text-[#4B5563] bg-[#F9F7F5] border border-[#E5E1DC] px-2 py-1 rounded">
                  {filteredHadiths.length} Riwayat
                </span>

                {(selectedStageId !== 'all' || selectedTag !== null || searchQuery !== '') && (
                  <button
                    onClick={() => {
                      setSelectedStageId('all');
                      setSelectedTag(null);
                      setSearchQuery('');
                    }}
                    className="btn-outline px-2.5 py-1 text-xs flex items-center gap-1"
                    title="Tampilkan semua hadis"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Filter</span>
                  </button>
                )}
              </div>
            </div>

            {/* Active Tag Notice */}
            {selectedTag && (
              <div className="mt-2 text-xs text-[#9E744A] flex items-center gap-1 font-medium">
                <span>Menampilkan topik:</span>
                <span className="font-semibold underline">#{selectedTag}</span>
              </div>
            )}
          </div>

          {/* Hadith Full-Text Feed */}
          {filteredHadiths.length === 0 ? (
            <div className="text-center py-16 bg-[#FFFFFF] border border-[#E5E7EB] rounded-md p-8 my-4">
              <Info className="w-8 h-8 text-[#9CA3AF] mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-[#111827] mb-1">
                Tidak ada hadis yang sesuai dengan kriteria
              </h3>
              <p className="text-xs text-[#6B7280] max-w-sm mx-auto mb-4">
                Silakan ubah kata kunci pencarian atau pilih bab siklus keluarga lainnya pada menu indeks kiri.
              </p>
              <button
                onClick={() => {
                  setSelectedStageId('all');
                  setSelectedTag(null);
                  setSearchQuery('');
                }}
                className="btn-brown px-4 py-1.5 text-xs"
              >
                Tampilkan Semua Hadis
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredHadiths.map((hadith, index) => (
                <HadithFullEntry
                  key={hadith.id}
                  hadith={hadith}
                  entryIndex={index}
                  isSaved={savedIds.includes(hadith.id)}
                  onToggleSave={toggleSaveHadith}
                  onOpenQuote={setActiveQuoteHadith}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Secondary Tool Modals */}
      <QuoteCardModal
        hadith={activeQuoteHadith}
        onClose={() => setActiveQuoteHadith(null)}
      />

      <FivePillarsModal
        isOpen={isOpenPillars}
        onClose={() => setIsOpenPillars(false)}
      />

      {isOpenQuiz && (
        <RelationQuizModal
          onClose={() => setIsOpenQuiz(false)}
          onExploreTopic={(tag) => setSelectedTag(tag)}
        />
      )}

      {isOpenSaved && (
        <SavedHadithModal
          savedHadiths={savedHadithList}
          onClose={() => setIsOpenSaved(false)}
          onOpenDetail={(h) => {
            // Scroll to the specific hadith or filter by it
            setSearchQuery(h.noHadis);
          }}
          onRemoveSaved={toggleSaveHadith}
        />
      )}
    </div>
  );
}

export default App;
