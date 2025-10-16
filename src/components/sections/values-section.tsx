"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Puzzle, Scale, BrainCircuit } from "lucide-react";
import React from "react";

const values = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-[var(--color-accent-link)]" />,
    title: "Bienveillance & Non-jugement",
    description:
      "Chaque parcours est unique. Je vous accueille dans un espace sécurisé où votre histoire est entendue avec respect et sans aucun jugement.",
  },
  {
    icon: <Puzzle className="h-10 w-10 text-[var(--color-accent-link)]" />,
    title: "Approche Intégrative",
    description:
      "J'utilise une combinaison d'outils et de techniques (TCC, psychodynamique) pour créer une thérapie sur-mesure, adaptée à vos besoins spécifiques.",
  },
  {
    icon: <Scale className="h-10 w-10 text-[var(--color-accent-link)]" />,
    title: "Éthique & Confidentialité",
    description:
      "Le respect du secret professionnel est absolu. Notre relation thérapeutique est bâtie sur la confiance et un cadre déontologique strict.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-[var(--color-accent-link)]" />,
    title: "Collaboration Active",
    description:
      "Vous êtes l'expert de votre propre vie. Nous travaillons ensemble, en partenariat, pour définir et atteindre vos objectifs de mieux-être.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const ValuesSection = () => {
  return (
    <section id="engagements" className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-[var(--color-accent-link)]">Mon engagement</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display">Les piliers de mon accompagnement</h2>
          <p className="mt-6 text-lg leading-8 text-text-secondary">Ma pratique est guidée par des principes fondamentaux qui garantissent une thérapie de qualité, humaine et respectueuse.</p>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={itemVariants} className="flex flex-col items-start text-left">
              <div className="p-3 rounded-full bg-[var(--color-accent-link)]/10 ring-8 ring-[var(--color-accent-link)]/5 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold leading-7 text-foreground">{value.title}</h3>
              <p className="mt-2 text-base leading-7 text-text-secondary">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;