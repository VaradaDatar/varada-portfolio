import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="relative w-full bg-dark py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <p className="font-mono text-sm text-primary mb-12 tracking-widest uppercase">// contact</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter font-display mb-6">
              Let's work together.
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Open to full-time frontend roles and available to relocate immediately. Reach out directly, or use the form.
            </p>

            <ul className="flex flex-col gap-6 mb-12">
              <li className="flex items-center gap-4 text-white/80">
                <Mail className="text-accent-green w-5 h-5" />
                <a href="mailto:varada.k.datar@gmail.com" className="hover:text-white transition-colors">varada.k.datar@gmail.com</a>
              </li>
              <li className="flex items-center gap-4 text-white/80">
                <Phone className="text-accent-green w-5 h-5" />
                <span>+91 91687 90111</span>
              </li>
              <li className="flex items-center gap-4 text-white/80">
                <MapPin className="text-accent-green w-5 h-5" />
                <span>Pune, India</span>
              </li>
              <li className="flex items-center gap-4 text-white/80">
                <Link className="text-accent-green w-5 h-5" />
                <a href="https://www.linkedin.com/in/varada-datar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">LinkedIn — varada-datar</a>
              </li>
            </ul>

            <div>
              <div className="inline-block font-mono text-xs text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-4 py-3 md:py-2 rounded-xl md:rounded-full tracking-wide leading-relaxed">
                Available to relocate immediately <br className="sm:hidden" />
                <span className="hidden sm:inline">·</span> UAE / Europe / UK
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form action="https://formsubmit.co/varada.k.datar@gmail.com" method="POST" className="flex flex-col gap-6 bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
              <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="flex flex-col gap-2">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue transition-colors font-sans"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your email" 
                  required 
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue transition-colors font-sans"
                />
              </div>
              <div className="flex flex-col gap-2">
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  required 
                  rows="5"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue transition-colors font-sans resize-y"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="mt-4 bg-gradient-to-r from-primary to-[#38bdf8] text-dark font-bold uppercase tracking-widest text-sm py-5 rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
