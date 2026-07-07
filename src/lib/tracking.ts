// Client-side lead attribution:
// capture GCLID + traffic source (first touch), persist them across navigation,
// and expose the current context for form submits / call / WhatsApp events.

const GCLID_KEY = "hdi_gclid";
const QUELLE_KEY = "hdi_quelle";

/** Read gclid + source from the URL and persist them (call once on app load). */
export function captureTrackingParams(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);

    const gclid = params.get("gclid");
    if (gclid) localStorage.setItem(GCLID_KEY, gclid);

    // Store the traffic source only on first touch (don't overwrite).
    if (!localStorage.getItem(QUELLE_KEY)) {
      localStorage.setItem(QUELLE_KEY, resolveSource(params));
    }
  } catch {
    /* localStorage can be blocked in sandboxed iframes — fail silently. */
  }
}

function resolveSource(params: URLSearchParams): string {
  const utm = params.get("utm_source");
  if (utm) return utm;
  if (params.get("gclid")) return "Google Ads";

  const ref = typeof document !== "undefined" ? document.referrer : "";
  if (ref) {
    try {
      const host = new URL(ref).hostname.replace(/^www\./, "");
      if (host && host !== window.location.hostname) return host;
    } catch {
      /* ignore malformed referrer */
    }
  }
  return "Direct";
}

/** Current attribution context to attach to a submission / event. */
export function getTrackingData(): {
  gclid: string;
  quelle: string;
  seite: string;
} {
  if (typeof window === "undefined") {
    return { gclid: "", quelle: "Direct", seite: "" };
  }

  let gclid = "";
  let quelle = "Direct";
  try {
    gclid = localStorage.getItem(GCLID_KEY) || "";
    quelle = localStorage.getItem(QUELLE_KEY) || "Direct";
  } catch {
    /* ignore */
  }

  return { gclid, quelle, seite: window.location.pathname };
}
