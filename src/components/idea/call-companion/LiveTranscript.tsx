"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";
import { transcriptLines } from "@/lib/mockData";

export function LiveTranscript() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= transcriptLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
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
        Step 2: The conversation is transcribed live
      </motion.p>

      <div className="w-full max-w-lg bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-muted">Live Transcript</span>
          </div>
        </div>

        <div className="p-4 space-y-3 min-h-[200px]">
          {transcriptLines.map((line, i) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 8 }}
              animate={
                i < visibleLines
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 8 }
              }
              transition={
                prefersReduced
                  ? { duration: 0.01 }
                  : { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
              }
              className={`flex gap-3 ${line.speaker === "agent" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                  line.speaker === "caller"
                    ? "bg-slate-100 text-foreground"
                    : "bg-blue-50 text-blue-900"
                }`}
              >
                <p>{line.text}</p>
                <p className="text-[10px] text-muted mt-1">{line.timestamp}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
