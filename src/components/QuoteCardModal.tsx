import React, { useState, useRef } from 'react';
import type { HadithItem } from '../data/hadiths';
import { X, Download, Copy, Check, Smartphone, Square, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';

interface QuoteCardModalProps {
  hadith: HadithItem | null;
  onClose: () => void;
}

type AspectRatio = 'story' | 'square';
type ThemePalette = 'academic-light' | 'manuscript' | 'ink';

export const QuoteCardModal: React.FC<QuoteCardModalProps> = ({ hadith, onClose }) => {
  if (!hadith) return null;

  const [aspect, setAspect] = useState<AspectRatio>('story');
  const [theme, setTheme] = useState<ThemePalette>('academic-light');
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
      link.download = `hadis-hk-${hadith.id}-${aspect}.png`;
      link.click();
    } catch (err) {
      console.error('Failed to export canvas', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyText = () => {
    const text = `📖 ${hadith.title}\n\n${hadith.matnArab}\n\n"${hadith.terjemahan}"\n\nSumber: ${hadith.kitab} (${hadith.noHadis})\nPerawi: ${hadith.rawi}\n\nRefleksi Kesalingan (Mubadalah):\n${hadith.pemaknaanMubadalah.ringkasan}\n\n— Hadis Hukum Keluarga Islam (Hadis HK)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getThemeStyles = () => {
    switch (theme) {
      case 'manuscript':
        return {
          wrapper: 'bg-[#F7F7F5] text-[#292929] border-[#D6C2AE]',
          accent: 'text-[#795A3F]',
          badge: 'bg-[#E5E1DC] text-[#292929]',
          quoteBox: 'bg-white text-[#292929] border-[#E5E1DC]',
          footer: 'text-[#6B7280] border-[#E5E1DC]'
        };
      case 'ink':
        return {
          wrapper: 'bg-[#23211E] text-[#F7F7F5] border-[#3D3A36]',
          accent: 'text-[#C6A17B]',
          badge: 'bg-[#C6A17B] text-[#2B2118]',
          quoteBox: 'bg-white/5 text-[#EAE8E4] border-white/10',
          footer: 'text-[#A8A49C] border-white/10'
        };
      case 'academic-light':
      default:
        return {
          wrapper: 'bg-[#FFFFFF] text-[#1A1A1A] border-[#E5E1DC]',
          accent: 'text-[#795A3F]',
          badge: 'bg-[#F7F7F5] text-[#795A3F] border border-[#E5E1DC]',
          quoteBox: 'bg-[#F7F7F5] text-[#292929] border-[#E5E1DC]',
          footer: 'text-[#6B7280] border-[#F0ECE6]'
        };
    }
  };

  const themeStyle = getThemeStyles();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-lg border border-[#E5E1DC] shadow-xl overflow-hidden my-auto max-h-[94vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Control Panel */}
        <div className="p-5 sm:p-6 md:w-80 border-b md:border-b-0 md:border-r border-[#E5E1DC] bg-[#FAF9F7] flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E1DC]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#795A3F]" />
                <h3 className="text-sm font-semibold text-[#292929]">
                  Ekspor Kartu Kutipan
                </h3>
              </div>
              <button onClick={onClose} className="p-1 rounded text-[#6B7280] hover:text-[#292929]" aria-label="Tutup">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Format Selector */}
            <div className="mb-5">
              <span className="text-xs font-semibold text-[#4B5563] block mb-2">
                Rasio Format Gambar:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setAspect('story')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-medium border transition ${
                    aspect === 'story'
                      ? 'bg-[#C6A17B] text-[#2B2118] border-[#B78D66] font-semibold'
                      : 'bg-white text-[#4B5563] border-[#E5E1DC] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Story (9:16)</span>
                </button>
                <button
                  onClick={() => setAspect('square')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-medium border transition ${
                    aspect === 'square'
                      ? 'bg-[#C6A17B] text-[#2B2118] border-[#B78D66] font-semibold'
                      : 'bg-white text-[#4B5563] border-[#E5E1DC] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <Square className="w-3.5 h-3.5" />
                  <span>Post (1:1)</span>
                </button>
              </div>
            </div>

            {/* Theme Selector */}
            <div className="mb-5">
              <span className="text-xs font-semibold text-[#4B5563] block mb-2">
                Format Visual:
              </span>
              <div className="space-y-1.5">
                <button
                  onClick={() => setTheme('academic-light')}
                  className={`w-full flex items-center gap-2.5 p-2 rounded text-xs text-left border transition ${
                    theme === 'academic-light'
                      ? 'border-[#C6A17B] bg-white ring-1 ring-[#C6A17B] font-semibold text-[#292929]'
                      : 'border-[#E5E1DC] bg-white text-[#4B5563] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded bg-white border border-[#D6C2AE]"></span>
                  <span>Putih Bersih (Academic)</span>
                </button>

                <button
                  onClick={() => setTheme('manuscript')}
                  className={`w-full flex items-center gap-2.5 p-2 rounded text-xs text-left border transition ${
                    theme === 'manuscript'
                      ? 'border-[#C6A17B] bg-white ring-1 ring-[#C6A17B] font-semibold text-[#292929]'
                      : 'border-[#E5E1DC] bg-white text-[#4B5563] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded bg-[#F7F7F5] border border-[#D6C2AE]"></span>
                  <span>Kertas Naskah (Manuscript)</span>
                </button>

                <button
                  onClick={() => setTheme('ink')}
                  className={`w-full flex items-center gap-2.5 p-2 rounded text-xs text-left border transition ${
                    theme === 'ink'
                      ? 'border-[#C6A17B] bg-white ring-1 ring-[#C6A17B] font-semibold text-[#292929]'
                      : 'border-[#E5E1DC] bg-white text-[#4B5563] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded bg-[#23211E]"></span>
                  <span>Tinta Gelap (Scholarly Ink)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4 border-t border-[#E5E1DC]">
            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="btn-primary w-full py-2.5 px-3 text-xs flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Memproses Berkas...' : 'Unduh Gambar (PNG)'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className="btn-secondary w-full py-2 px-3 text-xs flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Teks Tersalin!' : 'Salin Kutipan Teks'}</span>
            </button>
          </div>
        </div>

        {/* Right Live Render Target Canvas */}
        <div className="flex-1 p-5 sm:p-7 flex items-center justify-center bg-[#F7F7F5] overflow-y-auto">
          <div
            ref={cardRef}
            className={`shadow-lg rounded-md p-6 sm:p-7 flex flex-col justify-between border transition-all ${
              themeStyle.wrapper
            } ${
              aspect === 'story'
                ? 'w-[320px] sm:w-[340px] min-h-[520px] sm:min-h-[580px]'
                : 'w-[320px] sm:w-[380px] min-h-[360px] sm:min-h-[420px]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-current/15">
                <span className="text-[11px] font-semibold tracking-wider uppercase font-mono">
                  Hadis HK • Fiqh al-Usrah
                </span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${themeStyle.badge}`}>
                  Qira'ah Mubadalah
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-semibold leading-snug mb-3">
                {hadith.title}
              </h4>

              <p 
                dir="rtl" 
                className={`font-arabic text-right text-base sm:text-lg font-medium leading-loose my-2 ${themeStyle.accent}`}
              >
                {hadith.matnArab}
              </p>

              <div className={`p-3 rounded border my-3 text-xs leading-relaxed italic ${themeStyle.quoteBox}`}>
                "{hadith.quoteSnippet}"
              </div>
            </div>

            <div className={`pt-3 border-t flex items-center justify-between text-[11px] ${themeStyle.footer}`}>
              <div>
                <span className="font-semibold block">{hadith.kitab}</span>
                <span className="text-[10px] opacity-80">{hadith.noHadis}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] opacity-80 block">Kajian Hadis Keluarga</span>
                <span className="font-mono text-[10px]">sufyantsaury753-beep.github.io/HADIS-HK/</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
