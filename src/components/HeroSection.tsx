import React from 'react';
import { STAGES } from '../data/hadiths';
import type { Stage } from '../data/hadiths';
import { 
  Sparkles, 
  ScrollText, 
  Home, 
  Wallet, 
  HeartHandshake, 
  ShieldAlert, 
  Users, 
  Search,
  ArrowRight
} from 'lucide-react';

interface HeroSectionProps {
  selectedStageId: string;
  onSelectStage: (stageId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

const getStageIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sparkles': return <Sparkles className="w-4 h-4" />;
    case 'ScrollText': return <ScrollText className="w-4 h-4" />;
    case 'Home': return <Home className="w-4 h-4" />;
    case 'Wallet': return <Wallet className="w-4 h-4" />;
    case 'HeartHandshake': return <HeartHandshake className="w-4 h-4" />;
    case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
    case 'Users': return <Users className="w-4 h-4" />;
    default: return <Sparkles className="w-4 h-4" />;
  }
};

const POPULAR_TAGS = [
  'Semua',
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
}) => {
  return (
    <section className="pt-8 pb-6 px-4 lg:px-8 border-b border-[#E7E2D6] bg-gradient-to-b from-[#F2EDE2]/70 to-[#F8F6F0]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3ECE6] text-[#1F4E3D] text-xs font-semibold tracking-wide mb-4 border border-[#CCDCD2] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#1F4E3D] animate-pulse"></span>
          Kehidupan Pasca-Perkawinan yang Berkeadilan & Bermartabat
        </div>

        {/* Heading */}
        <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F4E3D] leading-tight max-w-4xl mx-auto mb-4">
          Menghidupkan Ruh <span className="text-[#C86D51] italic">Kesalingan</span> dalam Dinamika Rumah Tangga
        </h1>
        <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Eksplorasi hadis-hadis hukum keluarga Islam dengan paradigma <strong className="font-semibold text-[#1F4E3D]">Mubadalah</strong>: 
          bukan sekadar hukum formal akad, melainkan panduan nyata relasi sehari-hari pasutri yang adil, setara, dan penuh rahmah.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative mb-6">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari isu hadis (misal: cuci piring, istri bekerja, nafkah, ranjang, amarah)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#DCD5C5] text-sm text-[#1E232A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F4E3D] focus:border-transparent shadow-sm transition"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-gray-700"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          <span className="text-xs text-gray-500 font-medium mr-1">Topik Cepat:</span>
          {POPULAR_TAGS.map((tag) => {
            const isAll = tag === 'Semua';
            const isActive = isAll ? selectedTag === null : selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => onSelectTag(isAll ? null : tag)}
                className={`text-xs px-3 py-1 rounded-full transition font-medium ${
                  isActive
                    ? 'bg-[#1F4E3D] text-[#F8F6F0] shadow-xs'
                    : 'bg-white hover:bg-[#EAE4D7] text-[#4B5563] border border-[#DDD6C7]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Life-Cycle Interactive Timeline */}
        <div className="text-left mb-2">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F4E3D]">
                Navigasi Siklus Kehidupan Berkeluarga
              </span>
              <span className="text-[11px] text-gray-500 font-normal">
                (Klik tahap untuk menelaah hadis)
              </span>
            </div>
            {selectedStageId !== 'all' && (
              <button
                onClick={() => onSelectStage('all')}
                className="text-xs font-semibold text-[#C86D51] hover:underline flex items-center gap-1"
              >
                Lihat Semua Siklus <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
            {STAGES.map((stg: Stage, idx: number) => {
              const isSelected = selectedStageId === stg.id;
              return (
                <button
                  key={stg.id}
                  onClick={() => onSelectStage(isSelected ? 'all' : stg.id)}
                  className={`text-left p-3 rounded-xl border transition-all relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#1F4E3D] text-white border-[#1F4E3D] shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-[#F3EFE6] text-[#1E232A] border-[#E3DCCF] shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#EAE4D7] text-[#1F4E3D]'
                    }`}>
                      {getStageIcon(stg.icon)}
                    </div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-[#E7C693]' : 'bg-[#F2EDE2] text-[#6B7280]'
                    }`}>
                      #{idx + 1}
                    </span>
                  </div>
                  <h4 className={`text-xs font-bold leading-snug line-clamp-1 ${
                    isSelected ? 'text-white' : 'text-[#1F4E3D]'
                  }`}>
                    {stg.title.replace(/^\d+\.\s*/, '')}
                  </h4>
                  <p className={`text-[11px] mt-1 line-clamp-2 leading-tight ${
                    isSelected ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {stg.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
