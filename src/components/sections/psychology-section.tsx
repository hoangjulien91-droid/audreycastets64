"use client";

import React from 'react';
import { Target, MessageCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: Target,
    title: "Pour qui ?",
    content: "L'accompagnement a pour but d'exprimer ce qui ne va pas, de prendre du recul, et d'identifier des leviers avec des exercices pratiques et des échanges constructifs. L'objectif est de vous donner des clefs pour appréhender les situations de crise, de tension ou de conflits.",
    gradient: "from-muted to-accent/30"
  },
  {
    icon: MessageCircle,
    title: "Pourquoi consulter ?",
    content: "Il est parfois difficile de comprendre certaines situations qui peuvent provoquer ennui, perte de sens, conflits avec les collègues ou la hiérarchie, harcèlement, agressivité, voire l'isolement professionnel. Les entretiens interrogent le rapport à son travail et questionnent l'organisation du travail.",
    gradient: "from-primary/10 to-accent-teal/10"
  }
];

const PsychologySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-warm-beige to-background relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-accent-teal/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            La Psychologie du <span className="gradient-text">Travail</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed">
            Pour toutes les personnes qui s'interrogent sur leur travail, leur recherche d'emploi ou leur avenir professionnel, quand une situation de malaise voire de souffrance apparaît.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <motion.div 
                className={`h-full flex flex-col rounded-3xl bg-gradient-to-br ${card.gradient} backdrop-blur-sm p-10 text-center border border-primary/10 shadow-lg`}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(139, 122, 152, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <card.icon className="w-10 h-10 text-primary" />
                </motion.div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>

                <p className="text-muted-foreground font-body leading-relaxed text-left">
                  {card.content}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="lg:max-w-4xl lg:mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="rounded-3xl bg-white border border-primary/10 p-10 text-center shadow-lg"
            whileHover={{ 
              y: -8,
              boxShadow: "0 20px 40px rgba(139, 122, 152, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Shield className="w-10 h-10 text-primary" />
            </motion.div>

            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Éthique et Déontologie
            </h3>

            <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
              Dans ce cadre, le psychologue du travail veille à préserver la neutralité, confidentialité des échanges et l'anonymat des personnes reçues, conformément au code de déontologie des psychologues. Les rendez-vous sont déterminés en fonction de vos disponibilités (le midi, le soir).
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsychologySection;