import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BellRing,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Flame,
  Handshake,
  Home,
  KeyRound,
  Leaf,
  MailCheck,
  Phone,
  Receipt,
  Scale,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Eyebrow } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Mietverwaltung",
  description:
    "Komplette Miet- und Gewerbeverwaltung in Dorsten: Betriebskosten, Mieterbetreuung, Mahnwesen, Instandhaltung, Vermietung und Übergabe — alles aus einer Hand.",
};

const groups = [
  {
    title: "Abrechnung & Verwaltung",
    icon: Calculator,
    items: [
      {
        icon: Receipt,
        title: "Betriebskostenabrechnung",
        text: "Gegenüberstellung von Einnahmen und Ausgaben mit klaren Einzelpositionen.",
      },
      {
        icon: ScrollText,
        title: "Mietvertragsverwaltung",
        text: "Erstellung, Pflege und Anpassung Ihrer Mietverträge.",
      },
    ],
  },
  {
    title: "Mietermanagement",
    icon: Users,
    items: [
      {
        icon: FileSearch,
        title: "Bonitätsprüfung",
        text: "Sorgfältige Prüfung potenzieller Mietinteressenten.",
      },
      {
        icon: ClipboardCheck,
        title: "Übernahme & Abnahme",
        text: "Protokollierte Wohnungsübergaben bei Ein- und Auszug.",
      },
      {
        icon: MailCheck,
        title: "Zentraler Ansprechpartner",
        text: "Wir sind die Schnittstelle zwischen Mieter und Eigentümer.",
      },
    ],
  },
  {
    title: "Finanzielle Überwachung",
    icon: Banknote,
    items: [
      {
        icon: BellRing,
        title: "Miet- und Nebenkostenüberwachung",
        text: "Lückenloses Monitoring inkl. Mahnwesen.",
      },
      {
        icon: ShieldCheck,
        title: "Mieterhöhungen",
        text: "Überprüfung gesetzlicher Mieterhöhungsmöglichkeiten.",
      },
    ],
  },
  {
    title: "Instandhaltung & Reparaturen",
    icon: Wrench,
    items: [
      {
        icon: Wrench,
        title: "Reparaturkoordination",
        text: "Vergabe und Überwachung aller notwendigen Reparaturen.",
      },
      {
        icon: Sparkles,
        title: "Renovierungen",
        text: "Koordination von Renovierungs- und Modernisierungsarbeiten.",
      },
      {
        icon: Leaf,
        title: "Hausmeister & Pflege",
        text: "Steuerung von Hausmeister-, Reinigungs- und Gärtnerdiensten.",
      },
    ],
  },
  {
    title: "Ordnung & Mietergemeinschaft",
    icon: Scale,
    items: [
      {
        icon: Scale,
        title: "Hausordnung",
        text: "Festlegung und Überwachung einer klar formulierten Hausordnung.",
      },
    ],
  },
  {
    title: "Versicherung & Energie",
    icon: ShieldCheck,
    items: [
      {
        icon: ShieldCheck,
        title: "Schadensregulierung",
        text: "Abwicklung im Versicherungsfall — schnell und unbürokratisch.",
      },
      {
        icon: Flame,
        title: "Energieausweis",
        text: "Erstellung und Beratung rund um den Energieausweis.",
      },
      {
        icon: Handshake,
        title: "Wartungsverträge",
        text: "Abschluss notwendiger Wartungsverträge mit qualifizierten Partnern.",
      },
    ],
  },
];

export default function MietverwaltungPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Startseite", href: "/" },
          { label: "Mietverwaltung" },
        ]}
        eyebrow="Für Vermieter & Gewerbetreibende"
        title={<>Mietverwaltung, die Ihnen Arbeit abnimmt.</>}
      />

      {/* Highlight Vermietung */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Eyebrow>Vermietungsservice</Eyebrow>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Von der Mietersuche bis zur Übergabe — alles aus einer Hand.
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Inserate auf passenden Plattformen",
                "Besichtigungen koordinieren",
                "Bonitäts- und Selbstauskunftsprüfung",
                "Mietvertragsgestaltung",
                "Übergabeprotokolle",
                "Schlüsselübergabe",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground/85"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="accent">
                <Link href="/kontakt">
                  Vermietung anfragen <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${siteConfig.phoneLink}`}>
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-border lg:block">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
              alt="Modernes Wohnzimmer"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-wider text-accent">
                Vermietung
              </p>
              <p className="mt-1 font-serif text-lg font-semibold">
                Kein Leerstand. Keine Sorgen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Leistungsgruppen */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Unsere Leistungen</Eyebrow>
          <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Umfassende Betreuung in sechs Bereichen.
          </h2>
        </div>

        <Accordion type="multiple" className="mx-auto mt-14 max-w-5xl">
          {groups.map((group) => (
            <AccordionItem
              key={group.title}
              value={group.title}
              className="border-b border-border/60"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    <group.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
                    {group.title}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6 pt-2 md:grid-cols-3">
                  {group.items.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold leading-tight text-foreground">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow className="text-accent">Bereit, loszulegen?</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Übergeben Sie Ihre Mietobjekte in gute Hände.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/80">
                Ein kurzes Gespräch reicht — unverbindlich und kostenfrei.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild variant="accent" size="lg">
                <Link href="/termin">
                  Termin vereinbaren <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={`mailto:${siteConfig.email}`}>
                  <KeyRound className="h-4 w-4" />
                  Schreiben Sie uns
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
