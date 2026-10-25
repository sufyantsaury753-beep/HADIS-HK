import React from 'react';
import { STAGES, HADITHS_DATA } from '../data/hadiths';
import { 
  BookOpen, 
  Bookmark, 
  HelpCircle, 
  X
} from 'lucide-react';

interface SidebarProps {
  selectedStageId: string;
  onSelectStage: (stageId: string) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenQuiz: () => void;
  onOpenPillars: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

const TOPIC_FILTERS = [
  'Kerja Domestik',
  'Istri Bekerja',
  'Anti-KDRT',
  'Marital Consent',
  'Apresiasi Pasangan',
  'Peran Ayah',
  'Perjanjian Kawin',
  'Nafkah Wajib'
];

export const Sidebar: React.FC<SidebarProps> = ({
  selectedStageId,
  onSelectStage,
  selectedTag,
  onSelectTag,
  savedCount,
  onOpenSaved,
  onOpenQuiz,
  onOpenPillars,
  isOpenMobile,
  onCloseMobile,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:sticky top-0 lg:top-14 h-screen lg:h-[calc(100vh-3.5rem)]
        w-72 bg-white border-r border-[#E5E7EB] z-50 lg:z-10
        flex flex-col justify-between overflow-y-auto
        transition-transform duration-200 ease-in-out
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 space-y-6">
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between lg:hidden pb-3 border-b border-[#E5E7EB]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
              Indeks Hadis
            </span>
            <button 
              onClick={onCloseMobile}
              className="p-1 rounded text-[#6B7280] hover:text-[#111827]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Section 1: Siklus Berkeluarga (Chapters) */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-2 px-2">
              <span>Siklus Kehidupan</span>
              <span>{HADITHS_DATA.length} Hadis</span>
            </div>

            <nav className="space-y-0.5 text-xs">
              <button
                onClick={() => {
                  onSelectStage('all');
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-left transition ${
                  selectedStageId === 'all'
                    ? 'bg-[#F9F7F5] text-[#9E744A] font-semibold border-l-2 border-[#9E744A]'
                    : 'text-[#374151] hover:bg-[#F9F9F9] hover:text-[#111827]'
                }`}
              >
                <span>Semua Siklus</span>
                <span className="font-mono text-[10px] text-[#6B7280]">
                  {HADITHS_DATA.length}
                </span>
              </button>

              {STAGES.map((stg) => {
                const count = HADITHS_DATA.filter(h => h.stageId === stg.id).length;
                const isSelected = selectedStageId === stg.id;
                return (
                  <button
                    key={stg.id}
                    onClick={() => {
                      onSelectStage(stg.id);
                      onCloseMobile();
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-left transition ${
                      isSelected
                        ? 'bg-[#F9F7F5] text-[#9E744A] font-semibold border-l-2 border-[#9E744A]'
                        : 'text-[#374151] hover:bg-[#F9F9F9] hover:text-[#111827]'
                    }`}
                  >
                    <span className="truncate pr-2">
                      {stg.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#6B7280]">
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Section 2: Topik Cepat */}
          <div className="pt-4 border-t border-[#E5E7EB]">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-2 px-2">
              Indeks Topik
            </div>

            <div className="flex flex-wrap gap-1 px-1">
              {TOPIC_FILTERS.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => {
                      onSelectTag(isActive ? null : tag);
                      onCloseMobile();
                    }}
                    className={`text-[11px] px-2 py-1 rounded transition border ${
                      isActive
                        ? 'bg-[#C6A17B] text-[#2B2118] border-[#B78D66] font-semibold'
                        : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:border-[#C6A17B] hover:text-[#111827]'
                    }`}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Fitur Pendukung Akademik */}
          <div className="pt-4 border-t border-[#E5E7EB] space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-2 px-2">
              Rujukan & Evaluasi
            </div>

            <button
              onClick={() => {
                onOpenPillars();
                onCloseMobile();
              }}
              className="w-full flex items-center gap-2 px-2.5 py-2 rounded text-xs text-[#374151] hover:bg-[#F9F9F9] hover:text-[#111827] text-left transition"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#9E744A]" />
              <span>Lima Pilar Sakinah</span>
            </button>

            <button
              onClick={() => {
                onOpenQuiz();
                onCloseMobile();
              }}
              className="w-full flex items-center gap-2 px-2.5 py-2 rounded text-xs text-[#374151] hover:bg-[#F9F9F9] hover:text-[#111827] text-left transition"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#9E744A]" />
              <span>Kuis Evaluasi Relasi</span>
            </button>

            <button
              onClick={() => {
                onOpenSaved();
                onCloseMobile();
              }}
              className="w-full flex items-center justify-between px-2.5 py-2 rounded text-xs text-[#374151] hover:bg-[#F9F9F9] hover:text-[#111827] text-left transition"
            >
              <div className="flex items-center gap-2">
                <Bookmark className={`w-3.5 h-3.5 ${savedCount > 0 ? 'text-[#9E744A] fill-[#9E744A]' : 'text-[#6B7280]'}`} />
                <span>Koleksi Tersimpan</span>
              </div>
              {savedCount > 0 && (
                <span className="px-1.5 py-0.2 rounded bg-[#C6A17B] text-[#2B2118] text-[10px] font-bold">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Sidebar Footer: Scholarly attribution */}
        <div className="p-4 border-t border-[#E5E7EB] text-[11px] text-[#6B7280] bg-white">
          <p className="font-semibold text-[#111827]">Hadis HK v2.0</p>
          <p className="text-[10px] leading-tight text-[#6B7280] mt-0.5">
            Hermeneutika Mubadalah & Fiqh al-Usrah
          </p>
        </div>
      </aside>
    </>
  );
};
