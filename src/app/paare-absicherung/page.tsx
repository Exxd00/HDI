import Link from "next/link";
import { Heart, ArrowRight, Phone, CheckCircle, Shield, AlertTriangle, Users, Home, Wallet, Scale, FileText, Gem } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Paare absichern - HDI Generalvertretung Werner Böhm",
  description: "Gemeinsame Absicherung für Paare. Risikolebensversicherung, gegenseitiger Schutz und Vorsorge zu zweit.",
};

const marriedVsUnmarried = [
  { benefit: "Hinterbliebenenrente (Staat)", married: "✓ Ja (Witwenrente)", unmarried: "✗ Nein" },
  { benefit: "Erbrecht automatisch", married: "✓ 50% + Pflichtteil", unmarried: "✗ Nichts ohne Testament" },
  { benefit: "Steuerfreie Schenkung", married: "500.000€ alle 10 Jahre", unmarried: "20.000€ alle 10 Jahre" },
  { benefit: "Gemeinsame Krankenversicherung", married: "✓ Familienversicherung GKV", unmarried: "✗ Jeder einzeln" },
  { benefit: "Auskunftsrecht im Krankenhaus", married: "✓ Automatisch", unmarried: "✗ Nur mit Vollmacht" }
];

const risks = [
  {
    icon: AlertTriangle,
    title: "Tod eines Partners",
    married: "Witwenrente vom Staat + Erbe",
    unmarried: "NICHTS - außer mit privater Absicherung und Testament",
    solution: "Risikolebensversicherung mit Überkreuz-Bezugsrecht"
  },
  {
    icon: Home,
    title: "Gemeinsame Immobilie",
    married: "Ehegatte erbt automatisch Anteil",
    unmarried: "Erben des Verstorbenen werden Miteigentümer (!)",
    solution: "Testament + Risikoleben zur Auszahlung der Erben"
  },
  {
    icon: Wallet,
    title: "Berufsunfähigkeit",
    married: "Partner kann unterstützen, aber Einkommensverlust bleibt",
    unmarried: "Keine gegenseitige Unterhaltspflicht",
    solution: "BU für beide Partner - unabhängig vom Familienstand"
  }
];

const insuranceTypes = [
  {
    icon: Shield,
    title: "Verbundene Risikolebensversicherung",
    desc: "Eine Police für beide Partner. Zahlt beim Tod des Erstversterbenden die Versicherungssumme an den Überlebenden.",
    pros: ["20-30% günstiger als zwei Einzelpolicen", "Einfache Verwaltung", "Automatisch gegenseitiger Schutz"],
    cons: ["Nur einmalige Auszahlung", "Bei Trennung kompliziert aufzuteilen"],
    ideal: "Für stabile Partnerschaften mit gemeinsamen Verpflichtungen",
    price: "ab 20€/Monat für beide"
  },
  {
    icon: Users,
    title: "Zwei Einzelpolicen (überkreuzt)",
    desc: "Jeder Partner hat eine eigene Police mit dem anderen als Bezugsberechtigten. Flexibler und unabhängiger.",
    pros: ["Flexibel bei Trennung", "Jeder behält seinen Vertrag", "Unterschiedliche Summen möglich"],
    cons: ["Etwas teurer", "Zwei Verträge zu verwalten"],
    ideal: "Für Paare, die Flexibilität schätzen oder unterschiedliche Absicherungen brauchen",
    price: "ab 25€/Monat zusammen"
  },
  {
    icon: Heart,
    title: "Partner-BU-Absicherung",
    desc: "Beide Partner sichern ihr Einkommen separat ab. Unverzichtbar für gemeinsamen Lebensstandard.",
    pros: ["Schutz für beide Einkommen", "Unabhängig voneinander", "Individuelle Renthöhen"],
    cons: ["Höhere Gesamtkosten", "Beide Gesundheitsprüfungen"],
    ideal: "Für alle Paare mit zwei Einkommen oder gemeinsamen Verpflichtungen",
    price: "individuell nach Beruf"
  }
];

const scenarios = [
  {
    title: "Junges Paar ohne Kinder",
    situation: "Beide berufstätig, Mietwohnung, noch keine großen Verpflichtungen",
    priority: ["Private Haftpflicht (als Paar)", "BU für beide", "Risikoleben bei gemeinsamen Schulden"],
    budget: "ab 150€/Monat"
  },
  {
    title: "Paar mit Immobilienkredit",
    situation: "Gemeinsames Haus/Wohnung, hohe monatliche Belastung",
    priority: ["Risikoleben (mindestens Kreditsumme)", "BU für beide", "Wohngebäude + Hausrat"],
    budget: "ab 250€/Monat"
  },
  {
    title: "Paar mit Kindern",
    situation: "Familie mit Verantwortung, ein Partner evtl. in Teilzeit",
    priority: ["Risikoleben (hohes Summe)", "BU Hauptverdiener", "Kinderabsicherung", "Altersvorsorge"],
    budget: "ab 400€/Monat"
  },
  {
    title: "Unverheiratetes Paar",
    situation: "Gemeinsamer Haushalt, aber keine automatischen Rechte",
    priority: ["Risikoleben mit Partner als Bezugsberechtigten", "Testament (!)", "Vorsorgevollmacht"],
    budget: "ab 200€/Monat + Notarkosten"
  }
];

const checklist = [
  { item: "Haftpflichtversicherung als Paar", importance: "Pflicht", note: "Eine Police für beide, spart 30-50%" },
  { item: "Risikolebensversicherung", importance: "Wichtig", note: "Besonders bei Kredit oder Kindern" },
  { item: "Berufsunfähigkeitsversicherung", importance: "Wichtig", note: "Für beide Partner empfohlen" },
  { item: "Hausratversicherung", importance: "Sinnvoll", note: "Gemeinsame Wohnung absichern" },
  { item: "Testament / Erbvertrag", importance: "Wichtig", note: "Besonders für unverheiratete Paare!" },
  { item: "Vorsorgevollmacht", importance: "Wichtig", note: "Gegenseitiges Entscheidungsrecht" },
  { item: "Patientenverfügung", importance: "Sinnvoll", note: "Medizinische Wünsche festlegen" },
  { item: "Altersvorsorge abstimmen", importance: "Sinnvoll", note: "Gemeinsame Ruhestandsplanung" }
];

const faqs = [
  { q: "Sind unverheiratete Partner automatisch abgesichert?", a: "Nein! Unverheiratete Partner haben keine automatischen Rechte - weder Erbrecht noch Witwenrente noch Auskunftsrecht im Krankenhaus. Sie MÜSSEN selbst vorsorgen mit Testament, Risikoleben, Vorsorgevollmacht und Patientenverfügung." },
  { q: "Verbundene oder zwei einzelne Risikolebensversicherungen?", a: "Die verbundene ist günstiger (20-30%), zahlt aber nur einmal. Bei Trennung ist sie schwer aufzuteilen. Zwei Einzelpolicen sind flexibler und jeder behält seinen Vertrag. Für sehr stabile Partnerschaften ist die verbundene meist die bessere Wahl." },
  { q: "Brauchen wir beide eine BU-Versicherung?", a: "Ja! Wenn einer ausfällt, leidet der gemeinsame Lebensstandard - auch wenn der andere noch arbeitet. Besonders wichtig, wenn Sie Kredit, Kinder oder nur ein Haupteinkommen haben." },
  { q: "Was passiert bei Trennung mit den gemeinsamen Versicherungen?", a: "Haftpflicht: Einer übernimmt, der andere kündigt. Risikoleben verbunden: Sollte gekündigt oder aufgeteilt werden (oft Verlust). Risikoleben einzeln: Bezugsberechtigten ändern. Daher empfehlen wir oft Einzelpolicen." },
  { q: "Müssen wir heiraten für gute Absicherung?", a: "Nein, aber unverheiratete müssen aktiver planen: Testament, Bezugsrechte in Versicherungen, Vorsorgevollmacht. Mit der richtigen Planung können Sie auch unverheiratet optimal abgesichert sein - es erfordert nur mehr eigene Initiative." },
  { q: "Was kostet eine gute Paarabsicherung?", a: "Basis (Haftpflicht + Risikoleben): ab 50€/Monat. Mit BU für beide: ab 200-300€/Monat. Komplett mit Altersvorsorge: ab 400-600€/Monat. Wir erstellen ein individuelles Konzept basierend auf Ihrer Situation und Budget." }
];

export default function PaareAbsicherungPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 text-white border border-white/20">
              <Heart className="w-4 h-4" />
              Paare absichern
            </div>
            <h1 className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold">Gemeinsam abgesichert. Gemeinsam sorgenfrei.</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Liebe ist wunderbar - aber sie schützt nicht vor finanziellen Risiken.
              Besonders unverheiratete Paare haben KEINE automatischen Rechte.
              Wir zeigen Ihnen, wie Sie sich gegenseitig absichern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Kostenlose Beratung
              </a>
              <Link href="/kontakt#beratung" className="btn-white text-lg px-8 py-4">
                Paar-Check starten
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

      {/* Married vs Unmarried Comparison */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              <Gem className="w-4 h-4" />
              Wichtiger Unterschied
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Verheiratet vs. Unverheiratet</h2>
            <p className="text-gray-600">Die rechtlichen Unterschiede sind größer als viele denken.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold text-sm">
              <span>Thema</span>
              <span className="text-center text-green-700">Verheiratet</span>
              <span className="text-center text-red-600">Unverheiratet</span>
            </div>
            {marriedVsUnmarried.map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-t border-gray-100 text-sm items-center">
                <span className="font-medium">{row.benefit}</span>
                <span className={`text-center ${row.married.startsWith('✓') ? 'text-green-600' : 'text-gray-700'}`}>{row.married}</span>
                <span className={`text-center ${row.unmarried.startsWith('✗') ? 'text-red-600 font-semibold' : 'text-gray-700'}`}>{row.unmarried}</span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Wichtig für unverheiratete Paare!</h3>
                <p className="text-red-700">Ohne Heirat haben Sie KEINE automatischen Rechte. Bei Tod des Partners erben Sie nichts, bekommen keine Rente und dürfen im Krankenhaus keine Entscheidungen treffen. Sie MÜSSEN selbst vorsorgen!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Die größten Risiken für Paare</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {risks.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <r.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{r.title}</h3>
                <div className="space-y-3 mb-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-800 font-semibold mb-1">Verheiratet:</p>
                    <p className="text-sm text-green-700">{r.married}</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-xs text-red-800 font-semibold mb-1">Unverheiratet:</p>
                    <p className="text-sm text-red-700">{r.unmarried}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
                  <CheckCircle className="w-5 h-5" />
                  {r.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Absicherungsmodelle für Paare</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {insuranceTypes.map((ins, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                  <ins.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ins.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{ins.desc}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-green-700 mb-2">Vorteile:</p>
                  <ul className="space-y-1">
                    {ins.pros.map((p, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />{p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-amber-700 mb-2">Zu beachten:</p>
                  <ul className="space-y-1">
                    {ins.cons.map((c, ci) => (
                      <li key={ci} className="flex items-start gap-2 text-sm text-gray-700">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />{c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Ideal für: {ins.ideal}</p>
                  <p className="text-xl font-bold text-rose-600">{ins.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Absicherung nach Lebenssituation</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {scenarios.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-white/70 text-sm mb-4">{s.situation}</p>
                <p className="text-sm font-semibold mb-2">Prioritäten:</p>
                <ul className="space-y-2 mb-4">
                  {s.priority.map((p, pi) => (
                    <li key={pi} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-rose-300" />{p}
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-bold">{s.budget}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Checkliste für Paare</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-12 bg-gray-100 p-4 font-bold text-sm">
                <span className="col-span-5">Was</span>
                <span className="col-span-2 text-center">Wichtigkeit</span>
                <span className="col-span-5">Hinweis</span>
              </div>
              {checklist.map((c, i) => (
                <div key={i} className="grid grid-cols-12 p-4 border-t border-gray-100 text-sm items-center">
                  <span className="col-span-5 font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />{c.item}
                  </span>
                  <span className={`col-span-2 text-center px-2 py-1 rounded-full text-xs font-semibold ${
                    c.importance === 'Pflicht' ? 'bg-red-100 text-red-700' :
                    c.importance === 'Wichtig' ? 'bg-amber-100 text-amber-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>{c.importance}</span>
                  <span className="col-span-5 text-gray-600">{c.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Häufige Fragen</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                  <ArrowRight className="w-5 h-5 text-rose-600 group-open:rotate-90 transition-transform flex-shrink-0" />
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
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">Gemeinsam planen. Gemeinsam absichern.</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Kostenlose Beratung für Paare - wir analysieren Ihre Situation und erstellen ein
            maßgeschneidertes Absicherungskonzept. Auch für unverheiratete Partner.
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
