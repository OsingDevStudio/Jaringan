import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Birthday from './pages/Birthday';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute root '/' akan menampilkan halaman Home */}
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </Router>
  );
}

export default App;