"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { emails } from "@/lib/mockData";

export function TriageOutcome() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();

  const autoPay = emails.filter((e) => e.route === "auto-pay").length;
  const rulesEngine = emails.filter((e) => e.route === "rules-engine").length;
  const humanReview = emails.filter((e) => e.route === "human-review").length;

  return (
    <section
      ref={ref}
      className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm mb-6">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.41 5.09L7 9.5 4.59 7.09a.5.5 0 00-.71.71l2.77 2.77a.5.5 0 00.7 0l4.77-4.77a.5.5 0 00-.71-.71z" />
          </svg>
          Inbox cleared
        </div>

        <div className="flex items-center justify-center gap-8">
          <div>
            <p className="text-2xl font-semibold text-emerald-600">{autoPay}</p>
            <p className="text-xs text-muted">Auto-Pay</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-blue-600">{rulesEngine}</p>
            <p className="text-xs text-muted">Rules Engine</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-amber-600">{humanReview}</p>
            <p className="text-xs text-muted">Human Review</p>
          </div>
        </div>

        <p className="text-sm text-muted mt-6 max-w-xs mx-auto">
          Humans focus on judgment. Everything else is handled.
        </p>
      </motion.div>
    </section>
  );
}
