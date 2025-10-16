"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronRight,
  Sparkles,
  ChevronDown,
  MessageCircleQuestion,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
      "Je ne suis pas conventionnée Sécurité Sociale, les séances ne sont donc pas remboursées par l'Assurance Maladie. Cependant, de plus en plus de mutuelles proposent des forfaits \"médecines douces\" ou \"psychologie\" qui peuvent prendre en charge une partie des consultations. Je vous fournis une facture à transmettre à votre mutuelle.",
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

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredFaq =
    selectedCategory === "Tous"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50/30 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/20 to-transparent blur-3xl" />
          <div className="container relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Accueil
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground font-medium">FAQ</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-primary mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Questions Fréquentes
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Toutes les{" "}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                  réponses
                </span>{" "}
                à vos questions
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Toutes les réponses à vos questions sur la psychologie du
                travail, les thérapies cognitivo-comportementales et mes
                services d'accompagnement.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 text-sm font-medium text-foreground shadow-sm">
                  💬 Réponses détaillées
                </div>
                <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 text-sm font-medium text-foreground shadow-sm">
                  🔍 Facile à parcourir
                </div>
                <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 text-sm font-medium text-foreground shadow-sm">
                  ⚡ Informations à jour
                </div>
                <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 text-sm font-medium text-foreground shadow-sm">
                  💡 Conseils d'experts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
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
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
              >
                {filteredFaq.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-2 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                  >
                    <AccordionTrigger className="flex w-full items-start justify-between p-6 font-semibold text-lg text-left hover:bg-accent/10 rounded-2xl transition-colors group [&[data-state=open]>div>svg]:rotate-180">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary group-hover:scale-110 transition-transform">
                          <MessageCircleQuestion className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <span className="block mb-1">{item.question}</span>
                          <span className="text-xs font-normal text-primary/70">
                            {item.category}
                          </span>
                        </div>
                        <ChevronDown className="h-6 w-6 shrink-0 text-primary transition-transform duration-300 ml-2" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0">
                      <div className="pl-14">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFaq.length === 0 && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <MessageCircleQuestion className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Aucune question trouvée dans cette catégorie
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-pink-500 to-purple-500 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Besoin d'aide supplémentaire ?
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Vous ne trouvez pas{" "}
                <span className="underline decoration-wavy decoration-white/50">
                  la réponse
                </span>{" "}
                ?
              </h2>

              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                N'hésitez pas à me contacter directement. Je serai ravie de
                répondre à toutes vos questions et de vous accompagner dans
                votre démarche.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Poser une question
                  </Button>
                </Link>
                <Link href="/mon-approche">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 transition-all hover:scale-105"
                  >
                    Découvrir mon approche
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span>Premier entretien offert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span>Sans engagement</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}