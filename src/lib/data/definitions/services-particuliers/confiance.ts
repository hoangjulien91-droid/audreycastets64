
import { ServiceData } from "../../../types/service-types";

export const confiance: ServiceData = {
  slug: 'confiance-estime-de-soi',
  category: 'particuliers',
  title: 'Confiance et estime de soi',
  shortDescription: 'Renforcement de la confiance et de l\'estime personnelle.',
  fullDescription: "Le manque de confiance en soi peut être un frein considérable dans la vie personnelle et professionnelle. Nous travaillons ensemble pour identifier vos forces, accepter vos imperfections et oser enfin prendre la place qui vous revient.",
  iconName: 'Smile',
  ctaLabel: 'Booster ma confiance',
  socialProofLabel: 'Osez être vous-même',
  vulgarisation: {
    title: 'Estime vs Confiance',
    description: "L'estime de soi, c'est votre valeur ('Je vaux quelque chose'). La confiance en soi, c'est votre capacité ('Je suis capable de faire'). Nous travaillons sur les deux piliers pour une assise solide."
  },
  methodology: [
    { title: 'Bilan Personnel', description: 'Inventaire de vos qualités, réussites et croyances limitantes.' },
    { title: 'Acceptation', description: 'Travail sur la bienveillance envers soi-même.' },
    { title: 'Affirmation de Soi', description: 'Apprendre à dire non et à exprimer ses besoins.' },
    { title: 'Passage à l\'Action', description: 'Défis progressifs pour ancrer la confiance dans le réel.' }
  ],
  benefits: [
    "Meilleure image de soi",
    "Fini le syndrome de l'imposteur",
    "Relations plus saines et authentiques",
    "Capacité à oser de nouveaux projets"
  ],
  testimonials: [
    { quote: "J'ai enfin osé demander cette promotion, et je l'ai eue !", author: "Karim B.", role: "Patient" }
  ],
  faq: [
    { question: "Est-ce que la confiance en soi s'apprend ?", answer: "Absolument. Ce n'est pas inné, c'est un muscle qui se travaille avec des exercices concrets." }
  ],
  bioFocus: "Je vous aide à porter un regard plus juste et plus doux sur vous-même, pour libérer tout votre potentiel.",
  relatedServices: ['developpement-personnel', 'gestion-stress-anxiete']
};
