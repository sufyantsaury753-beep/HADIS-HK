import React from 'react';
import { STAGES } from '../data/hadiths';
import type { HadithItem } from '../data/hadiths';
import { Bookmark, Share2, ArrowRight } from 'lucide-react';

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
    <article className="bg-white rounded-md border border-[#E5E1DC] hover:border-[#C6A17B] transition-all flex flex-col justify-between overflow-hidden shadow-xs">
      {/* Card Header & Metadata */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#F0ECE6]">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-[#795A3F] bg-[#F7F7F5] border border-[#E5E1DC] px-2 py-0.5 rounded">
              {stage ? stage.title.replace(/^\d+\.\s*/, '') : hadith.stageId}
            </span>
            <span className="text-[#6B7280]">
              {hadith.kitab} • {hadith.noHadis}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleSave(hadith.id)}
              className="p-1.5 rounded hover:bg-[#F7F7F5] text-[#6B7280] hover:text-[#292929] transition"
              title={isSaved ? "Hapus dari koleksi tersimpan" : "Simpan hadis"}
              aria-label={isSaved ? "Hapus dari koleksi tersimpan" : "Simpan hadis"}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'text-[#795A3F] fill-[#795A3F]' : ''}`} />
            </button>
            <button
              onClick={() => onOpenQuote(hadith)}
              className="p-1.5 rounded hover:bg-[#F7F7F5] text-[#6B7280] hover:text-[#292929] transition"
              title="Ekspor Kartu Kutipan"
              aria-label="Ekspor Kartu Kutipan"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 
          onClick={() => onOpenDetail(hadith)}
          className="text-base font-semibold text-[#292929] hover:text-[#795A3F] cursor-pointer transition leading-snug mb-1.5"
        >
          {hadith.title}
        </h3>
        <p className="text-xs text-[#6B7280] mb-3.5">
          Perawi: <span className="text-[#292929] font-medium">{hadith.rawi}</span>
        </p>

        {/* Arabic Matn Box: Clean Scholarly Typography */}
        <div className="bg-[#F7F7F5] rounded-md p-3.5 border border-[#E5E1DC] mb-3">
          <p 
            dir="rtl" 
            className="font-arabic text-right text-lg text-[#1A1A1A] leading-loose line-clamp-2"
          >
            {hadith.matnArab}
          </p>
        </div>

        {/* Translation Snippet */}
        <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed mb-4">
          "{hadith.terjemahan}"
        </p>

        {/* Mubadalah Scholarly Note */}
        <div className="bg-white p-3 rounded-md border-l-2 border-[#C6A17B] border-y border-r border-[#E5E1DC]">
          <span className="text-[11px] font-semibold text-[#795A3F] uppercase tracking-wider block mb-1">
            Perspektif Kesalingan (Mubadalah):
          </span>
          <p className="text-xs text-[#374151] line-clamp-2 leading-relaxed">
            {hadith.pemaknaanMubadalah.ringkasan}
          </p>
        </div>
      </div>

      {/* Card Action & Footer */}
      <div className="px-5 py-3 bg-[#FAF9F7] border-t border-[#E5E1DC] flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          {hadith.pilarTerkait.slice(0, 2).map((pilar) => (
            <span key={pilar} className="text-[10px] text-[#6B7280] bg-white border border-[#E5E1DC] px-2 py-0.5 rounded">
              {pilar}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpenDetail(hadith)}
          className="btn-primary px-3 py-1.5 text-xs flex items-center gap-1.5"
        >
          <span>Telaah Teks</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
