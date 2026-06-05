import { Star } from "lucide-react";

type Testimonial = {
  role: string;
  quote: string;
};

function MarqueeCard({ t }: { t: Testimonial }) {
  return (
    <figure className="mr-6 flex w-[19rem] shrink-0 flex-col rounded-2xl border border-border bg-card p-7 shadow-sm sm:w-[22rem]">
      <div className="flex items-center gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 font-serif text-lg leading-snug text-foreground">
        „{t.quote}"
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm">
        <span className="block font-medium text-muted-foreground">{t.role}</span>
      </figcaption>
    </figure>
  );
}

interface TestimonialMarqueeProps {
  items: Testimonial[];
}

/**
 * Endlose, nahtlose Laufschleife der Kundenstimmen. Die Liste wird verdoppelt
 * und der Track um exakt 50 % (= eine Kopie inkl. Abstand) verschoben, damit
 * der Übergang ohne sichtbaren Sprung wieder von vorn beginnt – läuft ohne Stopp.
 */
export function TestimonialMarquee({ items }: TestimonialMarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask relative overflow-hidden motion-reduce:overflow-x-auto">
      <div className="flex w-max animate-marquee items-stretch motion-reduce:animate-none">
        {loop.map((t, i) => (
          <MarqueeCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}
