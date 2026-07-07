import Link from "next/link";
import {
  Shield, ArrowRight, Phone, CheckCircle, Users, Home,
  TrendingDown, Clock, Award, AlertTriangle, Calculator, HelpCircle, Heart, Wallet
} from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Risikolebensversicherung - HDI Generalvertretung Werner Böhm",
  description: "Günstiger Todesfallschutz für Familien und Kreditabsicherung. Persönliche Beratung in Nürnberg.",
};

const benefits = [
  {
    icon: TrendingDown,
    title: "Günstige Beiträge",
    description: "Reiner Risikoschutz ohne Sparanteil bedeutet niedrige monatliche Kosten bei hohen Versicherungssummen."
  },
  {
    icon: Shield,
    title: "Maximaler Schutz",
    description: "Versicherungssummen bis zu mehreren Millionen Euro für die optimale Absicherung Ihrer Familie."
  },
  {
    icon: Clock,
    title: "Flexible Laufzeiten",
    description: "Wählen Sie die Laufzeit passend zu Ihren Bedürfnissen – von 10 bis über 40 Jahren."
  },
  {
    icon: Heart,
    title: "Partnerabsicherung",
    description: "Mit der verbundenen Risikolebensversicherung schützen Sie sich gegenseitig optimal ab."
  }
];

const useCases = [
  {
    icon: Home,
    title: "Immobilienfinanzierung absichern",
    description: "Banken verlangen oft eine Risikolebensversicherung als Kreditsicherheit. Schützen Sie Ihre Familie davor, das Eigenheim zu verlieren.",
    highlight: "Häufigster Grund für eine Risikolebensversicherung"
  },
  {
    icon: Users,
    title: "Familie mit Kindern absichern",
    description: "Solange Kinder finanziell abhängig sind, sollte der Hauptverdiener abgesichert sein. Die Risikolebensversicherung ist hier die günstigste Lösung.",
    highlight: "Bis das jüngste Kind finanziell unabhängig ist"
  },
  {
    icon: Wallet,
    title: "Geschäftspartner absichern",
    description: "Bei Personengesellschaften kann der Tod eines Partners existenzbedrohend sein. Die überkreuzte Risikolebensversicherung schützt alle Beteiligten.",
    highlight: "Wichtig für Selbstständige und Unternehmer"
  }
];

const variants = [
  {
    title: "Konstante Versicherungssumme",
    description: "Die Summe bleibt über die gesamte Laufzeit gleich. Ideal für Familienschutz.",
    pros: ["Einfach und transparent", "Konstanter Schutz", "Planbare Beiträge"],
    cons: ["Höhere Beiträge als fallende Summe"]
  },
  {
    title: "Fallende Versicherungssumme",
    description: "Die Summe sinkt mit der Zeit – passend zu einem Annuitätendarlehen.",
    pros: ["Günstiger als konstante Summe", "Passt zu Kreditverlauf", "Ideal für Immobilien"],
    cons: ["Weniger Schutz mit der Zeit"]
  },
  {
    title: "Verbundene Leben",
    description: "Eine Police für zwei Personen. Zahlt beim Tod des Erstversterbenden.",
    pros: ["Günstiger als zwei Einzelpolicen", "Gegenseitiger Schutz", "Einfache Verwaltung"],
    cons: ["Nur einmalige Auszahlung"]
  }
];

const faqs = [
  {
    question: "Ab welchem Alter ist eine Risikolebensversicherung sinnvoll?",
    answer: "Sobald Sie Verantwortung für andere tragen – sei es Familie, Immobilienkredit oder Geschäftspartner. Je jünger Sie abschließen, desto günstiger sind die Beiträge. Bei gesunden 30-Jährigen kostet eine Absicherung über 200.000 € oft nur 10-15 € im Monat."
  },
  {
    question: "Was kostet eine Risikolebensversicherung?",
    answer: "Die Beiträge hängen von Alter, Gesundheit, Versicherungssumme und Laufzeit ab. Als Richtwert: Ein gesunder 35-jähriger Nichtraucher zahlt für 250.000 € Versicherungssumme bei 20 Jahren Laufzeit etwa 15-25 € monatlich. Raucher zahlen etwa das Doppelte."
  },
  {
    question: "Muss ich eine Gesundheitsprüfung machen?",
    answer: "Ja, aber meist nur Gesundheitsfragen im Antrag beantworten. Bei hohen Summen (oft ab 300.000 €) kann eine ärztliche Untersuchung erforderlich sein. Wichtig: Beantworten Sie alle Fragen wahrheitsgemäß, sonst riskieren Sie den Versicherungsschutz."
  },
  {
    question: "Kann ich die Versicherungssumme später erhöhen?",
    answer: "Mit einer Nachversicherungsgarantie können Sie bei bestimmten Ereignissen (Heirat, Geburt, Immobilienkauf) die Summe ohne erneute Gesundheitsprüfung erhöhen. HDI bietet diese Option standardmäßig an."
  },
  {
    question: "Was passiert, wenn ich den Vertrag nicht mehr brauche?",
    answer: "Sie können jederzeit kündigen. Da die Risikolebensversicherung keinen Sparanteil hat, gibt es keinen Rückkaufswert. Alternativ können Sie die Summe reduzieren oder den Vertrag beitragsfrei stellen lassen."
  },
  {
    question: "Zahlt die Versicherung auch bei Suizid?",
    answer: "Nach einer Wartezeit von in der Regel 3 Jahren zahlt die Versicherung auch bei Suizid. In den ersten 3 Jahren besteht kein Schutz bei Selbsttötung."
  }
];

const priceExamples = [
  { age: "30 Jahre", sum: "200.000 €", duration: "20 Jahre", price: "ab 12 €/Monat" },
  { age: "35 Jahre", sum: "300.000 €", duration: "25 Jahre", price: "ab 22 €/Monat" },
  { age: "40 Jahre", sum: "250.000 €", duration: "20 Jahre", price: "ab 28 €/Monat" },
  { age: "45 Jahre", sum: "200.000 €", duration: "15 Jahre", price: "ab 32 €/Monat" },
];

export default function RisikolebensversicherungPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 text-white border border-white/20">
              <Shield className="w-4 h-4" />
              Risikolebensversicherung
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">
              Maximaler Schutz für Ihre Familie – zu minimalen Kosten
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Die Risikolebensversicherung ist der günstigste Weg, Ihre Familie im Todesfall
              finanziell abzusichern. Kein Sparanteil, keine versteckten Kosten – nur reiner Schutz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Kostenlose Beratung
              </a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-8 py-4">
                Angebot anfordern
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

      {/* Price Teaser */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Günstiger als Sie denken</h3>
              <p className="text-gray-600">Beispielhafte Monatsbeiträge für Nichtraucher bei HDI</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {priceExamples.map((example, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">{example.age}</p>
                  <p className="text-lg font-bold text-gray-900">{example.sum}</p>
                  <p className="text-xs text-gray-500 mb-2">{example.duration} Laufzeit</p>
                  <p className="text-xl font-bold text-blue-600">{example.price}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              * Unverbindliche Beispiele. Ihr individuelles Angebot erstellen wir gerne für Sie.
            </p>
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
              Warum die Risikolebensversicherung?
            </h2>
            <p className="text-xl text-gray-600">
              Einfach, günstig und effektiv – die kluge Wahl für bewusste Absicherung.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-200">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">
              <Users className="w-4 h-4" />
              Anwendungsfälle
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Wann brauchen Sie eine Risikolebensversicherung?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-bl-xl">
                  {useCase.highlight}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg mt-4">
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variants Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">
              <Award className="w-4 h-4" />
              Tarifvarianten
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Die passende Variante für Ihren Bedarf
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {variants.map((variant, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{variant.title}</h3>
                <p className="text-gray-600 mb-6">{variant.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-green-700 mb-2">Vorteile:</p>
                  <ul className="space-y-2">
                    {variant.pros.map((pro, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-amber-700 mb-2">Zu beachten:</p>
                  <ul className="space-y-2">
                    {variant.cons.map((con, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2 text-sm text-gray-700">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">
                <HelpCircle className="w-4 h-4" />
                Häufige Fragen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Alles zur Risikolebensversicherung
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-2xl border border-gray-200">
                  <summary className="flex items-center justify-between cursor-pointer p-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform flex-shrink-0" />
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
              Schützen Sie Ihre Familie noch heute
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Vereinbaren Sie ein kostenloses Beratungsgespräch.
              Wir finden die optimale Absicherung für Ihre Situation.
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
    </>
  );
}
