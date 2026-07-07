import { HeroSection } from "@/components/home/HeroSection";
import Link from "next/link";
import {
  ArrowRight, Phone, Heart, Shield, Briefcase, PiggyBank, Stethoscope, Home,
  Users, Building2, Wallet, Baby, CheckCircle, AlertTriangle, TrendingUp,
  Clock, Award, MapPin, Mail, ChevronRight, Star, Zap, Target
} from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

const services = [
  { icon: Heart, title: "Lebensversicherung", description: "Finanzielle Absicherung für Ihre Liebsten im Ernstfall.", href: "/service/lebensversicherung", color: "from-rose-500 to-pink-600" },
  { icon: Shield, title: "Risikolebensversicherung", description: "Reiner Todesfallschutz zu günstigen Beiträgen für Familien.", href: "/service/risikolebensversicherung", color: "from-blue-500 to-indigo-600" },
  { icon: Briefcase, title: "Berufsunfähigkeit", description: "Schützen Sie Ihr wertvollstes Kapital: Ihre Arbeitskraft.", href: "/service/berufsunfaehigkeit", color: "from-amber-500 to-orange-600" },
  { icon: PiggyBank, title: "Altersvorsorge", description: "Sorgen Sie heute für einen sorgenfreien Ruhestand morgen.", href: "/service/altersvorsorge", color: "from-emerald-500 to-teal-600" },
  { icon: Stethoscope, title: "Private Krankenversicherung", description: "Premium-Gesundheitsversorgung mit kürzeren Wartezeiten.", href: "/service/private-krankenversicherung", color: "from-cyan-500 to-blue-600" },
  { icon: Home, title: "Sachversicherungen", description: "Umfassender Schutz für Ihr Hab und Gut.", href: "/service/sachversicherungen", color: "from-violet-500 to-purple-600" },
];

const decisions = [
  { icon: Users, title: "Familie absichern", description: "Rundum-Schutz für die Menschen, die Ihnen am wichtigsten sind", href: "/familie-absichern", stat: "87%", statLabel: "der Familien sind unterversichert" },
  { icon: Home, title: "Immobilienkredit absichern", description: "Damit Ihr Eigenheim auch bei Schicksalsschlägen sicher bleibt", href: "/immobilienkredit-absichern", stat: "250k€", statLabel: "durchschnittliche Kreditsumme" },
  { icon: Wallet, title: "Einkommen absichern", description: "Ihr Einkommen ist Ihr wichtigstes Gut – schützen Sie es", href: "/einkommen-absichern", stat: "1 von 4", statLabel: "wird berufsunfähig" },
  { icon: Building2, title: "Selbstständige absichern", description: "Maßgeschneiderte Lösungen für Unternehmer und Freiberufler", href: "/selbststaendige-absicherung", stat: "0€", statLabel: "gesetzlicher Schutz" },
];

const faqs = [
  { q: "Was kostet eine Beratung bei Ihnen?", a: "Die Erstberatung ist komplett kostenlos und unverbindlich. Wir analysieren Ihre Situation und zeigen Ihnen mögliche Lösungen auf – ohne Verkaufsdruck." },
  { q: "Wie läuft eine Beratung ab?", a: "In einem persönlichen Gespräch erfassen wir Ihre Situation, analysieren bestehende Verträge und entwickeln ein maßgeschneidertes Konzept für Ihre Absicherung." },
  { q: "Beraten Sie nur HDI-Produkte?", a: "Als HDI Generalvertretung vermitteln wir vorrangig Produkte der HDI Versicherung AG, die wir aus Überzeugung vertreten." },
  { q: "Kommen Sie auch zu mir nach Hause?", a: "Selbstverständlich! Wir beraten Sie gerne bei Ihnen zu Hause, in unserem Büro oder per Videocall – ganz wie es Ihnen am besten passt." },
];

// FAQ structured data for SEO & AI tools
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />

      {/* Problem-Lösung Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent" />
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="section-label text-xs md:text-sm">
                <AlertTriangle className="w-3 h-3 md:w-4 md:h-4" />
                Das Problem
              </span>
              <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Die meisten Deutschen sind <span className="gradient-text">nicht ausreichend</span> abgesichert</h2>
              <div className="space-y-4 md:space-y-6 text-gray-600 text-sm md:text-lg">
                <p>
                  <strong className="text-gray-900">87% der Familien</strong> hätten bei einem Schicksalsschlag finanzielle Probleme.
                  Die staatlichen Leistungen reichen bei weitem nicht aus.
                </p>
                <p className="hidden md:block">
                  Viele Menschen wissen nicht, welche Risiken wirklich relevant sind – und versichern entweder das Falsche oder zu wenig.
                </p>
              </div>

              <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-6">
                {[
                  { value: "800€", label: "Ø Erwerbsminderungsrente" },
                  { value: "25%", label: "werden berufsunfähig" },
                  { value: "40%", label: "Rentenlücke" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-2 md:p-4 bg-red-50 rounded-xl md:rounded-2xl border border-red-100">
                    <p className="text-lg md:text-2xl font-bold text-red-600">{stat.value}</p>
                    <p className="text-[10px] md:text-xs text-red-700/70 mt-0.5 md:mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 text-white">
                <span className="inline-flex items-center gap-2 px-2 py-1 md:px-3 md:py-1 bg-white/20 rounded-full text-xs md:text-sm mb-4 md:mb-6">
                  <Zap className="w-3 h-3 md:w-4 md:h-4" />
                  Unsere Lösung
                </span>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Individuelle Beratung statt Standardlösungen</h3>
                <p className="text-white/90 text-sm md:text-lg mb-5 md:mb-8">
                  Wir analysieren Ihre persönliche Situation und entwickeln eine Absicherungsstrategie,
                  die wirklich zu Ihnen passt.
                </p>

                <div className="space-y-2 md:space-y-4">
                  {[
                    "Kostenlose Bedarfsanalyse",
                    "Transparente Empfehlungen",
                    "Langfristige Betreuung"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-white/20">
                  <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent w-full justify-center text-sm md:text-base py-3 md:py-4">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    Kostenlose Beratung starten
                  </a>
                </div>
              </div>

              {/* Floating element - hidden on mobile */}
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-green-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-500">Individuelle Lösungen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <span className="section-label text-xs md:text-sm">
              <Shield className="w-3 h-3 md:w-4 md:h-4" />
              Unsere Leistungen
            </span>
            <h2 className="mb-3 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Umfassender Versicherungsschutz</h2>
            <p className="text-sm md:text-xl text-gray-600">
              Von der Absicherung Ihrer Familie bis zur Altersvorsorge.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group card-elevated p-4 md:p-8 hover:border-green-200"
              >
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3 group-hover:text-green-700 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-xs md:text-base mb-3 md:mb-6 line-clamp-2">{service.description}</p>
                <div className="flex items-center gap-1 md:gap-2 text-green-700 font-semibold text-xs md:text-base">
                  <span>Mehr</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Link href="/leistungen" className="btn-secondary text-sm md:text-base py-3 px-5 md:py-4 md:px-7">
              Alle Leistungen
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Decisions Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <span className="section-label text-xs md:text-sm">
              <Users className="w-3 h-3 md:w-4 md:h-4" />
              Ihre Situation
            </span>
            <h2 className="mb-3 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Finden Sie die passende Absicherung</h2>
            <p className="text-sm md:text-xl text-gray-600">
              Jede Lebenssituation bringt eigene Risiken.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {decisions.map((decision, idx) => (
              <Link
                key={idx}
                href={decision.href}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-3xl p-4 md:p-8 hover:from-green-50 hover:to-green-100 transition-all duration-500 border border-gray-200 hover:border-green-200"
              >
                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg shadow-green-900/20 group-hover:scale-110 transition-transform duration-300">
                      <decision.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-green-700 transition-colors">{decision.title}</h3>
                    <p className="text-gray-600 text-xs md:text-base mb-2 md:mb-4 line-clamp-2">{decision.description}</p>
                    <div className="flex items-center gap-1 md:gap-2 text-green-700 font-semibold text-xs md:text-base">
                      <span>Info</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Stat Badge - hidden on mobile */}
                <div className="hidden md:block absolute top-6 right-6 bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                  <p className="text-lg font-bold text-green-700">{decision.stat}</p>
                  <p className="text-xs text-gray-500">{decision.statLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase mb-4 md:mb-6 bg-white/10 text-green-400">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              So funktioniert es
            </span>
            <h2 className="text-white mb-3 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">In 4 Schritten zur Absicherung</h2>
            <p className="text-sm md:text-xl text-gray-400">
              Einfach, transparent und ohne Verpflichtung.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {[
              { num: "01", title: "Kontakt", desc: "Rufen Sie an oder nutzen Sie unser Formular", icon: Phone },
              { num: "02", title: "Analyse", desc: "Wir erfassen Ihre Situation und Wünsche", icon: Target },
              { num: "03", title: "Konzept", desc: "Sie erhalten ein maßgeschneidertes Angebot", icon: Briefcase },
              { num: "04", title: "Betreuung", desc: "Wir sind auch nach dem Abschluss für Sie da", icon: Users },
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <span className="text-2xl md:text-5xl font-bold text-green-500/30 absolute top-2 right-2 md:top-4 md:right-4">{step.num}</span>
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-xs md:text-base line-clamp-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-sm md:text-lg py-3 px-5 md:py-4 md:px-8">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <Link href="/kontakt#beratung" className="btn-white text-sm md:text-lg py-3 px-5 md:py-4 md:px-8">
                Kostenlosen Termin buchen
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Google Bewertungen */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label text-xs md:text-sm">
              <Star className="w-3 h-3 md:w-4 md:h-4" />
              Google-Bewertungen
            </span>
            <h2 className="mb-3 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Das sagen unsere Kunden</h2>
            <p className="text-sm md:text-xl text-gray-600">Echte Bewertungen unserer Kundinnen und Kunden auf Google.</p>
          </div>

          <div className="grid lg:grid-cols-[20rem,1fr] gap-5 md:gap-8 max-w-5xl mx-auto">
            {/* Rating Summary */}
            <div className="card-elevated p-6 md:p-8 flex flex-col items-center text-center">
              <p className="text-5xl md:text-6xl font-bold text-gray-900 leading-none">{siteConfig.reviews.ratingDisplay}</p>
              <div className="flex items-center gap-1 my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 md:w-6 md:h-6 ${i < Math.round(siteConfig.reviews.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                ))}
              </div>
              <p className="text-gray-600 text-sm md:text-base">{siteConfig.reviews.count} Bewertungen auf Google</p>

              <div className="w-full mt-5 md:mt-6 space-y-1.5">
                {siteConfig.reviews.distribution.map((d) => (
                  <div key={d.stars} className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 text-gray-500">{d.stars}</span>
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${d.percent}%` }} />
                    </div>
                    <span className="w-8 text-right text-gray-400">{d.percent}%</span>
                  </div>
                ))}
              </div>

              <a href={siteConfig.reviews.url} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-5 md:mt-6 text-sm py-2.5 px-5 w-full justify-center">
                Auf Google ansehen
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3 md:gap-4">
              {siteConfig.reviews.highlights.map((h, idx) => (
                <div key={idx} className="card-elevated p-5 md:p-6 flex items-start gap-4">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/20">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">{h.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{h.desc}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl bg-gradient-to-br from-green-600 to-green-700 p-5 md:p-6 text-center text-white">
                <p className="text-sm md:text-base text-white/90 mb-3">
                  Überzeugen Sie sich selbst von unserer Beratung.
                </p>
                <a href={`tel:${siteConfig.contact.phone}`} className="btn-white text-sm py-2.5 px-5 inline-flex">
                  <Phone className="w-4 h-4" />
                  Jetzt beraten lassen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-green-700 to-green-800 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-5xl md:text-8xl lg:text-9xl font-bold">HDI</span>
                    <p className="text-sm md:text-xl mt-1 md:mt-2 text-white/80">Generalvertretung</p>
                    <div className="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-white/20 inline-block">
                      <p className="text-xl md:text-3xl font-bold">Werner Böhm</p>
                      <p className="text-white/70 text-xs md:text-base mt-1 md:mt-2">Versicherungsfachmann (IHK)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - hidden on mobile */}
              <div className="hidden md:block absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Award className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">25+ Jahre</p>
                    <p className="text-gray-500">Erfahrung in der Region</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="section-label text-xs md:text-sm">
                <Users className="w-3 h-3 md:w-4 md:h-4" />
                Über uns
              </span>
              <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Persönliche Beratung mit Erfahrung</h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-lg mb-6 md:mb-8">
                <p>
                  Als HDI Generalvertretung verbinden wir die Stärke eines großen Versicherers mit
                  der persönlichen Betreuung vor Ort.
                </p>
                <p className="hidden md:block">
                  Seit über 25 Jahren beraten wir Familien und Unternehmen in Nürnberg und Umgebung.
                  Unser Ziel: Versicherung verständlich machen und Lösungen finden, die wirklich passen.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-8">
                {[
                  { icon: Clock, text: "25+ Jahre" },
                  { icon: Users, text: "500+ Kunden" },
                  { icon: Award, text: "IHK zertifiziert" },
                  { icon: MapPin, text: "In Nürnberg" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-200">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-green-700" />
                    <span className="font-medium text-gray-900 text-xs md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/ueber-uns" className="btn-primary text-sm md:text-base py-3 px-5 md:py-4 md:px-7">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <span className="section-label text-xs md:text-sm">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                Häufige Fragen
              </span>
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl">Was Sie wissen sollten</h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group card-elevated">
                  <summary className="flex items-center justify-between cursor-pointer p-4 md:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">{faq.q}</span>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-green-700 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-600 text-sm md:text-base">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">Haben Sie weitere Fragen?</p>
              <Link href="/kontakt#beratung" className="btn-secondary text-sm md:text-base py-3 px-5 md:py-4 md:px-7">
                Kostenlose Beratung anfragen
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 lg:py-28 hero-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Bereit für Ihre Beratung?</h2>
            <p className="text-sm md:text-xl text-white/80 mb-6 md:mb-10">
              Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-sm md:text-lg px-6 md:px-10 py-3 md:py-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <Link href="/kontakt#beratung" className="btn-white text-sm md:text-lg px-6 md:px-10 py-3 md:py-4">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Kostenlose Beratung anfragen
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-8 text-white/60 text-xs md:text-sm">
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                <span>Kostenlos</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                <span>Unverbindlich</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                <span>Persönlich</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
