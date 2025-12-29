"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Link } from "next-view-transitions";
import { Heart, Users, CircleCheck, ArrowRight } from "lucide-react";

// Animation variants
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

const cardHover = {
  rest: { scale: 1, rotateY: 0 },
  hover: {
    scale: 1.03,
    y: -8,
    transition: { duration: 0.3 },
  },
};

export function AnimatedServicesCards() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="from-bg-soft to-background relative overflow-hidden bg-linear-to-br via-[#FDFCFB] py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="bg-bg-soft absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="bg-bg-subtle absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="mb-12 text-center">
          <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
            Deux approches complémentaires
          </span>
          <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Choisissez l'accompagnement <span className="text-primary">qui vous correspond</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
        >
          {/* Card 1 */}
          <motion.div variants={fadeInUp} className="group relative">
            <motion.div
              className="from-bg-soft/40 to-bg-subtle/30 absolute inset-0 rounded-3xl bg-linear-to-br blur-xl"
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
              className="glass-effect border-border-soft/30 relative h-full overflow-hidden rounded-3xl border shadow-lg"
            >
              <div className="from-accent-violet-light via-accent-violet to-accent-violet-dark h-2 bg-linear-to-r"></div>
              <div className="p-8 md:p-10">
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="from-accent-violet to-accent-violet-dark absolute inset-0 h-16 w-16 rounded-2xl bg-linear-to-br opacity-40 blur-xl"></div>
                  <div className="from-accent-violet to-accent-violet-dark relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="font-display text-foreground group-hover:text-primary mb-4 text-2xl font-bold transition-colors md:text-3xl">
                  Pour les Particuliers
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Thérapie Cognitive et Comportementale (TCC) et EFT (Emotional Freedom Techniques)
                  pour vous accompagner dans vos difficultés personnelles et développer des
                  stratégies d'adaptation efficaces.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Thérapies Cognitivo-Comportementales (TCC)",
                    "Gestion du stress et de l'anxiété",
                    "EFT - Techniques de libération émotionnelle",
                    "Burn-out et épuisement professionnel",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/mon-approche">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(165, 148, 179, 0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    className="from-accent-violet to-accent-violet-dark inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-linear-to-r px-6 py-6 font-semibold text-white shadow-md"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeInUp} className="group relative">
            <motion.div
              className="from-bg-subtle/40 to-bg-soft/30 absolute inset-0 rounded-3xl bg-linear-to-br blur-xl"
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
              className="glass-effect border-border-soft/30 relative h-full overflow-hidden rounded-3xl border shadow-lg"
            >
              <div className="from-accent-violet-dark via-accent-violet to-accent-violet-light h-2 bg-linear-to-r"></div>
              <div className="p-8 md:p-10">
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="from-accent-violet-dark to-accent-violet absolute inset-0 h-16 w-16 rounded-2xl bg-linear-to-br opacity-40 blur-xl"></div>
                  <div className="from-accent-violet-dark to-accent-violet relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="font-display text-foreground group-hover:text-primary mb-4 text-2xl font-bold transition-colors md:text-3xl">
                  Pour les Professionnels
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Expertise en psychologie du travail et ressources humaines pour accompagner les
                  organisations : prévention des RPS, recrutement, tests de personnalité et
                  amélioration du bien-être au travail.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Diagnostic des risques psychosociaux",
                    "Recrutement et tests SOSIE",
                    "Ateliers de prévention du stress",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(139, 122, 152, 0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    className="from-accent-violet-dark to-accent-violet inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-linear-to-r px-6 py-6 font-semibold text-white shadow-md"
                  >
                    Me contacter pour un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
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
