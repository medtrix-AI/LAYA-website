"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { staggerContainer, fadeUp, reducedMotion } from "@/lib/motion";
import type { OutcomeMetric } from "@/types";

interface OutcomeSectionProps {
  title: string;
  metrics: OutcomeMetric[];
  accent: string;
}

export function OutcomeSection({ title, metrics, accent }: OutcomeSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? reducedMotion : fadeUp;

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6 }}
        className="text-2xl md:text-3xl font-light text-foreground mb-12 text-center"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full"
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            variants={variants}
            className="text-center p-6 bg-white rounded-2xl border border-border shadow-sm"
          >
            <p
              className="text-3xl font-semibold mb-2"
              style={{ color: accent }}
            >
              {metric.value}
            </p>
            <p className="text-sm font-medium text-foreground">{metric.label}</p>
            <p className="text-xs text-muted mt-1">{metric.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
