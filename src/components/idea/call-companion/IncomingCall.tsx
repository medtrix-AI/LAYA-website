"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";

export function IncomingCall() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (isInView && !answered) {
      const timer = setTimeout(() => setAnswered(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView, answered]);

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6 }}
        className="text-sm text-muted mb-8"
      >
        Step 1: A call comes in
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6 }}
        className="w-full max-w-xs"
      >
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm text-center">
          {/* Ring animation */}
          {!answered && (
            <div className="relative w-20 h-20 mx-auto mb-4">
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-100"
                animate={prefersReduced ? {} : { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-200"
                animate={prefersReduced ? {} : { scale: [1, 1.15, 1], opacity: [0.7, 0.3, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </div>
            </div>
          )}

          {answered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={prefersReduced ? { duration: 0.01 } : { duration: 0.5 }}
              className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500 flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </motion.div>
          )}

          <p className="text-sm font-medium text-foreground">
            {answered ? "Connected" : "Incoming Call..."}
          </p>
          <p className="text-xs text-muted mt-1">
            Sarah Murphy — Policy LAY-2024-8912
          </p>
        </div>
      </motion.div>
    </section>
  );
}
