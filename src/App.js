import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Loader from './components/loader/Loader';


function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Initial AOS
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });

    // Handle Progress Counting
    const intensity = 20; // ms per increment for ~2s total
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, intensity);

    // Handle Loader Fade Out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Give a bit more time for the 100% to be seen

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Loader isLoading={loading} progress={progress} />

      <Toaster position="top-right" />

      <Header />

      <main className="main">


        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />

      </main>
      <Footer />
      <ScrollUp />
    </>

  );
}

export default App;
