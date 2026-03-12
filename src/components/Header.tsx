import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight, Download } from 'lucide-react';

export default function Header() {
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
          className="text-sm tracking-widest uppercase text-[#A1887F]"
        >
          ✦ Portafolio Digital
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-6xl font-light tracking-tight text-[#2D1A11]"
        >
          Hola, soy{' '}
          <span className="font-semibold bg-gradient-to-r from-[#6F4E37] to-[#A1887F] bg-clip-text text-transparent inline-block">
            Isabella
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-[#8D6E63] font-light leading-relaxed max-w-2xl px-4 md:px-0"
        >
          Soy <strong className="font-medium text-[#5D4037]">estudiante de mercadeo</strong> con un fuerte enfoque en <strong className="font-medium text-[#5D4037]">estrategia de marketing</strong>. Potencio resultados mediante <strong className="font-medium text-[#5D4037]">automatizaciones con Inteligencia Artificial</strong> para optimizar procesos y escalar negocios.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-8 sm:px-0"
        >
          <button className="group px-6 py-3 bg-gradient-to-r from-[#6F4E37] to-[#8D6E63] text-[#FDFBF7] rounded-full hover:shadow-lg hover:shadow-[#6F4E37]/20 transition-all duration-300 flex items-center justify-center gap-2">
            Contactarme
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-6 py-3 border border-[#D7CCC8] text-[#6F4E37] rounded-full hover:bg-white/80 hover:border-[#6F4E37]/30 hover:shadow-sm transition-all duration-300 flex items-center justify-center gap-2">
            <Download size={16} />
            Descargar CV
          </button>
        </motion.div>
      </motion.div>

      {/* Animated Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#6F4E37]/20 to-[#D7CCC8]/30 blur-xl animate-pulse" />
        <div className="relative w-44 h-44 md:w-56 md:h-56 bg-gradient-to-br from-[#EFEBE1] to-white rounded-full border-2 border-[#E5E0D8] flex items-center justify-center text-[#A1887F] shadow-lg">
          <User size={64} strokeWidth={1} />
        </div>
      </motion.div>
    </header>
  );
}