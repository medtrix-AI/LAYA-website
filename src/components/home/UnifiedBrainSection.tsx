"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { GlowingCore } from "@/components/shared/GlowingCore";
import { useInViewSection } from "@/lib/scroll";
import { brainLabels, brainCopy } from "@/lib/constants";

export function UnifiedBrainSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();
  const [labelIndex, setLabelIndex] = useState(0);
  const [showCopy, setShowCopy] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const labelTimer = setInterval(() => {
      setLabelIndex((prev) => {
        if (prev >= brainLabels.length - 1) {
          clearInterval(labelTimer);
          setTimeout(() => setShowCopy(true), 400);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(labelTimer);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="flex flex-col items-center">
        {/* Glowing core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={prefersReduced ? { duration: 0.01 } : { duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <GlowingCore intensity={isInView ? 1 : 0} size={160} />
        </motion.div>

        {/* Flashing labels */}
        <div className="h-8 mt-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isInView && labelIndex < brainLabels.length && (
              <motion.span
                key={brainLabels[labelIndex]}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={prefersReduced ? { duration: 0.01 } : { duration: 0.3 }}
                className="text-sm font-medium text-accent-light"
              >
                {brainLabels[labelIndex]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showCopy ? { opacity: 1, y: 0 } : {}}
          transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-foreground">
            {brainCopy.line1}
          </p>
          <p className="text-2xl md:text-3xl font-light text-foreground mt-1">
            {brainCopy.line2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
