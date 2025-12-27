
import { ServiceData } from "../../../types/service-types";

export const stress: ServiceData = {
  slug: 'gestion-stress-anxiete',
  category: 'particuliers',
  title: 'Gestion du stress et de l\'anxiété',
  shortDescription: 'Outils pratiques pour gérer le stress quotidien et l\'anxiété.',
  fullDescription: "Le stress est une réaction normale, mais quand il devient chronique, il empoisonne la vie. Je vous transmets des techniques concrètes (respiration, restructuration cognitive, relaxation) pour apaiser votre mental et retrouver de la sérénité au quotidien.",
  iconName: 'Activity',
  ctaLabel: 'Apaiser mon stress',
  socialProofLabel: 'Techniques éprouvées',
  vulgarisation: {
    title: 'Le Stress, ami ou ennemi ?',
    description: "Le stress est utile pour fuir un danger (comme un ours). Mais votre cerveau réagit pareil pour un email urgent ! Nous allons apprendre à votre cerveau à faire la différence et à redescendre en pression."
  },
  methodology: [
    { title: 'Diagnostic', description: 'Identifier vos facteurs de stress personnels.' },
    { title: 'Régulation Corporelle', description: 'Apprentissage de la cohésion cardiaque et de la relaxation.' },
    { title: 'Gestion Mentale', description: 'Stopper les ruminations et les scénarios catastrophes.' },
    { title: 'Hygiène de Vie', description: 'Mettre en place des routines protectrices.' }
  ],
  benefits: [
    "Meilleur sommeil",
    "Diminution de l'irritabilité",
    "Capacité à lâcher prise",
    "Prévention des maladies liées au stress"
  ],
  testimonials: [
    { quote: "Les exercices de respiration m'ont sauvé la vie avant mes examens.", author: "Lucas P.", role: "Étudiant" }
  ],
  faq: [
    { question: "La gestion du stress, c'est juste de la relaxation ?", answer: "Non, c'est aussi un travail de fond sur votre façon de percevoir les événements et vos exigences envers vous-même." }
  ],
  bioFocus: "Mon approche est très pragmatique : vous repartez de chaque séance avec des outils concrets à tester.",
  relatedServices: ['eft-emotional-freedom-techniques', 'therapies-cognitivo-comportementales-tcc']
};
