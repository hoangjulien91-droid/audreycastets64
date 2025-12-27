"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Link } from 'next-view-transitions';
import { Heart, Users, CircleCheck, ArrowRight } from "lucide-react";

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

export function AnimatedServicesCards() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-16 md:py-24 bg-linear-to-br from-[#F9F7F4] via-[#FDFCFB] to-white relative overflow-hidden"
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
              className="absolute inset-0 bg-linear-to-br from-[#F3E8F0]/40 to-[#E8DFF0]/30 rounded-3xl blur-xl"
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
              <div className="h-2 bg-linear-to-r from-[#C5B8D0] via-[#A594B3] to-[#8B7A98]"></div>
              <div className="p-8 md:p-10">
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 w-16 h-16 bg-linear-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl blur-xl opacity-40"></div>
                  <div className="relative w-16 h-16 bg-linear-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl flex items-center justify-center shadow-lg">
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
                    className="inline-flex items-center justify-center w-full px-6 py-6 bg-linear-to-r from-[#A594B3] to-[#8B7A98] text-white font-semibold rounded-2xl shadow-md cursor-pointer"
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
              className="absolute inset-0 bg-linear-to-br from-[#E8DFF0]/40 to-[#F3E8F0]/30 rounded-3xl blur-xl"
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
              <div className="h-2 bg-linear-to-r from-[#8B7A98] via-[#A594B3] to-[#C5B8D0]"></div>
              <div className="p-8 md:p-10">
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 w-16 h-16 bg-linear-to-br from-[#8B7A98] to-[#A594B3] rounded-2xl blur-xl opacity-40"></div>
                  <div className="relative w-16 h-16 bg-linear-to-br from-[#8B7A98] to-[#A594B3] rounded-2xl flex items-center justify-center shadow-lg">
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
                    className="inline-flex items-center justify-center w-full px-6 py-6 bg-linear-to-r from-[#8B7A98] to-[#A594B3] text-white font-semibold rounded-2xl shadow-md cursor-pointer"
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
