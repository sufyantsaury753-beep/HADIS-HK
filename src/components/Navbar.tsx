import React from 'react';
import { BookOpen, Bookmark, HelpCircle, Layers } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenQuiz: () => void;
  onScrollToPillars: () => void;
  onScrollToCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSaved,
  onOpenQuiz,
  onScrollToPillars,
  onScrollToCatalog,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E1DC] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Identity */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 rounded-md bg-[#292929] text-white flex items-center justify-center font-bold text-sm tracking-wider">
            HK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base text-[#292929] tracking-tight">
                Hadis HK
              </span>
              <span className="text-[11px] font-medium text-[#795A3F] bg-[#F7F7F5] border border-[#E5E1DC] px-2 py-0.5 rounded">
                Kajian Fiqh al-Usrah
              </span>
            </div>
            <p className="text-[11px] text-[#6B7280] hidden sm:block">
              Platform Akademik Hukum Keluarga Islam Berbasis Kesalingan
            </p>
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden md:flex items-center gap-1 mr-2 text-xs font-medium text-[#4B5563]">
            <button
              onClick={onScrollToCatalog}
              className="px-3 py-1.5 rounded-md hover:text-[#292929] hover:bg-[#F7F7F5] transition flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-[#795A3F]" />
              Katalog Hadis
            </button>
            <button
              onClick={onScrollToPillars}
              className="px-3 py-1.5 rounded-md hover:text-[#292929] hover:bg-[#F7F7F5] transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#795A3F]" />
              Lima Pilar
            </button>
            <button
              onClick={onOpenQuiz}
              className="px-3 py-1.5 rounded-md hover:text-[#292929] hover:bg-[#F7F7F5] transition flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#795A3F]" />
              Evaluasi Relasi
            </button>
          </nav>

          <button
            onClick={onOpenSaved}
            className="btn-secondary px-3 py-1.5 text-xs flex items-center gap-1.5"
            title="Koleksi Hadis Tersimpan"
          >
            <Bookmark className={`w-3.5 h-3.5 ${savedCount > 0 ? 'text-[#795A3F] fill-[#795A3F]' : 'text-gray-500'}`} />
            <span className="hidden sm:inline">Tersimpan</span>
            {savedCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 rounded bg-[#C6A17B] text-[#2B2118] text-[10px] font-bold">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
