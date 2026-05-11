import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Handshake,
  Heart,
  KeyRound,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Profil",
  description:
    "Lernen Sie die Hürland-Scuric Immobilien GmbH kennen — Ihre seriöse und zuverlässige Hausverwaltung in Dorsten.",
};

const competencies = [
  {
    icon: Award,
    title: "Zertifizierte Verwaltung",
    text: "Zertifizierter Verwalter nach §26a Wohnungseigentumsgesetz.",
  },
  {
    icon: Building2,
    title: "Kleine WEG ab 2 Einheiten",
    text: "Auch kleine Wohnungseigentümergemeinschaften werden professionell betreut.",
  },
  {
    icon: Handshake,
    title: "Lokale Handwerker",
    text: "Enge Zusammenarbeit mit ortsansässigen Handwerksbetrieben.",
  },
  {
    icon: ShieldCheck,
    title: "Transparente Abrechnungen",
    text: "Klar gegliederte Jahres- und Betriebskostenabrechnungen.",
  },
];

const offerings = [
  { title: "Mietverwaltung", icon: KeyRound },
  { title: "WEG-Verwaltung", icon: Building2 },
  { title: "Gewerbeverwaltung", icon: Sparkles },
];

export default function ProfilPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Startseite", href: "/" },
          { label: "Profil" },
        ]}
        eyebrow="Über uns"
        title={<>Ein seriöser, zuverlässiger Partner — mitten in Dorsten.</>}
        description="Wir sind die Hürland-Scuric Immobilien GmbH: Ihre Hausverwaltung mit individuellem und persönlichem Service. Persönlich, transparent und mit echter Verwurzelung in der Region."
      />

      {/* Intro */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Büro mit warmem Licht"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-6">
            <Eyebrow>Wer wir sind</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Ihre Hausverwaltung mit Herz für Dorsten.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Wir stehen Ihnen als seriöser und zuverlässiger Partner in allen
                Belangen der professionellen Immobilienverwaltung zur Seite.
                Unser Leistungsspektrum umfasst die Mietverwaltung, die
                WEG-Verwaltung sowie die Gewerbeverwaltung.
              </p>
              <p>
                Was uns ausmacht: Wir kennen die Region. Wir kennen die
                Handwerker. Wir kennen die Wege bei Behörden. Und vor allem
                kennen wir unsere Kundinnen und Kunden persönlich — denn jede
                Immobilie ist anders, jede Eigentümergemeinschaft hat ihre
                Geschichte.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {offerings.map((o) => (
                <div
                  key={o.title}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <o.icon className="mx-auto h-5 w-5 text-accent" />
                  <p className="mt-2 text-xs font-medium leading-tight">
                    {o.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Kernkompetenzen */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Kernkompetenzen</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Worauf Sie sich verlassen können.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Werte / Versprechen */}
      <Section>
        <div className="grid gap-12 rounded-3xl border border-border bg-card p-10 shadow-sm lg:grid-cols-12 lg:items-center lg:p-16">
          <div className="lg:col-span-5">
            <Eyebrow>Unser Versprechen</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Persönlich. Verlässlich. Vor Ort.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wir verwalten Immobilien so, wie wir selbst betreut werden möchten
              — mit kurzen Wegen, klaren Worten und echter Sorgfalt.
            </p>
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {[
              "Ein fester Ansprechpartner für Sie und Ihre Mieter — keine anonymen Hotlines.",
              "Schnelle Reaktion bei Schadens- und Reparaturfällen durch lokale Partnerbetriebe.",
              "Transparente Abrechnungen, die Sie auch ohne Lupe verstehen.",
              "Klare Vertragslaufzeiten ab 12 Monaten — fair für beide Seiten.",
              "Werterhaltung Ihrer Immobilie als oberstes Ziel.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Standort / Kontakt */}
      <Section className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <Eyebrow>Unser Standort</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Mitten in Dorsten — gut zu erreichen.
            </h2>
            <p className="text-muted-foreground">
              Besuchen Sie uns in unserem Büro am Ostwall oder rufen Sie uns
              einfach an. Wir nehmen uns Zeit für Sie.
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  <span className="block font-medium text-foreground">
                    {siteConfig.address.street}
                  </span>
                  <span className="block text-muted-foreground">
                    {siteConfig.address.zip} {siteConfig.address.city}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href={`tel:${siteConfig.phoneLink}`}
                  className="font-medium text-foreground hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">{siteConfig.hours}</span>
              </div>
            </div>
            <div className="pt-2">
              <Button asChild variant="accent">
                <Link href="/kontakt">
                  Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe
              title="Standort Hürland Hausverwaltung Dorsten"
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.965%2C51.658%2C6.975%2C51.665&layer=mapnik&marker=51.6615%2C6.9702"
              className="aspect-[4/3] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
