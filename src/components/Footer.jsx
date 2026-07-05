import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[60vh] bg-dark text-white flex flex-col justify-between pt-32 pb-8 px-6 md:px-12 overflow-hidden border-t border-white/5">
      
      {/* Top Information Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4">Expertise</h4>
          {['Frontend Development', 'React Applications', 'Payment Integrations', 'UI/UX Design'].map((service) => (
            <span key={service} className="font-mono text-xs text-white/80 uppercase tracking-widest hover:text-primary transition-colors cursor-default">
              {service}
            </span>
          ))}
        </div>

        {/* Center Column */}
        <div className="flex flex-col md:items-center gap-4 text-center">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Experience</h4>
          <span className="text-2xl font-bold font-display tracking-wide">5+ Years</span>
          <a href="#projects" className="relative text-xs font-bold uppercase tracking-widest mt-2 group overflow-hidden inline-block font-mono text-accent-green">
            View Work
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-green transform origin-left transition-transform duration-300 group-hover:scale-x-0"></span>
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-primary transform origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 delay-100"></span>
          </a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:items-end gap-3 text-center md:text-right">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4">Status</h4>
          <div className="flex items-center justify-center md:justify-end gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
            <span className="font-mono text-xs text-white/80 uppercase tracking-widest">Available Worldwide</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-white/30 mt-auto md:mt-12">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>

      {/* Center Hero Branding */}
      <div className="w-full flex justify-center items-center flex-grow z-10 py-12">
        <motion.h1 
          className="text-[22vw] md:text-[18vw] font-black lowercase tracking-tighter text-[#F4F4F4] leading-[0.8] cursor-default select-none text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          whileHover={{ 
            textShadow: "0px 0px 60px rgba(255,255,255,0.4)",
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          varada
        </motion.h1>
      </div>

      {/* Bottom Contact Grid */}
      <div className="max-w-7xl mx-auto w-full border-t border-white/10 pt-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 z-10 text-[10px] md:text-xs">
        
        {/* Left */}
        <div className="flex flex-col gap-1 text-white/60 text-center md:text-left font-mono uppercase tracking-widest">
          <span>Built with React & Tailwind</span>
          <span>Premium Digital Craftsmanship</span>
        </div>

        {/* Center */}
        <div className="flex justify-center items-center">
          <a href="mailto:varada.k.datar@gmail.com" className="relative group text-white font-bold uppercase tracking-[0.2em]">
            varada.k.datar@gmail.com
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-0"></span>
          </a>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end items-center font-mono uppercase tracking-widest text-white/40">
          Privacy Policy
        </div>
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/[0.02] blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[0%] right-[0%] w-[60%] h-[60%] rounded-full bg-primary/[0.03] blur-[150px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
