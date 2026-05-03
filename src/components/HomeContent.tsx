import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  UserFocus, 
  Bag, 
  Lightbulb,
  CaretDown,
  CheckCircle,
  Funnel,
  TrendUp,
  Users
} from '@phosphor-icons/react';

const InfoAccordion = ({ icon: Icon, title, description }: { icon: any, title: string, description: string | React.ReactNode }) => {
  return (
    <div className="glass-panel p-6 rounded-2xl flex gap-6 items-start hover:bg-popover/30 transition-colors">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
        <Icon size={24} weight="duotone" />
      </div>
      <div>
        <h3 className="text-xl font-space font-semibold text-white mb-2">{title}</h3>
        <div className="text-muted-foreground font-inter font-light leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border/30 rounded-2xl overflow-hidden bg-card/30 backdrop-blur-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className="font-space font-medium text-white group-hover:text-primary transition-colors">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-muted-foreground"
        >
          <CaretDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="px-6 pb-6 pt-2 text-muted-foreground font-inter font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HomeContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-40">
      {/* Futuristic Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-20 overflow-hidden">
        
        {/* Deep Purple Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/10 blur-[200px] rounded-full animate-pulse-glow" />
          
          {/* Circuit Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80h-80z' fill='none' stroke='%23d0bcff' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%23d0bcff'/%3E%3Ccircle cx='90' cy='10' r='1' fill='%23d0bcff'/%3E%3Ccircle cx='90' cy='90' r='1' fill='%23d0bcff'/%3E%3Ccircle cx='10' cy='90' r='1' fill='%23d0bcff'/%3E%3Cpath d='M50 10v80M10 50h80' stroke='%23d0bcff' stroke-width='0.2'/%3E%3C/svg%3E")` }} />
          <div className="absolute inset-0 bg-grid-tech opacity-20" />
        </div>

        {/* Floating Data Nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 - 50 + "%",
              opacity: 0.1 
            }}
            animate={{ 
              y: ["-15%", "15%", "-15%"],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1.5px] -z-10"
          />
        ))}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 space-y-16 max-w-5xl"
        >
          {/* 1. Centered Headline */}
          <div className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold font-outfit tracking-tighter leading-none text-white/90">
              Diseñamos sistemas digitales que
            </motion.h1>
            <motion.h1 
              variants={itemVariants} 
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-outfit tracking-tighter leading-[0.9] text-primary"
            >
              convierten visitas en clientes
            </motion.h1>
          </div>

          {/* 2. Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            Ayudamos a marcas a crecer con páginas web, automatizaciones inteligentes y estrategias de marketing diseñadas para generar resultados reales y medibles.
          </motion.p>

          {/* 3. Horizontal Glass Cards Grid */}
          <div className="relative pt-12">
            {/* Data Wave Trail */}
            <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 -z-10 pointer-events-none" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <motion.path
                d="M0,50 Q250,0 500,50 T1000,50"
                fill="none"
                stroke="url(#wave-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M0,50 Q250,100 500,50 T1000,50"
                fill="none"
                stroke="url(#wave-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
              />
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d0bcff" />
                  <stop offset="50%" stopColor="#ff00ff" />
                  <stop offset="100%" stopColor="#d0bcff" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {/* Card 1 */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel p-8 rounded-3xl border border-primary/40 bg-popover/15 backdrop-blur-2xl relative overflow-hidden group shadow-[0_0_40px_rgba(var(--primary),0.15)]"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 pointer-events-none mix-blend-overlay" />
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-center relative">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-primary relative"
                    >
                      <CheckCircle size={32} weight="fill" className="absolute -top-3 -right-3 z-20 drop-shadow-[0_0_15px_rgba(var(--primary),1)]" />
                      <Funnel size={64} weight="duotone" className="opacity-90" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-space font-bold text-white uppercase tracking-tight leading-tight">Automatización de Procesos</h3>
                  <div className="h-16 flex items-end justify-center gap-1.5 opacity-80">
                    {[20, 35, 25, 45, 60, 50, 75, 90].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 1.2 }}
                        className="w-1.5 bg-primary/70 rounded-t-full shadow-[0_0_10px_rgba(var(--primary),0.3)]"
                      />
                    ))}
                  </div>
                </div>
                {/* Glowing Border effect */}
                <div className="absolute inset-0 rounded-3xl border border-primary/20 group-hover:border-primary group-hover:shadow-[inset_0_0_20px_rgba(var(--primary),0.3)] transition-all duration-500" />
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel p-8 rounded-3xl border border-primary/40 bg-popover/15 backdrop-blur-2xl relative overflow-hidden group shadow-[0_0_40px_rgba(var(--primary),0.15)]"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 pointer-events-none mix-blend-overlay" />
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-center relative">
                    <motion.div 
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-primary relative"
                    >
                      <CheckCircle size={32} weight="fill" className="absolute -top-3 -right-3 z-20 drop-shadow-[0_0_15px_rgba(var(--primary),1)]" />
                      <TrendUp size={64} weight="duotone" className="opacity-90" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-space font-bold text-white uppercase tracking-tight leading-tight">Sistemas para Escalar el Negocio</h3>
                  <div className="flex justify-center gap-3 pt-4">
                     {[0, 0.5, 1].map((delay, i) => (
                       <motion.div 
                         key={i}
                         animate={{ 
                           opacity: [0.2, 1, 0.2],
                           scale: [1, 1.5, 1],
                           boxShadow: ["0 0 0px rgba(var(--primary),0)", "0 0 10px rgba(var(--primary),0.8)", "0 0 0px rgba(var(--primary),0)"]
                         }}
                         transition={{ duration: 2, repeat: Infinity, delay }}
                         className="w-2.5 h-2.5 rounded-full bg-primary"
                       />
                     ))}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl border border-primary/20 group-hover:border-primary group-hover:shadow-[inset_0_0_20px_rgba(var(--primary),0.3)] transition-all duration-500" />
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel p-8 rounded-3xl border border-primary/40 bg-popover/15 backdrop-blur-2xl relative overflow-hidden group shadow-[0_0_40px_rgba(var(--primary),0.15)]"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 pointer-events-none mix-blend-overlay" />
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-center relative">
                    <motion.div 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-primary relative"
                    >
                      <CheckCircle size={32} weight="fill" className="absolute -top-3 -right-3 z-20 drop-shadow-[0_0_15px_rgba(var(--primary),1)]" />
                      <Users size={64} weight="duotone" className="opacity-90" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-space font-bold text-white uppercase tracking-tight leading-tight">Captación Constante de Leads</h3>
                  <div className="flex justify-center pt-4">
                    <div className="px-5 py-2 rounded-xl bg-primary/20 border border-primary/40 text-[10px] text-primary font-bold tracking-widest shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                      OPTIMIZADO IA
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl border border-primary/20 group-hover:border-primary group-hover:shadow-[inset_0_0_20px_rgba(var(--primary),0.3)] transition-all duration-500" />
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 pt-8">
            <motion.a 
              href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/contacto`} 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--primary), 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-space font-bold transition-all shadow-xl shadow-primary/40 relative overflow-hidden group"
            >
              <span className="relative z-10">Agendar llamada</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.a>
            <motion.a 
              href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/servicios`} 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border border-primary/30 text-white rounded-2xl font-space font-semibold transition-all hover:border-primary group flex items-center gap-2 backdrop-blur-md"
            >
              Ver proyectos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Rest of the content */}
      <section className="max-w-4xl mx-auto space-y-6 px-6">
        <InfoAccordion 
          icon={UserFocus} 
          title="¿Quién soy?" 
          description="Soy estratega digital y desarrollador especializado en crear sistemas que conectan, automatizan y venden. Me enfoco en transformar ideas complejas en interfaces intuitivas y de alto rendimiento."
        />
        <InfoAccordion 
          icon={Bag} 
          title="¿Qué vendemos?" 
          description="Sitios web, automatizaciones, chatbots y estrategias de marketing que convierten visitas en clientes. Soluciones de extremo a extremo sin dependencia de múltiples plataformas fragmentadas."
        />
        <InfoAccordion 
          icon={Lightbulb} 
          title="¿Qué resolvemos?" 
          description="Falta de presencia digital, procesos manuales repetitivos, baja conversión en ventas y atención al cliente poco eficiente. Diseñamos para que la tecnología trabaje por ti."
        />
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto space-y-12 px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-4xl font-outfit font-bold text-foreground tracking-tight">Preguntas clave</h2>
          <p className="text-lg text-muted-foreground font-inter font-light max-w-2xl mx-auto">Resolvamos las dudas más comunes sobre nuestro proceso.</p>
        </div>
        
        <div className="space-y-4">
          <FAQItem 
            question="¿Cuánto tiempo toma un proyecto?" 
            answer="Depende de la complejidad. Un landing page puede estar listo en 1-2 semanas, mientras que un e-commerce o sistema automatizado complejo puede tomar de 4 a 6 semanas." 
          />
          <FAQItem 
            question="¿Qué incluye cada servicio?" 
            answer="Todos nuestros sitios web incluyen diseño UX/UI personalizado, estrategias de SEO técnico, responsive design para móviles y optimización de velocidad de carga." 
          />
          <FAQItem 
            question="¿Con qué plataformas trabajamos?" 
            answer="Utilizamos stacks modernos (Astro, React, Next.js) para desarrollo a medida, Shopify para E-commerce, y n8n/Make junto a Kommo CRM para automatizaciones." 
          />
          <FAQItem 
            question="¿Pueden automatizar mi negocio?" 
            answer="Sí, analizamos tus cuellos de botella y creamos flujos en herramientas como n8n y Make para automatizar marketing, seguimiento de leads y servicio al cliente." 
          />
          <FAQItem 
            question="¿Ofrecen soporte y mantenimiento?" 
            answer="Contamos con planes de mantenimiento donde nos encargamos de las actualizaciones técnicas, seguridad y monitoreo de rendimiento mensual." 
          />
        </div>
      </section>
      
      {/* Footer / Final CTA */}
      <section className="pb-12 text-center flex flex-col items-center gap-6">
        <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-foreground leading-tight">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-xl text-muted-foreground font-inter font-light max-w-xl">
          Hablemos y creemos algo increíble juntos.
        </p>
        <a href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/servicios`} className="group mt-4 px-8 py-4 border border-primary text-primary rounded-xl font-space font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2">
          Ver nuestros servicios
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </section>
    </div>
  );
}
