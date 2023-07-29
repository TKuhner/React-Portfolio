import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {

  return (
    <div className="app">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
