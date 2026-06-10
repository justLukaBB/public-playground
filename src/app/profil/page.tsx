import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Heart,
  KeyRound,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Profil",
  description:
    "Lernen Sie die Hürland-Scuric Immobilien GmbH kennen — Ihre Hausverwaltung in Dorsten.",
};

const offerings = [
  { title: "WEG-Verwaltung", icon: Building2 },
  { title: "Mietverwaltung", icon: KeyRound },
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
        title={<>Mitten in Dorsten.</>}
      />

      {/* Intro */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-border lg:block">
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
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Ihre Hausverwaltung in Dorsten.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Wir übernehmen WEG-Verwaltung und Mietverwaltung.
              </p>
              <p>
                Bei Instandhaltung und Reparaturen arbeiten wir mit
                ortsansässigen Handwerksbetrieben.
              </p>
              <p className="font-medium text-foreground">
                Wir möchten Sie überzeugen durch{" "}
                {siteConfig.values.map((v, i) => (
                  <span key={v}>
                    <span className="text-accent">{v}</span>
                    {i < siteConfig.values.length - 2
                      ? ", "
                      : i === siteConfig.values.length - 2
                        ? " und "
                        : "."}
                  </span>
                ))}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
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

      {/* Werte / Versprechen */}
      <Section>
        <div className="grid gap-12 rounded-3xl border border-border bg-card p-10 shadow-sm lg:grid-cols-12 lg:items-center lg:p-16">
          <div className="lg:col-span-5">
            <Eyebrow>Unser Versprechen</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Persönlich. Verlässlich. Vor Ort.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Kurze Wege, klare Worte, echte Sorgfalt.
            </p>
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {[
              "Ein fester Ansprechpartner — keine Hotlines.",
              "Schnelle Reaktion durch lokale Handwerker.",
              "Abrechnungen, die Sie verstehen.",
              "Werterhaltung Ihrer Immobilie.",
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
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Mitten in Dorsten — gut zu erreichen.
            </h2>
            <p className="text-muted-foreground">
              Besuchen Sie uns am Ostwall oder rufen Sie uns an.
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
              src="https://maps.google.com/maps?q=Ostwall+42%2C+46282+Dorsten&z=16&output=embed"
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
