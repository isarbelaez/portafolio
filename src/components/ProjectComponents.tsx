import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, X, CheckCircle2 } from 'lucide-react';

export function ProjectCard({ p, onClick }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="w-[300px] shrink-0 bg-[#FDFBF7] border border-[#EFEBE1] rounded-2xl p-6 flex flex-col h-[280px] shadow-sm hover:shadow-md transition-all"
    >
      <div className="w-10 h-10 rounded-full bg-white text-[#6F4E37] flex items-center justify-center mb-4 border border-[#EFEBE1]">{p.icon}</div>
      <h3 className="text-lg font-medium text-[#2D1A11] mb-2">{p.title}</h3>
      <p className="text-[#8D6E63] text-sm flex-grow line-clamp-3">{p.desc}</p>
      <button 
        onPointerDown={(e) => e.stopPropagation()} 
        onClick={onClick}
        className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-[#6F4E37] hover:text-[#3E2723]"
      >
        Detalles <ChevronRight size={14} className="ml-1" />
      </button>
    </motion.div>
  );
}

export function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1A11]/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-[#A1887F] hover:text-[#6F4E37]"><X size={24} /></button>
        <div className="mb-6">{project.icon}</div>
        <h2 className="text-2xl font-medium text-[#2D1A11] mb-2">{project.title}</h2>
        <p className="text-[#8D6E63] mb-6 leading-relaxed">{project.fullDesc}</p>
        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#EFEBE1]">
          <h4 className="text-xs font-bold text-[#6F4E37] uppercase mb-3">Resultados Clave</h4>
          {project.resultados.map((r, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[#5D4037] mb-1.5"><CheckCircle2 size={14} /> {r}</div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
