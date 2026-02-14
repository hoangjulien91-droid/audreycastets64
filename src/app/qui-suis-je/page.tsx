import Image from "next/image";
import { Link } from "next-view-transitions";
import audreyPortrait from "@/assets/images/audrey.webp";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import {
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  Heart,
  Sparkles,
  Quote,
  Shield,
  Lightbulb,
  Briefcase,
  Brain,
  Target,
  Users,
  CheckCircle,
} from "lucide-react";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Qui Suis-Je ? - Audrey Castets | Psychologue & Coach",
  description:
    "Découvrez mon parcours, mes diplômes et ma philosophie. Psychologue du travail et praticienne TCC, je vous accompagne avec bienveillance.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/qui-suis-je",
  },
  openGraph: {
    title: "Qui Suis-Je ? - Audrey Castets | Psychologue & Coach",
    description: "Découvrez mon parcours et mon approche.",
    url: "https://www.audrey-castets.fr/qui-suis-je",
    type: "profile",
  },
};

export default function QuiSuisJePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Qui suis-je" }]} />

      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <Sparkles className="h-4 w-4" />,
              text: "Mon Parcours",
            }}
            title={
              <>
                Psychologue, mais{" "}
                <span className="from-primary to-accent-violet bg-linear-to-r bg-clip-text text-transparent">
                  avant tout humaine
                </span>
              </>
            }
            subtitle="Mon parcours est guidé par une passion : comprendre l'humain pour mieux l'accompagner vers son épanouissement."
            breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Qui suis-je" }]}
            align="left"
          >
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm backdrop-blur-sm">
                <GraduationCap className="text-primary mr-2 inline h-4 w-4" />
                Diplômée d'État
              </div>
              <div className="border-accent-violet/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm backdrop-blur-sm">
                <Award className="text-accent-violet mr-2 inline h-4 w-4" />
                Spécialisée TCC & Travail
              </div>
            </div>
          </PageHero>

          {/* Section Histoire */}
          <section className="relative overflow-hidden bg-white py-20">
            {/* Background decorative elements */}
            <div className="from-bg-soft/50 pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-linear-to-l to-transparent"></div>

            <div className="relative z-10 container mx-auto px-4">
              <div className="grid items-center gap-16 md:grid-cols-2">
                <div className="group relative">
                  <div className="from-primary to-accent-violet absolute inset-0 rounded-3xl bg-linear-to-tr opacity-10 blur-xl transition-opacity duration-500 group-hover:opacity-20"></div>
                  <Image
                    src={audreyPortrait}
                    alt="Audrey Castets - Psychologue du Travail"
                    width={600}
                    height={750}
                    className="relative h-auto w-full transform rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Ma Philosophie Section */}
          <section
            className="bg-linear-to-br from-[#F9F7F4] via-[#FDFCFB] to-white py-16 md:py-24"
            aria-labelledby="philosophie-heading"
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                    Ma philosophie
                  </span>
                  <h2
                    id="philosophie-heading"
                    className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                  >
                    Une approche <span className="text-primary">humaine et personnalisée</span>
                  </h2>
                </div>

                <article className="rounded-3xl border border-[#D4C5D9]/30 bg-white p-8 shadow-xl md:p-12">
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Pour moi, chaque personne est unique et mérite un accompagnement sur mesure. Je
                    crois profondément en une approche bienveillante, sans jugement, où l'écoute
                    active et l'empathie sont au cœur de ma pratique.
                  </p>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Mon rôle n'est pas de vous dire quoi faire, mais de vous accompagner dans la
                    découverte de vos propres ressources intérieures. Ensemble, nous travaillons à
                    identifier les blocages, à comprendre les schémas répétitifs et à développer des
                    stratégies concrètes pour avancer.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Que vous soyez confronté à un burn-out, à des difficultés relationnelles au
                    travail, ou simplement en quête de sens dans votre carrière professionnelle, je
                    suis là pour vous guider vers un mieux-être durable.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Mes Spécialités Section */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="specialites-heading">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mb-12 text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Domaines d'expertise
                </span>
                <h2
                  id="specialites-heading"
                  className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                >
                  Mes <span className="text-primary">spécialités</span>
                </h2>
              </div>

              <div
                className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                role="list"
                aria-label="Liste des spécialités"
              >
                {/* Specialty Cards */}
                {[
                  {
                    icon: <Target className="h-8 w-8" />,
                    title: "Thérapies Cognitivo-Comportementales (TCC)",
                    description:
                      "Approche pragmatique pour identifier et modifier les pensées négatives et comportements inadaptés.",
                    color: "from-[#A594B3] to-[#8B7A98]",
                  },
                  {
                    icon: <Heart className="h-8 w-8" />,
                    title: "EFT (Emotional Freedom Techniques)",
                    description:
                      "Technique de libération émotionnelle pour réduire le stress et les traumatismes émotionnels.",
                    color: "from-[#C5B8D0] to-[#A594B3]",
                  },
                  {
                    icon: <Briefcase className="h-8 w-8" />,
                    title: "Psychologie du Travail",
                    description:
                      "Accompagnement des transitions professionnelles, reconversion, burn-out et équilibre vie pro/perso.",
                    color: "from-[#A594B3] to-[#8B7A98]",
                  },
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Interventions en entreprise",
                    description:
                      "Diagnostic RPS, tests SOSIE, ateliers de prévention du stress et cohésion d'équipe.",
                    color: "from-[#C5B8D0] to-[#A594B3]",
                  },
                  {
                    icon: <BookOpen className="h-8 w-8" />,
                    title: "Orientation professionnelle",
                    description:
                      "Bilan de compétences, aide à la décision et construction de projet professionnel.",
                    color: "from-[#A594B3] to-[#8B7A98]",
                  },
                  {
                    icon: <Award className="h-8 w-8" />,
                    title: "Développement personnel",
                    description:
                      "Confiance en soi, gestion des émotions, affirmation de soi et relations interpersonnelles.",
                    color: "from-[#C5B8D0] to-[#A594B3]",
                  },
                ].map((specialty, index) => (
                  <article
                    key={index}
                    className="group border-border rounded-2xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    role="listitem"
                  >
                    <div
                      className={`h-14 w-14 bg-linear-to-br ${specialty.color} mb-4 flex items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110`}
                      aria-hidden="true"
                    >
                      {specialty.icon}
                    </div>
                    <h3 className="text-foreground mb-2 text-lg font-bold">{specialty.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {specialty.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Déontologie Section */}
          <section
            className="bg-linear-to-br from-[#F9F7F4] via-[#FDFCFB] to-white py-16 md:py-24"
            aria-labelledby="deontologie-heading"
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                    Éthique professionnelle
                  </span>
                  <h2
                    id="deontologie-heading"
                    className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                  >
                    Un engagement <span className="text-primary">déontologique fort</span>
                  </h2>
                </div>

                <article className="border-primary rounded-3xl border-t-4 bg-white p-8 shadow-xl md:p-12">
                  <ul className="space-y-6" role="list" aria-label="Engagements déontologiques">
                    {[
                      {
                        icon: <CheckCircle className="text-primary h-6 w-6" />,
                        text: "Respect absolu de la confidentialité et du secret professionnel",
                      },
                      {
                        icon: <CheckCircle className="text-primary h-6 w-6" />,
                        text: "Neutralité et non-jugement dans l'accompagnement",
                      },
                      {
                        icon: <CheckCircle className="text-primary h-6 w-6" />,
                        text: "Formation continue pour une pratique toujours actualisée",
                      },
                      {
                        icon: <CheckCircle className="text-primary h-6 w-6" />,
                        text: "Respect du code de déontologie des psychologues",
                      },
                      {
                        icon: <CheckCircle className="text-primary h-6 w-6" />,
                        text: "Numéro ADELI et RPPS à jour pour exercice légal",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span aria-hidden="true">{item.icon}</span>
                        <p className="text-muted-foreground text-lg">{item.text}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="border-border mt-8 border-t pt-8">
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Numéro ADELI :</strong> 409307198 •{" "}
                      <strong className="text-foreground">RPPS :</strong> 10009709337
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section
            className="from-primary bg-linear-to-r via-[#A594B3] to-[#8B7A98] py-16 md:py-20"
            aria-labelledby="cta-heading"
          >
            <div className="container mx-auto px-6 text-center lg:px-8">
              <div className="mx-auto max-w-3xl">
                <h2
                  id="cta-heading"
                  className="font-display mb-6 text-3xl font-bold text-white md:text-4xl"
                >
                  Prêt(e) à commencer votre parcours ?
                </h2>
                <p className="mb-8 text-lg text-white/90">
                  Contactez-moi dès aujourd'hui pour un premier échange confidentiel et sans
                  engagement.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="text-primary inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    aria-label="Prendre contact avec Audrey Castets"
                  >
                    Prendre contact
                  </Link>
                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
                    aria-label="Découvrir les services proposés"
                  >
                    Découvrir mes services
                  </Link>
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
