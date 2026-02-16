"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { receiptFields } from "@/lib/mockData";
import { staggerContainer } from "@/lib/motion";

export function FieldExtraction() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev >= receiptFields.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(timer);
  }, [isInView]);

  const statusColor = {
    valid: "border-emerald-400 bg-emerald-50",
    missing: "border-red-400 bg-red-50",
    invalid: "border-amber-400 bg-amber-50",
  };

  const statusText = {
    valid: "text-emerald-700",
    missing: "text-red-700",
    invalid: "text-amber-700",
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
        Step 2: OCR extracts and validates each field
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-md space-y-2"
      >
        {receiptFields.map((field, i) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, x: -10 }}
            animate={
              i < revealedCount
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -10 }
            }
            transition={
              prefersReduced
                ? { duration: 0.01 }
                : { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
            }
            className={`flex items-center justify-between px-4 py-3 rounded-xl border ${statusColor[field.status]}`}
          >
            <div className="flex-1">
              <span className="text-xs text-muted block">{field.label}</span>
              <span className={`text-sm font-medium ${field.value ? "text-foreground" : statusText[field.status]}`}>
                {field.value || "Missing"}
              </span>
            </div>
            <div className={`text-xs font-medium ${statusText[field.status]}`}>
              {field.status === "valid" && "✓"}
              {field.status === "missing" && "Missing"}
              {field.status === "invalid" && "Invalid"}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
