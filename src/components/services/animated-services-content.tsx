"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";
import Link from "next/link";
import {
  Heart,
  Users,
  CircleCheck,
  ArrowRight,
  Sparkles,
  Phone,
  Clock,
  Shield,
  Target,
  Briefcase,
  Brain,
  Zap,
  TrendingUp,
  MessageCircle,
  Award,
  UserCheck,
  Lightbulb,
  Cloud,
  Smile,
  FileCheck
} from "lucide-react";

// Animation variants
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

const cardHover = {
  rest: { scale: 1, rotateY: 0 },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { duration: 0.3 }
  }
};

const glowPulse = {
  initial: { opacity: 0.5, scale: 0.8 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [0.8, 1.1, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  }
};

export function AnimatedHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div ref={containerRef} style={{ opacity }}>
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div 
          style={{ y: y1 }}
          variants={glowPulse}
          initial="initial"
          animate="animate"
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          variants={glowPulse}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full border border-primary/20 shadow-sm mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-sm font-medium text-primary">
            Mes Services
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Des accompagnements <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            personnalisés
          </motion.span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
          Des accompagnements personnalisés pour particuliers et professionnels, alliant expertise clinique et approche bienveillante pour des résultats durables.
        </motion.p>

        <motion.div variants={staggerContainer} className="flex flex-wrap gap-3 justify-center">
          {[
            { icon: <Heart className="w-4 h-4" />, label: "TCC & EFT" },
            { icon: <Users className="w-4 h-4" />, label: "Psychologie du Travail" },
            { icon: <Target className="w-4 h-4" />, label: "Accompagnement RH" },
            { icon: <Shield className="w-4 h-4" />, label: "Confidentiel" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(139, 122, 152, 0.3)" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200/50 shadow-sm"
            >
              <span className="text-primary">{item.icon}</span>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function AnimatedServicesCards() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-16 md:py-24 bg-gradient-to-br from-[#F9F7F4] via-[#FDFCFB] to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#F3E8F0] rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8DFF0] rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
            Deux approches complémentaires
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choisissez l'accompagnement <span className="text-primary">qui vous correspond</span>
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div variants={fadeInUp} className="group relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#F3E8F0]/40 to-[#E8DFF0]/30 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="relative h-full glass-effect rounded-3xl border border-[#D4C5D9]/30 shadow-lg overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-[#C5B8D0] via-[#A594B3] to-[#8B7A98]"></div>
              <div className="p-8 md:p-10">
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl blur-xl opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                  Pour les Particuliers
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Thérapie Cognitive et Comportementale (TCC) et EFT (Emotional Freedom Techniques) pour vous accompagner dans vos difficultés personnelles et développer des stratégies d'adaptation efficaces.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Thérapies Cognitivo-Comportementales (TCC)", "Gestion du stress et de l'anxiété", "EFT - Techniques de libération émotionnelle", "Burn-out et épuisement professionnel"].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/mon-approche">
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(139, 122, 152, 0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-[#A594B3] to-[#8B7A98] text-white font-semibold rounded-2xl shadow-md cursor-pointer"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeInUp} className="group relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#E8DFF0]/40 to-[#F3E8F0]/30 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="relative h-full glass-effect rounded-3xl border border-[#D4C5D9]/30 shadow-lg overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-[#8B7A98] via-[#A594B3] to-[#C5B8D0]"></div>
              <div className="p-8 md:p-10">
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#8B7A98] to-[#A594B3] rounded-2xl blur-xl opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#8B7A98] to-[#A594B3] rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                  Pour les Professionnels
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Expertise en psychologie du travail et ressources humaines pour accompagner les organisations : prévention des RPS, recrutement, tests de personnalité et amélioration du bien-être au travail.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Diagnostic des risques psychosociaux", "Recrutement et tests SOSIE", "Ateliers de prévention du stress"].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/contact">
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(139, 122, 152, 0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-[#8B7A98] to-[#A594B3] text-white font-semibold rounded-2xl shadow-md cursor-pointer"
                  >
                    Me contacter pour un devis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

const servicesParticuliers = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Thérapies Cognitivo-Comportementales (TCC)",
    description: "Approche structurée pour identifier et modifier les pensées et comportements inadaptés. Efficace pour l'anxiété, la dépression, les phobies.",
    color: "primary"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "EFT (Emotional Freedom Techniques)",
    description: "Technique psycho-corporelle combinant stimulation de points d'acupression et travail cognitif pour libérer les émotions négatives rapidement.",
    color: "secondary-purple"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Dépression",
    description: "Accompagnement thérapeutique pour sortir de la dépression. Travail sur les pensées négatives, la motivation et la reconstruction du plaisir au quotidien.",
    color: "primary"
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Confiance et estime de soi",
    description: "Renforcement de la confiance en soi et de l'estime personnelle. Travail sur l'image de soi, l'affirmation et la valorisation de ses capacités.",
    color: "secondary-purple"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Burn-out et épuisement professionnel",
    description: "Accompagnement spécialisé pour prévenir et traiter l'épuisement professionnel. Stratégies de récupération et de prévention de la rechute.",
    color: "primary"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Gestion du stress et de l'anxiété",
    description: "Techniques concrètes pour gérer le stress quotidien, l'anxiété généralisée et les attaques de panique. Outils pratiques et durables.",
    color: "secondary-purple"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Développement personnel",
    description: "Travail sur la confiance en soi, l'estime de soi, la gestion des émotions et l'affirmation de soi pour mieux vivre au quotidien.",
    color: "primary"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Bilan de compétences",
    description: "Accompagnement structuré pour identifier vos compétences, valeurs et motivations. Clarification de votre projet professionnel et orientation de carrière.",
    color: "secondary-purple"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Reconversion professionnelle",
    description: "Accompagnement dans votre réflexion de changement de carrière. Bilan de compétences, clarification de projet, gestion du stress lié au changement.",
    color: "primary"
  }
];

const servicesProfessionnels = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Prévention des Risques Psychosociaux (RPS)",
    description: "Diagnostic organisationnel, identification des facteurs de risque, plan d'action sur mesure pour améliorer la qualité de vie au travail.",
    color: "secondary-purple"
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Recrutement et évaluation",
    description: "Tests de personnalité SOSIE, entretiens structurés, évaluation des soft skills pour des recrutements réussis et pertinents.",
    color: "primary"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Ateliers de prévention du stress",
    description: "Formations et ateliers collectifs sur la gestion du stress, la communication, la cohésion d'équipe et le bien-être au travail.",
    color: "secondary-purple"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Cellule d'écoute et soutien psychologique",
    description: "Mise en place d'espaces d'écoute confidentiels pour les salariés. Intervention en cas de crise ou d'événement traumatique.",
    color: "secondary-purple"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Formation management et RH",
    description: "Formation des managers à la détection des signaux de souffrance, au management bienveillant et à la prévention du burn-out.",
    color: "primary"
  }
];

export function AnimatedServiceDetails({ title, services, bgColor = "gradient-to-br from-pink-50 to-white" }: any) {
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
            {services.map((service: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 60px rgba(139, 122, 152, 0.2)" 
                }}
                className="group bg-white rounded-2xl p-6 border border-border shadow-md transition-all duration-300"
              >
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-br ${
                    service.color === 'primary' 
                      ? 'from-primary to-pink-400' 
                      : 'from-purple-500 to-purple-600'
                  } rounded-xl flex items-center justify-center text-white mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
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

export function AnimatedPracticalInfo() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
              Informations pratiques
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Modalités de <span className="text-primary">consultation</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 30px 80px rgba(139, 122, 152, 0.15)" }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-pink-200/50"
          >
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  icon: <Phone className="w-6 h-6 text-primary" />,
                  title: "Premier entretien offert",
                  text: "15 minutes pour échanger sur vos besoins"
                },
                {
                  icon: <Clock className="w-6 h-6 text-primary" />,
                  title: "Réponse sous 24h",
                  text: "Je m'engage à vous répondre rapidement"
                },
                {
                  icon: <Shield className="w-6 h-6 text-primary" />,
                  title: "Confidentialité absolue",
                  text: "Secret professionnel garanti"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div 
                    className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Formats de consultation</h3>
              <motion.div variants={staggerContainer} className="space-y-3">
                {[
                  { label: "En cabinet", desc: "Consultations en présentiel dans un cadre chaleureux et confidentiel" },
                  { label: "En visio", desc: "Séances en ligne via plateforme sécurisée pour plus de flexibilité" },
                  { label: "En entreprise", desc: "Interventions sur site pour les prestations professionnelles" }
                ].map((format, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3"
                  >
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">{format.label} :</span> {format.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export function AnimatedFinalCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 md:py-20 bg-gradient-to-r from-primary via-purple-500 to-primary relative overflow-hidden"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Prêt(e) à démarrer votre accompagnement ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg mb-8"
          >
            Prenons contact pour échanger sur vos besoins et trouver ensemble la solution la plus adaptée à votre situation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary bg-white rounded-full shadow-xl"
            >
              Prendre contact
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/mon-approche"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white glass-effect rounded-full border-2 border-white"
            >
              Découvrir mon approche
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}