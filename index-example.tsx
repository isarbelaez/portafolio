import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  User, 
  Code, 
  Megaphone, 
  Bot, 
  Calendar, 
  Video, 
  Layout, 
  Truck, 
  Smartphone, 
  MessageSquare,
  ChevronRight,
  X,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('habilidades');
  const [subTabU, setSubTabU] = useState('marketing');
  const [subTabPago, setSubTabPago] = useState('ia');
  const [selectedProject, setSelectedProject] = useState(null);

  // Datos de los proyectos
  const proyectosU = {
    marketing: [
      { id: 1, title: 'Estrategia B2B - Industria', desc: 'Marketing industrial enfocado en captación de leads.', fullDesc: 'Estrategia integral para el sector industrial enfocada en LinkedIn Ads.', resultados: ['+45% leads calificados', '-18% CAC'], icon: <Briefcase size={24} /> },
      { id: 2, title: 'Estrategia B2B - Restaurante', desc: 'Fidelización corporativa para sector gastronómico.', fullDesc: 'Implementación de planes corporativos y reservas digitales.', resultados: ['+30% en reservas B2B'], icon: <User size={24} /> },
      { id: 3, title: 'Piezas Publicitarias', desc: 'Creatividades de alto impacto para Ads.', fullDesc: 'Diseño visual optimizado para conversión en Meta Ads.', resultados: ['+2.5% CTR promedio'], icon: <Layout size={24} /> },
      { id: 4, title: 'Interfaz UX/UI', desc: 'Prototipado y diseño centrado en el usuario.', fullDesc: 'Diseño de aplicaciones móviles en Figma con enfoque en accesibilidad.', resultados: ['Design System escalable'], icon: <Smartphone size={24} /> },
    ],
    automatizacion: [
      { id: 5, title: 'Videos con IA', desc: 'Producción de contenido con avatares de IA.', fullDesc: 'Uso de HeyGen y Midjourney para anuncios escalables.', resultados: ['70% ahorro en costos'], icon: <Video size={24} /> },
      { id: 6, title: 'Automatización n8n', desc: 'Workflows complejos para gestión de leads.', fullDesc: 'Conexión de CRM, Slack y Sheets mediante n8n.', resultados: ['15h manuales ahorradas/semana'], icon: <Bot size={24} /> },
      { id: 7, title: 'Agenda Google + WhatsApp', desc: 'Sistema de reservas directo desde chat.', fullDesc: 'Integración de API de WhatsApp con Calendar.', resultados: ['-40% No-shows'], icon: <Calendar size={24} /> },
    ]
  };

  const proyectosPago = {
    ia: [
      { id: 8, title: 'Chatbots de Venta (Komo CRM)', desc: 'Bots conversacionales para cierre de ventas.', fullDesc: 'Entrenamiento de modelos LLM para atención 24/7 en CRM.', resultados: ['+25% conversión'], icon: <MessageSquare size={24} /> },
    ],
    marketing: [
      { id: 9, title: 'Embudos en Canales', desc: 'Funnel de ventas en Telegram y Facebook.', fullDesc: 'Estrategia de lanzamientos mediante comunidades digitales.', resultados: ['ROAS 4.5x'], icon: <Megaphone size={24} /> },
    ]
  };

  const proyectosOtros = [
    { id: 10, title: 'Edición de Video YouTube', desc: 'Edición profesional enfocada en retención.', fullDesc: 'Post-producción dinámica para canales educativos.', resultados: ['+35% retención promedio'], icon: <Video size={24} /> },
    { id: 11, title: 'MVP Logística y Distribución', desc: 'App de optimización de rutas de última milla.', fullDesc: 'Desarrollo de plataforma para trazabilidad de entregas.', resultados: ['-20% tiempos de entrega'], icon: <Truck size={24} /> },
  ];

  const habilidades = [
    "Estrategia B2B", "Diseño UX/UI", "Automatización (n8n)", "Inteligencia Artificial",
    "Komo CRM", "Chatbots de Venta", "Edición de Video", "Embudos de Venta"
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3E2723] font-sans selection:bg-[#D7CCC8]">
      
      {/* HEADER */}
      <header className="max-w-5xl mx-auto pt-16 pb-12 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-[#2D1A11]"
          >
            Hola, soy <span className="font-medium text-[#6F4E37]">Tu Nombre</span>
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

      {/* MAIN NAV BOX */}
      <main className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-[2rem] shadow-sm border border-[#EFEBE1] p-6 md:p-8">
          
          {/* TABS PRINCIPALES */}
          <div className="flex flex-col sm:flex-row gap-2 mb-10 p-1.5 bg-[#FDFBF7] rounded-2xl border border-[#EFEBE1]">
            <TabButton active={activeTab === 'habilidades'} onClick={() => setActiveTab('habilidades')}>Habilidades</TabButton>
            <TabButton active={activeTab === 'proyectosU'} onClick={() => setActiveTab('proyectosU')}>Proyectos U</TabButton>
            <TabButton active={activeTab === 'proyectosPago'} onClick={() => setActiveTab('proyectosPago')}>Proyectos Pago</TabButton>
            <TabButton active={activeTab === 'otros'} onClick={() => setActiveTab('otros')}>Video / MVP</TabButton>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'habilidades' && (
              <motion.div key="hab" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <h2 className="text-xl font-medium text-[#2D1A11] mb-6 flex items-center gap-2"><Sparkles size={20} className="text-[#6F4E37]" /> Expertise</h2>
                <div className="flex flex-wrap gap-2.5">
                  {habilidades.map((s, i) => (
                    <span key={i} className="px-4 py-2 bg-[#FDFBF7] border border-[#D7CCC8] text-[#5D4037] rounded-full text-sm font-medium">{s}</span>
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
    </div>
  );
}

// COMPONENTE: Scroll Suave con Framer Motion (Drag)
function SmoothScrollContainer({ children }) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Efecto para calcular el ancho del contenido y limitar el drag
  React.useEffect(() => {
    if (innerRef.current && containerRef.current) {
      setWidth(innerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, [children]);
  
  return (
    <div className="relative overflow-hidden group" ref={containerRef}>
      <motion.div 
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-6 pb-4 cursor-grab overflow-visible"
        ref={innerRef}
        style={{ width: 'max-content' }}
      >
        {children}
      </motion.div>
      {/* Indicador visual de scroll lateral */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

function ProjectCard({ p, onClick }) {
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

function ProjectModal({ project, onClose }) {
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