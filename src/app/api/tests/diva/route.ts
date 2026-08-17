import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { calculateDivaResults } from "@/lib/utils/diva-calculations";
import { DIVA_SECTIONS, DIVA_IMPACT_DOMAINS } from "@/lib/data/diva-questions";
import { DivaAnswer, DivaImpactAnswer } from "@/types/diva";
import {
  sendEmail,
  escapeHtml,
  checkRateLimit,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_FROM_EMAIL,
} from "@/lib/resend";

// Init Supabase Admin
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

// Template Email Client (Synthèse pré-diagnostic TDAH)
const getClientEmailHtml = (name: string, results: ReturnType<typeof calculateDivaResults>) => {
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
    .header { background: #EEF2FF; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px; }
    .header h1 { color: #3730A3; font-size: 22px; margin: 0; }
    .score-card { background: #F8FAFC; border: 1px solid #E2E8F0; padding: 16px; border-radius: 8px; margin: 12px 0; }
    .footer { font-size: 12px; color: #6B7280; margin-top: 30px; text-align: center; border-top: 1px solid #E5E7EB; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Synthèse Pré-diagnostic TDAH (DIVA 2.0)</h1>
    </div>
    <p>Bonjour ${safeName},</p>
    <p>Vous avez complété l'entretien de dépistage TDAH adulte (DIVA 2.0). Voici la synthèse générée :</p>
    
    <div style="background: #F5F3FF; border-left: 4px solid #7C3AED; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <p style="margin:0; font-size: 15px; font-weight: bold; color: #4C1D95;">
        ${safeAssessment}
      </p>
    </div>

    <div class="score-card">
      <p style="margin: 4px 0;"><strong>🧠 Déficit Attentionnel :</strong> ${results.inattentionScore.adult}/9 (Adulte) • ${results.inattentionScore.child}/9 (Enfance)</p>
      <p style="margin: 4px 0;"><strong>⚡ Hyperactivité / Impulsivité :</strong> ${results.hyperactivityScore.adult}/9 (Adulte) • ${results.hyperactivityScore.child}/9 (Enfance)</p>
      <p style="margin: 4px 0;"><strong>📉 Retentissement :</strong> ${results.totalImpactScore.adult} domaines de vie impactés (Adulte)</p>
    </div>

    <p style="font-size: 13px; color: #6B7280; margin-top: 20px;">
      <em>Note importante : Ce document constitue un outil de pré-dépistage standardisé pour orienter une consultation spécialisée et ne se substitue pas à une évaluation neuropsychologique ou psychiatrique complète.</em>
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

// Template Email Admin (Détaillé pour analyse clinique)
const getAdminEmailHtml = (
  data: {
    answers: DivaAnswer[];
    impactAnswers: DivaImpactAnswer[];
    userData: {
      name: string;
      email: string;
      birthDate: string;
    };
  },
  results: ReturnType<typeof calculateDivaResults>
) => {
  const safeName = escapeHtml(data.userData.name);
  const safeEmail = escapeHtml(data.userData.email);
  const safeBirth = escapeHtml(data.userData.birthDate);

  const generateCriteriaList = (sectionId: string) => {
    const section = DIVA_SECTIONS.find((s) => s.id === sectionId);
    if (!section) return "";

    return section.criteria
      .map((c) => {
        const answer = data.answers.find((a) => a.criterionId === c.id);
        if (!answer) return "";

        const adultExamples = answer.examplesAdultChecked.map((i) => escapeHtml(c.examplesAdult[i])).join(", ");
        const childExamples = answer.examplesChildChecked.map((i) => escapeHtml(c.examplesChild[i])).join(", ");

        return `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>${escapeHtml(c.label)}</strong>: ${escapeHtml(c.description)}</td>
                <td style="padding: 8px; border: 1px solid #ddd; background: ${answer.presentAdult ? "#dcfce7" : "white"}">
                    <strong>${answer.presentAdult ? "OUI" : "Non"}</strong><br/>
                    <small>Ex: ${adultExamples}</small>
                </td>
                <td style="padding: 8px; border: 1px solid #ddd; background: ${answer.presentChild ? "#dbeafe" : "white"}">
                     <strong>${answer.presentChild ? "OUI" : "Non"}</strong><br/>
                    <small>Ex: ${childExamples}</small>
                </td>
            </tr>
         `;
      })
      .join("");
  };

  const inattentionRows = generateCriteriaList("inattention");
  const hyperactivityRows = generateCriteriaList("hyperactivity");

  const impactRows = data.impactAnswers
    .map((ia) => {
      const domain = DIVA_IMPACT_DOMAINS.find((d) => d.id === ia.domainId);
      return `
        <li>
            <strong>${escapeHtml(domain?.label)}:</strong> 
            Adulte: ${ia.presentAdult ? "OUI" : "Non"} | Enfance: ${ia.presentChild ? "OUI" : "Non"}
        </li>
      `;
    })
    .join("");

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; color: #1F2937; line-height: 1.5;">
  <h2>🧠 Rapport Clinique TDAH (DIVA 2.0) - ${safeName}</h2>
  <p><strong>Email :</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
  <p><strong>Date de Naissance :</strong> ${safeBirth}</p>
  <p><strong>Date du Test :</strong> ${new Date().toLocaleString("fr-FR")}</p>
  
  <div style="background: #FDF2F8; padding: 15px; border: 1px solid #DB2777; border-radius: 8px; margin-bottom: 20px;">
    <h3 style="margin-top:0; color:#831843;">Synthèse Automatique</h3>
    <p><strong>${escapeHtml(results.globalAssessment)}</strong></p>
    <ul>
        <li>Inattention : Adulte ${results.inattentionScore.adult}/9 — Enfant ${results.inattentionScore.child}/9</li>
        <li>Hyperactivité : Adulte ${results.hyperactivityScore.adult}/9 — Enfant ${results.hyperactivityScore.child}/9</li>
        <li>Impact Fonctionnel : ${results.totalImpactScore.adult} domaines (Adulte)</li>
    </ul>
  </div>

  <h3>Section 1 : Déficit Attentionnel</h3>
  <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
    <thead>
        <tr style="background: #F3F4F6;">
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Critère</th>
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Adulte (6 mois)</th>
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Enfance (5-12 ans)</th>
        </tr>
    </thead>
    <tbody>${inattentionRows}</tbody>
  </table>

  <h3>Section 2 : Hyperactivité / Impulsivité</h3>
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 15px;">
    <thead>
        <tr style="background: #F3F4F6;">
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Critère</th>
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Adulte (6 mois)</th>
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Enfance (5-12 ans)</th>
        </tr>
    </thead>
    <tbody>${hyperactivityRows}</tbody>
  </table>

  <h3>Retentissement Fonctionnel</h3>
  <ul>${impactRows}</ul>
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

    const rateCheck = checkRateLimit("diva-test", clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json({ error: rateCheck.error }, { status: 429 });
    }

    const body = await request.json();
    const { answers, impactAnswers, userData } = body;

    // Honeypot check
    if (userData?.website_url) {
      console.warn("🤖 Bot detected via Honeypot in DIVA test");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 1. Calculate Results
    const results = calculateDivaResults(answers, impactAnswers);

    // 2. Save to database (optional / resilient)
    try {
      const { error } = await supabaseAdmin.from("diva_submissions").insert({
        user_email: userData?.email || null,
        user_name: userData?.name || null,
        birth_date: userData?.birthDate || null,
        inattention_score_adult: results.inattentionScore.adult,
        inattention_score_child: results.inattentionScore.child,
        hyperactivity_score_adult: results.hyperactivityScore.adult,
        hyperactivity_score_child: results.hyperactivityScore.child,
        impact_score_adult: results.totalImpactScore.adult,
        answers_json: { answers, impactAnswers },
        global_assessment: results.globalAssessment,
      });
      if (error) console.warn("Supabase DIVA DB warning:", error.message);
    } catch (dbError) {
      console.warn("Supabase DIVA DB error:", dbError);
    }

    // 3. Send Emails via Resend
    const adminEmail = process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;

    // Email Admin (Full Report)
    const adminSubject = `🧠 Rapport Clinique TDAH : ${userData?.name || "Visiteur"}`;
    const adminHtml = getAdminEmailHtml({ answers, impactAnswers, userData }, results);
    await sendEmail({
      to: adminEmail,
      from: DEFAULT_FROM_EMAIL,
      subject: adminSubject,
      html: adminHtml,
      replyTo: userData?.email || undefined,
    });

    // Email Client (Summary)
    if (userData?.email) {
      await sendEmail({
        to: userData.email,
        from: DEFAULT_FROM_EMAIL,
        subject: "Votre Bilan Pré-diagnostic TDAH - Audrey Castets",
        html: getClientEmailHtml(userData.name || "Visiteur", results),
      });
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error("❌ DIVA API Error:", error);
    return NextResponse.json({ error: "Une erreur est survenue lors du traitement du test." }, { status: 500 });
  }
}
