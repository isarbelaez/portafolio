import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactForm({ onClose }: { onClose: () => void }) {
  const [state, handleSubmit] = useForm("xgonzynp");

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100 text-green-600"
        >
          <CheckCircle2 size={40} />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h2>
        <p className="text-gray-500 mb-8">Gracias por contactarme. Te responderé lo antes posible.</p>
        <button 
          onClick={onClose}
          className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/5"
        >
          Cerrar
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            id="name"
            type="text" 
            name="name"
            required
            placeholder="Tu nombre completo"
            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Correo Electrónico</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            id="email"
            type="email" 
            name="email"
            required
            placeholder="ejemplo@correo.com"
            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs ml-1" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Mensaje</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
          <textarea 
            id="message"
            name="message"
            required
            rows={4}
            placeholder="¿En qué puedo ayudarte?"
            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
          ></textarea>
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs ml-1" />
      </div>

      <button 
        type="submit"
        disabled={state.submitting}
        className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl shadow-black/5 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Enviando...' : 'Enviar Mensaje'} <Send size={18} />
      </button>
    </form>
  );
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-all p-2 hover:bg-gray-50 rounded-full dark:hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-100 text-gray-700">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Hablemos!</h2>
              <p className="text-gray-500">Envíame un mensaje y te responderé lo antes posible.</p>
            </div>

            <ContactForm onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
