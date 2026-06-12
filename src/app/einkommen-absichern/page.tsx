import Link from "next/link";
import { Wallet, ArrowRight, Phone, CheckCircle, Briefcase, AlertTriangle, TrendingDown, Shield } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Einkommen absichern - HDI Generalvertretung Werner Böhm",
  description: "Ihr Einkommen ist Ihr wichtigstes Gut. Schützen Sie es mit der richtigen Absicherung.",
};

const stats = [
  { value: "1 Mio €", label: "Lebenseinkommen", desc: "verdient ein Durchschnittsverdiener bis zur Rente" },
  { value: "25%", label: "BU-Risiko", desc: "werden vor der Rente berufsunfähig" },
  { value: "800€", label: "Staatliche Hilfe", desc: "durchschnittliche Erwerbsminderungsrente" }
];

const calculation = {
  income: "3.000€",
  years: "30 Jahre",
  total: "1.080.000€",
  monthly: "2.400€",
  state: "800€",
  gap: "1.600€"
};

const solutions = [
  { icon: Briefcase, title: "Berufsunfähigkeitsversicherung", desc: "Die wichtigste Einkommensabsicherung. Zahlt monatliche Rente, wenn Sie Ihren Beruf nicht mehr ausüben können.", highlight: "Empfehlung Nr. 1", link: "/service/berufsunfaehigkeit" },
  { icon: Shield, title: "Erwerbsunfähigkeitsversicherung", desc: "Alternative für Berufe mit erschwerter BU-Annahme. Zahlt, wenn Sie gar nicht mehr arbeiten können.", highlight: "Alternative", link: "/kontakt" },
  { icon: TrendingDown, title: "Grundfähigkeitsversicherung", desc: "Zahlt bei Verlust wichtiger Grundfähigkeiten wie Sehen, Hören, Gehen. Günstige Ergänzung.", highlight: "Ergänzung", link: "/kontakt" }
];

const myths = [
  { myth: "Mir passiert das nicht", fact: "Jeder Vierte wird berufsunfähig - die meisten durch Krankheiten, nicht Unfälle." },
  { myth: "Der Staat zahlt doch", fact: "Die Erwerbsminderungsrente beträgt durchschnittlich nur 800€ und hat hohe Hürden." },
  { myth: "Ich kann ja was anderes arbeiten", fact: "Oft nicht möglich oder mit massivem Einkommensverlust verbunden." },
  { myth: "Das ist zu teuer", fact: "Eine gute BU kostet oft nur 2-4% des Bruttoeinkommens - ein kleiner Preis für große Sicherheit." }
];

const faqs = [
  { q: "Wie viel Einkommen sollte ich absichern?", a: "Mindestens 70-80% Ihres Nettoeinkommens. Bei 2.500€ Netto sollten Sie 1.750-2.000€ monatliche BU-Rente vereinbaren." },
  { q: "Was ist der Unterschied BU vs. EU?", a: "Die BU zahlt, wenn Sie IHREN Beruf nicht mehr ausüben können. Die EU zahlt nur, wenn Sie GAR NICHT mehr arbeiten können (weniger als 3 Stunden täglich). BU bietet deutlich besseren Schutz." },
  { q: "Lohnt sich eine Unfallversicherung?", a: "Nur als Ergänzung. 90% der Berufsunfähigkeiten werden durch Krankheiten verursacht, nicht durch Unfälle. Die BU ist wichtiger." },
  { q: "Was kostet eine gute Absicherung?", a: "Eine BU-Versicherung kostet je nach Beruf und Alter etwa 50-150€ monatlich für 2.000€ Rente. Das sind nur 2-4% Ihres Einkommens." }
];

export default function EinkommenAbsichernPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Wallet className="w-4 h-4" />
              Einkommen absichern
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Ihr Einkommen ist Ihr wertvollstes Gut</h1>
            <p className="text-xl text-white/90 mb-8">Bis zur Rente verdienen Sie über 1 Million Euro. Schützen Sie dieses Kapital - denn ohne Einkommen ist alles andere nichts wert.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4"><Phone className="w-5 h-5" />Kostenlose Beratung</a>
              <Link href="/kontakt" className="btn-white text-lg px-8 py-4">Absicherung prüfen<ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto" preserveAspectRatio="none"><path d="M0 100L1440 100V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-6 bg-amber-50 rounded-2xl border border-amber-100">
                <p className="text-3xl font-bold text-amber-600">{s.value}</p>
                <p className="font-semibold text-gray-900">{s.label}</p>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Was Ihr Einkommen wirklich wert ist</h2>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-white/70 mb-2">Beispielrechnung bei {calculation.income} Netto</p>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-white/20">
                    <span>Monatliches Netto</span>
                    <span className="font-bold">{calculation.income}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/20">
                    <span>× {calculation.years} bis Rente</span>
                    <span className="font-bold">{calculation.total}</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white/70 mb-2">Bei Berufsunfähigkeit</p>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-white/20">
                    <span>Sie brauchen</span>
                    <span className="font-bold">{calculation.monthly}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/20">
                    <span>Staat zahlt (Ø)</span>
                    <span className="font-bold text-red-300">{calculation.state}</span>
                  </div>
                  <div className="flex justify-between py-3 bg-white/10 rounded-xl px-4 -mx-4">
                    <span className="font-bold">Ihre Lücke</span>
                    <span className="font-bold text-2xl text-red-300">{calculation.gap}/Monat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Ihre Absicherungsmöglichkeiten</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <Link key={i} href={s.link} className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-4">{s.highlight}</span>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Mythen vs. Fakten</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {myths.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Mythos: "{m.myth}"</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700"><span className="font-semibold">Fakt:</span> {m.fact}</p>
                  </div>
                </div>
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
                  <ArrowRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 hero-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Sichern Sie Ihr Einkommen ab</h2>
          <p className="text-xl text-white/80 mb-10">Kostenlose Beratung - wir zeigen Ihnen die beste Lösung für Ihre Situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4"><Phone className="w-5 h-5" />{siteConfig.contact.phoneDisplay}</a>
            <Link href="/kontakt" className="btn-white text-lg px-10 py-4">Termin vereinbaren<ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
