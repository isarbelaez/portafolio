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
    // FIX: Use py-4 padding instead of overflow-hidden so cards don't get clipped on hover scale.
    // The outer div provides visual bounds but NO overflow:hidden
    <div className="relative group" ref={containerRef}>
      <motion.div 
        drag="x"
        dragConstraints={{ left: -dragWidth, right: 0 }}
        dragElastic={0.1}
        whileTap={{ cursor: 'grabbing' }}
        className="flex gap-6 py-4 px-8 cursor-grab"
        ref={innerRef}
        style={{ width: 'max-content' }}
      >
        {children}
      </motion.div>
      {/* Fade gradient hint for scrollable content */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
