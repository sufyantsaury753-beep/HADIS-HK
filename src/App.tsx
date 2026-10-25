import { useState, useMemo } from 'react';
import { HADITHS_DATA, STAGES } from './data/hadiths';
import type { HadithItem } from './data/hadiths';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HadithCard } from './components/HadithCard';
import { HadithDetailModal } from './components/HadithDetailModal';
import { QuoteCardModal } from './components/QuoteCardModal';
import { FivePillarsSection } from './components/FivePillarsSection';
import { RelationQuizModal } from './components/RelationQuizModal';
import { SavedHadithModal } from './components/SavedHadithModal';
import { Scale, Info, ArrowUp } from 'lucide-react';

export function App() {
  const [selectedStageId, setSelectedStageId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Active Modals
  const [activeDetailHadith, setActiveDetailHadith] = useState<HadithItem | null>(null);
  const [activeQuoteHadith, setActiveQuoteHadith] = useState<HadithItem | null>(null);
  const [isOpenQuiz, setIsOpenQuiz] = useState<boolean>(false);
  const [isOpenSaved, setIsOpenSaved] = useState<boolean>(false);

  // Saved Hadiths IDs (stored in localStorage if desired)
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

  // Filtered Hadiths calculation
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

  const scrollToPillars = () => {
    const el = document.getElementById('pilar-sakinah');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentStageInfo = STAGES.find(s => s.id === selectedStageId);

  return (
    <div className="min-h-screen bg-[#F8F6F0] flex flex-col font-sans text-[#1E232A]">
      {/* Top Navbar */}
      <Navbar
        activeStage={selectedStageId}
        onSelectStage={setSelectedStageId}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsOpenSaved(true)}
        onOpenQuiz={() => setIsOpenQuiz(true)}
        onScrollToPillars={scrollToPillars}
      />

      {/* Hero Section with Interactive Life-Cycle Timeline */}
      <HeroSection
        selectedStageId={selectedStageId}
        onSelectStage={setSelectedStageId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />

      {/* Main Content Area: Hadith Cards Catalog */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8">
        {/* Stage / Filter Status Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E7E2D6]">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1F4E3D]">
                {currentStageInfo ? currentStageInfo.title : 'Seluruh Hadis Siklus Berkeluarga'}
              </h2>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAE4D7] text-[#4B5563]">
                {filteredHadiths.length} Hadis
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              {currentStageInfo 
                ? currentStageInfo.tagline 
                : 'Mencakup Pra-Nikah, Khidmah Domestik, Finansial, Keintiman, Resolusi Krisis & Pengasuhan Anak.'}
            </p>
          </div>

          {(selectedStageId !== 'all' || selectedTag !== null || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedStageId('all');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#C86D51] hover:underline"
            >
              Hapus Semua Filter
            </button>
          )}
        </div>

        {/* Hadith Cards Grid */}
        {filteredHadiths.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E7E1D4] p-8">
            <Info className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-serif-heading text-lg font-bold text-[#1F4E3D] mb-1">
              Tidak Ada Hadis yang Cocok
            </h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto mb-4">
              Coba gunakan kata kunci pencarian yang lain atau pilih tahapan siklus keluarga lainnya.
            </p>
            <button
              onClick={() => {
                setSelectedStageId('all');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#1F4E3D] text-white text-xs font-bold hover:bg-[#16382C] transition"
            >
              Tampilkan Semua Hadis
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHadiths.map((hadith) => (
              <HadithCard
                key={hadith.id}
                hadith={hadith}
                onOpenDetail={setActiveDetailHadith}
                onOpenQuote={setActiveQuoteHadith}
                isSaved={savedIds.includes(hadith.id)}
                onToggleSave={toggleSaveHadith}
              />
            ))}
          </div>
        )}
      </main>

      {/* 5 Pillars of Sakinah Section */}
      <FivePillarsSection />

      {/* Footer */}
      <footer className="bg-[#1F4E3D] text-[#F8F6F0] py-10 px-4 lg:px-8 border-t border-[#16382C] mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Scale className="w-5 h-5 text-[#E7C693]" />
              <span className="font-serif-heading text-lg font-bold text-[#F8F6F0]">
                Hadis Hukum Keluarga Islam
              </span>
            </div>
            <p className="text-xs text-[#CCDCD2] font-light max-w-lg">
              Kajian berbasis hermeneutika Mubadalah (K.H. Faqihuddin Abdul Kodir), Fiqh al-Usrah, 
              serta selaras dengan Konsep Keluarga Maslahah NU & Modul Keluarga Sakinah Kementerian Agama RI.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#CCDCD2]">
            <button onClick={scrollToPillars} className="hover:text-white transition">
              5 Pilar Sakinah
            </button>
            <span>•</span>
            <button onClick={() => setIsOpenQuiz(true)} className="hover:text-white transition">
              Kuis Pasutri
            </button>
            <span>•</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition flex items-center gap-1">
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-[#2D6652] mt-6 pt-6 text-center text-[11px] text-[#A6C4B4]">
          Proyek Edukasi Digital Hadis Hukum Keluarga Islam — Merawat Cinta, Martabat & Kesalingan dalam Rumah Tangga.
        </div>
      </footer>

      {/* Detail Modal with Desktop Split-Screen & Mobile Tab-Switcher */}
      <HadithDetailModal
        hadith={activeDetailHadith}
        onClose={() => setActiveDetailHadith(null)}
        onOpenQuote={(h) => {
          setActiveDetailHadith(null);
          setActiveQuoteHadith(h);
        }}
        isSaved={activeDetailHadith ? savedIds.includes(activeDetailHadith.id) : false}
        onToggleSave={toggleSaveHadith}
      />

      {/* Quote Card Generator Modal (Story 9:16 / Post 1:1) */}
      <QuoteCardModal
        hadith={activeQuoteHadith}
        onClose={() => setActiveQuoteHadith(null)}
      />

      {/* Couple's Self-Reflection Quiz Modal */}
      {isOpenQuiz && (
        <RelationQuizModal
          onClose={() => setIsOpenQuiz(false)}
          onExploreTopic={(tag) => setSelectedTag(tag)}
        />
      )}

      {/* Saved Hadiths Modal */}
      {isOpenSaved && (
        <SavedHadithModal
          savedHadiths={savedHadithList}
          onClose={() => setIsOpenSaved(false)}
          onOpenDetail={(h) => setActiveDetailHadith(h)}
          onRemoveSaved={toggleSaveHadith}
        />
      )}
    </div>
  );
}

export default App;
