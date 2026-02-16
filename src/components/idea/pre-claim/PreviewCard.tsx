"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { Badge } from "@/components/shared/Badge";

export function PreviewCard() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();

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
        Step 4: The member sees their claim preview instantly
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-sm bg-white rounded-2xl border border-border p-6 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-muted uppercase tracking-wider">
            Claim Preview
          </span>
          <Badge variant="warning">Needs Correction</Badge>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted">Dental Crown — D2740</p>
            <p className="text-lg font-semibold text-foreground">€385.00</p>
          </div>

          <div className="border-t border-border pt-3">
            <p className="text-xs font-medium text-foreground mb-2">Issues Found</p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="text-muted">Pre-authorization missing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-muted">Referral code recommended</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-3">
            <p className="text-xs text-muted">
              Resolve these issues before submitting to avoid delays.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
