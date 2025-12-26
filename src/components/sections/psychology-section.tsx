"use client";

import React from 'react';
import { Target, MessageCircle, Shield, Brain } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const cards = [
  {
    icon: Target,
    title: "Pour qui ?",
    content: "L'accompagnement a pour but d'exprimer ce qui ne va pas, de prendre du recul, et d'identifier des leviers avec des exercices pratiques. L'objectif est de vous donner des clefs pour appréhender les situations de crise ou de tension.",
    gradient: "from-primary to-primary-soft"
  },
  {
    icon: MessageCircle,
    title: "Pourquoi consulter ?",
    content: "Il est parfois difficile de comprendre certaines situations qui peuvent provoquer perte de sens, conflits ou isolement professionnel. Les entretiens interrogent le rapport à son travail et questionnent l'organisation.",
    gradient: "from-accent-teal to-accent-teal-light"
  }
];

export default function PsychologySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-spacing bg-gradient-to-b from-warm-beige/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-primary w-[500px] h-[500px] top-0 right-0 opacity-15" />
        <div className="orb orb-teal w-[400px] h-[400px] bottom-0 left-0 opacity-10" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-premium mb-5 inline-flex">
            <Brain className="w-4 h-4" aria-hidden="true" />
            <span>Psychologie du Travail</span>
          </div>
          <h2 className="text-foreground mb-5">
            La Psychologie du <span className="gradient-text">Travail</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pour toutes les personnes qui s'interrogent sur leur travail, leur recherche d'emploi ou leur avenir professionnel, quand une situation de malaise voire de souffrance apparaît.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? {} : { opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="card-premium relative h-full p-8 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient}`} aria-hidden="true" />
                
                <motion.div 
                  className="relative mb-5"
                  whileHover={shouldReduceMotion ? {} : { rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl blur-lg opacity-40`} aria-hidden="true" />
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <card.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground mb-4 font-display">
                  {card.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-premium relative p-8 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-lavender-light" aria-hidden="true" />
            
            <motion.div 
              className="relative mx-auto mb-5"
              whileHover={shouldReduceMotion ? {} : { rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br from-lavender to-lavender-light rounded-xl blur-lg opacity-40" aria-hidden="true" />
              <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-lavender to-lavender-light rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
            </motion.div>

            <h3 className="text-xl font-semibold text-foreground mb-4 font-display">
              Éthique et Déontologie
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Dans ce cadre, le psychologue du travail veille à préserver la <strong className="text-foreground">neutralité</strong>, <strong className="text-foreground">confidentialité</strong> des échanges et l'anonymat des personnes reçues, conformément au code de déontologie des psychologues.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
