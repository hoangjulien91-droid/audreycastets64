
import { ServiceData } from "../types/service-types"; 

export const servicesParticuliers: ServiceData[] = [
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
  }
];
