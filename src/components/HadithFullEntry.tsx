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
  BookOpen,
  GitCompare,
  Layers,
  ChevronDown,
  ChevronUp
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
  const [activeTab, setActiveTab] = useState<'mubadalah' | 'mazhab' | 'konvensional'>('mubadalah');
  const [showSanad, setShowSanad] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(24);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const stage = STAGES.find(s => s.id === hadith.stageId);

  const handleCopy = () => {
    let text = `${hadith.title}\n\n`;
    if (hadith.sanadArab) {
      text += `[Teks Sanad Arab]\n${hadith.sanadArab}\n\n`;
    }
    text += `[Teks Matn Arab]\n${hadith.matnArab}\n\n`;
    if (hadith.terjemahanSanad) {
      text += `Terjemahan Sanad:\n${hadith.terjemahanSanad}\n\n`;
    }
    text += `Terjemahan Sabda:\n"${hadith.terjemahan}"\n\n`;
    text += `Takhrij Sumber:\n• Kitab: ${hadith.kitab}\n• Bab: ${hadith.kitabBab}\n• Nomor Hadis: ${hadith.noHadis}\n• Perawi Utama: ${hadith.rawi}\n\n`;
    text += `Perbandingan 4 Mazhab & KHI:\n`;
    text += `• Mazhab Hanafi: ${hadith.perbandinganMazhab.hanafi}\n`;
    text += `• Mazhab Maliki: ${hadith.perbandinganMazhab.maliki}\n`;
    text += `• Mazhab Syafi'i: ${hadith.perbandinganMazhab.syafii}\n`;
    text += `• Mazhab Hanbali: ${hadith.perbandinganMazhab.hanbali}\n`;
    text += `• KHI & Konteks Indonesia: ${hadith.perbandinganMazhab.khiDanKonteks}\n\n`;
    text += `Pembacaan Mubadalah (Kesalingan):\n${hadith.pemaknaanMubadalah.ringkasan}\n\n`;
    text += `— Platform Digital Hadis Hukum Keluarga Islam (Hadis HK)\nhttps://sufyantsaury753-beep.github.io/HADIS-HK/`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const readText = `${hadith.title}. ${hadith.terjemahanSanad ? 'Jalur sanad: ' + hadith.terjemahanSanad + '. ' : ''}Sabda Nabi: ${hadith.terjemahan}`;
      const utterance = new SpeechSynthesisUtterance(readText);
      utterance.lang = 'id-ID';
      utterance.rate = 0.92;
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 mb-4 border-b border-[#F3F4F6]">
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="font-mono text-xs font-bold text-[#9E744A]">
            #{entryIndex + 1}
          </span>
          <span className="font-medium text-[#2B2118] bg-[#F9F7F5] border border-[#E5E1DC] px-2 py-0.5 rounded text-[11px]">
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
        <div className="flex items-center gap-1.5 self-end sm:self-auto flex-wrap">
          {/* Toggle Sanad */}
          <button
            onClick={() => setShowSanad(!showSanad)}
            className={`px-2 py-1 rounded text-xs transition flex items-center gap-1 border ${
              showSanad 
                ? 'bg-[#F9F7F5] border-[#D6C2AE] text-[#795A3F] font-medium' 
                : 'bg-white border-[#E5E7EB] text-[#4B5563] hover:text-[#111827]'
            }`}
            title="Tampilkan / Sembunyikan Sanad Lengkap"
          >
            <Layers className="w-3 h-3 text-[#9E744A]" />
            <span className="text-[11px]">{showSanad ? 'Sanad Aktif' : 'Matn Saja'}</span>
            {showSanad ? <ChevronUp className="w-2.5 h-2.5 ml-0.5" /> : <ChevronDown className="w-2.5 h-2.5 ml-0.5" />}
          </button>

          {/* Audio */}
          <button
            onClick={handlePlayAudio}
            className="p-1.5 rounded hover:bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] transition flex items-center gap-1 text-xs border border-transparent hover:border-[#E5E7EB]"
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
            className="p-1.5 rounded hover:bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] transition flex items-center gap-1 text-xs border border-transparent hover:border-[#E5E7EB]"
            title="Salin Hadis Lengkap Beserta Sanad & Syarah"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="text-[11px] hidden md:inline">{copied ? 'Tersalin' : 'Salin'}</span>
          </button>

          {/* Bookmark */}
          <button
            onClick={() => onToggleSave(hadith.id)}
            className="p-1.5 rounded hover:bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] transition border border-transparent hover:border-[#E5E7EB]"
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

      {/* 2. Judul Hadis & Takhrij Bab */}
      <div className="mb-3">
        <h3 className="text-base sm:text-lg font-semibold text-[#111827] leading-snug mb-1">
          {hadith.title}
        </h3>
        <p className="text-xs text-[#6B7280] flex items-center gap-1.5">
          <span className="font-semibold text-[#4B5563]">Bab Kitab:</span>
          <span className="italic">{hadith.kitabBab}</span>
        </p>
      </div>

      {/* 3. Teks Arab Lengkap (Sanad + Matn dalam Amiri Font RTL) */}
      <div className="bg-white border border-[#E5E7EB] rounded-md p-4 sm:p-5 mb-4">
        {/* Jalur Sanad Arab (bila diaktifkan) */}
        {showSanad && hadith.sanadArab && (
          <div className="border-b border-dashed border-[#E5E7EB] pb-3.5 mb-3.5">
            <div className="flex items-center justify-end gap-1.5 text-[11px] font-semibold text-[#795A3F] mb-1.5">
              <span>سَنَدُ الرِّوَايَةِ (Rantai Sanad)</span>
            </div>
            <p 
              dir="rtl" 
              style={{ fontSize: `${Math.max(16, fontSize - 3)}px` }}
              className="font-arabic text-right text-[#4B5563] leading-loose select-text"
            >
              {hadith.sanadArab}
            </p>
          </div>
        )}

        {/* Teks Matn Utama */}
        <div>
          <div className="flex items-center justify-end gap-1.5 text-[11px] font-semibold text-[#111827] mb-1.5">
            <span>نَصُّ المَتْنِ (Sabda / Matn Utama)</span>
          </div>
          <p 
            dir="rtl" 
            style={{ fontSize: `${fontSize}px` }}
            className="font-arabic text-right text-[#111827] font-medium leading-loose sm:leading-[2.4] select-text"
          >
            {hadith.matnArab}
          </p>
        </div>
      </div>

      {/* 4. Terjemahan Bahasa Indonesia Lengkap */}
      <div className="mb-5 pl-3 border-l-2 border-[#C6A17B] space-y-2">
        {showSanad && hadith.terjemahanSanad && (
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#795A3F] block mb-0.5">
              Terjemahan Rantai Sanad:
            </span>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed italic">
              {hadith.terjemahanSanad}
            </p>
          </div>
        )}

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] block mb-0.5">
            Terjemahan Matn / Sabda:
          </span>
          <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed font-normal">
            "{hadith.terjemahan}"
          </p>
        </div>

        <div className="pt-1 text-[11px] text-[#6B7280]">
          <strong>Takhrij:</strong> {hadith.kitab}, {hadith.kitabBab}, {hadith.noHadis}
        </div>
      </div>

      {/* 5. Tiga Tab Analisis Hermeneutika & Muqaranah Mazhab */}
      <div className="border border-[#E5E7EB] rounded-md overflow-hidden mb-4">
        {/* Tab Controls */}
        <div className="flex border-b border-[#E5E7EB] bg-[#FFFFFF] flex-wrap">
          {/* Tab 1: Mubadalah */}
          <button
            onClick={() => setActiveTab('mubadalah')}
            className={`flex-1 min-w-[140px] py-2 px-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition border-b-2 ${
              activeTab === 'mubadalah'
                ? 'border-[#9E744A] text-[#9E744A] bg-[#F9F7F5]'
                : 'border-transparent text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Pembacaan Mubadalah (Kesalingan)</span>
          </button>

          {/* Tab 2: Perbandingan Mazhab & KHI */}
          <button
            onClick={() => setActiveTab('mazhab')}
            className={`flex-1 min-w-[140px] py-2 px-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition border-b-2 ${
              activeTab === 'mazhab'
                ? 'border-[#9E744A] text-[#9E744A] bg-[#F9F7F5]'
                : 'border-transparent text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Perbandingan 4 Mazhab & KHI</span>
          </button>

          {/* Tab 3: Konvensional */}
          <button
            onClick={() => setActiveTab('konvensional')}
            className={`flex-1 min-w-[140px] py-2 px-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition border-b-2 ${
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
                'Illat Hukum (Tujuan Etis & Maqashid):
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

        {/* Tab Content 2: Perbandingan 4 Mazhab & KHI */}
        {activeTab === 'mazhab' && (
          <div className="p-4 sm:p-5 space-y-4 bg-white">
            <div className="border-b border-[#F3F4F6] pb-2">
              <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wide">
                Muqaranah al-Madzahib (Perbandingan Fiqh Klasik Empat Mazhab)
              </h4>
              <p className="text-[11px] text-[#6B7280]">
                Tinjauan hukum dari empat imam mujtahid mengenai dalil hadis ini serta implementasinya dalam hukum keluarga Islam di Indonesia.
              </p>
            </div>

            {/* 4 Mazhab Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Hanafi */}
              <div className="p-3 rounded border border-[#E5E7EB] bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#111827]">Mazhab Hanafi</span>
                  <span className="text-[10px] text-[#6B7280] bg-[#F3F4F6] px-1.5 py-0.5 rounded font-mono">Imam Abu Hanifah</span>
                </div>
                <p className="text-xs text-[#374151] leading-relaxed">
                  {hadith.perbandinganMazhab.hanafi}
                </p>
              </div>

              {/* Maliki */}
              <div className="p-3 rounded border border-[#E5E7EB] bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#111827]">Mazhab Maliki</span>
                  <span className="text-[10px] text-[#6B7280] bg-[#F3F4F6] px-1.5 py-0.5 rounded font-mono">Imam Malik bin Anas</span>
                </div>
                <p className="text-xs text-[#374151] leading-relaxed">
                  {hadith.perbandinganMazhab.maliki}
                </p>
              </div>

              {/* Syafi'i */}
              <div className="p-3 rounded border border-[#E5E7EB] bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#111827]">Mazhab Syafi'i</span>
                  <span className="text-[10px] text-[#6B7280] bg-[#F3F4F6] px-1.5 py-0.5 rounded font-mono">Imam asy-Syafi'i</span>
                </div>
                <p className="text-xs text-[#374151] leading-relaxed">
                  {hadith.perbandinganMazhab.syafii}
                </p>
              </div>

              {/* Hanbali */}
              <div className="p-3 rounded border border-[#E5E7EB] bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#111827]">Mazhab Hanbali</span>
                  <span className="text-[10px] text-[#6B7280] bg-[#F3F4F6] px-1.5 py-0.5 rounded font-mono">Imam Ahmad bin Hanbal</span>
                </div>
                <p className="text-xs text-[#374151] leading-relaxed">
                  {hadith.perbandinganMazhab.hanbali}
                </p>
              </div>
            </div>

            {/* Kompilasi Hukum Islam (KHI) & Konteks Indonesia */}
            <div className="p-3.5 rounded border border-[#D6C2AE] bg-[#FDFBF7]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-xs font-bold text-[#795A3F] uppercase tracking-wide">
                  Kompilasi Hukum Islam (KHI) & Konteks Hukum Indonesia:
                </span>
              </div>
              <p className="text-xs text-[#374151] leading-relaxed">
                {hadith.perbandinganMazhab.khiDanKonteks}
              </p>
            </div>
          </div>
        )}

        {/* Tab Content 3: Konvensional */}
        {activeTab === 'konvensional' && (
          <div className="p-4 sm:p-5 space-y-3 bg-white">
            <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
              {hadith.pemaknaanKonvensional.ringkasan}
            </p>

            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-[#6B7280] block">
                Karakteristik Pembacaan Tekstual Arus Utama:
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
          <span className="text-[11px] text-[#6B7280]">Pilar Sakinah:</span>
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
