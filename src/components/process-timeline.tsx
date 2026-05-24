"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

export interface ProcessStep {
  /** Pre-rendered icon JSX — Server Components can't pass component
   * references across the RSC boundary in Next.js 16. */
  icon: ReactNode;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

/**
 * Scroll-scrubbed timeline. A vertical track draws itself as the user
 * scrolls past the section; each step's number/icon "activates" when its
 * row reaches roughly the viewport centre.
 */
export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.7,
  });

  return (
    <ol
      ref={ref}
      className={cn("relative mx-auto mt-10 max-w-3xl sm:mt-14", className)}
    >
      <span
        aria-hidden
        className="absolute left-5 top-3 bottom-3 w-px bg-accent/15"
      />
      <motion.span
        aria-hidden
        style={
          reduce
            ? { scaleY: 1 }
            : { scaleY: lineHeight, transformOrigin: "top" }
        }
        className="absolute left-5 top-3 bottom-3 w-px bg-accent"
      />

      {steps.map((step, idx) => (
        <Step
          key={step.title}
          step={step}
          idx={idx}
          total={steps.length}
          progress={scrollYProgress}
          reduce={!!reduce}
        />
      ))}
    </ol>
  );
}

interface StepProps {
  step: ProcessStep;
  idx: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}

function Step({ step, idx, total, progress, reduce }: StepProps) {
  const at = (idx + 0.5) / total;
  const before = Math.max(0, at - 0.05);
  const after = Math.min(1, at + 0.05);

  // Number circle fills + scales slightly when the timeline reaches it.
  const fill = useTransform(progress, [before, after], [0, 1]);
  const scale = useTransform(progress, [before, after], [0.95, 1.04]);
  const textColor = useTransform(
    fill,
    [0, 1],
    ["var(--accent)", "var(--accent-foreground)"]
  );

  return (
    <li className="relative grid grid-cols-[auto_1fr] gap-x-5 pb-10 last:pb-0 sm:gap-x-6">
      <motion.span
        style={reduce ? undefined : { scale }}
        className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-accent/40 bg-background text-sm font-medium text-accent will-change-transform"
      >
        <motion.span
          aria-hidden
          style={reduce ? { opacity: 1 } : { opacity: fill }}
          className="absolute inset-0 rounded-full bg-accent"
        />
        <motion.span
          style={reduce ? undefined : { color: textColor }}
          className="relative"
        >
          {idx + 1}
        </motion.span>
      </motion.span>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: ease.out, delay: idx * 0.04 }}
        className="pt-1.5"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 shrink-0 place-items-center text-accent [&>svg]:h-5 [&>svg]:w-5">
            {step.icon}
          </span>
          <h3 className="font-serif text-lg font-semibold leading-tight">
            {step.title}
          </h3>
        </div>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </motion.div>
    </li>
  );
}
