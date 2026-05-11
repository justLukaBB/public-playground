import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Impressum",
  description: "Impressum der Hürland-Scuric Immobilien GmbH in Dorsten.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Startseite", href: "/" },
          { label: "Impressum" },
        ]}
        eyebrow="Pflichtangaben"
        title={<>Impressum</>}
        description="Angaben gemäß § 5 TMG"
      />

      <Section>
        <div className="prose-style mx-auto max-w-3xl space-y-10 text-foreground/85">
          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Anbieter
            </h2>
            <p>{siteConfig.company}</p>
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Vertreten durch
            </h2>
            <p>Geschäftsführerin: {siteConfig.managingDirector}</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a
                href={`tel:${siteConfig.phoneLink}`}
                className="text-primary hover:text-accent"
              >
                {siteConfig.phone}
              </a>
              <br />
              Mobil:{" "}
              <a
                href={`tel:${siteConfig.mobileLink}`}
                className="text-primary hover:text-accent"
              >
                {siteConfig.mobile}
              </a>
              <br />
              Fax: {siteConfig.fax}
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

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Registereintrag
            </h2>
            <p>
              Eintragung im Handelsregister
              <br />
              Registergericht: {siteConfig.registerCourt}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Steuernummer
            </h2>
            <p>{siteConfig.taxId}</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Aufsichtsbehörde
            </h2>
            <p>
              Zuständige Aufsichtsbehörde gemäß § 34c Gewerbeordnung:
              <br />
              {siteConfig.supervisoryAuthority}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Berufsbezeichnung
            </h2>
            <p>{siteConfig.certification}</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht.
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
