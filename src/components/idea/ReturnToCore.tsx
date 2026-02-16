"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { GlowingCore } from "@/components/shared/GlowingCore";

export function ReturnToCore() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <GlowingCore intensity={0.4} size={60} />
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 rounded-full bg-accent text-white text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            Return to the Brain
          </motion.button>
        </Link>
        <p className="mt-4 text-xs text-muted">
          One shared brain. Three intelligent agents.
        </p>
      </motion.div>
    </section>
  );
}
