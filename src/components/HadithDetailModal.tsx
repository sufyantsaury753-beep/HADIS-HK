import React, { useState } from 'react';
import { STAGES } from '../data/hadiths';
import type { HadithItem } from '../data/hadiths';
import { 
  X, 
  Copy, 
  Check, 
  Volume2, 
  Share2, 
  Heart, 
  Scale, 
  BookOpen, 
  Lightbulb, 
  CheckCircle2, 
  AlertCircle,
  ZoomIn
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
  const [fontSizeClass, setFontSizeClass] = useState<'text-xl' | 'text-2xl' | 'text-3xl'>('text-2xl');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const stage = STAGES.find(s => s.id === hadith.stageId);

  const handleCopy = () => {
    const text = `${hadith.title}\n\n${hadith.matnArab}\n\n"${hadith.terjemahan}"\n\nSumber: ${hadith.kitab} (${hadith.noHadis})\n\nRefleksi Mubadalah:\n${hadith.pemaknaanMubadalah.ringkasan}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlayAudioSimulation = () => {
    setIsPlayingAudio(true);
    // Speech synthesis for text-to-speech if supported, or gentle simulation
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

  const toggleFontSize = () => {
    if (fontSizeClass === 'text-xl') setFontSizeClass('text-2xl');
    else if (fontSizeClass === 'text-2xl') setFontSizeClass('text-3xl');
    else setFontSizeClass('text-xl');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-[#FAF8F5] w-full max-w-5xl rounded-3xl border border-[#DDD6C7] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-white border-b border-[#E7E2D6] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1F4E3D] text-white">
              {stage ? stage.title : hadith.stageId}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAE4D7] text-[#4B5563]">
              {hadith.kitab} • {hadith.noHadis}
            </span>
            {hadith.pertemuan && (
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                Pertemuan {hadith.pertemuan}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onToggleSave(hadith.id)}
              className="p-2 rounded-xl text-gray-500 hover:text-[#C86D51] hover:bg-[#F3EFE6] transition"
              title="Simpan Hadis"
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'text-[#C86D51] fill-[#C86D51]' : ''}`} />
            </button>
            <button
              onClick={() => onOpenQuote(hadith)}
              className="p-2 rounded-xl text-gray-500 hover:text-[#1F4E3D] hover:bg-[#F3EFE6] transition"
              title="Buat Kartu Kutipan"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-[#F3EFE6] transition ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Main Title & Rawi */}
          <div>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1F4E3D] leading-tight mb-1.5">
              {hadith.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Diriwayatkan dari sahabat mulia: <strong className="text-[#1F4E3D]">{hadith.rawi}</strong>
            </p>
          </div>

          {/* Arabic Matn Box */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E7E1D4] shadow-xs relative">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Teks Asli Matn Hadis
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePlayAudioSimulation}
                  className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition ${
                    isPlayingAudio ? 'bg-[#1F4E3D] text-white' : 'text-gray-600 hover:bg-[#F3EFE6]'
                  }`}
                  title="Dengarkan pembacaan terjemahan"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="text-[11px] hidden sm:inline">
                    {isPlayingAudio ? 'Memutar...' : 'Audio'}
                  </span>
                </button>
                <button
                  onClick={toggleFontSize}
                  className="p-1.5 rounded-lg text-gray-600 hover:bg-[#F3EFE6] transition"
                  title="Ubah Ukuran Huruf Arab"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg text-gray-600 hover:bg-[#F3EFE6] transition flex items-center gap-1"
                  title="Salin Hadis"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span className="text-[11px] hidden sm:inline">{copied ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>
            </div>

            <p 
              dir="rtl" 
              className={`font-arabic text-right ${fontSizeClass} text-[#1A202C] leading-loose sm:leading-[2.4] font-medium tracking-wide my-2`}
            >
              {hadith.matnArab}
            </p>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                Terjemahan Makna:
              </span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                "{hadith.terjemahan}"
              </p>
            </div>
          </div>

          {/* Section: Mobile Tab Switcher */}
          <div className="md:hidden flex rounded-xl bg-[#EBE5D8] p-1 border border-[#DDD6C7]">
            <button
              onClick={() => setMobileTab('mubadalah')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
                mobileTab === 'mubadalah'
                  ? 'bg-[#1F4E3D] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Pembacaan Mubadalah</span>
            </button>
            <button
              onClick={() => setMobileTab('konvensional')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
                mobileTab === 'konvensional'
                  ? 'bg-white text-gray-800 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Fiqh Arus Utama</span>
            </button>
          </div>

          {/* Section: DUAL COMPARISON VIEW (Split-Screen on Desktop, Tabbed on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* COLUMN 1: Pemaknaan Konvensional / Arus Utama */}
            <div className={`bg-white rounded-2xl p-5 border border-[#E5DFD3] shadow-xs flex flex-col justify-between ${
              mobileTab === 'konvensional' ? 'block' : 'hidden md:flex'
            }`}>
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                  <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Tinjauan Fiqh Arus Utama
                    </h4>
                    <p className="text-[11px] text-gray-400">Pembacaan Tekstual-Legalistik Tradisional</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 bg-amber-50/60 p-3 rounded-xl border border-amber-100/80">
                  {hadith.pemaknaanKonvensional.ringkasan}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    Karakteristik Pemaknaan:
                  </span>
                  {hadith.pemaknaanKonvensional.poin.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400 italic">
                *Cenderung formal-sepihak dan sering memosisikan istri sebagai objek hukum.
              </div>
            </div>

            {/* COLUMN 2: Pembacaan Mubadalah (Kesalingan) */}
            <div className={`bg-[#F1F7F3] rounded-2xl p-5 border-2 border-[#1F4E3D]/30 shadow-xs flex flex-col justify-between relative overflow-hidden ${
              mobileTab === 'mubadalah' ? 'block' : 'hidden md:flex'
            }`}>
              <div className="absolute top-0 right-0 bg-[#1F4E3D] text-[#E7C693] text-[10px] font-bold px-3 py-0.5 rounded-bl-xl tracking-wider uppercase">
                Paradigma Kesalingan
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#CCDCD2]">
                  <div className="w-6 h-6 rounded-md bg-[#1F4E3D] text-white flex items-center justify-center">
                    <Scale className="w-3.5 h-3.5 text-[#E7C693]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F4E3D]">
                      Pembacaan Mubadalah & Maqashid
                    </h4>
                    <p className="text-[11px] text-[#4A6B5D]">Resiprokal, Adil Hakiki & Berakhlak</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#1B352A] leading-relaxed mb-4 bg-white/80 p-3.5 rounded-xl border border-[#CCDCD2] font-medium">
                  {hadith.pemaknaanMubadalah.ringkasan}
                </p>

                <div className="space-y-3">
                  <div className="bg-[#E5EFE8] p-2.5 rounded-xl border border-[#D0E0D6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F4E3D] block mb-0.5">
                      'Illat Hukum (Tujuan Etis):
                    </span>
                    <p className="text-xs text-[#2A4437]">
                      {hadith.pemaknaanMubadalah.illatHukum}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4E3D] block mb-1.5">
                      Pilar Kesalingan Dua Arah:
                    </span>
                    <div className="space-y-1.5">
                      {hadith.pemaknaanMubadalah.poinKesalingan.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#2A4437]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4E3D] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#CCDCD2] text-[11px] text-[#1F4E3D] font-medium flex items-center gap-1">
                <span>Rujukan: Metodologi Qira'ah Mubadalah (Fiqh al-Usrah)</span>
              </div>
            </div>
          </div>

          {/* Practical Application Box */}
          <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#E7DECD] shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#FBEFE3] text-[#C86D51] flex items-center justify-center">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h4 className="font-serif-heading text-base font-bold text-[#1F4E3D]">
                Aplikasi Nyata bagi Pasutri Hari Ini
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hadith.pemaknaanMubadalah.aplikasiHariIni.map((app, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-[#ECE5D8] flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAE4D7] text-[#1F4E3D] text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {app}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags & Pillars */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-gray-500 font-medium">Pilar Sakinah:</span>
              {hadith.pilarTerkait.map((pilar) => (
                <span key={pilar} className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#1F4E3D]/10 text-[#1F4E3D]">
                  {pilar}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {hadith.tags.map((tag) => (
                <span key={tag} className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#E7E2D6] flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenQuote(hadith)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C86D51] hover:bg-[#B35D43] text-white text-xs font-bold transition shadow-xs"
          >
            <Share2 className="w-4 h-4" />
            <span>Buat Kartu Kutipan (IG / WA Story)</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#EAE4D7] hover:bg-[#DDD6C7] text-gray-800 text-xs font-bold transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
