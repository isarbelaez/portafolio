import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function SmoothScrollContainer({ children }) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Effect to calculate content width and limit drag
  useEffect(() => {
    if (innerRef.current && containerRef.current) {
      setWidth(innerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, [children]);
  
  return (
    <div className="relative overflow-hidden group" ref={containerRef}>
      <motion.div 
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-6 pb-4 cursor-grab overflow-visible"
        ref={innerRef}
        style={{ width: 'max-content' }}
      >
        {children}
      </motion.div>
      {/* Visual indicator for horizontal scroll */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
