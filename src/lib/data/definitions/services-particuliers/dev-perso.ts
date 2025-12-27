
import { ServiceData } from "../../../types/service-types";

export const devPerso: ServiceData = {
  slug: 'developpement-personnel',
  category: 'particuliers',
  title: 'Développement personnel',
  shortDescription: 'Mieux se connaître pour mieux vivre au quotidien.',
  fullDescription: "Le développement personnel n'est pas une quête égoïste de perfection, mais un chemin vers une meilleure connaissance de soi. Je vous accompagne pour clarifier vos valeurs, donner du sens à vos actions et vivre une vie plus alignée avec qui vous êtes vraiment.",
  iconName: 'Lightbulb',
  ctaLabel: 'Commencer mon cheminement',
  socialProofLabel: 'Alignez-vous avec vos valeurs',
  vulgarisation: {
    title: 'Devenir soi-même',
    description: "C'est enlever les couches d'oignon (les attentes des autres, les 'il faut') pour retrouver votre cœur, vos envies et votre propre boussole intérieure."
  },
  methodology: [
    { title: 'Exploration', description: 'Mieux comprendre votre fonctionnement et vos besoins.' },
    { title: 'Clarification des Valeurs', description: 'Qu\'est-ce qui est vraiment important pour vous ?' },
    { title: 'Levée des Blocages', description: 'Dépasser les peurs qui vous empêchent d\'avancer.' },
    { title: 'Réalisation', description: 'Mettre en place des projets qui ont du sens.' }
  ],
  benefits: [
    "Vie plus riche et pleine de sens",
    "Meilleure connaissance de soi",
    "Relations plus authentiques",
    "Sentiment d'accomplissement"
  ],
  testimonials: [
    { quote: "Je ne savais pas où j'allais. Maintenant j'ai un cap clair pour les 5 prochaines années.", author: "Valérie T.", role: "Patiente" }
  ],
  faq: [
    { question: "Quelle différence avec une thérapie classique ?", answer: "La thérapie soigne une souffrance. Le développement personnel vise l'épanouissement et l'optimisation de vos potentiels, même si vous allez bien." }
  ],
  bioFocus: "Je suis là pour vous poser les bonnes questions, celles qui font avancer et qui ouvrent des portes.",
  relatedServices: ['confiance-estime-de-soi', 'bilan-de-competences']
};
