import { ServiceData } from "../../../types/service-types";

export const depression: ServiceData = {
  slug: "depression",
  category: "particuliers",
  title: "Dépression",
  shortDescription:
    "Accompagnement thérapeutique pour sortir de la dépression et retrouver le goût de vivre.",
  fullDescription:
    "La dépression n'est pas une fatalité ni un manque de volonté. C'est une maladie qui nécessite une prise en charge adaptée. Mon accompagnement vise à briser le cercle vicieux de l'isolement et des pensées sombres, pour reconstruire pas à pas vos ressources internes et votre plaisir de vivre.",
  iconName: "CloudRain",
  ctaLabel: "Prendre rendez-vous",
  socialProofLabel: "Accompagnement bienveillant",
  vulgarisation: {
    title: "Comprendre la dépression",
    description:
      "La dépression est comme un brouillard épais qui fausse votre perception de la réalité. Elle vous fait voir tout en noir et vide vos batteries. La thérapie est le phare qui vous aide à retrouver votre chemin.",
  },
  methodology: [
    { title: "Accueil et Sécurité", description: "Création d'un espace de parole sans jugement." },
    {
      title: "Activation Comportementale",
      description: "Réintroduction progressive de petites activités gratifiantes.",
    },
    {
      title: "Restructuration Cognitive",
      description: "Travail sur les pensées dévalorisantes et le désespoir.",
    },
    {
      title: "Prévention de la Rechute",
      description: "Identification des signes avant-coureurs et outils de protection.",
    },
  ],
  benefits: [
    "Sortir de l'isolement",
    "Comprendre les mécanismes de sa dépression",
    "Retrouver progressivement de l'énergie",
    "Reconstruire une image de soi positive",
  ],
  testimonials: [
    {
      quote: "Grâce à vous, je vois enfin le bout du tunnel. Merci pour votre patience.",
      author: "Sophie R.",
      role: "Patiente",
    },
  ],
  faq: [
    {
      question: "La dépression se soigne-t-elle vraiment ?",
      answer:
        "Oui, la dépression se soigne très bien, surtout avec une combinaison de psychothérapie et, si nécessaire, d'aide médicale.",
    },
  ],
  bioFocus:
    "Avec une grande douceur, je vous accompagne à votre rythme pour dissiper le brouillard et retrouver vos couleurs.",
  relatedServices: ["therapies-cognitivo-comportementales-tcc", "confiance-estime-de-soi"],
};
