"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { ease } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  /** Subtle blur fade-in. Disable for elements with their own blur. */
  blur?: boolean;
  /** Pixel offset along Y at start. */
  offset?: number;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  blur = true,
  offset = 22,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const hidden = reduce
    ? false
    : { opacity: 0, y: offset, filter: blur ? "blur(8px)" : "blur(0px)" };
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: ease.out }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ol" | "ul";
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  as = "div",
}: StaggerProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "figure";
  /** Disable the blur fade if the item already has heavy styling. */
  blur?: boolean;
}

export function StaggerItem({
  children,
  className,
  as = "div",
  blur = true,
}: StaggerItemProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 22,
          filter: blur ? "blur(8px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: ease.out },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
