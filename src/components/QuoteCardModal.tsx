import React, { useState, useRef } from 'react';
import type { HadithItem } from '../data/hadiths';
import { X, Download, Copy, Check, Sparkles, Scale, Smartphone, Square } from 'lucide-react';
import html2canvas from 'html2canvas';

interface QuoteCardModalProps {
  hadith: HadithItem | null;
  onClose: () => void;
}

type AspectRatio = 'story' | 'square';
type ThemePalette = 'emerald' | 'sand' | 'terracotta' | 'slate';

export const QuoteCardModal: React.FC<QuoteCardModalProps> = ({ hadith, onClose }) => {
  if (!hadith) return null;

  const [aspect, setAspect] = useState<AspectRatio>('story');
  const [theme, setTheme] = useState<ThemePalette>('emerald');
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsExporting(true);

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: null,
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `hadis-mubadalah-${hadith.id}-${aspect}.png`;
      link.click();
    } catch (err) {
      console.error('Failed to export canvas', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyText = () => {
    const text = `🌿 ${hadith.title}\n\n"${hadith.quoteSnippet}"\n\n📖 Hadis:\n${hadith.matnArab}\n\n"${hadith.terjemahan}"\n(${hadith.kitab}, ${hadith.noHadis})\n\n⚖️ Ruh Kesalingan (Mubadalah):\n${hadith.pemaknaanMubadalah.ringkasan}\n\n#HadisKeluarga #Mubadalah #KeluargaSakinah`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Color theme definitions
  const getThemeStyles = () => {
    switch (theme) {
      case 'sand':
        return {
          wrapper: 'bg-[#F5F1E8] text-[#1E232A] border-[#DED6C4]',
          accent: 'text-[#1F4E3D]',
          badge: 'bg-[#1F4E3D] text-[#FAF8F5]',
          quoteBox: 'bg-[#EAE4D5]/80 text-[#2B352E] border-[#D3C9B4]',
          sub: 'text-[#5A635B]',
          footer: 'text-[#7B857D] border-[#D9D1BF]'
        };
      case 'terracotta':
        return {
          wrapper: 'bg-gradient-to-b from-[#8C3A27] to-[#682415] text-[#FFF6F2] border-[#A84B34]',
          accent: 'text-[#FAD2C0]',
          badge: 'bg-[#FFF6F2] text-[#8C3A27]',
          quoteBox: 'bg-white/10 text-white border-white/20',
          sub: 'text-[#FAD2C0]/90',
          footer: 'text-[#FAD2C0]/75 border-white/15'
        };
      case 'slate':
        return {
          wrapper: 'bg-gradient-to-b from-[#1E242C] to-[#12161A] text-[#F3F4F6] border-[#374151]',
          accent: 'text-[#E5B57A]',
          badge: 'bg-[#E5B57A] text-[#111827]',
          quoteBox: 'bg-white/5 text-gray-200 border-white/10',
          sub: 'text-gray-300',
          footer: 'text-gray-400 border-gray-800'
        };
      case 'emerald':
      default:
        return {
          wrapper: 'bg-gradient-to-b from-[#173E30] to-[#0E281F] text-[#F7F9F8] border-[#225744]',
          accent: 'text-[#E7C693]',
          badge: 'bg-[#E7C693] text-[#173E30]',
          quoteBox: 'bg-white/10 text-white border-white/15',
          sub: 'text-[#D0E0D6]',
          footer: 'text-[#B0C7B9] border-white/10'
        };
    }
  };

  const themeStyle = getThemeStyles();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="bg-[#FAF8F5] w-full max-w-4xl rounded-3xl border border-[#DDD6C7] shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Controls & Customization */}
        <div className="p-5 sm:p-6 md:w-80 border-b md:border-b-0 md:border-r border-[#E7E2D6] bg-white flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C86D51]" />
                <h3 className="font-serif-heading text-lg font-bold text-[#1F4E3D]">
                  Desain Kartu Kutipan
                </h3>
              </div>
              <button onClick={onClose} className="p-1 rounded-lg text-gray-400 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-5">
              Sesuaikan format dan palet warna untuk dibagikan ke media sosial.
            </p>

            {/* Format Aspect Ratio Selector */}
            <div className="mb-5">
              <span className="text-xs font-bold text-gray-700 block mb-2">
                Format Ukuran:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setAspect('story')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                    aspect === 'story'
                      ? 'bg-[#1F4E3D] text-white border-[#1F4E3D]'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Story (9:16)</span>
                </button>
                <button
                  onClick={() => setAspect('square')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                    aspect === 'square'
                      ? 'bg-[#1F4E3D] text-white border-[#1F4E3D]'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Square className="w-4 h-4" />
                  <span>Post (1:1)</span>
                </button>
              </div>
            </div>

            {/* Theme Selector */}
            <div className="mb-6">
              <span className="text-xs font-bold text-gray-700 block mb-2">
                Palet Warna Estetik:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTheme('emerald')}
                  className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium border text-left transition ${
                    theme === 'emerald' ? 'border-[#173E30] ring-2 ring-[#173E30]/20 font-bold' : 'border-gray-200'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-[#173E30] shrink-0 border border-white"></span>
                  <span>Sage Emerald</span>
                </button>

                <button
                  onClick={() => setTheme('sand')}
                  className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium border text-left transition ${
                    theme === 'sand' ? 'border-[#8C7A5E] ring-2 ring-[#8C7A5E]/20 font-bold' : 'border-gray-200'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-[#F5F1E8] shrink-0 border border-gray-300"></span>
                  <span>Warm Sand</span>
                </button>

                <button
                  onClick={() => setTheme('terracotta')}
                  className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium border text-left transition ${
                    theme === 'terracotta' ? 'border-[#8C3A27] ring-2 ring-[#8C3A27]/20 font-bold' : 'border-gray-200'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-[#8C3A27] shrink-0 border border-white"></span>
                  <span>Terracotta</span>
                </button>

                <button
                  onClick={() => setTheme('slate')}
                  className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium border text-left transition ${
                    theme === 'slate' ? 'border-[#1E242C] ring-2 ring-[#1E242C]/20 font-bold' : 'border-gray-200'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-[#1E242C] shrink-0 border border-gray-500"></span>
                  <span>Dark Slate</span>
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4 border-t border-gray-100">
            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1F4E3D] hover:bg-[#16382C] text-white text-xs font-bold transition shadow-sm disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Memproses Gambar...' : 'Unduh Gambar (PNG)'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F4EFE6] hover:bg-[#EAE3D4] text-[#1F4E3D] text-xs font-semibold transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Teks Tersalin!' : 'Salin Caption Medsos'}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Live Card Preview Canvas */}
        <div className="flex-1 p-5 sm:p-7 flex items-center justify-center bg-[#ECE6DA]/50 overflow-y-auto">
          {/* Exportable Card Target */}
          <div
            ref={cardRef}
            className={`shadow-2xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${
              themeStyle.wrapper
            } ${
              aspect === 'story'
                ? 'w-[320px] sm:w-[350px] min-h-[560px] sm:min-h-[620px]'
                : 'w-[320px] sm:w-[390px] min-h-[380px] sm:min-h-[440px]'
            }`}
          >
            {/* Top Brand Pill */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-black/10 flex items-center justify-center">
                    <Scale className={`w-3.5 h-3.5 ${themeStyle.accent}`} />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase font-serif-heading">
                    Hadis Keluarga
                  </span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${themeStyle.badge}`}>
                  Qira'ah Mubadalah
                </span>
              </div>

              {/* Title */}
              <h4 className="font-serif-heading text-base sm:text-lg font-bold leading-snug mb-3">
                {hadith.title}
              </h4>

              {/* Arabic Matn */}
              <p 
                dir="rtl" 
                className={`font-arabic text-right text-lg sm:text-xl font-medium leading-loose my-3 ${themeStyle.accent}`}
              >
                {hadith.matnArab}
              </p>

              {/* Quote Snippet / Key Wisdom */}
              <div className={`p-3.5 sm:p-4 rounded-2xl border my-3 ${themeStyle.quoteBox}`}>
                <p className="text-xs sm:text-sm font-medium italic leading-relaxed">
                  "{hadith.quoteSnippet}"
                </p>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className={`pt-3 border-t flex items-center justify-between text-[11px] ${themeStyle.footer}`}>
              <div>
                <span className="font-semibold block">{hadith.kitab}</span>
                <span className="text-[10px] opacity-80">{hadith.noHadis}</span>
              </div>
              <div className="text-right">
                <span className="font-medium text-[10px] opacity-75">Refleksi Berkeluarga</span>
                <span className="font-bold text-[11px] block">#FiqhAlUsrah</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
