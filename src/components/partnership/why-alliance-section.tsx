"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, FileCheck } from "lucide-react";

export default function WhyAllianceSection() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Cohérence entre soutien émotionnel et démarches factuelles",
      description:
        "Une prise en charge harmonisée qui prend en compte tous les aspects de votre situation",
    },
    {
      icon: Clock,
      title: "Gain de temps et d'efficacité",
      description:
        "Coordination optimale entre les différentes expertises pour avancer plus rapidement",
    },
    {
      icon: FileCheck,
      title: "Dossiers solidement construits",
      description: "Des preuves tangibles associées à une évaluation psychologique rigoureuse",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            Pourquoi Cette <span className="text-primary">Alliance ?</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Des avantages concrets pour les victimes
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="to-muted/30 border-border hover:border-primary/30 rounded-2xl border bg-linear-to-br from-white p-6 transition-all duration-300 hover:shadow-lg sm:p-8"
              >
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <advantage.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-3 text-lg font-bold sm:text-xl">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Citation en exergue */}
          <motion.div
            variants={itemVariants}
            className="from-primary/5 via-accent/5 to-accent-teal/5 border-primary rounded-2xl border-l-4 bg-linear-to-r p-8 sm:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="text-primary/20 hidden font-serif text-6xl leading-none sm:block">
                "
              </div>
              <div>
                <p className="text-foreground mb-4 text-lg font-medium italic sm:text-xl">
                  L'alliance interdisciplinaire permet une prise en charge complète qui respecte la
                  complexité de chaque situation. Soutien psychologique et investigation factuelle
                  se renforcent mutuellement pour offrir aux victimes les meilleures chances de
                  reconstruction et de reconnaissance de leurs droits.
                </p>
                <div className="text-muted-foreground flex items-center gap-4 text-sm">
                  <div className="bg-primary h-0.5 w-12" />
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
