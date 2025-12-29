"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Link } from "next-view-transitions";
import {
  ArrowRight,
  Brain,
  Zap,
  Cloud,
  Smile,
  TrendingUp,
  Target,
  Lightbulb,
  FileCheck,
  Briefcase,
  Shield,
  UserCheck,
  MessageCircle,
  Users,
  Award,
} from "lucide-react";

// Local Data Definitions (kept here to preserve original logic without breaking icons)
const servicesParticuliers = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Thérapies Cognitivo-Comportementales (TCC)",
    description:
      "Approche structurée pour identifier et modifier les pensées et comportements inadaptés. Efficace pour l'anxiété, la dépression, les phobies.",
    color: "primary",
    slug: "therapies-cognitivo-comportementales-tcc",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "EFT (Emotional Freedom Techniques)",
    description:
      "Technique psycho-corporelle combinant stimulation de points d'acupression et travail cognitif pour libérer les émotions négatives rapidement.",
    color: "secondary-purple",
    slug: "eft-emotional-freedom-techniques",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Dépression",
    description:
      "Accompagnement thérapeutique pour sortir de la dépression. Travail sur les pensées négatives, la motivation et la reconstruction du plaisir au quotidien.",
    color: "primary",
    slug: "depression",
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: "Confiance et estime de soi",
    description:
      "Renforcement de la confiance en soi et de l'estime personnelle. Travail sur l'image de soi, l'affirmation et la valorisation de ses capacités.",
    color: "secondary-purple",
    slug: "confiance-estime-de-soi",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Burn-out et épuisement professionnel",
    description:
      "Accompagnement spécialisé pour prévenir et traiter l'épuisement professionnel. Stratégies de récupération et de prévention de la rechute.",
    color: "primary",
    slug: "burn-out-epuisement-professionnel",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Gestion du stress et de l'anxiété",
    description:
      "Techniques concrètes pour gérer le stress quotidien, l'anxiété généralisée et les attaques de panique. Outils pratiques et durables.",
    color: "secondary-purple",
    slug: "gestion-stress-anxiete",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Développement personnel",
    description:
      "Travail sur la confiance en soi, l'estime de soi, la gestion des émotions et l'affirmation de soi pour mieux vivre au quotidien.",
    color: "primary",
    slug: "developpement-personnel",
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Bilan de compétences",
    description:
      "Accompagnement structuré pour identifier vos compétences, valeurs et motivations. Clarification de votre projet professionnel et orientation de carrière.",
    color: "secondary-purple",
    slug: "bilan-de-competences",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Reconversion professionnelle",
    description:
      "Accompagnement dans votre réflexion de changement de carrière. Bilan de compétences, clarification de projet, gestion du stress lié au changement.",
    color: "primary",
    slug: "reconversion-professionnelle",
  },
];

const servicesProfessionnels = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Prévention des Risques Psychosociaux (RPS)",
    description:
      "Diagnostic organisationnel, identification des facteurs de risque, plan d'action sur mesure pour améliorer la qualité de vie au travail.",
    color: "secondary-purple",
    slug: "prevention-risques-psychosociaux-rps",
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Recrutement et évaluation",
    description:
      "Tests de personnalité SOSIE, entretiens structurés, évaluation des soft skills pour des recrutements réussis et pertinents.",
    color: "primary",
    slug: "recrutement-evaluation",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Ateliers de prévention du stress",
    description:
      "Formations et ateliers collectifs sur la gestion du stress, la communication, la cohésion d'équipe et le bien-être au travail.",
    color: "secondary-purple",
    slug: "ateliers-prevention-stress",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Cellule d'écoute et soutien psychologique",
    description:
      "Mise en place d'espaces d'écoute confidentiels pour les salariés. Intervention en cas de crise ou d'événement traumatique.",
    color: "secondary-purple",
    slug: "cellule-ecoute-soutien-psychologique",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Formation management et RH",
    description:
      "Formation des managers à la détection des signaux de souffrance, au management bienveillant et à la prévention du burn-out.",
    color: "primary",
    slug: "formation-management-rh",
  },
];

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  slug: string;
}

interface AnimatedServiceDetailsProps {
  title: string;
  services: ServiceCardProps[];
  bgColor?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function AnimatedServiceDetails({
  title,
  services,
  bgColor = "gradient-to-br from-pink-50 to-white",
}: AnimatedServiceDetailsProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.section
      id={title === "Professionnels" ? "accompagnement-professionnels" : undefined}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={`py-16 md:py-24 bg-${bgColor}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <span
              className={`${title === "Professionnels" ? "text-purple-600" : "text-primary"} mb-3 block text-sm font-semibold tracking-wide uppercase`}
            >
              Accompagnement {title.toLowerCase()}
            </span>
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Services pour les{" "}
              <span className={title === "Professionnels" ? "text-purple-600" : "text-primary"}>
                {title}
              </span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={index} className="block h-full">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 60px rgba(139, 122, 152, 0.2)",
                  }}
                  className="group border-border interact-hover h-full rounded-2xl border bg-white p-6 shadow-md transition-all duration-300"
                >
                  <motion.div
                    className={`h-12 w-12 bg-linear-to-br ${
                      service.color === "primary"
                        ? "from-primary to-pink-400"
                        : "from-purple-500 to-purple-600"
                    } mb-4 flex items-center justify-center rounded-xl text-white`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-foreground group-hover:text-primary mb-2 text-lg font-bold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="text-primary mt-4 flex translate-y-2 transform items-center text-sm font-semibold opacity-0 transition-opacity group-hover:translate-y-0 group-hover:opacity-100">
                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export function AnimatedServicesParticuliers() {
  return <AnimatedServiceDetails title="Particuliers" services={servicesParticuliers} />;
}

export function AnimatedServicesProfessionnels() {
  return (
    <AnimatedServiceDetails
      title="Professionnels"
      services={servicesProfessionnels}
      bgColor="white"
    />
  );
}
