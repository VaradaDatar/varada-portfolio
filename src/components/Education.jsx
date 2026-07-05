import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="relative w-full bg-dark py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">// education</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter font-display">
            Foundation
          </h2>
        </div>

        {/* Card */}
        <motion.div 
          className="glass-dark p-8 md:p-12 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-bold font-display text-white">Bachelor of Engineering — Information Technology</h3>
            <p className="text-white/60 font-medium">Pune University, Pune</p>
          </div>
          
          <div className="font-mono text-4xl md:text-5xl font-bold text-accent-green opacity-90 drop-shadow-[0_0_15px_rgba(47,230,166,0.3)]">
            2021
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
