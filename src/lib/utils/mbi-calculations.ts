import { MBIAnswer, MBIResult, MBIScore } from "@/types/mbi";
import { MBI_QUESTIONS } from "@/lib/data/mbi-questions";

const getLevelSEP = (score: number): MBIScore => {
  // SEP < 17 (Faible), 18 < SEP < 29 (Modéré), 30 < SEP (Élevé)
  // Interpretation inclusive: [0-17] Faible, [18-29] Modéré, [30+] Élevé
  if (score <= 17) return { score, level: 'low', label: 'Faible', color: '#10B981' }; 
  if (score <= 29) return { score, level: 'moderate', label: 'Modéré', color: '#F59E0B' }; 
  return { score, level: 'high', label: 'Élevé', color: '#EF4444' }; 
};

const getLevelSD = (score: number): MBIScore => {
  // SD < 5 (Faible), 6 < SD < 11 (Modéré), 12 < SD (Élevé)
  // Interpretation inclusive: [0-5] Faible, [6-11] Modéré, [12+] Élevé
  if (score <= 5) return { score, level: 'low', label: 'Faible', color: '#10B981' };
  if (score <= 11) return { score, level: 'moderate', label: 'Modéré', color: '#F59E0B' };
  return { score, level: 'high', label: 'Élevé', color: '#EF4444' };
};

const getLevelSAP = (score: number): MBIScore => {
  // SAP < 33 (Faible), 34 < SAP < 39 (Modéré), 40 < SAP (Élevé)
  // Interpretation inclusive: [0-33] Faible (Attention), [34-39] Modéré, [40+] Élevé (Bon)
  // Logic inversée: Score élevé = Bon état
  if (score >= 40) return { score, level: 'high', label: 'Élevé', color: '#10B981' }; // Green (Good)
  if (score >= 34) return { score, level: 'moderate', label: 'Modéré', color: '#F59E0B' }; // Orange
  return { score, level: 'low', label: 'Faible', color: '#EF4444' }; // Red (Bad)
};

export const calculateMBIResults = (answers: MBIAnswer[]): MBIResult => {
  let sepScore = 0;
  let sdScore = 0;
  let sapScore = 0;

  answers.forEach((answer) => {
    const question = MBI_QUESTIONS.find((q) => q.id === answer.questionId);
    if (!question) return;

    if (question.dimension === 'SEP') sepScore += answer.value;
    else if (question.dimension === 'SD') sdScore += answer.value;
    else if (question.dimension === 'SAP') sapScore += answer.value;
  });

  const sep = getLevelSEP(sepScore);
  const sd = getLevelSD(sdScore);
  const sap = getLevelSAP(sapScore);

  let globalAssessment = "";
  if (sep.level === 'high' && sd.level === 'high' && sap.level === 'low') {
    globalAssessment = "Burnout Sévère - Consultation fortement recommandée.";
  } else if (sep.level === 'high' || (sd.level === 'high' && sap.level === 'low')) {
    globalAssessment = "Risque Élevé - Un avis professionnel est conseillé.";
  } else if (sep.level === 'moderate' || sd.level === 'moderate' || sap.level === 'moderate') {
    globalAssessment = "Risque Modéré - Surveillance nécessaire.";
  } else {
    globalAssessment = "Pas de signe d'alarme significatif.";
  }

  return {
    dimensions: {
      SEP: sep,
      SD: sd,
      SAP: sap,
    },
    globalAssessment,
    date: new Date().toISOString(),
  };
};
