"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Phone, Clock, Shield, CircleCheck } from "lucide-react";

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

export function AnimatedPracticalInfo() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-16 md:py-24 bg-linear-to-br from-pink-50 to-white"
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
