import React from 'react';
import { BookOpen, Heart, Sparkles, Scale } from 'lucide-react';

interface NavbarProps {
  activeStage: string;
  onSelectStage: (stageId: string) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenQuiz: () => void;
  onScrollToPillars: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSaved,
  onOpenQuiz,
  onScrollToPillars,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F6F0]/90 backdrop-blur-md border-b border-[#E7E2D6] px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-[#1F4E3D] text-[#F8F6F0] flex items-center justify-center shadow-sm">
            <Scale className="w-5 h-5 text-[#E7C693]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-heading text-lg font-bold text-[#1F4E3D] tracking-tight">Hadis Keluarga</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#E7EFEA] text-[#1F4E3D] border border-[#CCDCD2]">Mubadalah</span>
            </div>
            <p className="text-xs text-[#6B7280]">Fiqh al-Usrah Berbasis Kesalingan</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onScrollToPillars}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1F4E3D] hover:bg-[#EAE4D7] rounded-lg transition"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#1F4E3D]" />
            5 Pilar Sakinah
          </button>

          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#8B4513] bg-[#FBEFE3] hover:bg-[#F6E1CC] border border-[#ECD1B4] rounded-lg transition shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
            Kuis Pasutri
          </button>

          <button
            onClick={onOpenSaved}
            className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#374151] hover:bg-[#EAE4D7] rounded-lg transition"
            title="Hadis Tersimpan"
          >
            <Heart className={`w-4 h-4 ${savedCount > 0 ? 'text-[#C86D51] fill-[#C86D51]' : 'text-gray-500'}`} />
            <span className="hidden md:inline">Tersimpan</span>
            {savedCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#C86D51] text-white text-[11px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
