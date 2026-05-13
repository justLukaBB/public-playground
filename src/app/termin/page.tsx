import { CalendarCheck2, Clock, Mail, MessageSquare, Phone, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { TerminForm } from "@/components/termin-form";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Termin anfragen",
  description:
    "Wunschtermin für Beratung, Erstgespräch oder Wechsel der Hausverwaltung in Dorsten direkt online anfragen.",
};

const steps = [
  {
    icon: MessageSquare,
    title: "1. Formular ausfüllen",
    text: "Daten, Wunschtermin und Anliegen kurz beschreiben.",
  },
  {
    icon: CalendarCheck2,
    title: "2. Wir prüfen den Termin",
    text: "Innerhalb der Bürozeiten melden wir uns mit einer Bestätigung.",
  },
  {
    icon: Sparkles,
    title: "3. Persönliches Gespräch",
    text: "Unverbindlich und kostenfrei — telefonisch oder bei uns im Büro.",
  },
];

export default function TerminPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Startseite", href: "/" },
          { label: "Termin anfragen" },
        ]}
        eyebrow="Persönliches Erstgespräch"
        title={<>Termin anfragen — wir hören zu.</>}
        description="Sagen Sie uns einfach Ihren Wunschtermin und kurz, worum es geht. Wir bestätigen Ihnen Ihren Termin per E-Mail."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <Card className="border-border/60 shadow-sm lg:col-span-7">
            <CardContent className="p-8 sm:p-10">
              <Eyebrow>Online buchen</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Ihr Wunschtermin in 60 Sekunden.
              </h2>
              <p className="mt-3 mb-8 text-sm text-muted-foreground">
                Ihre Anfrage geht direkt in unser Termin-System. Wir antworten
                schnellstmöglich.
              </p>
              <TerminForm />
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-5">
            <Card className="border-border/60 shadow-sm">
              <CardContent className="space-y-6 p-8">
                <div>
                  <Eyebrow>So läuft es ab</Eyebrow>
                  <h3 className="mt-3 font-serif text-xl font-semibold">
                    Drei Schritte zum Termin
                  </h3>
                </div>
                <ol className="space-y-5">
                  {steps.map((s) => (
                    <li key={s.title} className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold leading-tight">{s.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {s.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/60 shadow-sm">
              <CardContent className="space-y-5 p-8">
                <Eyebrow>Lieber direkt anrufen?</Eyebrow>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneLink}`}
                      className="font-medium text-foreground hover:text-accent"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-foreground hover:text-accent"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </span>
                    <span className="text-foreground">{siteConfig.hours}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
