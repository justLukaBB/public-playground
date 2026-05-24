"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface KenBurnsProps {
  children: ReactNode;
  className?: string;
}

/**
 * Slow, breathing zoom (Ken Burns) combined with scroll-linked drift.
 * The image continues to descend gently as the user scrolls past the hero,
 * adding depth without yanking attention.
 */
export function KenBurns({ children, className }: KenBurnsProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.65]);

  return (
    <div ref={ref} className={cn("relative h-full w-full", className)}>
      <motion.div
        className="h-full w-full will-change-transform"
        style={reduce ? undefined : { y, opacity }}
      >
        <motion.div
          className="h-full w-full"
          initial={reduce ? false : { scale: 1.1, opacity: 0 }}
          animate={reduce ? undefined : { scale: 1, opacity: 1 }}
          transition={{
            scale: { duration: 16, ease: "easeOut" },
            opacity: { duration: 1.4, ease: "easeOut" },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
