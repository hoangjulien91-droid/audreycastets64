"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const faqData = [
  {
    question: "Qu'est-ce que la psychologie du travail ?",
    answer:
      "La psychologie du travail est une discipline qui étudie les comportements humains en situation professionnelle. Elle vise à améliorer le bien-être au travail, la performance et l'épanouissement professionnel.",
  },
  {
    question: "Comment se déroule une séance ?",
    answer:
      "Une séance dure généralement 45 à 60 minutes. Lors du premier rendez-vous, nous établissons ensemble un diagnostic de votre situation et fixons des objectifs. Les séances suivantes permettent d'approfondir les thématiques identifiées.",
  },
  {
    question: "Quelle est la différence avec un psychologue clinicien ?",
    answer:
      "Le psychologue du travail est spécialisé dans les problématiques liées au monde professionnel : stress, burn-out, conflits, orientation, reconversion, etc. Il possède une expertise spécifique des environnements organisationnels.",
  },
  {
    question: "Le secret professionnel est-il respecté ?",
    answer:
      "Absolument. Je suis tenue au secret professionnel et respecte strictement le code de déontologie des psychologues. Vos échanges restent confidentiels.",
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer:
      "Le nombre de séances varie selon vos besoins et objectifs. Certaines personnes consultent pour quelques séances ciblées (3-5), d'autres préfèrent un accompagnement plus long (10-15 séances).",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Les tarifs sont de 60€ pour une séance individuelle de 60 minutes. Les consultations pour les professionnels font l'objet d'un devis personnalisé. Le premier entretien téléphonique de 15 minutes est offert.",
  },
];

export default function FaqSection() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-primary top-0 right-1/4 h-[400px] w-[400px] opacity-10" />
        <div className="orb orb-teal bottom-0 left-1/3 h-[300px] w-[300px] opacity-10" />
      </div>

      <div className="relative z-10 container">
        <SectionHeader
          align="center"
          badge="FAQ"
          title={
            <>
              Questions <span className="text-primary">Fréquentes</span>
            </>
          }
          subtitle="Retrouvez les réponses aux questions les plus courantes"
          className="mb-14"
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="animate-in fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="card-premium overflow-hidden border-0"
                >
                  <AccordionTrigger className="group flex w-full items-center justify-between px-6 py-5 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    <span className="text-foreground pr-4 font-semibold">{item.question}</span>
                    <ChevronDown
                      className="text-primary h-5 w-5 shrink-0 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-0 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
