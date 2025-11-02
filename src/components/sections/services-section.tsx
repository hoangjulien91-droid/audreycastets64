"use client";

import { ArrowRight, CircleCheck, Heart, Users } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-[#F9F7F4] via-[#FDFCFB] to-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#F3E8F0] rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8DFF0] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-sm font-semibold !bg-primary/10 !text-primary border-transparent"
          >
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Mes <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un accompagnement professionnel adapté à vos besoins, que vous soyez
            particulier ou professionnel.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {/* Card 1: Pour les Particuliers */}
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
                  Thérapie Cognitive et Comportementale (TCC) et EFT (Emotional
                  Freedom Techniques) pour vous accompagner dans vos difficultés
                  personnelles et développer des stratégies d'adaptation
                  efficaces.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Thérapies Cognitivo-Comportementales (TCC)",
                    "Gestion du stress et de l'anxiété",
                    "EFT - Techniques de libération émotionnelle",
                    "Burn-out et épuisement professionnel",
                    "Dépression",
                    "Estime/confiance en soi",
                    "Bilan de compétences"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
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

          {/* Card 2: Pour les Professionnels */}
          <motion.div variants={fadeInUp} className="group relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#B8E6D5]/40 to-[#D4F1E8]/30 rounded-3xl blur-xl"
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
              className="relative h-full glass-effect rounded-3xl border border-[#7BC4BF]/20 shadow-lg overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-[#5FABA6] via-[#7BC4BF] to-[#9FD9D3]"></div>
              <div className="p-8 md:p-10">
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#5FABA6] to-[#7BC4BF] rounded-2xl blur-xl opacity-40"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#5FABA6] to-[#7BC4BF] rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-[#5FABA6] transition-colors">
                  Pour les Professionnels
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Expertise en psychologie du travail et ressources humaines
                  pour accompagner les organisations : prévention des RPS,
                  recrutement, tests de personnalité et amélioration du
                  bien-être au travail.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Diagnostic des risques psychosociaux",
                    "Recrutement et tests SOSIE",
                    "Ateliers de prévention du stress"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <CircleCheck className="w-5 h-5 text-[#5FABA6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link href="/contact">
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(95, 171, 166, 0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-[#5FABA6] to-[#7BC4BF] text-white font-semibold rounded-2xl shadow-md cursor-pointer"
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
    </section>
  );
};

export default ServicesSection;