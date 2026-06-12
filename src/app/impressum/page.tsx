import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Impressum - HDI Generalvertretung Werner Böhm",
  description: "Impressum und rechtliche Informationen der HDI Generalvertretung Werner Böhm in Nürnberg.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 pb-10 md:pb-16 hero-bg overflow-hidden">
        <div className="container-custom relative">
          <h1 className="text-white mb-2 md:mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Impressum</h1>
          <p className="text-base md:text-xl text-white/80">Angaben gemäß § 5 DDG</p>
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
          <div className="max-w-3xl prose prose-sm md:prose-lg prose-gray">
            <h2 className="text-lg md:text-2xl">Angaben gemäß § 5 DDG</h2>
            <p className="text-sm md:text-base">
              <strong>{siteConfig.agent.name}</strong><br />
              {siteConfig.agent.qualification}<br />
              HDI Generalvertretung<br /><br />
              {siteConfig.contact.address.street}<br />
              {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
            </p>

            <h2 className="text-lg md:text-2xl">Kontakt</h2>
            <p className="text-sm md:text-base">
              Telefon: {siteConfig.contact.phoneDisplay}<br />
              Mobil: {siteConfig.contact.mobileDisplay}<br />
              Fax: {siteConfig.contact.faxDisplay}<br />
              E-Mail: {siteConfig.contact.email}
            </p>

            <h2 className="text-lg md:text-2xl">Berufsbezeichnung und Aufsichtsbehörde</h2>
            <p className="text-sm md:text-base">
              Berufsbezeichnung: {siteConfig.agent.qualification}<br />
              Zuständige Kammer: {siteConfig.company.chamber}<br />
              Verliehen in: Deutschland
            </p>

            <h2 className="text-lg md:text-2xl">Versicherungs- und Finanzanlagenvermittlung</h2>
            <p className="text-sm md:text-base">
              Herr {siteConfig.agent.name} ist im Vermittlerregister mit folgenden Erlaubnissen eingetragen:
            </p>
            <p className="text-sm md:text-base">
              <strong>{siteConfig.vermittler.insurance.role}</strong><br />
              Registrierungsnummer: {siteConfig.vermittler.insurance.number}
            </p>
            <p className="text-sm md:text-base">
              <strong>{siteConfig.vermittler.financialInvestment.role}</strong><br />
              Registrierungsnummer: {siteConfig.vermittler.financialInvestment.number}
            </p>
            <p className="text-sm md:text-base">
              <strong>Registerführende Stelle:</strong><br />
              {siteConfig.vermittler.registerName}<br />
              {siteConfig.vermittler.registerAddress}<br />
              <a href={siteConfig.vermittler.registerUrl} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                www.vermittlerregister.info
              </a>
            </p>
            <p className="text-sm md:text-base">
              <strong>Erlaubnis- und Aufsichtsbehörde (Finanzanlagenvermittlung nach § 34f GewO):</strong><br />
              {siteConfig.vermittler.permitAuthority}
            </p>
            <p className="text-sm md:text-base">
              Als gebundener Versicherungsvermittler vermitteln wir ausschließlich Versicherungsprodukte der
              HDI Versicherung AG. Für diese Vermittlungstätigkeit übernimmt das Versicherungsunternehmen
              gemäß § 34d Abs. 7 GewO die uneingeschränkte Haftung.
            </p>

            <h2 className="text-lg md:text-2xl">Vertretenes Versicherungsunternehmen</h2>
            <p className="text-sm md:text-base">
              {siteConfig.company.name}<br />
              {siteConfig.company.hdiAddress}<br />
              {siteConfig.company.registration}
            </p>

            <h2 className="text-lg md:text-2xl">Schlichtungsstellen</h2>
            <p className="text-sm md:text-base">
              <strong>Versicherungsombudsmann e.V.</strong><br />
              Postfach 08 06 32<br />
              10006 Berlin<br />
              <a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                www.versicherungsombudsmann.de
              </a>
            </p>
            <p className="text-sm md:text-base">
              <strong>Ombudsmann für die Private Kranken- und Pflegeversicherung</strong><br />
              Postfach 06 02 22<br />
              10052 Berlin<br />
              <a href="https://www.pkv-ombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                www.pkv-ombudsmann.de
              </a>
            </p>

            <h2 className="text-lg md:text-2xl">EU-Streitschlichtung</h2>
            <p className="text-sm md:text-base">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-sm md:text-base">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-lg md:text-2xl">Haftung für Inhalte</h2>
            <p className="text-sm md:text-base">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>

            <h2 className="text-lg md:text-2xl">Haftung für Links</h2>
            <p className="text-sm md:text-base">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>

            <h2 className="text-lg md:text-2xl">Urheberrecht</h2>
            <p className="text-sm md:text-base">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Unser Team</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {siteConfig.team.map((member, idx) => (
                  <div key={idx} className="text-sm">
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-gray-600">{member.role}</p>
                    {member.qualification && (
                      <p className="text-xs text-gray-500 mt-1">{member.qualification}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
