"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { emails } from "@/lib/mockData";

export function InboxFlood() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [visibleEmails, setVisibleEmails] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setVisibleEmails((prev) => {
        if (prev >= emails.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
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
        Step 1: Emails flood the inbox
      </motion.p>

      <div className="w-full max-w-lg bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-slate-50 flex items-center justify-between">
          <span className="text-xs font-medium text-muted">Claims Inbox</span>
          <span className="text-xs text-muted">
            {visibleEmails} / {emails.length} unread
          </span>
        </div>

        <div className="divide-y divide-border">
          {emails.map((email, i) => (
            <motion.div
              key={email.id}
              initial={{ opacity: 0, y: -20 }}
              animate={
                i < visibleEmails
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -20 }
              }
              transition={
                prefersReduced
                  ? { duration: 0.01 }
                  : { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }
              className="px-4 py-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground truncate">
                  {email.from}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    email.priority === "high"
                      ? "bg-red-400"
                      : email.priority === "medium"
                      ? "bg-amber-400"
                      : "bg-slate-300"
                  }`}
                />
              </div>
              <p className="text-sm text-foreground mt-0.5">{email.subject}</p>
              <p className="text-xs text-muted truncate mt-0.5">{email.preview}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
