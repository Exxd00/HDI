import Link from "next/link";
import {
  Phone, ArrowRight, MapPin, CheckCircle, Users, Briefcase, Heart, Shield,
  PiggyBank, Stethoscope, Home, Globe, User, Target, ChevronRight, Mail, Building2,
} from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";
import type { LocationData } from "@/lib/data/regions";

const targetGroups = [
  { icon: User, title: "Privatkunden", desc: "Solide Grundabsicherung für jede Lebensphase." },
  { icon: Users, title: "Familien", desc: "Schutz für die Menschen, die Ihnen wichtig sind." },
  { icon: Briefcase, title: "Selbstständige", desc: "Absicherung ohne gesetzliches Sicherheitsnetz." },
  { icon: Target, title: "Berufstätige", desc: "Arbeitskraft absichern, Rentenlücke schließen." },
  { icon: Globe, title: "Internationale Kunden", desc: "Das deutsche System verständlich erklärt." },
];

const services = [
  { icon: Heart, title: "Lebensversicherung", href: "/service/lebensversicherung" },
  { icon: Shield, title: "Risikolebensversicherung", href: "/service/risikolebensversicherung" },
  { icon: Briefcase, title: "Berufsunfähigkeit", href: "/service/berufsunfaehigkeit" },
  { icon: PiggyBank, title: "Altersvorsorge", href: "/service/altersvorsorge" },
  { icon: Stethoscope, title: "Private Krankenversicherung", href: "/service/private-krankenversicherung" },
  { icon: Home, title: "Sachversicherungen", href: "/service/sachversicherungen" },
];

const steps = [
  { num: "01", title: "Kontakt", desc: "Sie melden sich – telefonisch oder über das Formular.", icon: Phone },
  { num: "02", title: "Analyse", desc: "Wir erfassen Ihre Situation und bestehende Verträge.", icon: Target },
  { num: "03", title: "Konzept", desc: "Sie erhalten transparente, passende Empfehlungen.", icon: Briefcase },
  { num: "04", title: "Betreuung", desc: "Wir bleiben auch nach dem Abschluss an Ihrer Seite.", icon: Users },
];

export function LocationLandingPage({ data }: { data: LocationData }) {
  const pageUrl = `${siteConfig.url}/${data.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: data.h1,
        serviceType: "Versicherungsberatung",
        description: data.metaDescription,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": data.areaServedType, name: data.areaServed },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.url },
          ...(data.slug !== "versicherung-franken"
            ? [{ "@type": "ListItem", position: 2, name: "Versicherung in Franken", item: `${siteConfig.url}/versicherung-franken` }]
            : []),
          { "@type": "ListItem", position: data.slug !== "versicherung-franken" ? 3 : 2, name: data.h1, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 hero-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-3xl rounded-full" />
        <div className="container-custom relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/60 text-xs md:text-sm mb-4 md:mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Start</Link>
            <ChevronRight className="w-3 h-3" />
            {data.slug !== "versicherung-franken" && (
              <>
                <Link href="/versicherung-franken" className="hover:text-white transition-colors">Franken</Link>
                <ChevronRight className="w-3 h-3" />
              </>
            )}
            <span className="text-white/90">{data.name}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 text-white border border-white/20">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              {data.badge}
            </span>
            <h1 className="text-white mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">{data.h1}</h1>
            <div className="space-y-3 md:space-y-4">
              {data.intro.map((p, i) => (
                <p key={i} className="text-base md:text-xl text-white/85 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="/kontakt#beratung" className="btn-accent text-sm md:text-lg px-6 md:px-8 py-3 md:py-4">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Kostenlosen Beratungstermin sichern
              </Link>
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local context + facts */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 md:gap-12 lg:gap-16 items-start">
            <div>
              <span className="section-label text-xs md:text-sm">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                {data.name}
              </span>
              <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl">{data.contextHeading}</h2>
              <div className="space-y-4 text-gray-600 text-sm md:text-lg">
                {data.contextParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:gap-4 w-full">
              {data.facts.map((f, i) => (
                <div key={i} className="card-elevated p-4 md:p-6 flex items-center gap-4">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base md:text-xl font-bold text-gray-900 leading-tight">{f.value}</p>
                    <p className="text-xs md:text-sm text-gray-500">{f.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optional focus block */}
      {data.focusHeading && data.focusParagraphs && (
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto rounded-2xl md:rounded-3xl bg-gradient-to-br from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))] text-white p-6 md:p-10">
              <h2 className="text-white text-lg md:text-2xl lg:text-3xl mb-3 md:mb-4">{data.focusHeading}</h2>
              <div className="space-y-3 text-white/90 text-sm md:text-lg">
                {data.focusParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Target groups */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
            <span className="section-label text-xs md:text-sm">
              <Users className="w-3 h-3 md:w-4 md:h-4" />
              Für wen wir da sind
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl">Wen wir in {data.name} beraten</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
            {targetGroups.map((g, i) => (
              <div key={i} className="card-elevated p-4 md:p-6 text-center">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <g.icon className="w-5 h-5 md:w-7 md:h-7 text-[hsl(var(--hdi-green))]" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">{g.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-snug">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
            <span className="section-label text-xs md:text-sm">
              <Shield className="w-3 h-3 md:w-4 md:h-4" />
              Unsere Leistungen
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl">Womit wir Sie unterstützen</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group card-elevated p-4 md:p-6 flex items-center gap-3 md:gap-4 hover:border-green-200">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                  <s.icon className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--hdi-green))]" />
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-[hsl(var(--hdi-green))] transition-colors">{s.title}</span>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-[hsl(var(--hdi-green))] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold uppercase mb-4 bg-white/10 text-green-400">
              So funktioniert es
            </span>
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl">In 4 Schritten zur passenden Absicherung</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
                <span className="text-2xl md:text-4xl font-bold text-green-500/30 absolute top-2 right-3">{s.num}</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-3 md:mb-4">
                  <s.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-white mb-1">{s.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region-Hub only: cities grid */}
      {data.cities && data.cities.length > 0 && (
        <section className="py-12 md:py-20 lg:py-28 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
              <span className="section-label text-xs md:text-sm">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                Standorte
              </span>
              <h2 className="text-xl sm:text-2xl md:text-4xl">Wir beraten in diesen Städten</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              {data.cities.map((c, i) => (
                <Link key={i} href={c.href} className="group card-elevated p-5 md:p-7 flex items-center justify-between hover:border-green-200">
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </span>
                    <span className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[hsl(var(--hdi-green))] transition-colors">{c.label}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-[hsl(var(--hdi-green))] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <span className="section-label text-xs md:text-sm">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                Häufige Fragen
              </span>
              <h2 className="text-xl sm:text-2xl md:text-4xl">Fragen aus {data.name}</h2>
            </div>
            <div className="space-y-3 md:space-y-4">
              {data.faqs.map((faq, i) => (
                <details key={i} className="group card-elevated">
                  <summary className="flex items-center justify-between cursor-pointer p-4 md:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">{faq.q}</span>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[hsl(var(--hdi-green))] group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-600 text-sm md:text-base">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related internal links */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-lg md:text-2xl mb-5 md:mb-8">Passende Themen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {data.related.map((r, i) => (
              <Link key={i} href={r.href} className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-green-200 hover:bg-green-50/40 transition-all">
                <ChevronRight className="w-4 h-4 text-[hsl(var(--hdi-green))] flex-shrink-0" />
                <span className="text-sm md:text-base font-medium text-gray-800 group-hover:text-[hsl(var(--hdi-green))] transition-colors">{r.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 lg:py-28 hero-bg text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/10 rounded-full blur-3xl" />
        <div className="container-custom relative text-center max-w-3xl mx-auto">
          <h2 className="text-white mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Ihre Absicherung in {data.name} beginnt hier</h2>
          <p className="text-sm md:text-xl text-white/80 mb-6 md:mb-10">
            Vereinbaren Sie Ihr kostenloses und unverbindliches Erstgespräch – persönlich vor Ort oder per Videocall.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-sm md:text-lg px-6 md:px-10 py-3 md:py-4">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <Link href="/kontakt#beratung" className="btn-white text-sm md:text-lg px-6 md:px-10 py-3 md:py-4">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              Kostenlose Beratung anfragen
            </Link>
          </div>
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-4 md:gap-8 text-white/60 text-xs md:text-sm">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 md:w-4 md:h-4" />Kostenlos</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 md:w-4 md:h-4" />Unverbindlich</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 md:w-4 md:h-4" />Persönlich</span>
          </div>
        </div>
      </section>
    </>
  );
}
