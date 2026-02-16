"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { emails } from "@/lib/mockData";
import { Badge } from "@/components/shared/Badge";

const priorityVariant = {
  high: "error" as const,
  medium: "warning" as const,
  low: "neutral" as const,
};

export function AIClassification() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [classifiedCount, setClassifiedCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setClassifiedCount((prev) => {
        if (prev >= emails.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 500);
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
        Step 2: AI classifies intent and priority
      </motion.p>

      <div className="w-full max-w-lg space-y-2">
        {emails.map((email, i) => (
          <motion.div
            key={email.id}
            initial={{ opacity: 0.4 }}
            animate={
              i < classifiedCount ? { opacity: 1 } : { opacity: 0.4 }
            }
            transition={prefersReduced ? { duration: 0.01 } : { duration: 0.4 }}
            className="flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-border"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {email.subject}
              </p>
              <p className="text-xs text-muted">{email.from}</p>
            </div>

            {i < classifiedCount && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  prefersReduced
                    ? { duration: 0.01 }
                    : { duration: 0.3, delay: 0.1 }
                }
                className="flex items-center gap-2 ml-3"
              >
                <Badge variant="info">{email.intent}</Badge>
                <Badge variant={priorityVariant[email.priority]}>
                  {email.priority}
                </Badge>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
