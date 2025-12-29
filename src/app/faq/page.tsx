import { Link } from "next-view-transitions";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import type { Metadata } from "next";
import { Sparkles, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes sur la Psychologie du Travail",
  description:
    "Réponses aux questions fréquentes sur la psychologie du travail, les TCC, l'EFT, les tarifs, les modalités de consultation et le déroulement des séances.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/faq",
  },
  openGraph: {
    title: "FAQ - Questions Fréquentes sur la Psychologie du Travail",
    description: "Réponses aux questions fréquentes sur la psychologie du travail et mes services.",
    url: "https://www.audrey-castets.fr/faq",
    type: "website",
  },
};

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
];

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "FAQ" }]} />
      <FaqJsonLd faqs={faqData} />
      <div className="bg-background min-h-screen">
        <Header />
        <main className="pt-20" id="main-content">
          <section
            className="to-background relative overflow-hidden bg-linear-to-br from-pink-50 via-purple-50/30 py-20"
            aria-labelledby="faq-heading"
          >
            <div
              className="absolute inset-0 bg-linear-to-br from-pink-100/40 via-purple-100/20 to-transparent blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10 container">
              <nav className="mb-8" aria-label="Fil d'Ariane">
                <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]} />
              </nav>

              <div className="max-w-4xl">
                <div className="text-primary mb-6 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-medium">Questions Fréquentes</span>
                </div>

                <h1
                  id="faq-heading"
                  className="font-display text-foreground mb-6 text-5xl font-bold md:text-6xl lg:text-7xl"
                >
                  Toutes les{" "}
                  <span className="from-primary to-primary bg-linear-to-r via-purple-500 bg-clip-text text-transparent">
                    réponses
                  </span>{" "}
                  à vos questions
                </h1>

                <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                  Toutes les réponses à vos questions sur la psychologie du travail, les thérapies
                  cognitivo-comportementales et mes services d'accompagnement.
                </p>

                <div className="flex flex-wrap gap-3" role="list" aria-label="Points clés">
                  <div
                    className="text-foreground rounded-full border border-pink-100 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm"
                    role="listitem"
                  >
                    Réponses détaillées
                  </div>
                  <div
                    className="text-foreground rounded-full border border-purple-100 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm"
                    role="listitem"
                  >
                    Facile à parcourir
                  </div>
                  <div
                    className="text-foreground rounded-full border border-pink-100 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm"
                    role="listitem"
                  >
                    Informations à jour
                  </div>
                  <div
                    className="text-foreground rounded-full border border-purple-100 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm"
                    role="listitem"
                  >
                    Conseils d'experts
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FaqAccordion />

          <section
            className="from-primary bg-linear-to-br via-pink-500 to-purple-500 py-20 text-white"
            aria-labelledby="cta-heading"
          >
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-medium">Besoin d'aide supplémentaire ?</span>
                </div>

                <h2 id="cta-heading" className="font-display mb-6 text-4xl font-bold md:text-5xl">
                  Vous ne trouvez pas{" "}
                  <span className="underline decoration-white/50 decoration-wavy">la réponse</span>{" "}
                  ?
                </h2>

                <p className="mb-10 text-xl leading-relaxed text-white/90">
                  N'hésitez pas à me contacter directement. Je serai ravie de répondre à toutes vos
                  questions et de vous accompagner dans votre démarche.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="text-primary bg-white px-8 font-semibold shadow-xl transition-all hover:scale-105 hover:bg-white/90 hover:shadow-2xl"
                      aria-label="Poser une question via le formulaire de contact"
                    >
                      <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                      Poser une question
                    </Button>
                  </Link>
                  <Link href="/mon-approche">
                    <Button
                      size="lg"
                      variant="outline"
                      className="hover:text-primary border-2 border-white px-8 font-semibold text-white transition-all hover:scale-105 hover:bg-white"
                      aria-label="Découvrir mon approche thérapeutique"
                    >
                      Découvrir mon approche
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>

                <div
                  className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm"
                  role="list"
                  aria-label="Garanties"
                >
                  <div className="flex items-center gap-2" role="listitem">
                    <div className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    <span>Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center gap-2" role="listitem">
                    <div className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    <span>Premier entretien offert</span>
                  </div>
                  <div className="flex items-center gap-2" role="listitem">
                    <div className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
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
