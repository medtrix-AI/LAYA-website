import { motion } from "motion/react";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  duration?: number;
}

export function FloatingElement({
  children,
  delay = 0,
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  duration = 20,
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y, rotate: rotation, scale }}
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
