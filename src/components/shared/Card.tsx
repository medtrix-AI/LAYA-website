"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, reducedMotion } from "@/lib/motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = "", delay = 0 }: CardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      variants={prefersReduced ? reducedMotion : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={`bg-white rounded-2xl border border-border p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
