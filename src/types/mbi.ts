export type MBIQuestion = {
  id: number;
  text: string;
  dimension: "SEP" | "SD" | "SAP"; // SEP: Épuisement, SD: Dépersonnalisation, SAP: Accomplissement
};

export type MBIAnswer = {
  questionId: number;
  value: number; // 0 to 6
};

export type MBIScore = {
  score: number;
  level: "low" | "moderate" | "high";
  label: string;
  color: string; // Hex color for UI
};

export type MBIResult = {
  dimensions: {
    SEP: MBIScore;
    SD: MBIScore;
    SAP: MBIScore;
  };
  globalAssessment: string;
  date: string;
};

export type MBIUserData = {
  email?: string;
  name?: string;
};
