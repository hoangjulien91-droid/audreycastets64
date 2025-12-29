import { ServiceData } from "../types/service-types";

export const servicesProfessionnels: ServiceData[] = [
  {
    slug: "prevention-risques-psychosociaux-rps",
    category: "professionnels",
    title: "Prévention des Risques Psychosociaux (RPS)",
    shortDescription: "Diagnostic et plan d'action pour la QVT.",
    fullDescription:
      "Les risques psychosociaux (stress, harcèlement, violences, épuisement) coûtent cher à l'entreprise et aux salariés. J'interviens pour réaliser un diagnostic précis de votre organisation, identifier les facteurs de risques et co-construire un plan de prévention adapté pour améliorer durablement la Qualité de Vie au Travail (QVT).",
    iconName: "ShieldAlert",
    ctaLabel: "Demander un audit RPS",
    socialProofLabel: "Obligation légale & Performance",
    vulgarisation: {
      title: "Les RPS, c'est quoi ?",
      description:
        "Ce sont les risques pour la santé mentale liés au travail : surcharge, manque d'autonomie, conflits... Les prévenir, c'est comme entretenir le moteur de votre entreprise pour éviter la panne.",
    },
    methodology: [
      { title: "Cadrage", description: "Définition des objectifs avec la direction et le CSE." },
      {
        title: "Diagnostic",
        description: "Questionnaires, entretiens, observations sur le terrain.",
      },
      { title: "Analyse", description: "Identification des facteurs de protection et de risque." },
      {
        title: "Restitution et Plan d'Action",
        description: "Préconisations concrètes et accompagnement à la mise en œuvre.",
      },
    ],
    benefits: [
      "Conformité légale (DUERP)",
      "Réduction de l'absentéisme et du turnover",
      "Amélioration du climat social",
      "Augmentation de la performance globale",
    ],
    testimonials: [
      {
        quote:
          "Un diagnostic clair qui a permis de libérer la parole et d'apaiser les tensions dans l'équipe.",
        author: "DRH",
        role: "PME Industrie",
      },
    ],
    faq: [
      {
        question: "Est-ce obligatoire ?",
        answer:
          "Oui, l'employeur a une obligation de sécurité de résultat concernant la santé physique et mentale de ses salariés.",
      },
    ],
    bioFocus:
      "Expertise méthodologique rigoureuse et neutralité pour garantir la confiance de tous les acteurs de l'entreprise.",
    relatedServices: ["formation-management-rh", "cellule-ecoute-soutien-psychologique"],
  },
  {
    slug: "recrutement-evaluation",
    category: "professionnels",
    title: "Recrutement et évaluation",
    shortDescription: "Sécuriser vos recrutements avec l'expertise psychologique.",
    fullDescription:
      "Un recrutement raté coûte cher. J'apporte mon expertise de psychologue pour évaluer en profondeur les candidats (personnalité, soft skills, motivations). Au-delà du CV, je vous aide à trouver la personne qui s'intégrera le mieux à votre culture d'entreprise et au poste.",
    iconName: "Users",
    ctaLabel: "Sécuriser mon recrutement",
    socialProofLabel: "La bonne personne au bon endroit",
    vulgarisation: {
      title: "Au-delà du CV",
      description:
        "Une compétence technique s'apprend. Une personnalité et un savoir-être sont beaucoup plus stables. C'est là que se joue la réussite d'un recrutement sur le long terme.",
    },
    methodology: [
      {
        title: "Analyse du Poste",
        description: "Définition précise du profil de compétences et comportemental.",
      },
      { title: "Sourcing et Tris", description: "(Optionnel) Recherche de candidats." },
      {
        title: "Évaluation Approfondie",
        description: "Entretiens structurés et passation de tests psychométriques (SOSIE, etc.).",
      },
      {
        title: "Aide à la Décision",
        description: "Rapport complet et débriefing pour choisir le meilleur candidat.",
      },
    ],
    benefits: [
      "Réduction des erreurs de casting",
      "Vision objective des candidats",
      "Gain de temps pour les RH/Managers",
      "Meilleure intégration des nouveaux",
    ],
    testimonials: [
      {
        quote: "L'éclairage psy nous a évité une erreur de recrutement majeure sur un poste clé.",
        author: "Directeur Général",
        role: "Start-up Tech",
      },
    ],
    faq: [
      {
        question: "Quels tests utilisez-vous ?",
        answer:
          "J'utilise principalement le SOSIE 2nd Generation pour évaluer la personnalité et les motivations, ainsi que des tests d'aptitudes si besoin.",
      },
    ],
    bioFocus:
      "Mon œil de psychologue détecte les nuances invisibles sur un CV pour un 'matching' humain durable.",
    relatedServices: ["formation-management-rh", "prevention-risques-psychosociaux-rps"],
  },
  {
    slug: "ateliers-prevention-stress",
    category: "professionnels",
    title: "Ateliers de prévention du stress",
    shortDescription: "Formations collectives pour le bien-être au travail.",
    fullDescription:
      "Sensibiliser et outiller vos équipes face au stress. Sous forme d'ateliers pratiques et interactifs, vos collaborateurs apprennent à repérer les signes de stress et à utiliser des techniques pour mieux le gérer au quotidien. Un moment de cohésion et de prévention santé.",
    iconName: "Zap",
    ctaLabel: "Organiser un atelier",
    socialProofLabel: "Prévention active",
    vulgarisation: {
      title: "La boîte à outils anti-stress",
      description:
        "On ne peut pas toujours supprimer le stress, mais on peut apprendre à surfer dessus plutôt que de se noyer. Ces ateliers donnent la planche de surf.",
    },
    methodology: [
      {
        title: "Comprendre",
        description: "Apports théoriques ludiques sur les mécanismes du stress.",
      },
      {
        title: "Expérimenter",
        description: "Exercices pratiques de respiration, relaxation, communication.",
      },
      {
        title: "Échanger",
        description: "Partage d'expériences entre collègues (renforce la cohésion).",
      },
      { title: "Appliquer", description: "Construction d'une routine bien-être au travail." },
    ],
    benefits: [
      "Équipes plus sereines et efficaces",
      "Amélioration de l'ambiance de travail",
      "Outillage concret des salariés",
      "Action visible de prévention",
    ],
    testimonials: [
      {
        quote:
          "Un moment de respiration qui a fait du bien à toute l'équipe. On utilise encore les outils 6 mois après.",
        author: "Manager",
        role: "Service Client",
      },
    ],
    faq: [
      {
        question: "Combien de participants ?",
        answer:
          "Pour garantir l'interactivité, je recommande des groupes de 8 à 12 personnes maximum.",
      },
    ],
    bioFocus:
      "Animation dynamique et bienveillante pour créer un espace sécurisant où chacun peut s'exprimer.",
    relatedServices: [
      "prevention-risques-psychosociaux-rps",
      "cellule-ecoute-soutien-psychologique",
    ],
  },
  {
    slug: "cellule-ecoute-soutien-psychologique",
    category: "professionnels",
    title: "Cellule d'écoute et soutien",
    shortDescription: "Espaces d'écoute confidentiels pour vos salariés.",
    fullDescription:
      "En période de changement, de crise ou simplement pour prévenir les risques, offrez à vos salariés un espace de parole neutre et confidentiel. La cellule d'écoute psychologique (sur site ou à distance) permet de désamorcer les situations de souffrance avant qu'elles ne s'aggravent.",
    iconName: "Ear",
    ctaLabel: "Mettre en place une permanence",
    socialProofLabel: "Soutien immédiat",
    vulgarisation: {
      title: "La soupape de sécurité",
      description:
        "Parfois, on ne peut pas parler à son manager ou à ses collègues. Avoir accès à un psychologue neutre permet de vider son sac et de trouver des ressources pour faire face.",
    },
    methodology: [
      {
        title: "Mise en place",
        description: "Communication auprès des salariés et définition des modalités.",
      },
      {
        title: "Permanences",
        description: "Créneaux dédiés (physique ou téléphone) pour des entretiens individuels.",
      },
      {
        title: "Suivi",
        description:
          "Reporting anonymisé (statistiques) pour l'entreprise sur les tendances observées.",
      },
      { title: "Alerte", description: "Signalement (avec accord) si situation de danger grave." },
    ],
    benefits: [
      "Désamorçage des crises individuelles",
      "Soutien concret aux salariés en difficulté",
      "Indicateur du climat social pour l'entreprise",
      "Réduction des arrêts maladie",
    ],
    testimonials: [
      {
        quote:
          "Savoir qu'on peut appeler quelqu'un en cas de coup dur, c'est très rassurant pour les équipes.",
        author: "Dirigeant",
        role: "Logistique",
      },
    ],
    faq: [
      {
        question: "Est-ce vraiment confidentiel ?",
        answer:
          "Absolument. Rien de ce qui est dit en entretien ne filtre vers l'entreprise. Seules des statistiques globales sont remontées.",
      },
    ],
    bioFocus: "Une écoute active et empathique pour accueillir la parole sans jugement.",
    relatedServices: ["prevention-risques-psychosociaux-rps", "ateliers-prevention-stress"],
  },
  {
    slug: "formation-management-rh",
    category: "professionnels",
    title: "Formation management et RH",
    shortDescription: "Former les managers à la dimension humaine et préventive.",
    fullDescription:
      "Les managers sont les premiers acteurs de la QVT. Je les forme à adopter une posture managériale bienveillante, à repérer les signaux faibles de souffrance chez leurs collaborateurs, et à mener des entretiens difficiles. Pour un management qui allie performance et respect de l'humain.",
    iconName: "GraduationCap",
    ctaLabel: "Former mes managers",
    socialProofLabel: "Management Responsable",
    vulgarisation: {
      title: "Le Manager-Jardinier",
      description:
        "Un bon manager ne tire pas sur la plante pour qu'elle pousse. Il crée les conditions (eau, soleil, terre) pour qu'elle grandisse. C'est ça le management bienveillant.",
    },
    methodology: [
      {
        title: "Analyse des Besoins",
        description: "Adapter la formation à votre culture d'entreprise.",
      },
      {
        title: "Apports Théoriques",
        description: "RPS, mécanismes du stress, communication non-violente.",
      },
      {
        title: "Mises en Situation",
        description:
          "Jeux de rôles sur des cas concrets (entretien de recadrage, annonce difficile).",
      },
      { title: "Co-développement", description: "Partage de pratiques entre pairs." },
    ],
    benefits: [
      "Managers plus à l'aise dans leur rôle",
      "Meilleure détection des risques",
      "Communication plus fluide dans les équipes",
      "Prévention des conflits",
    ],
    testimonials: [
      {
        quote:
          "Cette formation m'a donné les clés pour gérer mon équipe avec plus d'humanité sans perdre en exigence.",
        author: "Jean-Marc",
        role: "Manager Commercial",
      },
    ],
    faq: [
      {
        question: "Est-ce une formation au 'monde des bisounours' ?",
        answer:
          "Au contraire. Le management bienveillant est exigeant. Il demande du courage pour dire les choses, mais avec la bonne forme.",
      },
    ],
    bioFocus:
      "J'allie psychologie et réalité terrain pour des formations pragmatiques, loin des grands concepts théoriques inapplicables.",
    relatedServices: ["prevention-risques-psychosociaux-rps", "recrutement-evaluation"],
  },
];
