import { NextResponse } from "next/server";
import { logToGoogleSheets } from "@/lib/google-sheets";

// Logs the two "contact intent" events (call / WhatsApp) to Google Sheets.
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const eventType = String(payload.eventType ?? "");
  if (eventType !== "phone_call" && eventType !== "whatsapp") {
    return NextResponse.json({ error: "Unbekanntes Event." }, { status: 400 });
  }

  await logToGoogleSheets({
    eventType,
    priority: "DRINGEND", // active contact intent = hot lead
    quelle: String(payload.quelle ?? "Direct"),
    gclid: String(payload.gclid ?? ""),
    seite: String(payload.seite ?? ""),
  });

  return NextResponse.json({ success: true });
}
