import React from 'react';
import type { HadithItem } from '../data/hadiths';
import { X, Heart, ArrowRight, Trash2 } from 'lucide-react';

interface SavedHadithModalProps {
  savedHadiths: HadithItem[];
  onClose: () => void;
  onOpenDetail: (hadith: HadithItem) => void;
  onRemoveSaved: (id: string) => void;
}

export const SavedHadithModal: React.FC<SavedHadithModalProps> = ({
  savedHadiths,
  onClose,
  onOpenDetail,
  onRemoveSaved,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-[#FAF8F5] w-full max-w-2xl rounded-3xl border border-[#DDD6C7] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-white border-b border-[#E7E2D6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C86D51] fill-[#C86D51]" />
            <h3 className="font-serif-heading text-lg font-bold text-[#1F4E3D]">
              Hadis Pilihan Tersimpan ({savedHadiths.length})
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-gray-400 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-3 flex-1">
          {savedHadiths.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Heart className="w-10 h-10 mx-auto mb-2 text-gray-300" />
              <p className="text-sm font-medium">Belum ada hadis yang disimpan.</p>
              <p className="text-xs text-gray-400 mt-1">Klik ikon hati pada hadis mana pun untuk menyimpannya di sini.</p>
            </div>
          ) : (
            savedHadiths.map((hadith) => (
              <div 
                key={hadith.id} 
                className="bg-white p-4 rounded-2xl border border-[#E7E1D4] flex items-center justify-between gap-3 hover:border-[#1F4E3D] transition shadow-xs group"
              >
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onOpenDetail(hadith);
                  }}
                >
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8EFEA] text-[#1F4E3D] mb-1 inline-block">
                    {hadith.kitab} • {hadith.noHadis}
                  </span>
                  <h4 className="font-serif-heading text-sm font-bold text-[#1F4E3D] group-hover:text-[#C86D51] transition">
                    {hadith.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-1 italic mt-0.5">
                    "{hadith.quoteSnippet}"
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDetail(hadith);
                    }}
                    className="p-2 text-xs font-semibold text-[#1F4E3D] bg-[#F3EFE6] hover:bg-[#EAE4D7] rounded-xl transition flex items-center gap-1"
                    title="Buka Detail"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveSaved(hadith.id)}
                    className="p-2 text-gray-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="px-6 py-3.5 bg-[#FAF8F5] border-t border-[#E7E2D6] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#EAE4D7] text-gray-700 text-xs font-bold hover:bg-[#DDD6C7] transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
