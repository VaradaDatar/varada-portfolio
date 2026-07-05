import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-dark overflow-hidden pb-32">
      {/* Background Star Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-black/10"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star size={64} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: ID Badge */}
          <motion.div 
            className="w-full md:w-5/12 flex justify-center mt-10 md:mt-0"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Lanyard */}
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-4 h-32 bg-[#e5c07b] origin-top shadow-xl"></div>
              {/* Metal Clip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-6 bg-gray-400 rounded-sm shadow-md"></div>
              
              {/* Card */}
              <motion.div 
                className="w-72 md:w-80 h-[440px] bg-slate-50 rounded-2xl p-6 shadow-2xl relative overflow-hidden group border border-gray-200 flex flex-col items-center z-20"
                style={{ rotate: -3 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hole punch */}
                <div className="w-16 h-3 bg-gray-300 rounded-full shadow-inner absolute top-4 left-1/2 -translate-x-1/2"></div>
                
                {/* Company Logo / Header */}
                <div className="w-full text-center mt-6 mb-4">
                  <h4 className="font-display font-black text-[10px] tracking-[0.3em] text-gray-400 uppercase">Varada Portfolios</h4>
                </div>

                {/* Photo (Real Headshot) */}
                <div className="w-36 h-36 rounded-full mb-6 overflow-hidden border-4 border-white shadow-md relative z-10 bg-gray-800">
                  <img 
                    src="/images/headshot.jpg" 
                    alt="Varada Datar" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="text-center mb-auto">
                  <h3 className="text-dark font-black text-2xl uppercase tracking-widest mb-1 font-display">VARADA DATAR</h3>
                  <p className="text-accent-blue font-bold text-xs tracking-[0.2em] uppercase font-mono">Frontend Developer</p>
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mt-2">ID: VD-2026</p>
                </div>
                
                {/* Barcode decorative */}
                <div className="mt-4 flex justify-center gap-[2px] opacity-70 w-full mb-2">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="bg-dark h-10" style={{ width: Math.random() * 4 + 1 + 'px' }}></div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            className="w-full md:w-7/12 flex flex-col"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#e5c07b] uppercase tracking-tighter mb-8 leading-none font-display">
              Hello!
            </h2>
            
            <div className="text-white text-base md:text-lg leading-relaxed mb-10 space-y-6 max-w-2xl">
              <p>
                I'm a frontend developer based in Pune, India, with 5+ years building responsive, user-centric web applications across healthcare, banking and e-commerce. My core stack is React.js, Redux and JavaScript (ES6+), and I care as much about how fast a page loads as how clean the code behind it is.
              </p>
              <p className="text-slate-100">
                At Tenerity, I build partner sell pages for loyalty and membership programs used by international clients, working directly with European product and business teams. Earlier roles gave me experience leading teams of up to six developers, running Agile ceremonies, and integrating systems as complex as global payment networks.
              </p>
            </div>

            {/* Code Card */}
            <div className="w-full max-w-2xl bg-[#0d131f] rounded-xl p-6 shadow-xl border border-white/10 overflow-x-auto mb-10">
              <pre className="font-mono text-sm leading-relaxed whitespace-pre">
                <span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">developer</span> <span className="text-[#56b6c2]">=</span> {'{\n'}
                {'  '}<span className="text-accent-blue">name</span>: <span className="text-accent-green">'Varada Datar'</span>,\n
                {'  '}<span className="text-accent-blue">role</span>: <span className="text-accent-green">'Frontend Developer'</span>,\n
                {'  '}<span className="text-accent-blue">experience</span>: <span className="text-accent-green">'5+ years'</span>,\n
                {'  '}<span className="text-accent-blue">basedIn</span>: <span className="text-accent-green">'Pune, India'</span>,\n
                {'  '}<span className="text-accent-blue">coreStack</span>: [<span className="text-accent-green">'React.js'</span>, <span className="text-accent-green">'Redux'</span>, <span className="text-accent-green">'JavaScript ES6+'</span>],\n
                {'  '}<span className="text-accent-blue">openTo</span>: [<span className="text-accent-green">'UAE'</span>, <span className="text-accent-green">'Europe'</span>, <span className="text-accent-green">'UK'</span>],\n
                {'  '}<span className="text-accent-blue">available</span>: <span className="text-accent-green">'immediately'</span>\n
                {'}'};
              </pre>
            </div>

            {/* Tech Stack Logos */}
            <div className="flex items-center gap-6">
              <motion.div whileHover={{ scale: 1.1, y: -5 }} className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center p-3 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full opacity-90" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -5 }} className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center p-3 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className="w-full h-full opacity-90" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -5 }} className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center p-3 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-full h-full opacity-90 rounded" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Torn Paper Transition */}

    </section>
  );
};

export default About;
