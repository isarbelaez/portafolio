import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { habilidades, proyectosU, proyectosPago, proyectosOtros } from '../data/portfolioData';
import { ProjectCard, ProjectModal } from './ProjectComponents';
import { SmoothScrollContainer } from './SmoothScrollContainer';

function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
        active ? 'bg-[#6F4E37] text-white shadow-sm' : 'text-[#8D6E63] hover:bg-[#EFEBE1]'
      }`}
    >
      {children}
    </button>
  );
}

function SubTab({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
        active ? 'border-[#6F4E37] text-[#2D1A11]' : 'border-transparent text-[#A1887F] hover:text-[#6F4E37]'
      }`}
    >
      {children}
    </button>
  );
}

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState('habilidades');
  const [subTabU, setSubTabU] = useState('marketing');
  const [subTabPago, setSubTabPago] = useState('ia');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-sm border border-[#EFEBE1] p-6 md:p-8">
          
          {/* TABS PRINCIPALES */}
          <div className="flex flex-row overflow-x-auto hide-scrollbar gap-2 mb-10 p-1.5 bg-[#FDFBF7] rounded-2xl border border-[#EFEBE1]">
            <TabButton active={activeTab === 'habilidades'} onClick={() => setActiveTab('habilidades')}>Habilidades</TabButton>
            <TabButton active={activeTab === 'proyectosU'} onClick={() => setActiveTab('proyectosU')}>Proyectos U</TabButton>
            <TabButton active={activeTab === 'proyectosPago'} onClick={() => setActiveTab('proyectosPago')}>Proyectos Pago</TabButton>
            <TabButton active={activeTab === 'otros'} onClick={() => setActiveTab('otros')}>Video/MVP</TabButton>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'habilidades' && (
              <motion.div key="hab" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <h2 className="text-xl font-medium text-[#2D1A11] mb-6 flex items-center gap-2"><Sparkles size={20} className="text-[#6F4E37]" /> Expertise</h2>
                <div className="flex flex-wrap gap-2.5">
                  {habilidades.map((s, i) => (
                    <span key={i} className="px-4 py-2 bg-gradient-to-r from-[#FDFBF7] to-white border border-[#D7CCC8] text-[#5D4037] rounded-full text-sm font-medium hover:border-[#6F4E37] hover:shadow-sm transition-all cursor-default">{s}</span>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'proyectosU' && (
              <motion.div key="u" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="flex gap-6 mb-6 border-b border-[#EFEBE1] pb-3 overflow-x-auto hide-scrollbar">
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
                <div className="flex gap-6 mb-6 border-b border-[#EFEBE1] pb-3 overflow-x-auto hide-scrollbar">
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
                <h2 className="text-xl font-medium text-[#2D1A11] mb-6">Contenido Multimedia & MVPs</h2>
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
