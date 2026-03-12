import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="max-w-5xl mx-auto pt-16 pb-12 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-tight text-[#2D1A11]"
        >
          Hola, soy <span className="font-medium text-[#6F4E37]">Isabella</span>
        </motion.h1>
        <p className="text-lg text-[#8D6E63] font-light leading-relaxed max-w-2xl">
          Estratega de <strong className="font-medium text-[#5D4037]">Marketing, UX/UI y Automatizaciones con IA</strong>. Optimizo negocios con tecnología y creatividad.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-[#6F4E37] text-[#FDFBF7] rounded-full hover:bg-[#5D4037] transition-all">Contactarme</button>
          <button className="px-6 py-3 border border-[#D7CCC8] text-[#6F4E37] rounded-full hover:bg-white transition-all">Descargar CV</button>
        </div>
      </div>
      <div className="w-44 h-44 md:w-56 md:h-56 bg-[#EFEBE1] rounded-full border border-[#E5E0D8] flex items-center justify-center text-[#A1887F]">
        <User size={64} strokeWidth={1} />
      </div>
    </header>
  );
}
