import Link from "next/link";
import { PiggyBank, ArrowRight, Phone, CheckCircle, TrendingUp, Shield, Clock, Wallet } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Altersvorsorge - HDI Generalvertretung Werner Böhm",
  description: "Private Altersvorsorge für einen sorgenfreien Ruhestand. Riester, Rürup, bAV und mehr.",
};

const stats = [
  { value: "40%", label: "Rentenlücke", desc: "Unterschied zwischen letztem Gehalt und Rente" },
  { value: "1.500€", label: "Ø Rente", desc: "Durchschnittliche gesetzliche Rente" },
  { value: "67", label: "Renteneintritt", desc: "Reguläres Rentenalter in Deutschland" },
  { value: "20+", label: "Jahre Ruhestand", desc: "Durchschnittliche Rentenbezugsdauer" }
];

const products = [
  { icon: Shield, title: "Riester-Rente", desc: "Staatlich gefördert mit Zulagen und Steuervorteilen. Ideal für Angestellte und Familien.", features: ["175€ Grundzulage", "300€ pro Kind", "Steuerersparnis"] },
  { icon: TrendingUp, title: "Rürup-Rente", desc: "Basisrente mit hoher Steuerersparnis. Besonders für Selbstständige und Gutverdiener.", features: ["Bis 27.566€ absetzbar", "Insolvenzsicher", "Flexible Einzahlung"] },
  { icon: Wallet, title: "Betriebliche Altersvorsorge", desc: "Direkt vom Bruttolohn - spart Steuern und Sozialabgaben.", features: ["Arbeitgeberzuschuss", "Steuerersparnis", "Sozialabgaben sparen"] },
  { icon: PiggyBank, title: "Private Rentenversicherung", desc: "Flexibler Vermögensaufbau ohne staatliche Einschränkungen.", features: ["Freie Verfügung", "Kapitaloption", "Flexible Gestaltung"] }
];

const faqs = [
  { q: "Wann sollte ich mit der Altersvorsorge beginnen?", a: "Je früher, desto besser! Durch den Zinseszinseffekt macht jedes Jahr einen großen Unterschied. Wer mit 25 startet, muss nur halb so viel sparen wie jemand, der mit 35 beginnt." },
  { q: "Wie viel sollte ich für die Rente sparen?", a: "Als Faustregel: 10-15% des Bruttoeinkommens. Wir berechnen Ihre persönliche Rentenlücke und den notwendigen Sparbetrag." },
  { q: "Riester oder Rürup - was ist besser?", a: "Das hängt von Ihrer Situation ab. Angestellte mit Kindern profitieren oft mehr von Riester, Selbstständige und Gutverdiener von Rürup. Wir beraten Sie individuell." },
  { q: "Lohnt sich die betriebliche Altersvorsorge?", a: "Ja, besonders wenn der Arbeitgeber etwas dazu gibt. Sie sparen Steuern und Sozialabgaben. Der Pflicht-Arbeitgeberzuschuss beträgt mindestens 15%." }
];

export default function AltersvorsorgePage() {
  return (
    <>
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <PiggyBank className="w-4 h-4" />
              Altersvorsorge
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Heute vorsorgen. Morgen genießen.</h1>
            <p className="text-xl text-white/90 mb-8">Die gesetzliche Rente reicht nicht aus. Schließen Sie Ihre Rentenlücke mit der richtigen privaten Vorsorge.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4"><Phone className="w-5 h-5" />Kostenlose Beratung</a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-8 py-4">Rentenlücke berechnen<ArrowRight className="w-5 h-5" /></Link>
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
              <div key={i} className="text-center p-4 md:p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-2xl md:text-4xl font-bold text-emerald-600">{s.value}</p>
                <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
                <p className="text-xs text-gray-600 hidden md:block">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Unsere Vorsorgelösungen</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Jede Lebenssituation erfordert die passende Strategie. Wir finden die optimale Kombination für Sie.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg">
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.features.map((f, fi) => (
                    <span key={fi} className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4" />{f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Der Zinseszins-Effekt</h2>
              <p className="text-xl text-white/90 mb-6">Zeit ist Ihr größter Verbündeter bei der Altersvorsorge. Je früher Sie starten, desto mehr arbeitet Ihr Geld für Sie.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <Clock className="w-8 h-8" />
                  <div>
                    <p className="font-bold">Start mit 25 Jahren</p>
                    <p className="text-white/80">100€/Monat = ca. 180.000€ mit 67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <Clock className="w-8 h-8" />
                  <div>
                    <p className="font-bold">Start mit 35 Jahren</p>
                    <p className="text-white/80">100€/Monat = ca. 95.000€ mit 67</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <p className="text-5xl md:text-7xl font-bold mb-4">85.000€</p>
              <p className="text-xl">mehr Kapital durch 10 Jahre früheren Start</p>
              <p className="text-white/70 mt-4 text-sm">Bei angenommener Rendite von 5% p.a.</p>
            </div>
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
                  <ArrowRight className="w-5 h-5 text-emerald-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 hero-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Starten Sie jetzt Ihre Altersvorsorge</h2>
          <p className="text-xl text-white/80 mb-10">Wir berechnen Ihre Rentenlücke und zeigen Ihnen den optimalen Weg.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4"><Phone className="w-5 h-5" />{siteConfig.contact.phoneDisplay}</a>
            <Link href="/kontakt#beratung" className="btn-white text-lg px-10 py-4">Kostenlosen Termin buchen<ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
