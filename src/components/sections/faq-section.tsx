"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const faqData = [
  {
    question: "Qu'est-ce que la psychologie du travail ?",
    answer: "La psychologie du travail est une discipline qui étudie les comportements humains en situation professionnelle. Elle vise à améliorer le bien-être au travail, la performance et l'épanouissement professionnel.",
  },
  {
    question: "Comment se déroule une séance ?",
    answer: "Une séance dure généralement 45 à 60 minutes. Lors du premier rendez-vous, nous établissons ensemble un diagnostic de votre situation et fixons des objectifs. Les séances suivantes permettent d'approfondir les thématiques identifiées.",
  },
  {
    question: "Quelle est la différence avec un psychologue clinicien ?",
    answer: "Le psychologue du travail est spécialisé dans les problématiques liées au monde professionnel : stress, burn-out, conflits, orientation, reconversion, etc. Il possède une expertise spécifique des environnements organisationnels.",
  },
  {
    question: "Le secret professionnel est-il respecté ?",
    answer: "Absolument. Je suis tenue au secret professionnel et respecte strictement le code de déontologie des psychologues. Vos échanges restent confidentiels.",
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer: "Le nombre de séances varie selon vos besoins et objectifs. Certaines personnes consultent pour quelques séances ciblées (3-5), d'autres préfèrent un accompagnement plus long (10-15 séances).",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Les tarifs sont de 60€ pour une séance individuelle de 60 minutes. Les consultations pour les professionnels font l'objet d'un devis personnalisé. Le premier entretien téléphonique de 15 minutes est offert.",
  },
];

export default function FaqSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-primary w-[400px] h-[400px] top-0 right-1/4 opacity-10" />
        <div className="orb orb-teal w-[300px] h-[300px] bottom-0 left-1/3 opacity-10" />
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
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span>FAQ</span>
          </div>
          <h2 className="text-foreground mb-5">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="card-premium overflow-hidden border-0"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between px-6 py-5 text-left hover:no-underline group [&[data-state=open]>svg]:rotate-180">
                    <span className="font-semibold text-foreground pr-4">{item.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300" aria-hidden="true" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
