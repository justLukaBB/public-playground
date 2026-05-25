import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileSignature,
  KeyRound,
  LineChart,
  Mail,
  MapPin,
  MessageSquareQuote,
  Phone,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { TestimonialStack } from "@/components/testimonial-stack";
import { AnimatedNumber } from "@/components/animated-number";
import { KenBurns } from "@/components/ken-burns";
import { HeroEntry, HeroEntryGroup } from "@/components/hero-entry";
import { ProcessTimeline } from "@/components/process-timeline";
import { WordReveal } from "@/components/word-reveal";
import { AnimatedUnderline } from "@/components/animated-underline";
import { TiltCard } from "@/components/tilt-card";
import { Magnetic } from "@/components/magnetic";
import { Parallax } from "@/components/parallax";
import { siteConfig } from "@/lib/site";

const services = [
  {
    icon: Building2,
    title: "WEG-Verwaltung",
    description:
      "Professionelle Verwaltung Ihrer Wohnungseigentümergemeinschaft und Ihres Sondereigentums — persönlich, zuverlässig und vor Ort in Dorsten.",
    href: "/weg-verwaltung",
    highlights: [
      "Jahresabrechnung & Wirtschaftsplan",
      "Eigentümerversammlungen",
      "Nebenkostenabrechnung",
      "Werterhaltung Ihrer Immobilie",
    ],
  },
  {
    icon: KeyRound,
    title: "Mietverwaltung",
    description:
      "Komplette kaufmännische und technische Betreuung Ihrer Miet- und Gewerbeobjekte.",
    href: "/mietverwaltung",
    highlights: [
      "Betriebskostenabrechnung",
      "Mieterbetreuung & Mahnwesen",
      "Vermietung & Übergabe",
    ],
  },
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung in der Immobilienverwaltung" },
  { value: "100%", label: "Persönlicher Ansprechpartner" },
];

const process = [
  {
    icon: <MessageSquareQuote strokeWidth={1.75} />,
    title: "Erstgespräch",
    description:
      "Kostenlose & unverbindliche Analyse Ihrer Immobilie und Ihrer Ziele.",
  },
  {
    icon: <FileSignature strokeWidth={1.75} />,
    title: "Angebot",
    description:
      "Maßgeschneidertes Angebot mit klaren Leistungen und Kosten.",
  },
  {
    icon: <KeyRound strokeWidth={1.75} />,
    title: "Übernahme",
    description:
      "Strukturierte & reibungslose Übernahme aller Verwaltungsaufgaben.",
  },
  {
    icon: <PlayCircle strokeWidth={1.75} />,
    title: "Aktive Verwaltung",
    description:
      "Professionelle, laufende Betreuung mit persönlichem Ansprechpartner.",
  },
  {
    icon: <LineChart strokeWidth={1.75} />,
    title: "Reporting",
    description:
      "Transparente Berichte, Abrechnungen und jährliche Optimierung.",
  },
];

const testimonials = [
  {
    quote:
      "Seit Jahren verwaltet Hürland unsere WEG – professionell, zuverlässig und immer transparent.",
    name: "Klaus M.",
    role: "WEG-Eigentümer, Dorsten",
  },
  {
    quote:
      "Seit Hürland die Verwaltung übernommen hat, muss ich mich um gar nichts mehr kümmern.",
    name: "Sabine K.",
    role: "Vermieterin, Dorsten-Marl",
  },
  {
    quote:
      "Frau Hürland ist immer persönlich erreichbar. Kein Callcenter, kein Warten.",
    name: "Thomas W.",
    role: "Eigentümer, Gladbeck",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate -mt-20 overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <KenBurns>
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
              alt="Wohnhaus in warmen Tönen"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </KenBurns>
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <HeroEntryGroup className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-32">
          <div className="space-y-6 sm:space-y-8 lg:col-span-7">
            <HeroEntry>
              <Eyebrow>Hausverwaltung Dorsten</Eyebrow>
            </HeroEntry>
            <HeroEntry>
              <h1 className="text-[1.375rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl sm:leading-[1.05] lg:text-[2.625rem] lg:leading-[1.05]">
                <WordReveal
                  as="span"
                  text="Herzlich Willkommen bei der"
                  immediate
                  className="block"
                />
                <AnimatedUnderline delay={0.7} className="mt-1">
                  Hausverwaltung Hürland
                </AnimatedUnderline>
                <span aria-hidden>.</span>
              </h1>
            </HeroEntry>
            <HeroEntry>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Hausverwaltung in Dorsten und Umgebung — persönlich und vor Ort.
              </p>
            </HeroEntry>
            <HeroEntry>
              <div className="flex flex-wrap gap-3">
                <Magnetic>
                  <Button asChild size="lg" variant="accent" className="glow-accent-btn">
                    <Link href="/termin">
                      Kostenloses Erstgespräch
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/weg-verwaltung">Unsere Leistungen</Link>
                  </Button>
                </Magnetic>
              </div>
            </HeroEntry>
            <HeroEntry>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Standort Dorsten
                </span>
              </div>
            </HeroEntry>
          </div>

          <HeroEntry direction="right" className="lg:col-span-5">
            <div className="relative mx-auto h-full max-w-sm lg:ml-auto lg:mr-0 lg:-mr-6 xl:-mr-12">
              <Card className="relative overflow-hidden border-border/60 bg-card/95 shadow-xl backdrop-blur">
                <CardContent className="space-y-5 p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium uppercase tracking-wider text-accent">
                      Direkter Kontakt
                    </p>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {siteConfig.hours}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold leading-tight">
                    Sprechen Sie mit uns persönlich.
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        href={`tel:${siteConfig.phoneLink}`}
                        className="group flex items-center gap-3 text-foreground"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
                          <Phone className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block font-medium">
                            {siteConfig.phone}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {siteConfig.hours}
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="group flex items-center gap-3 text-foreground"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
                          <Mail className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block whitespace-nowrap font-medium">
                            {siteConfig.email}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            Wir antworten zügig
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-medium">
                          {siteConfig.address.street}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {siteConfig.address.zip} {siteConfig.address.city}
                        </span>
                      </span>
                    </li>
                  </ul>
                  <Button asChild className="w-full" variant="default">
                    <Link href="/kontakt">Kontaktformular öffnen</Link>
                  </Button>
                </CardContent>
              </Card>
              <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
            </div>
          </HeroEntry>
        </HeroEntryGroup>
      </section>

      <div className="flex flex-col">
      <div className="order-2">
      {/* SERVICES */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Unsere Leistungen</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Ein rundes Leistungspaket für Ihre Immobilie
          </h2>
        </div>

        <Stagger className="mx-auto mt-10 grid max-w-3xl gap-6 sm:mt-14 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <TiltCard className="h-full rounded-2xl">
                <Card
                  interactive
                  className="group relative h-full overflow-hidden"
                >
                  <CardContent className="space-y-5 p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent transition-transform duration-500 group-hover:scale-110">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold leading-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-foreground/80">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      </div>
      <div className="order-1">
      {/* STATS */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Stagger
          stagger={0.1}
          className="mx-auto grid max-w-2xl grid-cols-2 justify-items-center gap-6 p-6 sm:p-10 md:gap-10"
        >
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <AnimatedNumber
                value={s.value}
                className="font-serif text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl"
              />
              <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      </div>
      </div>

      {/* PROCESS — So arbeiten wir */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">So arbeiten wir</Eyebrow>
          <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            In fünf klaren Schritten zu Ihrer neuen Verwaltung.
          </h2>
        </div>

        <ProcessTimeline steps={process} />
      </Section>

      {/* ABOUT TEASER */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-border lg:block">
            <Parallax amount={40} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Modernes Wohnhaus"
                fill
                className="scale-110 object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Parallax>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/15 to-transparent" />
          </div>
          <div className="space-y-10">
            <div className="space-y-5">
              <Eyebrow>Über uns</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.05]">
                An Ihrer Seite in allen Immobilienbelangen.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.6]">
              <p>
                Wir übernehmen{" "}
                <span className="font-semibold text-foreground">Mietverwaltung</span> und{" "}
                <span className="font-semibold text-foreground">WEG-Verwaltung</span>.
              </p>
              <p>
                Wir kennen Dorsten — die Handwerker und Behörden, die zählen. Das
                macht uns schnell und persönlich.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-accent/[0.08] to-accent/[0.02] p-5 ring-1 ring-accent/10 transition-all hover:from-accent/[0.12] hover:ring-accent/20">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent transition-transform group-hover:scale-105">
                  <ClipboardList className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-[15px] font-medium leading-snug text-foreground sm:text-base">
                  Transparente Abrechnungen mit klarer Gegenüberstellung
                </span>
              </li>
              <li className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-accent/[0.08] to-accent/[0.02] p-5 ring-1 ring-accent/10 transition-all hover:from-accent/[0.12] hover:ring-accent/20">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent transition-transform group-hover:scale-105">
                  <Users className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-[15px] font-medium leading-snug text-foreground sm:text-base">
                  Persönliche Betreuung, klare Ansprechpartner
                </span>
              </li>
            </ul>

            <div className="relative overflow-hidden rounded-3xl bg-secondary/60 p-6 sm:p-7">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-accent">
                    <MapPin className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Unser Einzugsgebiet
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {siteConfig.regions.map((region) => (
                    <span
                      key={region}
                      className="inline-flex items-center rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground/85 shadow-sm ring-1 ring-border/60"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/profil"
                className="group inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-accent"
              >
                Mehr über uns
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Kundenstimmen</Eyebrow>
          <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Was unsere Eigentümer und Vermieter sagen.
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 md:hidden">
          <TestimonialStack items={testimonials} />
        </div>

        <Stagger className="mt-10 hidden gap-6 sm:mt-14 md:grid md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              as="figure"
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="star-shimmer h-4 w-4 fill-current"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-serif text-lg leading-snug text-foreground">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <span className="block font-semibold text-foreground">
                  {t.name}
                </span>
                <span className="block text-muted-foreground">{t.role}</span>
              </figcaption>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow className="text-accent">Lassen Sie uns sprechen</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Ihre Immobilie in den besten Händen.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Magnetic>
                <Button asChild variant="accent" size="lg" className="glow-accent-btn">
                  <Link href="/termin">
                    Termin vereinbaren
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.22}>
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
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
