import React, { useState } from 'react';
import { X, Sparkles, RefreshCw, ArrowRight, Heart } from 'lucide-react';

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
    text: "Ketika cucian piring menumpuk atau rumah berantakan setelah hari yang melelahkan:",
    options: [
      { label: "Kami saling membantu tanpa gengsi, siapa yang senggang langsung turun tangan.", score: 3 },
      { label: "Biasa dibicarakan dulu, kadang salah satu berinisiatif.", score: 2 },
      { label: "Pasti dianggap tugas salah satu pihak (biasanya istri) tanpa bantuan.", score: 1 }
    ]
  },
  {
    id: 2,
    pilar: "Taradhin (Kerelaan Finansial)",
    text: "Dalam urusan pengelolaan keuangan dan nafkah keluarga:",
    options: [
      { label: "Sangat transparan, saling terbuka penghasilan & saling menghargai kontribusi.", score: 3 },
      { label: "Cukup tahu kebutuhan pokok, pengeluaran pribadi jarang dibahas.", score: 2 },
      { label: "Kerap menjadi sumber perselisihan, tertutup, atau ada dominasi sepihak.", score: 1 }
    ]
  },
  {
    id: 3,
    pilar: "Tasyawur (Musyawarah Pengambilan Keputusan)",
    text: "Ketika menghadapi perbedaan pendapat atau rencana besar (pendidikan anak, mudik, karier):",
    options: [
      { label: "Selalu duduk bersama dan mencari jalan tengah yang melegakan kedua belah pihak.", score: 3 },
      { label: "Kadang kompromi, tapi lebih sering salah satu mengalah agar tidak ribut.", score: 2 },
      { label: "Keputusan didikte sepihak; keberatan pihak lain jarang didengarkan.", score: 1 }
    ]
  },
  {
    id: 4,
    pilar: "Zawaj & Taradhin (Keintiman & Kehangatan Ranjang)",
    text: "Dalam relasi keintiman dan afeksi suami-istri:",
    options: [
      { label: "Saling mendengarkan kenyamanan pasangan, tidak ada pemaksaan saat salah satu lelah/sakit.", score: 3 },
      { label: "Cukup baik, meski kadang ragu mengomunikasikan preferensi atau kelelahan.", score: 2 },
      { label: "Merasa tertekan, takut disalahkan atau dikutuk jika sedang tidak mampu melayani.", score: 1 }
    ]
  },
  {
    id: 5,
    pilar: "Kaff al-Adza (Manajemen Emosi & Anti-KDRT)",
    text: "Ketika pertengkaran hebat atau amarah memuncak:",
    options: [
      { label: "Kami mengambil jeda (time-out), tidak ada kekerasan fisik, cacian, atau ancaman talak.", score: 3 },
      { label: "Kadang terbawa nada tinggi atau mendiamkan (silent treatment) beberapa hari.", score: 2 },
      { label: "Sering terjadi bentakan kasar, banting barang, atau dorongan fisik.", score: 1 }
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
        level: 'Sangat Harmonis & Berkeadilan (Mubadalah Tinggi)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        desc: 'Alhamdulillah! Rumah tangga Anda telah mempraktikkan pilar kesalingan (Mubadalah) secara kuat. Pertahankan komunikasi terbuka dan terus jadikan keteladanan Nabi ﷺ sebagai penguat cinta.',
        recommendedTag: 'Apresiasi Pasangan'
      };
    } else if (totalScore >= 9) {
      return {
        level: 'Relasi Cukup Baik (Perlu Penguatan Tasyawur & Empati)',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
        desc: 'Fondasi kebaikan sudah ada, namun masih ada ruang yang perlu ditingkatkan, khususnya dalam pembagian peran harian atau keterbukaan emosional.',
        recommendedTag: 'Kerja Domestik'
      };
    } else {
      return {
        level: 'Membutuhkan Pemulihan & Evaluasi Komunikasi',
        color: 'text-rose-700 bg-rose-50 border-rose-200',
        desc: 'Terdapat sinyal ketimpangan atau gesekan emosional yang butuh segera disikapi. Telusuri hadis-hadis pencegahan KDRT, hak nafkah, dan konsultasikan dengan konselor pernikahan.',
        recommendedTag: 'Anti-KDRT'
      };
    }
  };

  const result = isFinished ? getResultFeedback() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-[#FAF8F5] w-full max-w-xl rounded-3xl border border-[#DDD6C7] shadow-2xl overflow-hidden my-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E2D6] mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#FBEFE3] text-[#C86D51] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-heading text-lg font-bold text-[#1F4E3D]">
                Kuis Refleksi Pasutri
              </h3>
              <p className="text-[11px] text-gray-500">Evaluasi Mandiri 5 Pilar Sakinah & Kesalingan</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-gray-400 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isFinished ? (
          <div>
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-1">
                <span>Pertanyaan {currentIdx + 1} dari {QUESTIONS.length}</span>
                <span>{Math.round(((currentIdx + 1) / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-[#E5DFD3] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#1F4E3D] h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Category */}
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#E8EFEA] text-[#1F4E3D] inline-block mb-3">
              {QUESTIONS[currentIdx].pilar}
            </span>

            {/* Question Text */}
            <h4 className="font-serif-heading text-base sm:text-lg font-bold text-[#1F4E3D] mb-5 leading-snug">
              {QUESTIONS[currentIdx].text}
            </h4>

            {/* Options */}
            <div className="space-y-3">
              {QUESTIONS[currentIdx].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full text-left p-4 rounded-2xl bg-white hover:bg-[#F2ECE0] border border-[#E3DCCF] hover:border-[#1F4E3D] text-xs sm:text-sm text-gray-800 transition font-medium shadow-xs"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-2 space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-[#E8EFEA] text-[#1F4E3D] flex items-center justify-center mx-auto shadow-xs">
              <Heart className="w-7 h-7 fill-[#1F4E3D]" />
            </div>

            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Skor Anda: {totalScore} / 15
              </span>
              <h4 className="font-serif-heading text-xl font-bold text-[#1F4E3D] mt-1 mb-2">
                {result?.level}
              </h4>
              <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${result?.color}`}>
                {result?.desc}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  if (result?.recommendedTag) onExploreTopic(result.recommendedTag);
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#1F4E3D] text-white text-xs font-bold hover:bg-[#16382C] transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Pelajari Hadis Terkait: #{result?.recommendedTag}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#EAE4D7] text-gray-700 text-xs font-semibold hover:bg-[#DDD6C7] transition flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Ulangi Kuis</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
