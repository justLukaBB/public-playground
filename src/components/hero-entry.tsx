"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroEntryProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "right";
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroEntryGroup({
  children,
  className,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroEntry({
  children,
  className,
  delay = 0,
  direction = "up",
}: HeroEntryProps) {
  const reduce = useReducedMotion();
  const offset = direction === "right" ? { x: 28, y: 0 } : { x: 0, y: 20 };
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? {} : { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.75, ease: EASE, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
