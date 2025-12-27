"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Link } from 'next-view-transitions';
import { 
  ArrowRight, Brain, Zap, Cloud, Smile, TrendingUp, Target, 
  Lightbulb, FileCheck, Briefcase, Shield, UserCheck, MessageCircle, 
  Users, Award 
} from "lucide-react";

// Local Data Definitions (kept here to preserve original logic without breaking icons)
const servicesParticuliers = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Thérapies Cognitivo-Comportementales (TCC)",
    description: "Approche structurée pour identifier et modifier les pensées et comportements inadaptés. Efficace pour l'anxiété, la dépression, les phobies.",
    color: "primary",
    slug: "therapies-cognitivo-comportementales-tcc"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "EFT (Emotional Freedom Techniques)",
    description: "Technique psycho-corporelle combinant stimulation de points d'acupression et travail cognitif pour libérer les émotions négatives rapidement.",
    color: "secondary-purple",
    slug: "eft-emotional-freedom-techniques"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Dépression",
    description: "Accompagnement thérapeutique pour sortir de la dépression. Travail sur les pensées négatives, la motivation et la reconstruction du plaisir au quotidien.",
    color: "primary",
    slug: "depression"
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Confiance et estime de soi",
    description: "Renforcement de la confiance en soi et de l'estime personnelle. Travail sur l'image de soi, l'affirmation et la valorisation de ses capacités.",
    color: "secondary-purple",
    slug: "confiance-estime-de-soi"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Burn-out et épuisement professionnel",
    description: "Accompagnement spécialisé pour prévenir et traiter l'épuisement professionnel. Stratégies de récupération et de prévention de la rechute.",
    color: "primary",
    slug: "burn-out-epuisement-professionnel"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Gestion du stress et de l'anxiété",
    description: "Techniques concrètes pour gérer le stress quotidien, l'anxiété généralisée et les attaques de panique. Outils pratiques et durables.",
    color: "secondary-purple",
    slug: "gestion-stress-anxiete"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Développement personnel",
    description: "Travail sur la confiance en soi, l'estime de soi, la gestion des émotions et l'affirmation de soi pour mieux vivre au quotidien.",
    color: "primary",
    slug: "developpement-personnel"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Bilan de compétences",
    description: "Accompagnement structuré pour identifier vos compétences, valeurs et motivations. Clarification de votre projet professionnel et orientation de carrière.",
    color: "secondary-purple",
    slug: "bilan-de-competences"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Reconversion professionnelle",
    description: "Accompagnement dans votre réflexion de changement de carrière. Bilan de compétences, clarification de projet, gestion du stress lié au changement.",
    color: "primary",
    slug: "reconversion-professionnelle"
  }
];

const servicesProfessionnels = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Prévention des Risques Psychosociaux (RPS)",
    description: "Diagnostic organisationnel, identification des facteurs de risque, plan d'action sur mesure pour améliorer la qualité de vie au travail.",
    color: "secondary-purple",
    slug: "prevention-risques-psychosociaux-rps"
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Recrutement et évaluation",
    description: "Tests de personnalité SOSIE, entretiens structurés, évaluation des soft skills pour des recrutements réussis et pertinents.",
    color: "primary",
    slug: "recrutement-evaluation"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Ateliers de prévention du stress",
    description: "Formations et ateliers collectifs sur la gestion du stress, la communication, la cohésion d'équipe et le bien-être au travail.",
    color: "secondary-purple",
    slug: "ateliers-prevention-stress"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Cellule d'écoute et soutien psychologique",
    description: "Mise en place d'espaces d'écoute confidentiels pour les salariés. Intervention en cas de crise ou d'événement traumatique.",
    color: "secondary-purple",
    slug: "cellule-ecoute-soutien-psychologique"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Formation management et RH",
    description: "Formation des managers à la détection des signaux de souffrance, au management bienveillant et à la prévention du burn-out.",
    color: "primary",
    slug: "formation-management-rh"
  }
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
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function AnimatedServiceDetails({ title, services, bgColor = "gradient-to-br from-pink-50 to-white" }: AnimatedServiceDetailsProps) {
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
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className={`${title === "Professionnels" ? "text-purple-600" : "text-primary"} text-sm font-semibold uppercase tracking-wide mb-3 block`}>
              Accompagnement {title.toLowerCase()}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services pour les <span className={title === "Professionnels" ? "text-purple-600" : "text-primary"}>{title}</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={index} className="block h-full"> 
              <motion.div
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 60px rgba(139, 122, 152, 0.2)" 
                }}
                className="group bg-white rounded-2xl p-6 border border-border shadow-md transition-all duration-300 h-full interact-hover"
              >
                <motion.div 
                  className={`w-12 h-12 bg-linear-to-br ${
                    service.color === 'primary' 
                      ? 'from-primary to-pink-400' 
                      : 'from-purple-500 to-purple-600'
                  } rounded-xl flex items-center justify-center text-white mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                   En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
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
  return <AnimatedServiceDetails title="Professionnels" services={servicesProfessionnels} bgColor="white" />;
}
