"use client";

import { HeartHandshake, Puzzle, Scale, BrainCircuit, Sparkles } from "lucide-react";
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";

const values = [
  {
    icon: HeartHandshake,
    title: "Bienveillance",
    subtitle: "Non-jugement",
    description:
      "Chaque parcours est unique. Je vous accueille dans un espace sécurisé où votre histoire est entendue avec respect.",
    bgColorVar: "var(--color-primary)",
  },
  {
    icon: Puzzle,
    title: "Approche Intégrative",
    subtitle: "Sur-mesure",
    description:
      "J'utilise une combinaison d'outils (TCC, psychodynamique) pour créer une thérapie adaptée à vos besoins.",
    bgColorVar: "var(--color-violet)",
  },
  {
    icon: Scale,
    title: "Éthique",
    subtitle: "Confidentialité",
    description:
      "Le respect du secret professionnel est absolu. Notre relation est bâtie sur la confiance et un cadre déontologique strict.",
    bgColorVar: "var(--color-rose)",
  },
  {
    icon: BrainCircuit,
    title: "Collaboration",
    subtitle: "Active",
    description:
      "Vous êtes l'expert de votre propre vie. Nous travaillons ensemble pour définir et atteindre vos objectifs.",
    bgColorVar: "var(--color-mauve)",
  },
];

export default function ValuesSection() {
  return (
    <section id="engagements" className="section-spacing bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-violet -top-20 right-0 h-[500px] w-[500px] opacity-20" />
        <div className="orb orb-rose bottom-0 -left-20 h-[400px] w-[400px] opacity-15" />
      </div>

      <div className="relative z-10 container">
        <SectionHeader
          align="center"
          badge="Mon engagement"
          title={
            <>
              Les piliers de mon <span className="text-primary">accompagnement</span>
            </>
          }
          subtitle="Ma pratique est guidée par des principes fondamentaux qui garantissent une thérapie de qualité, humaine et respectueuse."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group animate-in fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-premium relative h-full overflow-hidden p-7 text-center">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
                  style={{ backgroundColor: value.bgColorVar }}
                  aria-hidden="true"
                />

                <div className="relative mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div
                    className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                    style={{ backgroundColor: value.bgColorVar }}
                  >
                    <value.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-foreground mb-1 text-lg font-semibold">{value.title}</h3>
                <p className="text-primary mb-3 text-sm font-medium">{value.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
