import React from 'react';
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
  Target,
  Zap
} from 'lucide-react';

export const habilidades = [
  "Estrategia de Mercadeo", "Automatización de Procesos (n8n)", "IA Generativa", 
  "Análisis de Datos", "Kommo CRM", "Arquitectura de Chatbots", 
  "Estrategia B2B", "Optimización de Conversión (CRO)"
];

export const proyectosU = {
  marketing: [
    { 
      id: 1, 
      title: 'Estrategia B2B Industrial', 
      desc: 'Desarrollo de tácticas para captación de leads cualificados.', 
      fullDesc: 'Diseño de un ecosistema de prospección en <strong>LinkedIn y Google Ads</strong> para el sector industrial.', 
      resultados: ['+45% leads calificados', '-18% en costo por adquisición'], 
      icon: <Target size={24} />,
      proposalLink: 'https://www.canva.com/design/DAG5QUBgRCI/9rCA-8KBK2uPeguNznVEVw/view?utm_content=DAG5QUBgRCI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9d54ced0a9'
    },
    { 
      id: 2, 
      title: 'Marketing Gastronómico B2C', 
      desc: 'Estrategia de fidelización y captación corporativa.', 
      fullDesc: 'Creación de modelos de <strong>suscripción y reservas digitales</strong> para el sector restaurantero.', 
      resultados: ['Aumento del 30% en reservas corporativas'], 
      icon: <Briefcase size={24} />,
      proposalLink: 'https://www.canva.com/design/DAG4yNE1diE/UMA4T-b0tFfphFYnL7ec6w/view?utm_content=DAG4yNE1diE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h15d93b01b0'
    },
    { 
      id: 3, 
      title: 'Optimización de Creatividades', 
      desc: 'Diseño visual basado en psicología del consumidor.', 
      fullDesc: 'Creación de piezas publicitarias de alto impacto optimizadas para algoritmos de Meta. Diseño centrado en conversión y estética premium.', 
      resultados: ['CTR promedio superior al 2.5%'], 
      icon: <Layout size={24} />,
      gallery: [
        { src: '/portafolio/img/landing-pastillas-energeticas.jpeg', title: 'Landing page para producto de pastillas energéticas', proposalLink: 'https://kaobags.my.canva.site/dahbvbolxss' },
        { src: '/portafolio/img/lechoneria-chancho.png', title: 'Poster para la lechoneria chancho el lechon' },
        { src: '/portafolio/img/super-pinguinos-bimbo.png', title: 'Poster super pinguino bimbo' },
        { src: '/portafolio/img/poster-software-dev.jpeg', title: 'Poster publicitario de desarrollo de software' }
      ]
    },
    { 
      id: 4, 
      title: 'Arquitectura UX/UI', 
      desc: 'Diseño de interfaces centradas en conversión.', 
      fullDesc: 'Prototipado de alta fidelidad en Figma enfocado en la experiencia del usuario final. Desarrollo de flujos intuitivos y sistemas visuales cohesivos.', 
      resultados: ['Sistemas de diseño escalables', 'Prototipos interactivos de alta fidelidad'], 
      icon: <Smartphone size={24} />,
      gallery: [
        { src: '/portafolio/img/app-menstruacion.png', title: 'App de ciclo menstrual' },
        { src: '/portafolio/img/app-ensaladas.png', title: 'Aplicación de venta de ensaladas de frutas' }
      ],
      link: 'https://www.canva.com/design/DAGmmYNgIHk/HuSHEp4xG_fjPlxkMK8uHg/view?utm_content=DAGmmYNgIHk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1e793eca4d',
      embed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/vTwY7ULyzgMTrPrkBN8T1l/Untitled?node-id=1-15&embed-host=share" allowfullscreen></iframe>'
    },
  ],
  automatizacion: [
    { 
      id: 5, 
      title: 'Producción de Contenido con IA', 
      desc: 'Generación de videos mediante avatares inteligentes.', 
      fullDesc: 'Implementación de workflows con <strong>HeyGen y Midjourney</strong> para escalar la creación de anuncios.', 
      resultados: ['Reducción del 70% en costos de producción'], 
      icon: <Video size={24} /> 
    },
    { 
      id: 6, 
      title: 'Flujos n8n Avanzados', 
      desc: 'Integración sistémica para gestión de leads.', 
      fullDesc: 'Automatización de la comunicación entre <strong>CRM, Slack y bases de datos</strong> para respuesta inmediata.', 
      resultados: ['15 horas semanales recuperadas'], 
      icon: <Bot size={24} /> 
    },
    { 
      id: 7, 
      title: 'Agendamiento Automatizado', 
      desc: 'Sincronización de WhatsApp con Google Calendar.', 
      fullDesc: 'Desarrollo de un <strong>asistente virtual</strong> que gestiona citas sin intervención humana.', 
      resultados: ['Disminución del 40% en inasistencias (No-shows)'], 
      icon: <Calendar size={24} /> 
    },
  ]
};

export const proyectosPago = {
  ia: [
    { 
      id: 8, 
      title: 'Consultoría en IA Conversacional', 
      desc: 'Implementación de IA en Kommo CRM para ventas.', 
      fullDesc: 'Entrenamiento de <strong>modelos de lenguaje (LLM)</strong> para automatizar el cierre de ventas por chat en <strong>Kommo CRM</strong>.', 
      resultados: ['+25% en la tasa de conversión', 'Atención 24/7 sin intervención humana'], 
      icon: <MessageSquare size={24} />,
      gallery: [
        { src: '/portafolio/img/automatizacion-k-bot.png', title: 'Automatización de k bot' },
        { src: '/portafolio/img/kommo-bots.png', title: 'Kommo bots' }
      ]
    },
  ],
  marketing: [
    { 
      id: 9, 
      title: 'Embudos Multicanal', 
      desc: 'Funnels estratégicos en Telegram y Facebook.', 
      fullDesc: 'Estrategias de lanzamiento masivo apoyadas en comunidades digitales y nutrición de leads.', 
      resultados: ['Retorno de inversión (ROAS) de 4.5x'], 
      icon: <Megaphone size={24} /> 
    },
  ]
};

export const proyectosOtros = [
  { 
    id: 10, 
    title: 'Edición Estratégica para YouTube', 
    desc: 'Post-producción enfocada en retención de audiencia.', 
    fullDesc: 'Edición dinámica que aplica principios de retención psicológica para canales educativos.', 
    resultados: ['+35% de retención en los primeros 30 segundos'], 
    icon: <Video size={24} /> 
  },
  { 
    id: 11, 
    title: 'Solución Logística MVP', 
    desc: 'Optimización tecnológica de última milla.', 
    fullDesc: 'Desarrollo conceptual y MVP funcional de una aplicación para trazabilidad y eficiencia en entregas locales. Enfoque en simplicidad y velocidad operativa.', 
    resultados: ['Reducción del 20% en tiempos operativos', 'Visibilidad en tiempo real para el cliente'], 
    icon: <Truck size={24} />,
    gallery: [
      { src: '/portafolio/img/lovable-mvp.png', title: 'MVP Logística - Lovable' }
    ],
    link: 'https://logisticadistribucion.lovable.app'
  },
];
