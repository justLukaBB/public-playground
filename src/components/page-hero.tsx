import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/section";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/30">
      <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {breadcrumb && (
          <nav
            aria-label="Brotkrumen"
            className="mb-6 flex items-center gap-1 text-xs text-muted-foreground"
          >
            {breadcrumb.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                {b.href ? (
                  <Link
                    href={b.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <ChevronRight className="h-3 w-3" />
                )}
              </span>
            ))}
          </nav>
        )}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
