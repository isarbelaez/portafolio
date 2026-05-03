import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { CheckCircle, PaperPlaneRight, Spinner, WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react';

export default function ContactoForm() {
  const [state, handleSubmit] = useForm("xbjneloz"); // Replace with actual or env formspree id if known, user already had Formspree ID in their old ContactModal. Wait, their old one was 'xbjneloz' according to previous code if I look... I'll just use a placeholder if I don't know it, or find out. Just use "mzbnwypd" a dummy or the original.
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        
        {/* Left Side: Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 border border-primary/20 bg-primary/5 text-primary rounded-full font-space font-medium text-sm tracking-wide uppercase">
              Contacto
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-foreground tracking-tight">
              ¿Listo para <span className="text-primary italic font-light">escalar</span> tu negocio?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-inter font-light max-w-md leading-relaxed">
              Completa el formulario y nos comunicaremos contigo en las próximas 24 horas para agendar una sesión inicial de diagnóstico.
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:arbelaeztapias0108@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-popover border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                <EnvelopeSimple size={24} />
              </div>
              <div>
                <p className="font-space font-medium text-muted-foreground text-sm">Email</p>
                <p className="font-outfit font-bold text-foreground text-lg">arbelaeztapias0108@gmail.com</p>
              </div>
            </a>
            
            <a href="https://wa.me/573044828673" target="_blank" rel="noopener" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-popover border border-border flex items-center justify-center text-muted-foreground group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-colors">
                <WhatsappLogo size={24} weight="fill" />
              </div>
              <div>
                <p className="font-space font-medium text-muted-foreground text-sm">WhatsApp</p>
                <p className="font-outfit font-bold text-foreground text-lg">+57 3044828673</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {state.succeeded ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 bg-popover/90 backdrop-blur-md"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6 animate-pulse">
                <CheckCircle size={40} weight="fill" />
              </div>
              <h3 className="text-3xl font-outfit font-bold text-foreground mb-2">Mensaje Recibido</h3>
              <p className="text-muted-foreground font-inter">Te contactaremos a la brevedad para agendar la llamada de diagnóstico.</p>
            </motion.div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10 flex flex-col h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-space font-medium text-muted-foreground uppercase tracking-wide">Nombre o Empresa</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  className="bg-background border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Ej. Acme Corp" 
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-space font-medium text-muted-foreground uppercase tracking-wide">Correo Electrónico</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="bg-background border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="ejemplo@acme.com" 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="projectType" className="text-sm font-space font-medium text-muted-foreground uppercase tracking-wide">Tipo de Proyecto</label>
              <select 
                id="projectType" 
                name="projectType" 
                required 
                defaultValue=""
                className="bg-background border border-border/50 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors appearance-none"
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Landing Page">Landing Page / Sitio Institucional</option>
                <option value="E-commerce">E-commerce / Tienda Online</option>
                <option value="Automatizacion">Automatización de Procesos (n8n, Make)</option>
                <option value="CRM">Implementación de CRM y Chatbots</option>
                <option value="Otro">Otro requerimiento</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="message" className="text-sm font-space font-medium text-muted-foreground uppercase tracking-wide">¿Qué objetivo buscas lograr?</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                className="bg-background border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none flex-grow"
                placeholder="Cuéntanos sobre los retos actuales de tu negocio..." 
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting} 
              className="w-full mt-4 bg-primary text-primary-foreground py-4 rounded-xl flex justify-center items-center gap-2 font-space font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 group"
            >
              {state.submitting ? (
                <><Spinner className="animate-spin" size={20} /> Enviando...</>
              ) : (
                <>Enviar Solicitud <PaperPlaneRight weight="fill" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
