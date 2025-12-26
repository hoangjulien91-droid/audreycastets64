"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, Puzzle, Scale, BrainCircuit, Sparkles } from "lucide-react";
import React from "react";

const values = [
  {
    icon: HeartHandshake,
    title: "Bienveillance",
    subtitle: "Non-jugement",
    description: "Chaque parcours est unique. Je vous accueille dans un espace sécurisé où votre histoire est entendue avec respect.",
    gradient: "from-primary to-primary-soft",
  },
  {
    icon: Puzzle,
    title: "Approche Intégrative",
    subtitle: "Sur-mesure",
    description: "J'utilise une combinaison d'outils (TCC, psychodynamique) pour créer une thérapie adaptée à vos besoins.",
    gradient: "from-violet to-violet-soft",
  },
  {
    icon: Scale,
    title: "Éthique",
    subtitle: "Confidentialité",
    description: "Le respect du secret professionnel est absolu. Notre relation est bâtie sur la confiance et un cadre déontologique strict.",
    gradient: "from-rose to-rose-soft",
  },
  {
    icon: BrainCircuit,
    title: "Collaboration",
    subtitle: "Active",
    description: "Vous êtes l'expert de votre propre vie. Nous travaillons ensemble pour définir et atteindre vos objectifs.",
    gradient: "from-mauve to-mauve-light",
  },
];

export default function ValuesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="engagements" className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-violet w-[500px] h-[500px] -top-20 right-0 opacity-20" />
        <div className="orb orb-rose w-[400px] h-[400px] bottom-0 -left-20 opacity-15" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="badge-premium mb-5 inline-flex">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Mon engagement</span>
          </div>
          <h2 className="text-foreground mb-5">
            Les piliers de mon <span className="gradient-text">accompagnement</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ma pratique est guidée par des principes fondamentaux qui garantissent une thérapie de qualité, humaine et respectueuse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium relative h-full p-7 text-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true" />
                
                <motion.div
                  className="relative mx-auto mb-5"
                  whileHover={shouldReduceMotion ? {} : { rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br ${value.gradient} rounded-2xl blur-lg opacity-40`} aria-hidden="true" />
                  <div className={`relative w-16 h-16 mx-auto bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {value.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
