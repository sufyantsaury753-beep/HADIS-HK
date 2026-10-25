import React, { useState } from 'react';
import { PILAR_SAKINAH } from '../data/hadiths';
import { X, BookOpen, Check } from 'lucide-react';

interface FivePillarsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FivePillarsModal: React.FC<FivePillarsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedPilar, setSelectedPilar] = useState(0);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/40 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full max-w-3xl rounded-lg border border-[#E5E7EB] shadow-xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-3.5 bg-white border-b border-[#E5E7EB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#9E744A]" />
            <h3 className="text-base font-semibold text-[#111827]">
              Lima Pilar Bangunan Keluarga Sakinah
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded text-[#6B7280] hover:text-[#111827]"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          <p className="text-xs text-[#4B5563] leading-relaxed">
            Disarikan dari Al-Qur'an dan menjadi rujukan resmi Kementerian Agama RI serta konsep 
            Keluarga Maslahah Nahdlatul Ulama. Hadis-hadis hukum keluarga berfungsi sebagai preseden 
            konkret dalam mewujudkan kelima pilar ini.
          </p>

          {/* Pillars Tab Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {PILAR_SAKINAH.map((pilar, idx) => {
              const isActive = selectedPilar === idx;
              return (
                <button
                  key={pilar.title}
                  onClick={() => setSelectedPilar(idx)}
                  className={`p-3 rounded border text-left transition ${
                    isActive
                      ? 'bg-[#F9F7F5] border-[#9E744A] text-[#9E744A]'
                      : 'bg-white border-[#E5E7EB] text-[#374151] hover:border-[#C6A17B]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span>0{idx + 1}</span>
                    {isActive && <Check className="w-3 h-3 text-[#9E744A]" />}
                  </div>
                  <div className="text-xs font-semibold truncate leading-tight">
                    {pilar.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details */}
          <div className="border border-[#E5E7EB] rounded-md p-5 bg-[#FFFFFF] space-y-3">
            <div className="flex items-center justify-between border-b border-[#F3F4F6] pb-2.5">
              <div>
                <span className="text-[10px] font-mono text-[#9E744A] uppercase block">
                  Dasar Qur'ani: {PILAR_SAKINAH[selectedPilar].surah}
                </span>
                <h4 className="text-base font-semibold text-[#111827]">
                  {PILAR_SAKINAH[selectedPilar].title}
                </h4>
              </div>
              <p dir="rtl" className="font-arabic text-xl text-[#9E744A]">
                {PILAR_SAKINAH[selectedPilar].arabic}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
              {PILAR_SAKINAH[selectedPilar].meaning}
            </p>

            <div className="bg-[#F9F7F5] p-3 rounded border border-[#E5E1DC]">
              <span className="text-[11px] font-semibold text-[#111827] block mb-1">
                Korelasi dalam Hadis:
              </span>
              <ul className="text-xs text-[#4B5563] space-y-1 list-disc list-inside">
                <li>Kesalingan dalam urusan domestik dan khidmah keluarga</li>
                <li>Musyawarah terbuka dalam keuangan dan pengasuhan anak</li>
                <li>Penolakan mutlak atas segala bentuk kekerasan fisik dan verbal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-white border-t border-[#E5E7EB] text-right">
          <button onClick={onClose} className="btn-outline px-4 py-1.5 text-xs">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
