import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomeSection from './components/HomeSection';
import OwnerDetails from './components/OwnerDetails';
import ProjectsStats from './components/ProjectsStats';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClientTestimonials from './components/ClientTestimonials';
import GetInTouch from './components/GetInTouch';

function Home() {
  return (
    <>
      <HomeSection />
      <OwnerDetails />
    </>
  );
}

function Achievements() {
  return <ProjectsStats />;
}

function TestimonialsPage() {
  return <ClientTestimonials />;
}

function ContactPage() {
  return <GetInTouch />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen bg-white font-sans flex flex-col px-4 md:px-8 lg:px-16">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Achievements />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
