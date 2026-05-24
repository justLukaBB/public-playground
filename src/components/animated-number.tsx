"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

const NUMBER_REGEX = /^(\D*)(\d+)(\D*)$/;

export function AnimatedNumber({
  value,
  duration = 1.4,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  // Memoize the parsed parts so the effect doesn't re-fire (and reset the
  // animation back to 0) on every state update.
  const parts = useMemo(() => {
    const m = value.match(NUMBER_REGEX);
    if (!m) return null;
    return { prefix: m[1] ?? "", target: parseInt(m[2], 10), suffix: m[3] ?? "" };
  }, [value]);

  const [display, setDisplay] = useState(() => (reduce && parts ? parts.target : 0));

  useEffect(() => {
    if (!parts) return;
    if (reduce) {
      setDisplay(parts.target);
      return;
    }
    if (!inView) return;
    const controls = animate(0, parts.target, {
      duration,
      // easeOutExpo — Apple's go-to for counters: hits the target visibly
      // before the eye expects it, then settles.
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDisplay(parts.target),
    });
    return () => controls.stop();
  }, [inView, parts, duration, reduce]);

  if (!parts) {
    return <div className={className}>{value}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {parts.prefix}
      {display}
      {parts.suffix}
    </div>
  );
}
