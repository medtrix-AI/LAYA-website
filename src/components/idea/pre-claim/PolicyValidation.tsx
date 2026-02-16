"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { policyRules } from "@/lib/mockData";

export function PolicyValidation() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev >= policyRules.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [isInView]);

  const resultStyles = {
    pass: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", icon: "✓" },
    fail: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", icon: "✗" },
    warning: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", icon: "!" },
  };

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6 }}
        className="text-sm text-muted mb-8"
      >
        Step 3: Policy and business rules are validated
      </motion.p>

      <div className="w-full max-w-md space-y-3">
        {policyRules.map((rule, i) => {
          const style = resultStyles[rule.result];
          return (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 10 }}
              animate={
                i < revealedCount
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={
                prefersReduced
                  ? { duration: 0.01 }
                  : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
              }
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${style.bg} ${style.border}`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${style.text} ${style.bg}`}>
                {style.icon}
              </span>
              <span className="text-sm text-foreground flex-1">{rule.rule}</span>
              <span className={`text-xs font-medium uppercase ${style.text}`}>
                {rule.result}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
