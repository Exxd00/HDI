import Link from "next/link";
import {
  Heart, Shield, ArrowRight, Phone, CheckCircle, Users, PiggyBank,
  TrendingUp, Clock, Award, AlertTriangle, Calculator, FileText, HelpCircle
} from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Lebensversicherung - HDI Generalvertretung Werner Böhm",
  description: "Kapitallebensversicherung für finanzielle Sicherheit und Vermögensaufbau. Persönliche Beratung in Nürnberg.",
};

const benefits = [
  {
    icon: Shield,
    title: "Todesfallschutz",
    description: "Ihre Familie ist im Ernstfall finanziell abgesichert und kann den gewohnten Lebensstandard halten."
  },
  {
    icon: PiggyBank,
    title: "Kapitalaufbau",
    description: "Während der Laufzeit bauen Sie systematisch Vermögen auf – für Ihre Ziele im Leben."
  },
  {
    icon: TrendingUp,
    title: "Garantierte Verzinsung",
    description: "HDI bietet eine sichere Mindestverzinsung plus Überschussbeteiligung."
  },
  {
    icon: Award,
    title: "Steuervorteile",
    description: "Bei Einhaltung bestimmter Voraussetzungen profitieren Sie von steuerlichen Vorteilen."
  }
];

const targetGroups = [
  {
    title: "Junge Familien",
    description: "Absicherung der Liebsten plus Vermögensaufbau für Ausbildung der Kinder",
    features: ["Flexibler Todesfallschutz", "Kapital für Ausbildung", "Günstige Beiträge in jungen Jahren"]
  },
  {
    title: "Berufstätige",
    description: "Kombination aus Altersvorsorge und Hinterbliebenenschutz",
    features: ["Steueroptimierte Altersvorsorge", "Absicherung laufender Kredite", "Nachversicherungsgarantie"]
  },
  {
    title: "Selbstständige",
    description: "Private Absicherung ohne gesetzlichen Schutz",
    features: ["Ersatz für fehlende Witwenrente", "Flexible Beitragszahlung", "Betriebliche Nutzung möglich"]
  }
];

const faqs = [
  {
    question: "Was ist der Unterschied zur Risikolebensversicherung?",
    answer: "Die Kapitallebensversicherung kombiniert Todesfallschutz mit Sparanteil. Sie erhalten am Ende der Laufzeit eine garantierte Auszahlung – auch wenn Sie den Vertrag erleben. Die Risikolebensversicherung zahlt nur im Todesfall und ist daher günstiger, bildet aber kein Kapital."
  },
  {
    question: "Wie hoch sollte die Versicherungssumme sein?",
    answer: "Als Faustregel gilt: 3-5 Jahresgehälter für den Todesfallschutz. Für den Sparanteil hängt es von Ihren Zielen ab – Altersvorsorge, Immobilie, Ausbildung der Kinder. Wir analysieren Ihre individuelle Situation und berechnen den optimalen Betrag."
  },
  {
    question: "Kann ich den Vertrag vorzeitig kündigen?",
    answer: "Ja, aber bei vorzeitiger Kündigung erhalten Sie nur den Rückkaufswert, der in den ersten Jahren unter den eingezahlten Beiträgen liegen kann. Besser sind oft Beitragsfreistellung oder Policendarlehen. Wir beraten Sie zu allen Optionen."
  },
  {
    question: "Wie sicher ist mein Geld bei HDI?",
    answer: "HDI gehört zur Talanx-Gruppe, einem der größten Versicherungskonzerne Europas. Die Finanzstärke wird regelmäßig von Ratingagenturen mit Bestnoten bewertet. Zusätzlich greift der gesetzliche Sicherungsfonds Protektor."
  },
  {
    question: "Welche Zusatzoptionen sind sinnvoll?",
    answer: "Je nach Situation empfehlen wir: Berufsunfähigkeits-Zusatzversicherung (BUZ), Unfall-Zusatzversicherung, Dynamik (automatische Beitragserhöhung), Beitragsbefreiung bei Berufsunfähigkeit. Wir prüfen, was für Sie Sinn macht."
  }
];

const processSteps = [
  { step: "1", title: "Bedarfsanalyse", description: "Wir ermitteln Ihren individuellen Absicherungsbedarf und Ihre finanziellen Ziele." },
  { step: "2", title: "Konzeptentwicklung", description: "Basierend auf Ihrer Situation erstellen wir ein maßgeschneidertes Angebot." },
  { step: "3", title: "Gesundheitsprüfung", description: "Je nach Versicherungssumme sind Gesundheitsfragen oder ärztliche Untersuchung erforderlich." },
  { step: "4", title: "Vertragsabschluss", description: "Nach Annahme durch HDI erhalten Sie Ihre Police und der Schutz beginnt." }
];

export default function LebensversicherungPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 text-white border border-white/20">
              <Heart className="w-4 h-4" />
              Lebensversicherung
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">
              Sicherheit für Ihre Familie, Vermögen für Ihre Zukunft
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Die Kapitallebensversicherung vereint das Beste aus zwei Welten:
              Finanzielle Absicherung Ihrer Liebsten und systematischer Vermögensaufbau für Ihre Ziele.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Kostenlose Beratung
              </a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-8 py-4">
                Kostenlosen Beratungstermin sichern
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L1440 100V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Wussten Sie schon?</h3>
                <p className="text-gray-700">
                  <strong>87% der deutschen Familien</strong> wären bei einem Todesfall des Hauptverdieners
                  finanziell nicht ausreichend abgesichert. Die durchschnittliche Versorgungslücke beträgt
                  über <strong>150.000 Euro</strong>. Mit einer Lebensversicherung schließen Sie diese Lücke
                  und bauen gleichzeitig Vermögen auf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">
              <CheckCircle className="w-4 h-4" />
              Ihre Vorteile
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Warum eine Lebensversicherung bei HDI?
            </h2>
            <p className="text-xl text-gray-600">
              Über 120 Jahre Erfahrung und Finanzstärke für Ihre Sicherheit.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-rose-50 transition-colors border border-gray-200 hover:border-rose-200">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-rose-900/20">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">
              <Users className="w-4 h-4" />
              Für wen geeignet?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Die richtige Lösung für jede Lebenssituation
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {targetGroups.map((group, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{group.title}</h3>
                <p className="text-gray-600 mb-6">{group.description}</p>
                <ul className="space-y-3">
                  {group.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">
              <Clock className="w-4 h-4" />
              Der Weg zu Ihrer Absicherung
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              In 4 Schritten zur Lebensversicherung
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 h-full">
                  <span className="text-4xl font-bold text-rose-200 absolute top-4 right-4">{item.step}</span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Teaser */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rose-600 to-pink-700 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Calculator className="w-4 h-4" />
                Bedarfsrechnung
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wie viel Lebensversicherung brauchen Sie?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Die richtige Versicherungssumme hängt von vielen Faktoren ab:
                Familienstand, Einkommen, bestehende Schulden, Anzahl der Kinder.
                Wir berechnen gemeinsam Ihren individuellen Bedarf.
              </p>
              <div className="space-y-4">
                {[
                  "3-5 Jahresgehälter als Grundabsicherung",
                  "Plus offene Kredite und Darlehen",
                  "Plus Ausbildungskosten für Kinder",
                  "Minus bestehende Versicherungen"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Beispielrechnung</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-white/80">Jahreseinkommen</span>
                  <span className="font-bold">50.000 €</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-white/80">× 4 Jahre</span>
                  <span className="font-bold">200.000 €</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-white/80">+ Immobilienkredit</span>
                  <span className="font-bold">150.000 €</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-white/80">+ Kinderausbildung</span>
                  <span className="font-bold">50.000 €</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-white/10 rounded-xl px-4 -mx-4">
                  <span className="font-bold text-lg">Empfohlene Summe</span>
                  <span className="font-bold text-2xl">400.000 €</span>
                </div>
              </div>
              <p className="text-sm text-white/70 mt-4">
                * Dies ist nur ein Beispiel. Ihre individuelle Berechnung erstellen wir gemeinsam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">
                <HelpCircle className="w-4 h-4" />
                Häufige Fragen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Alles zur Lebensversicherung
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-gray-50 rounded-2xl border border-gray-200">
                  <summary className="flex items-center justify-between cursor-pointer p-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-rose-600 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-bg text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sichern Sie Ihre Familie jetzt ab
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Vereinbaren Sie ein kostenloses Beratungsgespräch und erfahren Sie,
              welche Lebensversicherung optimal zu Ihrer Situation passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4">
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-10 py-4">
                Kostenlosen Termin buchen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Verwandte Themen</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Risikolebensversicherung", href: "/service/risikolebensversicherung", desc: "Reiner Todesfallschutz zu günstigen Beiträgen" },
              { title: "Berufsunfähigkeit", href: "/service/berufsunfaehigkeit", desc: "Schützen Sie Ihre Arbeitskraft" },
              { title: "Altersvorsorge", href: "/service/altersvorsorge", desc: "Für einen sorgenfreien Ruhestand" }
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-green-700 font-semibold">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
