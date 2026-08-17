import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { PageHero } from "@/components/ui/page-hero";
import { Link } from "next-view-transitions";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import {
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Brain,
  Award,
  FileText,
  Clock,
  Laptop,
  MapPin,
  HelpCircle,
  Briefcase,
  Target,
  Search,
  BookOpen,
  Calendar,
  Lock,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Building,
  UserCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Bilan de Compétences Finançable CPF - Psychologue du Travail (Visio, Anglet, Ondres)",
  description:
    "Faites le point sur votre avenir professionnel avec Audrey Castets, Psychologue du Travail (15 ans d'expérience). Bilan de compétences éligible CPF, certifié Qualiopi. En visio ou à Anglet / Ondres.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/bilan-de-competences",
  },
  openGraph: {
    title: "Bilan de Compétences Éligible CPF - Audrey Castets Psychologue du Travail",
    description:
      "Construisez un projet professionnel réaliste et aligné avec qui vous êtes. Accompagnement bienveillant en visio ou présentiel.",
    url: "https://www.audrey-castets.fr/bilan-de-competences",
    type: "website",
  },
};

const forWhomItems = [
  {
    title: "Salarié(e) en questionnement",
    desc: "Vous vous interrogez sur votre avenir ou ressentez un décalage avec votre poste actuel.",
  },
  {
    title: "Envie de reconversion",
    desc: "Vous souhaitez changer de voie professionnelle en sécurisant chaque étape de votre projet.",
  },
  {
    title: "Perte de motivation ou de sens",
    desc: "Vous traversez une période d'usure professionnelle et cherchez à retrouver un moteur au quotidien.",
  },
  {
    title: "Évolution & Mobilité interne",
    desc: "Vous visez une promotion, de nouvelles responsabilités ou un changement d'organisation.",
  },
  {
    title: "Jeune actif ou début de carrière",
    desc: "Vous souhaitez consolider vos premiers pas professionnels et cibler la bonne trajectoire.",
  },
  {
    title: "Profil expérimenté / Senior",
    desc: "Vous voulez valoriser vos acquis, transmettre ou donner une impulsion renouvelée à votre parcours.",
  },
  {
    title: "Projet de formation",
    desc: "Vous souhaitez identifier les compétences à développer et choisir la formation adéquate.",
  },
  {
    title: "Besoins spécifiques & Handicap",
    desc: "Accompagnement adapté pour concilier santé, bien-être et réalités professionnelles.",
  },
];

const exploratoryPillars = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Vos Compétences",
    desc: "Identifier ce que vous savez faire, ce que vous avez acquis au fil de votre expérience et ce qui est transférable vers un autre secteur.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Vos Motivations",
    desc: "Comprendre vos moteurs profonds : ce qui suscite votre enthousiasme et, au contraire, ce qui génère de la démotivation ou du désengagement.",
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Vos Intérêts Professionnels",
    desc: "Explorer les secteurs d'activité, les missions et les environnements de travail en résonance avec vos affinités naturelles.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Vos Aptitudes & Ressources",
    desc: "Mettre en lumière vos points d'appui, vos modes de fonctionnement cognitifs et relationnels pour bâtir la suite en confiance.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Votre Rapport au Travail",
    desc: "Clarifier vos valeurs, vos priorités personnelles et la place que vous souhaitez accorder à votre vie professionnelle aujourd'hui.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "La Réalité de vos Projets",
    desc: "Confronter vos idées aux opportunités réelles du marché, aux prérequis d'accès et aux conditions concrètes de faisabilité.",
  },
];

const threePhases = [
  {
    number: "01",
    badge: "Phase Préliminaire",
    title: "Faire le point",
    desc: "Nous analysons votre situation actuelle, vos attentes et vos questionnements. Nous confirmons votre engagement et définissons ensemble le format de bilan (15h, 20h ou 24h) le plus adapté à votre profil.",
  },
  {
    number: "02",
    badge: "Phase d'Investigation",
    title: "Explorer & Analyser",
    desc: "Nous retraçons votre parcours, identifions vos compétences transférables, vos motivations et intérêts. À l'aide de questionnaires d'aide à la réflexion, nous faisons émerger des pistes professionnelles concrètes et vérifions leur faisabilité sur le marché.",
  },
  {
    number: "03",
    badge: "Phase de Conclusion",
    title: "Construire & Passer à l'action",
    desc: "Nous consolidons les résultats, validons le projet cible et élaborons un plan d'action réaliste (formations, calendrier, démarches). Un document de synthèse confidentiel et officiel vous est remis en fin de parcours.",
  },
];

const pricingPlans = [
  {
    name: "Bilan Flash / Ciblé",
    hours: "15 heures",
    price: "1 050 €",
    desc: "Idéal si votre demande est déjà relativement précise (validation d'un projet ciblé ou mobilité interne).",
    features: [
      "Entretien préalable gratuit (15 min)",
      "Analyse des compétences transférables",
      "Questionnaires d'évaluation ciblés",
      "Plan d'action opérationnel",
      "Document de synthèse officiel",
      "Prise en charge CPF possible",
    ],
    highlight: false,
  },
  {
    name: "Bilan Approfondi",
    hours: "20 heures",
    price: "1 450 €",
    desc: "Le format le plus fréquent pour explorer plusieurs pistes professionnelles et sécuriser un changement.",
    features: [
      "Entretien préalable gratuit (15 min)",
      "Investigation approfondie (parcours & intérêts)",
      "Tests psychométriques & d'orientation",
      "Confrontation marché & enquêtes métiers",
      "Plan de formation & de transition",
      "Document de synthèse complet",
      "Prise en charge CPF possible",
    ],
    highlight: true,
  },
  {
    name: "Bilan Complet",
    hours: "24 heures",
    price: "1 886 €",
    desc: "L'accompagnement maximal réglementaire pour une reconversion totale ou une reconstruction de parcours.",
    features: [
      "Entretien préalable gratuit (15 min)",
      "Durée maximale légale (24h)",
      "Bilan psychologique et motivationnel complet",
      "Étude de marché poussée & plan multi-scénarios",
      "Suivi post-bilan à 6 mois inclus",
      "Document de synthèse exhaustif",
      "100% Finançable CPF",
    ],
    highlight: false,
  },
];

const faqList = [
  {
    question: "Comment financer mon bilan de compétences avec le CPF ?",
    answer:
      "Le bilan de compétences fait partie des actions éligibles au Compte Personnel de Formation (CPF). Mes bilans sont réalisés en partenariat avec un organisme de formation certifié Qualiopi référencé sur la plateforme officielle 'Mon Compte Formation'. Vous pouvez ainsi mobiliser tout ou partie de vos droits acquis pour financer votre accompagnement sans avance de frais selon votre solde disponible.",
  },
  {
    question: "Mon employeur sera-t-il au courant de ma démarche ?",
    answer:
      "Non, absolument pas. Si vous réalisez votre bilan de compétences en dehors de votre temps de travail en utilisant votre compte CPF, vous n'avez aucune autorisation à demander à votre employeur et celui-ci ne sera jamais informé. La confidentialité est strictement garantie par le Code du travail.",
  },
  {
    question: "Faut-il avoir une idée de projet avant de débuter ?",
    answer:
      "Pas du tout ! C'est même l'un des rôles majeurs du bilan : accueillir votre sentiment de doute, de perte de sens ou de flou pour clarifier pas à pas ce qui vous correspond. Vous pouvez démarrer le bilan avec pour seule certitude que votre situation actuelle ne vous convient plus.",
  },
  {
    question: "Quelle est la différence entre un bilan avec une psychologue du travail et un coach ?",
    answer:
      "En tant que psychologue du travail (titre protégé d'État, Master 2 avec 15 ans d'expérience dans l'accompagnement et l'insertion), j'apporte une compréhension profonde des dynamiques psychologiques, des freins émotionnels et de la santé au travail (stress, burn-out), tout en maîtrisant la réalité concrète des recrutements et des métiers.",
  },
  {
    question: "Comment se déroulent les séances (Visio vs Présentiel) ?",
    answer:
      "Je privilégie le format en visioconférence pour sa souplesse, son confort et l'absence de contrainte de trajet. Pour ceux qui préfèrent des rencontres en face-à-face, des séances en présentiel peuvent être organisées sur rendez-vous à Ondres ou Anglet.",
  },
  {
    question: "Qu'est-ce que le document de synthèse ?",
    answer:
      "À la fin de la troisième phase, un document de synthèse détaillé et strictement personnel vous est remis. Il récapitule vos atouts, les pistes validées, les étapes opérationnelles et les préconisations. Il reste votre entière propriété et ne peut être transmis à un tiers sans votre accord explicite.",
  },
];

export default function BilanDeCompetencesPage() {
  return (
    <>
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Bilan de compétences", url: "/bilan-de-competences" },
        ]}
      />
      <ServiceJsonLd
        name="Bilan de Compétences - Audrey Castets Psychologue du Travail"
        description="Accompagnement individuel et certifié pour faire le point sur votre vie professionnelle, éligible CPF et Qualiopi."
        price="1050"
      />
      <FaqJsonLd faqs={faqList} />

      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          {/* 1. HERO SECTION */}
          <PageHero
            badge={{
              icon: <Award className="h-4 w-4" />,
              text: "Éligible CPF • Organisme Partenaire Qualiopi",
            }}
            title={
              <>
                Bilan de compétences avec une{" "}
                <span className="from-primary via-primary to-accent-violet bg-linear-to-r bg-clip-text text-transparent">
                  Psychologue du Travail
                </span>
              </>
            }
            subtitle="Et si vous preniez le temps de faire le point sur votre vie professionnelle pour bâtir un projet qui vous ressemble ?"
            breadcrumbs={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Bilan de compétences" },
            ]}
            align="center"
          >
            {/* Value badges */}
            <div
              className="mt-8 flex flex-wrap justify-center gap-3"
              role="list"
              aria-label="Atouts clés"
            >
              {[
                { icon: <ShieldCheck className="h-4 w-4" />, label: "Finançable CPF" },
                { icon: <Award className="h-4 w-4" />, label: "15 ans d'expérience" },
                { icon: <Laptop className="h-4 w-4" />, label: "En Visioconférence (Partout en France)" },
                { icon: <MapPin className="h-4 w-4" />, label: "Présentiel (Anglet & Ondres)" },
                { icon: <Lock className="h-4 w-4" />, label: "100% Confidentiel & Neutre" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-border-soft/40 inline-flex items-center gap-2 rounded-full border bg-white/90 px-4 py-2 text-xs font-semibold shadow-xs backdrop-blur-md sm:text-sm"
                  role="listitem"
                >
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#entretien-gratuit"
                className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold shadow-lg transition-transform hover:scale-105"
              >
                <span>Demander mon entretien préalable gratuit</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="tel:0743687297"
                className="text-foreground hover:border-primary/40 inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-white/80 px-6 py-4 text-base font-medium shadow-xs backdrop-blur-sm transition-all hover:bg-white"
              >
                <Phone className="text-primary h-5 w-5" />
                <span>07 43 68 72 97</span>
              </a>
            </div>
          </PageHero>

          {/* 2. HOOK & INTRO SECTION */}
          <section className="relative overflow-hidden bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="rounded-3xl border border-[#D4C5D9]/40 bg-linear-to-br from-[#FAF8FC] via-white to-[#F6F0F8] p-8 shadow-sm md:p-12">
                  <span className="text-primary mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase">
                    <Compass className="h-4 w-4" />
                    Prendre du recul pour mieux avancer
                  </span>
                  <h2 className="font-display text-foreground mb-6 text-2xl font-bold md:text-3xl lg:text-4xl">
                    Vous vous interrogez sur votre avenir professionnel ?
                  </h2>
                  <div className="text-muted-foreground space-y-4 text-base leading-relaxed md:text-lg">
                    <p>
                      Vous avez envie de changer de métier, d'évoluer, de retrouver du sens dans
                      votre travail ou simplement de comprendre ce qui vous correspond aujourd'hui ?
                    </p>
                    <p>
                      Après plusieurs années dans le même métier, une période de transition, une
                      perte de motivation ou l'envie d'insuffler une nouvelle dynamique à votre
                      parcours, il n'est pas toujours simple de savoir par où commencer.
                    </p>
                    <p className="border-primary/20 text-foreground rounded-2xl border-l-4 bg-white/80 p-5 font-medium shadow-xs">
                      Le bilan de compétences vous offre un{" "}
                      <span className="text-primary font-semibold">temps privilégié</span> pour
                      prendre de la hauteur, décrypter vos acquis et construire un projet qui
                      s'aligne avec votre personnalité et la réalité du marché.
                    </p>
                    <p>
                      En tant que <strong>psychologue du travail</strong>, je vous accompagne avec
                      une démarche à la fois structurée, personnalisée et profondément humaine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. POUR QUI ? */}
          <section className="bg-linear-to-b from-white via-[#FAF7FB] to-white py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Bénéficiaires
                </span>
                <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                  À qui s'adresse ce <span className="text-primary">bilan de compétences</span> ?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Il n'y a pas de &ldquo;bon moment&rdquo; universel. Il y a le moment où vous ressentez
                  le besoin de clarifier où vous en êtes avant de choisir où aller.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {forWhomItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="group hover:border-primary/30 rounded-2xl border border-[#D4C5D9]/30 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="bg-primary/10 text-primary mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-foreground group-hover:text-primary mb-2 text-base font-bold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Clarification Box */}
              <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 text-center">
                <p className="text-foreground text-base leading-relaxed">
                  💡 <strong>Pas d'idée précise ? Aucun problème.</strong> Vous pouvez venir avec
                  une simple question, une envie de changement ou l'impression de tourner en rond.
                  Le bilan est précisément fait pour faire émerger vos pistes.
                </p>
              </div>
            </div>
          </section>

          {/* 4. OBJECTIFS & RÉSULTATS */}
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                  <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                    Bénéfices concrets
                  </span>
                  <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                    Un bilan pour faire le point et{" "}
                    <span className="text-primary">passer à l'action</span>
                  </h2>
                  <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                    Le bilan de compétences permet d'analyser vos acquis et vos désirs pour ouvrir
                    des perspectives solides et stimulantes.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                  {[
                    "Faire le point après plusieurs années de vie professionnelle",
                    "Retrouver confiance et légitimité dans vos compétences",
                    "Identifier vos compétences transversales et transférables",
                    "Comprendre vos motivations profondes et vos besoins au travail",
                    "Donner du sens à votre parcours et à vos choix futurs",
                    "Envisager et sécuriser une reconversion professionnelle",
                    "Préparer une évolution, une promotion ou une mobilité",
                    "Explorer de nouveaux métiers ou secteurs d'activité",
                    "Vérifier la faisabilité et la cohérence de vos envies",
                    "Construire un projet de formation ciblé et financé",
                    "Passer d'une simple envie de changement à un plan d'action concret",
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-xs transition-colors hover:border-primary/30"
                    >
                      <div className="bg-primary/10 text-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-foreground/90 text-sm font-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. POURQUOI AVEC UNE PSYCHOLOGUE DU TRAVAIL */}
          <section className="bg-linear-to-br from-[#F5EFF6] via-white to-[#F0E6F2] py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <span className="text-primary mb-3 inline-flex items-center gap-1 text-sm font-semibold tracking-wide uppercase">
                  <Brain className="h-4 w-4" />
                  Expertise & Approche
                </span>
                <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                  Pourquoi réaliser votre bilan avec une{" "}
                  <span className="text-primary">psychologue du travail</span> ?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Je suis psychologue du travail et j'ai développé mon expérience professionnelle
                  pendant <strong>15 années</strong> dans le domaine de l'insertion et de
                  l'accompagnement professionnel. Cette double approche me permet d'allier{" "}
                  <strong>connaissance fine de soi</strong> et <strong>réalité du marché de l'emploi</strong>.
                </p>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {exploratoryPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="border-border-soft/40 group rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="from-primary to-primary/80 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      {pillar.icon}
                    </div>
                    <h3 className="font-display text-foreground group-hover:text-primary mb-3 text-xl font-bold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>

              {/* Tools & Non-labeling note */}
              <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-[#D4C5D9]/40 bg-white p-8 shadow-sm md:p-10">
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                  <div className="from-primary/20 text-primary flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-linear-to-br">
                    <Search className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-xl font-bold">
                      Des outils au service de la réflexion, pas des étiquettes
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                      Le bilan repose d'abord sur des échanges personnalisés et approfondis. Selon vos
                      besoins, des questionnaires et outils d'évaluation (intérêts, motivations, aptitudes)
                      viennent enrichir l'analyse. <strong>L'objectif n'est jamais de vous enfermer dans une case</strong> :
                      les tests sont des leviers d'aide à la réflexion et d'ouverture, jamais des verdicts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. LES 3 PHASES DU DÉROULEMENT */}
          <section className="bg-white py-16 md:py-24" id="deroulement">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Méthodologie réglementaire
                </span>
                <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                  Comment se déroule le <span className="text-primary">bilan</span> ?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Le cadre légal du Code du travail prévoit une démarche structurée en 3 grandes phases
                  pour une durée maximale de 24 heures.
                </p>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
                {threePhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col justify-between rounded-3xl border border-[#D4C5D9]/30 bg-linear-to-b from-[#FDFBFD] to-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <span className="font-display text-primary/30 text-4xl font-extrabold">
                          {phase.number}
                        </span>
                        <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                          {phase.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-foreground mb-4 text-xl font-bold">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
                    </div>

                    <div className="border-primary/10 mt-6 border-t pt-4">
                      <span className="text-primary text-xs font-medium">Étape essentielle</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legal & Synthesis Note */}
              <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gray-200 bg-[#FAF9FB] p-6 text-sm text-gray-700">
                <div className="flex items-start gap-4">
                  <FileText className="text-primary mt-0.5 h-6 w-6 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Document de synthèse & Confidentialité absolue
                    </p>
                    <p className="text-muted-foreground mt-1 leading-relaxed">
                      À l'issue de votre accompagnement, un document de synthèse confidentiel et
                      détaillé vous est obligatoirement remis. Il reste votre entière et unique
                      propriété dans le strict respect de la confidentialité prévue par le Code du
                      travail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. FORMATS & TARIFS */}
          <section
            className="bg-linear-to-br from-[#FAF7FB] via-white to-[#F4EFF6] py-16 md:py-24"
            id="tarifs"
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Grille tarifaire claire
                </span>
                <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                  Plusieurs formats adaptés à <span className="text-primary">vos besoins</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Les tarifs sont compris entre <strong>1 050 € et 1 886 €</strong> selon le volume
                  horaire et les modalités retenues.
                </p>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {pricingPlans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                      plan.highlight
                        ? "border-primary bg-white shadow-xl ring-2 ring-primary/20 lg:-translate-y-2"
                        : "border border-[#D4C5D9]/40 bg-white/80 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {plan.highlight && (
                      <div className="bg-primary absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white shadow-sm">
                        Recommandé
                      </div>
                    )}

                    <div>
                      <div className="mb-4">
                        <span className="text-primary text-sm font-semibold uppercase">
                          {plan.hours}
                        </span>
                        <h3 className="font-display text-foreground mt-1 text-2xl font-bold">
                          {plan.name}
                        </h3>
                      </div>

                      <div className="mb-6">
                        <span className="text-foreground text-4xl font-extrabold">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground text-sm"> / bilan complet</span>
                      </div>

                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                        {plan.desc}
                      </p>

                      <div className="border-border-soft/40 mb-8 border-t pt-6">
                        <p className="text-foreground mb-3 text-xs font-bold tracking-wider uppercase">
                          Ce qui est inclus :
                        </p>
                        <ul className="space-y-3" role="list">
                          {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href="#entretien-gratuit"
                      className={`inline-flex w-full items-center justify-center rounded-2xl py-3.5 text-sm font-semibold transition-all duration-300 ${
                        plan.highlight
                          ? "btn-premium"
                          : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      Choisir cette formule
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Explanatory callout */}
              <div className="mx-auto mt-12 max-w-3xl text-center">
                <p className="text-muted-foreground text-sm">
                  💬 Le format idéal est déterminé avec vous lors d'un <strong>entretien téléphonique préalable gratuit</strong> de 15 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* 8. FINANCEMENT CPF & QUALIOPI */}
          <section className="bg-white py-16 md:py-24" id="financement-cpf">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-5xl rounded-3xl border border-[#D4C5D9]/40 bg-linear-to-br from-[#FAF8FB] via-white to-[#F5EEF7] p-8 shadow-md md:p-12">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase">
                      <CreditCard className="h-4 w-4" />
                      Prise en charge financière
                    </span>
                    <h2 className="font-display text-foreground mt-4 text-3xl font-bold md:text-4xl">
                      Financez votre bilan à 100% avec votre{" "}
                      <span className="text-primary">CPF</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                      Les bilans de compétences font partie des actions finançables par le{" "}
                      <strong>Compte Personnel de Formation (CPF)</strong>.
                    </p>
                    <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                      Les bilans que je réalise sont portés via un{" "}
                      <strong>organisme de formation partenaire référencé sur Mon Compte Formation et certifié Qualiopi</strong>.
                      Vous pouvez donc mobiliser vos droits CPF en toute sérénité.
                    </p>

                    <div className="mt-6 rounded-2xl border border-primary/20 bg-white/90 p-4 text-xs text-gray-600">
                      ℹ️ <em>Important : la certification Qualiopi concerne l'organisme partenaire qui porte l'action de formation.</em>
                    </div>
                  </div>

                  <div className="space-y-4 lg:col-span-5">
                    <div className="rounded-2xl border border-[#D4C5D9]/30 bg-white p-6 shadow-xs">
                      <h4 className="text-foreground mb-3 font-bold">
                        Comment s'inscrire via le CPF en 4 étapes ?
                      </h4>
                      <ol className="text-muted-foreground space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="bg-primary text-white flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">
                            1
                          </span>
                          <span>Entretien téléphonique gratuit préalable avec Audrey</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-primary text-white flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">
                            2
                          </span>
                          <span>Validation du format retenu (15h, 20h ou 24h)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-primary text-white flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">
                            3
                          </span>
                          <span>Inscription directe sur Mon Compte Formation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-primary text-white flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">
                            4
                          </span>
                          <span>Démarrage de vos séances à votre rythme</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. MODALITÉS : VISIO ET PRÉSENTIEL */}
          <section className="bg-linear-to-b from-white to-[#FAF8FA] py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Organisation
                </span>
                <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                  Un accompagnement souple, <span className="text-primary">à votre rythme</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Choisissez la modalité la plus confortable et compatible avec votre emploi du temps.
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                {/* Visio */}
                <div className="rounded-3xl border border-[#D4C5D9]/40 bg-white p-8 shadow-sm">
                  <div className="from-primary/10 text-primary mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br">
                    <Laptop className="h-7 w-7" />
                  </div>
                  <div className="mb-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Format privilégié
                  </div>
                  <h3 className="font-display text-foreground mb-3 text-2xl font-bold">
                    En Visioconférence
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Réalisez votre bilan depuis chez vous, sans contrainte de déplacement, partout
                    en France. La visioconférence conserve toute la proximité d'un suivi individuel
                    et sur mesure tout en offrant une flexibilité horaire maximale.
                  </p>
                </div>

                {/* Présentiel */}
                <div className="rounded-3xl border border-[#D4C5D9]/40 bg-white p-8 shadow-sm">
                  <div className="from-primary/10 text-primary mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div className="mb-2 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                    Côte Basque & Sud Landes
                  </div>
                  <h3 className="font-display text-foreground mb-3 text-2xl font-bold">
                    En Présentiel
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Des rendez-vous peuvent également être organisés en cabinet à{" "}
                    <strong>Ondres</strong> ou <strong>Anglet</strong>, selon les modalités
                    convenues ensemble lors de votre cadrage initial.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 10. FAQ SECTION */}
          <section className="bg-white py-16 md:py-24" id="faq">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Questions fréquentes
                </span>
                <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                  Tout savoir sur le <span className="text-primary">bilan de compétences</span>
                </h2>
              </div>

              <div className="mx-auto mt-12 max-w-3xl">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqList.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-border-soft/40 hover:border-primary/30 rounded-2xl border bg-white p-2 shadow-xs transition-all"
                    >
                      <AccordionTrigger className="text-foreground hover:text-primary px-4 py-3 text-left font-semibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground px-4 pt-1 pb-4 text-sm leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* 11. CTA FINAL & ENTRETIEN PRÉALABLE */}
          <section
            className="from-primary via-[#A594B3] to-[#8B7A98] bg-linear-to-r py-16 md:py-24 text-white"
            id="entretien-gratuit"
          >
            <div className="container mx-auto px-6 text-center lg:px-8">
              <div className="mx-auto max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Sparkles className="h-4 w-4" />
                  Premier contact sans engagement
                </span>
                <h2 className="font-display mt-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                  Vous vous posez des questions sur votre avenir professionnel ?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/90">
                  Un premier échange téléphonique permet de faire le point sur votre situation et de
                  déterminer si le bilan de compétences correspond réellement à votre besoin.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="tel:0743687297"
                    className="text-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <Phone className="h-5 w-5" />
                    <span>M'appeler au 07 43 68 72 97</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  >
                    <span>Formulaire de contact</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
