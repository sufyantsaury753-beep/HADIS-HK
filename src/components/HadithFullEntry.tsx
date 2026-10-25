import React, { useState } from 'react';
import type { HadithItem } from '../data/hadiths';
import { STAGES } from '../data/hadiths';
import { 
  Bookmark, 
  Share2, 
  Copy, 
  Check, 
  Volume2, 
  CheckCircle2, 
  AlertCircle,
  ZoomIn,
  ZoomOut,
  Lightbulb,
  Scale,
  BookOpen
} from 'lucide-react';

interface HadithFullEntryProps {
  hadith: HadithItem;
  entryIndex: number;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenQuote: (hadith: HadithItem) => void;
}

export const HadithFullEntry: React.FC<HadithFullEntryProps> = ({
  hadith,
  entryIndex,
  isSaved,
  onToggleSave,
  onOpenQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'mubadalah' | 'konvensional'>('mubadalah');
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<number>(24);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const stage = STAGES.find(s => s.id === hadith.stageId);

  const handleCopy = () => {
    const text = `${hadith.title}\n\n${hadith.matnArab}\n\n"${hadith.terjemahan}"\n\nSumber: ${hadith.kitab} (${hadith.noHadis})\nPerawi: ${hadith.rawi}\n\nPembacaan Mubadalah:\n${hadith.pemaknaanMubadalah.ringkasan}\n\n— Hadis Hukum Keluarga Islam (Hadis HK)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlayAudio = () => {
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
    <article className="bg-white border-b border-[#E5E7EB] pb-8 mb-8 last:border-b-0 last:mb-0">
      {/* 1. Header Metadata Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-[#F3F4F6]">
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="font-mono text-xs font-bold text-[#9E744A]">
            #{entryIndex + 1}
          </span>
          <span className="font-medium text-[#2B2118] bg-[#F9F7F5] border border-[#E5E1DC] px-2 py-0.5 rounded">
            {stage ? stage.title : hadith.stageId}
          </span>
          <span className="font-semibold text-[#111827]">
            {hadith.kitab} • {hadith.noHadis}
          </span>
          <span className="text-[#6B7280]">
            (Perawi: <strong className="text-[#374151] font-medium">{hadith.rawi}</strong>)
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          {/* Audio */}
          <button
            onClick={handlePlayAudio}
            className="p-1.5 rounded hover:bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] transition flex items-center gap-1 text-xs"
            title="Dengarkan terjemahan audio"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="text-[11px] hidden md:inline">{isPlayingAudio ? 'Memutar...' : 'Audio'}</span>
          </button>

          {/* Font Zoom */}
          <div className="flex items-center border border-[#E5E7EB] rounded bg-white">
            <button
              onClick={() => setFontSize(Math.max(18, fontSize - 2))}
              className="px-1.5 py-0.5 text-xs text-[#4B5563] hover:text-[#111827] border-r border-[#E5E7EB]"
              title="Perkecil Font Arab"
            >
              <ZoomOut className="w-3 h-3" />
            </button>
            <button
              onClick={() => setFontSize(Math.min(36, fontSize + 2))}
              className="px-1.5 py-0.5 text-xs text-[#4B5563] hover:text-[#111827]"
              title="Perbesar Font Arab"
            >
              <ZoomIn className="w-3 h-3" />
            </button>
          </div>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] transition flex items-center gap-1 text-xs"
            title="Salin Hadis"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="text-[11px] hidden md:inline">{copied ? 'Tersalin' : 'Salin'}</span>
          </button>

          {/* Bookmark */}
          <button
            onClick={() => onToggleSave(hadith.id)}
            className="p-1.5 rounded hover:bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] transition"
            title={isSaved ? "Hapus dari simpanan" : "Simpan hadis"}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-[#9E744A] fill-[#9E744A]' : ''}`} />
          </button>

          {/* Quote Card */}
          <button
            onClick={() => onOpenQuote(hadith)}
            className="btn-brown px-2.5 py-1 text-xs flex items-center gap-1"
            title="Ekspor Gambar Kutipan"
          >
            <Share2 className="w-3 h-3" />
            <span className="hidden sm:inline">Kutipan</span>
          </button>
        </div>
      </div>

      {/* 2. Judul Hadis */}
      <h3 className="text-base sm:text-lg font-semibold text-[#111827] leading-snug mb-3">
        {hadith.title}
      </h3>

      {/* 3. Teks Matn Arab (Full Text, Amiri Font, RTL) */}
      <div className="bg-white border border-[#E5E7EB] rounded-md p-4 sm:p-5 mb-4">
        <p 
          dir="rtl" 
          style={{ fontSize: `${fontSize}px` }}
          className="font-arabic text-right text-[#111827] leading-loose sm:leading-[2.4] select-text"
        >
          {hadith.matnArab}
        </p>
      </div>

      {/* 4. Terjemahan Bahasa Indonesia Lengkap */}
      <div className="mb-5 pl-3 border-l-2 border-[#C6A17B]">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] block mb-1">
          Terjemahan Makna:
        </span>
        <p className="text-sm sm:text-base text-[#374151] leading-relaxed italic">
          "{hadith.terjemahan}"
        </p>
      </div>

      {/* 5. Syarah & Analisis Hermeneutika Langsung di Halaman */}
      <div className="border border-[#E5E7EB] rounded-md overflow-hidden mb-4">
        {/* Tab Controls */}
        <div className="flex border-b border-[#E5E7EB] bg-[#FFFFFF]">
          <button
            onClick={() => setActiveTab('mubadalah')}
            className={`flex-1 py-2 px-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition border-b-2 ${
              activeTab === 'mubadalah'
                ? 'border-[#9E744A] text-[#9E744A] bg-[#F9F7F5]'
                : 'border-transparent text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Pembacaan Mubadalah (Kesalingan)</span>
          </button>

          <button
            onClick={() => setActiveTab('konvensional')}
            className={`flex-1 py-2 px-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition border-b-2 ${
              activeTab === 'konvensional'
                ? 'border-[#9E744A] text-[#9E744A] bg-[#F9F7F5]'
                : 'border-transparent text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tinjauan Fiqh Arus Utama</span>
          </button>
        </div>

        {/* Tab Content 1: Mubadalah */}
        {activeTab === 'mubadalah' && (
          <div className="p-4 sm:p-5 space-y-3.5 bg-white">
            <div>
              <p className="text-xs sm:text-sm text-[#111827] leading-relaxed font-medium">
                {hadith.pemaknaanMubadalah.ringkasan}
              </p>
            </div>

            <div className="bg-[#F9F7F5] p-3 rounded border border-[#E5E1DC]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#795A3F] block mb-0.5">
                'Illat Hukum (Tujuan Etis):
              </span>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                {hadith.pemaknaanMubadalah.illatHukum}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-[#111827] block mb-1.5">
                Prinsip Resiprokal Dua Arah:
              </span>
              <div className="space-y-1.5">
                {hadith.pemaknaanMubadalah.poinKesalingan.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#374151]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E744A] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Konvensional */}
        {activeTab === 'konvensional' && (
          <div className="p-4 sm:p-5 space-y-3 bg-white">
            <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
              {hadith.pemaknaanKonvensional.ringkasan}
            </p>

            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-[#6B7280] block">
                Karakteristik Pembacaan Tekstual:
              </span>
              {hadith.pemaknaanKonvensional.poin.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                  <AlertCircle className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 6. Kaidah Operasional bagi Pasutri Hari Ini */}
      <div className="bg-white border border-[#E5E7EB] rounded-md p-4 mb-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111827] mb-2.5">
          <Lightbulb className="w-3.5 h-3.5 text-[#9E744A]" />
          <span>Kaidah Operasional Pasutri Hari Ini:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4B5563]">
          {hadith.pemaknaanMubadalah.aplikasiHariIni.map((app, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="font-mono text-[#9E744A] font-semibold">{idx + 1}.</span>
              <span className="leading-relaxed">{app}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Footer Metadata Tags & Pillars */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B7280]">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-[#6B7280]">Pilar:</span>
          {hadith.pilarTerkait.map((pilar) => (
            <span key={pilar} className="text-[10px] text-[#374151] bg-[#F9F7F5] border border-[#E5E1DC] px-1.5 py-0.5 rounded">
              {pilar}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {hadith.tags.map((tag) => (
            <span key={tag} className="text-[10px] text-[#6B7280]">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
