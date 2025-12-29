"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqData = [
  {
    question: "Qu'est-ce que la psychologie du travail ?",
    answer:
      "La psychologie du travail est une discipline qui étudie les comportements humains en situation professionnelle. Elle vise à améliorer le bien-être au travail, la performance et l'épanouissement professionnel en prenant en compte les dimensions psychologiques, sociales et organisationnelles.",
    category: "Général",
  },
  {
    question: "Comment se déroule une séance ?",
    answer:
      "Une séance dure généralement 45 à 60 minutes. Lors du premier rendez-vous, nous établissons ensemble un diagnostic de votre situation et fixons des objectifs. Les séances suivantes permettent d'approfondir les thématiques identifiées grâce à différentes approches (TCC, EFT, entretiens d'orientation).",
    category: "Déroulement",
  },
  {
    question: "Quelle est la différence avec un psychologue clinicien ?",
    answer:
      "Le psychologue du travail est spécialisé dans les problématiques liées au monde professionnel : stress, burn-out, conflits, orientation, reconversion, etc. Il possède une expertise spécifique des environnements et enjeux organisationnels, là où le psychologue clinicien se concentre davantage sur les troubles psychologiques généraux.",
    category: "Général",
  },
  {
    question: "Le secret professionnel est-il respecté ?",
    answer:
      "Absolument. Je suis tenue au secret professionnel et respecte strictement le code de déontologie des psychologues. Vos échanges restent confidentiels, sauf dans les situations légales très exceptionnelles (danger imminent).",
    category: "Confidentialité",
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer:
      "Le nombre de séances varie selon vos besoins et objectifs. Certaines personnes consultent pour quelques séances ciblées (3-5), d'autres préfèrent un accompagnement plus long (10-15 séances). Nous faisons régulièrement le point ensemble pour ajuster le suivi.",
    category: "Déroulement",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Les tarifs sont de 65€ pour une séance individuelle de 60 minutes. Les consultations pour les professionnels (bilan de compétences, coaching, audit, etc.) font l'objet d'un devis personnalisé. Le premier entretien téléphonique de 15 minutes est offert.",
    category: "Tarifs",
  },
  {
    question: "Proposez-vous des consultations en visio ?",
    answer:
      "Oui, je propose des séances en visioconférence sécurisée pour les personnes qui ne peuvent pas se déplacer ou qui préfèrent ce format. L'efficacité thérapeutique est similaire à une consultation en présentiel.",
    category: "Modalités",
  },
  {
    question: "Acceptez-vous les remboursements par mutuelle ?",
    answer:
      'Je ne suis pas conventionnée Sécurité Sociale, les séances ne sont donc pas remboursées par l\'Assurance Maladie. Cependant, de plus en plus de mutuelles proposent des forfaits "médecines douces" ou "psychologie" qui peuvent prendre en charge une partie des consultations. Je vous fournis une facture à transmettre à votre mutuelle.',
    category: "Tarifs",
  },
  {
    question: "Quelles sont les thérapies que vous pratiquez ?",
    answer:
      "Je pratique principalement les Thérapies Cognitivo-Comportementales (TCC) et l'Emotional Freedom Techniques (EFT). Ces approches sont reconnues scientifiquement pour leur efficacité dans le traitement du stress, de l'anxiété, des phobies et de nombreux autres troubles émotionnels.",
    category: "Approche",
  },
  {
    question: "Puis-je annuler ou déplacer un rendez-vous ?",
    answer:
      "Oui, vous pouvez annuler ou déplacer votre rendez-vous en respectant un délai de prévenance de 48h. En cas d'annulation tardive (moins de 48h) ou d'absence non justifiée, la séance sera due et facturée.",
    category: "Modalités",
  },
  {
    question: "Intervenez-vous en entreprise ?",
    answer:
      "Oui, j'interviens régulièrement auprès des entreprises pour différentes missions : prévention des risques psychosociaux, recrutement et évaluation de compétences (test SOSIE), ateliers de gestion du stress, formation au management, cellules d'écoute. Contactez-moi pour un devis personnalisé.",
    category: "Professionnels",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez prendre rendez-vous par téléphone au 07 43 68 72 97, par email à contact@audrey-castets.fr, ou via le formulaire de contact sur le site. Je vous recontacte généralement sous 24h pour convenir ensemble d'un créneau qui vous convient.",
    category: "Modalités",
  },
];

const categories = [
  "Tous",
  "Général",
  "Déroulement",
  "Approche",
  "Tarifs",
  "Modalités",
  "Confidentialité",
  "Professionnels",
];

export function FaqAccordion() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredFaq =
    selectedCategory === "Tous"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <section className="border-b bg-white py-8">
        <div className="container">
          <div className="scrollbar-hide flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary shadow-primary/30 text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFaq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="hover:border-primary/20 rounded-2xl border-2 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <AccordionTrigger className="hover:bg-accent/10 group flex w-full items-start justify-between rounded-2xl p-6 text-left text-lg font-semibold transition-colors [&[data-state=open]>div>svg]:rotate-180">
                    <div className="flex flex-1 items-start gap-4">
                      <div className="from-primary/10 text-primary mt-1 rounded-lg bg-linear-to-br to-purple-500/10 p-2 transition-transform group-hover:scale-110">
                        <MessageCircleQuestion className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <span className="mb-1 block">{item.question}</span>
                        <span className="text-primary/70 text-xs font-normal">{item.category}</span>
                      </div>
                      <ChevronDown className="text-primary ml-2 h-6 w-6 shrink-0 transition-transform duration-300" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-0 pb-6">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFaq.length === 0 && (
              <div className="py-12 text-center">
                <div className="bg-muted mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                  <MessageCircleQuestion className="text-muted-foreground h-8 w-8" />
                </div>
                <p className="text-muted-foreground text-lg">
                  Aucune question trouvée dans cette catégorie
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
