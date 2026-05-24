"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

/**
 * Hairline progress bar fixed to the very top of the viewport — fills as the
 * page scrolls. Lives above the header so it's always visible.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.3,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-accent/80 shadow-[0_0_8px_oklch(0.62_0.16_150/0.6)]"
    />
  );
}
