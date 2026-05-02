import React from 'react';

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 pb-12 pt-4">
      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Isabella Arbelaez — Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a 
            href="http://www.linkedin.com/in/isabellaarbelaez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/isarbelaez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a 
            href="mailto:arbelaeztapias0108@gmail.com" 
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
