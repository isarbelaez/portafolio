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
      <section className="space-y-6">
        <div className="inline-block px-4 py-2 border border-primary/20 bg-primary/5 text-primary rounded-full font-space font-medium text-sm tracking-wide uppercase">
          Marketing
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-foreground tracking-tight max-w-3xl">
          Estrategias probadas para ganar <span className="text-primary italic font-light">tracción</span> y escalar.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-2xl leading-relaxed">
          Diseñamos embudos multicanal apoyados de automatizaciones para reducir el costo de adquisición (CAC) y maximizar el LTV de tus clientes.
        </p>
      </section>

      {/* Bento Grid Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-10 rounded-3xl col-span-1">
          <h4 className="font-space font-semibold text-muted-foreground uppercase text-sm tracking-widest mb-4">Proyectos Completados</h4>
          <span className="text-8xl font-bold font-space text-foreground tracking-tighter">29</span>
        </div>
        <div className="glass-panel p-10 rounded-3xl col-span-1 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
          <h4 className="font-space font-semibold text-primary uppercase text-sm tracking-widest mb-4">Aumento en conversiones</h4>
          <span className="text-8xl font-bold font-space text-foreground tracking-tighter">3.8<span className="text-5xl text-primary ml-1">x</span></span>
        </div>
        <div className="glass-panel p-10 rounded-3xl col-span-1">
          <h4 className="font-space font-semibold text-muted-foreground uppercase text-sm tracking-widest mb-4">Clientes Satisfechos</h4>
          <span className="text-8xl font-bold font-space text-foreground tracking-tighter">92<span className="text-5xl text-muted-foreground ml-1">%</span></span>
        </div>
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
