import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function ScrollSection({ children, className = "" }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
