import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Erstinformation - HDI Generalvertretung Werner Böhm",
  description: "Erstinformation des Versicherungsvermittlers gemäß § 15 VersVermV. Status, Vermittlerregister und Beschwerdestellen der HDI Generalvertretung Werner Böhm.",
};

export default function ErstinformationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 pb-10 md:pb-16 hero-bg overflow-hidden">
        <div className="container-custom relative">
          <h1 className="text-white mb-2 md:mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Erstinformation</h1>
          <p className="text-base md:text-xl text-white/80">Informationen des Versicherungsvermittlers gemäß § 15 VersVermV</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60L1440 60V30C1440 30 1200 0 720 0C240 0 0 30 0 30V60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5 md:p-6 mb-8 md:mb-12">
              <p className="text-sm md:text-base text-gray-700">
                Diese Erstinformation erhalten Sie aufgrund gesetzlicher Verpflichtung. Sie gibt Ihnen
                einen Überblick über meinen Status als Versicherungsvermittler, meine Registrierung sowie
                Ihre Möglichkeiten zur außergerichtlichen Beschwerde und Streitbeilegung.
              </p>
            </div>

            <div className="prose prose-sm md:prose-lg prose-gray max-w-none">
              <h2 className="text-lg md:text-2xl">1. Wer berät und vermittelt Sie?</h2>
              <p className="text-sm md:text-base">
                <strong>{siteConfig.agent.name}</strong><br />
                HDI Generalvertretung<br />
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
              </p>
              <p className="text-sm md:text-base">
                Telefon: {siteConfig.contact.phoneDisplay}<br />
                Mobil: {siteConfig.contact.mobileDisplay}<br />
                Fax: {siteConfig.contact.faxDisplay}<br />
                E-Mail: {siteConfig.contact.email}
              </p>

              <h2 className="text-lg md:text-2xl">2. Mein Status als Vermittler</h2>
              <p className="text-sm md:text-base">
                Ich bin als <strong>gebundener Versicherungsvermittler</strong> gemäß § 34d Abs. 7 GewO tätig.
                Das bedeutet: Ich vermittle ausschließlich Versicherungsprodukte der HDI Versicherung AG.
                Für meine Vermittlungstätigkeit übernimmt das Versicherungsunternehmen die uneingeschränkte
                Haftung. Eine unabhängige Maklertätigkeit liegt nicht vor.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 md:p-5 my-4 border border-gray-100">
                <p className="text-sm md:text-base mb-2">
                  <strong>Versicherungsvermittlung:</strong><br />
                  {siteConfig.vermittler.insurance.role}<br />
                  Registrierungsnummer: <strong>{siteConfig.vermittler.insurance.number}</strong>
                </p>
                <p className="text-sm md:text-base mb-0">
                  <strong>Finanzanlagenvermittlung:</strong><br />
                  {siteConfig.vermittler.financialInvestment.role}<br />
                  Registrierungsnummer: <strong>{siteConfig.vermittler.financialInvestment.number}</strong>
                </p>
              </div>

              <h2 className="text-lg md:text-2xl">3. Vermittlerregister</h2>
              <p className="text-sm md:text-base">
                Meine Eintragung können Sie jederzeit beim gemeinsamen Register überprüfen:
              </p>
              <p className="text-sm md:text-base">
                {siteConfig.vermittler.registerName}<br />
                {siteConfig.vermittler.registerAddress}<br />
                <a href={siteConfig.vermittler.registerUrl} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                  www.vermittlerregister.info
                </a>
              </p>
              <p className="text-sm md:text-base">
                Erlaubnis- und Aufsichtsbehörde für die Finanzanlagenvermittlung (§ 34f GewO):
                {" "}{siteConfig.vermittler.permitAuthority}.
              </p>

              <h2 className="text-lg md:text-2xl">4. Beteiligungen</h2>
              <p className="text-sm md:text-base">
                Ich halte <strong>keine</strong> direkte oder indirekte Beteiligung von über 10 % der Stimmrechte
                oder des Kapitals an einem Versicherungsunternehmen.
              </p>
              <p className="text-sm md:text-base">
                Ein Versicherungsunternehmen oder dessen Mutterunternehmen hält <strong>keine</strong> direkte
                oder indirekte Beteiligung von über 10 % der Stimmrechte oder des Kapitals an mir.
              </p>

              <h2 className="text-lg md:text-2xl">5. Art der Beratung und Vergütung</h2>
              <p className="text-sm md:text-base">
                Als gebundener Versicherungsvermittler werde ich auf Grundlage einer Provision tätig, die
                bereits im Versicherungsbeitrag enthalten ist. Sie zahlen für meine Beratung und Vermittlung
                kein gesondertes Honorar.
              </p>

              <h2 className="text-lg md:text-2xl">6. Beschwerde- und Schlichtungsstellen</h2>
              <p className="text-sm md:text-base">
                Bei Beschwerden können Sie sich an die folgenden unabhängigen Schlichtungsstellen wenden:
              </p>
              <p className="text-sm md:text-base">
                <strong>Versicherungsombudsmann e.V.</strong><br />
                Postfach 08 06 32, 10006 Berlin<br />
                <a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                  www.versicherungsombudsmann.de
                </a>
              </p>
              <p className="text-sm md:text-base">
                <strong>Ombudsmann für die Private Kranken- und Pflegeversicherung</strong><br />
                Postfach 06 02 22, 10052 Berlin<br />
                <a href="https://www.pkv-ombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                  www.pkv-ombudsmann.de
                </a>
              </p>
              <p className="text-sm md:text-base">
                <strong>Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)</strong><br />
                Graurheindorfer Straße 108, 53117 Bonn<br />
                <a href="https://www.bafin.de" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                  www.bafin.de
                </a>
              </p>

              <h2 className="text-lg md:text-2xl">7. Außergerichtliche Streitbeilegung</h2>
              <p className="text-sm md:text-base">
                Die Europäische Kommission stellt unter{" "}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                  ec.europa.eu/consumers/odr
                </a>{" "}
                eine Plattform zur Online-Streitbeilegung bereit. An einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle nehme ich nicht teil; die o.&nbsp;g. branchenspezifischen
                Schlichtungsstellen stehen Ihnen jedoch zur Verfügung.
              </p>

              <p className="text-xs md:text-sm text-gray-500 mt-8 md:mt-12">
                Stand: Juni 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
