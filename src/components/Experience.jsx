import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';

const experiences = [
  {
    role: "Frontend Developer",
    period: "Jan 2025 — Current",
    company: "Tenerity India Pvt Ltd, Pune",
    points: [
      "Collaborate with European product and business teams to translate requirements into high-quality frontend solutions.",
      "Build partner sell pages for loyalty and membership programs serving international clients across multiple regions.",
      "Build responsive, accessible UIs with JavaScript, HTML5 and CSS3, optimized through lazy loading and code splitting.",
      "Facilitate daily stand-ups, sprint planning and retrospectives, acting as the bridge between European stakeholders and the dev team."
    ]
  },
  {
    role: "Senior Software Engineer",
    period: "Oct 2024 — Jan 2025",
    company: "LTIMindtree, Pune",
    points: [
      "Developed scalable frontend components and backend integrations for enterprise-grade applications.",
      "Mentored junior developers through structured code reviews and pair programming, improving code quality.",
      "Contributed to architecture discussions and sprint planning, shaping technical roadmap decisions."
    ]
  },
  {
    role: "Senior Software Engineer",
    period: "Jan 2022 — Oct 2024",
    company: "Persistent Systems Ltd., Pune",
    points: [
      "Engineered frontend solutions for Fortune 500 clients in the Healthcare and Insurance sectors, including UnitedHealth Group (UHG) and US Fertility.",
      "Built new user-facing features in React.js, improving application performance by 25%.",
      "Led a team of 6 developers through the deployment of a major product, coordinating code merges for a clean launch.",
      "Reduced user-reported bugs by 20% within six months through fast-paced Agile delivery and strong QA discipline.",
      "Implemented Jest and Selenium test coverage, cutting bugs by 40% and reducing bug-resolution time by 50%.",
      "Revamped a core feature with Redux, normalizing state shape and reducing management complexity."
    ]
  },
  {
    role: "Software Developer",
    period: "Aug 2021 — Jan 2022",
    company: "Standard Chartered GBS Ltd., Chennai",
    points: [
      "Integrated eight global payment providers — WeChat, Alipay, eNETS, UPI, FPX, FDMS, BillDesk and Mpesa — into a single React application.",
      "Refactored JavaScript across the app, improving load time and performance by 10%.",
      "Built UI screens from design wireframes for payment flows, improving user satisfaction by 30%."
    ]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    return pathLength.onChange((v) => setProgress(v));
  }, [pathLength]);

  return (
    <section id="experience" className="relative w-full bg-dark py-32 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-24">
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">// experience</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter font-display">
            Where I've worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0">
          {/* Animated Line (Desktop Center, Mobile Left) */}
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 w-[2px] md:-translate-x-1/2 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-accent-blue to-accent-green origin-top"
              style={{ height: "100%", scaleY: pathLength }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const threshold = (index + 1) * 0.2;
              const isActive = progress >= threshold - 0.1;

              return (
                <motion.div 
                  key={index}
                  className={cn(
                    "relative w-full md:w-1/2 flex flex-col md:flex-row",
                    isEven ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16 md:items-end md:text-right"
                  )}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className={cn(
                    "absolute top-2 -left-10 md:top-6 w-4 h-4 rounded-full border-2 bg-dark z-10 transition-colors duration-500",
                    isEven ? "md:-left-2" : "md:-right-2 md:left-auto",
                    isActive ? "border-accent-green shadow-[0_0_15px_rgba(47,230,166,0.6)]" : "border-white/20"
                  )}></div>

                  <div className="glass-dark p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 w-full group">
                    <div className={cn(
                      "flex flex-col gap-2 mb-6",
                      isEven ? "items-start" : "md:items-end items-start"
                    )}>
                      <h3 className="text-xl md:text-2xl font-bold font-display text-white">{exp.role}</h3>
                      <span className="font-mono text-xs text-white/40 tracking-widest">{exp.period}</span>
                      <p className="text-accent-blue font-medium mt-1">{exp.company}</p>
                    </div>

                    <ul className={cn(
                      "flex flex-col gap-3 text-white/70 text-sm leading-relaxed",
                      isEven ? "text-left" : "md:text-right text-left"
                    )}>
                      {exp.points.map((point, i) => (
                        <li key={i} className={cn(
                          "relative",
                          isEven ? "pl-5" : "md:pr-5 pl-5 md:pl-0"
                        )}>
                          <span className={cn(
                            "absolute top-1.5 text-primary text-xs",
                            isEven ? "left-0" : "md:right-0 left-0"
                          )}>▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
