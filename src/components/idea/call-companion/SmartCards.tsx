"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { smartCards } from "@/lib/mockData";
import { Badge } from "@/components/shared/Badge";

const typeConfig = {
  policy: { badge: "info" as const, label: "Policy" },
  compliance: { badge: "warning" as const, label: "Compliance" },
  "next-step": { badge: "success" as const, label: "Next Step" },
};

export function SmartCards() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setVisibleCards((prev) => {
        if (prev >= smartCards.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 700);
    return () => clearInterval(timer);
  }, [isInView]);

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
        Step 3: Smart Cards surface answers in real-time
      </motion.p>

      <div className="w-full max-w-md space-y-4">
        {smartCards.map((card, i) => {
          const config = typeConfig[card.type];
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 40 }}
              animate={
                i < visibleCards
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 40 }
              }
              transition={
                prefersReduced
                  ? { duration: 0.01 }
                  : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
              }
              className="bg-white rounded-2xl border border-border p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-foreground">
                  {card.title}
                </h4>
                <Badge variant={config.badge}>{config.label}</Badge>
              </div>
              <p className="text-sm text-muted leading-relaxed">{card.content}</p>
              <p className="text-[10px] text-muted/60 mt-2">
                Source: {card.source}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
