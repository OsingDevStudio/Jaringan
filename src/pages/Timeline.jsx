import { useNavigate } from 'react-router-dom';

const Timeline = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6 text-center"
      style={{ backgroundImage: "url('/images/4.jpeg')" }}
    >
      {/* Overlay agar teks terbaca jelas */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten (Gunakan relative agar berada di atas overlay) */}
      <div className="relative z-10 flex flex-col items-center">
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          HALO CANTIKUU ❤️
        </h1>

        <div className="w-full max-w-sm mb-10">
          <img 
            src="/images/5.jpeg" 
            alt="Foto Cantik" 
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>

        <button 
          onClick={() => navigate('/birthday')}
          className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-pink-600 transition transform hover:scale-105"
        >
          Klik di sini ya sayang ✨
        </button>
      </div>
    </div>
  );
};

export default Timeline;