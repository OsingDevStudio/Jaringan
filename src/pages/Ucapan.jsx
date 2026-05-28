import { useNavigate } from 'react-router-dom';

const Ucapan = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6 relative"
      // Pastikan file background ada di folder public/images/
      style={{ backgroundImage: "url('/images/3.jpeg')" }}
    >
      {/* Overlay agar teks tetap terbaca dengan jelas di atas foto */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Kartu Utama dengan efek sedikit transparan (glassmorphism) */}
      <div className="relative z-10 bg-white/90 p-8 rounded-3xl shadow-2xl max-w-sm w-full border border-pink-100 text-center backdrop-blur-sm">
        
        {/* Foto Profil di Kartu */}
        <img 
          src="/images/ucapan.jpeg" 
          alt="Amelia" 
          className="w-full h-64 object-cover rounded-2xl mb-6 shadow-md border-2 border-white"
        />

        {/* Judul & Pesan Spesial */}
        <h1 className="text-2xl font-bold text-pink-600 mb-4">Happy Birthday Sayangkuu! 💌</h1>
        <p className="text-gray-700 leading-relaxed italic mb-6">
          "Selamat ulang tahun Pacarku Tercinta Amelia Amirah Alodia. Hari ini kamu Ulang Tahun Loh hehe Semoga di usia ke-21 ini, 
          kamu selalu bahagia, sehat, dan semua impianmu tercapai. 
          Tetaplah jadi dirimu yang cantik dan luar biasa ya. Duniaku terasa jauh lebih indah sejak kamu ada di dalamnya. Selamat bertambah usia, Sayang. Semoga tahun ini membawa kebahagiaan sebanyak yang kamu berikan padaku setiap hari. Terima kasih sudah hadir dan membuat hari-hariku jauh lebih berwarna. I love you more than words can say!"
        </p>
      </div>

      {/* Tombol Kembali */}
      <button 
        onClick={() => navigate(-1)} 
        className="relative z-10 mt-8 bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition transform hover:scale-105 active:scale-95"
      >
        Kembali
      </button>
    </div>
  );
};

export default Ucapan;