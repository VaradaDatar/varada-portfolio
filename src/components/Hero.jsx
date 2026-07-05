import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, ArrowDown } from 'lucide-react';
import { cn } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
};

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoExists, setVideoExists] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [showFullscreen, setShowFullscreen] = useState(false);
  const isInView = useInView(videoRef, { once: true, amount: 0.5 });
  
  const fullEyebrowText = "Frontend Developer · Pune, IN · Open to relocation";

  useEffect(() => {
    // Typewriter effect
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setTypedText(fullEyebrowText);
      return;
    }

    let i = 0;
    let typingInterval;
    
    // Delay the start of the typing effect so it happens clearly after page load
    const startDelay = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (i <= fullEyebrowText.length) {
          setTypedText(fullEyebrowText.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 45);
    }, 600);

    return () => {
      clearTimeout(startDelay);
      clearInterval(typingInterval);
    };
  }, []);

  const handleVideoError = () => {
    setVideoExists(false);
  };

  // We rely entirely on the native onError handler to detect missing files,
  // rather than a timeout, because Vercel's CDN might take longer than 1.2s 
  // to stream the video metadata on slower connections.

  // Autoplay removed as requested

  const togglePlay = () => {
    if (videoRef.current && videoExists) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        setShowFullscreen(true);
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="home" className={cn(
      "relative w-full min-h-screen overflow-hidden bg-black flex items-center pt-20",
      showFullscreen ? "z-[100]" : "z-10"
    )}>
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-blue/10 blur-[120px]"></div>
      </div>
      
      {/* Black overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col justify-center w-full md:w-[55%] lg:w-[60%] order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="font-mono text-sm md:text-base text-primary mb-6 h-6 flex items-center">
            {typedText}<span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse"></span>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-white/80 mb-2">
            Hi, I'm
          </motion.h2>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-none mb-6 font-display flex flex-col">
            <span 
              className="text-transparent" 
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}
            >
              Varada
            </span>
            <span className="text-white mt-1">Datar<span className="text-primary">.</span></span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed font-sans">
            Frontend Developer with 5+ years shipping React applications across healthcare, banking and loyalty platforms. I build fast, responsive, and award-winning digital experiences.
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
            <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 text-center text-sm flex items-center justify-center">
              See my work
            </a>
            <a href="#contact" className="glass-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors duration-300 border border-white/20 text-center text-sm flex items-center justify-center">
              Get in touch
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-white">5+</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Years Exp</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-white">15+</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Apps Shipped</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-white">8</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Payment APIs</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-white">6</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Devs Led</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Spacer to preserve layout when video is fixed */}
        {showFullscreen && (
          <div className="w-full max-w-[500px] md:w-[45%] lg:w-[40%] order-1 md:order-2 opacity-0 pointer-events-none hidden md:block"></div>
        )}

        <motion.div 
          layout
          className={cn(
            showFullscreen 
              ? "fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-md"
              : "relative w-full max-w-[500px] md:w-[45%] lg:w-[40%] order-1 md:order-2 z-30"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ layout: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {showFullscreen && (
            <button 
              onClick={() => {
                setShowFullscreen(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
                setIsPlaying(false);
              }}
              className="absolute top-8 right-8 text-white/50 hover:text-white z-50 flex gap-2 items-center font-mono text-xs tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full border border-white/10 transition-colors"
            >
              Skip Intro
            </button>
          )}

          <motion.div 
            layout
            className={cn(
              "window-chrome relative group w-full",
              showFullscreen ? "max-w-5xl shadow-[0_0_50px_rgba(0,240,255,0.15)]" : ""
            )}
          >
            {/* Chrome Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#16213a] border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-80"></span>
              <p className="font-mono text-[10px] text-white/50 ml-2 uppercase tracking-widest">intro.mp4</p>
            </div>
            
            {/* Video Body */}
            <div className="relative aspect-[4/3] bg-[#050912] overflow-hidden cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                  videoExists ? "opacity-100" : "opacity-0"
                )}
                src="/videos/intro.mp4"
                playsInline
                onError={handleVideoError}
                onEnded={() => {
                  setIsPlaying(false);
                  if (showFullscreen) setShowFullscreen(false);
                }}
              />

              {/* Fallback UI when no video */}
              {!videoExists && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-dark to-[#0f172a]">
                  <span className="text-4xl mb-4">🎬</span>
                  <p className="text-white/60 font-mono text-sm leading-relaxed">
                    Drop your <span className="text-primary bg-primary/10 px-1 py-0.5 rounded">intro.mp4</span> file into the <code className="text-white/80">public/videos/</code> folder to play your reel here.
                  </p>
                </div>
              )}

              {/* Play/Pause Overlay */}
              {videoExists && (
                <div className={cn(
                  "absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300",
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                )}>
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center border-white/30 backdrop-blur-md hover:scale-110 hover:border-primary transition-all duration-300">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" fill="currentColor" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
