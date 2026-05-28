import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeartRain = () => {
  // ... (kode HeartRain tetap sama seperti sebelumnya)
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = { id: Date.now(), left: Math.random() * 100 + "%", animationDuration: Math.random() * 3 + 2 + "s" };
      setHearts((prev) => [...prev, newHeart]);
      setTimeout(() => setHearts((prev) => prev.filter((h) => h.id !== newHeart.id)), 5000);
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div key={heart.id} className="absolute text-pink-500 animate-fall" style={{ left: heart.left, animationDuration: heart.animationDuration }}>❤️</div>
      ))}
    </div>
  );
};

const Birthday = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cover bg-center p-4 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('/images/6.jpeg')" }}>
      <HeartRain />
      
      <div className="absolute top-0 w-full bg-white/90 backdrop-blur-md py-2 overflow-hidden z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-black font-bold text-sm md:text-lg mx-4">HAPPY BIRTHDAY AMELIA AMIRAH ALODIA ✨ HAPPY BIRTHDAY AMELIA AMIRAH ALODIA ✨</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 w-full max-w-4xl mt-12 px-2">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
          Selamat Ulang Tahun<br />Amelia Amirah Alodia<br />
          <span className="text-xl md:text-2xl text-pink-200">yang ke-21 tahun! 🎉</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl flex flex-col items-center">
            <img src="/images/kata.png" alt="Ucapan" className="w-full h-40 object-contain rounded-2xl mb-6" />
            <button onClick={() => navigate('/ucapan')} className="w-full bg-pink-500 text-white py-3 rounded-full font-bold hover:bg-pink-600 transition">Buka Ucapan</button>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl flex flex-col items-center">
            <img src="/images/kamera.png" alt="Kenangan" className="w-full h-40 object-contain rounded-2xl mb-6" />
            <button onClick={() => navigate('/kenangan')} className="w-full bg-pink-500 text-white py-3 rounded-full font-bold hover:bg-pink-600 transition">Lihat Kenangan</button>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl flex flex-col items-center">
            <img src="/images/kado.png" alt="Hadiah" className="w-full h-40 object-contain rounded-2xl mb-6" />
            <button onClick={() => navigate('/hadiah')} className="w-full bg-pink-500 text-white py-3 rounded-full font-bold hover:bg-pink-600 transition">Buka Hadiah</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;