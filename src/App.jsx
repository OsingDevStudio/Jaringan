import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Birthday from './pages/Birthday';
import Ucapan from './pages/Ucapan';
import Kenangan from './pages/Kenangan';
import Hadiah from './pages/Hadiah';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Birthday />} />
        <Route path="/ucapan" element={<Ucapan />} />
        <Route path="/kenangan" element={<Kenangan />} />
        <Route path="/hadiah" element={<Hadiah />} />
      </Routes>
    </Router>
  );
}

export default App;