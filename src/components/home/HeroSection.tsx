"use client";

import Link from "next/link";
import { Phone, ArrowRight, Shield, Users, Award, CheckCircle, Star, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[100vh] flex items-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 hero-bg" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-white/3 rounded-full blur-3xl" />
      </div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative container-custom pt-28 pb-10 sm:pt-32 md:pt-36 md:pb-16 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-white max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-medium mb-4 md:mb-8 border border-white/20">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-400 flex items-center justify-center text-[10px] md:text-xs font-bold text-green-900">H</div>
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-300 flex items-center justify-center text-[10px] md:text-xs font-bold text-green-900">D</div>
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-200 flex items-center justify-center text-[10px] md:text-xs font-bold text-green-900">I</div>
              </div>
              <span className="text-white/90">Generalvertretung in Nürnberg</span>
            </div>

            {/* Headline */}
            <h1 className="text-white mb-3 md:mb-6 leading-[1.1] text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Ihre Zukunft verdient
              <span className="block text-green-300">die beste Absicherung</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl lg:text-2xl text-white/85 mb-5 md:mb-10 leading-relaxed font-light">
              Persönliche Beratung für Versicherung, Vorsorge und Risikomanagement –
              maßgeschneidert für Ihre Lebenssituation in Nürnberg.
            </p>

            {/* Trust Points - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block space-y-4 mb-10">
              {[
                { icon: Clock, text: "Über 25 Jahre Erfahrung in der Region" },
                { icon: Shield, text: "Persönliche HDI-Beratung – Ihr Interesse steht im Mittelpunkt" },
                { icon: CheckCircle, text: "Kostenlose Erstberatung ohne Verpflichtung" }
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/90">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-green-300" />
                  </div>
                  <span className="text-lg">{point.text}</span>
                </div>
              ))}
            </div>

            {/* Mobile Trust Points - Compact version */}
            <div className="flex md:hidden items-center gap-4 mb-5 text-white/80 text-sm">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>25+ Jahre</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Kostenlos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>IHK-zertifiziert</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent text-sm md:text-lg px-5 py-3 md:px-8 md:py-5">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="md:hidden">Jetzt anrufen</span>
                <span className="hidden md:inline">Jetzt kostenlos beraten lassen</span>
              </a>
              <Link href="/leistungen" className="btn-white text-sm md:text-lg px-5 py-3 md:px-8 md:py-5">
                Unsere Leistungen
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>

            {/* Social Proof - Compact on mobile */}
            <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 md:gap-6 flex-wrap">
                <div className="flex items-center gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/70 text-xs md:text-sm">
                  <strong className="text-white">4,4/5</strong> aus 64 Google-Bewertungen
                </span>
              </div>
            </div>
          </div>

          {/* Right: Trust Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 z-10">
                <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white transform rotate-6 shadow-2xl shadow-red-900/30">
                  <div className="transform -rotate-6 text-center">
                    <span className="text-4xl font-bold block leading-none">25+</span>
                    <span className="text-xs font-medium opacity-90">Jahre</span>
                  </div>
                </div>
              </div>

              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-black/20 p-8 lg:p-10 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full" />

                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Warum Kunden uns vertrauen
                  </h3>

                  <div className="space-y-6">
                    {[
                      { icon: Users, title: "Persönliche Betreuung", desc: "Ihr persönlicher Ansprechpartner – vor Ort in Nürnberg und Umgebung" },
                      { icon: Shield, title: "HDI Qualität", desc: "Starker Partner mit über 120 Jahren Erfahrung und finanzieller Stärke" },
                      { icon: Award, title: "IHK-zertifiziert", desc: "Geprüfte Qualifikation als Versicherungsfachmann" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center flex-shrink-0 group-hover:from-green-100 group-hover:to-green-200 transition-colors">
                          <item.icon className="w-7 h-7 text-green-700" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Verfügbarkeit</p>
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                          </span>
                          <span className="font-semibold text-green-700">Termine diese Woche frei</span>
                        </div>
                      </div>
                      <a href={`tel:${siteConfig.contact.phone}`} className="btn-primary py-3 px-5 text-sm">
                        <Phone className="w-4 h-4" />
                        Anrufen
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-xs text-gray-500">Zufriedene Kunden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 100L48 95.8333C96 91.6667 192 83.3333 288 79.1667C384 75 480 75 576 77.0833C672 79.1667 768 83.3333 864 83.3333C960 83.3333 1056 79.1667 1152 77.0833C1248 75 1344 75 1392 75L1440 75V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
