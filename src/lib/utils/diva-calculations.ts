import { DivaAnswer, DivaImpactAnswer, DivaResult } from "@/types/diva";
import { DIVA_SECTIONS } from "@/lib/data/diva-questions";

export const calculateDivaResults = (
  answers: DivaAnswer[],
  impactAnswers: DivaImpactAnswer[]
): DivaResult => {
  // Init scores
  const scores = {
    inattention: { adult: 0, child: 0 },
    hyperactivity: { adult: 0, child: 0 },
    impact: { adult: 0, child: 0 }
  };

  // 1. Calculate Symptom Scores
  answers.forEach(answer => {
    // Find which section this criterion belongs to
    // A1 = Inattention, A2 = Hyperactivity
    const isHyperactivity = answer.criterionId.startsWith("A2");
    const targetScore = isHyperactivity ? scores.hyperactivity : scores.inattention;

    if (answer.presentAdult) targetScore.adult++;
    if (answer.presentChild) targetScore.child++;
  });

  // 2. Calculate Impact Scores (Critère C)
  // We need to check if functioning is impaired in at least 2 domains
  impactAnswers.forEach(answer => {
    if (answer.presentAdult) scores.impact.adult++;
    if (answer.presentChild) scores.impact.child++;
  });

  // 3. Global Assessment Logic (Simplified for User Feedback)
  // DSM-IV Criteria: >= 6 symptoms in either domain AND impairment in >= 2 domains
  const hasInattentionAdult = scores.inattention.adult >= 6;
  const hasHyperactivityAdult = scores.hyperactivity.adult >= 6;
  const hasImpactAdult = scores.impact.adult >= 2;
  
  const hasInattentionChild = scores.inattention.child >= 6;
  const hasHyperactivityChild = scores.hyperactivity.child >= 6;
  // Note: For a formal diagnosis, symptoms must be present in childhood too.
  // Here we provide a "Pre-diagnostic" assessment.

  let globalAssessment = "Aucune tendance significative détectée.";

  if (hasImpactAdult) {
    if (hasInattentionAdult && hasHyperactivityAdult) {
      if (hasInattentionChild && hasHyperactivityChild) {
        globalAssessment = "Profil TDAH Mixte probable (Symptômes persistants depuis l'enfance). Consultation recommandée.";
      } else {
        globalAssessment = "Profil TDAH Mixte suggéré (Symptômes actuels significatifs). Une évaluation clinique est conseillée.";
      }
    } else if (hasInattentionAdult) {
       if (hasInattentionChild) {
        globalAssessment = "Profil TDAH Inattentif probable (Symptômes persistants depuis l'enfance). Consultation recommandée.";
       } else {
        globalAssessment = "Profil TDAH Inattentif suggéré. Une évaluation clinique est conseillée.";
       }
    } else if (hasHyperactivityAdult) {
        if (hasHyperactivityChild) {
            globalAssessment = "Profil TDAH Hyperactif/Impulsif probable (Symptômes persistants depuis l'enfance). Consultation recommandée.";
        } else {
            globalAssessment = "Profil TDAH Hyperactif/Impulsif suggéré. Une évaluation clinique est conseillée.";
        }
    } else {
        // Subthreshold but with impact
        if (scores.inattention.adult >= 4 || scores.hyperactivity.adult >= 4) {
            globalAssessment = "Quelques symptômes présents avec impact fonctionnel. Une surveillance ou un avis professionnel peut être utile.";
        }
    }
  } else {
      // Symptoms but no impact
      if (hasInattentionAdult || hasHyperactivityAdult) {
          globalAssessment = "Symptômes présents mais sans impact fonctionnel majeur déclaré (Critère C non rempli).";
      }
  }

  return {
    inattentionScore: scores.inattention,
    hyperactivityScore: scores.hyperactivity,
    totalImpactScore: scores.impact,
    globalAssessment,
    date: new Date().toISOString()
  };
};
