"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewSection } from "@/lib/scroll";

interface IdeaHeroProps {
  title: string;
  subtitle: string;
  accent: string;
}

export function IdeaHero({ title, subtitle, accent }: IdeaHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-2xl"
      >
        <div
          className="inline-block w-3 h-3 rounded-full mb-6"
          style={{ backgroundColor: accent }}
        />
        <h1 className="text-3xl md:text-5xl font-light text-foreground mb-4">
          {title}
        </h1>
        <p className="text-lg text-muted">{subtitle}</p>
      </motion.div>
    </section>
  );
}
