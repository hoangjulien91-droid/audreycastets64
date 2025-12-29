"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, Puzzle, Scale, BrainCircuit, Sparkles } from "lucide-react";
import React from "react";

const values = [
  {
    icon: HeartHandshake,
    title: "Bienveillance",
    subtitle: "Non-jugement",
    description:
      "Chaque parcours est unique. Je vous accueille dans un espace sécurisé où votre histoire est entendue avec respect.",
    bgColor: "#9D6B8C",
  },
  {
    icon: Puzzle,
    title: "Approche Intégrative",
    subtitle: "Sur-mesure",
    description:
      "J'utilise une combinaison d'outils (TCC, psychodynamique) pour créer une thérapie adaptée à vos besoins.",
    bgColor: "#8B7CB3",
  },
  {
    icon: Scale,
    title: "Éthique",
    subtitle: "Confidentialité",
    description:
      "Le respect du secret professionnel est absolu. Notre relation est bâtie sur la confiance et un cadre déontologique strict.",
    bgColor: "#C27B9E",
  },
  {
    icon: BrainCircuit,
    title: "Collaboration",
    subtitle: "Active",
    description:
      "Vous êtes l'expert de votre propre vie. Nous travaillons ensemble pour définir et atteindre vos objectifs.",
    bgColor: "#9B8AA3",
  },
];

export default function ValuesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="engagements" className="section-spacing bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-violet -top-20 right-0 h-[500px] w-[500px] opacity-20" />
        <div className="orb orb-rose bottom-0 -left-20 h-[400px] w-[400px] opacity-15" />
      </div>

      <div className="relative z-10 container">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="badge-premium mb-5 inline-flex">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>Mon engagement</span>
          </div>
          <h2 className="text-foreground mb-5">
            Les piliers de mon <span className="text-primary">accompagnement</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ma pratique est guidée par des principes fondamentaux qui garantissent une thérapie de
            qualité, humaine et respectueuse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium relative h-full overflow-hidden p-7 text-center">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
                  style={{ backgroundColor: value.bgColor }}
                  aria-hidden="true"
                />

                <motion.div
                  className="relative mx-auto mb-5"
                  whileHover={shouldReduceMotion ? {} : { rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                    style={{ backgroundColor: value.bgColor }}
                  >
                    <value.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </motion.div>

                <h3 className="text-foreground mb-1 text-lg font-semibold">{value.title}</h3>
                <p className="text-primary mb-3 text-sm font-medium">{value.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
