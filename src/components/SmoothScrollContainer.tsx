import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SmoothScrollContainerProps {
  children: React.ReactNode;
}

export function SmoothScrollContainer({ children }: SmoothScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (innerRef.current && containerRef.current) {
        setDragWidth(innerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [children]);
  
  return (
    <div className="relative group overflow-hidden" ref={containerRef}>
      {/* 
        This wrapper allows the cards to have enough vertical/horizontal space 
        for the "scale" hover effect without being clipped, 
        even though the parent has overflow-hidden to prevent 
        the scrollable content from overflowing the layout.
      */}
      <div className="px-10"> 
        <motion.div 
          drag="x"
          dragConstraints={{ left: -dragWidth - 40, right: 40 }} // Adjusted for padding
          dragElastic={0.1}
          whileTap={{ cursor: 'grabbing' }}
          className="flex gap-6 py-12 px-2 cursor-grab"
          ref={innerRef}
          style={{ width: 'max-content' }}
        >
          {children}
        </motion.div>
      </div>
      
      {/* Fade gradient hint for scrollable content */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
