"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  rotation?: number;
  duration?: number;
}

export function FloatingElement({
  children,
  delay = 0,
  x = 0,
  y = 0,
  rotation = 0,
  duration = 20,
}: FloatingElementProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className="absolute" style={{ transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`, opacity: 0.4 }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x, y, rotate: rotation }}
      animate={{
        opacity: [0, 0.6, 0.6, 0.6],
        y: [y, y - 30, y - 15, y],
        rotate: [rotation, rotation + 5, rotation - 5, rotation],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
}
