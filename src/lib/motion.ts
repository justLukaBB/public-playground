/**
 * Motion language inspired by Apple's HIG.
 *
 * Easings are tuned to feel weighty and decelerated — short, snappy entry,
 * long settling tail. Spring presets match iOS-style behaviour (no bounce
 * by default; only the "playful" preset overshoots).
 */

export const ease = {
  /** Apple's signature decelerate — used for hero entries, reveals. */
  out: [0.22, 1, 0.36, 1] as const,
  /** Crisper variant for short UI transitions. */
  outQuart: [0.25, 1, 0.5, 1] as const,
  /** iOS scroll feel — used for sticky/sheet transitions. */
  iOS: [0.32, 0.72, 0, 1] as const,
  /** Softly overshoots — only for celebratory moments. */
  back: [0.34, 1.56, 0.64, 1] as const,
} as const;

export const spring = {
  /** Default snappy spring — buttons, taps. */
  snappy: { type: "spring" as const, stiffness: 380, damping: 32, mass: 0.8 },
  /** Gentle, smooth — cards, sheet drags. */
  smooth: { type: "spring" as const, stiffness: 220, damping: 30, mass: 1 },
  /** Slow, heavy — large hero blocks. */
  heavy: { type: "spring" as const, stiffness: 140, damping: 28, mass: 1.2 },
} as const;

export const duration = {
  fast: 0.25,
  base: 0.55,
  slow: 0.85,
  hero: 1.1,
} as const;
