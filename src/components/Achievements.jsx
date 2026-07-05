import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: "🏆",
    title: "1st Runner-up, Standard Chartered Hackathon",
    description: "Recognized for solution design and execution in a company-wide hackathon.",
    image: "/images/hackathon-award.jpg"
  },
  {
    icon: "🎖️",
    title: "Bravo — Team Award, Persistent Systems",
    description: "Awarded for overall team performance during FY23–24.",
    image: "/images/bravo-award.jpg"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative w-full bg-dark py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">// achievements</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter font-display">
            Recognition
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {achievements.map((item, i) => (
            <motion.div 
              key={i}
              className="glass-dark border border-white/10 p-8 rounded-2xl flex flex-col gap-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="flex gap-4 items-start">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h4 className="font-display text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Certificate Image Frame */}
              <div className="mt-4 w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-black/50 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-contain p-2 filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out" 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Line */}
        <motion.div 
          className="border-t border-white/10 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm text-primary mb-6 tracking-widest uppercase">// certifications</p>
          <div className="flex flex-col gap-4">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between border border-white/5 bg-white/[0.02] p-6 rounded-xl hover:border-white/20 transition-colors group">
              <div>
                <h4 className="text-white font-display font-bold text-lg group-hover:text-accent-green transition-colors">Microsoft Certified: Azure Administrator Associate</h4>
                <p className="text-accent-blue text-sm mt-1">Microsoft</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right font-mono text-xs text-white/50 space-y-1">
                <p>Issued Jun 2022 · Expires Jun 2023</p>
                <p>Credential ID I335-4818</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between border border-white/5 bg-white/[0.02] p-6 rounded-xl hover:border-white/20 transition-colors group">
              <div>
                <h4 className="text-white font-display font-bold text-lg group-hover:text-accent-green transition-colors">Jira Fundamentals Badge</h4>
                <p className="text-accent-blue text-sm mt-1">Atlassian</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right font-mono text-xs text-white/50 space-y-1">
                <p>Issued Jun 2022</p>
                <p>Credential ID 214569604</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between border border-white/5 bg-white/[0.02] p-6 rounded-xl hover:border-white/20 transition-colors group">
              <div>
                <h4 className="text-white font-display font-bold text-lg group-hover:text-accent-green transition-colors">Certificate of completion: Claude code 101</h4>
                <p className="text-accent-blue text-sm mt-1">Anthropic</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right font-mono text-xs text-white/50 space-y-1">
                <p>Issued May 2026</p>
                <p>Credential ID 7h6iwwojafow</p>
              </div>
            </div>

            <p className="text-white/40 font-mono text-sm mt-2 italic pl-2">...and many more</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
