import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  FileText,
  Gavel,
  Phone,
  Receipt,
  ShieldCheck,
  Users,
  Vote,
  Mail,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "WEG-Verwaltung",
  description:
    "Verwaltung Ihrer Wohnungseigentümergemeinschaft in Dorsten — Jahresabrechnung, Versammlungen, Belegprüfung.",
};

const services = [
  {
    icon: Calculator,
    title: "Jahresabrechnung",
    description:
      "Klare Gegenüberstellung von Einnahmen und Ausgaben mit allen Einzelpositionen.",
  },
  {
    icon: FileText,
    title: "Wirtschaftsplan",
    description:
      "Aufstellung des jährlichen Wirtschaftsplans als verlässliche Planungsgrundlage.",
  },
  {
    icon: Users,
    title: "Eigentümerversammlungen",
    description:
      "Planung und Durchführung ordentlicher und außerordentlicher Versammlungen.",
  },
  {
    icon: Vote,
    title: "Umlaufverfahren",
    description: "Beschlüsse rechtssicher außerhalb der Versammlung herbeiführen.",
  },
  {
    icon: ClipboardList,
    title: "Beschlussprotokollierung",
    description:
      "Lückenlose Dokumentation aller Beschlüsse — transparent und nachvollziehbar.",
  },
  {
    icon: FileCheck2,
    title: "Beschlussdurchführung",
    description:
      "Konsequente Umsetzung gefasster Beschlüsse mit Blick auf Fristen und Kosten.",
  },
  {
    icon: Receipt,
    title: "Belegprüfung",
    description:
      "Transparente Verwaltung mit jährlicher Belegprüfung durch den Verwaltungsbeirat.",
  },
  {
    icon: Gavel,
    title: "Behördenvertretung",
    description:
      "Wir vertreten die Gemeinschaft gegenüber Behörden und Versorgungsunternehmen.",
  },
  {
    icon: ShieldCheck,
    title: "Schadensregulierung",
    description:
      "Abwicklung mit Gebäude- und Haftpflichtversicherung im Schadensfall.",
  },
];

export default function WegVerwaltungPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Startseite", href: "/" },
          { label: "WEG-Verwaltung" },
        ]}
        eyebrow="Für Eigentümergemeinschaften"
        title={<>WEG-Verwaltung in Dorsten.</>}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
                <Image
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
                  alt="Wohnungseigentum"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Unsere Leistungen</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Unser Leistungsspektrum.
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold leading-tight">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-sm sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <Eyebrow className="text-accent">Wir sind für Sie da</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                In guten Händen.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" variant="accent" className="glow-accent-btn">
                <Link href="/kontakt">
                  Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={`tel:${siteConfig.phoneLink}`}>
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
