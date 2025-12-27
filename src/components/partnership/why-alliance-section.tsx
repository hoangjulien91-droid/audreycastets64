"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, FileCheck } from "lucide-react";

export default function WhyAllianceSection() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Cohérence entre soutien émotionnel et démarches factuelles",
      description: "Une prise en charge harmonisée qui prend en compte tous les aspects de votre situation"
    },
    {
      icon: Clock,
      title: "Gain de temps et d'efficacité",
      description: "Coordination optimale entre les différentes expertises pour avancer plus rapidement"
    },
    {
      icon: FileCheck,
      title: "Dossiers solidement construits",
      description: "Des preuves tangibles associées à une évaluation psychologique rigoureuse"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
            Pourquoi Cette <span className="text-primary">Alliance ?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des avantages concrets pour les victimes
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-linear-to-br from-white to-muted/30 rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Citation en exergue */}
          <motion.div
            variants={itemVariants}
            className="bg-linear-to-r from-primary/5 via-accent/5 to-accent-teal/5 rounded-2xl p-8 sm:p-10 border-l-4 border-primary"
          >
            <div className="flex items-start gap-4">
              <div className="hidden sm:block text-6xl text-primary/20 font-serif leading-none">"</div>
              <div>
                <p className="text-lg sm:text-xl text-foreground font-medium italic mb-4">
                  L'alliance interdisciplinaire permet une prise en charge complète qui respecte la complexité de chaque situation. Soutien psychologique et investigation factuelle se renforcent mutuellement pour offrir aux victimes les meilleures chances de reconstruction et de reconnaissance de leurs droits.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="w-12 h-0.5 bg-primary" />
                  <span className="font-semibold">Approche interdisciplinaire</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
