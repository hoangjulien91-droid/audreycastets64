import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import type { Metadata } from 'next';
import {
  ChevronRight,
  Sparkles,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'FAQ - Questions Fréquentes sur la Psychologie du Travail',
  description: 'Réponses aux questions fréquentes sur la psychologie du travail, les TCC, l\'EFT, les tarifs, les modalités de consultation et le déroulement des séances.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/faq',
  },
  openGraph: {
    title: 'FAQ - Questions Fréquentes sur la Psychologie du Travail',
    description: 'Réponses aux questions fréquentes sur la psychologie du travail et mes services.',
    url: 'https://www.audrey-castets.fr/faq',
    type: 'website',
  },
};

const faqData = [
  {
    question: "Qu'est-ce que la psychologie du travail ?",
    answer: "La psychologie du travail est une discipline qui étudie les comportements humains en situation professionnelle. Elle vise à améliorer le bien-être au travail, la performance et l'épanouissement professionnel en prenant en compte les dimensions psychologiques, sociales et organisationnelles.",
  },
  {
    question: "Comment se déroule une séance ?",
    answer: "Une séance dure généralement 45 à 60 minutes. Lors du premier rendez-vous, nous établissons ensemble un diagnostic de votre situation et fixons des objectifs. Les séances suivantes permettent d'approfondir les thématiques identifiées grâce à différentes approches (TCC, EFT, entretiens d'orientation).",
  },
  {
    question: "Quelle est la différence avec un psychologue clinicien ?",
    answer: "Le psychologue du travail est spécialisé dans les problématiques liées au monde professionnel : stress, burn-out, conflits, orientation, reconversion, etc. Il possède une expertise spécifique des environnements et enjeux organisationnels, là où le psychologue clinicien se concentre davantage sur les troubles psychologiques généraux.",
  },
  {
    question: "Le secret professionnel est-il respecté ?",
    answer: "Absolument. Je suis tenue au secret professionnel et respecte strictement le code de déontologie des psychologues. Vos échanges restent confidentiels, sauf dans les situations légales très exceptionnelles (danger imminent).",
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer: "Le nombre de séances varie selon vos besoins et objectifs. Certaines personnes consultent pour quelques séances ciblées (3-5), d'autres préfèrent un accompagnement plus long (10-15 séances). Nous faisons régulièrement le point ensemble pour ajuster le suivi.",
  },
];

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'FAQ' }
      ]} />
      <FaqJsonLd faqs={faqData} />
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

          {/* FAQ Accordion */}
          <FaqAccordion />

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
    </>
  );
}
