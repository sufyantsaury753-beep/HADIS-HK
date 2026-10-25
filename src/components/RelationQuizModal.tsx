import React, { useState } from 'react';
import { X, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';

interface RelationQuizModalProps {
  onClose: () => void;
  onExploreTopic: (tag: string) => void;
}

interface Question {
  id: number;
  pilar: string;
  text: string;
  options: {
    label: string;
    score: number;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    pilar: "Mu'asyarah bi al-Ma'ruf (Kerja Domestik)",
    text: "Ketika pekerjaan rumah tangga menumpuk setelah seharian beraktivitas:",
    options: [
      { label: "Saling membantu tanpa rasa gengsi; siapa yang memiliki kelonggaran waktu langsung turun tangan.", score: 3 },
      { label: "Biasa dibicarakan terlebih dahulu, meskipun inisiatif terkadang hanya dari salah satu pihak.", score: 2 },
      { label: "Dianggap sebagai kewajiban mutlak istri semata tanpa keterlibatan pihak suami.", score: 1 }
    ]
  },
  {
    id: 2,
    pilar: "Taradhin (Kerelaan Finansial)",
    text: "Dalam urusan pengelolaan keuangan dan nafkah keluarga:",
    options: [
      { label: "Transparan dan terbuka mengenai penghasilan serta saling menghargai kontribusi masing-masing.", score: 3 },
      { label: "Hanya membahas kebutuhan pokok; pengeluaran lain jarang didiskusikan secara terbuka.", score: 2 },
      { label: "Tertutup, didominasi sepihak, atau nafkah ditahan sebagai instrumen kepatuhan.", score: 1 }
    ]
  },
  {
    id: 3,
    pilar: "Tasyawur (Musyawarah Pengambilan Keputusan)",
    text: "Ketika menghadapi perbedaan pendapat atau keputusan krusial keluarga:",
    options: [
      { label: "Selalu berdialog dan mencari jalan tengah yang melegakan kedua belah pihak.", score: 3 },
      { label: "Salah satu pihak lebih sering mengalah secara terpaksa demi menghindari perdebatan.", score: 2 },
      { label: "Keputusan didikte secara sepihak tanpa mempertimbangkan masukan pasangan.", score: 1 }
    ]
  },
  {
    id: 4,
    pilar: "Zawaj & Taradhin (Keintiman & Kehangatan Relasi)",
    text: "Dalam hal relasi keintiman dan afeksi suami istri:",
    options: [
      { label: "Saling memperhatikan kenyamanan bersama; tidak ada paksaan saat salah satu sedang lelah atau sakit.", score: 3 },
      { label: "Cukup baik, meski terkadang ragu mengomunikasikan batasan atau preferensi pribadi.", score: 2 },
      { label: "Merasa tertekan atau diancam dengan dalih kewajiban agama ketika kondisi fisik tidak memungkinkan.", score: 1 }
    ]
  },
  {
    id: 5,
    pilar: "Kaff al-Adza (Pengendalian Emosi & Resolusi Konflik)",
    text: "Ketika terjadi perselisihan atau amarah memuncak:",
    options: [
      { label: "Mengambil jeda (time-out); menolak kekerasan fisik, perkataan merendahkan, maupun ancaman talak.", score: 3 },
      { label: "Terkadang terbawa nada tinggi atau melakukan silent treatment selama beberapa hari.", score: 2 },
      { label: "Terjadi bentakan kasar, pelemparan barang, atau tindakan fisik agresif.", score: 1 }
    ]
  }
];

export const RelationQuizModal: React.FC<RelationQuizModalProps> = ({ onClose, onExploreTopic }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentIdx + 1 < QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setAnswers([]);
    setIsFinished(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getResultFeedback = () => {
    if (totalScore >= 13) {
      return {
        level: 'Relasi Selaras & Berkeadilan (Mubadalah Terwujud)',
        color: 'border-l-4 border-emerald-600 bg-[#F7FAF8]',
        desc: 'Relasi Anda telah mencerminkan pilar kesalingan (Mubadalah) secara nyata. Pertahankan komunikasi dialogis dan keteladanan akhlak Nabi ﷺ dalam dinamika rumah tangga.',
        recommendedTag: 'Apresiasi Pasangan'
      };
    } else if (totalScore >= 9) {
      return {
        level: 'Relasi Moderat (Perlu Penguatan Tasyawur & Empati)',
        color: 'border-l-4 border-[#C6A17B] bg-[#FAF9F7]',
        desc: 'Fondasi kebersamaan telah terbentuk, namun terdapat aspek yang perlu diperkuat, khususnya dalam pembagian beban peran harian atau transparansi komunikasi.',
        recommendedTag: 'Kerja Domestik'
      };
    } else {
      return {
        level: 'Perlu Evaluasi Komunikasi & Penataan Ulang Batasan',
        color: 'border-l-4 border-rose-600 bg-rose-50/50',
        desc: 'Terdapat indikasi ketimpangan atau gesekan emosional yang membutuhkan penyikapan segera. Pelajari prinsip kaff al-adza, pencegahan KDRT, dan bila perlu libatkan mediator/hakam yang bijaksana.',
        recommendedTag: 'Anti-KDRT'
      };
    }
  };

  const result = isFinished ? getResultFeedback() : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full max-w-xl rounded-lg border border-[#E5E1DC] shadow-xl overflow-hidden my-auto p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E1DC] mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#F7F7F5] border border-[#E5E1DC] flex items-center justify-center text-[#795A3F]">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#292929]">
                Evaluasi Mandiri 5 Pilar Sakinah
              </h3>
              <p className="text-xs text-[#6B7280]">Instrumen Refleksi Kesalingan Relasi Pasutri</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded text-[#6B7280] hover:text-[#292929] hover:bg-[#F7F7F5]"
            aria-label="Tutup Evaluasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isFinished ? (
          <div>
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-[#6B7280] mb-1.5 font-mono">
                <span>Indikator {currentIdx + 1} / {QUESTIONS.length}</span>
                <span>{Math.round(((currentIdx + 1) / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-[#F0ECE6] h-1.5 rounded overflow-hidden">
                <div 
                  className="bg-[#C6A17B] h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Category */}
            <span className="text-[11px] font-semibold text-[#795A3F] bg-[#F7F7F5] border border-[#E5E1DC] px-2 py-0.5 rounded inline-block mb-2">
              Pilar: {QUESTIONS[currentIdx].pilar}
            </span>

            {/* Question */}
            <h4 className="text-sm sm:text-base font-semibold text-[#292929] mb-4 leading-snug">
              {QUESTIONS[currentIdx].text}
            </h4>

            {/* Options */}
            <div className="space-y-2.5">
              {QUESTIONS[currentIdx].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full text-left p-3.5 rounded border border-[#E5E1DC] hover:border-[#C6A17B] hover:bg-[#FAF9F7] text-xs sm:text-sm text-[#292929] transition leading-relaxed"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-2 space-y-4">
            <div className="p-4 rounded border border-[#E5E1DC] bg-[#FAF9F7]">
              <span className="text-xs font-mono text-[#6B7280] block mb-1">
                Hasil Evaluasi: {totalScore} / 15 Poin
              </span>
              <h4 className="text-base font-semibold text-[#292929] mb-2">
                {result?.level}
              </h4>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                {result?.desc}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  if (result?.recommendedTag) onExploreTopic(result.recommendedTag);
                }}
                className="btn-primary w-full sm:flex-1 py-2.5 px-4 text-xs flex items-center justify-center gap-1.5"
              >
                <span>Telaah Hadis Terkait: #{result?.recommendedTag}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={resetQuiz}
                className="btn-secondary w-full sm:w-auto py-2.5 px-4 text-xs flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
