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
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-12 text-foreground/85">
          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Anschrift
            </h2>
            <p>
              {siteConfig.company}
              <br />
              Geschäftsführerin: {siteConfig.managingDirector}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Kontakt
            </h2>
            <p>
              Tel.:{" "}
              <a
                href={`tel:${siteConfig.phoneLink}`}
                className="text-primary hover:text-accent"
              >
                {siteConfig.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:text-accent"
              >
                {siteConfig.email}
              </a>
              <br />
              Web:{" "}
              <a
                href="https://www.huerland-hausverwaltung.de"
                className="text-primary hover:text-accent"
              >
                www.huerland-hausverwaltung.de
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Registerangaben
            </h2>
            <p>
              Steuernummer: {siteConfig.taxId}
              <br />
              Handelsregister: {siteConfig.registerCourt}
              <br />
              zuständige Aufsichtsbehörde (§ 34c Gewerbeordnung):{" "}
              {siteConfig.supervisoryAuthority}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Haftungsausschluss
            </h2>

            <div className="space-y-2">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                1. Haftungsbeschränkung
              </h3>
              <p>
                Verantwortlich für dieses Informationsangebot ist der
                Herausgeber. Die Informationen auf dieser Website wurden mit
                großer Sorgfalt zusammengestellt. Für die Richtigkeit und
                Vollständigkeit kann gleichwohl keine Gewähr übernommen werden.
                Aus diesem Grund ist jegliche Haftung für eventuelle Schäden im
                Zusammenhang mit der Nutzung des Informationsangebots
                ausgeschlossen. Durch die bloße Nutzung dieser Website kommt
                keinerlei Vertragsverhältnis zwischen Nutzer und
                Anbieter/Herausgeber zustande.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                2. Hinweis zum Urheberrecht
              </h3>
              <p>
                Der gesamte Inhalt dieser Website unterliegt dem Urheberrecht.
                Unerlaubte Verwendung, Reproduktion oder Wiedergabe des Inhalts
                oder von Teilen des Inhalts ist untersagt. Wegen einer Erlaubnis
                zur Nutzung des Inhalts wenden Sie sich bitte an den
                Herausgeber.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                3. Hinweis zu externen Links
              </h3>
              <p>
                Soweit von dieser Website auf andere Websites Links gelegt sind,
                wird darauf hingewiesen, dass keinerlei Einfluss auf die
                Gestaltung und die Inhalte der gelinkten Seiten besteht und sich
                deren Inhalt nicht zu Eigen gemacht wird. Dies gilt für alle auf
                dieser Seite ausgebrachten externen Links und für alle Inhalte
                der Seiten, zu denen Werbemittel (z.B. Banner, Textanzeigen,
                Videoanzeigen) führen. Für verlinkte Seiten gilt, dass
                rechtswidrige Inhalte zum Zeitpunkt der Verlinkung nicht
                erkennbar waren. Die Links werden regelmäßig auf rechtswidrige
                Inhalte überprüft und bei Rechtsverletzungen unverzüglich
                entfernt.
              </p>
            </div>
          </section>
        </div>
      </Section>
    </>
  );
}
