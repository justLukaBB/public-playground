import { Clock, Mail, MapPin, Phone, Printer, Smartphone } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

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
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.965%2C51.658%2C6.975%2C51.665&layer=mapnik&marker=51.6615%2C6.9702"
                className="aspect-[4/3] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
