import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Quiz from './pages/Quiz';
import Timeline from './pages/Timeline';
import Birthday from './pages/Birthday';
import Ucapan from './pages/Ucapan';
import Kenangan from './pages/Kenangan';
import Hadiah from './pages/Hadiah';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log("Menunggu interaksi user"));
      }
      document.removeEventListener('click', playAudio);
    };

    document.addEventListener('click', playAudio);
    return () => document.removeEventListener('click', playAudio);
  }, []);

  return (
    <Router>
      <audio ref={audioRef} src="/musik.mp3" loop />
      
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/ucapan" element={<Ucapan />} />
        <Route path="/kenangan" element={<Kenangan />} />
        <Route path="/hadiah" element={<Hadiah />} />
      </Routes>
    </Router>
  );
}

export default App;