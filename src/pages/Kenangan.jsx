import { useNavigate } from 'react-router-dom';

const Kenangan = () => {
  const navigate = useNavigate();

  const kenangan = [
    { src: '/images/kenangan.jpeg', caption: 'Pertama kali kita bertemu ✨' },
    { src: '/images/kenangan2.jpeg', caption: 'Waktu liburan bareng 🌊' },
    { src: '/images/kenangan3.jpeg', caption: 'Makan malam romantis 🍽️' },
    { src: '/images/kenangan4.jpeg', caption: 'Selfie cantik kamu 📸' },
    { src: '/images/kenangan5.jpeg', caption: 'Senyum yang manis 😊' },
    { src: '/images/kenangan6.jpeg', caption: 'Kenangan indah lainnya ❤️' },
    { src: '/images/kenangan7.jpeg', caption: 'Kenangan indah lainnya ❤️' },
    { src: '/images/kenangan8.jpeg', caption: 'Kenangan indah lainnya ❤️' },
    { src: '/images/kenangan9.jpeg', caption: 'Kenangan indah lainnya ❤️' },
    { src: '/images/kenangan10.jpeg', caption: 'Kenangan indah lainnya ❤️' },
    { src: '/images/kenangan11.jpeg', caption: 'Kenangan indah lainnya ❤️' },
    { src: '/images/kenangan12.jpeg', caption: 'Kenangan indah lainnya ❤️' },
    { src: '/images/kenangan1.jpeg', caption: 'Kenangan indah lainnya ❤️' },
  ];

  return (
    // Tambahkan style background di sini
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed p-6 flex flex-col items-center"
      style={{ backgroundImage: "url('/images/3.jpeg')" }}
    >
      {/* Overlay hitam agar teks dan grid foto terlihat kontras */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <h1 className="relative z-10 text-4xl font-bold text-white mb-8 mt-4 text-center drop-shadow-lg">
        Kenangan Manis Kita 📸
      </h1>
      
      {/* Grid Foto */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {kenangan.map((item, index) => (
          <div 
            key={index} 
            className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
          >
            <img 
              src={item.src} 
              alt={item.caption} 
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <p className="text-sm font-medium text-gray-800 text-center px-1">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Tombol Kembali */}
      <button 
        onClick={() => navigate(-1)} 
        className="relative z-10 mt-12 mb-8 bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition transform hover:scale-105"
      >
        Kembali
      </button>
    </div>
  );
};

export default Kenangan;