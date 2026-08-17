/**
 * Resend Email Utility & Security Helper
 * Unified email sending for Audrey Castets website (aligned with ikerketa-stable architecture)
 */

export const DEFAULT_FROM_EMAIL =
  process.env.CONTACT_FROM || "Audrey Castets <contact@audreycastets.fr>";
export const DEFAULT_ADMIN_EMAIL =
  process.env.ADMIN_EMAIL || "audrey.castets@gmail.com";

const RATE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes window
const RATE_MAX_REQUESTS = 5; // max 5 requests per window per IP

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  from?: string;
}

export interface EmailResponse {
  id?: string;
  error?: string;
  success: boolean;
}

/**
 * Escapes user inputs to avoid HTML injection in emails
 */
export function escapeHtml(value: string | null | undefined): string {
  if (!value) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * In-memory IP rate limiter for form submissions
 */
export function checkRateLimit(
  label: string,
  clientIp: string = "unknown"
): { allowed: boolean; error?: string } {
  const store = globalThis as typeof globalThis & {
    __formRateMaps?: Map<string, Map<string, number[]>>;
  };

  store.__formRateMaps ??= new Map();
  let rateMap = store.__formRateMaps.get(label);
  if (!rateMap) {
    rateMap = new Map();
    store.__formRateMaps.set(label, rateMap);
  }

  const now = Date.now();
  const timestamps = (rateMap.get(clientIp) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );

  if (timestamps.length >= RATE_MAX_REQUESTS) {
    console.warn(`[${label}] Rate limit exceeded for IP: ${clientIp}`);
    return {
      allowed: false,
      error: "Trop de demandes envoyées. Veuillez patienter quelques minutes.",
    };
  }

  timestamps.push(now);
  rateMap.set(clientIp, timestamps);
  return { allowed: true };
}

/**
 * Sends an email using the Resend API directly
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
  from = DEFAULT_FROM_EMAIL,
}: SendEmailOptions): Promise<EmailResponse> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is not defined in environment variables.");
    return { success: false, error: "Clé API Resend manquante" };
  }

  try {
    const payload: Record<string, unknown> = {
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    };

    if (text) {
      payload.text = text;
    }

    if (replyTo) {
      payload.reply_to = replyTo;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Resend API Error:", data);
      return {
        success: false,
        error: data.message || `Erreur Resend (${response.status})`,
      };
    }

    return {
      success: true,
      id: data.id,
    };
  } catch (error) {
    console.error("❌ Exception during sendEmail:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur réseau inconnue",
    };
  }
}
