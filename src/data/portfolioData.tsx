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
      fullDesc: 'Diseño de un ecosistema de prospección en LinkedIn y Google Ads para el sector industrial.', 
      resultados: ['+45% leads calificados', '-18% en costo por adquisición'], 
      icon: <Target size={24} /> 
    },
    { 
      id: 2, 
      title: 'Marketing Gastronómico B2C', 
      desc: 'Estrategia de fidelización y captación corporativa.', 
      fullDesc: 'Creación de modelos de suscripción y reservas digitales para el sector restaurantero.', 
      resultados: ['Aumento del 30% en reservas corporativas'], 
      icon: <Briefcase size={24} /> 
    },
    { 
      id: 3, 
      title: 'Optimización de Creatividades', 
      desc: 'Diseño visual basado en psicología del consumidor.', 
      fullDesc: 'Creación de piezas publicitarias de alto impacto optimizadas para algoritmos de Meta.', 
      resultados: ['CTR promedio superior al 2.5%'], 
      icon: <Layout size={24} /> 
    },
    { 
      id: 4, 
      title: 'Arquitectura UX/UI', 
      desc: 'Diseño de interfaces centradas en conversión.', 
      fullDesc: 'Prototipado de alta fidelidad en Figma enfocado en la experiencia del usuario final.', 
      resultados: ['Sistemas de diseño escalables'], 
      icon: <Smartphone size={24} /> 
    },
  ],
  automatizacion: [
    { 
      id: 5, 
      title: 'Producción de Contenido con IA', 
      desc: 'Generación de videos mediante avatares inteligentes.', 
      fullDesc: 'Implementación de workflows con HeyGen y Midjourney para escalar la creación de anuncios.', 
      resultados: ['Reducción del 70% en costos de producción'], 
      icon: <Video size={24} /> 
    },
    { 
      id: 6, 
      title: 'Flujos n8n Avanzados', 
      desc: 'Integración sistémica para gestión de leads.', 
      fullDesc: 'Automatización de la comunicación entre CRM, Slack y bases de datos para respuesta inmediata.', 
      resultados: ['15 horas semanales recuperadas'], 
      icon: <Bot size={24} /> 
    },
    { 
      id: 7, 
      title: 'Agendamiento Automatizado', 
      desc: 'Sincronización de WhatsApp con Google Calendar.', 
      fullDesc: 'Desarrollo de un asistente virtual que gestiona citas sin intervención humana.', 
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
      fullDesc: 'Entrenamiento de modelos de lenguaje (LLM) para automatizar el cierre de ventas por chat.', 
      resultados: ['+25% en la tasa de conversión'], 
      icon: <MessageSquare size={24} /> 
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
    fullDesc: 'Desarrollo conceptual de una app para trazabilidad y eficiencia en entregas locales.', 
    resultados: ['Reducción del 20% en tiempos operativos'], 
    icon: <Truck size={24} /> 
  },
];
