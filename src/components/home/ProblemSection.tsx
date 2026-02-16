"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { problems } from "@/lib/constants";
import { staggerContainer, fadeUp, reducedMotion } from "@/lib/motion";

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? reducedMotion : fadeUp;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-lg text-muted mb-2">The system works hard.</p>
        <p className="text-2xl md:text-3xl font-light text-foreground">
          People work harder.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full"
      >
        {problems.map((problem) => (
          <motion.div
            key={problem.id}
            variants={variants}
            className="bg-white rounded-2xl border border-border p-8 shadow-sm text-center"
          >
            <span className="text-3xl mb-4 block">{problem.icon}</span>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {problem.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {problem.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
