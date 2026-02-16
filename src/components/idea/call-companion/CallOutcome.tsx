"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";

export function CallOutcome() {
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
        className="w-full max-w-sm bg-white rounded-2xl border border-border p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-emerald-700">Call Resolved</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted">Duration</p>
            <p className="text-lg font-semibold text-foreground">4:32</p>
          </div>
          <div>
            <p className="text-xs text-muted">Resolution</p>
            <p className="text-lg font-semibold text-foreground">First Call</p>
          </div>
          <div>
            <p className="text-xs text-muted">Cards Used</p>
            <p className="text-lg font-semibold text-foreground">3</p>
          </div>
          <div>
            <p className="text-xs text-muted">Confidence</p>
            <p className="text-lg font-semibold text-foreground">High</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
