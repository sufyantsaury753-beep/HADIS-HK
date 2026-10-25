import React from 'react';
import { STAGES } from '../data/hadiths';
import type { Stage } from '../data/hadiths';
import { 
  Search,
  Filter,
  Check,
  RotateCcw
} from 'lucide-react';

interface HeroSectionProps {
  selectedStageId: string;
  onSelectStage: (stageId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  totalResults: number;
}

const TOPIC_FILTERS = [
  'Semua Topik',
  'Kerja Domestik',
  'Istri Bekerja',
  'Anti-KDRT',
  'Marital Consent',
  'Apresiasi Pasangan',
  'Peran Ayah',
  'Perjanjian Kawin',
  'Nafkah Wajib'
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedStageId,
  onSelectStage,
  searchQuery,
  onSearchChange,
  selectedTag,
  onSelectTag,
  totalResults,
}) => {
  return (
    <section className="bg-white border-b border-[#E5E1DC] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Header: Dignified, Academic, Proportionate */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#795A3F] mb-2">
            <span>Repositori Hadis Ahkam</span>
            <span>•</span>
            <span>Perspektif Mubadalah & Maqashid Syariah</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#292929] tracking-tight mb-2.5">
            Kajian Hadis Hukum Keluarga Islam
          </h1>
          <p className="text-sm text-[#4B5563] leading-relaxed">
            Sumber primer dan rujukan analitis hadis hukum keluarga Islam. Menghubungkan pembacaan 
            teks klasik (*riwayah*), konteks yuridis formal, dan etika relasi kesalingan (*mubadalah*) 
            dalam kehidupan pra-nikah, akad, kemitraan domestik, nafkah, hingga pengasuhan anak.
          </p>
        </div>

        {/* Search Bar - High Utility, Clean Rectangular Border */}
        <div className="bg-[#F7F7F5] border border-[#E5E1DC] rounded-lg p-3 sm:p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Telusuri hadis, perawi, terjemahan, atau topik (misal: nafkah, khidmah, KDRT, anak)..."
                className="w-full bg-white border border-[#E5E1DC] rounded-md pl-10 pr-4 py-2.5 text-sm text-[#292929] placeholder-[#9CA3AF] focus:outline-none focus:border-[#C6A17B] focus:ring-1 focus:ring-[#C6A17B] transition"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] hover:text-[#292929]"
                >
                  Hapus
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="text-xs text-[#6B7280] px-2 py-1 font-medium hidden md:block">
                Menemukan <strong className="text-[#292929]">{totalResults}</strong> hadis
              </div>
              {(selectedStageId !== 'all' || selectedTag !== null || searchQuery !== '') && (
                <button
                  onClick={() => {
                    onSelectStage('all');
                    onSelectTag(null);
                    onSearchChange('');
                  }}
                  className="btn-secondary px-3 py-2 text-xs flex items-center gap-1.5"
                  title="Reset Filter"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Topic Filters */}
          <div className="mt-3 pt-3 border-t border-[#E5E1DC] flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-[#6B7280] flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" />
              Topik:
            </span>
            {TOPIC_FILTERS.map((tag) => {
              const isAll = tag === 'Semua Topik';
              const isActive = isAll ? selectedTag === null : selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => onSelectTag(isAll ? null : tag)}
                  className={`text-xs px-2.5 py-1 rounded transition border ${
                    isActive
                      ? 'bg-[#C6A17B] text-[#2B2118] border-[#B78D66] font-semibold'
                      : 'bg-white text-[#4B5563] border-[#E5E1DC] hover:border-[#D6C2AE] hover:text-[#292929]'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Life-Cycle Stage Navigation: Clean Segmented Stepper */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Klasifikasi Siklus Hukum Keluarga
            </span>
            {selectedStageId !== 'all' && (
              <button
                onClick={() => onSelectStage('all')}
                className="text-xs text-[#795A3F] hover:underline font-medium"
              >
                Tampilkan Seluruh Siklus
              </button>
            )}
          </div>

          {/* Clean Academic Grid Tabs (Border radius 6-8px, distinct active state) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {STAGES.map((stg: Stage, idx: number) => {
              const isSelected = selectedStageId === stg.id;
              return (
                <button
                  key={stg.id}
                  onClick={() => onSelectStage(isSelected ? 'all' : stg.id)}
                  className={`text-left p-3 rounded-md border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#F7F7F5] border-[#C6A17B] ring-1 ring-[#C6A17B]'
                      : 'bg-white border-[#E5E1DC] hover:border-[#D6C2AE] hover:bg-[#FAF9F7]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#6B7280] mb-1">
                      <span className="font-mono font-medium">0{idx + 1}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#795A3F]" />}
                    </div>
                    <div className={`text-xs font-semibold line-clamp-1 ${
                      isSelected ? 'text-[#795A3F]' : 'text-[#292929]'
                    }`}>
                      {stg.title.replace(/^\d+\.\s*/, '')}
                    </div>
                  </div>
                  <div className="text-[10px] text-[#6B7280] line-clamp-1 mt-1.5 font-light">
                    {stg.badge}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
