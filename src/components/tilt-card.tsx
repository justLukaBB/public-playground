"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees. Apple stays subtle — 6° feels just right. */
  max?: number;
  /** Show a soft spotlight highlight following the cursor. */
  glare?: boolean;
}

/**
 * Subtle 3D tilt + cursor-tracked glare on hover. Desktop only —
 * touch devices skip the pointer math and just render children.
 */
export function TiltCard({
  children,
  className,
  max = 6,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);

  const rx = useSpring(rotateX, { stiffness: 260, damping: 22, mass: 0.6 });
  const ry = useSpring(rotateY, { stiffness: 260, damping: 22, mass: 0.6 });

  const gradient = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, oklch(0.99 0 0 / 0.18), transparent 55%)`;

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set(-(py - 0.5) * max * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={
        reduce
          ? undefined
          : {
              rotateX: rx,
              rotateY: ry,
              transformStyle: "preserve-3d",
              transformPerspective: 1200,
            }
      }
      className={cn("relative", className)}
    >
      <div style={{ transform: "translateZ(0)" }} className="h-full">
        {children}
      </div>
      {glare && !reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
          style={{ background: gradient, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  );
}
