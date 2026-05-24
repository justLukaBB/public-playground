"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Pixel offset at the extremes. Positive moves up as user scrolls down. */
  amount?: number;
  /** Optional intrinsic scale at top (e.g. 1.06 for slow zoom-out). */
  scaleFrom?: number;
  scaleTo?: number;
}

/**
 * Lightweight scroll-linked parallax. Tracks the wrapper's offset within
 * the viewport and translates the inner element a fraction of the
 * scroll delta. Respects `prefers-reduced-motion`.
 */
export function Parallax({
  children,
  className,
  amount = 60,
  scaleFrom,
  scaleTo,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [scaleFrom ?? 1, scaleTo ?? 1]
  );

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        className="h-full w-full will-change-transform"
        style={
          reduce
            ? undefined
            : scaleFrom || scaleTo
              ? { y, scale }
              : { y }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
