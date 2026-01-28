import { getAlternates } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { FadeInUp } from "@/components/animations/FadeInUp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Impressum | Digital David",
    description: "Impressum und rechtliche Angaben der Digital David AG",
    alternates: getAlternates("/legal/impressum", locale),
  };
}

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="prose prose-invert prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-gray-400 mb-6">
              Digital David AG
              <br />
              Weserstraße 4
              <br />
              60329 Frankfurt am Main
              <br />
              Deutschland
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Vertreten durch
            </h2>
            <p className="text-gray-400 mb-6">Vorstand: Stefan Rühle</p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Kontakt
            </h2>
            <p className="text-gray-400 mb-6">
              E-Mail: hello@digitaldavid.io
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Registereintrag
            </h2>
            <p className="text-gray-400 mb-6">
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht Frankfurt am Main
              <br />
              Registernummer: HRB 121238
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Umsatzsteuer-ID
            </h2>
            <p className="text-gray-400 mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE337018659
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-gray-400 mb-6">
              Stefan Rühle
              <br />
              Weserstraße 4
              <br />
              60329 Frankfurt am Main
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Streitschlichtung
            </h2>
            <p className="text-gray-400 mb-6">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="text-electric-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-gray-400 mb-6">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
