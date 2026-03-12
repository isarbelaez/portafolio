import React from 'react';

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 pb-12 pt-4">
      <div className="border-t border-[#EFEBE1] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#A1887F]">
        <p>© {new Date().getFullYear()} Isabella Arbelaez — Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#6F4E37] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#6F4E37] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#6F4E37] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
