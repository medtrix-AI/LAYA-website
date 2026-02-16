"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, reducedMotion } from "@/lib/motion";

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  inView?: boolean;
}

export function AnimatedText({
  lines,
  className = "",
  lineClassName = "",
  as: Tag = "div",
  inView = true,
}: AnimatedTextProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? reducedMotion : fadeUp;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {lines.map((line, i) => (
        <motion.div key={i} variants={variants}>
          <Tag className={lineClassName}>{line}</Tag>
        </motion.div>
      ))}
    </motion.div>
  );
}
