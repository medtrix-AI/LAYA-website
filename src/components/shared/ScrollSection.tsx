"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function ScrollSection({ children, className = "" }: ScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
