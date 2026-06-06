import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, siteConfig } from "@/lib/site";

const navPrimary = nav.slice(0, 3);
const navSecondary = nav.slice(3);

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-2 lg:col-span-4 lg:pr-8">
            <Logo />
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Professionelle Immobilienverwaltung in Dorsten und Umgebung.
            </p>
          </div>

          <FooterColumn title="Leistungen">
            {navPrimary.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Unternehmen">
            {navSecondary.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Kontakt">
            <li className="text-[12px] leading-relaxed text-muted-foreground">
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneLink}`}
                className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-words text-[12px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="text-[12px] text-muted-foreground">
              {siteConfig.hours}
            </li>
          </FooterColumn>

          <FooterColumn title="Rechtliches">
            <FooterLink href="/impressum">Impressum</FooterLink>
            <FooterLink href="/datenschutz">Datenschutz</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-5 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.company}. Alle Rechte vorbehalten.
          </span>
          <a
            href="https://neufeld.digital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Design by neufeld.digital"
            className="group inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Design by</span>
            <span className="font-medium text-foreground/80 underline underline-offset-4 transition-colors group-hover:text-foreground">
              neufeld.digital
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className ?? "lg:col-span-2"}>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground/80">
        {title}
      </h3>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  );
}
