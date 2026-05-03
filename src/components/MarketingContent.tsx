import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_ITEMS = [
  "Estrategia de Crecimiento",
  "Meta Ads",
  "Google Ads",
  "n8n Automation",
  "SEO B2B",
  "Kommo CRM",
  "Conversion Rate Optimization",
  "HubSpot Integrations",
  "Make.com"
];

// Duplicate items for seamless infinite scroll
const SCROLL_ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function MarketingContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-24">
      {/* Header section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
        <div className="inline-block px-4 py-2 border border-primary/20 bg-primary/5 text-primary rounded-full font-space font-medium text-sm tracking-wide uppercase">
          Marketing
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-foreground tracking-tight max-w-3xl leading-[1.1]">
          Estrategias probadas para ganar <span className="relative inline-block">
            <span className="relative z-10 text-primary italic font-light">tracción</span>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-1 left-0 h-3 bg-primary/20 -rotate-1 origin-left"
            />
          </span> y escalar.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-2xl leading-relaxed">
          Diseñamos embudos multicanal apoyados de automatizaciones para reducir el costo de adquisición (CAC) y maximizar el LTV de tus clientes.
        </p>
      </motion.section>

      {/* Bento Grid Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Proyectos Completados', value: '29', gradient: false },
          { label: 'Aumento en conversiones', value: '3.8x', gradient: true },
          { label: 'Clientes Satisfechos', value: '92%', gradient: false }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`glass-panel p-10 rounded-3xl col-span-1 relative overflow-hidden group ${
              item.gradient ? 'bg-gradient-to-br from-primary/10 to-transparent border-primary/30' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-shift" />
            <h4 className={`font-space font-semibold uppercase text-xs tracking-widest mb-4 ${
              item.gradient ? 'text-primary' : 'text-muted-foreground'
            }`}>{item.label}</h4>
            <div className="text-8xl font-bold font-space text-foreground tracking-tighter relative z-10">
              {item.value.includes('.') ? (
                <>
                  {item.value.split('.')[0]}.
                  <span className="text-6xl">{item.value.split('.')[1].replace('x', '')}</span>
                  <span className="text-5xl text-primary ml-1">x</span>
                </>
              ) : (
                <>
                  {item.value.replace('%', '')}
                  {item.value.includes('%') && <span className="text-5xl text-muted-foreground ml-1">%</span>}
                </>
              )}
            </div>
            
            {/* Subtle border glow */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </section>

      {/* Kinetic Marquee (Perpetual Animation) */}
      <section className="relative overflow-hidden py-12 -mx-6 md:-mx-12 lg:-mx-24 px-6">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="flex w-max">
          <motion.div 
            animate={{ x: "-50%" }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 text-5xl md:text-7xl font-outfit font-bold uppercase"
          >
            {SCROLL_ITEMS.map((item, id) => (
              <span key={id} className="text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/30 to-border/30 whitespace-nowrap">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Text block */}
      <section className="max-w-4xl glass-panel p-8 md:p-12 rounded-3xl">
        <h2 className="text-2xl font-outfit text-foreground mb-6 font-semibold">Tecnología al servicio de las ventas</h2>
        <p className="text-muted-foreground font-inter font-light leading-relaxed mb-6">
          No me limito a crear sitios visualmente atractivos. Entiendo que una página web es un empleado que trabaja 24/7 y su principal función es captar y educar prospectos. Utilizo IA y herramientas No-Code como n8n y Make para conectar tu tráfico con tu CRM al instante, eliminando procesos manuales y filtrando leads calificados de forma automática.
        </p>
        <a href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/contacto`} className="inline-flex items-center gap-2 text-primary font-space font-semibold hover:underline">
          Hablemos sobre tu estrategia &rarr;
        </a>
      </section>
    </div>
  );
}
