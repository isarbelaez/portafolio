import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // Event delegation for hover effect
      const target = e.target as HTMLElement;
      const isInteractable = !!target.closest('a, button, [role="button"]');
      setIsHovering(isInteractable);
    };

    window.addEventListener("mousemove", mouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(var(--primary), 0.2)",
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={dotVariants}
        animate="default"
        transition={{ type: "spring", damping: 40, stiffness: 500, mass: 0.1 }}
      />
    </>
  );
};
