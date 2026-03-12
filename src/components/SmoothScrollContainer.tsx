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
    <div className="relative group overflow-hidden" ref={containerRef}>
      <div className="px-10"> 
        <motion.div 
          drag="x"
          dragConstraints={{ left: -dragWidth - 40, right: 40 }}
          dragElastic={0.1}
          dragTransition={{
            power: 0.1, // Reduced power to make it less "slippery"
            // FIX: "Enfoque" - Snap to the nearest card
            modifyTarget: (target) => {
              // Round to the nearest card position
              // We use negative values because target is the translateX
              const snapPoint = Math.round(target / CARD_WIDTH_WITH_GAP) * CARD_WIDTH_WITH_GAP;
              return snapPoint;
            }
          }}
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
