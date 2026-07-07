import Link from "next/link";
import { Users, ArrowRight, Phone, CheckCircle, Shield, Heart, Briefcase, PiggyBank, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Familie absichern - HDI Generalvertretung Werner Böhm",
  description: "Rundum-Schutz für Ihre Familie. Die wichtigsten Versicherungen für Eltern und Kinder.",
};

const stats = [
  { value: "87%", label: "unterversichert", desc: "der Familien hätten bei Schicksalsschlag finanzielle Probleme" },
  { value: "150.000€", label: "Versorgungslücke", desc: "durchschnittlich fehlende Absicherung pro Familie" },
  { value: "1 von 4", label: "wird berufsunfähig", desc: "kann den Beruf vorzeitig nicht mehr ausüben" }
];

const essentials = [
  { icon: Shield, title: "Risikolebensversicherung", desc: "Schützt die Familie finanziell bei Tod des Hauptverdieners. Günstig und unverzichtbar.", priority: "Muss", link: "/service/risikolebensversicherung" },
  { icon: Briefcase, title: "Berufsunfähigkeitsversicherung", desc: "Sichert das Einkommen, wenn Sie nicht mehr arbeiten können.", priority: "Muss", link: "/service/berufsunfaehigkeit" },
  { icon: Heart, title: "Private Haftpflicht", desc: "Schützt vor Schadenersatzansprüchen - auch durch Kinder verursacht.", priority: "Muss", link: "/service/sachversicherungen" },
  { icon: PiggyBank, title: "Kinderunfallversicherung", desc: "24-Stunden-Schutz für Kinder, auch in Freizeit und Schule.", priority: "Sinnvoll", link: "/kontakt" }
];

const scenarios = [
  { title: "Der Hauptverdiener stirbt", problem: "Die Familie verliert ihr Haupteinkommen. Miete, Kredit und Lebenshaltung können nicht mehr bezahlt werden.", solution: "Risikolebensversicherung zahlt vereinbarte Summe. Familie kann Lebensstandard halten oder Schulden tilgen." },
  { title: "Ein Elternteil wird berufsunfähig", problem: "Erwerbsminderungsrente vom Staat beträgt durchschnittlich nur 800€. Das reicht nicht.", solution: "BU-Versicherung zahlt monatliche Rente. Das Einkommen ist gesichert." },
  { title: "Kind verursacht Schaden", problem: "Kinder haften ab 7 Jahren (im Verkehr ab 10). Schäden können schnell teuer werden.", solution: "Familienhaftpflicht übernimmt Schadenersatz bis zu mehreren Millionen Euro." }
];

const faqs = [
  { q: "Welche Versicherungen braucht eine Familie wirklich?", a: "Unverzichtbar: Privathaftpflicht (auch für Kinder), Risikolebensversicherung für Hauptverdiener, BU-Versicherung. Sinnvoll: Kinderunfallversicherung, Hausratversicherung. Der Rest hängt von der Situation ab." },
  { q: "Wie hoch sollte die Risikolebensversicherung sein?", a: "Mindestens 3-5 Jahresgehälter + offene Kredite + Ausbildungskosten der Kinder. Bei 50.000€ Gehalt und zwei Kindern oft 300.000-500.000€." },
  { q: "Sind Kinder automatisch mitversichert?", a: "Bei der Haftpflicht ja (Familien- oder Elterntarif). Bei anderen Versicherungen müssen Kinder einzeln versichert werden." },
  { q: "Was kostet eine gute Familienabsicherung?", a: "Für eine vierköpfige Familie: Haftpflicht ca. 80€/Jahr, Risiko-LV ca. 200-400€/Jahr, BU ca. 600-1.200€/Jahr. Wir erstellen ein individuelles Konzept." }
];

export default function FamilieAbsichernPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Users className="w-4 h-4" />
              Familie absichern
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Rundum-Schutz für Ihre Liebsten</h1>
            <p className="text-xl text-white/90 mb-8">87% der Familien sind nicht ausreichend abgesichert. Sorgen Sie vor, bevor es zu spät ist.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4"><Phone className="w-5 h-5" />Kostenlose Beratung</a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-8 py-4">Familien-Check starten<ArrowRight className="w-5 h-5" /></Link>
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
              <div key={i} className="text-center p-6 bg-red-50 rounded-2xl border border-red-100">
                <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-3xl font-bold text-red-600">{s.value}</p>
                <p className="font-semibold text-gray-900">{s.label}</p>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Die wichtigsten Versicherungen für Familien</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Diese Absicherungen sollte jede Familie haben</p>
          <div className="grid md:grid-cols-2 gap-6">
            {essentials.map((e, i) => (
              <Link key={i} href={e.link} className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <e.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700">{e.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${e.priority === 'Muss' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>{e.priority}</span>
                    </div>
                    <p className="text-gray-600">{e.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Was passiert ohne Absicherung?</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {scenarios.map((s, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <h3 className="font-bold text-red-800 mb-2">{s.title}</h3>
                  <p className="text-red-700">{s.problem}</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <h3 className="font-bold text-green-800 mb-2">Mit Absicherung</h3>
                  <p className="text-green-700">{s.solution}</p>
                </div>
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
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Schützen Sie Ihre Familie</h2>
          <p className="text-xl text-white/80 mb-10">Kostenloser Familien-Check - wir zeigen Ihnen, wo Sie abgesichert sind und wo nicht.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4"><Phone className="w-5 h-5" />{siteConfig.contact.phoneDisplay}</a>
            <Link href="/kontakt#beratung" className="btn-white text-lg px-10 py-4">Kostenlosen Beratungstermin sichern<ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
