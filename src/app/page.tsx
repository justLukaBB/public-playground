import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileSignature,
  Handshake,
  Home,
  KeyRound,
  LineChart,
  Mail,
  MapPin,
  MessageSquareQuote,
  Phone,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

const services = [
  {
    icon: Building2,
    title: "WEG-Verwaltung",
    description:
      "Professionelle Verwaltung Ihrer Wohnungseigentümergemeinschaft.",
    href: "/weg-verwaltung",
    highlights: [
      "Jahresabrechnung & Wirtschaftsplan",
      "Eigentümerversammlungen",
      "Transparente Belegprüfung",
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
  {
    icon: Home,
    title: "Sondereigentum",
    description:
      "Individuelle Verwaltung Ihres Sondereigentums — persönlich, zuverlässig und vor Ort in Dorsten.",
    href: "/mietverwaltung",
    highlights: [
      "Nebenkostenabrechnung",
      "Vermietungs- und Verkaufsberatung",
      "Werterhaltung Ihrer Immobilie",
    ],
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Werterhaltung",
    description:
      "Wir denken langfristig: regelmäßige Instandhaltung schützt Ihre Immobilie und ihren Wert.",
  },
  {
    icon: Sparkles,
    title: "Kostengünstige Bewirtschaftung",
    description:
      "Enge Zusammenarbeit mit ortsansässigen Handwerksbetrieben — faire Preise, schnelle Wege.",
  },
  {
    icon: Handshake,
    title: "Vertrauen & Transparenz",
    description:
      "Klare Abrechnungen, persönliche Ansprechpartner und ehrliche Kommunikation.",
  },
  {
    icon: Users,
    title: "Gutes Miteinander",
    description:
      "Wir fördern ein gutes nachbarschaftliches Verhältnis — für ein angenehmes Wohnen.",
  },
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung in der Immobilienverwaltung" },
  { value: "100%", label: "Persönlicher Ansprechpartner" },
];

const process = [
  {
    icon: MessageSquareQuote,
    title: "Erstgespräch",
    description:
      "Kostenlose & unverbindliche Analyse Ihrer Immobilie und Ihrer Ziele.",
  },
  {
    icon: FileSignature,
    title: "Angebot",
    description:
      "Maßgeschneidertes Angebot mit klaren Leistungen und Kosten.",
  },
  {
    icon: KeyRound,
    title: "Übernahme",
    description:
      "Strukturierte & reibungslose Übernahme aller Verwaltungsaufgaben.",
  },
  {
    icon: PlayCircle,
    title: "Aktive Verwaltung",
    description:
      "Professionelle, laufende Betreuung mit persönlichem Ansprechpartner.",
  },
  {
    icon: LineChart,
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
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Wohnhaus in warmen Tönen"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-32">
          <div className="space-y-6 sm:space-y-8 lg:col-span-7">
            <Eyebrow>Hausverwaltung Dorsten</Eyebrow>
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              Ihre Immobilie in{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">vertrauensvollen Händen</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/40" />
              </span>
              .
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Herzlich willkommen bei der Hausverwaltung Hürland in Dorsten —
              Ihr zuverlässiger Partner, wenn es um die Verwaltung Ihrer
              Immobilien in Dorsten und Umgebung geht.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="accent">
                <Link href="/termin">
                  Kostenloses Erstgespräch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/weg-verwaltung">Unsere Leistungen</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                In Dorsten verwurzelt
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
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
                          <span className="block break-all font-medium">
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
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Unsere Leistungen</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Ein rundes Leistungspaket für Ihre Immobilie
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Ob Eigentümergemeinschaft, Mietshaus oder Sondereigentum — wir
            betreuen Sie kompetent in allen Belangen Ihrer Immobilie.
          </p>
        </div>

        <Stagger className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Card
                interactive
                className="group relative h-full overflow-hidden border-border/70"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="space-y-5 p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
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
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* VALUES / TRUST */}
      <Section className="bg-secondary/40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Unsere Leitgedanken</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Persönlich, transparent — und immer für Sie da.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Wir arbeiten eng mit ortsansässigen Handwerksbetrieben zusammen
              und betreuen Eigentümergemeinschaften ebenso wie einzelne
              Vermieter mit dem gleichen hohen Anspruch an Qualität und
              Verlässlichkeit.
            </p>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-4 inline-grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* STATS */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Stagger
          stagger={0.1}
          className="mx-auto grid max-w-2xl grid-cols-2 justify-items-center gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10 md:gap-10"
        >
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <div className="font-serif text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
                {s.value}
              </div>
              <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* PROCESS — So arbeiten wir */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">So arbeiten wir</Eyebrow>
          <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            In fünf klaren Schritten zu Ihrer neuen Verwaltung.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Von der ersten Anfrage bis zur laufenden Betreuung — strukturiert,
            transparent und ohne Überraschungen.
          </p>
        </div>

        <Stagger
          as="ol"
          className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-5"
        >
          {process.map((step, idx) => (
            <StaggerItem
              key={step.title}
              as="li"
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="absolute -top-3 left-6 inline-flex h-7 items-center rounded-full bg-accent px-3 text-xs font-semibold text-accent-foreground">
                Schritt {idx + 1}
              </span>
              <span className="mt-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold leading-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ABOUT TEASER */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Modernes Wohnhaus"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 p-5 backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                Seit Jahren in Dorsten
              </p>
              <p className="mt-1 font-serif text-lg font-semibold leading-tight">
                Ihre Hausverwaltung mit Heimvorteil.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Eyebrow>Über uns</Eyebrow>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Ein zuverlässiger Partner in allen Immobilien&shy;belangen.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Als seriöser und zuverlässiger Partner stehen wir Ihnen in allen
                Belangen der professionellen Immobilienverwaltung zur Seite.
                Unser Leistungsspektrum umfasst die{" "}
                <strong className="text-foreground">Mietverwaltung</strong>, die{" "}
                <strong className="text-foreground">WEG-Verwaltung</strong>{" "}
                sowie die <strong className="text-foreground">Gewerbeverwaltung</strong>.
              </p>
              <p>
                Wir kennen Dorsten und Umgebung — und wir kennen die Menschen,
                Handwerker und Behörden, die für eine reibungslose Verwaltung
                wichtig sind. Das macht uns schnell, persönlich und effizient.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-secondary/50 p-4">
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground/85">
                  Transparente Abrechnungen mit klarer Gegenüberstellung
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-secondary/50 p-4">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground/85">
                  Persönliche Betreuung, klare Ansprechpartner
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
                <MapPin className="h-4 w-4" />
                Unser Einzugsgebiet
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.regions.map((region) => (
                  <span
                    key={region}
                    className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
            <Button asChild variant="outline">
              <Link href="/profil">
                Mehr über uns
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
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
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Persönlich, zuverlässig und transparent — Vertrauen, das wir uns
            jeden Tag aufs Neue verdienen.
          </p>
        </div>

        <Stagger className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3">
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
                Ihre Immobilie verdient eine Verwaltung, die mitdenkt.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80">
                Vereinbaren Sie ein unverbindliches Erstgespräch. Wir hören zu,
                schauen uns Ihre Situation an und machen Ihnen ein faires
                Angebot.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild variant="accent" size="lg">
                <Link href="/termin">
                  Termin vereinbaren
                  <ArrowRight className="h-4 w-4" />
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
        </Reveal>
      </Section>
    </>
  );
}
