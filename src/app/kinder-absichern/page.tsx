import Link from "next/link";
import { Baby, ArrowRight, Phone, CheckCircle, Shield, AlertTriangle, Heart, GraduationCap, Activity, Stethoscope, Umbrella, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Kinder absichern - HDI Generalvertretung Werner Böhm",
  description: "Optimaler Versicherungsschutz für Kinder. Unfallversicherung, Invaliditätsschutz und frühe BU-Absicherung.",
};

const myths = [
  { myth: "Kinder sind doch über die Schule versichert", fact: "Nur während Schule, Kindergarten und direktem Weg. In der Freizeit (70% der Zeit!) besteht KEIN gesetzlicher Schutz." },
  { myth: "Eine Unfallversicherung reicht", fact: "60% aller Kinderinvaliditäten entstehen durch Krankheiten (Krebs, Diabetes, Hirnhautentzündung) - nicht durch Unfälle!" },
  { myth: "Kinder brauchen keine BU", fact: "Wer als Kind/Schüler abschließt, sichert sich lebenslang günstige Beiträge und einfache Annahme - ohne Gesundheitsfragen zum Beruf." }
];

const coverageGaps = [
  { time: "Schulzeit", hours: "~30 Std/Woche", covered: true, note: "Gesetzlich unfallversichert" },
  { time: "Schulweg", hours: "~5 Std/Woche", covered: true, note: "Gesetzlich unfallversichert" },
  { time: "Freizeit & Ferien", hours: "~133 Std/Woche", covered: false, note: "KEIN gesetzlicher Schutz!" }
];

const insurances = [
  {
    icon: Activity,
    title: "Kinderunfallversicherung",
    priority: "Basis",
    desc: "24-Stunden-Schutz bei Unfällen in Freizeit, Sport und Ferien. Zahlt bei bleibenden Schäden.",
    features: ["Invaliditätsleistung", "Unfallrente möglich", "Kosmetische OPs", "Rooming-in"],
    price: "ab 5€/Monat",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Shield,
    title: "Kinderinvaliditätsversicherung",
    priority: "Empfohlen",
    desc: "Schützt auch bei Invalidität durch KRANKHEIT - nicht nur Unfälle. Die wichtigste Kinderversicherung.",
    features: ["Schutz bei Krankheit", "Einmalzahlung + Rente", "Keine Gesundheitsprüfung*", "Weltweiter Schutz"],
    price: "ab 15€/Monat",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: GraduationCap,
    title: "Schüler-BU",
    priority: "Clever",
    desc: "Früher Einstieg = lebenslang günstige Beiträge. Keine Fragen zum Beruf, einfache Annahme.",
    features: ["Günstige Schülerbeiträge", "Nachversicherung ohne Prüfung", "Berufsstart-Option", "Starter-Rente"],
    price: "ab 20€/Monat",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Stethoscope,
    title: "Krankenzusatz für Kinder",
    priority: "Optional",
    desc: "Bessere Behandlung beim Zahnarzt, Heilpraktiker, Brille. Ergänzt die gesetzliche Krankenversicherung.",
    features: ["Kieferorthopädie", "Brille & Kontaktlinsen", "Heilpraktiker", "Chefarzt bei Unfall"],
    price: "ab 10€/Monat",
    color: "from-cyan-500 to-blue-600"
  }
];

const ageRecommendations = [
  { age: "0-3 Jahre", focus: "Kinderinvaliditätsversicherung", reason: "Krankheitsrisiken wie Hirnhautentzündung, Diabetes Typ 1 können jeden treffen. Frühzeitig absichern!" },
  { age: "3-6 Jahre", focus: "+ Unfallversicherung", reason: "Kinder werden mobiler, Unfallrisiko steigt. Kindergarten deckt nur Betreuungszeit ab." },
  { age: "6-10 Jahre", focus: "+ Schüler-BU prüfen", reason: "Günstigster Einstieg in die BU. Schüler werden ohne Berufsfragen versichert." },
  { age: "10-16 Jahre", focus: "+ Krankenzusatz", reason: "Kieferorthopädie wird oft nötig. GKV zahlt nur Bruchteil. Zahnzusatz lohnt sich." }
];

const comparison = [
  { feature: "Schutz bei Unfall", unfall: "✓", invalid: "✓" },
  { feature: "Schutz bei Krankheit", unfall: "✗", invalid: "✓" },
  { feature: "Einmalzahlung", unfall: "✓", invalid: "✓" },
  { feature: "Monatliche Rente", unfall: "Optional", invalid: "✓" },
  { feature: "Beitrag (Beispiel)", unfall: "5-15€", invalid: "15-40€" }
];

const faqs = [
  { q: "Ab welchem Alter kann ich mein Kind versichern?", a: "Die meisten Versicherungen sind ab Geburt möglich. Bei der Kinderinvaliditätsversicherung oft schon ab dem 1. Lebenstag. Je früher, desto besser - denn Vorerkrankungen können später zum Problem werden." },
  { q: "Unfallversicherung oder Invaliditätsversicherung?", a: "Wenn Sie nur eine wählen können: Die Invaliditätsversicherung! Sie schützt auch bei Krankheiten, die 60% aller Kinderinvaliditäten verursachen. Die Unfallversicherung ist eine gute Ergänzung." },
  { q: "Lohnt sich eine Schüler-BU wirklich?", a: "Ja! Schüler werden ohne Berufsfragen versichert und sichern sich lebenslang günstige Beiträge. Ein 15-Jähriger zahlt für 1.000€ BU-Rente oft nur 25€/Monat - ein 30-jähriger Handwerker das Dreifache." },
  { q: "Sind Kinder nicht über die Familienhaftpflicht versichert?", a: "Ja, aber Haftpflicht zahlt nur Schäden, die Ihr Kind ANDEREN zufügt. Für Schäden am KIND selbst brauchen Sie Unfall- oder Invaliditätsversicherung." },
  { q: "Was kostet ein gutes Absicherungspaket?", a: "Für umfassenden Schutz (Invalidität + Unfall + Krankenzusatz) rechnen Sie mit 30-60€ monatlich. Das ist weniger als ein Handyvertrag - für die wichtigste Absicherung überhaupt." },
  { q: "Mein Kind hat eine Vorerkrankung - geht das trotzdem?", a: "Bei der Kinderinvaliditätsversicherung gibt es oft vereinfachte Gesundheitsfragen oder Tarife ohne Gesundheitsprüfung. Wir finden eine Lösung." }
];

const statistics = [
  { value: "60%", label: "durch Krankheit", desc: "der Kinderinvaliditäten entstehen durch Krankheiten" },
  { value: "70%", label: "Freizeit", desc: "der Wachzeit verbringen Kinder OHNE gesetzlichen Schutz" },
  { value: "200.000", label: "Kinderunfälle/Jahr", desc: "werden in Deutschland behandelt" },
  { value: "50%", label: "günstiger", desc: "ist die BU bei Abschluss als Schüler vs. als Erwachsener" }
];

export default function KinderAbsichernPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Baby className="w-4 h-4" />
              Kinder absichern
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Der beste Schutz für Ihre Kinder</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Kinder sind in der Freizeit nicht gesetzlich unfallversichert.
              Und 60% aller Invaliditäten entstehen durch Krankheiten - nicht durch Unfälle.
              Schützen Sie, was Ihnen am wichtigsten ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Kostenlose Beratung
              </a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-8 py-4">
                Kinder-Check starten
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L1440 100V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statistics.map((s, i) => (
              <div key={i} className="text-center p-4 md:p-6 bg-pink-50 rounded-2xl border border-pink-100">
                <p className="text-2xl md:text-3xl font-bold text-pink-600">{s.value}</p>
                <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
                <p className="text-xs text-gray-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Gap */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              <AlertTriangle className="w-4 h-4" />
              Die Schutzlücke
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Wann sind Kinder wirklich geschützt?</h2>
            <p className="text-gray-600">Der gesetzliche Unfallschutz hat eine große Lücke: die Freizeit.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-100 p-4 font-bold text-sm">
                <span>Situation</span>
                <span className="text-center">Zeit/Woche</span>
                <span className="text-center">Geschützt?</span>
                <span className="text-right">Hinweis</span>
              </div>
              {coverageGaps.map((c, i) => (
                <div key={i} className={`grid grid-cols-4 p-4 border-t border-gray-100 text-sm items-center ${!c.covered ? 'bg-red-50' : ''}`}>
                  <span className="font-medium">{c.time}</span>
                  <span className="text-center text-gray-600">{c.hours}</span>
                  <span className={`text-center font-bold ${c.covered ? 'text-green-600' : 'text-red-600'}`}>
                    {c.covered ? '✓ Ja' : '✗ Nein'}
                  </span>
                  <span className={`text-right text-xs ${!c.covered ? 'text-red-700 font-semibold' : 'text-gray-500'}`}>{c.note}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              <strong>70% der Wachzeit</strong> verbringen Kinder ohne gesetzlichen Unfallschutz!
            </p>
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Irrtümer über Kinderschutz</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {myths.map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="font-bold text-gray-900">"{m.myth}"</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><span className="font-semibold text-green-700">Fakt:</span> {m.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Die wichtigsten Kinderversicherungen</h2>
            <p className="text-gray-600">Von Basis bis Premium - wir finden die richtige Kombination für Ihre Familie.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {insurances.map((ins, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ins.color} flex items-center justify-center shadow-lg`}>
                    <ins.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    ins.priority === 'Empfohlen' ? 'bg-green-100 text-green-700' :
                    ins.priority === 'Basis' ? 'bg-blue-100 text-blue-700' :
                    ins.priority === 'Clever' ? 'bg-amber-100 text-amber-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>{ins.priority}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ins.title}</h3>
                <p className="text-gray-600 mb-4">{ins.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {ins.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />{f}
                    </div>
                  ))}
                </div>
                <p className="text-xl font-bold text-pink-600">{ins.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Unfallversicherung vs. Invaliditätsversicherung</h2>
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold text-sm">
              <span>Merkmal</span>
              <span className="text-center">Unfallvers.</span>
              <span className="text-center text-green-700">Invaliditätsvers.</span>
            </div>
            {comparison.map((c, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-t border-gray-100 text-sm">
                <span className="font-medium">{c.feature}</span>
                <span className={`text-center ${c.unfall === '✗' ? 'text-red-500' : 'text-gray-700'}`}>{c.unfall}</span>
                <span className={`text-center font-medium ${c.invalid === '✗' ? 'text-red-500' : 'text-green-600'}`}>{c.invalid}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            <strong>Unsere Empfehlung:</strong> Die Invaliditätsversicherung ist wichtiger, da sie auch Krankheiten abdeckt.
          </p>
        </div>
      </section>

      {/* Age Recommendations */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-rose-600 text-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Absicherung nach Alter</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {ageRecommendations.map((rec, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-bold">{rec.age}</span>
                </div>
                <p className="font-semibold text-white/90 mb-2">{rec.focus}</p>
                <p className="text-white/70 text-sm">{rec.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Häufige Fragen</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <ArrowRight className="w-5 h-5 text-pink-600 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 hero-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Schützen Sie Ihre Kinder optimal</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Kostenlose Beratung - wir finden die perfekte Absicherung für Ihre Familie.
            Ohne Verkaufsdruck, mit ehrlicher Empfehlung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-10 py-4">
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <Link href="/kontakt#beratung" className="btn-white text-lg px-10 py-4">
              Kostenlosen Beratungstermin sichern
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
