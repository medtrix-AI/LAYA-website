"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";

export function ReceiptUpload() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    if (isInView && !uploaded) {
      const timer = setTimeout(() => setUploaded(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [isInView, uploaded]);

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
        Step 1: A member uploads their receipt
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6, delay: 0.3 }}
        className="w-full max-w-sm"
      >
        {/* Receipt card */}
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-muted uppercase tracking-wider">
              Receipt
            </span>
            <span className="text-xs text-muted">Dublin Dental Clinic</span>
          </div>
          <div className="space-y-2 text-sm text-foreground">
            <div className="flex justify-between">
              <span className="text-muted">Patient</span>
              <span>Sarah Murphy</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Date</span>
              <span>15 Nov 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Procedure</span>
              <span>Dental Crown (D2740)</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2 mt-2">
              <span className="font-medium">Total</span>
              <span className="font-medium">€385.00</span>
            </div>
          </div>
        </div>

        {/* Upload animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={uploaded ? { opacity: 1, y: 0 } : {}}
          transition={prefersReduced ? { duration: 0.01 } : { duration: 0.5 }}
          className="mt-4 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.41 5.09L7 9.5 4.59 7.09a.5.5 0 00-.71.71l2.77 2.77a.5.5 0 00.7 0l4.77-4.77a.5.5 0 00-.71-.71z" />
            </svg>
            Receipt uploaded
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
