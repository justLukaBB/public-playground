"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { nav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "bg-background/0"
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "tap-press transform-gpu whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label={`Anrufen: ${siteConfig.phone}`}
            title={siteConfig.phone}
            className="glow-accent-btn hover:bg-transparent"
          >
            <a href={`tel:${siteConfig.phoneLink}`}>
              <Phone className="h-5 w-5 text-accent" fill="currentColor" />
            </a>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <Link href="/termin">Termin anfragen</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menü öffnen"
                className="rounded-full"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[82%] max-w-md flex-col gap-0 border-l-0 bg-background p-0 shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 pt-6 pb-10">
                <Logo small />
              </div>
              <nav
                className="flex flex-col px-3"
                aria-label="Mobile Navigation"
              >
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-4 text-xl font-medium tracking-tight transition-colors",
                          active
                            ? "text-accent"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <span>{item.label}</span>
                        {active && (
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                          />
                        )}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="mt-auto space-y-4 border-t border-border/60 px-6 py-6">
                <SheetClose asChild>
                  <Button asChild size="lg" variant="accent" className="w-full">
                    <Link href="/termin">Termin anfragen</Link>
                  </Button>
                </SheetClose>
                <div className="flex items-center justify-between text-sm">
                  <a
                    href={`tel:${siteConfig.phoneLink}`}
                    className="inline-flex items-center gap-2 font-medium text-foreground"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    {siteConfig.phone}
                  </a>
                  <span className="text-muted-foreground">
                    {siteConfig.hours}
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
