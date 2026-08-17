export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  authors: string[];
  readTime: string;
  date: string;
  content: {
    type: "section";
    heading: string;
    id: string;
    paragraphs: string[];
    list?: { items: string[]; type?: "bullet" | "number" };
  }[];
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "financer-bilan-de-competences-cpf",
    title: "Bilan de compétences : comment le financer à 100% avec son CPF en 2026 ?",
    summary:
      "Guide complet pour mobiliser votre Compte Personnel de Formation (CPF) et financer intégralement votre bilan de compétences avec une psychologue du travail.",
    authors: ["Audrey Castets"],
    readTime: "4 min de lecture",
    date: "2026-02-15",
    tags: ["Bilan de compétences", "CPF", "Reconversion", "Financement"],
    content: [
      {
        type: "section",
        heading: "Pourquoi réaliser un bilan de compétences ?",
        id: "pourquoi-bilan",
        paragraphs: [
          "Le bilan de compétences est bien plus qu'un simple inventaire de votre CV. C'est une démarche structurée d'introspection et d'analyse guidée par un professionnel habilité, permettant d'identifier vos compétences transférables, vos motivations profondes et les conditions indispensables à votre épanouissement.",
          "Accompagné par une psychologue du travail, le bilan prend en compte votre équilibre de vie, vos facteurs d'énergie et vos éventuelles appréhensions face au changement professionnel.",
        ],
      },
      {
        type: "section",
        heading: "Le CPF : votre droit universel à la formation",
        id: "droit-cpf",
        paragraphs: [
          "Toute personne active (salariée du secteur privé, travailleur indépendant, demandeur d'emploi) cumule chaque année des droits à la formation crédités en euros sur son compte personnel (généralement 500 € par an, plafonné à 5 000 €).",
          "Le bilan de compétences fait partie des prestations prioritaires éligibles au financement direct par le CPF, sans obligation d'en informer votre employeur si les séances se déroulent en dehors de votre temps de travail.",
        ],
      },
      {
        type: "section",
        heading: "Les 4 étapes pour mobiliser vos droits CPF",
        id: "etapes-mobilisation",
        paragraphs: [
          "La procédure de prise en charge est aujourd'hui 100% dématérialisée et sécurisée via la plateforme officielle MonCompteFormation :",
        ],
        list: {
          type: "number",
          items: [
            "Premier entretien gratuit et sans engagement de 15 minutes pour définir vos besoins et valider le cadre d'intervention.",
            "Création de votre dossier personnalisé sur MonCompteFormation avec l'organisme partenaire certifié Qualiopi.",
            "Validation de votre inscription avec votre identité numérique FranceConnect+.",
            "Démarrage de votre accompagnement sur-mesure (en cabinet à Anglet/Ondres ou en visioconférence).",
          ],
        },
      },
      {
        type: "section",
        heading: "Et si vos droits CPF sont insuffisants ?",
        id: "co-financements",
        paragraphs: [
          "Si le montant disponible sur votre CPF ne couvre pas l'intégralité du parcours, plusieurs solutions d'abondement existent : participation de France Travail (AIF), plan de développement des compétences de votre entreprise, ou financement par votre OPCO.",
        ],
      },
    ],
  },
  {
    slug: "burnout-signaux-alerte-prevention",
    title: "Burn-out : les 5 signaux d'alerte corporels et psychologiques",
    summary:
      "Comprendre les mécanismes du syndrome d'épuisement professionnel, reconnaître les signaux faibles avant l'effondrement et engager une reconstruction sereine.",
    authors: ["Audrey Castets"],
    readTime: "5 min de lecture",
    date: "2026-01-20",
    tags: ["Burn-out", "Santé au travail", "Épuisement", "TCC"],
    content: [
      {
        type: "section",
        heading: "Le burn-out n'est pas un manque de volonté",
        id: "comprendre-burnout",
        paragraphs: [
          "Contrairement à une idée reçue tenace, le burn-out touche le plus souvent des professionnels très investis, consciencieux et engagés. Il résulte d'une exposition prolongée à un stress chronique et à un déséquilibre persistant entre les exigences professionnelles et les ressources disponibles.",
        ],
      },
      {
        type: "section",
        heading: "Les 5 signaux d'alerte majeurs",
        id: "signaux-alerte",
        paragraphs: [
          "L'épuisement s'installe insidieusement. Voici les 5 manifestations cliniques les plus courantes décrites par l'inventaire de Maslach (MBI) :",
        ],
        list: {
          type: "bullet",
          items: [
            "Fatigue chronique non restaurée par le sommeil du week-end ou des congés.",
            "Émoussement émotionnel et apparition d'un cynisme ou d'un détachement inhabituel envers ses collègues ou clients.",
            "Baisse du sentiment d'efficacité personnelle et impression de ne plus être à la hauteur.",
            "Troubles cognitifs fréquents : difficultés de concentration, pertes de mémoire immédiate, ralentissement de la prise de décision.",
            "Symptômes somatiques récurrents : tensions musculaires cervicales, migraines, troubles digestifs, oppressions thoraciques.",
          ],
        },
      },
      {
        type: "section",
        heading: "Comment évaluer son niveau d'épuisement ?",
        id: "auto-evaluation",
        paragraphs: [
          "Un outil psychométrique validé, tel que le Maslach Burnout Inventory (MBI), permet de mesurer précisément les 3 dimensions de l'épuisement : l'épuisement émotionnel, la dépersonnalisation et l'accomplissement personnel.",
          "Vous pouvez réaliser notre test d'auto-évaluation gratuit et confidentiel en quelques minutes sur ce site pour faire le point sur votre situation.",
        ],
      },
      {
        type: "section",
        heading: "Les étapes de la prise en charge thérapeutique",
        id: "reconstruction",
        paragraphs: [
          "La priorité absolue est la mise au repos physiologique et la déculpabilisation. Par la suite, les Thérapies Cognitivo-Comportementales (TCC) et l'EFT permettent d'analyser les mécanismes de sur-adaptation, de restaurer l'estime de soi et de préparer un retour à l'emploi dans des conditions protectrices.",
        ],
      },
    ],
  },
  {
    slug: "therapie-tcc-gestion-stress-au-travail",
    title: "La Thérapie TCC pour apprivoiser le stress et l'anxiété professionnelle",
    summary:
      "Découvrez comment les Thérapies Cognitivo-Comportementales (TCC) offrent des outils concrets et scientifiquement prouvés pour réguler l'anxiété de performance.",
    authors: ["Audrey Castets"],
    readTime: "4 min de lecture",
    date: "2025-11-10",
    tags: ["TCC", "Stress", "Anxiété", "Psychothérapie"],
    content: [
      {
        type: "section",
        heading: "Qu'est-ce qu'une Thérapie Cognitivo-Comportementale ?",
        id: "definition-tcc",
        paragraphs: [
          "Les TCC sont des thérapies brèves, collaboratives et pragmatiques. Elles s'appuient sur l'interaction fondamentale entre trois niveaux de fonctionnement : nos pensées (cognitions), nos émotions et nos comportements.",
          "Validées par la Haute Autorité de Santé (HAS), les TCC sont particulièrement indiquées pour le traitement de l'anxiété, des attaques de panique, du perfectionnisme excessif et des blocages professionnels.",
        ],
      },
      {
        type: "section",
        heading: "Le cercle vicieux de l'anxiété au travail",
        id: "mecanisme-anxiete",
        paragraphs: [
          "Face à une situation perçue comme menaçante (prise de parole, surcharge, conflit), nos schémas automatiques génèrent des distorsions cognitives (« Je n'y arriverai jamais », « Tout doit être parfait »). Ces pensées déclenchent des réactions physiologiques de stress, qui incitent souvent à l'évitement ou à l'hypercontrôle, renforçant à terme le niveau d'anxiété.",
        ],
      },
      {
        type: "section",
        heading: "Des exercices concrets et mesurables",
        id: "outils-pratiques",
        paragraphs: [
          "En consultation, nous travaillons sur des situations concrètes issues de votre quotidien :",
        ],
        list: {
          type: "bullet",
          items: [
            "La restructuration cognitive : identifier les biais de pensée et construire des alternatives rationnelles et apaisantes.",
            "L'exposition graduée : apprivoiser progressivement les situations anxiogènes pour désactiver la réponse de panique.",
            "Les techniques de régulation psychocorporelle : cohérence cardiaque, relaxation et libération émotionnelle (EFT).",
          ],
        },
      },
    ],
  },
  {
    slug: "reconversion-professionnelle-landes-pays-basque",
    title: "Réussir sa reconversion professionnelle dans les Landes et au Pays Basque",
    summary:
      "Entre aspirations personnelles et réalités économiques locales du 64 et du 40 : méthodologie pour construire un projet de transition réaliste et épanouissant.",
    authors: ["Audrey Castets"],
    readTime: "5 min de lecture",
    date: "2025-10-05",
    tags: ["Reconversion", "Pays Basque", "Landes", "Bilan de compétences"],
    content: [
      {
        type: "section",
        heading: "La dynamique professionnelle du Sud-Ouest",
        id: "contexte-local",
        paragraphs: [
          "Le bassin d'emploi du Pays Basque (Bayonne, Anglet, Biarritz) et du sud des Landes (Ondres, Dax, Capbreton) attire de nombreux actifs en quête d'un meilleur équilibre de vie. Cependant, réussir sa transition nécessite de concilier ses aspirations avec les filières porteuses locales (numérique, agroalimentaire, santé, tourisme durable, artisanat et services aux entreprises).",
        ],
      },
      {
        type: "section",
        heading: "Les pièges à éviter lors d'un changement de voie",
        id: "pieges-a-eviter",
        paragraphs: [
          "Se lancer dans une reconversion sur un coup de tête ou par simple rejet d'une situation professionnelle actuelle peut mener à des déconvenues. Une transition solide s'appuie sur une triple validation :",
        ],
        list: {
          type: "bullet",
          items: [
            "La faisabilité personnelle : adéquation avec votre rythme, vos contraintes familiales et vos valeurs.",
            "La faisabilité financière : maintien de rémunération, droits au chômage (dispositif démission-reconversion), coûts de formation.",
            "La faisabilité marché : enquête métier auprès de professionnels locaux et analyse des opportunités réelles d'embauche.",
          ],
        },
      },
      {
        type: "section",
        heading: "L'accompagnement individuel : sécuriser chaque étape",
        id: "accompagnement-securise",
        paragraphs: [
          "À travers un bilan de compétences ou des séances de coaching d'orientation, je vous aide à structurer votre feuille de route, à lever les doutes légitimes et à bâtir un plan d'action réaliste étape par étape.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
