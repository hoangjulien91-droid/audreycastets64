"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Qu'est-ce que la psychologie du travail ?",
    answer:
      "La psychologie du travail est une discipline qui étudie les comportements humains en situation professionnelle. Elle vise à améliorer le bien-être au travail, la performance et l'épanouissement professionnel en prenant en compte les dimensions psychologiques, sociales et organisationnelles.",
  },
  {
    question: "Comment se déroule une séance ?",
    answer:
      "Une séance dure généralement 45 à 60 minutes. Lors du premier rendez-vous, nous établissons ensemble un diagnostic de votre situation et fixons des objectifs. Les séances suivantes permettent d'approfondir les thématiques identifiées grâce à différentes approches (TCC, EFT, entretiens d'orientation).",
  },
  {
    question: "Quelle est la différence avec un psychologue clinicien ?",
    answer:
      "Le psychologue du travail est spécialisé dans les problématiques liées au monde professionnel : stress, burn-out, conflits, orientation, reconversion, etc. Il possède une expertise spécifique des environnements et enjeux organisationnels, là où le psychologue clinicien se concentre davantage sur les troubles psychologiques généraux.",
  },
  {
    question: "Le secret professionnel est-il respecté ?",
    answer:
      "Absolument. Je suis tenue au secret professionnel et respecte strictement le code de déontologie des psychologues. Vos échanges restent confidentiels, sauf dans les situations légales très exceptionnelles (danger imminent).",
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer:
      "Le nombre de séances varie selon vos besoins et objectifs. Certaines personnes consultent pour quelques séances ciblées (3-5), d'autres préfèrent un accompagnement plus long (10-15 séances). Nous faisons régulièrement le point ensemble pour ajuster le suivi.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Les tarifs sont de 60€ pour une séance individuelle de 60 minutes, et 80€ pour une séance de couple ou familiale. Les consultations pour les professionnels (bilan de compétences, coaching, etc.) font l'objet d'un devis personnalisé. Le premier entretien téléphonique de 15 minutes est offert.",
  },
  {
    question: "Proposez-vous des consultations en visio ?",
    answer:
      "Oui, je propose des séances en visioconférence sécurisée pour les personnes qui ne peuvent pas se déplacer ou qui préfèrent ce format. L'efficacité thérapeutique est similaire à une consultation en présentiel.",
  },
  {
    question: "Acceptez-vous les remboursements par mutuelle ?",
    answer:
      "Je ne suis pas conventionnée Sécurité Sociale, les séances ne sont donc pas remboursées par l'Assurance Maladie. Cependant, de plus en plus de mutuelles proposent des forfaits \"médecines douces\" ou \"psychologie\" qui peuvent prendre en charge une partie des consultations. Je vous fournis une facture à transmettre à votre mutuelle.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-teal/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between p-6 font-semibold text-lg text-left hover:bg-accent/10 rounded-2xl transition-colors group [&[data-state=open]>svg]:rotate-180">
                    {item.question}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300" />
                    </motion.div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {item.answer}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;