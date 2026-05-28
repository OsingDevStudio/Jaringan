import { useNavigate } from 'react-router-dom';

const Ucapan = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Pesan Spesial 💌</h1>
      <p className="text-gray-700 text-center max-w-lg">
        Tulis kata-kata indah untuk Amelia di sini...
      </p>
      <button 
        onClick={() => navigate('/')} 
        className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default Ucapan;