"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GlowingCoreProps {
  intensity?: number; // 0 to 1
  size?: number;
  className?: string;
}

export function GlowingCore({ intensity = 0.5, size = 200, className = "" }: GlowingCoreProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 2,
          height: size * 2,
          background: `radial-gradient(circle, rgba(99, 102, 241, ${0.15 * intensity}) 0%, transparent 70%)`,
        }}
        animate={
          prefersReduced
            ? {}
            : {
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Core sphere */}
      <motion.div
        className="relative rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 35% 35%,
            rgba(129, 140, 248, ${0.9 * intensity}),
            rgba(79, 70, 229, ${0.8 * intensity}),
            rgba(55, 48, 163, ${0.6 * intensity})
          )`,
          boxShadow: `
            0 0 ${40 * intensity}px ${15 * intensity}px rgba(99, 102, 241, ${0.3 * intensity}),
            0 0 ${80 * intensity}px ${40 * intensity}px rgba(99, 102, 241, ${0.15 * intensity})
          `,
        }}
        animate={
          prefersReduced
            ? {}
            : {
                scale: [1, 1.02, 1],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
