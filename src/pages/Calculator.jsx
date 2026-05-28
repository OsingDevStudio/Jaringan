import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [showWrong, setShowWrong] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  
  const secretCode = '123456'; 

  const handlePress = (num) => {
    if (input.length < 6) setInput((prev) => prev + num);
  };

  const handleBackspace = () => setInput((prev) => prev.slice(0, -1));

  const handleEnter = () => {
    if (input === secretCode) {
      setShowSuccess(true);
    } else {
      setShowWrong(true);
      setTimeout(() => { setShowWrong(false); setInput(''); }, 2000);
    }
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/images/3.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Pop-up Salah */}
      {showWrong && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="animate-zoomIn w-full max-w-xs">
            <img src="/images/1.jpeg" className="w-full h-auto rounded-3xl shadow-2xl" />
          </div>
        </div>
      )}

      {/* Pop-up Sukses */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white p-6 rounded-3xl text-center shadow-2xl animate-zoomIn w-full max-w-xs">
            <img src="/images/2.jpeg" className="w-full h-auto rounded-2xl mb-6" />
            <button 
              onClick={() => navigate('/timeline')}
              className="w-full bg-pink-500 text-white py-3 rounded-full font-bold text-lg hover:bg-pink-600 transition"
            >
              Lanjut ya beb ❤️
            </button>
          </div>
        </div>
      )}

      {/* Kalkulator UI */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-xs border border-white/50">
        <h2 className="text-lg font-semibold text-center text-pink-600 mb-6">Masukkan Kode Rahasia 🗝️</h2>
        
        <div className="mb-6 p-4 rounded-xl text-center text-3xl font-bold tracking-[0.5em] h-16 flex items-center justify-center bg-white/50 text-gray-700 shadow-inner">
          {input.padEnd(6, '•')}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button key={num} onClick={() => handlePress(num.toString())} className="bg-white/70 border border-white/50 p-4 rounded-full font-bold text-xl text-pink-500 hover:bg-pink-100 transition">
              {num}
            </button>
          ))}
          <button onClick={handleBackspace} className="bg-gray-200/70 p-4 rounded-full text-gray-600 font-bold">⌫</button>
          <button onClick={() => handlePress('0')} className="bg-white/70 border border-white/50 p-4 rounded-full font-bold text-xl text-pink-500 hover:bg-pink-100 transition">0</button>
          <button onClick={handleEnter} className="bg-pink-500 text-white rounded-full font-bold shadow-lg hover:bg-pink-600 transition">OK</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;