"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={prefersReduced ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
}
