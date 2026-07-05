import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeString = `const developer = {
  name: 'Varada Datar',
  role: 'Frontend Developer',
  experience: '5+ years',
  basedIn: 'Pune, India',
  coreStack: ['React.js', 'Redux', 'JavaScript ES6+'],
  openTo: ['UAE', 'Europe', 'UK'],
  available: 'immediately'
};`;

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= codeString.length) {
        setText(codeString.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 1000);
      }
    }, 25); 

    return () => clearInterval(interval);
  }, [onComplete]);

  const highlightCode = (code) => {
    let highlighted = code
      .replace(/const/g, '<span class="text-[#c678dd]">const</span>')
      .replace(/developer/g, '<span class="text-[#e5c07b]">developer</span>')
      .replace(/name:|role:|experience:|basedIn:|coreStack:|openTo:|available:/g, match => `<span class="text-accent-blue">${match}</span>`)
      .replace(/'[^']*'/g, match => `<span class="text-accent-green">${match}</span>`);
    return { __html: highlighted };
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100000] bg-dark flex flex-col overflow-hidden font-mono"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Terminal Window Chrome */}
          <div className="w-full h-12 bg-[#16213a] border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-4 text-white/50 text-xs uppercase tracking-widest">portfolio.js</span>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-6 md:p-12 text-sm md:text-base lg:text-lg">
            <div className="max-w-3xl mx-auto w-full">
              <div className="mb-4 text-white/50">
                <span className="text-accent-green">varada@macbook</span>
                <span className="text-white"> : </span>
                <span className="text-accent-blue">~/portfolio</span>
                <span className="text-white"> $ </span>
                <span>node initialize.js</span>
              </div>
              
              <div className="relative text-white/90 whitespace-pre-wrap leading-relaxed">
                <span dangerouslySetInnerHTML={highlightCode(text)} />
                <span className="inline-block w-2.5 h-5 bg-primary ml-1 translate-y-1 animate-pulse"></span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
