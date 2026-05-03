import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const testimonials = [
  {
    name: "Carlos Rivera",
    role: "CEO, Nexa Logistics",
    content: "Isabella transformó completamente nuestro flujo de captación. Pasamos de manejar excel manuales a un sistema automatizado en Kommo que aumentó nuestro cierre de ventas un 35%.",
    niche: "B2B SaaS",
    resultado: "35% más cierres"
  },
  {
    name: "Mariana Silva",
    role: "Fundadora, Bella Cucina",
    content: "El rediseño del sitio web y el menú interactivo lograron exactamente lo que buscábamos. Nuestra tasa de reservas online subió un 40% el primer mes de lanzamiento.",
    niche: "Restaurantes",
    resultado: "40% más reservas"
  },
  {
    name: "Dr. Ernesto Pineda",
    role: "Director Médico, Pineda Clinic",
    content: "No creía en los asistentes de IA hasta que Isabella nos instaló uno. Filtra pacientes 24/7 y la tasa de pacientes que no asisten (no-shows) bajó casi a cero. Increíble.",
    niche: "Salud",
    resultado: "Cero no-shows"
  },
  {
    name: "Alejandra Hoyos",
    role: "Marketing Manager, Glamping Resort",
    content: "La landing page de campaña que diseñaron convirtió el triple que nuestra agencia anterior. Entienden qué textos y diseño hacen que la gente haga clic y compre.",
    niche: "Resort",
    resultado: "Triple conversión"
  }
];

function SpotlightCard({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative group rounded-3xl border border-white/5 bg-card/50 backdrop-blur-md overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(208, 188, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative h-full p-8 flex flex-col z-10">
        {children}
      </div>
    </div>
  );
}

export default function TestimoniosGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="inline-block px-4 py-2 border border-primary/20 bg-primary/5 text-primary rounded-full font-space font-medium text-sm tracking-wide uppercase">
          Testimonios
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-foreground tracking-tight max-w-2xl">
          El impacto de trabajar con un <span className="text-primary italic font-light">systema</span> eficiente.
        </h1>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
      >
        {/* Anti-slop / Asymmetric grid handling */}
        <div className="space-y-6">
          {testimonials.filter((_, i) => i % 2 === 0).map((t, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
              <SpotlightCard>
                <div className="mb-6">
                  <span className="px-3 py-1 bg-popover rounded-md text-xs font-space text-muted-foreground uppercase">
                    {t.niche} / {t.resultado}
                  </span>
                </div>
                <p className="text-lg md:text-xl font-inter font-light text-foreground leading-relaxed mb-10 flex-grow relative">
                  <span className="absolute -top-4 -left-4 text-4xl text-primary/20 font-serif">"</span>
                  {t.content}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm animate-pulse-glow" />
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border bg-popover relative z-10">
                      <img src={`https://ui-avatars.com/api/?name=${t.name.split(' ').join('+')}&background=1c2b3c&color=d0bcff`} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm font-inter text-muted-foreground font-light">{t.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-6 md:mt-12">
          {testimonials.filter((_, i) => i % 2 !== 0).map((t, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
              <SpotlightCard>
                 <div className="mb-6">
                  <span className="px-3 py-1 bg-popover rounded-md text-xs font-space text-muted-foreground uppercase">
                    {t.niche} / {t.resultado}
                  </span>
                </div>
                <p className="text-lg md:text-xl font-inter font-light text-foreground leading-relaxed mb-10 flex-grow relative">
                  <span className="absolute -top-4 -left-4 text-4xl text-primary/20 font-serif">"</span>
                  {t.content}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm animate-pulse-glow" />
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border bg-popover relative z-10">
                      <img src={`https://ui-avatars.com/api/?name=${t.name.split(' ').join('+')}&background=1c2b3c&color=d0bcff`} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm font-inter text-muted-foreground font-light">{t.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
