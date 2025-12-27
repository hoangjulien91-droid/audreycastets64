import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client with service_role key for server-side operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Helper function to send emails via Resend API directly
async function sendEmail({
  from,
  to,
  subject,
  html,
  replyTo,
}: {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      ...(replyTo && { reply_to: replyTo }),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Resend API error:', error);
    throw new Error(`Resend API error: ${error}`);
  }

  return await response.json();
}

// Templates HTML pour les emails
const getConfirmationEmailHtml = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #1F2937; background-color: #FDF8F6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: white; }
    .header { background: linear-gradient(135deg, #EC4899 0%, #A855F7 100%); padding: 40px 30px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 28px; }
    .content { padding: 40px 30px; }
    .content h2 { color: #EC4899; font-size: 24px; margin-top: 0; }
    .content p { margin: 16px 0; }
    .footer { background: #F3F4F6; padding: 30px; text-align: center; font-size: 14px; color: #6B7280; }
    .button { display: inline-block; background: #EC4899; color: white; padding: 14px 28px; text-decoration: none; border-radius: 9999px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✨ Audrey Castets</h1>
      <p style="color: white; margin: 10px 0 0 0;">Psychologue du Travail</p>
    </div>
    <div class="content">
      <h2>Merci ${name} !</h2>
      <p>J'ai bien reçu votre message et je vous remercie de votre confiance.</p>
      <p><strong>Je reviendrai vers vous sous 24h maximum.</strong></p>
      <p>En attendant, n'hésitez pas à consulter mes services et mon approche sur le site.</p>
      <p style="margin-top: 30px; color: #6B7280; font-size: 14px;">
        💗 Prenez soin de vous<br>
        Audrey Castets
      </p>
    </div>
    <div class="footer">
      <p>📞 07 43 68 72 97 | ✉️ contact@audrey-castets.fr</p>
      <p>Psychologue du Travail - Spécialisée en TCC et EFT</p>
    </div>
  </div>
</body>
</html>
`;

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
  phone?: string;
  service_type?: string;
  message: string;
  submittedAt: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #1F2937; background-color: #FDF8F6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: white; }
    .header { background: linear-gradient(135deg, #EC4899 0%, #A855F7 100%); padding: 30px; color: white; }
    .content { padding: 30px; }
    .info-box { background: #FCE7F3; border-left: 4px solid #EC4899; padding: 20px; margin: 20px 0; border-radius: 8px; }
    .info-row { margin: 12px 0; }
    .label { font-weight: 600; color: #EC4899; }
    .message-box { background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 Nouveau message de contact</h1>
      <p style="margin: 5px 0 0 0;">Reçu le ${submittedAt}</p>
    </div>
    <div class="content">
      <div class="info-box">
        <div class="info-row"><span class="label">Nom :</span> ${name}</div>
        <div class="info-row"><span class="label">Email :</span> <a href="mailto:${email}">${email}</a></div>
        ${phone ? `<div class="info-row"><span class="label">Téléphone :</span> ${phone}</div>` : ''}
        ${service_type ? `<div class="info-row"><span class="label">Type :</span> ${service_type}</div>` : ''}
      </div>
      <h3>Message :</h3>
      <div class="message-box">
        ${message.replace(/\n/g, '<br>')}
      </div>
      <p style="color: #6B7280; font-size: 14px; margin-top: 30px;">
        💡 Vous pouvez répondre directement à cet email pour contacter ${name}.
      </p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service_type } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont requis' },
        { status: 400 }
      );
    }

    // Validation email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Insert into Supabase database
    const { data: contactData, error: dbError } = await supabaseAdmin
      .from('contact_submissions')
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
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'enregistrement de votre message' },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString('fr-FR', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const emailsSent = {
      confirmation: false,
      notification: false,
    };

    // Email de confirmation au visiteur
    try {
      const confirmationHtml = getConfirmationEmailHtml(name);
      const confirmationResult = await sendEmail({
        from: 'Audrey Castets <contact@audreycastets.fr>',
        to: email,
        subject: '✨ Confirmation de réception - Audrey Castets',
        html: confirmationHtml,
      });

      if (confirmationResult.id) {
        emailsSent.confirmation = true;
        console.log('✅ Email de confirmation envoyé:', confirmationResult.id);
      }
    } catch (emailError) {
      console.error('❌ Erreur envoi email de confirmation:', emailError);
    }

    // Email de notification à l'admin
    try {
      const adminHtml = getAdminNotificationHtml({
        name,
        email,
        phone,
        service_type,
        message,
        submittedAt,
      });

      const adminEmail = process.env.ADMIN_EMAIL || 'audrey.castets@gmail.com';
      const notificationResult = await sendEmail({
        from: 'Notifications <contact@audreycastets.fr>',
        to: adminEmail,
        subject: `🔔 Nouveau message de ${name}`,
        html: adminHtml,
        replyTo: email,
      });

      if (notificationResult.id) {
        emailsSent.notification = true;
        console.log('✅ Email de notification envoyé:', notificationResult.id);
      }
    } catch (emailError) {
      console.error('❌ Erreur envoi email de notification:', emailError);
    }

    // Logger l'envoi des emails dans Supabase
    if (contactData?.id) {
      try {
        await supabaseAdmin
          .from('contact_submissions')
          .update({
            email_sent_confirmation: emailsSent.confirmation,
            email_sent_notification: emailsSent.notification,
            email_sent_at: new Date().toISOString(),
          })
          .eq('id', contactData.id);
      } catch (logError) {
        console.error('❌ Erreur lors du logging des emails:', logError);
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: emailsSent.confirmation 
          ? 'Votre message a été envoyé avec succès ! Vous allez recevoir un email de confirmation.'
          : 'Votre message a été envoyé avec succès. Vous recevrez une réponse sous 24h.',
        data: contactData,
        emailsSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Erreur générale:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi de votre message' },
      { status: 500 }
    );
  }
}