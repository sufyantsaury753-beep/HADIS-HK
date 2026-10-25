import React from 'react';
import { Search, Menu, Bookmark, X } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  savedCount,
  onOpenSaved,
  onToggleMobileMenu,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[#E5E7EB] h-14 flex items-center px-4 sm:px-6">
      <div className="w-full flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Mobile Menu Trigger & Brand Title */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleMobileMenu}
            className="p-1.5 rounded-md text-[#4B5563] hover:text-[#111827] hover:bg-[#F3F4F6] lg:hidden"
            aria-label="Buka Indeks Hadis"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div 
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-7 h-7 rounded bg-[#2B2118] text-[#F9F7F5] flex items-center justify-center font-bold text-xs">
              HK
            </div>
            <div>
              <span className="font-semibold text-sm text-[#111827] tracking-tight block leading-none">
                Hadis HK
              </span>
              <span className="text-[10px] text-[#6B7280] hidden sm:inline leading-none">
                Hukum Keluarga Islam
              </span>
            </div>
          </div>
        </div>

        {/* Center: Clean Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari hadis, perawi, terjemahan, atau isu keluarga (misal: nafkah, khidmah, KDRT)..."
            className="w-full bg-white border border-[#E5E7EB] rounded-md pl-9 pr-8 py-1.5 text-xs sm:text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#C6A17B] focus:ring-1 focus:ring-[#C6A17B] transition"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF] hover:text-[#111827]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenSaved}
            className="btn-outline px-2.5 py-1.5 text-xs flex items-center gap-1.5"
            title="Koleksi Hadis Tersimpan"
          >
            <Bookmark className={`w-3.5 h-3.5 ${savedCount > 0 ? 'text-[#9E744A] fill-[#9E744A]' : 'text-[#6B7280]'}`} />
            <span className="hidden sm:inline">Tersimpan</span>
            {savedCount > 0 && (
              <span className="px-1.5 py-0.2 rounded bg-[#C6A17B] text-[#2B2118] text-[10px] font-bold">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
