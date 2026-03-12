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
  MessageSquare
} from 'lucide-react';

export const habilidades = [
  "Estrategia B2B", "Diseño UX/UI", "Automatización (n8n)", "Inteligencia Artificial",
  "Komo CRM", "Chatbots de Venta", "Edición de Video", "Embudos de Venta"
];

export const proyectosU = {
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

export const proyectosPago = {
  ia: [
    { id: 8, title: 'Chatbots de Venta (Komo CRM)', desc: 'Bots conversacionales para cierre de ventas.', fullDesc: 'Entrenamiento de modelos LLM para atención 24/7 en CRM.', resultados: ['+25% conversión'], icon: <MessageSquare size={24} /> },
  ],
  marketing: [
    { id: 9, title: 'Embudos en Canales', desc: 'Funnel de ventas en Telegram y Facebook.', fullDesc: 'Estrategia de lanzamientos mediante comunidades digitales.', resultados: ['ROAS 4.5x'], icon: <Megaphone size={24} /> },
  ]
};

export const proyectosOtros = [
  { id: 10, title: 'Edición de Video YouTube', desc: 'Edición profesional enfocada en retención.', fullDesc: 'Post-producción dinámica para canales educativos.', resultados: ['+35% retención promedio'], icon: <Video size={24} /> },
  { id: 11, title: 'MVP Logística y Distribución', desc: 'App de optimización de rutas de última milla.', fullDesc: 'Desarrollo de plataforma para trazabilidad de entregas.', resultados: ['-20% tiempos de entrega'], icon: <Truck size={24} /> },
];
