export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  category: "particuliers" | "professionnels";
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Using string to avoid Lucide dependency in types if possible, or keep it generic
  ctaLabel: string;
  socialProofLabel: string;
  vulgarisation: {
    title: string;
    description: string;
  };
  methodology: ServiceStep[];
  benefits: string[];
  testimonials: ServiceTestimonial[];
  faq: ServiceFAQ[];
  bioFocus: string;
  scientificBasis?: {
    title: string;
    introduction: string;
    points: { label: string; description: string }[];
    conclusion: string;
  };
  caseStudy?: {
    title: string;
    context: string;
    problem: string;
    approach: string;
    result: string;
  };
  keyStats?: {
    value: string;
    label: string;
    source?: string;
  }[];
  relatedServices: string[];
  relatedTests?: ("mbi" | "diva")[];
}
