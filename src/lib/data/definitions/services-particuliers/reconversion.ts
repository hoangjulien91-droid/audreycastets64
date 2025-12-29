import { ServiceData } from "../../../types/service-types";

export const reconversion: ServiceData = {
  slug: "reconversion-professionnelle",
  category: "particuliers",
  title: "Reconversion professionnelle",
  shortDescription: "Accompagnement dans votre changement de carrière.",
  fullDescription:
    "Changer de métier est une aventure passionnante mais vertigineuse. Je vous accompagne à chaque étape : de l'idée floue au projet concret, en passant par la gestion des peurs et la validation de la faiabilité économique. Ne restez pas seul face à ce grand changement.",
  iconName: "Compass",
  ctaLabel: "Oser changer de vie",
  socialProofLabel: "Changez en sécurité",
  vulgarisation: {
    title: "Sauter le pas",
    description:
      "La reconversion n'est pas un saut dans le vide, c'est la construction d'un pont solide entre votre vie d'avant et celle qui vous correspond aujourd'hui.",
  },
  methodology: [
    {
      title: "Bilan et Introspection",
      description: "Pourquoi voulez-vous changer ? Quels sont vos moteurs ?",
    },
    { title: "Exploration des Pistes", description: "Recherches, enquêtes métiers, immersion." },
    { title: "Validation Réaliste", description: "Adéquation profil/marché/finances." },
    {
      title: "Lancement",
      description: "Stratégie de formation et de recherche d'emploi/création.",
    },
  ],
  benefits: [
    "Sécuriser son changement de vie",
    "Gagner du temps et éviter les erreurs",
    "Soutien psychologique durant la transition",
    "Plan d'action structuré",
  ],
  testimonials: [
    {
      quote:
        "J'avais peur de tout quitter. Aujourd'hui je vis de ma passion et je ne regrette rien.",
      author: "Amélie S.",
      role: "Fleuriste (ex-Comptable)",
    },
  ],
  faq: [
    {
      question: "Est-ce le bon moment pour changer ?",
      answer:
        "Si la question vous obsède et que votre travail actuel vous pèse, c'est le moment d'y réfléchir sérieusement avec un pro.",
    },
  ],
  bioFocus:
    "J'ai accompagné des dizaines de transitions réussies. Je serai votre copilote pour naviguer dans ce changement.",
  relatedServices: ["bilan-de-competences", "burn-out-epuisement-professionnel"],
};
