import Image from "next/image";
import { Clock, Mail, MapPin, Phone, Printer, Smartphone } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die Hürland-Scuric Immobilien GmbH in Dorsten — telefonisch, per Mail oder über unser Kontaktformular.",
};

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneLink}`,
  },
  {
    icon: Smartphone,
    label: "Mobil",
    value: siteConfig.mobile,
    href: `tel:${siteConfig.mobileLink}`,
  },
  {
    icon: Printer,
    label: "Fax",
    value: siteConfig.fax,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

const team: TeamMember[] = [
  {
    name: "Birgit Hürland",
    role: "Geschäftsführerin",
    image: "/team/birgit-huerland.jpg",
    bio: "Im Mittelpunkt unserer Arbeit steht die strukturierte, zuverlässige und zugleich persönliche Betreuung der Immobilien. In der Verwaltung von Wohnungseigentümergemeinschaften (WEG) und Mietobjekten sorgen wir für klare Abläufe, rechtssichere Entscheidungen, Transparenz und eine nachhaltige Entwicklung der betreuten Objekte.",
  },
  {
    name: "Ruth Keller",
    role: "Kaufmännische Bürokraft",
    image: "/team/ruth-keller.jpg",
    bio: "Bei der Hausverwaltung Hürland unterstütze ich unsere Kunden in Dorsten und Umgebung mit Engagement und Fachkompetenz. Mein Ziel ist eine zuverlässige und persönliche Betreuung, damit Ihre Immobilie bei uns jederzeit in den besten Händen ist.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Startseite", href: "/" },
          { label: "Kontakt" },
        ]}
        eyebrow="Schreiben Sie uns"
        title={<>Wir freuen uns auf Ihre Nachricht.</>}
        description="Ob Erstgespräch, Wechsel der Verwaltung oder eine konkrete Frage — wir melden uns zügig bei Ihnen."
      />

      {/* Team / Ansprechpartnerinnen */}
      <Section className="pb-0">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Ihre Ansprechpartnerinnen</Eyebrow>
          <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Persönlich für Sie da.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Bei uns sprechen Sie nicht mit einer Hotline — sondern direkt mit
            den Menschen, die Ihre Immobilie betreuen.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {team.map((person) => {
            const initials = person.name
              .split(" ")
              .map((part) => part[0])
              .join("");
            return (
              <Card
                key={person.name}
                interactive
                className="overflow-hidden border-border/60 shadow-sm"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full bg-accent/10 ring-1 ring-border">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={`Porträt von ${person.name}`}
                        fill
                        sizes="112px"
                        className="origin-top scale-125 object-cover"
                      />
                    ) : (
                      <span className="absolute inset-0 grid place-items-center font-serif text-2xl font-semibold text-accent">
                        {initials}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold leading-tight">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {person.bio}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <Card className="border-border/60 shadow-sm lg:col-span-7">
            <CardContent className="p-8 sm:p-10">
              <Eyebrow>Kontaktformular</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Erzählen Sie uns von Ihrer Immobilie.
              </h2>
              <p className="mt-3 mb-8 text-sm text-muted-foreground">
                Pflichtfelder sind mit * markiert.
              </p>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-5">
            <Card className="border-border/60 shadow-sm">
              <CardContent className="space-y-6 p-8">
                <div>
                  <Eyebrow>So erreichen Sie uns</Eyebrow>
                  <h3 className="mt-3 font-serif text-xl font-semibold">
                    Direkter Draht zu uns
                  </h3>
                </div>
                <ul className="space-y-4">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-base font-medium text-foreground hover:text-accent"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/60 shadow-sm">
              <CardContent className="space-y-5 p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Anschrift
                    </p>
                    <p className="text-base font-medium text-foreground">
                      {siteConfig.address.street}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.address.zip} {siteConfig.address.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Öffnungszeiten
                    </p>
                    <p className="text-base font-medium text-foreground">
                      {siteConfig.hours}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Termine außerhalb auf Anfrage
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="Karte – Standort Hürland"
                src="https://maps.google.com/maps?q=Ostwall+40-42%2C+46282+Dorsten&z=16&output=embed"
                className="aspect-[4/3] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
