"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Phone, Clock, Shield, CircleCheck } from "lucide-react";

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

export function AnimatedPracticalInfo() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="bg-linear-to-br from-pink-50 to-white py-16 md:py-24"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
              Informations pratiques
            </span>
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Modalités de <span className="text-primary">consultation</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 30px 80px rgba(139, 122, 152, 0.15)" }}
            className="rounded-3xl border border-pink-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm md:p-12"
          >
            <motion.div
              variants={staggerContainer}
              className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              {[
                {
                  icon: <Phone className="text-primary h-6 w-6" />,
                  title: "Premier entretien offert",
                  text: "15 minutes pour échanger sur vos besoins",
                },
                {
                  icon: <Clock className="text-primary h-6 w-6" />,
                  title: "Réponse sous 24h",
                  text: "Je m'engage à vous répondre rapidement",
                },
                {
                  icon: <Shield className="text-primary h-6 w-6" />,
                  title: "Confidentialité absolue",
                  text: "Secret professionnel garanti",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-pink-100"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-foreground mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="border-border border-t pt-8">
              <h3 className="text-foreground mb-4 text-xl font-bold">Formats de consultation</h3>
              <motion.div variants={staggerContainer} className="space-y-3">
                {[
                  {
                    label: "En cabinet",
                    desc: "Consultations en présentiel dans un cadre chaleureux et confidentiel",
                  },
                  {
                    label: "En visio",
                    desc: "Séances en ligne via plateforme sécurisée pour plus de flexibilité",
                  },
                  {
                    label: "En entreprise",
                    desc: "Interventions sur site pour les prestations professionnelles",
                  },
                ].map((format, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3"
                  >
                    <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-semibold">{format.label} :</span>{" "}
                      {format.desc}
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
