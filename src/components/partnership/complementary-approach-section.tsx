"use client";

import { motion } from "framer-motion";
import { Brain, Search, Users, FileText, Shield as ShieldIcon, Target } from "lucide-react";

export default function ComplementaryApproachSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="font-display text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Notre Approche <span className="text-primary">Complémentaire</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Une approche à 360° combinant soutien psychologique et investigation rigoureuse
            </p>
          </motion.div>

          {/* Schéma visuel de collaboration */}
          <motion.div variants={itemVariants} className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Psychologue du travail */}
            <div className="relative">
              <div className="from-primary/10 to-primary/5 border-primary/20 h-full rounded-3xl border-2 bg-linear-to-br p-8">
                <div className="bg-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-foreground mb-4 text-2xl font-bold">Psychologue du Travail</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Brain, text: "Évaluation psychologique" },
                    { icon: Users, text: "Accompagnement thérapeutique" },
                    { icon: Target, text: "Réinsertion professionnelle" },
                    { icon: ShieldIcon, text: "Prévention des RPS" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Détective victimologue */}
            <div className="relative">
              <div className="from-accent-teal/10 to-accent-teal/5 border-accent-teal/20 h-full rounded-3xl border-2 bg-linear-to-br p-8">
                <div className="bg-accent-teal mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-foreground mb-4 text-2xl font-bold">Détective Victimologue</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Search, text: "Investigation factuelle" },
                    { icon: FileText, text: "Constitution de dossiers" },
                    { icon: Target, text: "Recherche de preuves" },
                    { icon: ShieldIcon, text: "Protection des victimes" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="text-accent-teal mt-0.5 h-5 w-5 flex-shrink-0" />
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
            className="from-primary/5 via-accent/5 to-accent-teal/5 border-primary/10 rounded-2xl border bg-linear-to-r p-8 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="text-muted-foreground text-2xl font-bold">+</div>
              <div className="bg-accent-teal flex h-12 w-12 items-center justify-center rounded-full">
                <Search className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-foreground mb-2 text-lg font-semibold">
              La Synergie au Service des Victimes
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Une approche à 360° combinant soutien psychologique et investigation rigoureuse pour
              une reconstruction complète
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
