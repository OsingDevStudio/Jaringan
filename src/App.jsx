import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Birthday from './pages/Birthday';
import Ucapan from './pages/Ucapan';
import Kenangan from './pages/Kenangan';
import Hadiah from './pages/Hadiah';
import Calculator from './pages/Calculator';
import Timeline from './pages/Timeline'; // Pastikan sudah diimpor

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/timeline" element={<Timeline />} /> {/* Tambahkan ini */}
        <Route path="/ucapan" element={<Ucapan />} />
        <Route path="/kenangan" element={<Kenangan />} />
        <Route path="/hadiah" element={<Hadiah />} />
      </Routes>
    </Router>
  );
}

export default App;