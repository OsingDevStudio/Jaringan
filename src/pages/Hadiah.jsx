import { useNavigate } from 'react-router-dom';

const Hadiah = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center p-6 relative"
      style={{ backgroundImage: "url('/images/3.jpeg')" }}
    >
      {/* Overlay hitam agar elemen di atasnya kontras */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Judul dengan bayangan agar tetap terbaca */}
      <h1 className="relative z-10 text-4xl font-bold text-white mb-8 animate-bounce drop-shadow-lg text-center">
        
      </h1>

      {/* Kartu Hadiah dengan Glassmorphism */}
      <div className="relative z-10 bg-white/90 p-6 rounded-3xl shadow-2xl max-w-sm w-full border-4 border-white/50 text-center backdrop-blur-md transform transition hover:scale-105">
        
        {/* Foto Hadiah */}
        <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
          <img 
            src="/images/hadiah.jpeg" 
            alt="Hadiah Spesial" 
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Tulisan di bawah foto */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">Maaf Ya Ayangg Ga Bisa Kasih Kamu Kado</h2>
        <p className="text-gray-700 italic leading-relaxed">
          "Aku janji kok kalau ada uang kamu Akan Kubelikan Apapun Yang kamu Mau Sabar Ya Sayangku. Maaf Masih Belum Bisa Jadi Laki Laki sempurna yang belum Bisa Kasih Kamu Segalanya"
        </p>
      </div>

      {/* Tombol Kembali */}
      <button 
        onClick={() => navigate(-1)} 
        className="relative z-10 mt-10 bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition transform hover:scale-105"
      >
        Kembali
      </button>
    </div>
  );
};

export default Hadiah;