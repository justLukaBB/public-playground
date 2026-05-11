import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarClock,
  ClipboardList,
  FileCheck2,
  FileText,
  Gavel,
  Phone,
  Receipt,
  ShieldCheck,
  Sparkles,
  Wrench,
  Users,
  Vote,
  Mail,
  Calculator,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "WEG-Verwaltung",
  description:
    "Zertifizierte Verwaltung Ihrer Wohnungseigentümergemeinschaft in Dorsten — schon ab 2 Einheiten. Jahresabrechnung, Versammlungen, Belegprüfung.",
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
  {
    icon: Wrench,
    title: "Wartung & Pflege",
    description:
      "Koordination von Wartungs- und Pflegearbeiten an gemeinschaftlichen Anlagen.",
  },
  {
    icon: Scale,
    title: "Hausordnung",
    description: "Festlegung und Pflege einer fairen, klar formulierten Hausordnung.",
  },
  {
    icon: BadgeCheck,
    title: "Kleine Gemeinschaften",
    description:
      "Wir verwalten auch kleine WEG ab 2 Wohneinheiten und Teileigentum.",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Werterhaltung",
    text: "Wir denken in Jahren statt Monaten. Regelmäßige Instandhaltung schützt die Substanz Ihres Eigentums.",
  },
  {
    icon: Sparkles,
    title: "Kostengünstige Bewirtschaftung",
    text: "Faire Konditionen durch lokale Handwerker und eine Verwaltung, die mitdenkt.",
  },
  {
    icon: Users,
    title: "Nachbarschaftliches Miteinander",
    text: "Wir fördern ein gutes Miteinander unter den Eigentümern — denn das ist die Basis jeder Gemeinschaft.",
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
        title={<>WEG-Verwaltung mit Weitblick.</>}
        description="Um Ihnen den bestmöglichen Service für Ihr Eigentum zu gewährleisten, bieten wir ein breites Leistungsspektrum — von der Jahresabrechnung über die Eigentümerversammlung bis zur Schadensregulierung."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
                <Image
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
                  alt="Wohnungseigentum"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">
                      Zertifizierte Verwalterin
                    </p>
                    <p className="text-xs text-muted-foreground">
                      §26a Wohnungseigentumsgesetz
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground/85">
                    <CalendarClock className="h-4 w-4 text-accent" />
                    Vertragslaufzeiten ab 12 Monaten
                  </div>
                  <div className="flex items-center gap-2 text-foreground/85">
                    <BadgeCheck className="h-4 w-4 text-accent" />
                    Verwaltung kleiner WEG ab 2 Einheiten
                  </div>
                  <div className="flex items-center gap-2 text-foreground/85">
                    <Scale className="h-4 w-4 text-accent" />
                    Auch Teileigentum
                  </div>
                </div>
                <Button asChild className="mt-6 w-full" variant="accent">
                  <Link href="/kontakt">Angebot anfordern</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Unsere Leistungen</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Das breite Leistungsspektrum unserer WEG-Verwaltung.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wir betreuen Wohnungseigentümergemeinschaften umfassend —
              kaufmännisch, technisch und rechtlich. Klare Strukturen und ein
              persönlicher Ansprechpartner machen den Unterschied.
            </p>

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

      {/* Leitgedanken */}
      <Section className="bg-secondary/40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Unsere Leitgedanken</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Was uns als Verwaltung leitet.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Unsere Geschäftstätigkeit orientiert sich an Werterhaltung,
              kostengünstiger Bewirtschaftung, vertrauensvollen
              Kundenbeziehungen und der Förderung eines guten
              nachbarschaftlichen Verhältnisses.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Lassen Sie uns über Ihre Gemeinschaft sprechen.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Ob neue Verwaltung gesucht oder Wechsel geplant — wir beraten
                Sie unverbindlich.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" variant="accent">
                <Link href="/kontakt">
                  Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
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
