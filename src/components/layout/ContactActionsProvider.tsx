"use client";

import { useCallback, useEffect, useState } from "react";
import { Phone, MessageCircle, X, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";
import { captureTrackingParams, getTrackingData } from "@/lib/tracking";

type Pending = { type: "call" | "whatsapp"; href: string } | null;

const isWhatsAppHref = (href: string) =>
  href.includes("wa.me") ||
  href.includes("api.whatsapp.com") ||
  href.includes("web.whatsapp.com");

export function ContactActionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pending, setPending] = useState<Pending>(null);

  // Capture GCLID + traffic source once on load.
  useEffect(() => {
    captureTrackingParams();
  }, []);

  // Intercept every tel: / WhatsApp link click across the whole site.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Respect "open in new tab" / modified clicks and already-handled events.
      if (
        e.defaultPrevented ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0
      ) {
        return;
      }

      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        e.preventDefault();
        setPending({ type: "call", href });
      } else if (isWhatsAppHref(href)) {
        e.preventDefault();
        setPending({ type: "whatsapp", href });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Lock scroll + close on Escape while the dialog is open.
  useEffect(() => {
    if (!pending) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPending(null);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [pending]);

  const handleConfirm = useCallback(() => {
    if (!pending) return;

    const eventType = pending.type === "call" ? "phone_call" : "whatsapp";
    const { gclid, quelle, seite } = getTrackingData();

    // 1) Google Analytics key event.
    trackEvent(
      pending.type === "call"
        ? GA_EVENTS.CALL_CONFIRMED
        : GA_EVENTS.WHATSAPP_CONFIRMED,
      {
        event_category: "contact",
        event_label: eventType,
        ...(pending.type === "call"
          ? { phone_number: pending.href.replace("tel:", "") }
          : {}),
      },
    );

    // 2) Log to Google Sheets (keepalive so it survives the navigation).
    try {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventType, gclid, quelle, seite }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* ignore */
    }

    // 3) Perform the action.
    if (pending.type === "call") {
      window.location.href = pending.href;
    } else {
      window.open(pending.href, "_blank", "noopener,noreferrer");
    }

    setPending(null);
  }, [pending]);

  return (
    <>
      {children}
      {pending && (
        <ConfirmDialog
          type={pending.type}
          href={pending.href}
          onConfirm={handleConfirm}
          onCancel={() => setPending(null)}
        />
      )}
    </>
  );
}

function ConfirmDialog({
  type,
  href,
  onConfirm,
  onCancel,
}: {
  type: "call" | "whatsapp";
  href: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const isCall = type === "call";

  // Pick a nice display number for the call dialog.
  const rawNumber = href.replace("tel:", "").replace(/[^0-9+]/g, "");
  const mobileNormalized = siteConfig.contact.mobile.replace(/[^0-9+]/g, "");
  const displayNumber = isCall
    ? rawNumber === mobileNormalized
      ? siteConfig.contact.mobileDisplay
      : siteConfig.contact.phoneDisplay
    : siteConfig.contact.mobileDisplay;

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={isCall ? "Anruf bestätigen" : "WhatsApp bestätigen"}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8 animate-scale-in"
      >
        <button
          onClick={onCancel}
          aria-label="Schließen"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-green-900/25 ${
            isCall
              ? "bg-gradient-to-br from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))]"
              : "bg-gradient-to-br from-green-400 to-green-500"
          }`}
        >
          {isCall ? (
            <PhoneCall className="w-8 h-8 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white" />
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {isCall ? "Jetzt anrufen?" : "WhatsApp öffnen?"}
        </h3>
        <p className="text-gray-600 text-sm md:text-base mb-1">
          {isCall
            ? "Sie werden direkt mit unserem Büro verbunden."
            : "Sie werden zu WhatsApp weitergeleitet, um uns eine Nachricht zu schreiben."}
        </p>
        <p className="text-lg font-semibold text-[hsl(var(--hdi-green))] mb-6">
          {displayNumber}
        </p>

        <div className="flex flex-col-reverse sm:flex-row gap-3">
          <button
            onClick={onCancel}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Abbrechen
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-white font-semibold shadow-lg transition-all hover:-translate-y-0.5 ${
              isCall
                ? "bg-gradient-to-r from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))] shadow-green-900/25"
                : "bg-gradient-to-r from-green-500 to-green-600 shadow-green-500/25"
            }`}
          >
            {isCall ? (
              <>
                <Phone className="w-4 h-4" />
                Anrufen
              </>
            ) : (
              <>
                <MessageCircle className="w-4 h-4" />
                WhatsApp öffnen
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
