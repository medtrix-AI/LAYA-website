"use client";

import { useScroll, useTransform, useInView, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

/**
 * Returns scroll progress (0→1) for an element within the viewport.
 */
export function useScrollProgress(
  target?: RefObject<HTMLElement | null>,
) {
  const { scrollYProgress } = useScroll({
    target: target ?? undefined,
    offset: ["start end", "end start"],
  });
  return scrollYProgress;
}

/**
 * Returns a ref and scroll progress for a full-page section.
 */
export function useSectionScroll() {
  const ref = useRef<HTMLElement>(null);
  const scrollYProgress = useScrollProgress(ref);
  return { ref, scrollYProgress };
}

/**
 * Maps a MotionValue from one range to another.
 */
export function useMapRange(
  value: MotionValue<number>,
  inputRange: number[],
  outputRange: number[]
) {
  return useTransform(value, inputRange, outputRange);
}

/**
 * Returns true when element enters viewport.
 */
export function useInViewSection(
  ref: RefObject<HTMLElement | null>,
  options?: { once?: boolean; amount?: number }
) {
  return useInView(ref, {
    once: options?.once ?? true,
    amount: options?.amount ?? 0.3,
  });
}
