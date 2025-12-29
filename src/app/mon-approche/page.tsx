import { Link } from "next-view-transitions";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import {
  Heart,
  Target,
  Users,
  Brain,
  Lightbulb,
  Shield,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  Zap,
} from "lucide-react";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "Mon Approche Thérapeutique - TCC, EFT & Psychologie du Travail",
  description:
    "Une approche thérapeutique centrée sur la personne, alliant TCC, EFT et psychologie du travail pour des résultats concrets et durables. Découvrez ma méthodologie.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/mon-approche",
  },
  openGraph: {
    title: "Mon Approche Thérapeutique - TCC, EFT & Psychologie du Travail",
    description:
      "Une approche thérapeutique centrée sur la personne, alliant TCC, EFT et psychologie du travail.",
    url: "https://www.audrey-castets.fr/mon-approche",
    type: "article",
  },
};

export default function MonApprochePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Mon Approche" }]} />
      <ServiceJsonLd
        name="Thérapies Cognitivo-Comportementales (TCC)"
        description="Approche pragmatique et efficace pour identifier et modifier les pensées négatives et les comportements inadaptés"
      />
      <ServiceJsonLd
        name="EFT (Emotional Freedom Techniques)"
        description="Technique de libération émotionnelle rapide et efficace pour réduire le stress et l'anxiété"
      />
      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          {/* Hero Section with Breadcrumb */}
          <section
            className="from-bg-soft via-bg-subtle/30 to-background relative overflow-hidden bg-linear-to-br py-16 md:py-24"
            aria-labelledby="approche-heading"
          >
            {/* Background decorative elements */}
            <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
              <div className="bg-border-soft/40 animate-blob absolute top-20 right-20 h-[500px] w-[500px] rounded-full blur-3xl"></div>
              <div
                className="bg-accent-violet/30 animate-blob absolute bottom-20 left-20 h-96 w-96 rounded-full blur-3xl"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-8">
              {/* Breadcrumb */}
              <nav className="mb-8" aria-label="Fil d'Ariane">
                <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mon Approche" }]} />
              </nav>

              {/* Hero Content */}
              <div className="mx-auto max-w-5xl text-center">
                <div className="border-border-soft/30 mb-6 inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md">
                  <Sparkles className="text-primary h-4 w-4 animate-pulse" aria-hidden="true" />
                  <span className="text-primary text-sm font-medium">Méthodologie & Valeurs</span>
                </div>

                <h1
                  id="approche-heading"
                  className="font-display text-foreground mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
                >
                  Mon{" "}
                  <span className="from-accent-violet via-accent-violet-dark to-accent-violet-light bg-linear-to-r bg-clip-text text-transparent">
                    Approche
                  </span>
                </h1>

                <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
                  Une approche thérapeutique centrée sur la personne, alliant méthodes éprouvées et
                  bienveillance pour des résultats concrets et durables.
                </p>

                {/* Key Features Pills */}
                <div
                  className="flex flex-wrap justify-center gap-3"
                  role="list"
                  aria-label="Points clés"
                >
                  {[
                    { icon: <Heart className="h-4 w-4" />, label: "Bienveillance" },
                    { icon: <Brain className="h-4 w-4" />, label: "TCC & EFT" },
                    { icon: <Target className="h-4 w-4" />, label: "Orientée solutions" },
                    { icon: <Users className="h-4 w-4" />, label: "Personnalisée" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border-border-soft/30 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm"
                      role="listitem"
                    >
                      <span className="text-primary" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="text-foreground text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Principes Fondamentaux Section */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="principes-heading">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mb-12 text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Mes principes
                </span>
                <h2
                  id="principes-heading"
                  className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                >
                  Les fondements de <span className="text-primary">mon accompagnement</span>
                </h2>
                <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                  Quatre piliers essentiels qui guident chaque séance et chaque accompagnement.
                </p>
              </div>

              <div
                className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
                role="list"
                aria-label="Principes fondamentaux"
              >
                {[
                  {
                    icon: <Heart className="h-8 w-8" />,
                    title: "Écoute active et bienveillance",
                    description:
                      "Un espace sécurisé, sans jugement, où vous pouvez vous exprimer librement. Je suis là pour vous écouter, vous comprendre et vous accompagner avec empathie.",
                    color: "from-primary to-accent-violet",
                  },
                  {
                    icon: <Target className="h-8 w-8" />,
                    title: "Approche orientée solutions",
                    description:
                      "Nous travaillons ensemble sur des objectifs concrets et réalisables. Chaque séance vise à vous donner des outils pratiques pour avancer.",
                    color: "from-accent-violet-light to-accent-violet",
                  },
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Accompagnement personnalisé",
                    description:
                      "Chaque personne est unique. J'adapte mes méthodes à votre personnalité, votre contexte et vos besoins spécifiques pour un accompagnement sur mesure.",
                    color: "from-primary to-accent-violet",
                  },
                  {
                    icon: <Shield className="h-8 w-8" />,
                    title: "Confidentialité absolue",
                    description:
                      "Le secret professionnel est garanti. Tout ce qui se dit en séance reste strictement confidentiel, dans le respect du code de déontologie.",
                    color: "from-accent-violet-light to-accent-violet",
                  },
                ].map((principle, index) => (
                  <div
                    key={index}
                    className="group border-border-soft/30 rounded-2xl border bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`h-16 w-16 bg-linear-to-br ${principle.color} mb-6 flex items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110`}
                    >
                      {principle.icon}
                    </div>
                    <h3 className="text-foreground mb-3 text-xl font-bold">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Méthodologies Section */}
          <section
            className="from-bg-soft via-bg-subtle bg-linear-to-br to-white py-16 md:py-24"
            aria-labelledby="methodologies-heading"
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mb-12 text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Mes méthodes
                </span>
                <h2
                  id="methodologies-heading"
                  className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                >
                  Des approches <span className="text-primary">scientifiquement validées</span>
                </h2>
                <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                  J'utilise des méthodes reconnues pour leur efficacité, adaptées à vos besoins
                  spécifiques.
                </p>
              </div>

              {/* TCC Section */}
              <div className="mx-auto mb-12 max-w-5xl">
                <div className="border-primary rounded-3xl border-t-4 bg-white p-8 shadow-xl md:p-12">
                  <div className="mb-6 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="from-primary to-accent-violet flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg">
                        <Brain className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-foreground mb-2 text-2xl font-bold">
                        Thérapies Cognitivo-Comportementales (TCC)
                      </h3>
                      <p className="text-primary mb-4 font-semibold">
                        Approche pragmatique et efficace sur le court/moyen terme
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Les TCC sont des thérapies brèves, structurées et orientées vers l'action. Elles
                    visent à identifier et modifier les pensées négatives et les comportements
                    inadaptés qui maintiennent vos difficultés.
                  </p>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      "Identifier les pensées automatiques négatives",
                      "Modifier les schémas de pensée dysfonctionnels",
                      "Développer de nouveaux comportements",
                      "Acquérir des outils concrets et durables",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* EFT Section */}
              <div className="mx-auto mb-12 max-w-5xl">
                <div className="border-accent-violet rounded-3xl border-t-4 bg-white p-8 shadow-xl md:p-12">
                  <div className="mb-6 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="from-accent-violet to-primary flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg">
                        <Zap className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-foreground mb-2 text-2xl font-bold">
                        EFT (Emotional Freedom Techniques)
                      </h3>
                      <p className="text-primary mb-4 font-semibold">
                        Technique de libération émotionnelle rapide et efficace
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    L'EFT est une méthode psycho-corporelle qui combine stimulation de points
                    d'acupression et travail cognitif. Elle permet de réduire rapidement l'intensité
                    des émotions négatives et du stress.
                  </p>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      "Réduction rapide du stress et de l'anxiété",
                      "Traitement des traumatismes émotionnels",
                      "Libération des blocages émotionnels",
                      "Technique simple à pratiquer en autonomie",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Psychologie du Travail Section */}
              <div className="mx-auto max-w-5xl">
                <div className="border-primary rounded-3xl border-t-4 bg-white p-8 shadow-xl md:p-12">
                  <div className="mb-6 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="from-primary to-accent-violet flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg">
                        <Lightbulb className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-foreground mb-2 text-2xl font-bold">
                        Psychologie du Travail
                      </h3>
                      <p className="text-primary mb-4 font-semibold">
                        Expertise spécialisée dans les problématiques professionnelles
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    La psychologie du travail se concentre sur la relation entre l'individu et son
                    environnement professionnel. Elle vise à améliorer le bien-être au travail et à
                    prévenir les risques psychosociaux.
                  </p>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      "Prévention et accompagnement du burn-out",
                      "Gestion du stress et des conflits professionnels",
                      "Accompagnement des transitions de carrière",
                      "Amélioration de l'équilibre vie pro/perso",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Processus d'Accompagnement Section */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="processus-heading">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mb-12 text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Le déroulement
                </span>
                <h2
                  id="processus-heading"
                  className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                >
                  Comment se déroule <span className="text-primary">un accompagnement ?</span>
                </h2>
                <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                  Un processus structuré en plusieurs étapes pour un accompagnement efficace et
                  personnalisé.
                </p>
              </div>

              <div
                className="mx-auto max-w-4xl space-y-6"
                role="list"
                aria-label="Étapes du processus"
              >
                {[
                  {
                    number: "01",
                    title: "Premier contact",
                    description:
                      "Prise de contact par téléphone ou email. Je réponds à vos questions et nous fixons un premier rendez-vous si mon accompagnement correspond à vos besoins.",
                    icon: <Clock className="h-6 w-6" />,
                    color: "primary",
                  },
                  {
                    number: "02",
                    title: "Premier entretien (gratuit - 15 min)",
                    description:
                      "Nous faisons connaissance et vous me présentez votre situation. J'évalue vos besoins et je vous propose un plan d'accompagnement adapté. Aucun engagement à ce stade.",
                    icon: <Users className="h-6 w-6" />,
                    color: "secondary",
                  },
                  {
                    number: "03",
                    title: "Séances de travail",
                    description:
                      "Séances individuelles d'1h, en cabinet ou en visio. Nous travaillons ensemble sur vos objectifs avec les méthodes adaptées (TCC, EFT, etc.). Rythme flexible selon vos besoins.",
                    icon: <Brain className="h-6 w-6" />,
                    color: "primary",
                  },
                  {
                    number: "04",
                    title: "Suivi et autonomie",
                    description:
                      "Au fil des séances, vous gagnez en autonomie avec des outils concrets. Nous évaluons régulièrement vos progrès et ajustons l'accompagnement si nécessaire.",
                    icon: <TrendingUp className="h-6 w-6" />,
                    color: "secondary",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-[#D4C5D9]/30 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`h-16 w-16 bg-linear-to-br ${
                            step.color === "primary"
                              ? "from-[#A594B3] to-[#8B7A98]"
                              : "from-[#C5B8D0] to-[#A594B3]"
                          } flex items-center justify-center rounded-2xl text-white shadow-lg`}
                        >
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="text-primary text-sm font-bold">{step.number}</span>
                          <h3 className="text-foreground text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ce qui me différencie Section */}
          <section
            className="bg-linear-to-br from-[#F9F7F4] via-[#FDFCFB] to-white py-16 md:py-24"
            aria-labelledby="difference-heading"
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                    Ma différence
                  </span>
                  <h2
                    id="difference-heading"
                    className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                  >
                    Pourquoi choisir <span className="text-primary">mon accompagnement ?</span>
                  </h2>
                </div>

                <article className="rounded-3xl border border-[#D4C5D9]/30 bg-white p-8 shadow-xl md:p-12">
                  <div className="space-y-6" role="list">
                    {[
                      {
                        icon: <Target className="text-primary h-6 w-6" />,
                        title: "Double expertise",
                        text: "Psychologue spécialisée en psychologie du travail avec une formation poussée en TCC et EFT. Une combinaison rare qui permet d'aborder vos problématiques sous plusieurs angles.",
                      },
                      {
                        icon: <Heart className="text-primary h-6 w-6" />,
                        title: "Approche humaine avant tout",
                        text: "Au-delà des techniques et des méthodes, je mets l'humain au centre. Chaque personne est unique et mérite un accompagnement bienveillant et respectueux.",
                      },
                      {
                        icon: <Lightbulb className="text-primary h-6 w-6" />,
                        title: "Résultats concrets et durables",
                        text: "Mon objectif n'est pas de créer une dépendance, mais de vous donner les outils pour devenir autonome. Des techniques que vous pourrez utiliser toute votre vie.",
                      },
                      {
                        icon: <Clock className="text-primary h-6 w-6" />,
                        title: "Flexibilité et disponibilité",
                        text: "Consultations en cabinet ou en visio, horaires flexibles adaptés aux contraintes professionnelles. Réponse sous 24h et premier entretien offert.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#F3E8F0]">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-foreground mb-2 text-lg font-bold">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
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
                  Prêt(e) à commencer votre accompagnement ?
                </h2>
                <p className="mb-8 text-lg text-white/90">
                  Prenons un premier rendez-vous pour échanger sur vos besoins. C'est gratuit, sans
                  engagement et entièrement confidentiel.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="text-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    aria-label="Réserver un premier entretien gratuit"
                  >
                    Premier entretien gratuit
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/qui-suis-je"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
                    aria-label="En savoir plus sur mon parcours"
                  >
                    En savoir plus sur moi
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
