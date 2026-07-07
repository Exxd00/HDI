import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data/site-config";
import { logToGoogleSheets } from "@/lib/google-sheets";

// Sender: must be a domain verified in your Resend account.
// Falls back to Resend's shared testing sender for quick trials.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  "HDI Kontaktformular <onboarding@resend.dev>";

// Recipient: the agency inbox.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

// Human-readable labels for the "Betreff" select values.
const SUBJECT_LABELS: Record<string, string> = {
  beratung: "Allgemeine Beratung",
  lebensversicherung: "Lebensversicherung",
  berufsunfaehigkeit: "Berufsunfähigkeit",
  altersvorsorge: "Altersvorsorge",
  sonstiges: "Sonstiges",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  // Guard: without an API key we cannot send anything.
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      {
        error:
          "Der E-Mail-Versand ist noch nicht konfiguriert. Bitte kontaktieren Sie uns telefonisch.",
      },
      { status: 500 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const geburtsdatum = String(payload.geburtsdatum ?? "").trim();
  const plz = String(payload.plz ?? "").trim();
  const subject = String(payload.subject ?? "").trim();
  const message = String(payload.message ?? "").trim();
  // Attribution (from the client tracking helper).
  const gclid = String(payload.gclid ?? "").trim();
  const quelle = String(payload.quelle ?? "Direct").trim();
  const seite = String(payload.seite ?? "").trim();

  // Required fields — E-Mail is now optional, phone is the primary contact.
  if (!name || !phone || !subject || !message) {
    return NextResponse.json(
      {
        error:
          "Bitte füllen Sie alle Pflichtfelder aus (Name, Telefon, Betreff, Nachricht).",
      },
      { status: 400 },
    );
  }

  // Validate the e-mail only if one was provided.
  if (email && !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
      { status: 400 },
    );
  }

  const subjectLabel = SUBJECT_LABELS[subject] ?? subject;
  const safe = {
    name: escapeHtml(name),
    email: email ? escapeHtml(email) : "—",
    phone: escapeHtml(phone),
    geburtsdatum: geburtsdatum ? escapeHtml(geburtsdatum) : "—",
    plz: plz ? escapeHtml(plz) : "—",
    subjectLabel: escapeHtml(subjectLabel),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  const html = `
  <div style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background:#f3f4f6; padding:24px;">
    <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e5e7eb;">
      <div style="background:linear-gradient(135deg,#15803d,#166534); padding:24px 28px;">
        <p style="margin:0; color:#ffffff; font-size:20px; font-weight:700;">Neue Kontaktanfrage</p>
        <p style="margin:4px 0 0; color:rgba(255,255,255,0.8); font-size:14px;">über das Formular auf versicherungkompass.de</p>
      </div>
      <div style="padding:28px;">
        <table style="width:100%; border-collapse:collapse; font-size:15px; color:#111827;">
          <tr>
            <td style="padding:8px 0; color:#6b7280; width:130px; vertical-align:top;">Name</td>
            <td style="padding:8px 0; font-weight:600;">${safe.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280; vertical-align:top;">Telefon</td>
            <td style="padding:8px 0; font-weight:600;"><a href="tel:${safe.phone}" style="color:#15803d; text-decoration:none;">${safe.phone}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280; vertical-align:top;">E-Mail</td>
            <td style="padding:8px 0;">${email ? `<a href="mailto:${safe.email}" style="color:#15803d; text-decoration:none;">${safe.email}</a>` : "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280; vertical-align:top;">Geburtsdatum</td>
            <td style="padding:8px 0;">${safe.geburtsdatum}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280; vertical-align:top;">PLZ</td>
            <td style="padding:8px 0;">${safe.plz}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280; vertical-align:top;">Interesse</td>
            <td style="padding:8px 0;">${safe.subjectLabel}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280; vertical-align:top;">Quelle</td>
            <td style="padding:8px 0;">${escapeHtml(quelle)}${gclid ? ` · <span style="color:#9ca3af;">GCLID: ${escapeHtml(gclid)}</span>` : ""}</td>
          </tr>
        </table>
        <div style="margin-top:20px; padding-top:20px; border-top:1px solid #e5e7eb;">
          <p style="margin:0 0 8px; color:#6b7280; font-size:15px;">Nachricht</p>
          <p style="margin:0; color:#111827; font-size:15px; line-height:1.6;">${safe.message}</p>
        </div>
      </div>
      <div style="padding:16px 28px; background:#f9fafb; border-top:1px solid #e5e7eb;">
        <p style="margin:0; color:#9ca3af; font-size:12px;">Antworten Sie direkt auf diese E-Mail, um ${safe.name} zu kontaktieren.</p>
      </div>
    </div>
  </div>`;

  const text = [
    "Neue Kontaktanfrage über versicherungkompass.de",
    "",
    `Name: ${name}`,
    `Telefon: ${phone}`,
    `E-Mail: ${email || "—"}`,
    `Geburtsdatum: ${geburtsdatum || "—"}`,
    `PLZ: ${plz || "—"}`,
    `Interesse: ${subjectLabel}`,
    `Quelle: ${quelle}${gclid ? ` (GCLID: ${gclid})` : ""}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `Kontaktanfrage: ${subjectLabel} – ${name}`,
      html,
      text,
      // Reply directly to the sender only if they left an e-mail.
      ...(email ? { replyTo: email } : {}),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        },
        { status: 502 },
      );
    }

    // Best-effort: also log the lead to Google Sheets (never blocks the response).
    await logToGoogleSheets({
      eventType: "form",
      name,
      telefon: phone,
      email,
      geburtsdatum,
      plz,
      interesse: subjectLabel,
      nachricht: message,
      priority: "Normal",
      quelle,
      gclid,
      seite,
    });

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json(
      {
        error:
          "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 },
    );
  }
}
