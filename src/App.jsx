import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import ZodiacSigns from './pages/ZodiacSigns';
import Horoscope from './pages/Horoscope';
import Kundali from './pages/Kundali';
import './styles/main.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-bg-gradient d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/zodiac-signs" element={<ZodiacSigns />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/kundali" element={<Kundali />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
