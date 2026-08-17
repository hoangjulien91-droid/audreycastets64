import { NextRequest, NextResponse } from "next/server";
import { MBIAnswer } from "@/types/mbi";
import { calculateMBIResults } from "@/lib/utils/mbi-calculations";
import { MBI_QUESTIONS } from "@/lib/data/mbi-questions";
import {
  sendEmail,
  escapeHtml,
  checkRateLimit,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_FROM_EMAIL,
} from "@/lib/resend";

// Template Email Client (Simplifié / Pédagogique)
const getClientEmailHtml = (name: string, results: ReturnType<typeof calculateMBIResults>) => {
  const safeName = escapeHtml(name);
  const safeAssessment = escapeHtml(results.globalAssessment);

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; color: #1F2937; line-height: 1.6; background-color: #FDF8F6; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background: #FFFFFF; border-radius: 12px; overflow: hidden; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .header { background: #FCE7F3; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px; }
    .header h1 { color: #831843; font-size: 22px; margin: 0; }
    .score-box { background: #F9FAFB; border: 1px solid #E5E7EB; padding: 14px 18px; margin: 10px 0; border-radius: 8px; }
    .highlight { font-weight: bold; }
    .footer { font-size: 12px; color: #6B7280; margin-top: 30px; text-align: center; border-top: 1px solid #E5E7EB; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Votre Bilan Pré-diagnostic Burnout (MBI)</h1>
    </div>
    <p>Bonjour ${safeName},</p>
    <p>Vous avez complété l'inventaire de Burnout de Maslach (MBI). Voici la synthèse de vos résultats :</p>
    
    <div class="score-box">
      <h3 style="margin:0 0 6px 0; font-size:15px; color:#374151;">Épuisement Professionnel (SEP)</h3>
      <p style="margin:0;">Niveau : <span class="highlight" style="color: ${results.dimensions.SEP.color}">${results.dimensions.SEP.label}</span> (${results.dimensions.SEP.score}/54)</p>
    </div>
    
    <div class="score-box">
      <h3 style="margin:0 0 6px 0; font-size:15px; color:#374151;">Dépersonnalisation / Cynisme (SD)</h3>
      <p style="margin:0;">Niveau : <span class="highlight" style="color: ${results.dimensions.SD.color}">${results.dimensions.SD.label}</span> (${results.dimensions.SD.score}/30)</p>
    </div>
    
    <div class="score-box">
      <h3 style="margin:0 0 6px 0; font-size:15px; color:#374151;">Accomplissement Personnel (SAP)</h3>
      <p style="margin:0;">Niveau : <span class="highlight" style="color: ${results.dimensions.SAP.color}">${results.dimensions.SAP.label}</span> (${results.dimensions.SAP.score}/48)</p>
    </div>

    <div style="background:#EEF2FF; border-left:4px solid #6366F1; padding:16px; border-radius:6px; margin-top:20px;">
      <p style="margin:0; font-weight:600; color:#312E81;">Appréciation Globale :</p>
      <p style="margin:6px 0 0 0; color:#1E1B4B;">${safeAssessment}</p>
    </div>

    <p style="margin-top: 24px; font-size:13px; color:#6B7280;">
      <em>Note : Ce test est un outil de dépistage indicatif et ne constitue pas un diagnostic médical. Si vous ressentez une souffrance au travail, un accompagnement personnalisé peut vous aider à retrouver votre équilibre.</em>
    </p>

    <div class="footer">
      <p><strong>Audrey Castets</strong> — Psychologue du Travail (TCC & EFT)</p>
      <p>📞 07 43 68 72 97 | ✉️ contact@audrey-castets.fr</p>
    </div>
  </div>
</body>
</html>
`;
};

interface MBIRequestData {
  answers: MBIAnswer[];
  userData: {
    name: string;
    email: string;
    website_url?: string;
  };
}

// Template Email Admin (Détaillé pour Audrey)
const getAdminEmailHtml = (
  data: MBIRequestData,
  results: ReturnType<typeof calculateMBIResults>
) => {
  const safeName = escapeHtml(data.userData.name);
  const safeEmail = escapeHtml(data.userData.email);

  const answersHtml = data.answers
    .map((a: MBIAnswer) => {
      const q = MBI_QUESTIONS.find((que) => que.id === a.questionId);
      return `<li><strong>Q${a.questionId} (${escapeHtml(q?.dimension)}):</strong> ${a.value}/6 - ${escapeHtml(q?.text)}</li>`;
    })
    .join("");

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: 'Inter', Arial, sans-serif; color: #1F2937; line-height: 1.6;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E7EB; border-radius: 10px;">
    <h2 style="color: #EC4899; border-bottom: 2px solid #FCE7F3; padding-bottom: 8px;">🔥 Nouveau Test MBI (Burnout) Complété</h2>
    <p><strong>Candidat :</strong> ${safeName} (<a href="mailto:${safeEmail}">${safeEmail}</a>)</p>
    <p><strong>Date :</strong> ${new Date().toLocaleString("fr-FR")}</p>
    
    <div style="background: #FDF2F8; padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 4px solid #DB2777;">
      <h3 style="margin-top:0; color:#831843;">Résultats Calculés :</h3>
      <ul style="padding-left:20px; margin-bottom:10px;">
        <li><strong>SEP (Épuisement) :</strong> ${results.dimensions.SEP.score} (${results.dimensions.SEP.label})</li>
        <li><strong>SD (Dépersonnalisation) :</strong> ${results.dimensions.SD.score} (${results.dimensions.SD.label})</li>
        <li><strong>SAP (Accomplissement) :</strong> ${results.dimensions.SAP.score} (${results.dimensions.SAP.label})</li>
      </ul>
      <p style="margin:0;"><strong>Synthèse :</strong> ${escapeHtml(results.globalAssessment)}</p>
    </div>

    <h3>Détail des Réponses :</h3>
    <ul style="font-size: 13px; color: #4B5563; padding-left: 20px;">${answersHtml}</ul>
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

    const rateCheck = checkRateLimit("mbi-test", clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json({ error: rateCheck.error }, { status: 429 });
    }

    const body = await request.json();
    const { answers, userData } = body;

    // Honeypot check
    if (userData?.website_url) {
      console.warn("🤖 Bot detected via Honeypot in MBI test");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json({ error: "Format de réponses invalide" }, { status: 400 });
    }

    // 1. Calculate Results Server-Side
    const results = calculateMBIResults(answers);

    // 2. Send Emails via Resend directly
    const adminEmail = process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;

    // Email Admin (Audrey)
    const adminSubject = `🔔 Nouveau Test MBI : ${userData?.name || "Visiteur"}`;
    const adminHtml = getAdminEmailHtml({ answers, userData }, results);
    await sendEmail({
      to: adminEmail,
      from: DEFAULT_FROM_EMAIL,
      subject: adminSubject,
      html: adminHtml,
      replyTo: userData?.email || undefined,
    });

    // Email Client (if provided)
    if (userData?.email) {
      await sendEmail({
        to: userData.email,
        from: DEFAULT_FROM_EMAIL,
        subject: "Votre Bilan Burnout MBI - Audrey Castets",
        html: getClientEmailHtml(userData.name || "Visiteur", results),
      });
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error("❌ MBI API Error:", error);
    return NextResponse.json({ error: "Une erreur est survenue lors du traitement du test." }, { status: 500 });
  }
}
