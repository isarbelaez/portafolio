import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight, Download } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header className="max-w-5xl mx-auto pt-16 pb-12 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm tracking-widest uppercase text-muted-foreground"
        >
          ✦ Portafolio Digital
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-6xl font-light tracking-tight text-foreground"
        >
          Hola, soy Isabella{' '}
          <span className="font-semibold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent inline-block">
            
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl px-4 md:px-0"
        >
          Soy <strong>estudiante de mercadeo</strong> con un fuerte enfoque en <strong>estrategia de marketing</strong>. Potencio resultados mediante <strong>automatizaciones con Inteligencia Artificial</strong> para optimizar procesos y escalar negocios.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-8 sm:px-0"
        >
          <button 
            onClick={() => setIsContactOpen(true)}
            className="group px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 border border-primary font-semibold"
          >
            Contactarme
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="/portafolio/hv-isabella-arbelaez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 border border-border text-muted-foreground rounded-xl hover:bg-muted hover:border-muted-foreground transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </motion.div>
      </motion.div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />


      {/* Animated Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/20 to-border/30 blur-xl animate-pulse" />
        <div className="relative w-44 h-44 md:w-56 md:h-56 bg-gradient-to-br from-muted to-background rounded-full border-2 border-border flex items-center justify-center text-muted-foreground shadow-lg">
          <User size={64} strokeWidth={1} />
        </div>
      </motion.div>
    </header>
  );
}