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
import { Info, ArrowUp } from 'lucide-react';

export function App() {
  const [selectedStageId, setSelectedStageId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Active Modals
  const [activeDetailHadith, setActiveDetailHadith] = useState<HadithItem | null>(null);
  const [activeQuoteHadith, setActiveQuoteHadith] = useState<HadithItem | null>(null);
  const [isOpenQuiz, setIsOpenQuiz] = useState<boolean>(false);
  const [isOpenSaved, setIsOpenSaved] = useState<boolean>(false);

  // Saved Hadiths IDs (stored in localStorage)
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

  const scrollToCatalog = () => {
    const el = document.getElementById('katalog-hadis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentStageInfo = STAGES.find(s => s.id === selectedStageId);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#292929]">
      {/* Top Academic Navbar */}
      <Navbar
        savedCount={savedIds.length}
        onOpenSaved={() => setIsOpenSaved(true)}
        onOpenQuiz={() => setIsOpenQuiz(true)}
        onScrollToPillars={scrollToPillars}
        onScrollToCatalog={scrollToCatalog}
      />

      {/* Hero Section: Academic Overview, Search & Segmented Filter */}
      <HeroSection
        selectedStageId={selectedStageId}
        onSelectStage={setSelectedStageId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
        totalResults={filteredHadiths.length}
      />

      {/* Main Catalog Section */}
      <main id="katalog-hadis" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Catalog Subheader */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#E5E1DC]">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-semibold text-[#292929]">
                {currentStageInfo ? currentStageInfo.title : 'Katalog Hadis Hukum Keluarga'}
              </h2>
              <span className="text-xs font-mono font-medium text-[#795A3F] bg-[#F7F7F5] border border-[#E5E1DC] px-2 py-0.5 rounded">
                {filteredHadiths.length} Riwayat
              </span>
            </div>
            <p className="text-xs text-[#6B7280] mt-0.5">
              {currentStageInfo 
                ? currentStageInfo.tagline 
                : 'Mencakup teks ahkam, konteks pra-nikah, kemitraan domestik, nafkah berkeadilan, hingga perlindungan keluarga.'}
            </p>
          </div>

          {(selectedStageId !== 'all' || selectedTag !== null || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedStageId('all');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="text-xs font-medium text-[#795A3F] hover:underline"
            >
              Tampilkan Semua Hadis
            </button>
          )}
        </div>

        {/* Hadith Cards Grid */}
        {filteredHadiths.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF9F7] rounded-md border border-[#E5E1DC] p-8 max-w-xl mx-auto my-6">
            <Info className="w-8 h-8 text-[#9CA3AF] mx-auto mb-2" />
            <h3 className="text-sm font-semibold text-[#292929] mb-1">
              Tidak Ada Hadis yang Ditemukan
            </h3>
            <p className="text-xs text-[#6B7280] mb-4">
              Silakan periksa kata kunci pencarian atau bersihkan filter topik untuk menelusuri materi lain.
            </p>
            <button
              onClick={() => {
                setSelectedStageId('all');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="btn-primary px-4 py-2 text-xs"
            >
              Reset Penelusuran
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* Academic Footer */}
      <footer className="bg-[#F7F7F5] border-t border-[#E5E1DC] py-10 px-4 sm:px-6 lg:px-8 mt-12 text-[#4B5563]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-[#292929]">
                Hadis Hukum Keluarga Islam (Hadis HK)
              </span>
              <span className="text-[10px] font-mono text-[#795A3F] bg-white border border-[#E5E1DC] px-1.5 py-0.5 rounded">
                v2.0 Academic
              </span>
            </div>
            <p className="text-xs text-[#6B7280] max-w-xl">
              Platform studi digital hadis ahkam hukum keluarga Islam. Mengintegrasikan kerangka 
              hermeneutika Mubadalah (*Qira'ah Mubadalah*), Fiqh al-Usrah, serta selaras dengan 
              Kompilasi Hukum Islam (KHI) dan Konsep Keluarga Maslahah.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button onClick={scrollToCatalog} className="hover:text-[#292929] transition">
              Katalog
            </button>
            <span>•</span>
            <button onClick={scrollToPillars} className="hover:text-[#292929] transition">
              5 Pilar Sakinah
            </button>
            <span>•</span>
            <button onClick={() => setIsOpenQuiz(true)} className="hover:text-[#292929] transition">
              Kuis Evaluasi
            </button>
            <span>•</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-[#292929] transition flex items-center gap-1 font-medium"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-[#E5E1DC] mt-6 pt-4 text-xs text-[#9CA3AF] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Repositori Pembelajaran & Riset Hadis Hukum Keluarga Islam.</span>
          <span className="font-mono text-[11px]">sufyantsaury753-beep.github.io/HADIS-HK/</span>
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

      {/* Quote Card Generator Modal */}
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
