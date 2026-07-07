import Link from "next/link";
import { Home, ArrowRight, Phone, CheckCircle, Shield, AlertTriangle, TrendingDown, Users } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Immobilienkredit absichern - HDI Generalvertretung Werner Böhm",
  description: "Schützen Sie Ihr Eigenheim und Ihre Familie vor Kreditausfall bei Tod oder Berufsunfähigkeit.",
};

const stats = [
  { value: "250.000€", label: "Ø Kreditsumme", desc: "durchschnittliche Baufinanzierung in Deutschland" },
  { value: "30 Jahre", label: "Laufzeit", desc: "typische Dauer eines Immobilienkredits" },
  { value: "1 von 4", label: "BU-Risiko", desc: "kann den Beruf vorzeitig nicht mehr ausüben" }
];

const risks = [
  { icon: AlertTriangle, title: "Tod des Hauptverdieners", desc: "Die Familie kann die Raten nicht mehr zahlen. Im schlimmsten Fall droht Zwangsversteigerung.", solution: "Risikolebensversicherung tilgt den Restkredit" },
  { icon: TrendingDown, title: "Berufsunfähigkeit", desc: "Das Einkommen fällt weg, aber die Kreditraten laufen weiter.", solution: "BU-Versicherung sichert monatliche Rente" },
  { icon: Home, title: "Arbeitslosigkeit", desc: "Vorübergehend kein Einkommen - Raten können nicht bedient werden.", solution: "Restschuldversicherung oder Rücklagen" }
];

const insuranceTypes = [
  { title: "Risikolebensversicherung (konstant)", desc: "Versicherungssumme bleibt über die Laufzeit gleich. Ideal, wenn Sie auch die Familie absichern wollen.", pros: ["Auch für Familie nutzbar", "Höchster Schutz"], price: "ab 15€/Monat" },
  { title: "Risikolebensversicherung (fallend)", desc: "Versicherungssumme sinkt mit dem Kredit. Günstiger, da nur die Restschuld abgesichert wird.", pros: ["Günstigere Beiträge", "Passt zum Kredit"], price: "ab 10€/Monat" },
  { title: "Verbundene Risikolebensversicherung", desc: "Eine Police für beide Partner. Zahlt beim Tod des Erstversterbenden.", pros: ["Günstiger als 2 Policen", "Gegenseitiger Schutz"], price: "ab 20€/Monat" }
];

const faqs = [
  { q: "Verlangt die Bank eine Risikolebensversicherung?", a: "Oft ja, besonders bei hohen Kreditsummen oder knapper Finanzierung. Aber: Sie müssen sie nicht bei der Bank abschließen! Unabhängige Angebote sind oft deutlich günstiger." },
  { q: "Konstante oder fallende Summe?", a: "Fallend ist günstiger und passt zum sinkenden Kredit. Konstant macht Sinn, wenn Sie auch die Familie langfristig absichern wollen oder weitere Kredite planen." },
  { q: "Brauche ich auch eine BU-Versicherung?", a: "Unbedingt! Die Risikolebensversicherung zahlt nur bei Tod. Bei Berufsunfähigkeit läuft der Kredit weiter, aber Sie können nicht mehr arbeiten. Die BU sichert Ihr Einkommen." },
  { q: "Was ist mit der Restschuldversicherung der Bank?", a: "Oft überteuert und mit vielen Ausschlüssen. Eine separate Risikolebensversicherung ist fast immer günstiger und bietet besseren Schutz." }
];

export default function ImmobilienkreditAbsichernPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Home className="w-4 h-4" />
              Immobilienkredit absichern
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Damit Ihr Eigenheim sicher bleibt</h1>
            <p className="text-xl text-white/90 mb-8">Schützen Sie Ihre Familie davor, das Zuhause zu verlieren. Die richtige Absicherung kostet weniger als Sie denken.</p>
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

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-3xl font-bold text-blue-600">{s.value}</p>
                <p className="font-semibold text-gray-900">{s.label}</p>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Diese Risiken sollten Sie kennen</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Was passiert mit Ihrem Kredit, wenn Sie nicht mehr zahlen können?</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {risks.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <r.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 mb-4">{r.desc}</p>
                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  {r.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Welche Absicherung passt?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {insuranceTypes.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t.title}</h3>
                <p className="text-gray-600 mb-4">{t.desc}</p>
                <div className="space-y-2 mb-4">
                  {t.pros.map((p, pi) => (
                    <div key={pi} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />{p}
                    </div>
                  ))}
                </div>
                <p className="text-xl font-bold text-blue-600">{t.price}</p>
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
                  <ArrowRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 hero-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Sichern Sie Ihr Eigenheim ab</h2>
          <p className="text-xl text-white/80 mb-10">Kostenlose Beratung - wir finden die günstigste Lösung für Ihren Kredit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4"><Phone className="w-5 h-5" />{siteConfig.contact.phoneDisplay}</a>
            <Link href="/kontakt#beratung" className="btn-white text-lg px-10 py-4">Kostenlosen Beratungstermin sichern<ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
