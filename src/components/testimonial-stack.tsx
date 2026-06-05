"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

type Testimonial = {
  role: string;
  quote: string;
};

interface TestimonialStackProps {
  items: Testimonial[];
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function CardBody({ t }: { t: Testimonial }) {
  return (
    <>
      <Stars />
      <blockquote className="mt-4 font-serif text-lg leading-snug text-foreground">
        „{t.quote}"
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm">
        <span className="block font-medium text-muted-foreground">{t.role}</span>
      </figcaption>
    </>
  );
}

export function TestimonialStack({ items }: TestimonialStackProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="md:hidden">
      <AnimatePresence mode="wait" initial={false}>
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="space-y-6">
              {items.map((t, i) => (
                <motion.figure
                  key={t.quote}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.09,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-2xl border border-border bg-card p-7 shadow-sm"
                >
                  <CardBody t={t} />
                </motion.figure>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="mt-5 block w-full text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Tippen zum Schließen
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="stacked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative pb-8"
          >
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-label="Weitere Kundenstimmen anzeigen"
              className="relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-2xl"
            >
              {items
                .slice(1)
                .reverse()
                .map((_, idx) => {
                  const depth = items.length - 1 - idx;
                  return (
                    <motion.div
                      key={depth}
                      aria-hidden
                      initial={false}
                      animate={{
                        y: depth * 14,
                        scale: 1 - depth * 0.04,
                        opacity: 1 - depth * 0.18,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 28,
                      }}
                      className="absolute inset-0 origin-top rounded-2xl border border-border bg-card shadow-sm"
                    />
                  );
                })}

              <motion.figure
                initial={false}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <CardBody t={items[0]} />
              </motion.figure>
            </button>

            <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Tippen für {items.length - 1} weitere Stimmen
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
