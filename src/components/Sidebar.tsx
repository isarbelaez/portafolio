import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  House,
  BriefcaseMetal,
  TrendUp,
  ChatTeardropText,
  EnvelopeSimple,
  List,
  X,
  LinkedinLogo,
  InstagramLogo,
  WhatsappLogo
} from '@phosphor-icons/react';

const navItems = [
  { path: '/', label: 'Inicio', icon: House },
  { path: '/servicios', label: 'Servicios', icon: BriefcaseMetal },
  { path: '/marketing', label: 'Marketing', icon: TrendUp },
  { path: '/testimonios', label: 'Testimonios', icon: ChatTeardropText },
  { path: '/contacto', label: 'Contacto', icon: EnvelopeSimple },
];

export default function Sidebar({ currentPath }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Normalize path for trailing slashes
  const p = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

  const SidebarContent = () => (
    <div className="flex flex-col h-full justify-between w-full p-8 md:p-6 lg:p-8">
      <div>
        <div className="mb-12 flex items-center md:items-start select-none">
          <div className="text-2xl font-space font-bold tracking-tight text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-primary">
              ID
            </div>
            <span className="hidden md:block text-xl">Isa Arbelaez</span>
            <span className="md:hidden text-xl">Isa Arbelaez</span>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            // Very simple active check
            const isActive = p === item.path || (item.path !== '/' && p.startsWith(item.path));
            const Icon = item.icon;

            return (
              <a
                key={item.path}
                href={`${baseUrl}${item.path}`}
                className={`relative group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                    ? 'text-sidebar-primary bg-sidebar-primary/10'
                    : 'text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={20} weight={isActive ? "fill" : "regular"} className="transition-all" />
                <span className="font-space font-medium tracking-wide text-sm">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="space-y-6">
        <a
          href={`${baseUrl}/contacto`}
          className="flex items-center justify-between w-full px-4 py-3 bg-foreground text-background rounded-lg font-space font-bold text-sm tracking-wide hover:bg-primary transition-colors hover:text-primary-foreground group"
        >
          Agendar llamada
          <TrendUp weight="bold" size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <div className="flex items-center gap-4 px-4 text-sidebar-foreground/70">
          <a href="#" className="hover:text-primary transition-colors"><LinkedinLogo size={20} weight="fill" /></a>
          <a href="#" className="hover:text-primary transition-colors"><InstagramLogo size={20} weight="fill" /></a>
          <a href="#" className="hover:text-primary transition-colors"><WhatsappLogo size={20} weight="fill" /></a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-background border border-border rounded-lg text-foreground"
      >
        <List size={24} />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-[100dvh] w-[260px] bg-sidebar border-r border-sidebar-border z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 left-0 w-[280px] h-full bg-sidebar border-r border-sidebar-border z-50 shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
              >
                <X size={24} />
              </button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
