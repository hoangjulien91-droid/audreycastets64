import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { MBIAnswer } from '@/types/mbi';
import { calculateMBIResults } from '@/lib/utils/mbi-calculations';
import { MBI_QUESTIONS } from '@/lib/data/mbi-questions';

// Init Supabase Admin
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

// Resend Email Helper
async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Audrey Castets <contact@audreycastets.fr>',
        to,
        subject,
        html,
        ...(replyTo && { reply_to: replyTo }),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend Error:', errorText);
      throw new Error(`Resend API Error: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Email sending failed:', error);
    // On ne bloque pas le flux si l'email échoue, mais on log l'erreur
    return null;
  }
}

// Template Email Client (Simplifié/Pédagogique)
const getClientEmailHtml = (name: string, results: ReturnType<typeof calculateMBIResults>) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; color: #333; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #fdf2f8; padding: 20px; border-radius: 8px; text-align: center; }
    .score-box { background: #f3f4f6; padding: 15px; margin: 10px 0; border-radius: 8px; }
    .highlight { color: #db2777; font-weight: bold; }
    .footer { font-size: 12px; color: #666; margin-top: 30px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Votre Bilan Pré-diagnostic Burnout</h1>
    </div>
    <p>Bonjour ${name},</p>
    <p>Vous avez complété le test d'inventaire de Burnout (MBI). Voici une synthèse de vos résultats :</p>
    
    <div class="score-box">
      <h3>Épuisement Professionnel (SEP)</h3>
      <p>Niveau : <span class="highlight" style="color: ${results.dimensions.SEP.color}">${results.dimensions.SEP.label}</span></p>
    </div>
    
    <div class="score-box">
      <h3>Dépersonnalisation (SD)</h3>
      <p>Niveau : <span class="highlight" style="color: ${results.dimensions.SD.color}">${results.dimensions.SD.label}</span></p>
    </div>
    
    <div class="score-box">
      <h3>Accomplissement Personnel (SAP)</h3>
      <p>Niveau : <span class="highlight" style="color: ${results.dimensions.SAP.color}">${results.dimensions.SAP.label}</span></p>
    </div>

    <p><strong>Appréciation Globale :</strong> ${results.globalAssessment}</p>

    <p style="margin-top: 20px;">
      <em>Note : Ce test est un outil de dépistage et ne remplace pas un diagnostic médical. Si vous ressentez une détresse, n'hésitez pas à consulter.</em>
    </p>

    <div class="footer">
      <p>Audrey Castets - Psychologue du Travail</p>
    </div>
  </div>
</body>
</html>
`;

interface MBIRequestData {
  answers: MBIAnswer[];
  userData: {
    name: string;
    email: string;
  };
}

// Template Email Admin (Détaillé)
const getAdminEmailHtml = (data: MBIRequestData, results: ReturnType<typeof calculateMBIResults>) => {
  const answersHtml = data.answers.map((a: MBIAnswer) => {
    const q = MBI_QUESTIONS.find(que => que.id === a.questionId);
    return `<li><strong>Q${a.questionId} (${q?.dimension}):</strong> ${a.value}/6 - ${q?.text}</li>`;
  }).join('');

  return `
<!DOCTYPE html>
<html>
<body>
  <h2>Nouveau Test MBI Complété</h2>
  <p><strong>Candidat :</strong> ${data.userData.name} (${data.userData.email})</p>
  <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
  
  <h3>Résultats Calculés</h3>
  <ul>
    <li>SEP: ${results.dimensions.SEP.score} (${results.dimensions.SEP.label})</li>
    <li>SD: ${results.dimensions.SD.score} (${results.dimensions.SD.label})</li>
    <li>SAP: ${results.dimensions.SAP.score} (${results.dimensions.SAP.label})</li>
  </ul>
  <p><strong>Synthèse :</strong> ${results.globalAssessment}</p>

  <h3>Détail des Réponses</h3>
  <ul>${answersHtml}</ul>
</body>
</html>
`;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, userData } = body;

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json({ error: 'Invalid answers format' }, { status: 400 });
    }

    // 1. Calculate Results Server-Side
    const results = calculateMBIResults(answers);

    // 2. Save to Supabase (if table exists)
    // On tente l'insertion mais on ne crash pas si ça échoue (sauf si erreur critique)
    try {
        const { error } = await supabaseAdmin
            .from('mbi_submissions') // Assumed table name
            .insert({
                user_email: userData.email,
                user_name: userData.name,
                sep_score: results.dimensions.SEP.score,
                sd_score: results.dimensions.SD.score,
                sap_score: results.dimensions.SAP.score,
                answers_json: answers,
                global_assessment: results.globalAssessment
            });
        
        if (error) {
            console.warn("Supabase insertion failed (table might not exist):", error.message);
        }
    } catch (dbError) {
        console.warn("Supabase error:", dbError);
    }

    // 3. Send Emails
    const adminEmail = process.env.ADMIN_EMAIL || 'audrey.castets@gmail.com';
    
    // Email Admin
    await sendEmail({
      to: adminEmail,
      subject: `🔔 Nouveau Test MBI : ${userData.name}`,
      html: getAdminEmailHtml({ answers, userData }, results),
      replyTo: userData.email
    });

    // Email Client (only if email provided)
    if (userData.email) {
      await sendEmail({
        to: userData.email,
        subject: 'Votre Bilan MBI - Audrey Castets',
        html: getClientEmailHtml(userData.name || 'Visiteur', results)
      });
    }

    return NextResponse.json({ success: true, results });

  } catch (error) {
    console.error('MBI API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
