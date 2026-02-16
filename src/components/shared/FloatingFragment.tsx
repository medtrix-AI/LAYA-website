"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Fragment, FragmentState } from "@/types";

interface FloatingFragmentProps {
  fragment: Fragment;
  state: FragmentState;
  index: number;
  totalCount: number;
  centerX: number;
  centerY: number;
}

const typeColors: Record<Fragment["type"], string> = {
  policy: "bg-indigo-50 border-indigo-200 text-indigo-700",
  rule: "bg-amber-50 border-amber-200 text-amber-700",
  coverage: "bg-emerald-50 border-emerald-200 text-emerald-700",
  decision: "bg-blue-50 border-blue-200 text-blue-700",
};

function getFloatingPosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2;
  const radius = 250 + (index % 3) * 80;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

function getChaoticPosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 + Math.sin(index * 1.5) * 0.8;
  const radius = 180 + (index % 4) * 100;
  return {
    x: Math.cos(angle) * radius + Math.sin(index * 3) * 40,
    y: Math.sin(angle) * radius + Math.cos(index * 2) * 40,
  };
}

function getClusteredPosition(index: number) {
  const cluster = index % 3;
  const offsetInCluster = Math.floor(index / 3);
  const clusterCenters = [
    { x: -200, y: -60 },
    { x: 0, y: 80 },
    { x: 200, y: -60 },
  ];
  const center = clusterCenters[cluster];
  const angle = offsetInCluster * 1.2;
  const r = 30 + offsetInCluster * 15;
  return {
    x: center.x + Math.cos(angle) * r,
    y: center.y + Math.sin(angle) * r,
  };
}

function getPosition(state: FragmentState, index: number, total: number) {
  switch (state) {
    case "floating":
      return { ...getFloatingPosition(index, total), scale: 1, opacity: 0.7 };
    case "chaotic":
      return { ...getChaoticPosition(index, total), scale: 0.9, opacity: 0.8 };
    case "clustered":
      return { ...getClusteredPosition(index), scale: 0.85, opacity: 0.9 };
    case "magnetized":
      return { x: 0, y: 0, scale: 0.3, opacity: 0 };
  }
}

export function FloatingFragment({
  fragment,
  state,
  index,
  totalCount,
  centerX,
  centerY,
}: FloatingFragmentProps) {
  const prefersReduced = useReducedMotion();
  const pos = getPosition(state, index, totalCount);

  return (
    <motion.div
      className={`absolute px-3 py-1.5 text-xs font-medium rounded-lg border whitespace-nowrap pointer-events-none ${typeColors[fragment.type]}`}
      style={{
        left: centerX,
        top: centerY,
      }}
      animate={{
        x: pos.x,
        y: pos.y,
        scale: pos.scale,
        opacity: pos.opacity,
      }}
      transition={
        prefersReduced
          ? { duration: 0.01 }
          : {
              duration: state === "magnetized" ? 1.2 : 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }
      }
    >
      {fragment.label}
    </motion.div>
  );
}
