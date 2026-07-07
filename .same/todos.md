# HDI Website - Verbesserungen aus Bewertungsbericht

## 🔴 Kritisch (Rechtlich)
- [x] "Unabhängige Beratung" → "Persönliche HDI-Beratung" (HeroSection)
- [x] Impressum: § 5 TMG → § 5 DDG
- [x] Impressum: § 7/§§ 8-10 TMG → DDG

## 🟠 Inhalt aktualisieren
- [x] PKV Einkommensgrenze: 69.300€ (2024) → 77.400€/Jahr, 6.450€/Monat (2026)

## 🟡 Datenschutz erweitern
- [x] Hosting (Vercel) hinzugefügt
- [x] Server-Logfiles Details
- [x] Kontaktformular Rechtsgrundlage (Art. 6)
- [x] Speicherdauer
- [x] Dritte / Auftragsverarbeiter
- [x] DSGVO Rechtsgrundlagen (Art. 6, 9)

## 🔵 AI / SEO Sichtbarkeit
- [x] robots.txt (OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot erlaubt)
- [x] sitemap.xml (18 Seiten)
- [x] llms.txt
- [x] JSON-LD InsuranceAgency (Layout)
- [x] FAQ Schema (Startseite)
- [x] OpenGraph + Keywords Metadata

## 📧 Kontaktformular E-Mail-Versand (Resend)
- [x] E-Mail geändert zu info@versicherungkompass.de
- [x] resend Paket installiert
- [x] API-Route /api/contact erstellt
- [x] Kontaktformular mit echtem Versand verbunden (Loading/Error States)
- [x] .env.local + Doku angelegt
- [ ] User: RESEND_API_KEY eintragen (+ ggf. Domain in Resend verifizieren)

## 📊 Google Analytics Key Events + Bestätigung
- [x] Google Tag (gtag.js) G-LB71DB28VR eingebaut
- [x] analytics.ts Helper (trackEvent + GA_EVENTS)
- [x] ContactActionsProvider: fängt tel:/WhatsApp klicks global ab
- [x] Bestätigungsdialog vor Anruf
- [x] Bestätigungsdialog vor WhatsApp
- [x] Key Event "thank_you" nur bei erfolgreichem Versand
- [x] Key Event "call_confirmed" nach Bestätigung
- [x] Key Event "whatsapp_confirmed" nach Bestätigung
- [ ] User: 3 Events in GA4 als "Schlüsselereignis" markieren

## 🗺️ Local SEO Franken (E-E-A-T, kein Thin Content)
- [x] Datenmodell regions.ts (unique Inhalte je Standort/Zielgruppe)
- [x] Shared LocationLandingPage Komponente (+ Service/FAQ/Breadcrumb Schema)
- [x] Region-Hub /versicherung-franken
- [x] Stadtseiten: nuernberg, fuerth, erlangen, bamberg, wuerzburg, ansbach
- [x] Zielgruppenseiten: selbststaendige-nuernberg, familien-franken, internationale-fachkraefte-franken, studenten-erlangen
- [x] Metadata pro Seite (Title/Description/canonical)
- [x] Interne Verlinkung (Hub <-> Städte <-> Services <-> Footer Regionen + Nav Standorte)
- [x] sitemap.ts erweitert (30 URLs)
- [x] Lint + Build OK (37 Seiten)

## Status
- Abgeschlossen: Fri Jun 12 2026 ✅
