import type { Variants, Transition } from "framer-motion";

// Duration scale
export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
  entrance: 1.0,
  heroReveal: 1.6,
} as const;

// Easing curves — all calm, no sharp bounces
export const ease = {
  gentle: [0.25, 0.1, 0.25, 1.0] as const,
  out: [0.0, 0.0, 0.2, 1.0] as const,
  inOut: [0.42, 0.0, 0.58, 1.0] as const,
  spring: { type: "spring" as const, stiffness: 100, damping: 20 },
};

// Default transition
export const defaultTransition: Transition = {
  duration: duration.normal,
  ease: ease.gentle,
};

// Reusable variants
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.gentle },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.gentle },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.gentle },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const floatY: Variants = {
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Page entrance
export const pageEntrance: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.entrance, ease: ease.gentle },
  },
};

// Reduced motion overrides — instant opacity, no movement
export const reducedMotion: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};
