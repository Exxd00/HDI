import Link from "next/link";
import { Building2, ArrowRight, Phone, CheckCircle, Briefcase, Stethoscope, PiggyBank, Shield, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Selbstständige absichern - HDI Generalvertretung Werner Böhm",
  description: "Keine staatliche Absicherung für Selbstständige. Die wichtigsten Versicherungen für Unternehmer.",
};

const risks = [
  { icon: AlertTriangle, title: "Kein Krankengeld", desc: "Bei Krankheit gibt es kein Einkommen - ab Tag 1" },
  { icon: AlertTriangle, title: "Keine Erwerbsminderungsrente", desc: "Ohne freiwillige Einzahlung kein staatlicher Schutz" },
  { icon: AlertTriangle, title: "Keine Arbeitslosenversicherung", desc: "Wenn das Geschäft scheitert, steht man ohne Hilfe da" },
  { icon: AlertTriangle, title: "Minimale Altersrente", desc: "Ohne Vorsorge droht Altersarmut" }
];

const essentials = [
  { icon: Briefcase, title: "Berufsunfähigkeitsversicherung", priority: "Unverzichtbar", desc: "Ihre Arbeitskraft ist Ihr Kapital. Bei BU gibt es keine staatliche Hilfe.", link: "/service/berufsunfaehigkeit", color: "from-amber-500 to-orange-600" },
  { icon: Stethoscope, title: "Krankenversicherung", priority: "Pflicht", desc: "PKV oder freiwillige GKV - beide mit Krankentagegeld kombinieren!", link: "/service/private-krankenversicherung", color: "from-cyan-500 to-blue-600" },
  { icon: PiggyBank, title: "Altersvorsorge", priority: "Wichtig", desc: "Rürup-Rente mit hoher Steuerersparnis speziell für Selbstständige.", link: "/service/altersvorsorge", color: "from-emerald-500 to-teal-600" },
  { icon: Shield, title: "Betriebshaftpflicht", priority: "Wichtig", desc: "Schützt vor Schadenersatzansprüchen aus der beruflichen Tätigkeit.", link: "/kontakt", color: "from-violet-500 to-purple-600" }
];

const comparison = [
  { benefit: "Krankentagegeld", employed: "6 Wochen Lohnfortzahlung + Krankengeld", self: "Nichts - ab Tag 1 kein Einkommen" },
  { benefit: "Berufsunfähigkeit", employed: "Erwerbsminderungsrente (ca. 800€)", self: "Nichts - kein gesetzlicher Anspruch" },
  { benefit: "Arbeitslosigkeit", employed: "60-67% des Nettos für 12-24 Monate", self: "Nichts - kein Anspruch auf ALG" },
  { benefit: "Rente", employed: "Ca. 48% des Durchschnittseinkommens", self: "Nichts ohne eigene Vorsorge" }
];

const packages = [
  { name: "Basis-Paket", price: "ab 350€/Monat", includes: ["BU-Versicherung 1.500€", "PKV Grundschutz", "Krankentagegeld ab 43. Tag"], ideal: "Für Gründer mit kleinem Budget" },
  { name: "Komfort-Paket", price: "ab 600€/Monat", includes: ["BU-Versicherung 2.500€", "PKV Komfort", "Krankentagegeld ab 22. Tag", "Rürup 200€"], ideal: "Für etablierte Selbstständige" },
  { name: "Premium-Paket", price: "ab 900€/Monat", includes: ["BU-Versicherung 3.500€", "PKV Premium", "Krankentagegeld ab 8. Tag", "Rürup 400€", "Betriebshaftpflicht"], ideal: "Für Gutverdiener" }
];

const faqs = [
  { q: "Was kostet eine gute Absicherung für Selbstständige?", a: "Rechnen Sie mit 15-25% Ihres Nettoeinkommens für Krankenversicherung, BU und Altersvorsorge zusammen. Das klingt viel, aber Angestellte zahlen das auch - nur versteckt im Arbeitgeberanteil." },
  { q: "PKV oder freiwillige GKV?", a: "PKV ist oft günstiger und bietet bessere Leistungen. Aber: Familienversicherung gibt es nicht, jedes Kind kostet extra. Wir rechnen beide Varianten für Sie durch." },
  { q: "Wie wichtig ist Krankentagegeld?", a: "Sehr wichtig! Ohne Krankentagegeld haben Sie bei Krankheit ab Tag 1 kein Einkommen. Empfehlung: Absicherung ab dem 22. oder 43. Tag, davor Rücklagen." },
  { q: "Welche Rürup-Rente ist die beste?", a: "Das hängt von Ihrer Risikobereitschaft ab. Klassische Tarife bieten Garantien, fondsgebundene höhere Renditechancen. Wir finden die passende Lösung." }
];

export default function SelbststaendigeAbsicherungPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Building2 className="w-4 h-4" />
              Selbstständige absichern
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Kein Netz, kein doppelter Boden?</h1>
            <p className="text-xl text-white/90 mb-8">Als Selbstständiger haben Sie null staatliche Absicherung. Keine Lohnfortzahlung, keine Erwerbsminderungsrente, kein ALG. Sie müssen selbst vorsorgen.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4"><Phone className="w-5 h-5" />Kostenlose Beratung</a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-8 py-4">Absicherung planen<ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto" preserveAspectRatio="none"><path d="M0 100L1440 100V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-center mb-8 text-red-600">Ihre Risiken als Selbstständiger</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {risks.map((r, i) => (
              <div key={i} className="text-center p-4 bg-red-50 rounded-2xl border border-red-100">
                <r.icon className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="font-bold text-gray-900 text-sm">{r.title}</p>
                <p className="text-xs text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Angestellte vs. Selbstständige</h2>
          <p className="text-gray-600 text-center mb-12">Was der Staat im Ernstfall zahlt</p>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold text-sm">
              <span>Situation</span>
              <span className="text-center">Angestellte</span>
              <span className="text-center">Selbstständige</span>
            </div>
            {comparison.map((c, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-t border-gray-100 text-sm">
                <span className="font-medium">{c.benefit}</span>
                <span className="text-center text-green-600">{c.employed}</span>
                <span className="text-center text-red-600 font-semibold">{c.self}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Die wichtigsten Versicherungen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {essentials.map((e, i) => (
              <Link key={i} href={e.link} className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${e.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <e.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700">{e.title}</h3>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">{e.priority}</span>
                    </div>
                    <p className="text-gray-600">{e.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Beispiel-Pakete für Selbstständige</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {packages.map((p, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-3xl font-bold mb-4">{p.price}</p>
                <p className="text-white/70 text-sm mb-4">{p.ideal}</p>
                <ul className="space-y-2">
                  {p.includes.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-300" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-white/70 mt-8 text-sm">* Beispielhafte Pakete. Ihr individuelles Angebot erstellen wir nach persönlicher Beratung.</p>
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
                  <ArrowRight className="w-5 h-5 text-green-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 hero-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Absicherung für Selbstständige</h2>
          <p className="text-xl text-white/80 mb-10">Kostenlose Beratung - wir entwickeln ein maßgeschneidertes Konzept für Sie.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4"><Phone className="w-5 h-5" />{siteConfig.contact.phoneDisplay}</a>
            <Link href="/kontakt#beratung" className="btn-white text-lg px-10 py-4">Kostenlosen Beratungstermin sichern<ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
