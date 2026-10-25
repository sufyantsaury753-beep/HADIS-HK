import React from 'react';
import type { HadithItem } from '../data/hadiths';
import { X, Bookmark, ArrowRight, Trash2 } from 'lucide-react';

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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full max-w-2xl rounded-lg border border-[#E5E1DC] shadow-xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-3.5 bg-[#F7F7F5] border-b border-[#E5E1DC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#795A3F] fill-[#795A3F]" />
            <h3 className="text-base font-semibold text-[#292929]">
              Koleksi Hadis Tersimpan ({savedHadiths.length})
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded text-[#6B7280] hover:text-[#292929]"
            aria-label="Tutup Koleksi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 space-y-2.5 flex-1">
          {savedHadiths.length === 0 ? (
            <div className="text-center py-12 text-[#6B7280]">
              <Bookmark className="w-8 h-8 mx-auto mb-2 text-[#D1CCC4]" />
              <p className="text-sm font-medium text-[#292929]">Belum ada hadis yang disimpan</p>
              <p className="text-xs text-[#6B7280] mt-1 max-w-xs mx-auto">
                Tandai hadis yang relevan dengan menekan ikon simpan untuk menyusun catatan referensi Anda.
              </p>
            </div>
          ) : (
            savedHadiths.map((hadith) => (
              <div 
                key={hadith.id} 
                className="bg-white p-3.5 rounded border border-[#E5E1DC] flex items-center justify-between gap-3 hover:border-[#C6A17B] transition"
              >
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onOpenDetail(hadith);
                  }}
                >
                  <div className="text-[11px] font-mono text-[#795A3F] mb-0.5">
                    {hadith.kitab} • {hadith.noHadis}
                  </div>
                  <h4 className="text-sm font-semibold text-[#292929] hover:text-[#795A3F] transition">
                    {hadith.title}
                  </h4>
                  <p className="text-xs text-[#6B7280] line-clamp-1 italic mt-0.5">
                    "{hadith.quoteSnippet}"
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDetail(hadith);
                    }}
                    className="btn-primary px-3 py-1.5 text-xs flex items-center gap-1"
                    title="Buka Teks Hadis"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onRemoveSaved(hadith.id)}
                    className="p-1.5 text-[#6B7280] hover:text-red-700 hover:bg-red-50 rounded transition border border-transparent hover:border-red-200"
                    title="Hapus dari koleksi"
                    aria-label="Hapus dari koleksi"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="px-5 py-3 bg-[#F7F7F5] border-t border-[#E5E1DC] text-right">
          <button
            onClick={onClose}
            className="btn-secondary px-4 py-1.5 text-xs"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
