import React, { useState, useRef } from 'react';
import type { HadithItem } from '../data/hadiths';
import { X, Download, Copy, Check, Smartphone, Square, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface QuoteCardModalProps {
  hadith: HadithItem | null;
  onClose: () => void;
}

type AspectRatio = 'story' | 'square';
type ThemePalette = 'academic-light' | 'manuscript' | 'ink';

export const QuoteCardModal: React.FC<QuoteCardModalProps> = ({ hadith, onClose }) => {
  if (!hadith) return null;

  const [aspect, setAspect] = useState<AspectRatio>('square');
  const [theme, setTheme] = useState<ThemePalette>('academic-light');
  const [isExporting, setIsExporting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Helper function to wrap text by pixel width in Canvas
  const wrapTextByWidth = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ): string[] => {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let current = '';

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  };

  // Helper function to draw rounded rectangles on Canvas
  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fill = true,
    stroke = true
  ) => {
    ctx.beginPath();
    if (typeof (ctx as any).roundRect === 'function') {
      (ctx as any).roundRect(x, y, width, height, radius);
    } else {
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  };

  // Robust HTML5 Canvas 2D Exporter (Ultra High-Definition 1080p, Zero Dependency on CSS parser)
  const handleDownload = async () => {
    setIsExporting(true);
    setErrorMessage(null);

    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Canvas 2D context tidak tersedia pada browser.');
      }

      // 1. Dimensions setup (Studio Quality 1080p)
      const isStory = aspect === 'story';
      const width = 1080;
      const height = isStory ? 1920 : 1080;
      canvas.width = width;
      canvas.height = height;

      // 2. Color Palettes
      const colors = {
        'academic-light': {
          canvasBg: '#F3F4F6',
          cardBg: '#FFFFFF',
          cardBorder: '#E5E7EB',
          textMain: '#111827',
          textMuted: '#6B7280',
          accent: '#9E744A',
          badgeBg: '#F9F7F5',
          badgeBorder: '#E5E1DC',
          badgeText: '#795A3F',
          quoteBg: '#F9F7F5',
          quoteBorder: '#E5E1DC',
          quoteText: '#292929',
          divider: '#E5E7EB',
        },
        'manuscript': {
          canvasBg: '#EAE6DF',
          cardBg: '#FAF8F5',
          cardBorder: '#D6C2AE',
          textMain: '#292929',
          textMuted: '#6B7280',
          accent: '#795A3F',
          badgeBg: '#EFECE6',
          badgeBorder: '#D6C2AE',
          badgeText: '#2B2118',
          quoteBg: '#FFFFFF',
          quoteBorder: '#E5E1DC',
          quoteText: '#292929',
          divider: '#E5E1DC',
        },
        'ink': {
          canvasBg: '#141312',
          cardBg: '#211F1D',
          cardBorder: '#3D3A36',
          textMain: '#F7F7F5',
          textMuted: '#9CA3AF',
          accent: '#C6A17B',
          badgeBg: '#C6A17B',
          badgeBorder: '#B78D66',
          badgeText: '#2B2118',
          quoteBg: '#2A2724',
          quoteBorder: '#3D3A36',
          quoteText: '#EAE8E4',
          divider: '#3D3A36',
        },
      }[theme];

      // 3. Fill Outer Canvas Background
      ctx.fillStyle = colors.canvasBg;
      ctx.fillRect(0, 0, width, height);

      // 4. Draw Main Card Box
      const cardMarginX = isStory ? 70 : 60;
      const cardMarginY = isStory ? 90 : 60;
      const cardW = width - cardMarginX * 2;
      const cardH = height - cardMarginY * 2;
      const cardRadius = 32;

      ctx.fillStyle = colors.cardBg;
      ctx.strokeStyle = colors.cardBorder;
      ctx.lineWidth = 3;
      drawRoundedRect(ctx, cardMarginX, cardMarginY, cardW, cardH, cardRadius, true, true);

      // Inner Layout Coordinates
      const paddingX = isStory ? 60 : 54;
      const leftX = cardMarginX + paddingX;
      const rightX = cardMarginX + cardW - paddingX;
      const contentW = rightX - leftX;

      let currentY = cardMarginY + (isStory ? 75 : 65);

      // 5. Header: Brand (Left) & Badge (Right)
      ctx.font = '600 22px Inter, system-ui, sans-serif';
      ctx.fillStyle = colors.textMuted;
      ctx.textAlign = 'left';
      ctx.fillText('HADIS HK • FIQH AL-USRAH', leftX, currentY + 12);

      // Badge (Right)
      const badgeText = "Qira'ah Mubadalah";
      ctx.font = '600 18px Inter, system-ui, sans-serif';
      const badgeTextWidth = ctx.measureText(badgeText).width;
      const badgeW = badgeTextWidth + 36;
      const badgeH = 38;
      const badgeX = rightX - badgeW;
      const badgeY = currentY - 10;

      ctx.fillStyle = colors.badgeBg;
      ctx.strokeStyle = colors.badgeBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, badgeX, badgeY, badgeW, badgeH, 19, true, true);

      ctx.fillStyle = colors.badgeText;
      ctx.textAlign = 'center';
      ctx.fillText(badgeText, badgeX + badgeW / 2, badgeY + 25);

      // Divider Line
      currentY += 45;
      ctx.strokeStyle = colors.divider;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(leftX, currentY);
      ctx.lineTo(rightX, currentY);
      ctx.stroke();

      currentY += isStory ? 65 : 45;

      // 6. Title (Inter Bold)
      ctx.font = isStory ? 'bold 40px Inter, system-ui, sans-serif' : 'bold 34px Inter, system-ui, sans-serif';
      ctx.fillStyle = colors.textMain;
      ctx.textAlign = 'left';
      const titleLineHeight = isStory ? 54 : 46;
      const titleLines = wrapTextByWidth(ctx, hadith.title, contentW);
      for (const line of titleLines) {
        ctx.fillText(line, leftX, currentY);
        currentY += titleLineHeight;
      }

      currentY += isStory ? 35 : 20;

      // 7. Arabic Matn (Amiri Font, RTL / Right-aligned)
      ctx.font = isStory ? "46px 'Amiri', 'Traditional Arabic', serif" : "36px 'Amiri', 'Traditional Arabic', serif";
      ctx.fillStyle = colors.accent;
      ctx.textAlign = 'right';
      const arabicLineHeight = isStory ? 92 : 74;
      const arabicLines = wrapTextByWidth(ctx, hadith.matnArab, contentW);
      for (const line of arabicLines) {
        ctx.fillText(line, rightX, currentY);
        currentY += arabicLineHeight;
      }

      currentY += isStory ? 30 : 15;

      // 8. Quote Snippet Box (Italic Reflection)
      ctx.font = isStory ? "italic 27px 'Inter', serif" : "italic 23px 'Inter', serif";
      const quoteLineHeight = isStory ? 42 : 36;
      const quoteInnerPadding = isStory ? 34 : 26;
      const quoteInnerW = contentW - quoteInnerPadding * 2;
      const quoteLines = wrapTextByWidth(ctx, `"${hadith.quoteSnippet}"`, quoteInnerW);
      const quoteBoxH = quoteLines.length * quoteLineHeight + quoteInnerPadding * 2 - 10;

      ctx.fillStyle = colors.quoteBg;
      ctx.strokeStyle = colors.quoteBorder;
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, leftX, currentY, contentW, quoteBoxH, 16, true, true);

      ctx.fillStyle = colors.quoteText;
      ctx.textAlign = 'left';
      let quoteTextY = currentY + quoteInnerPadding + (isStory ? 24 : 20);
      for (const line of quoteLines) {
        ctx.fillText(line, leftX + quoteInnerPadding, quoteTextY);
        quoteTextY += quoteLineHeight;
      }

      // 9. Footer (Anchored to bottom of the card)
      const footerY = cardMarginY + cardH - (isStory ? 80 : 65);

      // Footer Divider
      ctx.strokeStyle = colors.divider;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(leftX, footerY - 25);
      ctx.lineTo(rightX, footerY - 25);
      ctx.stroke();

      // Footer Left: Kitab & Nomor Hadis
      ctx.textAlign = 'left';
      ctx.font = 'bold 22px Inter, system-ui, sans-serif';
      ctx.fillStyle = colors.textMain;
      ctx.fillText(hadith.kitab, leftX, footerY);

      ctx.font = '500 18px Inter, system-ui, sans-serif';
      ctx.fillStyle = colors.textMuted;
      ctx.fillText(hadith.noHadis, leftX, footerY + 26);

      // Footer Right: Kajian & Platform Watermark
      ctx.textAlign = 'right';
      ctx.font = '500 18px Inter, system-ui, sans-serif';
      ctx.fillStyle = colors.textMuted;
      ctx.fillText('Kajian Hadis Hukum Keluarga', rightX, footerY);

      ctx.font = '500 17px monospace, sans-serif';
      ctx.fillStyle = colors.textMuted;
      ctx.fillText('sufyantsaury753-beep.github.io/HADIS-HK/', rightX, footerY + 26);

      // 10. Direct File Download via Blob URL
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error('Gagal mengonversi canvas ke format gambar PNG.');
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `hadis-hk-${hadith.id}-${aspect}-${theme}.png`;
        document.body.appendChild(link);
        link.click();

        setTimeout(() => {
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          setIsExporting(false);
          setDownloadSuccess(true);
          setTimeout(() => setDownloadSuccess(false), 3000);
        }, 150);
      }, 'image/png');

    } catch (err: any) {
      console.error('Failed to export canvas', err);
      setIsExporting(false);
      setErrorMessage(err.message || 'Terjadi kendala saat menghasilkan gambar.');
    }
  };

  const handleCopyText = () => {
    const text = `📖 ${hadith.title}\n\n${hadith.matnArab}\n\n"${hadith.terjemahan}"\n\nSumber: ${hadith.kitab} (${hadith.noHadis})\nPerawi: ${hadith.rawi}\n\nRefleksi Kesalingan (Mubadalah):\n${hadith.pemaknaanMubadalah.ringkasan}\n\n— Hadis Hukum Keluarga Islam (Hadis HK)\nhttps://sufyantsaury753-beep.github.io/HADIS-HK/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getThemeStyles = () => {
    switch (theme) {
      case 'manuscript':
        return {
          wrapper: 'bg-[#FAF8F5] text-[#292929] border-[#D6C2AE]',
          accent: 'text-[#795A3F]',
          badge: 'bg-[#EFECE6] text-[#2B2118] border border-[#D6C2AE]',
          quoteBox: 'bg-white text-[#292929] border-[#E5E1DC]',
          footer: 'text-[#6B7280] border-[#E5E1DC]'
        };
      case 'ink':
        return {
          wrapper: 'bg-[#211F1D] text-[#F7F7F5] border-[#3D3A36]',
          accent: 'text-[#C6A17B]',
          badge: 'bg-[#C6A17B] text-[#2B2118]',
          quoteBox: 'bg-[#2A2724] text-[#EAE8E4] border-[#3D3A36]',
          footer: 'text-[#A8A49C] border-[#3D3A36]'
        };
      case 'academic-light':
      default:
        return {
          wrapper: 'bg-[#FFFFFF] text-[#111827] border-[#E5E7EB]',
          accent: 'text-[#9E744A]',
          badge: 'bg-[#F9F7F5] text-[#795A3F] border border-[#E5E1DC]',
          quoteBox: 'bg-[#F9F7F5] text-[#292929] border-[#E5E1DC]',
          footer: 'text-[#6B7280] border-[#E5E7EB]'
        };
    }
  };

  const themeStyle = getThemeStyles();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-lg border border-[#E5E1DC] shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col md:flex-row"
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
              <button 
                onClick={onClose} 
                className="p-1 rounded text-[#6B7280] hover:text-[#292929]" 
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

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
                      ? 'bg-[#C6A17B] text-[#2B2118] border-[#B78D66] font-semibold shadow-xs'
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
                      ? 'bg-[#C6A17B] text-[#2B2118] border-[#B78D66] font-semibold shadow-xs'
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
                  <span className="w-3.5 h-3.5 rounded bg-[#FAF8F5] border border-[#D6C2AE]"></span>
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
                  <span className="w-3.5 h-3.5 rounded bg-[#211F1D]"></span>
                  <span>Tinta Gelap (Scholarly Ink)</span>
                </button>
              </div>
            </div>

            <div className="text-[11px] text-[#6B7280] bg-white p-2.5 rounded border border-[#E5E1DC]">
              💡 <strong>Kualitas Studio (1080p):</strong> Berkas diunduh dalam format gambar jernih resolusi tinggi yang ideal untuk status WhatsApp, Instagram, maupun materi presentasi akademik.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4 border-t border-[#E5E1DC]">
            <button
              onClick={handleDownload}
              disabled={isExporting}
              className={`w-full py-2.5 px-3 text-xs flex items-center justify-center gap-2 font-semibold rounded-md transition ${
                downloadSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'btn-brown'
              } disabled:opacity-50`}
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Gambar Berhasil Diunduh!</span>
                </>
              ) : isExporting ? (
                <>
                  <Download className="w-4 h-4 animate-bounce" />
                  <span>Menyiapkan Gambar...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Unduh Gambar (PNG 1080p)</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyText}
              className="btn-outline w-full py-2 px-3 text-xs flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Teks Tersalin!' : 'Salin Kutipan Teks'}</span>
            </button>
          </div>
        </div>

        {/* Right Live Render Target Canvas */}
        <div className="flex-1 p-5 sm:p-7 flex items-center justify-center bg-[#F7F7F5] overflow-y-auto min-h-[460px]">
          <div
            ref={cardRef}
            className={`shadow-md rounded-md p-6 sm:p-7 flex flex-col justify-between border transition-all ${
              themeStyle.wrapper
            } ${
              aspect === 'story'
                ? 'w-[320px] sm:w-[350px] min-h-[520px] sm:min-h-[580px]'
                : 'w-[320px] sm:w-[380px] min-h-[360px] sm:min-h-[420px]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#E5E7EB]">
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
                className={`font-arabic text-right text-base sm:text-lg font-medium leading-loose my-2 select-text ${themeStyle.accent}`}
              >
                {hadith.matnArab}
              </p>

              <div className={`p-3 rounded border my-3 text-xs leading-relaxed italic select-text ${themeStyle.quoteBox}`}>
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
