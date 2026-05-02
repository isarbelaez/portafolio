import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, ArrowLeft } from '@phosphor-icons/react';

export default function NotFoundContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-12 md:p-24 rounded-[3rem] relative overflow-hidden flex flex-col items-center max-w-3xl w-full"
      >
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-32 h-32 md:w-48 md:h-48 bg-popover border border-border rounded-full flex items-center justify-center text-primary mb-8 shadow-2xl shadow-primary/20"
        >
          <Ghost size={80} weight="duotone" className="w-20 h-20 md:w-24 md:h-24" />
        </motion.div>

        <h1 className="text-7xl md:text-9xl font-outfit font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-space font-bold text-foreground mb-6">
          Página no <span className="text-primary italic font-light">encontrada</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-md leading-relaxed mb-10">
          Parece que te has perdido en el ciberespacio. La página que buscas no existe o ha sido movida.
        </p>

        <a 
          href="/" 
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-space font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group relative z-10"
        >
          <ArrowLeft weight="bold" size={20} className="group-hover:-translate-x-1 transition-transform" />
          Volver al Inicio
        </a>
      </motion.div>
    </div>
  );
}
