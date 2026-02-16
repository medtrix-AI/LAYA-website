"use client";

import { useEffect, useState } from "react";
import { FloatingFragment } from "./FloatingFragment";
import { fragments } from "@/lib/constants";
import type { FragmentState } from "@/types";

interface FragmentFieldProps {
  state: FragmentState;
  visible: boolean;
}

export function FragmentField({ state, visible }: FragmentFieldProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function update() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!visible || dimensions.width === 0) return null;

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {fragments.map((fragment, i) => (
        <FloatingFragment
          key={fragment.id}
          fragment={fragment}
          state={state}
          index={i}
          totalCount={fragments.length}
          centerX={centerX}
          centerY={centerY}
        />
      ))}
    </div>
  );
}
