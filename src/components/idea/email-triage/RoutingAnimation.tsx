"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { emails } from "@/lib/mockData";

const lanes = [
  { id: "auto-pay", label: "Auto-Pay", color: "bg-emerald-50 border-emerald-200" },
  { id: "rules-engine", label: "Rules Engine", color: "bg-blue-50 border-blue-200" },
  { id: "human-review", label: "Human Review", color: "bg-amber-50 border-amber-200" },
] as const;

export function RoutingAnimation() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [routed, setRouted] = useState(false);

  useEffect(() => {
    if (isInView && !routed) {
      const timer = setTimeout(() => setRouted(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, routed]);

  const grouped = lanes.map((lane) => ({
    ...lane,
    emails: emails.filter((e) => e.route === lane.id),
  }));

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
        Step 3: Emails route to the right destination
      </motion.p>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {grouped.map((lane, laneIndex) => (
          <motion.div
            key={lane.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={
              prefersReduced
                ? { duration: 0.01 }
                : { duration: 0.6, delay: laneIndex * 0.15 }
            }
            className={`rounded-2xl border p-4 ${lane.color}`}
          >
            <h4 className="text-sm font-semibold text-foreground mb-3">
              {lane.label}
            </h4>
            <div className="space-y-2">
              {lane.emails.map((email, emailIndex) => (
                <motion.div
                  key={email.id}
                  initial={{ opacity: 0, x: routed ? 0 : -20 }}
                  animate={
                    routed
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={
                    prefersReduced
                      ? { duration: 0.01 }
                      : {
                          duration: 0.5,
                          delay: laneIndex * 0.2 + emailIndex * 0.15,
                          ease: [0.25, 0.1, 0.25, 1],
                        }
                  }
                  className="bg-white rounded-lg p-3 shadow-sm"
                >
                  <p className="text-xs font-medium text-foreground">
                    {email.subject}
                  </p>
                  <p className="text-[10px] text-muted mt-0.5">{email.from}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
