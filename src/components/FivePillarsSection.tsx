import React, { useState } from 'react';
import { PILAR_SAKINAH } from '../data/hadiths';
import { BookOpen, Check } from 'lucide-react';

export const FivePillarsSection: React.FC = () => {
  const [selectedPilar, setSelectedPilar] = useState(0);

  return (
    <section id="pilar-sakinah" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E5E1DC] bg-white">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#795A3F] mb-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Fondasi Normatif-Qur'ani</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#292929] tracking-tight mb-2">
          Lima Pilar Bangunan Keluarga Sakinah
        </h2>
        <p className="text-sm text-[#6B7280] leading-relaxed">
          Disarikan dari Al-Qur'an dan menjadi acuan resmi Kementerian Agama RI serta konsep 
          Keluarga Maslahah Nahdlatul Ulama. Hadis-hadis hukum keluarga berfungsi sebagai preseden 
          dan panduan operasional dalam menegakkan kelima pilar ini.
        </p>
      </div>

      {/* 5 Pillars Selection Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        {PILAR_SAKINAH.map((pilar, idx) => {
          const isActive = selectedPilar === idx;
          return (
            <button
              key={pilar.title}
              onClick={() => setSelectedPilar(idx)}
              className={`p-3.5 rounded-md border text-left transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-[#F7F7F5] border-[#C6A17B] ring-1 ring-[#C6A17B]'
                  : 'bg-white border-[#E5E1DC] hover:border-[#D6C2AE] hover:bg-[#FAF9F7]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#6B7280] mb-1">
                  <span className="font-mono text-[11px]">Pilar 0{idx + 1}</span>
                  {isActive && <Check className="w-3.5 h-3.5 text-[#795A3F]" />}
                </div>
                <h4 className="font-semibold text-xs text-[#292929] leading-snug mb-1">
                  {pilar.title}
                </h4>
              </div>
              <div>
                <p 
                  dir="rtl" 
                  className="font-arabic text-sm text-[#795A3F] leading-tight my-1"
                >
                  {pilar.arabic}
                </p>
                <span className="text-[10px] text-[#6B7280] block font-mono">
                  {pilar.surah}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Content Panel */}
      <div className="bg-[#FAF9F7] rounded-md p-6 border border-[#E5E1DC] flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex-1 space-y-2">
          <div className="text-xs font-mono font-medium text-[#795A3F]">
            Refleksi Normatif: {PILAR_SAKINAH[selectedPilar].surah}
          </div>
          <h3 className="text-lg font-semibold text-[#292929]">
            {PILAR_SAKINAH[selectedPilar].title} ({PILAR_SAKINAH[selectedPilar].arabic})
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed pt-1">
            {PILAR_SAKINAH[selectedPilar].meaning}
          </p>
        </div>

        <div className="w-full md:w-80 bg-white p-4 rounded border border-[#E5E1DC] shrink-0">
          <span className="text-xs font-semibold text-[#292929] block mb-2 pb-1 border-b border-[#F0ECE6]">
            Relevansi Hadis Praktis:
          </span>
          <ul className="text-xs text-[#4B5563] space-y-1.5 list-disc list-inside">
            <li>Kemitraan khidmah domestik di rumah</li>
            <li>Musyawarah anggaran dan hak nafkah</li>
            <li>Keintiman berkeadilan tanpa kekerasan</li>
            <li>Keadilan afeksi dan hak asuh anak</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
