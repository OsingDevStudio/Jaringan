import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import StarRain from '../components/StarRain';

const Quiz = () => {
  const [indexPertanyaan, setIndexPertanyaan] = useState(0);
  const [showWrong, setShowWrong] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const dataQuiz = [
    {
      pertanyaan: "Kapan sih hari jadian kita?",
      gambar: "/images/quiz1.jpeg",
      pilihan: [
        { teks: '22 Oktober 2022', benar: true },
        { teks: '20 Mei 2022', benar: false },
        { teks: '10 Agustus 2022', benar: false },
      ]
    },
    {
      pertanyaan: "Dimana Pertama Kali Jalan Jalan?",
      gambar: "/images/quiz2.jpeg",
      pilihan: [
        { teks: 'Blambangan', benar: false },
        { teks: 'Pulau Merah', benar: false },
        { teks: 'Air Terjun', benar: true },
      ]
    },
    {
      pertanyaan: "Apa warna baju yang aku pakai saat kita pertama kali ketemu?",
      gambar: "/images/quiz3.jpeg",
      pilihan: [
        { teks: 'Jaket Hitam', benar: false },
        { teks: 'Baju Kotak-kotak merah', benar: true },
        { teks: 'Baju Putih', benar: false },
      ]
    }
  ];

  const handlePilih = (benar) => {
    if (benar) {
      if (indexPertanyaan < dataQuiz.length - 1) {
        setIndexPertanyaan(indexPertanyaan + 1);
      } else {
        setShowSuccess(true);
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
      }
    } else {
      setShowWrong(true);
      setTimeout(() => setShowWrong(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6 relative overflow-hidden" style={{ backgroundImage: "url('/images/quiz.jpeg')" }}>
      
      <StarRain />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Pop-up Sukses */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-zoomIn">
          <div className="bg-white p-8 rounded-3xl text-center shadow-2xl max-w-sm">
            <h1 className="text-3xl font-bold text-pink-600 mb-4">Selamat Ayangggkuu! ❤️</h1>
            <p className="text-gray-600 mb-6">Kamu bener semua, kamu emang paling inget segalanya! ✨</p>
            <button 
              onClick={() => navigate('/timeline')}
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition"
            >
              Lanjut klik ya beb ❤️
            </button>
          </div>
        </div>
      )}

      {/* Pop-up Salah */}
      {showWrong && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-xs animate-zoomIn">
            <img src="/images/quiz4.jpeg" alt="Salah" className="w-full h-auto rounded-3xl shadow-2xl" />
          </div>
        </div>
      )}

      <div className="relative z-10 bg-white/90 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border border-white/50">
        <div className="mb-6 overflow-hidden rounded-2xl shadow-md">
          <img src={dataQuiz[indexPertanyaan].gambar} alt="Quiz" className="w-full h-40 object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-pink-600 mb-2">Quiz Spesial {indexPertanyaan + 1}/3</h1>
        <p className="text-gray-700 mb-8 italic">{dataQuiz[indexPertanyaan].pertanyaan}</p>
        <div className="space-y-4">
          {dataQuiz[indexPertanyaan].pilihan.map((opsi, idx) => (
            <button key={idx} onClick={() => handlePilih(opsi.benar)} className="w-full p-4 bg-white border-2 border-pink-200 rounded-2xl font-bold text-gray-700 hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
              {String.fromCharCode(65 + idx)}. {opsi.teks}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;