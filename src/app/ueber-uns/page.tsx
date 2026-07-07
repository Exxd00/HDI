import Link from "next/link";
import {
  Users, Award, Clock, MapPin, Shield, Heart, Phone, ArrowRight,
  CheckCircle, Star, Target, Handshake
} from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export const metadata = {
  title: "Über uns - HDI Generalvertretung Werner Böhm",
  description: "Lernen Sie Werner Böhm kennen: Ihr persönlicher Versicherungsfachmann in Nürnberg mit über 25 Jahren Erfahrung.",
};

const values = [
  {
    icon: Heart,
    title: "Persönlich",
    description: "Jeder Kunde ist einzigartig. Wir nehmen uns Zeit für Ihre individuelle Situation."
  },
  {
    icon: Shield,
    title: "Ehrlich",
    description: "Wir empfehlen nur, was Sie wirklich brauchen – nicht mehr und nicht weniger."
  },
  {
    icon: Target,
    title: "Kompetent",
    description: "Regelmäßige Weiterbildung und 25 Jahre Erfahrung garantieren beste Beratung."
  },
  {
    icon: Handshake,
    title: "Langfristig",
    description: "Wir sind auch nach dem Abschluss für Sie da – ein Leben lang."
  }
];

const milestones = [
  { year: "1999", title: "Gründung", desc: "Start als selbstständiger Versicherungsberater" },
  { year: "2005", title: "HDI Partner", desc: "Beginn der Zusammenarbeit mit HDI" },
  { year: "2015", title: "500 Kunden", desc: "Über 500 zufriedene Kunden" },
  { year: "2024", title: "25 Jahre", desc: "Ein Vierteljahrhundert Erfahrung" }
];

export default function UeberUnsPage() {
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
              <Users className="w-3 h-3 md:w-4 md:h-4" />
              Über uns
            </span>
            <h1 className="text-white mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Ihr Versicherungspartner in Nürnberg</h1>
            <p className="text-base md:text-xl text-white/80">
              Seit über 25 Jahren beraten wir Familien und Unternehmen in der Region.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L48 95.8333C96 91.6667 192 83.3333 288 79.1667C384 75 480 75 576 77.0833C672 79.1667 768 83.3333 864 83.3333C960 83.3333 1056 79.1667 1152 77.0833C1248 75 1344 75 1392 75L1440 75V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image/Visual */}
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

              {/* Floating Cards - hidden on mobile */}
              <div className="hidden md:block absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Award className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">25+ Jahre</p>
                    <p className="text-gray-500">Erfahrung</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Ausgezeichnet bewertet</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Persönliche Beratung mit <span className="gradient-text">Herz und Verstand</span></h2>

              <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-lg mb-6 md:mb-8">
                <p>
                  <strong className="text-gray-900">Mein Name ist Werner Böhm</strong>, und ich bin seit über 25 Jahren
                  als Versicherungsfachmann in Nürnberg tätig.
                </p>
                <p className="hidden md:block">
                  Für mich steht der Mensch im Mittelpunkt – nicht der Verkauf. Ich nehme mir Zeit,
                  Ihre Situation wirklich zu verstehen, bevor ich eine Empfehlung ausspreche.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {[
                  { icon: Clock, text: "25+ Jahre" },
                  { icon: Users, text: "500+ Kunden" },
                  { icon: Award, text: "IHK zertifiziert" },
                  { icon: MapPin, text: "In Nürnberg" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl border border-gray-200">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-green-700" />
                    <span className="font-medium text-gray-900 text-xs md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <span className="section-label text-xs md:text-sm">
              <Heart className="w-3 h-3 md:w-4 md:h-4" />
              Unsere Werte
            </span>
            <h2 className="mb-3 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Wofür wir stehen</h2>
            <p className="text-sm md:text-xl text-gray-600">
              Diese Werte leiten mich bei jeder Beratung.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mb-3 md:mb-6 shadow-lg shadow-green-900/20">
                  <value.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-xs md:text-base line-clamp-3">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <span className="section-label text-xs md:text-sm">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              Unsere Geschichte
            </span>
            <h2 className="mb-3 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">25 Jahre Beratungskompetenz</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg shadow-green-900/20">
                    <span className="text-white font-bold text-sm md:text-lg">{milestone.year.slice(-2)}</span>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">{milestone.year}</span>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 mt-2 md:mt-3">{milestone.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HDI Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="section-label text-xs md:text-sm">
                <Shield className="w-3 h-3 md:w-4 md:h-4" />
                Unser Partner
              </span>
              <h2 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Warum HDI?</h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-lg mb-6 md:mb-8">
                <p>
                  Als HDI Generalvertretung profitieren Sie von der Stärke eines der größten deutschen Versicherungsunternehmen.
                </p>
              </div>

              <div className="space-y-2 md:space-y-4">
                {[
                  "Über 120 Jahre Erfahrung",
                  "Finanzstärke mit Top-Ratings",
                  "Innovative Lösungen",
                  "Persönliche Betreuung"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                    <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 border border-gray-200 shadow-xl">
              <div className="text-center">
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-700">HDI</span>
                <p className="text-lg md:text-2xl text-gray-500 mt-1 md:mt-2">Versicherungen</p>
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {[
                      { value: "120+", label: "Jahre" },
                      { value: "20M+", label: "Kunden" },
                      { value: "AAA", label: "Rating" },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-lg md:text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 lg:py-28 hero-bg text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4 md:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Lernen Sie mich kennen</h2>
            <p className="text-sm md:text-xl text-white/80 mb-6 md:mb-10">
              Vereinbaren Sie ein unverbindliches Kennenlerngespräch.
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
