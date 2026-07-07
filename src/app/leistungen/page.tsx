import Link from "next/link";
import {
  Heart, Shield, Briefcase, PiggyBank, Stethoscope, Home,
  ArrowRight, Phone, CheckCircle, Award
} from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Unsere Leistungen - HDI Generalvertretung Werner Böhm",
  description: "Umfassender Versicherungsschutz für jede Lebenslage. Lebensversicherung, Berufsunfähigkeit, Altersvorsorge und mehr.",
};

const services = [
  {
    icon: Heart,
    title: "Lebensversicherung",
    description: "Finanzielle Absicherung für Ihre Liebsten im Ernstfall. Die Lebensversicherung kombiniert Todesfallschutz mit Kapitalaufbau.",
    href: "/service/lebensversicherung",
    color: "from-rose-500 to-pink-600",
    features: ["Kapitalaufbau für die Zukunft", "Todesfallschutz", "Flexible Gestaltung", "Steuervorteile"]
  },
  {
    icon: Shield,
    title: "Risikolebensversicherung",
    description: "Reiner Todesfallschutz zu günstigen Beiträgen. Ideal für Familien und zur Kreditabsicherung.",
    href: "/service/risikolebensversicherung",
    color: "from-blue-500 to-indigo-600",
    features: ["Niedrige Beiträge", "Hohe Versicherungssummen", "Flexible Laufzeiten", "Partnerschutz"]
  },
  {
    icon: Briefcase,
    title: "Berufsunfähigkeitsversicherung",
    description: "Schützen Sie Ihr wertvollstes Kapital: Ihre Arbeitskraft. Jeder Vierte wird berufsunfähig.",
    href: "/service/berufsunfaehigkeit",
    color: "from-amber-500 to-orange-600",
    features: ["Monatliche Rente bei BU", "Weltweiter Schutz", "Nachversicherungsgarantie", "Keine abstrakte Verweisung"]
  },
  {
    icon: PiggyBank,
    title: "Altersvorsorge",
    description: "Sorgen Sie heute für einen sorgenfreien Ruhestand. Die gesetzliche Rente reicht nicht aus.",
    href: "/service/altersvorsorge",
    color: "from-emerald-500 to-teal-600",
    features: ["Riester & Rürup", "Betriebliche Altersvorsorge", "Private Rentenversicherung", "Fondsgebundene Lösungen"]
  },
  {
    icon: Stethoscope,
    title: "Private Krankenversicherung",
    description: "Premium-Gesundheitsversorgung mit kürzeren Wartezeiten und Chefarztbehandlung.",
    href: "/service/private-krankenversicherung",
    color: "from-cyan-500 to-blue-600",
    features: ["Chefarztbehandlung", "Einzelzimmer", "Weltweite Versicherung", "Zahnersatz inklusive"]
  },
  {
    icon: Home,
    title: "Sachversicherungen",
    description: "Umfassender Schutz für Ihr Hab und Gut. Vom Hausrat bis zur Gebäudeversicherung.",
    href: "/service/sachversicherungen",
    color: "from-violet-500 to-purple-600",
    features: ["Hausrat", "Wohngebäude", "Haftpflicht", "Rechtsschutz"]
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 text-white border border-white/20">
              <Shield className="w-3 h-3 md:w-4 md:h-4" />
              Unsere Leistungen
            </span>
            <h1 className="text-white mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Umfassender Versicherungsschutz</h1>
            <p className="text-base md:text-xl text-white/80">
              Von der Absicherung Ihrer Familie bis zur Altersvorsorge – wir finden die optimale Lösung für Sie.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L48 95.8333C96 91.6667 192 83.3333 288 79.1667C384 75 480 75 576 77.0833C672 79.1667 768 83.3333 864 83.3333C960 83.3333 1056 79.1667 1152 77.0833C1248 75 1344 75 1392 75L1440 75V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid gap-4 md:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group card-elevated p-4 md:p-8 lg:p-10 hover:border-green-200 grid lg:grid-cols-[1fr,2fr] gap-4 md:gap-8 items-start"
              >
                <div>
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-6">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm md:text-base group/link">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gray-50 rounded-lg md:rounded-xl group-hover:bg-green-50 transition-colors">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-xs md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HDI */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <span className="section-label text-xs md:text-sm">
              <Award className="w-3 h-3 md:w-4 md:h-4" />
              Warum HDI?
            </span>
            <h2 className="mb-3 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Ein starker Partner</h2>
            <p className="text-sm md:text-xl text-gray-600">
              HDI gehört zu den führenden Versicherern Deutschlands.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-8">
            {[
              { title: "120+", desc: "Jahre Erfahrung", icon: Award },
              { title: "AAA", desc: "Finanzstark", icon: Shield },
              { title: "Vor Ort", desc: "Persönlich", icon: Heart },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 md:p-8 bg-white rounded-xl md:rounded-2xl border border-gray-200">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-lg shadow-green-900/20">
                  <item.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 lg:py-28 hero-bg text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Welche Absicherung passt zu Ihnen?</h2>
            <p className="text-sm md:text-xl text-white/80 mb-6 md:mb-10">
              Lassen Sie uns gemeinsam herausfinden, welche Versicherungen Sie wirklich brauchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-sm md:text-lg px-6 md:px-10 py-3 md:py-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <Link href="/kontakt#beratung" className="btn-white text-sm md:text-lg px-6 md:px-10 py-3 md:py-4">
                Kostenlosen Beratungstermin sichern
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
