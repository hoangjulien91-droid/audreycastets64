"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Users, Heart } from "lucide-react";

export default function CollaborativeProcessSection() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Accueil et évaluation conjointe",
      description:
        "Premier entretien pour comprendre votre situation et définir vos besoins spécifiques",
      color: "primary",
    },
    {
      number: "02",
      icon: Users,
      title: "Accompagnement psychologique + Investigation parallèle",
      description: "Soutien thérapeutique continu et collecte rigoureuse des éléments factuels",
      color: "accent-teal",
    },
    {
      number: "03",
      icon: Heart,
      title: "Soutien juridique et reconstruction",
      description:
        "Accompagnement vers la reconnaissance de vos droits et la reconstruction personnelle",
      color: "primary",
    },
  ];

  return (
    <section className="from-muted/30 bg-linear-to-b to-white py-20 sm:py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Notre Processus <span className="text-primary">Collaboratif</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Un accompagnement structuré en 3 étapes pour votre reconstruction
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale (desktop) */}
            <div className="from-primary via-accent-teal to-primary absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 transform bg-linear-to-b lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid items-center gap-8 lg:grid-cols-2 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Contenu gauche (desktop) */}
                  <div className={`${index % 2 === 0 ? "lg:text-right" : "lg:order-2"}`}>
                    <div
                      className={`inline-block lg:block ${index % 2 === 0 ? "" : "lg:text-left"}`}
                    >
                      <div className="mb-4 inline-flex items-center gap-4 lg:inline-flex">
                        <span
                          className={`text-6xl font-bold ${
                            step.color === "primary" ? "text-primary/20" : "text-accent-teal/20"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-foreground mb-3 text-xl font-bold sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Point central avec icône */}
                  <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:flex">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${
                        step.color === "primary" ? "bg-primary" : "bg-accent-teal"
                      }`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Icône mobile */}
                  <div className="lg:hidden">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${
                        step.color === "primary" ? "bg-primary" : "bg-accent-teal"
                      }`}
                    >
                      <step.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Espace vide pour équilibrer la grille (desktop) */}
                  <div className="hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
