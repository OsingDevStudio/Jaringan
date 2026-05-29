import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Timeline = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
      style={{ backgroundImage: "url('/images/4.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Teks dengan animasi berayun/denyut terus-menerus */}
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-4xl font-bold text-white mb-8 drop-shadow-lg cursor-pointer"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            HALO CANTIKNYA AKUU ❤️
          </motion.span>
        </motion.h1>

        {/* Card Gambar tetap dengan animasi Zoom Out */}
        <motion.div 
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-sm mb-10"
        >
          <img 
            src="/images/5.jpeg" 
            alt="Foto Cantik" 
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
          />
        </motion.div>

        <button 
          onClick={() => navigate('/birthday')}
          className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-pink-600 transition transform hover:scale-105 active:scale-95"
        >
          Klik di sini ya sayang ✨
        </button>
      </div>
    </div>
  );
};

export default Timeline;