"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Users, Heart } from "lucide-react";

export default function CollaborativeProcessSection() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Accueil et évaluation conjointe",
      description: "Premier entretien pour comprendre votre situation et définir vos besoins spécifiques",
      color: "primary"
    },
    {
      number: "02",
      icon: Users,
      title: "Accompagnement psychologique + Investigation parallèle",
      description: "Soutien thérapeutique continu et collecte rigoureuse des éléments factuels",
      color: "accent-teal"
    },
    {
      number: "03",
      icon: Heart,
      title: "Soutien juridique et reconstruction",
      description: "Accompagnement vers la reconnaissance de vos droits et la reconstruction personnelle",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Notre Processus <span className="text-primary">Collaboratif</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un accompagnement structuré en 3 étapes pour votre reconstruction
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-teal to-primary transform -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Contenu gauche (desktop) */}
                  <div className={`${index % 2 === 0 ? "lg:text-right" : "lg:order-2"}`}>
                    <div className={`inline-block lg:block ${index % 2 === 0 ? "" : "lg:text-left"}`}>
                      <div className="inline-flex lg:inline-flex items-center gap-4 mb-4">
                        <span className={`text-6xl font-bold ${
                          step.color === "primary" ? "text-primary/20" : "text-accent-teal/20"
                        }`}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Point central avec icône */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                      step.color === "primary" 
                        ? "bg-primary" 
                        : "bg-accent-teal"
                    }`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Icône mobile */}
                  <div className="lg:hidden">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                      step.color === "primary" 
                        ? "bg-primary" 
                        : "bg-accent-teal"
                    }`}>
                      <step.icon className="w-7 h-7 text-white" />
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