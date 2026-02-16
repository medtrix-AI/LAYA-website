"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedText } from "@/components/shared/AnimatedText";
import { useInViewSection } from "@/lib/scroll";
import { heroCopy } from "@/lib/constants";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-2xl text-center">
        <AnimatedText
          lines={heroCopy}
          inView={isInView}
          className="space-y-4"
          lineClassName="text-3xl md:text-5xl font-light text-foreground leading-tight"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8, delay: 1.2 }}
          className="mt-8 text-lg text-muted"
        >
          Curious by nature. Slightly allergic to inefficiency.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8, delay: 1.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted/50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
