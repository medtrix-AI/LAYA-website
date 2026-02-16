"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { IdeaRoute } from "@/types";

interface OrbitButtonProps {
  idea: IdeaRoute;
  index: number;
  totalCount: number;
  orbitRadius: number;
  isPaused: boolean;
  onHover: (hovering: boolean) => void;
}

export function OrbitButton({
  idea,
  index,
  totalCount,
  orbitRadius,
  isPaused,
  onHover,
}: OrbitButtonProps) {
  const prefersReduced = useReducedMotion();
  const startAngle = (index / totalCount) * 360;
  const startRad = (startAngle * Math.PI) / 180;

  if (prefersReduced) {
    // Static placement for reduced motion
    const x = Math.cos(startRad) * orbitRadius;
    const y = Math.sin(startRad) * orbitRadius;

    return (
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          transform: `translate(${x - 70}px, ${y - 35}px)`,
        }}
      >
        <Link href={idea.href}>
          <div className="w-[140px] h-[70px] flex flex-col items-center justify-center rounded-2xl bg-white border border-border shadow-sm cursor-pointer select-none hover:shadow-md transition-shadow">
            <span className="text-sm font-semibold text-foreground">{idea.title}</span>
            <span className="text-[10px] text-muted text-center leading-tight mt-0.5 px-2">
              {idea.subtitle}
            </span>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        marginLeft: -70,
        marginTop: -35,
      }}
      animate={{
        rotate: [startAngle, startAngle + 360],
      }}
      transition={{
        rotate: {
          duration: isPaused ? 40 : 20,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      <motion.div
        style={{ x: orbitRadius }}
        animate={{
          rotate: [-startAngle, -(startAngle + 360)],
        }}
        transition={{
          rotate: {
            duration: isPaused ? 40 : 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <Link href={idea.href}>
          <motion.div
            className="w-[140px] h-[70px] flex flex-col items-center justify-center rounded-2xl bg-white border border-border shadow-sm cursor-pointer select-none"
            whileHover={{ scale: 1.08, boxShadow: `0 4px 20px ${idea.color}33` }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => onHover(true)}
            onHoverEnd={() => onHover(false)}
          >
            <span className="text-sm font-semibold text-foreground">{idea.title}</span>
            <span className="text-[10px] text-muted text-center leading-tight mt-0.5 px-2">
              {idea.subtitle}
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
