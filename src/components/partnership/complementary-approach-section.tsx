"use client";

import { motion } from "framer-motion";
import { Brain, Search, Users, FileText, Shield as ShieldIcon, Target } from "lucide-react";

export default function ComplementaryApproachSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Notre Approche <span className="text-primary">Complémentaire</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Une approche à 360° combinant soutien psychologique et investigation rigoureuse
            </p>
          </motion.div>

          {/* Schéma visuel de collaboration */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Psychologue du travail */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border-2 border-primary/20 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Psychologue du Travail
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: Brain, text: "Évaluation psychologique" },
                    { icon: Users, text: "Accompagnement thérapeutique" },
                    { icon: Target, text: "Réinsertion professionnelle" },
                    { icon: FileText, text: "Expertise judiciaire" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Détective victimologue */}
            <div className="relative">
              <div className="bg-gradient-to-br from-accent-teal/10 to-accent-teal/5 rounded-3xl p-8 border-2 border-accent-teal/20 h-full">
                <div className="w-16 h-16 rounded-2xl bg-accent-teal flex items-center justify-center mb-6 shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Détective Victimologue
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: Search, text: "Investigation factuelle" },
                    { icon: FileText, text: "Constitution de dossiers" },
                    { icon: Target, text: "Recherche de preuves" },
                    { icon: ShieldIcon, text: "Protection des victimes" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Synergie */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 via-accent/5 to-accent-teal/5 rounded-2xl p-8 text-center border border-primary/10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-muted-foreground">+</div>
              <div className="w-12 h-12 rounded-full bg-accent-teal flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">
              La Synergie au Service des Victimes
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une approche à 360° combinant soutien psychologique et investigation rigoureuse pour une reconstruction complète
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
