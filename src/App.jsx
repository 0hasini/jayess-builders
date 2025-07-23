import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Redevelopment from './pages/Redevelopment';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="min-h-screen bg-white font-sans flex flex-col px-4 md:px-8 lg:px-16">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/redevelopment" element={<Redevelopment />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
