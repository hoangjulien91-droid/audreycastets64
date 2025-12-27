import { 
  Brain, 
  Zap, 
  CloudRain, 
  Smile, 
  BatteryWarning, 
  Activity, 
  Lightbulb, 
  FileCheck, 
  Compass,
  ShieldAlert,
  Users,
  MessageCircle,
  Ear,
  GraduationCap
} from "lucide-react";

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  category: 'particuliers' | 'professionnels';
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  ctaLabel: string;
  socialProofLabel: string;
  vulgarisation: {
    title: string;
    description: string;
  };
  methodology: ServiceStep[];
  benefits: string[];
  testimonials: ServiceTestimonial[];
  faq: ServiceFAQ[];
  bioFocus: string;
  scientificBasis?: {
    title: string;
    introduction: string;
    points: { label: string; description: string }[];
    conclusion: string;
  };
  caseStudy?: {
    title: string;
    context: string;
    problem: string;
    approach: string;
    result: string;
  };
  keyStats?: {
    value: string;
    label: string;
    source?: string;
  }[];
  relatedServices: string[];
  relatedTests?: ('mbi' | 'diva')[];
}

export const servicesData: ServiceData[] = [
  // --- PARTICULIERS ---
  {
    slug: 'therapies-cognitivo-comportementales-tcc',
    category: 'particuliers',
    title: 'Thérapies Cognitivo-Comportementales (TCC)',
    shortDescription: 'Approche structurée pour identifier et modifier les pensées et comportements inadaptés.',
    fullDescription: "Les Thérapies Cognitivo-Comportementales (TCC) sont des thérapies brèves et validées scientifiquement qui se concentrent sur les interactions entre vos pensées, vos émotions et vos comportements. Plutôt que de se focaliser uniquement sur le passé, nous travaillons sur les difficultés actuelles pour trouver des solutions concrètes et durables.",
    iconName: 'Brain',
    ctaLabel: 'Réserver ma première séance TCC',
    socialProofLabel: 'Méthode validée scientifiquement',
    vulgarisation: {
      title: 'La TCC en bref',
      description: "Imaginez que votre cerveau est un ordinateur. Parfois, certains 'logiciels' (vos habitudes de pensée) plantent ou tournent en boucle. La TCC, c'est comme une reprogrammation bienveillante pour installer des logiciels plus performants et sereins."
    },
    methodology: [
      { title: 'Analyse Fonctionnelle', description: 'Nous identifions ensemble les situations déclencheurs et vos réactions.' },
      { title: 'Restructuration Cognitive', description: 'Nous travaillons à assouplir vos pensées rigides ou négatives.' },
      { title: 'Exposition Progressive', description: 'Nous affrontons graduellement les situations redoutées dans un cadre sécurisé.' },
      { title: 'Consolidation', description: 'Vous apprenez à devenir votre propre thérapeute.' }
    ],
    benefits: [
      "Efficacité prouvée sur l'anxiété et la dépression",
      "Thérapie brève et orientée solutions",
      "Outils concrets utilisables au quotidien",
      "Collaboration active patient-thérapeute"
    ],
    testimonials: [
      { quote: "J'ai enfin compris pourquoi je réagissais toujours de la même façon. Les outils m'aident tous les jours.", author: "Thomas L.", role: "Patient TCC" },
      { quote: "Une approche pragmatique qui m'a permis de reprendre le contrôle sur mes phobies.", author: "Sarah B.", role: "Patiente TCC" }
    ],
    faq: [
      { question: "Combien de temps dure une thérapie TCC ?", answer: "C'est une thérapie brève, généralement entre 10 et 20 séances selon la problématique." },
      { question: "Est-ce compatible avec un traitement médicamenteux ?", answer: "Oui, tout à fait. La TCC est souvent recommandée en complément ou en alternative selon les cas." }
    ],
    bioFocus: "Formée aux TCC depuis plus de 10 ans, j'utilise cette approche rigoureuse avec douceur pour vous aider à déconstruire les schémas qui vous limitent.",
    scientificBasis: {
      title: "La Science derrière les TCC",
      introduction: "Les Thérapies Cognitivo-Comportementales ne sont pas basées sur de simples intuitions, mais sur des décennies de recherches cliniques rigoureuses. Elles reposent sur le principe de neuroplasticité : notre cerveau peut apprendre et désapprendre tout au long de la vie.",
      points: [
          { label: "Validité Clinique", description: "Reconnue par l'OMS et la HAS (Haute Autorité de Santé) comme traitement de référence pour les troubles anxieux et dépressifs." },
          { label: "Modèle STO", description: "Comprendre le lien entre Situation, Pensée (Cognition), Émotion et Comportement." },
          { label: "Mesurabilité", description: "L'efficacité se mesure concrètement par la réduction des symptômes et l'atteinte d'objectifs définis." }
      ],
      conclusion: "C'est la seule psychothérapie dont l'efficacité a été prouvée scientifiquement de manière aussi large."
    },
    caseStudy: {
      title: "Sortir de l'Anxiété Sociale",
      context: "Pierre, 34 ans, ingénieur, évite toutes les réunions d'équipe de peur d'être jugé.",
      problem: "Pierre souffre d'anxiété sociale. Il pense : 'Si je prends la parole, je vais rougir, bafouiller, et tout le monde verra que je suis incompétent'. Résultat : il s'isole et sa carrière stagne.",
      approach: "Nous avons d'abord identifié ses pensées automatiques ('Lecture de pensée'). Puis, nous avons mis en place des expositions progressives : d'abord poser une question simple, puis présenter un slide, etc.",
      result: "Après 12 séances, Pierre anime les réunions hebdomadaires. Il a toujours un peu le trac, mais il ne l'empêche plus d'agir. Il a obtenu une promotion 6 mois plus tard."
    },
    keyStats: [
       { value: "70%", label: "Taux de réussite moyen", source: "Inserm" },
       { value: "15", label: "Séances en moyenne", source: "Données cabinet" },
       { value: "1er", label: "Traitement Recommandé", source: "HAS" }
    ],
    relatedServices: ['gestion-stress-anxiete', 'depression', 'confiance-estime-de-soi']
  },
  {
    slug: 'eft-emotional-freedom-techniques',
    category: 'particuliers',
    title: 'EFT (Emotional Freedom Techniques)',
    shortDescription: 'Technique psycho-corporelle pour libérer les émotions négatives rapidement.',
    fullDescription: "L'EFT est une technique de libération émotionnelle qui combine la psychologie et la stimulation de points d'acupression. En tapotant doucement sur certains méridiens tout en se focalisant sur le problème, nous permettons au corps et à l'esprit de dissoudre la charge émotionnelle associée aux souvenirs ou aux situations stressantes.",
    iconName: 'Zap',
    ctaLabel: 'Découvrir l\'EFT en séance',
    socialProofLabel: 'Soulagement souvent immédiat',
    vulgarisation: {
      title: 'L\'EFT simplement',
      description: "C'est comme une acupuncture émotionnelle, mais sans aiguilles. On tapote du bout des doigts pour 'court-circuiter' la réaction de stress du cerveau et apaiser instantanément le système nerveux."
    },
    methodology: [
      { title: 'Identification', description: 'Ciblage précis de l\'émotion ou du souvenir douloureux.' },
      { title: 'Évaluation', description: 'Mesure de l\'intensité émotionnelle sur une échelle de 0 à 10.' },
      { title: 'Ronde de Tapotements', description: 'Stimulation des points méridiens en verbalisant le problème.' },
      { title: 'Réévaluation', description: 'Vérification de la baisse de l\'intensité émotionnelle.' }
    ],
    benefits: [
      "Résultats souvent rapides et surprenants",
      "Technique douce et non invasive",
      "Autonomie possible après apprentissage",
      "Efficace sur les traumas et phobies"
    ],
    testimonials: [
      { quote: "Je n'y croyais pas trop au début, mais ma peur de l'avion a disparu en 3 séances.", author: "Marc D.", role: "Patient EFT" },
      { quote: "Un outil magique pour gérer mes crises d'angoisse au travail.", author: "Julie M.", role: "Patiente EFT" }
    ],
    faq: [
      { question: "Est-ce que ça marche pour tout le monde ?", answer: "L'EFT fonctionne sur une grande majorité de personnes, même les sceptiques, car elle agit directement sur le système nerveux." },
      { question: "Puis-je le faire seul chez moi ?", answer: "Oui, l'un des buts est de vous apprendre la 'ronde' pour que vous puissiez l'utiliser en autonomie." }
    ],
    bioFocus: "Praticienne certifiée, j'intègre l'EFT pour débloquer des situations où la parole seule ne suffit plus.",
    relatedServices: ['gestion-stress-anxiete', 'burn-out-epuisement-professionnel']
  },
  {
    slug: 'depression',
    category: 'particuliers',
    title: 'Dépression',
    shortDescription: 'Accompagnement thérapeutique pour sortir de la dépression et retrouver le goût de vivre.',
    fullDescription: "La dépression n'est pas une fatalité ni un manque de volonté. C'est une maladie qui nécessite une prise en charge adaptée. Mon accompagnement vise à briser le cercle vicieux de l'isolement et des pensées sombres, pour reconstruire pas à pas vos ressources internes et votre plaisir de vivre.",
    iconName: 'CloudRain',
    ctaLabel: 'Prendre rendez-vous',
    socialProofLabel: 'Accompagnement bienveillant',
    vulgarisation: {
      title: 'Comprendre la dépression',
      description: "La dépression est comme un brouillard épais qui fausse votre perception de la réalité. Elle vous fait voir tout en noir et vide vos batteries. La thérapie est le phare qui vous aide à retrouver votre chemin."
    },
    methodology: [
      { title: 'Accueil et Sécurité', description: 'Création d\'un espace de parole sans jugement.' },
      { title: 'Activation Comportementale', description: 'Réintroduction progressive de petites activités gratifiantes.' },
      { title: 'Restructuration Cognitive', description: 'Travail sur les pensées dévalorisantes et le désespoir.' },
      { title: 'Prévention de la Rechute', description: 'Identification des signes avant-coureurs et outils de protection.' }
    ],
    benefits: [
      "Sortir de l'isolement",
      "Comprendre les mécanismes de sa dépression",
      "Retrouver progressivement de l'énergie",
      "Reconstruire une image de soi positive"
    ],
    testimonials: [
      { quote: "Grâce à vous, je vois enfin le bout du tunnel. Merci pour votre patience.", author: "Sophie R.", role: "Patiente" }
    ],
    faq: [
      { question: "La dépression se soigne-t-elle vraiment ?", answer: "Oui, la dépression se soigne très bien, surtout avec une combinaison de psychothérapie et, si nécessaire, d'aide médicale." }
    ],
    bioFocus: "Avec une grande douceur, je vous accompagne à votre rythme pour dissiper le brouillard et retrouver vos couleurs.",
    relatedServices: ['therapies-cognitivo-comportementales-tcc', 'confiance-estime-de-soi']
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    slug: 'bilan-de-competences',
    category: 'particuliers',
    title: 'Bilan de compétences',
    shortDescription: 'Accompagnement structuré pour clarifier votre projet professionnel.',
    fullDescription: "À une croisée des chemins ? Le bilan de compétences est un temps pour soi, pour faire le point sur votre parcours, vos compétences et vos aspirations. Ensemble, nous construisons un projet professionnel réaliste et motivant, en accord avec le marché du travail.",
    iconName: 'FileCheck',
    ctaLabel: 'Démarrer mon bilan',
    socialProofLabel: 'Investissez sur votre avenir',
    vulgarisation: {
      title: 'Le GPS Professionnel',
      description: "Vous êtes perdu dans votre carrière ? Le bilan de compétences recalcule votre itinéraire en fonction de votre position actuelle (compétences) et de votre destination rêvée (aspirations)."
    },
    methodology: [
      { title: 'Phase Préliminaire', description: 'Définition de vos besoins et engagement.' },
      { title: 'Phase d\'Investigation', description: 'Analyse du parcours, intérêts, valeurs et personnalité (Tests inclus).' },
      { title: 'Phase de Conclusion', description: 'Validation du projet et plan d\'action concret.' },
      { title: 'Suivi', description: 'Point d\'étape à 6 mois.' }
    ],
    benefits: [
      "Vision claire de ses atouts",
      "Projet professionnel validé",
      "Regain de motivation",
      "Meilleure employabilité"
    ],
    testimonials: [
      { quote: "Ce bilan m'a permis de réaliser que j'avais des compétences transférables insoupçonnées.", author: "Paul H.", role: "En transition" }
    ],
    faq: [
      { question: "Est-ce finançable par le CPF ?", answer: "Oui, la plupart des bilans de compétences sont éligibles au financement CPF." }
    ],
    bioFocus: "Psychologue du travail, je connais aussi bien l'humain que les réalités de l'entreprise et du marché de l'emploi.",
    relatedServices: ['reconversion-professionnelle', 'confiance-estime-de-soi']
  },
  {
    slug: 'reconversion-professionnelle',
    category: 'particuliers',
    title: 'Reconversion professionnelle',
    shortDescription: 'Accompagnement dans votre changement de carrière.',
    fullDescription: "Changer de métier est une aventure passionnante mais vertigineuse. Je vous accompagne à chaque étape : de l'idée floue au projet concret, en passant par la gestion des peurs et la validation de la faiabilité économique. Ne restez pas seul face à ce grand changement.",
    iconName: 'Compass',
    ctaLabel: 'Oser changer de vie',
    socialProofLabel: 'Changez en sécurité',
    vulgarisation: {
      title: 'Sauter le pas',
      description: "La reconversion n'est pas un saut dans le vide, c'est la construction d'un pont solide entre votre vie d'avant et celle qui vous correspond aujourd'hui."
    },
    methodology: [
      { title: 'Bilan et Introspection', description: 'Pourquoi voulez-vous changer ? Quels sont vos moteurs ?' },
      { title: 'Exploration des Pistes', description: 'Recherches, enquêtes métiers, immersion.' },
      { title: 'Validation Réaliste', description: 'Adéquation profil/marché/finances.' },
      { title: 'Lancement', description: 'Stratégie de formation et de recherche d\'emploi/création.' }
    ],
    benefits: [
      "Sécuriser son changement de vie",
      "Gagner du temps et éviter les erreurs",
      "Soutien psychologique durant la transition",
      "Plan d'action structuré"
    ],
    testimonials: [
      { quote: "J'avais peur de tout quitter. Aujourd'hui je vis de ma passion et je ne regrette rien.", author: "Amélie S.", role: "Fleuriste (ex-Comptable)" }
    ],
    faq: [
      { question: "Est-ce le bon moment pour changer ?", answer: "Si la question vous obsède et que votre travail actuel vous pèse, c'est le moment d'y réfléchir sérieusement avec un pro." }
    ],
    bioFocus: "J'ai accompagné des dizaines de transitions réussies. Je serai votre copilote pour naviguer dans ce changement.",
    relatedServices: ['bilan-de-competences', 'burn-out-epuisement-professionnel']
  },
  // --- PROFESSIONNELS ---
  {
    slug: 'prevention-risques-psychosociaux-rps',
    category: 'professionnels',
    title: 'Prévention des Risques Psychosociaux (RPS)',
    shortDescription: 'Diagnostic et plan d\'action pour la QVT.',
    fullDescription: "Les risques psychosociaux (stress, harcèlement, violences, épuisement) coûtent cher à l'entreprise et aux salariés. J'interviens pour réaliser un diagnostic précis de votre organisation, identifier les facteurs de risques et co-construire un plan de prévention adapté pour améliorer durablement la Qualité de Vie au Travail (QVT).",
    iconName: 'ShieldAlert',
    ctaLabel: 'Demander un audit RPS',
    socialProofLabel: 'Obligation légale & Performance',
    vulgarisation: {
      title: 'Les RPS, c\'est quoi ?',
      description: "Ce sont les risques pour la santé mentale liés au travail : surcharge, manque d'autonomie, conflits... Les prévenir, c'est comme entretenir le moteur de votre entreprise pour éviter la panne."
    },
    methodology: [
      { title: 'Cadrage', description: 'Définition des objectifs avec la direction et le CSE.' },
      { title: 'Diagnostic', description: 'Questionnaires, entretiens, observations sur le terrain.' },
      { title: 'Analyse', description: 'Identification des facteurs de protection et de risque.' },
      { title: 'Restitution et Plan d\'Action', description: 'Préconisations concrètes et accompagnement à la mise en œuvre.' }
    ],
    benefits: [
      "Conformité légale (DUERP)",
      "Réduction de l'absentéisme et du turnover",
      "Amélioration du climat social",
      "Augmentation de la performance globale"
    ],
    testimonials: [
      { quote: "Un diagnostic clair qui a permis de libérer la parole et d'apaiser les tensions dans l'équipe.", author: "DRH", role: "PME Industrie" }
    ],
    faq: [
      { question: "Est-ce obligatoire ?", answer: "Oui, l'employeur a une obligation de sécurité de résultat concernant la santé physique et mentale de ses salariés." }
    ],
    bioFocus: "Expertise méthodologique rigoureuse et neutralité pour garantir la confiance de tous les acteurs de l'entreprise.",
    relatedServices: ['formation-management-rh', 'cellule-ecoute-soutien-psychologique']
  },
  {
    slug: 'recrutement-evaluation',
    category: 'professionnels',
    title: 'Recrutement et évaluation',
    shortDescription: 'Sécuriser vos recrutements avec l\'expertise psychologique.',
    fullDescription: "Un recrutement raté coûte cher. J'apporte mon expertise de psychologue pour évaluer en profondeur les candidats (personnalité, soft skills, motivations). Au-delà du CV, je vous aide à trouver la personne qui s'intégrera le mieux à votre culture d'entreprise et au poste.",
    iconName: 'Users',
    ctaLabel: 'Sécuriser mon recrutement',
    socialProofLabel: 'La bonne personne au bon endroit',
    vulgarisation: {
      title: 'Au-delà du CV',
      description: "Une compétence technique s'apprend. Une personnalité et un savoir-être sont beaucoup plus stables. C'est là que se joue la réussite d'un recrutement sur le long terme."
    },
    methodology: [
      { title: 'Analyse du Poste', description: 'Définition précise du profil de compétences et comportemental.' },
      { title: 'Sourcing et Tris', description: '(Optionnel) Recherche de candidats.' },
      { title: 'Évaluation Approfondie', description: 'Entretiens structurés et passation de tests psychométriques (SOSIE, etc.).' },
      { title: 'Aide à la Décision', description: 'Rapport complet et débriefing pour choisir le meilleur candidat.' }
    ],
    benefits: [
      "Réduction des erreurs de casting",
      "Vision objective des candidats",
      "Gain de temps pour les RH/Managers",
      "Meilleure intégration des nouveaux"
    ],
    testimonials: [
      { quote: "L'éclairage psy nous a évité une erreur de recrutement majeure sur un poste clé.", author: "Directeur Général", role: "Start-up Tech" }
    ],
    faq: [
      { question: "Quels tests utilisez-vous ?", answer: "J'utilise principalement le SOSIE 2nd Generation pour évaluer la personnalité et les motivations, ainsi que des tests d'aptitudes si besoin." }
    ],
    bioFocus: "Mon œil de psychologue détecte les nuances invisibles sur un CV pour un 'matching' humain durable.",
    relatedServices: ['formation-management-rh', 'prevention-risques-psychosociaux-rps']
  },
  {
    slug: 'ateliers-prevention-stress',
    category: 'professionnels',
    title: 'Ateliers de prévention du stress',
    shortDescription: 'Formations collectives pour le bien-être au travail.',
    fullDescription: "Sensibiliser et outiller vos équipes face au stress. Sous forme d'ateliers pratiques et interactifs, vos collaborateurs apprennent à repérer les signes de stress et à utiliser des techniques pour mieux le gérer au quotidien. Un moment de cohésion et de prévention santé.",
    iconName: 'Zap',
    ctaLabel: 'Organiser un atelier',
    socialProofLabel: 'Prévention active',
    vulgarisation: {
      title: 'La boîte à outils anti-stress',
      description: "On ne peut pas toujours supprimer le stress, mais on peut apprendre à surfer dessus plutôt que de se noyer. Ces ateliers donnent la planche de surf."
    },
    methodology: [
      { title: 'Comprendre', description: 'Apports théoriques ludiques sur les mécanismes du stress.' },
      { title: 'Expérimenter', description: 'Exercices pratiques de respiration, relaxation, communication.' },
      { title: 'Échanger', description: 'Partage d\'expériences entre collègues (renforce la cohésion).' },
      { title: 'Appliquer', description: 'Construction d\'une routine bien-être au travail.' }
    ],
    benefits: [
      "Équipes plus sereines et efficaces",
      "Amélioration de l'ambiance de travail",
      "Outillage concret des salariés",
      "Action visible de prévention"
    ],
    testimonials: [
      { quote: "Un moment de respiration qui a fait du bien à toute l'équipe. On utilise encore les outils 6 mois après.", author: "Manager", role: "Service Client" }
    ],
    faq: [
      { question: "Combien de participants ?", answer: "Pour garantir l'interactivité, je recommande des groupes de 8 à 12 personnes maximum." }
    ],
    bioFocus: "Animation dynamique et bienveillante pour créer un espace sécurisant où chacun peut s'exprimer.",
    relatedServices: ['prevention-risques-psychosociaux-rps', 'cellule-ecoute-soutien-psychologique']
  },
  {
    slug: 'cellule-ecoute-soutien-psychologique',
    category: 'professionnels',
    title: 'Cellule d\'écoute et soutien',
    shortDescription: 'Espaces d\'écoute confidentiels pour vos salariés.',
    fullDescription: "En période de changement, de crise ou simplement pour prévenir les risques, offrez à vos salariés un espace de parole neutre et confidentiel. La cellule d'écoute psychologique (sur site ou à distance) permet de désamorcer les situations de souffrance avant qu'elles ne s'aggravent.",
    iconName: 'Ear',
    ctaLabel: 'Mettre en place une permanence',
    socialProofLabel: 'Soutien immédiat',
    vulgarisation: {
      title: 'La soupape de sécurité',
      description: "Parfois, on ne peut pas parler à son manager ou à ses collègues. Avoir accès à un psychologue neutre permet de vider son sac et de trouver des ressources pour faire face."
    },
    methodology: [
      { title: 'Mise en place', description: 'Communication auprès des salariés et définition des modalités.' },
      { title: 'Permanences', description: 'Créneaux dédiés (physique ou téléphone) pour des entretiens individuels.' },
      { title: 'Suivi', description: 'Reporting anonymisé (statistiques) pour l\'entreprise sur les tendances observées.' },
      { title: 'Alerte', description: 'Signalement (avec accord) si situation de danger grave.' }
    ],
    benefits: [
      "Désamorçage des crises individuelles",
      "Soutien concret aux salariés en difficulté",
      "Indicateur du climat social pour l'entreprise",
      "Réduction des arrêts maladie"
    ],
    testimonials: [
      { quote: "Savoir qu'on peut appeler quelqu'un en cas de coup dur, c'est très rassurant pour les équipes.", author: "Dirigeant", role: "Logistique" }
    ],
    faq: [
      { question: "Est-ce vraiment confidentiel ?", answer: "Absolument. Rien de ce qui est dit en entretien ne filtre vers l'entreprise. Seules des statistiques globales sont remontées." }
    ],
    bioFocus: "Une écoute active et empathique pour accueillir la parole sans jugement.",
    relatedServices: ['prevention-risques-psychosociaux-rps', 'ateliers-prevention-stress']
  },
  {
    slug: 'formation-management-rh',
    category: 'professionnels',
    title: 'Formation management et RH',
    shortDescription: 'Former les managers à la dimension humaine et préventive.',
    fullDescription: "Les managers sont les premiers acteurs de la QVT. Je les forme à adopter une posture managériale bienveillante, à repérer les signaux faibles de souffrance chez leurs collaborateurs, et à mener des entretiens difficiles. Pour un management qui allie performance et respect de l'humain.",
    iconName: 'GraduationCap',
    ctaLabel: 'Former mes managers',
    socialProofLabel: 'Management Responsable',
    vulgarisation: {
      title: 'Le Manager-Jardinier',
      description: "Un bon manager ne tire pas sur la plante pour qu'elle pousse. Il crée les conditions (eau, soleil, terre) pour qu'elle grandisse. C'est ça le management bienveillant."
    },
    methodology: [
      { title: 'Analyse des Besoins', description: 'Adapter la formation à votre culture d\'entreprise.' },
      { title: 'Apports Théoriques', description: 'RPS, mécanismes du stress, communication non-violente.' },
      { title: 'Mises en Situation', description: 'Jeux de rôles sur des cas concrets (entretien de recadrage, annonce difficile).' },
      { title: 'Co-développement', description: 'Partage de pratiques entre pairs.' }
    ],
    benefits: [
      "Managers plus à l'aise dans leur rôle",
      "Meilleure détection des risques",
      "Communication plus fluide dans les équipes",
      "Prévention des conflits"
    ],
    testimonials: [
      { quote: "Cette formation m'a donné les clés pour gérer mon équipe avec plus d'humanité sans perdre en exigence.", author: "Jean-Marc", role: "Manager Commercial" }
    ],
    faq: [
      { question: "Est-ce une formation au 'monde des bisounours' ?", answer: "Au contraire. Le management bienveillant est exigeant. Il demande du courage pour dire les choses, mais avec la bonne forme." }
    ],
    bioFocus: "J'allie psychologie et réalité terrain pour des formations pragmatiques, loin des grands concepts théoriques inapplicables.",
    relatedServices: ['prevention-risques-psychosociaux-rps', 'recrutement-evaluation']
  }
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find(service => service.slug === slug);
};

export const getRelatedServices = (slugs: string[]) => {
  return servicesData.filter(service => slugs.includes(service.slug));
};
