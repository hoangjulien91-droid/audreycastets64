import { ServiceData } from "../../../types/service-types";

export const tcc: ServiceData = {
  slug: "therapies-cognitivo-comportementales-tcc",
  category: "particuliers",
  title: "Thérapies Cognitivo-Comportementales (TCC)",
  shortDescription:
    "Approche structurée pour identifier et modifier les pensées et comportements inadaptés.",
  fullDescription:
    "Les Thérapies Cognitivo-Comportementales (TCC) sont des thérapies brèves et validées scientifiquement qui se concentrent sur les interactions entre vos pensées, vos émotions et vos comportements. Plutôt que de se focaliser uniquement sur le passé, nous travaillons sur les difficultés actuelles pour trouver des solutions concrètes et durables.",
  iconName: "Brain",
  ctaLabel: "Réserver ma première séance TCC",
  socialProofLabel: "Méthode validée scientifiquement",
  vulgarisation: {
    title: "La TCC en bref",
    description:
      "Imaginez que votre cerveau est un ordinateur. Parfois, certains 'logiciels' (vos habitudes de pensée) plantent ou tournent en boucle. La TCC, c'est comme une reprogrammation bienveillante pour installer des logiciels plus performants et sereins.",
  },
  methodology: [
    {
      title: "Analyse Fonctionnelle",
      description: "Nous identifions ensemble les situations déclencheurs et vos réactions.",
    },
    {
      title: "Restructuration Cognitive",
      description: "Nous travaillons à assouplir vos pensées rigides ou négatives.",
    },
    {
      title: "Exposition Progressive",
      description: "Nous affrontons graduellement les situations redoutées dans un cadre sécurisé.",
    },
    { title: "Consolidation", description: "Vous apprenez à devenir votre propre thérapeute." },
  ],
  benefits: [
    "Efficacité prouvée sur l'anxiété et la dépression",
    "Thérapie brève et orientée solutions",
    "Outils concrets utilisables au quotidien",
    "Collaboration active patient-thérapeute",
  ],
  testimonials: [
    {
      quote:
        "J'ai enfin compris pourquoi je réagissais toujours de la même façon. Les outils m'aident tous les jours.",
      author: "Thomas L.",
      role: "Patient TCC",
    },
    {
      quote: "Une approche pragmatique qui m'a permis de reprendre le contrôle sur mes phobies.",
      author: "Sarah B.",
      role: "Patiente TCC",
    },
  ],
  faq: [
    {
      question: "Combien de temps dure une thérapie TCC ?",
      answer:
        "C'est une thérapie brève, généralement entre 10 et 20 séances selon la problématique.",
    },
    {
      question: "Est-ce compatible avec un traitement médicamenteux ?",
      answer:
        "Oui, tout à fait. La TCC est souvent recommandée en complément ou en alternative selon les cas.",
    },
  ],
  bioFocus:
    "Formée aux TCC depuis plus de 10 ans, j'utilise cette approche rigoureuse avec douceur pour vous aider à déconstruire les schémas qui vous limitent.",
  scientificBasis: {
    title: "La Science derrière les TCC",
    introduction:
      "Les Thérapies Cognitivo-Comportementales ne sont pas basées sur de simples intuitions, mais sur des décennies de recherches cliniques rigoureuses. Elles reposent sur le principe de neuroplasticité : notre cerveau peut apprendre et désapprendre tout au long de la vie.",
    points: [
      {
        label: "Validité Clinique",
        description:
          "Reconnue par l'OMS et la HAS (Haute Autorité de Santé) comme traitement de référence pour les troubles anxieux et dépressifs.",
      },
      {
        label: "Modèle STO",
        description:
          "Comprendre le lien entre Situation, Pensée (Cognition), Émotion et Comportement.",
      },
      {
        label: "Mesurabilité",
        description:
          "L'efficacité se mesure concrètement par la réduction des symptômes et l'atteinte d'objectifs définis.",
      },
    ],
    conclusion:
      "C'est la seule psychothérapie dont l'efficacité a été prouvée scientifiquement de manière aussi large.",
  },
  caseStudy: {
    title: "Sortir de l'Anxiété Sociale",
    context: "Pierre, 34 ans, ingénieur, évite toutes les réunions d'équipe de peur d'être jugé.",
    problem:
      "Pierre souffre d'anxiété sociale. Il pense : 'Si je prends la parole, je vais rougir, bafouiller, et tout le monde verra que je suis incompétent'. Résultat : il s'isole et sa carrière stagne.",
    approach:
      "Nous avons d'abord identifié ses pensées automatiques ('Lecture de pensée'). Puis, nous avons mis en place des expositions progressives : d'abord poser une question simple, puis présenter un slide, etc.",
    result:
      "Après 12 séances, Pierre anime les réunions hebdomadaires. Il a toujours un peu le trac, mais il ne l'empêche plus d'agir. Il a obtenu une promotion 6 mois plus tard.",
  },
  keyStats: [
    { value: "70%", label: "Taux de réussite moyen", source: "Inserm" },
    { value: "15", label: "Séances en moyenne", source: "Données cabinet" },
    { value: "1er", label: "Traitement Recommandé", source: "HAS" },
  ],
  relatedServices: ["gestion-stress-anxiete", "depression", "confiance-estime-de-soi"],
};
