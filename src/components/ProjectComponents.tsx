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
      className="w-[300px] shrink-0 bg-gradient-to-br from-brand-cream to-white border border-brand-muted/30 rounded-2xl p-6 flex flex-col h-[280px] shadow-sm hover:shadow-xl hover:border-brand-beige transition-all duration-300 group"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-brand-cream text-brand-coffee flex items-center justify-center mb-4 border border-brand-muted/30 group-hover:border-brand-coffee/30 transition-colors">{p.icon}</div>
      <h3 className="text-lg font-medium text-brand-espresso mb-2">{p.title}</h3>
      <p className="text-brand-beige text-sm flex-grow line-clamp-3">{p.desc}</p>
      <button 
        onPointerDown={(e) => e.stopPropagation()} 
        onClick={onClick}
        className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-brand-coffee hover:text-brand-espresso transition-all"
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
            className="bg-white rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] border border-brand-cream
                       scrollbar-thin scrollbar-thumb-brand-muted/40 scrollbar-track-transparent
                       [&::-webkit-scrollbar]:w-2
                       [&::-webkit-scrollbar-track]:bg-transparent
                       [&::-webkit-scrollbar-thumb]:bg-brand-muted/40
                       [&::-webkit-scrollbar-thumb]:rounded-full
                       hover:[&::-webkit-scrollbar-thumb]:bg-brand-beige/40 transition-colors" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-brand-beige hover:text-brand-espresso transition-all duration-300 z-10 p-2 hover:bg-brand-cream rounded-full"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <div className="mb-6 w-12 h-12 rounded-xl bg-brand-cream border border-brand-muted/20 flex items-center justify-center text-brand-coffee">
                  {project.icon}
                </div>
                <h2 className="text-3xl font-bold text-brand-espresso mb-3 leading-tight">{project.title}</h2>
                <p className="text-brand-beige/80 mb-6 text-lg leading-relaxed">{project.fullDesc}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.proposalLink && (
                    <a 
                      href={project.proposalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-coffee text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-espresso transition-all shadow-lg shadow-brand-coffee/10"
                    >
                      Ver Propuesta <Presentation size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-brand-coffee border border-brand-muted px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-cream transition-all"
                    >
                      Ver Demo <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="bg-brand-cream/40 p-6 rounded-2xl border border-brand-cream">
                  <h4 className="text-[10px] font-bold text-brand-beige uppercase mb-4 tracking-[0.2em]">Impacto y Resultados</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.resultados.map((r, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-sm text-brand-espresso/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-beige/40 mt-1.5 shrink-0" />
                        <span>{r}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {project.embed && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-brand-cream shadow-sm bg-brand-cream/20">
                <div dangerouslySetInnerHTML={{ __html: project.embed.replace('width="800"', 'width="100%"').replace('height="450"', 'height="400"') }} />
              </div>
            )}

            {project.gallery && (
              <div className="mt-8 border-t border-brand-cream pt-8">
                <h4 className="text-[10px] font-bold text-brand-beige uppercase mb-4 tracking-[0.2em]">Galería Visual</h4>
                <ImageGallery gallery={project.gallery} />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
