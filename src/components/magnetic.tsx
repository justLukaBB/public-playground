"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Strength of attraction, 0..1. Apple stays well under 0.4. */
  strength?: number;
  /** Distance in px outside the element where attraction still kicks in. */
  range?: number;
}

/**
 * Cursor-following magnetic wrapper for buttons / icons. The inner element
 * is translated toward the pointer with a smooth spring. Skipped on touch
 * and reduced-motion.
 */
export function Magnetic({
  children,
  className,
  strength = 0.28,
  range = 24,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 22, mass: 0.5 });

  function handleMove(e: React.PointerEvent<HTMLSpanElement>) {
    if (reduce || !ref.current || e.pointerType === "touch") return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = Math.max(rect.width, rect.height) / 2 + range;
    x.set(Math.max(-max, Math.min(max, dx)) * strength);
    y.set(Math.max(-max, Math.min(max, dy)) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn("relative inline-block", className)}
    >
      <motion.span
        className={cn("inline-block will-change-transform", className)}
        style={reduce ? undefined : { x: sx, y: sy }}
      >
        {children}
      </motion.span>
    </span>
  );
}
