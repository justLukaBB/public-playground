"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useMemo } from "react";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

interface WordRevealProps {
  text: string;
  className?: string;
  /** Delay before the first word starts (seconds). */
  delay?: number;
  /** Time between successive words (seconds). */
  stagger?: number;
  /** Optional in-line render override — e.g. wrap a phrase. */
  children?: (parts: ReactNode[]) => ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  /** Trigger immediately on mount instead of on-view. */
  immediate?: boolean;
}

/**
 * Apple-style headline reveal: each word fades + lifts + un-blurs in sequence.
 * Falls back to a single static render under `prefers-reduced-motion`.
 */
export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as = "h1",
  immediate = false,
}: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = useMemo(() => text.split(" "), [text]);
  const Tag = motion[as];

  if (reduce) {
    const Static = as;
    return <Static className={className}>{text}</Static>;
  }

  const triggerProps = immediate
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.4 },
      };

  return (
    <Tag
      className={cn(className)}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      {...triggerProps}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
          style={{ marginRight: "0.28em" }}
        >
          <motion.span
            className="inline-block will-change-[transform,opacity,filter]"
            variants={{
              hidden: {
                y: "110%",
                opacity: 0,
                filter: "blur(8px)",
              },
              visible: {
                y: "0%",
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.85, ease: ease.out },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
