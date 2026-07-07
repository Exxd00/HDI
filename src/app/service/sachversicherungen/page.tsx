import Link from "next/link";
import { Home, ArrowRight, Phone, CheckCircle, Shield, Scale, Umbrella, Car } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Sachversicherungen - HDI Generalvertretung Werner Böhm",
  description: "Hausrat, Wohngebäude, Haftpflicht, Rechtsschutz - umfassender Schutz für Ihr Hab und Gut.",
};

const insurances = [
  { icon: Home, title: "Hausratversicherung", desc: "Schützt Ihre Einrichtung gegen Feuer, Einbruch, Wasser und Sturm.", features: ["Möbel & Elektrogeräte", "Wertsachen & Schmuck", "Fahrräder", "Außenversicherung"], color: "from-violet-500 to-purple-600" },
  { icon: Shield, title: "Wohngebäudeversicherung", desc: "Schutz für Ihr Haus gegen die großen Gefahren.", features: ["Feuer & Blitzschlag", "Leitungswasser", "Sturm & Hagel", "Elementarschäden"], color: "from-blue-500 to-indigo-600" },
  { icon: Umbrella, title: "Privathaftpflicht", desc: "Schützt Sie vor Schadenersatzansprüchen Dritter.", features: ["Personenschäden", "Sachschäden", "Vermögensschäden", "Mietsachschäden"], color: "from-emerald-500 to-teal-600" },
  { icon: Scale, title: "Rechtsschutzversicherung", desc: "Setzt Ihr Recht durch - auch vor Gericht.", features: ["Verkehrsrechtsschutz", "Privatrechtsschutz", "Berufsrechtsschutz", "Wohnrechtsschutz"], color: "from-amber-500 to-orange-600" }
];

const claims = [
  { title: "Wasserschaden", cost: "5.000 - 50.000€", desc: "Rohrbruch überflutet Wohnung und Nachbarwohnung darunter" },
  { title: "Fahrraddiebstahl", cost: "500 - 3.000€", desc: "E-Bike vor dem Supermarkt gestohlen" },
  { title: "Haftpflichtschaden", cost: "10.000 - 500.000€+", desc: "Fußgänger verletzt - Behandlungskosten und Schmerzensgeld" },
  { title: "Rechtsstreit", cost: "5.000 - 30.000€", desc: "Kündigung angefochten - Anwalts- und Gerichtskosten" }
];

const faqs = [
  { q: "Welche Sachversicherungen brauche ich wirklich?", a: "Privathaftpflicht ist ein Muss für jeden. Hausrat bei wertvoller Einrichtung. Wohngebäude für Hausbesitzer. Rechtsschutz ist optional, aber im Ernstfall Gold wert." },
  { q: "Was kostet eine gute Absicherung?", a: "Privathaftpflicht ab 50€/Jahr, Hausrat je nach Wohnungsgröße 80-200€/Jahr, Wohngebäude je nach Haus 200-600€/Jahr, Rechtsschutz ab 200€/Jahr." },
  { q: "Was sind Elementarschäden?", a: "Hochwasser, Überschwemmung, Erdbeben, Erdrutsch, Schneedruck, Lawinen. Oft nicht automatisch versichert - extra Baustein erforderlich!" },
  { q: "Brauche ich eine Glasversicherung?", a: "Bei großen Fensterflächen oder Wintergärten kann sie sinnvoll sein. Oft günstiger als Zusatz zur Hausrat oder Wohngebäudeversicherung." }
];

export default function SachversicherungenPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-violet-500 via-purple-500 to-violet-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Home className="w-4 h-4" />
              Sachversicherungen
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Umfassender Schutz für Ihr Hab und Gut</h1>
            <p className="text-xl text-white/90 mb-8">Von der Haftpflicht bis zum Rechtsschutz - wir sichern ab, was Ihnen wichtig ist.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4"><Phone className="w-5 h-5" />Kostenlose Beratung</a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-8 py-4">Angebot anfordern<ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto" preserveAspectRatio="none"><path d="M0 100L1440 100V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Unsere Sachversicherungen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {insurances.map((ins, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ins.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <ins.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ins.title}</h3>
                <p className="text-gray-600 mb-4">{ins.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {ins.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />{f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Was kann passieren?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Typische Schadenbeispiele und ihre Kosten ohne Versicherung</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {claims.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <p className="text-2xl font-bold text-violet-600 mb-2">{c.cost}</p>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Häufige Fragen</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <ArrowRight className="w-5 h-5 text-violet-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 hero-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Lassen Sie uns Ihre Absicherung prüfen</h2>
          <p className="text-xl text-white/80 mb-10">Kostenloser Versicherungscheck - wir finden Lücken und Einsparpotenziale.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4"><Phone className="w-5 h-5" />{siteConfig.contact.phoneDisplay}</a>
            <Link href="/kontakt#beratung" className="btn-white text-lg px-10 py-4">Kostenlosen Termin buchen<ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
