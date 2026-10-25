import React, { useState } from 'react';
import { STAGES } from '../data/hadiths';
import type { HadithItem } from '../data/hadiths';
import { 
  X, 
  Copy, 
  Check, 
  Volume2, 
  Share2, 
  Bookmark, 
  Lightbulb, 
  CheckCircle2, 
  AlertCircle,
  ZoomIn,
  ZoomOut,
  FileText
} from 'lucide-react';

interface HadithDetailModalProps {
  hadith: HadithItem | null;
  onClose: () => void;
  onOpenQuote: (hadith: HadithItem) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const HadithDetailModal: React.FC<HadithDetailModalProps> = ({
  hadith,
  onClose,
  onOpenQuote,
  isSaved,
  onToggleSave,
}) => {
  if (!hadith) return null;

  const [mobileTab, setMobileTab] = useState<'mubadalah' | 'konvensional'>('mubadalah');
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<number>(24);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const stage = STAGES.find(s => s.id === hadith.stageId);

  const handleCopy = () => {
    const text = `${hadith.title}\n\n${hadith.matnArab}\n\n"${hadith.terjemahan}"\n\nSumber: ${hadith.kitab} (${hadith.noHadis})\nPerawi: ${hadith.rawi}\n\nPembacaan Mubadalah:\n${hadith.pemaknaanMubadalah.ringkasan}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlayAudioSimulation = () => {
    setIsPlayingAudio(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(hadith.terjemahan);
      utterance.lang = 'id-ID';
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingAudio(false), 3000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full max-w-5xl rounded-lg border border-[#E5E1DC] shadow-xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar: Clean Academic Bar */}
        <div className="px-5 py-3.5 bg-[#F7F7F5] border-b border-[#E5E1DC] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="font-semibold text-[#795A3F] bg-white border border-[#E5E1DC] px-2.5 py-1 rounded">
              {stage ? stage.title : hadith.stageId}
            </span>
            <span className="text-[#6B7280]">
              {hadith.kitab} • {hadith.noHadis}
            </span>
            {hadith.pertemuan && (
              <span className="text-[#6B7280] bg-white border border-[#E5E1DC] px-2 py-0.5 rounded">
                Silabus Pertemuan {hadith.pertemuan}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onToggleSave(hadith.id)}
              className="p-1.5 rounded hover:bg-white text-[#6B7280] hover:text-[#292929] transition border border-transparent hover:border-[#E5E1DC]"
              title={isSaved ? "Hapus dari koleksi tersimpan" : "Simpan hadis"}
              aria-label={isSaved ? "Hapus dari koleksi tersimpan" : "Simpan hadis"}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'text-[#795A3F] fill-[#795A3F]' : ''}`} />
            </button>
            <button
              onClick={() => onOpenQuote(hadith)}
              className="p-1.5 rounded hover:bg-white text-[#6B7280] hover:text-[#292929] transition border border-transparent hover:border-[#E5E1DC]"
              title="Ekspor Kutipan"
              aria-label="Ekspor Kutipan"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white text-[#6B7280] hover:text-[#292929] transition border border-transparent hover:border-[#E5E1DC] ml-1"
              title="Tutup Jendela"
              aria-label="Tutup Jendela"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Title & Transmission */}
          <div className="border-b border-[#F0ECE6] pb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#292929] leading-snug mb-2">
              {hadith.title}
            </h2>
            <div className="text-xs text-[#6B7280] flex items-center gap-2">
              <span>Perawi Primer: <strong className="text-[#292929]">{hadith.rawi}</strong></span>
              <span>•</span>
              <span>Koleksi: <strong className="text-[#292929]">{hadith.kitab}</strong></span>
            </div>
          </div>

          {/* Arabic Text Panel: Pure Legibility */}
          <div className="bg-[#FAF9F7] rounded-md p-5 border border-[#E5E1DC]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EBE6DE]">
              <span className="text-xs font-semibold text-[#6B7280] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#795A3F]" />
                Teks Matn Arab
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePlayAudioSimulation}
                  className="px-2 py-1 rounded text-xs text-[#4B5563] hover:text-[#292929] hover:bg-white border border-transparent hover:border-[#E5E1DC] flex items-center gap-1 transition"
                  title="Dengarkan pembacaan terjemahan"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isPlayingAudio ? 'Memutar...' : 'Audio'}</span>
                </button>
                <div className="flex items-center border border-[#E5E1DC] rounded bg-white">
                  <button
                    onClick={() => setFontSize(Math.max(18, fontSize - 2))}
                    className="px-1.5 py-1 text-xs text-[#4B5563] hover:text-[#292929] border-r border-[#E5E1DC]"
                    title="Perkecil Font"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setFontSize(Math.min(36, fontSize + 2))}
                    className="px-1.5 py-1 text-xs text-[#4B5563] hover:text-[#292929]"
                    title="Perbesar Font"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-2 py-1 rounded text-xs text-[#4B5563] hover:text-[#292929] hover:bg-white border border-transparent hover:border-[#E5E1DC] flex items-center gap-1 transition"
                  title="Salin Hadis"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>
            </div>

            <p 
              dir="rtl" 
              style={{ fontSize: `${fontSize}px` }}
              className="font-arabic text-right text-[#1A1A1A] leading-loose sm:leading-[2.4] my-2 select-text"
            >
              {hadith.matnArab}
            </p>

            <div className="mt-4 pt-4 border-t border-[#EBE6DE]">
              <span className="text-xs font-semibold text-[#6B7280] block mb-1">
                Terjemahan Bahasa Indonesia:
              </span>
              <p className="text-sm text-[#374151] leading-relaxed">
                "{hadith.terjemahan}"
              </p>
            </div>
          </div>

          {/* Mobile Tab Control for Dual Hermeneutics */}
          <div className="md:hidden flex rounded border border-[#E5E1DC] bg-[#F7F7F5] p-0.5">
            <button
              onClick={() => setMobileTab('mubadalah')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded transition ${
                mobileTab === 'mubadalah'
                  ? 'bg-white text-[#292929] shadow-xs'
                  : 'text-[#6B7280]'
              }`}
            >
              Pembacaan Mubadalah
            </button>
            <button
              onClick={() => setMobileTab('konvensional')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded transition ${
                mobileTab === 'konvensional'
                  ? 'bg-white text-[#292929] shadow-xs'
                  : 'text-[#6B7280]'
              }`}
            >
              Fiqh Arus Utama
            </button>
          </div>

          {/* DUAL VIEW COMPARISON: Split-Screen Desktop, Tabbed on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Column 1: Pemaknaan Konvensional */}
            <div className={`bg-[#F7F7F5] rounded-md p-5 border border-[#E5E1DC] flex flex-col justify-between ${
              mobileTab === 'konvensional' ? 'block' : 'hidden md:flex'
            }`}>
              <div>
                <div className="pb-2.5 mb-3 border-b border-[#E5E1DC] flex items-center justify-between">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    1. Tinjauan Fiqh Arus Utama (Tekstual)
                  </h4>
                  <span className="text-[10px] text-[#6B7280] bg-white border border-[#E5E1DC] px-1.5 py-0.5 rounded">
                    Formal-Legalistik
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed mb-4">
                  {hadith.pemaknaanKonvensional.ringkasan}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-[#6B7280] block">
                    Karakteristik Pembacaan:
                  </span>
                  {hadith.pemaknaanKonvensional.poin.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                      <AlertCircle className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Pembacaan Mubadalah */}
            <div className={`bg-white rounded-md p-5 border border-[#C6A17B] ring-1 ring-[#C6A17B] flex flex-col justify-between ${
              mobileTab === 'mubadalah' ? 'block' : 'hidden md:flex'
            }`}>
              <div>
                <div className="pb-2.5 mb-3 border-b border-[#F0ECE6] flex items-center justify-between">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#795A3F]">
                    2. Pembacaan Mubadalah (Kesalingan)
                  </h4>
                  <span className="text-[10px] font-medium text-[#2B2118] bg-[#F7F7F5] border border-[#C6A17B] px-1.5 py-0.5 rounded">
                    Etika Relasional
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#292929] leading-relaxed mb-4 font-medium">
                  {hadith.pemaknaanMubadalah.ringkasan}
                </p>

                <div className="space-y-3">
                  <div className="bg-[#FAF9F7] p-3 rounded border border-[#E5E1DC]">
                    <span className="text-[10px] font-semibold text-[#795A3F] uppercase tracking-wider block mb-0.5">
                      'Illat Hukum (Tujuan Etis):
                    </span>
                    <p className="text-xs text-[#4B5563]">
                      {hadith.pemaknaanMubadalah.illatHukum}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-[#292929] block mb-1.5">
                      Prinsip Kesalingan Dua Arah:
                    </span>
                    <div className="space-y-1.5">
                      {hadith.pemaknaanMubadalah.poinKesalingan.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#374151]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#795A3F] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Application for Couples */}
          <div className="bg-[#FAF9F7] rounded-md p-5 border border-[#E5E1DC]">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-[#795A3F]" />
              <h4 className="text-sm font-semibold text-[#292929]">
                Kaidah Operasional bagi Pasutri Hari Ini
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hadith.pemaknaanMubadalah.aplikasiHariIni.map((app, idx) => (
                <div key={idx} className="bg-white p-3 rounded border border-[#E5E1DC] flex items-start gap-2.5">
                  <span className="text-xs font-mono font-semibold text-[#795A3F] shrink-0 mt-0.5">
                    {idx + 1}.
                  </span>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {app}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags & Pillars */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-[#6B7280] border-t border-[#F0ECE6]">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span>Pilar Terkait:</span>
              {hadith.pilarTerkait.map((pilar) => (
                <span key={pilar} className="font-medium text-[#292929] bg-[#F7F7F5] border border-[#E5E1DC] px-2 py-0.5 rounded">
                  {pilar}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {hadith.tags.map((tag) => (
                <span key={tag} className="text-[#6B7280]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-5 py-3.5 bg-[#F7F7F5] border-t border-[#E5E1DC] flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenQuote(hadith)}
            className="btn-primary px-3.5 py-2 text-xs flex items-center gap-2"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Ekspor Kartu Kutipan</span>
          </button>

          <button
            onClick={onClose}
            className="btn-secondary px-4 py-2 text-xs"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
