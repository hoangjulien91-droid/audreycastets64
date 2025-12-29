"use client";

import { motion } from "framer-motion";
import { AlertTriangle, HeartCrack, Scale, Briefcase } from "lucide-react";

export default function InterventionDomainsSection() {
  const domains = [
    {
      icon: AlertTriangle,
      title: "Harcèlement au travail",
      description: "Moral et sexuel",
      color: "primary",
    },
    {
      icon: HeartCrack,
      title: "Violences conjugales et familiales",
      description: "Accompagnement et protection",
      color: "accent-teal",
    },
    {
      icon: Scale,
      title: "Discrimination et rupture abusive",
      description: "Constitution de dossiers solides",
      color: "primary",
    },
    {
      icon: Briefcase,
      title: "Accidents du travail avec préjudice",
      description: "Évaluation et expertise",
      color: "accent-teal",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Domaines d'Intervention <span className="text-primary">Communs</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Une expertise partagée pour une prise en charge globale et efficace
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group border-border hover:border-primary/30 rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                  domain.color === "primary"
                    ? "bg-primary/10 group-hover:bg-primary/20"
                    : "bg-accent-teal/10 group-hover:bg-accent-teal/20"
                } transition-colors duration-300`}
              >
                <domain.icon
                  className={`h-7 w-7 ${
                    domain.color === "primary" ? "text-primary" : "text-accent-teal"
                  }`}
                />
              </div>
              <h3 className="text-foreground mb-2 text-lg font-bold">{domain.title}</h3>
              <p className="text-muted-foreground text-sm">{domain.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
