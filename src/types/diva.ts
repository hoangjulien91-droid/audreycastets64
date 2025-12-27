export type DivaCriterion = {
  id: string; // e.g., "A1a", "A2a"
  label: string; // e.g., "A1"
  description: string;
  examplesAdult: string[];
  examplesChild: string[];
};

export type DivaSection = {
  id: 'inattention' | 'hyperactivity';
  title: string;
  criteria: DivaCriterion[];
};

export type DivaImpactDomain = {
  id: string;
  label: string;
  examplesAdult: string[];
  examplesChild: string[];
};

// Structure of user answers
export type DivaAnswer = {
  criterionId: string;
  presentAdult: boolean;
  presentChild: boolean;
  examplesAdultChecked: number[]; // Indices of checked examples
  examplesChildChecked: number[]; // Indices of checked examples
};

export type DivaImpactAnswer = {
  domainId: string;
  presentAdult: boolean;
  presentChild: boolean;
};

export type DivaResult = {
  inattentionScore: {
    adult: number;
    child: number;
  };
  hyperactivityScore: {
    adult: number;
    child: number;
  };
  totalImpactScore: {
    adult: number;
    child: number;
  };
  globalAssessment: string;
  date: string;
};

export type DivaUserData = {
  name: string;
  email: string;
  birthDate?: string;
};
