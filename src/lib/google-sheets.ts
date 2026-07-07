// Server-side helper: forwards a lead / event to the Google Apps Script webhook.
// Best-effort — it must never break the main request (email etc.).

export type SheetsPayload = {
  eventType: "form" | "phone_call" | "whatsapp";
  name?: string;
  telefon?: string;
  email?: string;
  geburtsdatum?: string;
  plz?: string;
  interesse?: string;
  nachricht?: string;
  priority?: string;
  quelle?: string;
  gclid?: string;
  seite?: string;
};

export async function logToGoogleSheets(payload: SheetsPayload): Promise<void> {
  // Accept either name so it matches the Vercel setup (GOOGLE_SHEETS_URL)
  // as well as the local default (GOOGLE_SHEETS_WEBHOOK_URL).
  const url =
    process.env.GOOGLE_SHEETS_URL ?? process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return; // webhook not configured yet — skip silently

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
  } catch (err) {
    console.error("Google Sheets logging failed:", err);
  }
}
