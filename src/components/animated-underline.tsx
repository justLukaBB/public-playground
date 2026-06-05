import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedUnderlineProps {
  children: ReactNode;
  className?: string;
  /** Delay before the stroke starts drawing (seconds). */
  delay?: number;
  /** Override stroke colour. Defaults to the accent token. */
  color?: string;
}

/**
 * Hand-drawn SVG underline that strokes itself across the wrapped phrase.
 *
 * Reine CSS-Animation (stroke-dashoffset) statt framer-motion/whileInView:
 * läuft beim Laden ohne JavaScript bzw. IntersectionObserver und damit
 * zuverlässig auf allen Browsern und Geräten. Der Trick `pathLength={1}`
 * normalisiert die Pfadlänge auf 1, sodass dasharray/-offset unabhängig von
 * der (nicht-uniformen) Skalierung den ganzen Strich abdecken.
 */
export function AnimatedUnderline({
  children,
  className,
  delay = 0.4,
  color,
}: AnimatedUnderlineProps) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 300 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-[0.45em] w-full"
      >
        <path
          d="M 4 8 Q 90 2 150 6 T 296 5"
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={6}
          strokeLinecap="round"
          className="underline-draw text-accent"
          style={
            {
              "--underline-delay": `${delay}s`,
              ...(color ? { color } : {}),
            } as CSSProperties
          }
        />
      </svg>
    </span>
  );
}
