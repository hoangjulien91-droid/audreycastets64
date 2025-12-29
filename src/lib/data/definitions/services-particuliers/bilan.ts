import { ServiceData } from "../../../types/service-types";

export const bilan: ServiceData = {
  slug: "bilan-de-competences",
  category: "particuliers",
  title: "Bilan de compétences",
  shortDescription: "Accompagnement structuré pour clarifier votre projet professionnel.",
  fullDescription:
    "À une croisée des chemins ? Le bilan de compétences est un temps pour soi, pour faire le point sur votre parcours, vos compétences et vos aspirations. Ensemble, nous construisons un projet professionnel réaliste et motivant, en accord avec le marché du travail.",
  iconName: "FileCheck",
  ctaLabel: "Démarrer mon bilan",
  socialProofLabel: "Investissez sur votre avenir",
  vulgarisation: {
    title: "Le GPS Professionnel",
    description:
      "Vous êtes perdu dans votre carrière ? Le bilan de compétences recalcule votre itinéraire en fonction de votre position actuelle (compétences) et de votre destination rêvée (aspirations).",
  },
  methodology: [
    { title: "Phase Préliminaire", description: "Définition de vos besoins et engagement." },
    {
      title: "Phase d'Investigation",
      description: "Analyse du parcours, intérêts, valeurs et personnalité (Tests inclus).",
    },
    { title: "Phase de Conclusion", description: "Validation du projet et plan d'action concret." },
    { title: "Suivi", description: "Point d'étape à 6 mois." },
  ],
  benefits: [
    "Vision claire de ses atouts",
    "Projet professionnel validé",
    "Regain de motivation",
    "Meilleure employabilité",
  ],
  testimonials: [
    {
      quote:
        "Ce bilan m'a permis de réaliser que j'avais des compétences transférables insoupçonnées.",
      author: "Paul H.",
      role: "En transition",
    },
  ],
  faq: [
    {
      question: "Est-ce finançable par le CPF ?",
      answer: "Oui, la plupart des bilans de compétences sont éligibles au financement CPF.",
    },
  ],
  bioFocus:
    "Psychologue du travail, je connais aussi bien l'humain que les réalités de l'entreprise et du marché de l'emploi.",
  relatedServices: ["reconversion-professionnelle", "confiance-estime-de-soi"],
};
