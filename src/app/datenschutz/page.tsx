import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Datenschutzerklärung - HDI Generalvertretung Werner Böhm",
  description: "Informationen zum Datenschutz gemäß DSGVO bei der HDI Generalvertretung Werner Böhm in Nürnberg.",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 pb-10 md:pb-16 hero-bg overflow-hidden">
        <div className="container-custom relative">
          <h1 className="text-white mb-2 md:mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Datenschutzerklärung</h1>
          <p className="text-base md:text-xl text-white/80">Informationen gemäß Art. 13, 14 DSGVO</p>
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

            <h2 className="text-lg md:text-2xl">1. Verantwortlicher</h2>
            <p className="text-sm md:text-base">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="text-sm md:text-base">
              <strong>{siteConfig.agent.name}</strong><br />
              HDI Generalvertretung<br />
              {siteConfig.contact.address.street}<br />
              {siteConfig.contact.address.zip} {siteConfig.contact.address.city}<br /><br />
              Telefon: {siteConfig.contact.phoneDisplay}<br />
              E-Mail: {siteConfig.contact.email}
            </p>

            <h2 className="text-lg md:text-2xl">2. Allgemeines zur Datenverarbeitung</h2>
            <p className="text-sm md:text-base">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
              Die Verarbeitung erfolgt regelmäßig nur nach Einwilligung des Nutzers oder wenn eine
              Rechtsgrundlage dies gestattet (Art. 6 DSGVO).
            </p>

            <h2 className="text-lg md:text-2xl">3. Hosting</h2>
            <p className="text-sm md:text-base">
              Diese Website wird bei einem externen Dienstleister gehostet (Auftragsverarbeiter):
            </p>
            <p className="text-sm md:text-base">
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>
            <p className="text-sm md:text-base">
              Vercel verarbeitet in unserem Auftrag Daten, die beim Aufruf der Website anfallen
              (insbesondere technische Verbindungsdaten und Server-Logfiles). Rechtsgrundlage ist unser
              berechtigtes Interesse an einer sicheren und effizienten Bereitstellung unseres Online-Angebots
              (Art. 6 Abs. 1 lit. f DSGVO). Mit Vercel besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß
              Art. 28 DSGVO. Soweit Daten in die USA übermittelt werden, erfolgt dies auf Grundlage der
              EU-Standardvertragsklauseln bzw. des EU-US Data Privacy Frameworks.
            </p>

            <h2 className="text-lg md:text-2xl">4. Server-Logfiles</h2>
            <p className="text-sm md:text-base">
              Beim Aufruf dieser Website werden automatisch Informationen erfasst, die Ihr Browser übermittelt.
              Dies sind insbesondere:
            </p>
            <ul className="text-sm md:text-base">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL (die zuvor besuchte Seite)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>anonymisierte bzw. gekürzte IP-Adresse</li>
            </ul>
            <p className="text-sm md:text-base">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              Stabilität und Sicherheit der Website).<br />
              <strong>Speicherdauer:</strong> Diese Daten werden in der Regel nach spätestens 30 Tagen gelöscht,
              sofern keine sicherheitsrelevanten Vorfälle eine längere Speicherung erfordern.
            </p>

            <h2 className="text-lg md:text-2xl">5. Kontaktaufnahme (Formular, E-Mail, Telefon)</h2>
            <p className="text-sm md:text-base">
              Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch kontaktieren, werden Ihre
              Angaben (z.&nbsp;B. Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt) zur Bearbeitung
              Ihrer Anfrage gespeichert und verarbeitet.
            </p>
            <p className="text-sm md:text-base">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Anbahnung/Durchführung eines
              Vertrags) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), wenn die Anfrage nicht
              vertragsbezogen ist.<br />
              <strong>Speicherdauer:</strong> Wir speichern diese Daten, bis Ihre Anfrage abschließend
              bearbeitet ist. Gesetzliche Aufbewahrungspflichten (z.&nbsp;B. aus Handels- und Steuerrecht,
              bis zu 10 Jahre) bleiben unberührt.
            </p>

            <h2 className="text-lg md:text-2xl">6. Versicherungsvermittlung</h2>
            <p className="text-sm md:text-base">
              Im Rahmen der Versicherungsberatung und -vermittlung verarbeiten wir die zur Vermittlung
              erforderlichen Daten und geben diese an das vertretene Versicherungsunternehmen
              (HDI Versicherung AG) weiter.
            </p>
            <p className="text-sm md:text-base">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO. Bei besonderen Kategorien
              personenbezogener Daten (z.&nbsp;B. Gesundheitsdaten bei Kranken- oder
              Berufsunfähigkeitsversicherungen) erfolgt die Verarbeitung auf Grundlage Ihrer ausdrücklichen
              Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO.
            </p>

            <h2 className="text-lg md:text-2xl">7. Cookies & Einwilligung</h2>
            <p className="text-sm md:text-base">
              Diese Website verwendet technisch notwendige Cookies, die für den Betrieb erforderlich sind.
              Optionale Cookies (z.&nbsp;B. für Analyse oder Marketing) werden nur mit Ihrer Einwilligung über
              unser Cookie-Banner gesetzt (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG). Ihre Einwilligung
              können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>

            <h2 className="text-lg md:text-2xl">8. Empfänger / Dritte</h2>
            <p className="text-sm md:text-base">
              Eine Übermittlung Ihrer Daten an Dritte erfolgt nur, wenn dies gesetzlich erlaubt oder zur
              Vertragserfüllung erforderlich ist. Mögliche Empfänger sind:
            </p>
            <ul className="text-sm md:text-base">
              <li>das vertretene Versicherungsunternehmen (HDI Versicherung AG)</li>
              <li>technische Dienstleister (Hosting – Vercel Inc.)</li>
              <li>Behörden, soweit eine gesetzliche Verpflichtung besteht</li>
            </ul>

            <h2 className="text-lg md:text-2xl">9. Ihre Rechte</h2>
            <p className="text-sm md:text-base">Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="text-sm md:text-base">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>

            <h2 className="text-lg md:text-2xl">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p className="text-sm md:text-base">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns
              zuständige Behörde ist:
            </p>
            <p className="text-sm md:text-base">
              <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
              Promenade 18<br />
              91522 Ansbach<br />
              <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                www.lda.bayern.de
              </a>
            </p>

            <h2 className="text-lg md:text-2xl">11. SSL-/TLS-Verschlüsselung</h2>
            <p className="text-sm md:text-base">
              Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie am „https://" in der Adresszeile Ihres Browsers.
            </p>

            <h2 className="text-lg md:text-2xl">12. Aktualität und Änderung</h2>
            <p className="text-sm md:text-base">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
              rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen.
            </p>

            <p className="text-xs md:text-sm text-gray-500 mt-8 md:mt-12">
              Stand: Juni 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
