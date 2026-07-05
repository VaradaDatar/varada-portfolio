import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    tag: "Work · Loyalty Platform",
    title: "Partner sell pages for global loyalty programs",
    description: "Responsive, accessible partner pages for international loyalty and membership programs, built in close collaboration with European product teams and optimized for performance across devices.",
    stack: ["React.js", "JavaScript", "Accessibility"]
  },
  {
    tag: "Work · Fintech",
    title: "Unified global payments integration",
    description: "Integrated eight international payment providers into one React application for Standard Chartered, translating UX wireframes into production-ready, high-usability payment screens.",
    stack: ["React", "Payments", "Git"]
  },
  {
    tag: "Personal · In progress",
    title: "3D interactive restaurant experience",
    description: "A self-directed portfolio piece exploring immersive, animation-led web experiences for hospitality and F&B brands — part design case study, part freelance showcase.",
    stack: ["React", "Three.js", "Framer Motion", "Tailwind"]
  },
  {
    tag: "Work · Insurance",
    title: "Enterprise Platform Revamp",
    description: "Led a team of 6 developers to architect and deliver a scalable healthcare portal for United Health Group (UHG).",
    stack: ["React", "TypeScript", "Node.js", "Java"]
  },
  {
    tag: "Work · Healthcare",
    title: "Fertility Patient Portal",
    description: "Developed robust frontend interfaces for US Fertility's healthcare platform, enhancing patient data accessibility and clinic workflows.",
    stack: ["React", "TypeScript", "Node.js", "Java"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-dark py-32 overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">// projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter font-display">
            Things I've built
          </h2>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="glass-dark p-8 rounded-2xl border border-white/5 flex flex-col h-full group hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <span className="font-mono text-[10px] text-accent-green uppercase tracking-[0.2em]">{project.tag}</span>
                <h3 className="text-xl font-bold font-display text-white mt-3 leading-snug">{project.title}</h3>
              </div>
              
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map(tech => (
                  <span key={tech} className="font-mono text-[10px] text-white/50 border border-white/10 px-3 py-1 rounded-full group-hover:border-white/30 group-hover:text-white/80 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
