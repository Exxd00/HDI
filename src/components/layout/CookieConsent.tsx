"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, Settings, Shield } from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);

    // Here you would initialize analytics/marketing based on preferences
    if (prefs.analytics) {
      console.log("Analytics cookies enabled");
      // Initialize Google Analytics, etc.
    }
    if (prefs.marketing) {
      console.log("Marketing cookies enabled");
      // Initialize marketing pixels, etc.
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptSelected = () => {
    saveConsent(preferences);
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto animate-fade-in"
        onClick={() => {}} // Prevent closing by clicking backdrop
      />

      {/* Banner */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl pointer-events-auto animate-slide-up overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[hsl(152,69%,31%)] to-[hsl(152,55%,38%)] p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl">Cookie-Einstellungen</h3>
              <p className="text-white/80 text-sm">Wir respektieren Ihre Privatsphäre</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            Einige Cookies sind für den Betrieb der Website erforderlich, während andere uns helfen,
            die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
          </p>

          {/* Cookie Categories */}
          {showDetails && (
            <div className="space-y-3 mb-6 animate-fade-in">
              {/* Necessary */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900 text-sm">Notwendige Cookies</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex-shrink-0 mt-0.5">
                  <button
                    onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                    className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                      preferences.analytics
                        ? 'bg-green-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  >
                    {preferences.analytics && <Check className="w-3 h-3 text-white" />}
                  </button>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Analyse-Cookies</h4>
                  <p className="text-gray-500 text-xs mt-1">
                    Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie zu verbessern.
                  </p>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex-shrink-0 mt-0.5">
                  <button
                    onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                    className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                      preferences.marketing
                        ? 'bg-green-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  >
                    {preferences.marketing && <Check className="w-3 h-3 text-white" />}
                  </button>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Marketing-Cookies</h4>
                  <p className="text-gray-500 text-xs mt-1">
                    Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte anzuzeigen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {!showDetails ? (
              <>
                <button
                  onClick={rejectAll}
                  className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 px-6 py-3 text-sm font-semibold text-[hsl(152,69%,31%)] border-2 border-[hsl(152,69%,31%)] hover:bg-green-50 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Einstellungen
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[hsl(152,69%,31%)] to-[hsl(152,55%,38%)] hover:from-[hsl(152,75%,25%)] hover:to-[hsl(152,69%,31%)] rounded-xl transition-all shadow-lg shadow-green-900/20"
                >
                  Alle akzeptieren
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  Zurück
                </button>
                <button
                  onClick={acceptSelected}
                  className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[hsl(152,69%,31%)] to-[hsl(152,55%,38%)] hover:from-[hsl(152,75%,25%)] hover:to-[hsl(152,69%,31%)] rounded-xl transition-all shadow-lg shadow-green-900/20"
                >
                  Auswahl speichern
                </button>
              </>
            )}
          </div>

          {/* Privacy Link */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-500">
            <Link href="/datenschutz" className="hover:text-[hsl(152,69%,31%)] transition-colors flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Datenschutzerklärung
            </Link>
            <span>|</span>
            <Link href="/impressum" className="hover:text-[hsl(152,69%,31%)] transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
