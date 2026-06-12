import Link from "next/link";
import { Stethoscope, ArrowRight, Phone, CheckCircle, Users, Clock, Shield, Star } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Private Krankenversicherung - HDI Generalvertretung Werner Böhm",
  description: "Premium-Gesundheitsversorgung mit der PKV. Chefarztbehandlung, Einzelzimmer, kurze Wartezeiten.",
};

const benefits = [
  { icon: Star, title: "Chefarztbehandlung", desc: "Zugang zu den besten Spezialisten bei Krankenhausaufenthalten" },
  { icon: Shield, title: "Einzelzimmer", desc: "Privatsphäre und Ruhe für schnellere Genesung" },
  { icon: Clock, title: "Kurze Wartezeiten", desc: "Schnellere Termine bei Fachärzten und Spezialisten" },
  { icon: Users, title: "Weltweiter Schutz", desc: "Optimale Versorgung auch im Ausland" }
];

const comparison = [
  { feature: "Arztauswahl", gkv: "Eingeschränkt", pkv: "Freie Arztwahl" },
  { feature: "Wartezeiten", gkv: "Oft mehrere Wochen", pkv: "Schnelle Termine" },
  { feature: "Krankenhaus", gkv: "Mehrbettzimmer", pkv: "Ein-/Zweibettzimmer" },
  { feature: "Zahnersatz", gkv: "Ca. 60% Festzuschuss", pkv: "Bis 100% Erstattung" },
  { feature: "Beitragsentwicklung", gkv: "Einkommensabhängig", pkv: "Risikoabhängig" }
];

const targetGroups = [
  { title: "Selbstständige", desc: "Keine Wahl - müssen sich privat oder freiwillig gesetzlich versichern." },
  { title: "Angestellte über Grenze", desc: "Bei einem Jahresbruttoeinkommen über 77.400€ (2026) ist ein Wechsel in die PKV möglich." },
  { title: "Beamte", desc: "Beihilfe vom Staat + PKV-Restkostenversicherung ist die günstigste Lösung." }
];

const faqs = [
  { q: "Wer kann in die PKV wechseln?", a: "Selbstständige und Freiberufler jederzeit, Angestellte ab einem Jahresbruttoeinkommen von 77.400€ (2026) bzw. 6.450€ monatlich, sowie Beamte und Studenten mit Sonderregelungen." },
  { q: "Sind die Beiträge im Alter bezahlbar?", a: "Mit Altersrückstellungen, Beitragsentlastungstarifen und dem gesetzlichen Zuschlag werden Beiträge im Alter stabilisiert. Wir zeigen Ihnen, worauf Sie achten müssen." },
  { q: "Was ist mit meiner Familie?", a: "Anders als in der GKV muss jedes Familienmitglied einzeln versichert werden. Für Kinder gibt es günstige Tarife. Wir berechnen die Gesamtkosten." },
  { q: "Kann ich zurück in die GKV?", a: "Unter 55 Jahren durch Unterschreiten der Einkommensgrenze oder bei Arbeitslosigkeit möglich. Über 55 ist ein Wechsel sehr schwierig." }
];

export default function PrivateKrankenversicherungPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Stethoscope className="w-4 h-4" />
              Private Krankenversicherung
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Premium-Gesundheitsversorgung für Sie</h1>
            <p className="text-xl text-white/90 mb-8">Chefarztbehandlung, Einzelzimmer, kurze Wartezeiten - mit der privaten Krankenversicherung erhalten Sie die bestmögliche medizinische Versorgung.</p>
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Ihre Vorteile mit der PKV</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-cyan-200 hover:bg-cyan-50 transition-all text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <b.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">GKV vs. PKV im Vergleich</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold text-sm">
              <span>Leistung</span>
              <span className="text-center">GKV</span>
              <span className="text-center text-cyan-600">PKV</span>
            </div>
            {comparison.map((c, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-t border-gray-100 text-sm">
                <span className="font-medium">{c.feature}</span>
                <span className="text-center text-gray-600">{c.gkv}</span>
                <span className="text-center text-cyan-600 font-medium">{c.pkv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Für wen ist die PKV?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {targetGroups.map((t, i) => (
              <div key={i} className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.title}</h3>
                <p className="text-gray-600">{t.desc}</p>
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
                  <ArrowRight className="w-5 h-5 text-cyan-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 hero-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Ist die PKV das Richtige für Sie?</h2>
          <p className="text-xl text-white/80 mb-10">Wir prüfen Ihre Situation und beraten Sie ehrlich zu allen Vor- und Nachteilen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4"><Phone className="w-5 h-5" />{siteConfig.contact.phoneDisplay}</a>
            <Link href="/kontakt" className="btn-white text-lg px-10 py-4">Online Termin<ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
