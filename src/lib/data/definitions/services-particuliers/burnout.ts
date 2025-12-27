
import { ServiceData } from "../../../types/service-types";

export const burnout: ServiceData = {
  slug: 'burn-out-epuisement-professionnel',
  category: 'particuliers',
  title: 'Burn-out et épuisement professionnel',
  shortDescription: 'Accompagnement spécialisé pour prévenir et traiter l\'épuisement professionnel.',
  fullDescription: "Le burn-out est un effondrement physique et psychique dû à un stress chronique au travail. Ce n'est pas une faiblesse. Mon accompagnement vous aide à comprendre comment vous en êtes arrivé là, à récupérer physiquement, et à reconstruire un rapport sain au travail.",
  iconName: 'BatteryWarning',
  ctaLabel: 'Sortir du Burn-out',
  socialProofLabel: 'Spécialiste du sujet',
  vulgarisation: {
    title: 'Le Burn-out expliqué',
    description: "Imaginez une maison dont les fils électriques surchauffent pendant des mois. Un jour, les plombs sautent pour protéger la maison de l'incendie. Le burn-out, c'est ce disjoncteur de sécurité qui vous oblige à vous arrêter."
  },
  methodology: [
    { title: 'Arrêt et Déculpabilisation', description: 'Accepter l\'arrêt nécessaire et comprendre que ce n\'est pas un échec.' },
    { title: 'Reconstruction Physiologique', description: 'Restaurer le sommeil et l\'énergie.' },
    { title: 'Analyse des Causes', description: 'Détecter les facteurs organisationnels et personnels.' },
    { title: 'Retour au Travail', description: 'Préparer une reprise progressive et sécurisée.' }
  ],
  benefits: [
    "Comprendre pour ne plus subir",
    "Récupérer son énergie vitale",
    "Définir ses limites pro/perso",
    "Reprise du travail sereine"
  ],
  testimonials: [
    { quote: "Je pensais ne jamais pouvoir retravailler. Aujourd'hui, je suis épanouie dans un nouveau poste.", author: "Claire F.", role: "Cadre Bancaire" }
  ],
  faq: [
    { question: "Combien de temps faut-il pour se remettre ?", answer: "C'est variable, de quelques mois à un an. L'important est de ne pas brûler les étapes de la reconstruction." }
  ],
  bioFocus: "Intervenante en entreprise sur les RPS, je connais parfaitement les mécanismes du monde du travail qui mènent à l'épuisement.",
  relatedServices: ['gestion-stress-anxiete', 'therapies-cognitivo-comportementales-tcc'],
  relatedTests: ['mbi']
};
