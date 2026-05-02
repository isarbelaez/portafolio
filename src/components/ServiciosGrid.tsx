import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard, ProjectModal } from './ProjectComponents';
import { Monitor, ShoppingCart, RocketLaunch, Code, Laptop, ShareNetwork, Sparkle, Users, CheckCircle, ArrowRight } from '@phosphor-icons/react';

const mockProjects = [
  {
    id: 1,
    title: 'Glamping Eucalipto',
    type: 'Sitio Web',
    niche: 'Glamping',
    desc: 'Sitio web con sistema de reservas integrado, diseño inmersivo y experiencia optimizada.',
    fullDesc: 'Desarrollo de un sitio web completo con sistema de reservas, motor de pagos y panel de administración.',
    resultados: ['+45% incremento en reservas directas', '-20% en comisiones a terceros'],
    icon: <Monitor size={24} weight="regular" />,
    demoLink: 'https://isarbelaez.github.io/ejemplo-villa-eucalipto-y-romero-glamping/',
    comoSeHizo: 'Se implementó una arquitectura en Next.js con Tailwind CSS para crear una interfaz inmersiva, junto con un sistema backend en Node.js para las reservas.',
    programas: ['Astro', 'Tailwind', 'Figma'],
    gallery: [{ src: '/public/img/glampingromero.png', title: 'Glamping' }]
  },
  {
    id: 2,
    title: 'Glamping Santa Elena',
    type: 'Sitio Web',
    niche: 'Glamping',
    desc: 'Sitio web para la captación y calificación de Leads, donde logramos automatizar y optimizar procesos de reservacion.',
    fullDesc: 'Desarrollo de un sitio web, para la captación y calificación de Leads.',
    resultados: ['+120% aumento en ventas mensuales', '3.5% Tasa de conversión'],
    icon: <Monitor size={24} weight="regular" />,
    demoLink: 'https://preview-glamping-santa-helena.vercel.app/',
    comoSeHizo: 'Sitio web desarrollado con Astro, enfocado en alto rendimiento, velocidad de carga y optimización SEO desde su estructura base. El proyecto fue desplegado en Vercel, permitiendo una infraestructura escalable, segura y con actualizaciones automáticas. Todo el control de versiones y flujo de desarrollo se gestionó mediante GitHub, asegurando organización, mantenimiento continuo y facilidad para futuras mejoras.',
    programas: ['Astro', 'Versel', 'Githube', 'Figma'],
    gallery: [{ src: '/public/img/glampingsantaelena.png', title: 'Glamping Santa Elena' }]
  },
  {
    id: 3,
    title: 'Portafolio Profesional',
    type: 'Sitio web',
    niche: 'Educacion',
    desc: 'Realizamos un portafolio de Fotografia, con un diseño limpio y minimalista.',
    fullDesc: 'Fue diseñada para mostarar los servicios de un fotografo profesional y con automatizacion de Google Sheet y conctacto directo con WhatsApp.',
    resultados: ['100% diseño personalizado', 'Automatizacion con Google Sheet y conctacto directo con WhatsApp'],
    icon: <RocketLaunch size={24} weight="regular" />,
    demoLink: 'https://portafoliojordi.vercel.app/',
    comoSeHizo: 'Se diseñó una estructura simple y limpia, para mostrar los servicios del fotografo, con integraciones de WhatsApp y Google Sheet para facilitar la comunicación y gestión de leads.',
    programas: ['Astro', 'Vercel', 'Google Sheet', 'WhatsApp'],
    gallery: [{ src: '/public/img/portafolio.png', title: 'Portafolio' }]
  },
  {
    id: 4,
    title: 'SkyVen',
    type: 'Sitio Web',
    niche: 'Construccion',
    desc: 'Pagina web para inforamcion de instalaciones de tejas en Maiami.',
    fullDesc: 'Pagina web con una estrutura diseñada de en Figma y desarrollada con HTML, CSS, JavaScript y Figma.',
    resultados: ['100% optimizada para SEO', 'Diseño 100% personalizado'],
    icon: <Sparkle size={24} weight="regular" />,
    demoLink: 'https://skyvenroofing.com/',
    comoSeHizo: 'Se diseñó una estructura simple y limpia, para mostrar los servicios de la empresa, con posicionamiento del Seo ',
    programas: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    gallery: [{ src: '/public/img/construccio.png', title: 'Construccion' }]
  },
// {
//     id: 5,
//     title: 'Homes Real Estate',
//     type: 'Sitio Web',
//     niche: 'Educación',
//     desc: 'Sitio web inmobiliario con búsqueda avanzada y recorridos virtuales 360°.',
//     fullDesc: 'Plataforma para mostrar propiedades inmobiliarias con filtros avanzados y mapas.',
//     resultados: ['+300 prospectos mensuales'],
//     icon: <Laptop size={24} weight="regular" />,
//     demoLink: '#',
//     comoSeHizo: 'Integración de mapas interactivos y recorridos en 360 grados, utilizando un CMS headless para facilitar la actualización de propiedades.',
//     programas: ['Next.js', 'Sanity CMS', 'Mapbox', 'Tailwind'],
//     gallery: [{ src: 'https://picsum.photos/seed/homes/800/600', title: 'Homes' }]
//   },
//   {
//     id: 6,
//     title: 'Bella Cucina',
//     type: 'Sitio Web',
//     niche: 'Restaurantes',
//     desc: 'Sitio web para restaurante con reservas online y menú digital interactivo.',
//     fullDesc: 'Renovación completa de presencia digital con menú integrado a sistema de pedidos local.',
//     resultados: ['Menú digital generó 15% más de upselling'],
//     icon: <ShareNetwork size={24} weight="regular" />,
//     demoLink: '#',
//     comoSeHizo: 'Aplicación web progresiva (PWA) para el menú interactivo con escaneo de código QR en las mesas, enlazado directamente a la cocina.',
//     programas: ['React', 'Firebase', 'PWA', 'Tailwind'],
//     gallery: [{ src: 'https://picsum.photos/seed/bella/800/600', title: 'Bella Cucina' }]
//   }
];

const mainFilters = ['Todos', 'E-commerce', 'Landing Page', 'Automatizaciones', 'Sitio Web', 'Rediseño Web', 'Chatbots'];
const nicheFilters = ['Todos', 'Estética', 'Odontología', 'Glamping', 'Resort', 'Salud', 'Educación', 'Restaurantes'];

export default function ServiciosGrid() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [activeNiche, setActiveNiche] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const showNicheFilters = !['Chatbots', 'Landing Page', 'Landing Peag'].includes(activeFilter) && activeFilter !== 'Todos';

  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchType = activeFilter === 'Todos' || project.type === activeFilter;
      const matchNiche = (!showNicheFilters || activeNiche === 'Todos') || project.niche === activeNiche;
      return matchType && matchNiche;
    });
  }, [activeFilter, activeNiche, showNicheFilters]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16">
      
      {/* Header and filters */}
      <div className="space-y-12">
        <div className="flex flex-col xl:flex-row gap-8 items-start xl:items-end justify-between">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 border border-primary/20 bg-primary/5 text-primary rounded-full font-space font-medium text-sm tracking-wide uppercase">
              Nuestros Servicios
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white tracking-tight">
              Explora nuestros <br/>
              <span className="text-primary italic font-light pr-2">proyectos</span> en vivo
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pb-2">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#12111A] border border-primary/20 rounded-2xl shadow-[0_0_15px_rgba(208,188,255,0.05)]">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle size={24} weight="fill" />
              </div>
              <div>
                <div className="text-white font-bold font-inter text-lg">98%</div>
                <div className="text-on-surface-variant text-xs font-space uppercase tracking-wider">Clientes Satisfechos</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-[#12111A] border border-primary/20 rounded-2xl shadow-[0_0_15px_rgba(208,188,255,0.05)]">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users size={24} weight="fill" />
              </div>
              <div>
                <div className="text-white font-bold font-inter text-lg">+100</div>
                <div className="text-on-surface-variant text-xs font-space uppercase tracking-wider">Prospectos Obtenidos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="font-space font-medium text-on-surface-variant text-sm whitespace-nowrap min-w-[140px]">
              Filtrar por servicio:
            </span>
            <div className="flex flex-wrap gap-2">
              {mainFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setActiveNiche('Todos');
                  }}
                  className={`px-4 py-2 rounded-lg font-space text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                      : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container-high hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {showNicheFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="flex flex-col md:flex-row gap-4 items-start md:items-center overflow-hidden"
              >
                <span className="font-space font-medium text-on-surface-variant text-sm whitespace-nowrap min-w-[140px]">
                  Filtrar por nicho:
                </span>
                <div className="flex flex-wrap gap-2">
                  {nicheFilters.map((niche) => (
                    <button
                      key={niche}
                      onClick={() => setActiveNiche(niche)}
                      className={`px-4 py-2 rounded-lg font-space text-sm font-medium transition-all duration-300 ${
                        activeNiche === niche
                          ? 'bg-primary text-on-primary shadow-md shadow-primary/10'
                          : 'border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-high hover:text-white'
                      }`}
                    >
                      {niche}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              layoutId={project.id.toString()}
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Wrapped the existing ProjectCard logic slightly tweaked for the design */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-3xl flex flex-col h-full hover:border-primary/50 transition-all duration-500 cursor-pointer group"
              >
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative mb-5 bg-white/5">
                  {project.gallery && project.gallery[0] ? (
                    <img src={project.gallery[0].src} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary/60 text-sm font-inter">Sin Imagen</div>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-3 gap-2">
                  <h3 className="text-lg font-inter font-semibold text-white tracking-tight truncate">{project.title}</h3>
                  <div className="shrink-0 px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-lg text-[11px] font-medium tracking-wide">
                    {project.type}
                  </div>
                </div>

                <p className="text-primary/70 font-inter font-light text-[13px] line-clamp-2 mb-5">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <div className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[11px] font-space font-medium tracking-wide">
                    {project.niche}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {project.demoLink ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoLink, '_blank', 'noopener,noreferrer');
                      }}
                      className="text-xs font-inter font-semibold uppercase tracking-wider text-primary hover:text-primary-container transition-colors"
                    >
                      Ver Demo
                    </button>
                  ) : <div />}
                  <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-on-surface-variant font-inter font-light text-lg">No encontramos proyectos con estos filtros.</p>
          <button 
            onClick={() => { setActiveFilter('Todos'); setActiveNiche('Todos'); }}
            className="mt-4 text-primary font-space font-medium hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
