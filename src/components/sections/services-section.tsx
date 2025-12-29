"use client";

import { ArrowRight, CircleCheck, Heart, Users, Sparkles } from "lucide-react";
import { Link } from 'next-view-transitions';
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    id: "particuliers",
    icon: Heart,
    title: "Pour les Particuliers",
    subtitle: "Accompagnement thérapeutique personnalisé",
    description: "Thérapie Cognitive et Comportementale (TCC) et EFT pour vous accompagner dans vos difficultés personnelles et développer des stratégies d'adaptation efficaces.",
    features: [
      "Thérapies Cognitivo-Comportementales (TCC)",
      "Gestion du stress et de l'anxiété",
      "EFT - Techniques de libération émotionnelle",
      "Burn-out et épuisement professionnel",
      "Dépression et troubles de l'humeur",
      "Estime et confiance en soi",
      "Bilan de compétences"
    ],
    // Using semantic tokens (referencing CSS variables if possible or standardizing)
    // For inline styles we can use the hex but prefer utility classes.
    // However, the component logic uses style={{ backgroundColor: ... }}
    // The tokens are:
    // --color-accent-violet: #A594B3;
    // --color-accent-violet-dark: #8B7A98;
    // --color-accent-violet-light: #C5B8D0;
    // We will use the hex values that correspond to our new semantic tokens to be consistent with the theme,
    // OR ideally refactor to use className templates.
    // Given the component structure, changing to className is cleaner but invasive.
    // I will swap the hex codes to match our identified semantic palette.
    // Old: #9D6B8C -> New Accent: #A594B3 (or similar from our palette)
    bgColor: "#A594B3",
    bgColorLight: "rgba(165, 148, 179, 0.05)",
    checkColor: "#8B7A98",
    link: "/mon-approche",
    linkText: "Découvrir mon approche"
  },
  {
    id: "professionnels",
    icon: Users,
    title: "Pour les Professionnels",
    subtitle: "Expertise RH et bien-être au travail",
    description: "Expertise en psychologie du travail et ressources humaines pour accompagner les organisations : prévention des RPS, recrutement, et amélioration du bien-être au travail.",
    features: [
      "Diagnostic des risques psychosociaux",
      "Recrutement et tests SOSIE",
      "Ateliers de prévention du stress",
      "Soutien psychologique individuel et collectif"
    ],
    // Old: #8B7CB3 -> New Variant: #8B7A98
    bgColor: "#8B7A98",
    bgColorLight: "rgba(139, 122, 152, 0.05)",
    checkColor: "#8B7A98",
    link: "/services#accompagnement-professionnels",
    linkText: "Voir les services entreprise"
  }
];

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-spacing-lg bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40 opacity-30" />
        <div className="orb orb-violet w-[500px] h-[500px] -bottom-40 -left-40 opacity-25" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="badge-premium mb-6 inline-flex">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Services</span>
          </div>
          <h2 className="text-foreground mb-5">
            Mes <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un accompagnement professionnel adapté à vos besoins, que vous soyez particulier ou professionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
<div className="absolute inset-0 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: service.bgColorLight }} aria-hidden="true" />
                
                <div className="card-premium relative h-full p-8 lg:p-10 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 opacity-80" style={{ backgroundColor: service.bgColor }} aria-hidden="true" />
                  
                  <div className="flex items-start gap-5 mb-6">
                    <motion.div 
                      className="relative flex-shrink-0"
                      whileHover={shouldReduceMotion ? {} : { rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: service.bgColor }}>
                        <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                    </motion.div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-10" role="list">
                  {service.features.map((feature, idx) => (
<motion.li 
                        key={idx}
                        className="flex items-start gap-3"
                        initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 + 0.3 }}
                      >
                        <CircleCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.checkColor }} aria-hidden="true" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </motion.li>
                  ))}
                </ul>

<Link
                    href={service.link}
                    className="group/btn inline-flex items-center justify-center w-full px-6 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: service.bgColor }}
                  >
                  {service.linkText}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
