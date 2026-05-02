import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { habilidades, proyectosU, proyectosPago, proyectosOtros } from '../data/portfolioData';
import { ProjectCard, ProjectModal } from './ProjectComponents';
import { SmoothScrollContainer } from './SmoothScrollContainer';

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-2.5 px-6 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
        active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted'
      }`}
    >
      {children}
    </button>
  );
}

interface SubTabProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function SubTab({ children, active, onClick }: SubTabProps) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 text-sm font-medium border-b-2 transition-all whitespace-nowrap min-w-fit ${
        active ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-primary'
      }`}
    >
      {children}
    </button>
  );
}

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<string>('habilidades');
  const [subTabU, setSubTabU] = useState<'marketing' | 'automatizacion'>('marketing');
  const [subTabPago, setSubTabPago] = useState<'ia' | 'marketing'>('ia');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-card/80 backdrop-blur-xl rounded-[2rem] shadow-sm border border-border p-6 md:p-8">
          
          {/* TABS PRINCIPALES */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 p-1.5 bg-muted/30 rounded-2xl border border-border/50">
            <TabButton active={activeTab === 'habilidades'} onClick={() => setActiveTab('habilidades')}>Habilidades</TabButton>
            <TabButton active={activeTab === 'proyectosU'} onClick={() => setActiveTab('proyectosU')}>Proyectos U</TabButton>
            <TabButton active={activeTab === 'proyectosPago'} onClick={() => setActiveTab('proyectosPago')}>Proyectos Pago</TabButton>
            <TabButton active={activeTab === 'otros'} onClick={() => setActiveTab('otros')}>Video/MVP</TabButton>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'habilidades' && (
              <motion.div key="hab" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <h2 className="text-xl font-medium text-foreground mb-6 flex items-center gap-2"><Sparkles size={20} className="text-primary" /> Expertise</h2>
                <div className="flex flex-wrap gap-2.5 justify-center">
                  {habilidades.map((s, i) => (
                    <span key={i} className="px-4 py-2 bg-gradient-to-r from-muted/50 to-background border border-border text-foreground rounded-full text-sm font-medium hover:border-primary/50 hover:shadow-sm transition-all cursor-default whitespace-nowrap">{s}</span>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'proyectosU' && (
              <motion.div key="u" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="flex flex-wrap justify-center gap-6 mb-8 border-b border-border/50 pb-3">
                  <SubTab active={subTabU === 'marketing'} onClick={() => setSubTabU('marketing')}>Marketing</SubTab>
                  <SubTab active={subTabU === 'automatizacion'} onClick={() => setSubTabU('automatizacion')}>Automatizaciones e IA</SubTab>
                </div>
                <SmoothScrollContainer>
                  {proyectosU[subTabU].map(p => <ProjectCard key={p.id} p={p} onClick={() => setSelectedProject(p)} />)}
                </SmoothScrollContainer>
              </motion.div>
            )}

            {activeTab === 'proyectosPago' && (
              <motion.div key="pago" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="flex flex-wrap justify-center gap-6 mb-8 border-b border-border/50 pb-3">
                  <SubTab active={subTabPago === 'ia'} onClick={() => setSubTabPago('ia')}>IA & Chatbots</SubTab>
                  <SubTab active={subTabPago === 'marketing'} onClick={() => setSubTabPago('marketing')}>Marketing Estratégico</SubTab>
                </div>
                <SmoothScrollContainer>
                  {proyectosPago[subTabPago].map(p => <ProjectCard key={p.id} p={p} onClick={() => setSelectedProject(p)} />)}
                </SmoothScrollContainer>
              </motion.div>
            )}

            {activeTab === 'otros' && (
              <motion.div key="otros" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <h2 className="text-xl font-medium text-foreground mb-6">Contenido Multimedia & MVPs</h2>
                <SmoothScrollContainer>
                  {proyectosOtros.map(p => <ProjectCard key={p.id} p={p} onClick={() => setSelectedProject(p)} />)}
                </SmoothScrollContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
