import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Frontend & Frameworks",
    skills: ["React.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Material UI"]
  },
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "Java", "C", "C++", "PHP"]
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "Jenkins", "Jira", "NPM", "VS Code", "Figma"]
  },
  {
    category: "Testing & Data",
    skills: ["Jest", "Selenium", "MySQL", "MongoDB"]
  },
  {
    category: "Methodologies",
    skills: ["Agile", "Scrum", "CI/CD"]
  },
  {
    category: "Focus Areas",
    skills: ["Performance optimization", "Responsive design", "System scalability"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-dark py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">// skills</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter font-display">
            Toolkit
          </h2>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bg-white/[0.03] border border-white/[0.09] p-8 rounded-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="font-mono text-xs text-accent-blue uppercase tracking-[0.2em] mb-6">
                {group.category}
              </h4>
              
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, j) => (
                  <motion.span 
                    key={skill} 
                    className="font-mono text-xs border border-white/15 text-white/70 px-4 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: j * 0.05 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
