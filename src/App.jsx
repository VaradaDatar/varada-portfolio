import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark">
      {/* Preloader blocks the UI until done */}
      {!loadingComplete && (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Content - fades in after preloader */}
      <div 
        className="w-full h-full"
        style={{ 
          opacity: loadingComplete ? 1 : 0, 
          pointerEvents: loadingComplete ? 'auto' : 'none',
          transition: 'opacity 0.5s ease-out' 
        }}
      >
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
