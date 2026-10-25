import React from 'react';
import { STAGES } from '../data/hadiths';
import type { HadithItem } from '../data/hadiths';
import { Heart, Share2, ArrowUpRight, Scale } from 'lucide-react';

interface HadithCardProps {
  hadith: HadithItem;
  onOpenDetail: (hadith: HadithItem) => void;
  onOpenQuote: (hadith: HadithItem) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const HadithCard: React.FC<HadithCardProps> = ({
  hadith,
  onOpenDetail,
  onOpenQuote,
  isSaved,
  onToggleSave,
}) => {
  const stage = STAGES.find(s => s.id === hadith.stageId);

  return (
    <div className="bg-white rounded-2xl border border-[#E5DFD3] hover:border-[#C4B8A3] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
      {/* Header Info */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#E8EFEA] text-[#1F4E3D] border border-[#D0E0D6]">
            {stage ? stage.title.replace(/^\d+\.\s*/, '') : hadith.stageId}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleSave(hadith.id)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-[#C86D51] hover:bg-[#F8F4EE] transition"
              title={isSaved ? "Hapus dari simpanan" : "Simpan hadis"}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'text-[#C86D51] fill-[#C86D51]' : ''}`} />
            </button>
            <button
              onClick={() => onOpenQuote(hadith)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-[#1F4E3D] hover:bg-[#F8F4EE] transition"
              title="Buat Kartu Kutipan (IG/WA Story)"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title & Reference */}
        <h3 
          onClick={() => onOpenDetail(hadith)}
          className="font-serif-heading text-lg font-bold text-[#1F4E3D] group-hover:text-[#C86D51] transition cursor-pointer leading-snug mb-1"
        >
          {hadith.title}
        </h3>
        <p className="text-xs text-gray-500 font-medium mb-3">
          {hadith.kitab} • {hadith.noHadis} (Perawi: {hadith.rawi})
        </p>

        {/* Arabic Matn Snippet */}
        <div className="bg-[#FAF8F5] rounded-xl p-3 border border-[#EFECE6] mb-3">
          <p 
            dir="rtl" 
            className="font-arabic text-right text-lg sm:text-xl text-[#2C3338] leading-loose line-clamp-2"
          >
            {hadith.matnArab}
          </p>
        </div>

        {/* Translation Snippet */}
        <p className="text-xs text-gray-600 line-clamp-2 italic leading-relaxed mb-4">
          "{hadith.terjemahan}"
        </p>

        {/* Mubadalah Key Takeaway Box */}
        <div className="bg-[#F0F6F2] rounded-xl p-3 border-l-3 border-[#1F4E3D]">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1F4E3D] mb-1">
            <Scale className="w-3.5 h-3.5 text-[#1F4E3D]" />
            Ruh Kesalingan (Mubadalah):
          </div>
          <p className="text-xs text-[#2A3B32] line-clamp-2 leading-relaxed">
            {hadith.pemaknaanMubadalah.ringkasan}
          </p>
        </div>
      </div>

      {/* Footer Pill & Action */}
      <div className="px-5 py-3.5 bg-[#FAF8F5] border-t border-[#EFECE6] flex items-center justify-between mt-2">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          {hadith.pilarTerkait.slice(0, 2).map((pilar) => (
            <span key={pilar} className="text-[10px] font-medium text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-md whitespace-nowrap">
              {pilar}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpenDetail(hadith)}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#1F4E3D] hover:text-[#C86D51] transition"
        >
          <span>Komparasi</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
