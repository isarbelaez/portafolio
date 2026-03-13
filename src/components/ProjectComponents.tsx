import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, CheckCircle2, ExternalLink, Presentation } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

interface ProjectImage {
  src: string;
  title: string;
  proposalLink?: string;
}

interface Project {
  id: number;
  title: string;
  desc: string;
  fullDesc: string;
  resultados: string[];
  icon: React.ReactNode;
  link?: string;
  proposalLink?: string;
  gallery?: ProjectImage[];
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" 
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 10 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] border border-gray-100 
                       scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent
                       [&::-webkit-scrollbar]:w-2
                       [&::-webkit-scrollbar-track]:bg-transparent
                       [&::-webkit-scrollbar-thumb]:bg-gray-200
                       [&::-webkit-scrollbar-thumb]:rounded-full
                       hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 transition-colors" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-all duration-300 z-10 p-2 hover:bg-gray-50 rounded-full"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <div className="mb-6 w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700">
                  {project.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">{project.title}</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.fullDesc}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.proposalLink && (
                    <a 
                      href={project.proposalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-lg shadow-black/5"
                    >
                      Ver Propuesta <Presentation size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black border border-gray-200 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all"
                    >
                      Ver Demo <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-[0.2em]">Impacto y Resultados</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.resultados.map((r, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-black/20 mt-1.5 shrink-0" />
                        <span>{r}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {project.embed && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                <div dangerouslySetInnerHTML={{ __html: project.embed.replace('width="800"', 'width="100%"').replace('height="450"', 'height="400"') }} />
              </div>
            )}

            {project.gallery && (
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-[0.2em]">Galería Visual</h4>
                <ImageGallery gallery={project.gallery} />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
