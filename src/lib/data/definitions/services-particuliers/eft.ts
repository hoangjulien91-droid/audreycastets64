import { ServiceData } from "../../../types/service-types";

export const eft: ServiceData = {
  slug: "eft-emotional-freedom-techniques",
  category: "particuliers",
  title: "EFT (Emotional Freedom Techniques)",
  shortDescription: "Technique psycho-corporelle pour libérer les émotions négatives rapidement.",
  fullDescription:
    "L'EFT est une technique de libération émotionnelle qui combine la psychologie et la stimulation de points d'acupression. En tapotant doucement sur certains méridiens tout en se focalisant sur le problème, nous permettons au corps et à l'esprit de dissoudre la charge émotionnelle associée aux souvenirs ou aux situations stressantes.",
  iconName: "Zap",
  ctaLabel: "Découvrir l'EFT en séance",
  socialProofLabel: "Soulagement souvent immédiat",
  vulgarisation: {
    title: "L'EFT simplement",
    description:
      "C'est comme une acupuncture émotionnelle, mais sans aiguilles. On tapote du bout des doigts pour 'court-circuiter' la réaction de stress du cerveau et apaiser instantanément le système nerveux.",
  },
  methodology: [
    {
      title: "Identification",
      description: "Ciblage précis de l'émotion ou du souvenir douloureux.",
    },
    {
      title: "Évaluation",
      description: "Mesure de l'intensité émotionnelle sur une échelle de 0 à 10.",
    },
    {
      title: "Ronde de Tapotements",
      description: "Stimulation des points méridiens en verbalisant le problème.",
    },
    {
      title: "Réévaluation",
      description: "Vérification de la baisse de l'intensité émotionnelle.",
    },
  ],
  benefits: [
    "Résultats souvent rapides et surprenants",
    "Technique douce et non invasive",
    "Autonomie possible après apprentissage",
    "Efficace sur les traumas et phobies",
  ],
  testimonials: [
    {
      quote: "Je n'y croyais pas trop au début, mais ma peur de l'avion a disparu en 3 séances.",
      author: "Marc D.",
      role: "Patient EFT",
    },
    {
      quote: "Un outil magique pour gérer mes crises d'angoisse au travail.",
      author: "Julie M.",
      role: "Patiente EFT",
    },
  ],
  faq: [
    {
      question: "Est-ce que ça marche pour tout le monde ?",
      answer:
        "L'EFT fonctionne sur une grande majorité de personnes, même les sceptiques, car elle agit directement sur le système nerveux.",
    },
    {
      question: "Puis-je le faire seul chez moi ?",
      answer:
        "Oui, l'un des buts est de vous apprendre la 'ronde' pour que vous puissiez l'utiliser en autonomie.",
    },
  ],
  bioFocus:
    "Praticienne certifiée, j'intègre l'EFT pour débloquer des situations où la parole seule ne suffit plus.",
  relatedServices: ["gestion-stress-anxiete", "burn-out-epuisement-professionnel"],
};
