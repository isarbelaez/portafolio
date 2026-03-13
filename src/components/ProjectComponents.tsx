import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, CheckCircle2, ExternalLink, Presentation } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

interface Project {
  id: number;
  title: string;
  desc: string;
  fullDesc: string;
  resultados: string[];
  icon: React.ReactNode;
  link?: string;
  proposalLink?: string;
  images?: string[];
  embed?: string;
}

export function ProjectCard({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      // NOTE: no overflow-hidden here — parent container handles clipping with padding
      className="w-[300px] shrink-0 bg-gradient-to-br from-[#FDFBF7] to-white border border-[#EFEBE1] rounded-2xl p-6 flex flex-col h-[280px] shadow-sm hover:shadow-xl hover:border-[#D7CCC8] transition-all duration-300 group"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-[#EFEBE1] text-[#6F4E37] flex items-center justify-center mb-4 border border-[#EFEBE1] group-hover:border-[#6F4E37]/30 transition-colors">{p.icon}</div>
      <h3 className="text-lg font-medium text-[#2D1A11] mb-2">{p.title}</h3>
      <p className="text-[#8D6E63] text-sm flex-grow line-clamp-3">{p.desc}</p>
      <button 
        onPointerDown={(e) => e.stopPropagation()} 
        onClick={onClick}
        className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-[#6F4E37] hover:text-[#3E2723] transition-all"
      >
        Detalles <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1A11]/60 backdrop-blur-md" 
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="bg-white/98 backdrop-blur-xl rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] border border-[#EFEBE1]" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-[#A1887F] hover:text-[#6F4E37] hover:rotate-90 transition-all duration-300 z-10"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <div className="mb-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FDFBF7] to-[#EFEBE1] border border-[#D7CCC8] flex items-center justify-center text-[#6F4E37]">
                  {project.icon}
                </div>
                <h2 className="text-3xl font-bold text-[#2D1A11] mb-3 leading-tight">{project.title}</h2>
                <p className="text-[#8D6E63] mb-6 text-lg leading-relaxed">{project.fullDesc}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.proposalLink && (
                    <a 
                      href={project.proposalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#6F4E37] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#3E2723] transition-all shadow-lg shadow-[#6F4E37]/20"
                    >
                      Ver Propuesta <Presentation size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#6F4E37] border-2 border-[#6F4E37] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#FDFBF7] transition-all"
                    >
                      Demo en Vivo <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="bg-gradient-to-br from-[#FDFBF7] to-white p-6 rounded-2xl border border-[#EFEBE1]">
                  <h4 className="text-xs font-bold text-[#6F4E37] uppercase mb-4 tracking-widest">Impacto y Resultados</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.resultados.map((r, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-sm text-[#5D4037]"
                      >
                        <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" /> 
                        <span>{r}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {project.embed && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-inner bg-black/5">
                <div dangerouslySetInnerHTML={{ __html: project.embed.replace('width="800"', 'width="100%"').replace('height="450"', 'height="400"') }} />
              </div>
            )}

            {project.images && (
              <div className="mt-8 border-t border-[#EFEBE1] pt-8">
                <h4 className="text-xs font-bold text-[#6F4E37] uppercase mb-4 tracking-widest">Galería Visual</h4>
                <ImageGallery images={project.images} proposalLink={project.proposalLink || project.link} />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
