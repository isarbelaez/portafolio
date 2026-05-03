import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  UserFocus, 
  Bag, 
  Lightbulb,
  CaretDown
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
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8 justify-between relative">
        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 border border-primary/20 bg-primary/5 text-primary rounded-full font-space font-medium text-sm tracking-wide"
          >
            Hola, soy Isabella
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter leading-tight text-foreground max-w-2xl">
              {["Diseñamos", "sistemas", "digitales", "que"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="inline-block relative"
              >
                <span className="text-primary italic font-light px-1 relative z-10 animate-gradient-shift bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                  convierten
                </span>
                <motion.span 
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/20 blur-xl -z-10 rounded-full"
                />
              </motion.span>
              <br />
              {["negocios", "en", "resultados."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-xl leading-relaxed"
            >
              Ayudamos a marcas a crecer con páginas web, automatizaciones y estrategias de marketing que generan impacto real.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <motion.a 
              href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/contacto`} 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(var(--primary), 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-space font-bold transition-all shadow-lg shadow-primary/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Agendar llamada</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
            </motion.a>
            <motion.a 
              href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/servicios`} 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-border text-foreground rounded-xl font-space font-semibold transition-all hover:border-primary/50"
            >
              Ver proyectos
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="flex-1 flex justify-center relative"
        >
          {/* AI Orb Element */}
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 group">
            {/* Infinite rotating outer ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/20"
            />
            
            {/* Particles orbiting */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i }
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <div 
                  className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full blur-[1px]"
                  style={{ transform: `translateX(-50%) translateY(${-20 - i * 10}px)` }}
                />
              </motion.div>
            ))}

            {/* Main Orb Body */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute inset-4 rounded-full bg-popover/30 backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.2)] z-10 overflow-hidden transition-shadow duration-500 group-hover:shadow-[0_0_80px_rgba(var(--primary),0.4)]"
            >
               <div className="w-full h-full bg-gradient-to-tr from-primary/10 via-transparent to-primary/10 flex items-center justify-center relative">
                 <motion.span 
                   animate={{ 
                     opacity: [0.2, 0.5, 0.2],
                     scale: [1, 1.1, 1]
                   }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="font-space font-bold text-7xl text-primary tracking-tighter filter blur-[2px] absolute"
                 >
                   IA
                 </motion.span>
                 <span className="font-space font-bold text-7xl text-primary tracking-tighter relative z-10">IA</span>
                 
                 {/* Inner glow */}
                 <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-50" />
               </div>
            </motion.div>
            
            {/* Ambient background glows */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10"
            />
          </div>
        </motion.div>
      </section>

      {/* Info Accordions Concept (Stacked Panels) */}
      <section className="max-w-4xl space-y-6">
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
      <section className="max-w-4xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-outfit font-bold text-foreground tracking-tight">Preguntas clave</h2>
          <p className="text-muted-foreground font-inter font-light">Resolvamos las dudas más comunes sobre nuestro proceso.</p>
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
