import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { calculateDivaResults } from '@/lib/utils/diva-calculations';
import { DIVA_SECTIONS, DIVA_IMPACT_DOMAINS } from '@/lib/data/diva-questions';
import { DivaAnswer, DivaImpactAnswer } from '@/types/diva';

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
    return null;
  }
}

// Template Email Client (Concise/Ethical)
const getClientEmailHtml = (name: string, results: ReturnType<typeof calculateDivaResults>) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; color: #333; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #eef2ff; padding: 20px; border-radius: 8px; text-align: center; }
    .footer { font-size: 12px; color: #666; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Synthèse Pré-diagnostic TDAH</h1>
    </div>
    <p>Bonjour ${name},</p>
    <p>Vous avez complété l'entretien DIVA 2.0 (Diagnostic Interview for ADHD in Adults).</p>
    
    <h3>Votre profil suggère :</h3>
    <p style="font-size: 18px; font-weight: bold; color: #4338ca; padding: 15px; background: #f5f3ff; border-radius: 8px;">
        ${results.globalAssessment}
    </p>

    <p><strong>Détail des scores cliniques :</strong></p>
    <ul>
        <li><strong>Inattention :</strong> ${results.inattentionScore.adult}/9 (Adulte) - ${results.inattentionScore.child}/9 (Enfance)</li>
        <li><strong>Hyperactivité/Impulsivité :</strong> ${results.hyperactivityScore.adult}/9 (Adulte) - ${results.hyperactivityScore.child}/9 (Enfance)</li>
    </ul>

    <p>
        Note : Ce document n'est pas un diagnostic médical formel. Il permet cependant d'orienter une consultation spécialisée.
        Un rapport détaillé a été généré pour le professionnel de santé.
    </p>

    <div class="footer">
      <p>Audrey Castets - Psychologue du Travail et TCC</p>
    </div>
  </div>
</body>
</html>
`;

// Template Email Admin (Detailed for Clinical Analysis)
const getAdminEmailHtml = (
    data: { 
        answers: DivaAnswer[], 
        impactAnswers: DivaImpactAnswer[], 
        userData: any 
    }, 
    results: ReturnType<typeof calculateDivaResults>
) => {
  
  // Helper to generate list of checked examples
  const generateCriteriaList = (sectionId: string) => {
     const section = DIVA_SECTIONS.find(s => s.id === sectionId);
     if (!section) return '';

     return section.criteria.map(c => {
         const answer = data.answers.find(a => a.criterionId === c.id);
         if (!answer) return '';
         
         const adultExamples = answer.examplesAdultChecked.map(i => c.examplesAdult[i]).join(', ');
         const childExamples = answer.examplesChildChecked.map(i => c.examplesChild[i]).join(', ');

         return `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>${c.label}</strong>: ${c.description}</td>
                <td style="padding: 8px; border: 1px solid #ddd; background: ${answer.presentAdult ? '#dcfce7' : 'white'}">
                    <strong>${answer.presentAdult ? 'OUI' : 'Non'}</strong><br/>
                    <small>Ex: ${adultExamples}</small>
                </td>
                <td style="padding: 8px; border: 1px solid #ddd; background: ${answer.presentChild ? '#dbeafe' : 'white'}">
                     <strong>${answer.presentChild ? 'OUI' : 'Non'}</strong><br/>
                    <small>Ex: ${childExamples}</small>
                </td>
            </tr>
         `;
     }).join('');
  };

  const inattentionRows = generateCriteriaList('inattention');
  const hyperactivityRows = generateCriteriaList('hyperactivity');

  const impactRows = data.impactAnswers.map(ia => {
      const domain = DIVA_IMPACT_DOMAINS.find(d => d.id === ia.domainId);
      return `
        <li>
            <strong>${domain?.label}:</strong> 
            Adulte: ${ia.presentAdult ? 'OUI' : 'Non'} | Enfance: ${ia.presentChild ? 'OUI' : 'Non'}
        </li>
      `;
  }).join('');

  return `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif;">
  <h2>Rapport Clinique DIVA 2.0 - ${data.userData.name}</h2>
  <p><strong>Email:</strong> ${data.userData.email}</p>
  <p><strong>Date Naissance:</strong> ${data.userData.birthDate}</p>
  <p><strong>Date Test:</strong> ${new Date().toLocaleString('fr-FR')}</p>
  
  <div style="background: #fdf2f8; padding: 15px; border: 1px solid #db2777; margin-bottom: 20px;">
    <h3>Synthèse Automatique</h3>
    <p><strong>${results.globalAssessment}</strong></p>
    <ul>
        <li>Inattention: Adulte ${results.inattentionScore.adult}/9 - Enfant ${results.inattentionScore.child}/9</li>
        <li>Hyperactivité: Adulte ${results.hyperactivityScore.adult}/9 - Enfant ${results.hyperactivityScore.child}/9</li>
        <li>Impact Fonctionnel: ${results.totalImpactScore.adult} domaines (Adulte)</li>
    </ul>
  </div>

  <h3>Section 1 : Déficit Attentionnel</h3>
  <table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background: #f3f4f6;">
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Critère</th>
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Adulte (6 mois)</th>
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Enfance (5-12 ans)</th>
        </tr>
    </thead>
    <tbody>${inattentionRows}</tbody>
  </table>

  <h3>Section 2 : Hyperactivité / Impulsivité</h3>
  <table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background: #f3f4f6;">
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Critère</th>
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Adulte (6 mois)</th>
            <th style="text-align:left; padding:8px; border:1px solid #ddd;">Enfance (5-12 ans)</th>
        </tr>
    </thead>
    <tbody>${hyperactivityRows}</tbody>
  </table>

  <h3>Impact Fonctionnel</h3>
  <ul>${impactRows}</ul>
</body>
</html>
`;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, impactAnswers, userData } = body;

    // 1. Calculate Results
    const results = calculateDivaResults(answers, impactAnswers);

    // 2. Save to database (optional/resilient)
    try {
        const { error } = await supabaseAdmin
            .from('diva_submissions')
            .insert({
                user_email: userData.email,
                user_name: userData.name,
                birth_date: userData.birthDate,
                inattention_score_adult: results.inattentionScore.adult,
                inattention_score_child: results.inattentionScore.child,
                hyperactivity_score_adult: results.hyperactivityScore.adult,
                hyperactivity_score_child: results.hyperactivityScore.child,
                impact_score_adult: results.totalImpactScore.adult,
                answers_json: { answers, impactAnswers },
                global_assessment: results.globalAssessment
            });
         if (error) console.warn('Supabase DB error:', error.message);
    } catch (dbError) {
        console.warn('Supabase DB error:', dbError);
    }

    // 3. Send Emails
    const adminEmail = process.env.ADMIN_EMAIL || 'audrey-castets@outlook.fr';
    
    // Email Admin (Full Report)
    await sendEmail({
      to: adminEmail,
      subject: `🧠 Rapport Clinique TDAH : ${userData.name}`,
      html: getAdminEmailHtml({ answers, impactAnswers, userData }, results),
      replyTo: userData.email
    });

    // Email Client (Summary)
    if (userData.email) {
      await sendEmail({
        to: userData.email,
        subject: 'Votre Bilan Pré-diagnostic TDAH - Audrey Castets',
        html: getClientEmailHtml(userData.name, results)
      });
    }

    return NextResponse.json({ success: true, results });

  } catch (error) {
    console.error('DIVA API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
