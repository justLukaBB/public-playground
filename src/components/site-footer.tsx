import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { nav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <Logo />
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Seriöser und zuverlässiger Partner in allen Belangen der
            professionellen Immobilienverwaltung in Dorsten und Umgebung.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Kontakt
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneLink}`}
                className="flex items-center gap-3 hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-accent" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-accent" />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.company}. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-foreground">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-foreground">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
