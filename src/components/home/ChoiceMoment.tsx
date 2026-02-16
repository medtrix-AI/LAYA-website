"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GlowingCore } from "@/components/shared/GlowingCore";
import { OrbitButton } from "@/components/shared/OrbitButton";
import { useInViewSection } from "@/lib/scroll";
import { ideaRoutes } from "@/lib/constants";

export function ChoiceMoment() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewSection(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6 }}
        className="text-lg text-muted mb-16 text-center"
      >
        Three ideas. One shared intelligence. Explore each.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8 }}
        className="relative"
        style={{ width: 400, height: 400 }}
      >
        {/* Central core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <GlowingCore intensity={0.7} size={100} />
        </div>

        {/* Orbit path visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="rounded-full border border-border/30"
            style={{ width: 300, height: 300 }}
          />
        </div>

        {/* Orbiting buttons */}
        {isInView &&
          ideaRoutes.map((idea, i) => (
            <OrbitButton
              key={idea.id}
              idea={idea}
              index={i}
              totalCount={ideaRoutes.length}
              orbitRadius={150}
              isPaused={isPaused}
              onHover={setIsPaused}
            />
          ))}
      </motion.div>
    </section>
  );
}
