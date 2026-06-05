"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

interface AnimatedUnderlineProps {
  children: ReactNode;
  className?: string;
  /** Delay after mount (seconds). */
  delay?: number;
  /** Override stroke colour. Defaults to the accent token. */
  color?: string;
}

/**
 * Hand-drawn SVG underline that strokes itself across the wrapped phrase.
 * The path uses a slight cubic curve so it looks brushed, not ruled.
 */
export function AnimatedUnderline({
  children,
  className,
  delay = 0.4,
  color,
}: AnimatedUnderlineProps) {
  const reduce = useReducedMotion();
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 300 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-[0.45em] w-full"
      >
        <motion.path
          d="M 4 8 Q 90 2 150 6 T 296 5"
          fill="none"
          // currentColor + CSS-Farbe: var() wird in SVG-Attributen nur von
          // Safari aufgelöst, in einer CSS-Eigenschaft aber von allen Browsern.
          stroke="currentColor"
          className="text-accent"
          style={color ? { color } : undefined}
          strokeWidth={6}
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0.6 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: ease.out, delay }}
        />
      </svg>
    </span>
  );
}
