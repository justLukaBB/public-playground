import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Hürland-Scuric Immobilien GmbH in Dorsten.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Startseite", href: "/" },
          { label: "Datenschutz" },
        ]}
        eyebrow="Datenschutzerklärung"
        title={<>Datenschutz</>}
        description="Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Hier finden Sie Informationen darüber, wie wir mit Ihren Daten umgehen."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-10 text-foreground/85">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              1. Verantwortlicher
            </h2>
            <p>
              {siteConfig.company}
              <br />
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
              <br />
              Telefon: {siteConfig.phone}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              2. Erhebung allgemeiner Informationen
            </h2>
            <p>
              Wenn Sie auf unsere Webseite zugreifen, werden automatisch
              Informationen allgemeiner Natur erfasst (z. B. Browsertyp,
              Betriebssystem, Domainname, Datum und Uhrzeit des Zugriffs). Diese
              Informationen lassen keinen Rückschluss auf Ihre Person zu und
              werden ausschließlich zur statistischen Auswertung sowie zur
              Sicherstellung des Betriebs der Webseite genutzt.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              3. Kontaktformular und E-Mail-Kontakt
            </h2>
            <p>
              Wenn Sie uns über das Kontaktformular oder per E-Mail
              kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Telefon
              und Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Das
              Kontaktformular auf dieser Webseite öffnet Ihr Mail-Programm und
              versendet Ihre Nachricht über Ihren eigenen Mail-Anbieter. Eine
              Weitergabe an Dritte erfolgt nicht.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger sowie den Zweck der Datenverarbeitung. Außerdem haben
              Sie ein Recht auf Berichtigung, Sperrung oder Löschung dieser
              Daten.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              5. SSL-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              6. Externe Karten (OpenStreetMap)
            </h2>
            <p>
              Wir binden auf unserer Webseite Karten von OpenStreetMap ein, um
              Ihnen unseren Standort anzuzeigen. Beim Aufrufen der jeweiligen
              Seite kann Ihre IP-Adresse an OpenStreetMap übertragen werden.
            </p>
          </section>

          <p className="border-t border-border pt-6 text-sm text-muted-foreground">
            Dies ist ein Mustertext, der an Ihre konkreten datenschutzrechtlichen
            Gegebenheiten angepasst werden sollte. Wenden Sie sich im Zweifel an
            einen Datenschutzbeauftragten.
          </p>
        </div>
      </Section>
    </>
  );
}
