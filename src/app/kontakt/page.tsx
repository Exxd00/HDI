"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle, User, ArrowRight, MessageSquare, Loader2, AlertCircle
} from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";
import { getTrackingData } from "@/lib/tracking";

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    geburtsdatum: "",
    plz: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, ...getTrackingData() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error ?? "Etwas ist schiefgelaufen.");
      }

      // Key event: fires ONLY after a successful send (thank-you state).
      trackEvent(GA_EVENTS.THANK_YOU, {
        event_category: "contact",
        event_label: "contact_form",
        subject: formState.subject,
        value: 1,
      });

      setIsSubmitted(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        geburtsdatum: "",
        plz: "",
        subject: "",
        message: "",
        privacy: false,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <MessageSquare className="w-3 h-3 md:w-4 md:h-4" />
              Kontakt
            </span>
            <h1 className="text-white mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Wir sind für Sie da</h1>
            <p className="text-base md:text-xl text-white/80">
              Haben Sie Fragen oder möchten Sie einen Beratungstermin vereinbaren?
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L48 95.8333C96 91.6667 192 83.3333 288 79.1667C384 75 480 75 576 77.0833C672 79.1667 768 83.3333 864 83.3333C960 83.3333 1056 79.1667 1152 77.0833C1248 75 1344 75 1392 75L1440 75V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 md:gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">So erreichen Sie uns</h2>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-6 mb-6 md:mb-10">
                <a href={`tel:${siteConfig.contact.phone}`} className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 p-4 md:p-5 bg-green-50 rounded-xl md:rounded-2xl border border-green-100 hover:bg-green-100 transition-colors group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/20">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Telefon</p>
                    <p className="text-green-700 text-sm md:text-lg font-medium">{siteConfig.contact.phoneDisplay}</p>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.contact.email}`} className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 p-4 md:p-5 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-200 hover:bg-gray-100 transition-colors group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">E-Mail</p>
                    <p className="text-gray-700 text-xs md:text-base break-all">{siteConfig.contact.email}</p>
                  </div>
                </a>

                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 p-4 md:p-5 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-200">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Adresse</p>
                    <p className="text-gray-700 text-xs md:text-base">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-700 text-xs md:text-base">{siteConfig.contact.address.city}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 p-4 md:p-5 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-200">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Öffnungszeiten</p>
                    <p className="text-gray-700 text-xs md:text-base">{siteConfig.hours.weekdays}</p>
                    <p className="text-gray-700 text-xs md:text-base">{siteConfig.hours.saturday}</p>
                  </div>
                </div>
              </div>

              {/* Personal Contact */}
              <div className="p-4 md:p-6 bg-gradient-to-br from-green-600 to-green-700 rounded-xl md:rounded-2xl text-white">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl">Werner Böhm</p>
                    <p className="text-white/80 text-sm md:text-base">Versicherungsfachmann (IHK)</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm md:text-base">
                  Persönliche Beratung in Nürnberg. Ich komme auch gerne zu Ihnen.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div id="beratung" className="scroll-mt-28 md:scroll-mt-32">
              <div className="card-elevated p-5 md:p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-8 md:py-12">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Vielen Dank!</h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                      Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns zeitnah für Ihren Beratungstermin.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary text-sm md:text-base py-3 px-5"
                    >
                      Neue Anfrage senden
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Kostenlosen Beratungstermin anfragen</h2>
                    <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
                      Ob Terminwunsch oder Frage – füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      {/* Name + Telefon (Pflicht) */}
                      <div className="grid grid-cols-2 gap-3 md:gap-6 [&>div]:min-w-0">
                        <div>
                          <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm md:text-base"
                            placeholder="Ihr Name"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                            Telefon *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            required
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm md:text-base"
                            placeholder="0911 1234567"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* E-Mail + Geburtsdatum (optional) */}
                      <div className="grid grid-cols-2 gap-3 md:gap-6 [&>div]:min-w-0">
                        <div>
                          <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                            E-Mail <span className="text-gray-400 font-normal">(optional)</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm md:text-base"
                            placeholder="ihre@email.de"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label htmlFor="geburtsdatum" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                            Geburtsdatum <span className="text-gray-400 font-normal">(optional)</span>
                          </label>
                          <input
                            type="date"
                            id="geburtsdatum"
                            max={new Date().toISOString().split("T")[0]}
                            className="w-full min-w-0 px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm md:text-base text-gray-700"
                            value={formState.geburtsdatum}
                            onChange={(e) => setFormState({ ...formState, geburtsdatum: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* PLZ (optional) + Betreff (Pflicht) */}
                      <div className="grid grid-cols-2 gap-3 md:gap-6 [&>div]:min-w-0">
                        <div>
                          <label htmlFor="plz" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                            PLZ <span className="text-gray-400 font-normal">(optional)</span>
                          </label>
                          <input
                            type="text"
                            id="plz"
                            inputMode="numeric"
                            maxLength={5}
                            pattern="[0-9]{5}"
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm md:text-base"
                            placeholder="90489"
                            value={formState.plz}
                            onChange={(e) => setFormState({ ...formState, plz: e.target.value.replace(/[^0-9]/g, "") })}
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                            Betreff *
                          </label>
                          <select
                            id="subject"
                            required
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all bg-white text-sm md:text-base"
                            value={formState.subject}
                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          >
                            <option value="">Bitte wählen</option>
                            <option value="beratung">Beratung</option>
                            <option value="lebensversicherung">Leben</option>
                            <option value="berufsunfaehigkeit">BU</option>
                            <option value="altersvorsorge">Rente</option>
                            <option value="sonstiges">Sonstiges</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                          Ihre Nachricht *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none text-sm md:text-base"
                          placeholder="Wie können wir Ihnen helfen?"
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>

                      <div className="flex items-start gap-2 md:gap-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          required
                          className="mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          checked={formState.privacy}
                          onChange={(e) => setFormState({ ...formState, privacy: e.target.checked })}
                        />
                        <label htmlFor="privacy" className="text-xs md:text-sm text-gray-600">
                          Ich habe die <Link href="/datenschutz" className="text-green-700 underline">Datenschutzerklärung</Link> gelesen. *
                        </label>
                      </div>

                      {error && (
                        <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg md:rounded-xl">
                          <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs md:text-sm text-red-700">{error}</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full py-3 md:py-4 text-sm md:text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                            Wird gesendet …
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 md:w-5 md:h-5" />
                            Kostenlose Beratung anfragen
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Standort Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="section-label text-xs md:text-sm">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              Standort
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl">So finden Sie uns</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-900/10 overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-[1fr,1.4fr]">
              {/* Branded Info Panel */}
              <div className="relative bg-gradient-to-br from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))] p-6 md:p-10 text-white overflow-hidden">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-lg">
                    <span className="text-[hsl(var(--hdi-green))] font-bold text-lg md:text-xl">HDI</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">Werner Böhm</h3>
                  <p className="text-white/70 text-sm md:text-base mb-6 md:mb-8">Generalvertretung Nürnberg</p>

                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-[11px] uppercase tracking-wider mb-0.5">Adresse</p>
                        <p className="font-medium text-sm md:text-base">{siteConfig.contact.address.street}</p>
                        <p className="font-medium text-sm md:text-base">{siteConfig.contact.address.zip} {siteConfig.contact.address.city}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-[11px] uppercase tracking-wider mb-0.5">Öffnungszeiten</p>
                        <p className="font-medium text-sm md:text-base">{siteConfig.hours.weekdays}</p>
                        <p className="font-medium text-sm md:text-base">{siteConfig.hours.saturday}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-[11px] uppercase tracking-wider mb-0.5">Telefon</p>
                        <a href={`tel:${siteConfig.contact.phone}`} className="font-medium text-sm md:text-base hover:text-white/80 transition-colors">{siteConfig.contact.phoneDisplay}</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-7 md:mt-9">
                    <a
                      href={siteConfig.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[hsl(var(--hdi-green-dark))] font-semibold rounded-xl py-3 px-5 text-sm md:text-base hover:bg-white/90 hover:-translate-y-0.5 transition-all shadow-lg"
                    >
                      <MapPin className="w-4 h-4" />
                      Route planen
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold rounded-xl py-3 px-5 text-sm md:text-base hover:bg-white/10 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      Anrufen
                    </a>
                  </div>
                </div>
              </div>

              {/* Live Interactive Map */}
              <div className="relative min-h-[320px] lg:min-h-[460px] bg-gray-100">
                <iframe
                  src={siteConfig.maps.embedUrl}
                  title="Standort der HDI Generalvertretung Werner Böhm in Nürnberg"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
