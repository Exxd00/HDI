import Link from "next/link";
import { Briefcase, ArrowRight, Phone, CheckCircle, Brain, Bone, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Berufsunfähigkeitsversicherung - HDI Generalvertretung Werner Böhm",
  description: "Schützen Sie Ihre Arbeitskraft mit der BU-Versicherung von HDI. Persönliche Beratung in Nürnberg.",
};

const stats = [
  { value: "25%", label: "werden berufsunfähig" },
  { value: "800€", label: "Ø Erwerbsminderungsrente" },
  { value: "37%", label: "psychische Ursachen" },
  { value: "47 J.", label: "Durchschnittsalter" }
];

const causes = [
  { icon: Brain, title: "Psychische Erkrankungen", pct: "37%", desc: "Depression, Burnout, Angststörungen" },
  { icon: Bone, title: "Bewegungsapparat", pct: "24%", desc: "Rücken, Bandscheibe, Gelenke" },
  { icon: Heart, title: "Herz-Kreislauf", pct: "9%", desc: "Herzinfarkt, Schlaganfall" }
];

const benefits = [
  "Verzicht auf abstrakte Verweisung",
  "Weltweiter Versicherungsschutz",
  "Nachversicherungsgarantie",
  "Leistung ab 50% BU",
  "Rückwirkende Rentenzahlung",
  "Dynamischer Inflationsschutz"
];

const faqs = [
  { q: "Ab wann BU abschließen?", a: "So früh wie möglich! Je jünger, desto günstiger die Beiträge und einfacher die Annahme." },
  { q: "Wie hoch sollte die BU-Rente sein?", a: "70-80% Ihres Nettoeinkommens. Bei 2.500€ Netto mindestens 1.750-2.000€ absichern." },
  { q: "Was ist abstrakte Verweisung?", a: "HDI verzichtet darauf - Sie sind für IHREN konkreten Beruf versichert, nicht irgendeinen anderen." },
  { q: "Warum reicht der Staat nicht?", a: "Die Erwerbsminderungsrente beträgt durchschnittlich nur 800€ - unmöglich davon zu leben." }
];

export default function BerufsunfaehigkeitPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Briefcase className="w-4 h-4" />
              Berufsunfähigkeitsversicherung
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Ihre Arbeitskraft ist Ihr wertvollstes Kapital</h1>
            <p className="text-xl text-white/90 mb-8">Jeder Vierte wird berufsunfähig. Die staatliche Absicherung reicht nicht. Sichern Sie Ihren Lebensstandard mit HDI.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4"><Phone className="w-5 h-5" />Kostenlose Beratung</a>
              <Link href="/kontakt" className="btn-white text-lg px-8 py-4">Angebot anfordern<ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto" preserveAspectRatio="none"><path d="M0 100L1440 100V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-4 md:p-6 bg-amber-50 rounded-2xl border border-amber-100">
                <p className="text-2xl md:text-4xl font-bold text-amber-600">{s.value}</p>
                <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Ursachen für Berufsunfähigkeit</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {causes.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <c.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold text-amber-600">{c.pct}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-2">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">HDI BU-Qualitätsmerkmale</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-5 bg-gray-50 rounded-xl border border-gray-200">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Häufige Fragen</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-200">
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
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Schützen Sie Ihre Arbeitskraft</h2>
          <p className="text-xl text-white/80 mb-10">Kostenlose Beratung - wir finden die optimale BU-Lösung für Sie.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4"><Phone className="w-5 h-5" />{siteConfig.contact.phoneDisplay}</a>
            <Link href="/kontakt" className="btn-white text-lg px-10 py-4">Online Termin<ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
