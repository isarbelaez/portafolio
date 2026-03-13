import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface SmoothScrollContainerProps {
  children: React.ReactNode;
}

export function SmoothScrollContainer({ children }: SmoothScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);
  
  // Total width of one card (300px) + gap (24px)
  const CARD_WIDTH_WITH_GAP = 324;

  const updateWidth = useCallback(() => {
    if (innerRef.current && containerRef.current) {
      setDragWidth(innerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [children, updateWidth]);
  
  return (
    <div className="relative group overflow-hidden w-full flex justify-center" ref={containerRef}>
      <motion.div 
        drag="x"
        dragConstraints={{ 
          left: -dragWidth, 
          right: 0 
        }}
        dragElastic={0.2}
        dragTransition={{
          power: 0.3, // Increased power for more inertia
          timeConstant: 150, // Reduced from default ~700 for much faster snapping
          modifyTarget: (target) => {
            const snapPoint = Math.round(target / CARD_WIDTH_WITH_GAP) * CARD_WIDTH_WITH_GAP;
            return snapPoint;
          }
        }}
        whileTap={{ cursor: 'grabbing' }}
        className="flex gap-6 py-12 cursor-grab px-[calc(50%-150px)] sm:px-[calc(50%-150px)]"
        ref={innerRef}
        style={{ width: 'max-content' }}
      >
        {children}
      </motion.div>
      
      {/* Fade gradient hint for scrollable content */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10" />
    </div>
  );
}
