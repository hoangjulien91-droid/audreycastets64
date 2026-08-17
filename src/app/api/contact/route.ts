import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import {
  sendEmail,
  escapeHtml,
  checkRateLimit,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_FROM_EMAIL,
} from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Format d'email invalide"),
  phone: z.string().optional().nullable(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  service_type: z.string().optional().nullable(),
  website_url: z.string().optional(), // Honeypot anti-spam
});

// Create Supabase client with service_role key for server-side operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Template HTML pour l'email de confirmation au visiteur
const getConfirmationEmailHtml = (name: string, message: string) => {
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message);

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation de réception - Audrey Castets</title>
  <style>
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1F2937; background-color: #FDF8F6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(135deg, #EC4899 0%, #A855F7 100%); padding: 36px 28px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 26px; font-weight: 700; }
    .header p { margin: 8px 0 0 0; opacity: 0.95; font-size: 15px; }
    .content { padding: 32px 28px; }
    .greeting { font-size: 18px; font-weight: 600; color: #1F2937; margin-bottom: 16px; }
    .info-card { background: #FCE7F3; border-left: 4px solid #EC4899; padding: 18px 20px; border-radius: 8px; margin: 24px 0; }
    .info-card p { margin: 6px 0; font-size: 14px; color: #1F2937; }
    .quote-box { background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px; margin: 20px 0; font-size: 14px; color: #4B5563; }
    .footer { background: #F9FAFB; padding: 24px; text-align: center; font-size: 13px; color: #6B7280; border-top: 1px solid #E5E7EB; }
    .footer a { color: #EC4899; text-decoration: none; font-weight: 500; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✨ Audrey Castets</h1>
      <p>Psychologue du Travail & Accompagnement Holistique</p>
    </div>
    <div class="content">
      <p class="greeting">Bonjour ${safeName},</p>
      <p>J'ai bien reçu votre message et je vous remercie de votre confiance.</p>
      
      <div class="info-card">
        <p><strong>⏰ Délai de réponse :</strong> Je reviendrai vers vous sous <strong>24h maximum</strong>.</p>
        <p><strong>🎁 Premier entretien :</strong> Profitez de 15 minutes offertes pour faire connaissance.</p>
        <p><strong>🔒 Confidentialité :</strong> Vos échanges sont strictement protégés par le secret professionnel.</p>
      </div>

      <p style="font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 6px;">Rappel de votre message :</p>
      <div class="quote-box">
        <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
      </div>

      <p style="margin-top: 28px; color: #4B5563;">
        À très bientôt,<br>
        <strong>Audrey Castets</strong><br>
        <span style="font-size: 13px; color: #6B7280;">Psychologue du Travail • Spécialisée TCC, EFT & Burnout</span>
      </p>
    </div>
    <div class="footer">
      <p>📞 <a href="tel:0743687297">07 43 68 72 97</a> | ✉️ <a href="mailto:contact@audrey-castets.fr">contact@audrey-castets.fr</a></p>
      <p>Cabinet à Anglet & Ondres • Téléconsultation sécurisée partout en France</p>
      <p style="margin-top: 12px; font-size: 11px; color: #9CA3AF;">© ${new Date().getFullYear()} Audrey Castets. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>
`;
};

// Template HTML pour l'email de notification à l'administrateur (Audrey)
const getAdminNotificationHtml = ({
  name,
  email,
  phone,
  service_type,
  message,
  submittedAt,
}: {
  name: string;
  email: string;
  phone?: string | null;
  service_type?: string | null;
  message: string;
  submittedAt: string;
}) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "");
  const safeServiceType = escapeHtml(service_type || "Non précisé");
  const safeMessage = escapeHtml(message);

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1F2937; background-color: #F3F4F6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #EC4899 0%, #A855F7 100%); padding: 28px; color: white; }
    .badge { display: inline-block; background: rgba(255,255,255,0.25); padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 8px; }
    .header h1 { margin: 0; font-size: 22px; }
    .content { padding: 28px; }
    .info-box { background: #FCE7F3; border-left: 4px solid #EC4899; padding: 18px; margin-bottom: 20px; border-radius: 6px; }
    .info-row { margin: 8px 0; font-size: 15px; }
    .label { font-weight: 700; color: #831843; width: 110px; display: inline-block; }
    .message-box { background: #F9FAFB; border: 1px solid #E5E7EB; padding: 18px; border-radius: 8px; margin: 16px 0; font-size: 15px; color: #1F2937; }
    .footer { background: #F9FAFB; padding: 20px; text-align: center; font-size: 13px; color: #6B7280; border-top: 1px solid #E5E7EB; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">🔔 NOUVEAU MESSAGE</div>
      <h1>Demande de Contact</h1>
      <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">Reçu le ${escapeHtml(submittedAt)}</p>
    </div>
    <div class="content">
      <div class="info-box">
        <div class="info-row"><span class="label">👤 Nom :</span> <strong>${safeName}</strong></div>
        <div class="info-row"><span class="label">📧 Email :</span> <a href="mailto:${safeEmail}">${safeEmail}</a></div>
        ${safePhone ? `<div class="info-row"><span class="label">📞 Téléphone :</span> <a href="tel:${safePhone}">${safePhone}</a></div>` : ""}
        <div class="info-row"><span class="label">🏷️ Profil :</span> ${safeServiceType}</div>
      </div>
      
      <h3 style="color: #374151; font-size: 16px; margin: 20px 0 8px 0;">Message reçu :</h3>
      <div class="message-box">
        <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
      </div>

      <p style="color: #6B7280; font-size: 13px; margin-top: 24px;">
        💡 <em>Vous pouvez répondre directement à cet email pour contacter ${safeName}.</em>
      </p>
    </div>
    <div class="footer">
      <p>Message envoyé depuis le formulaire de contact de <strong>audreycastets.fr</strong></p>
    </div>
  </div>
</body>
</html>
`;
};

export async function POST(request: NextRequest) {
  try {
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // 1. Rate limiting check
    const rateCheck = checkRateLimit("contact-form", clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json({ error: rateCheck.error }, { status: 429 });
    }

    const body = await request.json();

    // 2. Honeypot check (anti-bot)
    if (body.website_url) {
      console.warn("🤖 Bot detected via Honeypot in contact form");
      return NextResponse.json(
        { success: true, message: "Message reçu." },
        { status: 200 }
      );
    }

    // 3. Zod Validation
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const errorMsg = validation.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const { name, email, phone, message, service_type } = validation.data;

    // 4. Insert into Supabase database (resilient)
    let contactData: { id?: string } | null = null;
    try {
      const { data, error: dbError } = await supabaseAdmin
        .from("contact_submissions")
        .insert({
          name,
          email,
          phone: phone || null,
          message,
          service_type: service_type || null,
          read: false,
        })
        .select()
        .single();

      if (dbError) {
        console.warn("⚠️ Supabase DB insert error:", dbError.message);
      } else {
        contactData = data;
      }
    } catch (dbErr) {
      console.warn("⚠️ Supabase DB exception:", dbErr);
    }

    const submittedAt = new Date().toLocaleString("fr-FR", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailsSent = {
      confirmation: false,
      notification: false,
    };

    // 5. Send Notification Email to Admin (Audrey) via Resend
    const adminEmail = process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;
    const adminSubject = `🔔 Nouveau message de ${name} (${service_type || "Contact"})`;
    const adminHtml = getAdminNotificationHtml({
      name,
      email,
      phone,
      service_type,
      message,
      submittedAt,
    });

    const adminResult = await sendEmail({
      to: adminEmail,
      from: DEFAULT_FROM_EMAIL,
      subject: adminSubject,
      html: adminHtml,
      replyTo: email,
    });

    if (adminResult.success) {
      emailsSent.notification = true;
      console.log("✅ Email de notification envoyé à l'admin via Resend:", adminResult.id);
    } else {
      console.error("❌ Erreur envoi notification admin:", adminResult.error);
    }

    // 6. Send Confirmation Email to Visitor via Resend
    const visitorSubject = "✨ Confirmation de réception - Audrey Castets";
    const visitorHtml = getConfirmationEmailHtml(name, message);

    const visitorResult = await sendEmail({
      to: email,
      from: DEFAULT_FROM_EMAIL,
      subject: visitorSubject,
      html: visitorHtml,
    });

    if (visitorResult.success) {
      emailsSent.confirmation = true;
      console.log("✅ Email de confirmation envoyé au visiteur via Resend:", visitorResult.id);
    } else {
      console.error("❌ Erreur envoi confirmation visiteur:", visitorResult.error);
    }

    // 7. Update Supabase log with email delivery status if available
    if (contactData?.id) {
      try {
        await supabaseAdmin
          .from("contact_submissions")
          .update({
            email_sent_confirmation: emailsSent.confirmation,
            email_sent_notification: emailsSent.notification,
            email_sent_at: new Date().toISOString(),
          })
          .eq("id", contactData.id);
      } catch (logError) {
        console.warn("⚠️ Logging emails in Supabase failed:", logError);
      }
    }

    // If at least one email was sent or DB succeeded, we consider it successful
    return NextResponse.json(
      {
        success: true,
        message: emailsSent.confirmation
          ? "Votre message a bien été envoyé ! Un email de confirmation vient de vous être adressé."
          : "Votre message a bien été envoyé. Je vous répondrai sous 24h.",
        data: contactData,
        emailsSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur générale API contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
