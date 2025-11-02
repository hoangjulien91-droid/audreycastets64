"use client";

import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  HeartCrack, 
  Scale, 
  Briefcase 
} from "lucide-react";

export default function InterventionDomainsSection() {
  const domains = [
    {
      icon: AlertTriangle,
      title: "Harcèlement au travail",
      description: "Moral et sexuel",
      color: "primary"
    },
    {
      icon: HeartCrack,
      title: "Violences conjugales et familiales",
      description: "Accompagnement et protection",
      color: "accent-teal"
    },
    {
      icon: Scale,
      title: "Discrimination et rupture abusive",
      description: "Constitution de dossiers solides",
      color: "primary"
    },
    {
      icon: Briefcase,
      title: "Accidents du travail avec préjudice",
      description: "Évaluation et expertise",
      color: "accent-teal"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Domaines d'Intervention <span className="text-primary">Communs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une expertise partagée pour une prise en charge globale et efficace
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-6 border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                domain.color === "primary" 
                  ? "bg-primary/10 group-hover:bg-primary/20" 
                  : "bg-accent-teal/10 group-hover:bg-accent-teal/20"
              } transition-colors duration-300`}>
                <domain.icon className={`w-7 h-7 ${
                  domain.color === "primary" ? "text-primary" : "text-accent-teal"
                }`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {domain.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}