import React, { useState } from 'react';
import { PILAR_SAKINAH } from '../data/hadiths';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const FivePillarsSection: React.FC = () => {
  const [selectedPilar, setSelectedPilar] = useState(0);

  return (
    <section id="pilar-sakinah" className="py-12 px-4 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E2D6]">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE4D7] text-[#1F4E3D] text-xs font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Fondasi Normatif-Qur'ani</span>
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-3xl font-extrabold text-[#1F4E3D] mb-3">
          Lima Pilar Bangunan Keluarga Sakinah
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
          Disarikan dari Al-Qur'an dan diadopsi Kemenag RI serta konsep Keluarga Maslahah NU. 
          Hadis-hadis kehidupan keluarga menjadi instrumen praktis untuk mewujudkan kelima pilar ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-8">
        {PILAR_SAKINAH.map((pilar, idx) => {
          const isActive = selectedPilar === idx;
          return (
            <button
              key={pilar.title}
              onClick={() => setSelectedPilar(idx)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isActive
                  ? 'bg-[#1F4E3D] text-white border-[#1F4E3D] shadow-md scale-[1.02]'
                  : 'bg-white hover:bg-[#F3EFE6] text-[#1E232A] border-[#E3DCCF] shadow-xs'
              }`}
            >
              <span className={`text-[11px] font-bold block mb-1 ${isActive ? 'text-[#E7C693]' : 'text-gray-400'}`}>
                Pilar 0{idx + 1}
              </span>
              <h4 className="font-serif-heading font-bold text-sm leading-tight mb-2">
                {pilar.title}
              </h4>
              <p 
                dir="rtl" 
                className={`font-arabic text-sm leading-normal my-1 ${
                  isActive ? 'text-[#FAD2C0]' : 'text-[#1F4E3D]'
                }`}
              >
                {pilar.arabic}
              </p>
              <span className={`text-[10px] font-medium block mt-2 ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                {pilar.surah}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Detail Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DCCF] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C86D51]">
            <Sparkles className="w-4 h-4" />
            <span>Fokus Esensi Pilar #{selectedPilar + 1}: {PILAR_SAKINAH[selectedPilar].surah}</span>
          </div>
          <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1F4E3D]">
            {PILAR_SAKINAH[selectedPilar].title} ({PILAR_SAKINAH[selectedPilar].arabic})
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium pt-1">
            {PILAR_SAKINAH[selectedPilar].meaning}
          </p>
        </div>

        <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E7E1D4] w-full md:w-72 shrink-0">
          <span className="text-xs font-bold text-[#1F4E3D] block mb-2">
            Praktik dalam Hadis:
          </span>
          <ul className="text-xs text-gray-600 space-y-1.5">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Saling melayani di rumah tangga</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Musyawarah dalam keuangan & anak</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Menjauhkan kekerasan dan celaan</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
