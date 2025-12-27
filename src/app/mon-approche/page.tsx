import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';
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
  Zap
} from "lucide-react";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Mon Approche Thérapeutique - TCC, EFT & Psychologie du Travail',
  description: 'Une approche thérapeutique centrée sur la personne, alliant TCC, EFT et psychologie du travail pour des résultats concrets et durables. Découvrez ma méthodologie.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/mon-approche',
  },
  openGraph: {
    title: 'Mon Approche Thérapeutique - TCC, EFT & Psychologie du Travail',
    description: 'Une approche thérapeutique centrée sur la personne, alliant TCC, EFT et psychologie du travail.',
    url: 'https://www.audrey-castets.fr/mon-approche',
    type: 'article',
  },
};

export default function MonApprochePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Mon Approche' }
      ]} />
      <ServiceJsonLd 
        name="Thérapies Cognitivo-Comportementales (TCC)"
        description="Approche pragmatique et efficace pour identifier et modifier les pensées négatives et les comportements inadaptés"
      />
      <ServiceJsonLd 
        name="EFT (Emotional Freedom Techniques)"
        description="Technique de libération émotionnelle rapide et efficace pour réduire le stress et l'anxiété"
      />
      <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20" id="main-content">
        {/* Hero Section with Breadcrumb */}
        <section 
          className="relative overflow-hidden bg-gradient-to-br from-[#F3E8F0] via-[#E8DFF0]/30 to-background py-16 md:py-24"
          aria-labelledby="approche-heading"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
            <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#D4C5D9]/40 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#A594B3]/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Fil d'Ariane">
              <Breadcrumb 
                items={[
                  { label: "Accueil", href: "/" },
                  { label: "Mon Approche" }
                ]} 
              />
            </nav>

            {/* Hero Content */}
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-[#D4C5D9]/30 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">
                  Méthodologie & Valeurs
                </span>
              </div>

              <h1 id="approche-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A594B3] via-[#8B7A98] to-[#C5B8D0]">Approche</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Une approche thérapeutique centrée sur la personne, alliant méthodes éprouvées et bienveillance pour des résultats concrets et durables.
              </p>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-3 justify-center" role="list" aria-label="Points clés">
                {[
                  { icon: <Heart className="w-4 h-4" />, label: "Bienveillance" },
                  { icon: <Brain className="w-4 h-4" />, label: "TCC & EFT" },
                  { icon: <Target className="w-4 h-4" />, label: "Orientée solutions" },
                  { icon: <Users className="w-4 h-4" />, label: "Personnalisée" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#D4C5D9]/30 shadow-sm"
                    role="listitem"
                  >
                    <span className="text-primary" aria-hidden="true">{item.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Principes Fondamentaux Section */}
        <section 
          className="py-16 md:py-24 bg-white"
          aria-labelledby="principes-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                Mes principes
              </span>
              <h2 id="principes-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Les fondements de <span className="text-primary">mon accompagnement</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quatre piliers essentiels qui guident chaque séance et chaque accompagnement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" role="list" aria-label="Principes fondamentaux">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Écoute active et bienveillance",
                  description: "Un espace sécurisé, sans jugement, où vous pouvez vous exprimer librement. Je suis là pour vous écouter, vous comprendre et vous accompagner avec empathie.",
                  color: "from-[#A594B3] to-[#8B7A98]"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Approche orientée solutions",
                  description: "Nous travaillons ensemble sur des objectifs concrets et réalisables. Chaque séance vise à vous donner des outils pratiques pour avancer.",
                  color: "from-[#C5B8D0] to-[#A594B3]"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Accompagnement personnalisé",
                  description: "Chaque personne est unique. J'adapte mes méthodes à votre personnalité, votre contexte et vos besoins spécifiques pour un accompagnement sur mesure.",
                  color: "from-[#A594B3] to-[#8B7A98]"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Confidentialité absolue",
                  description: "Le secret professionnel est garanti. Tout ce qui se dit en séance reste strictement confidentiel, dans le respect du code de déontologie.",
                  color: "from-[#C5B8D0] to-[#A594B3]"
                }
              ].map((principle, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-[#D4C5D9]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Méthodologies Section */}
        <section 
          className="py-16 md:py-24 bg-gradient-to-br from-[#F9F7F4] via-[#FDFCFB] to-white"
          aria-labelledby="methodologies-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                Mes méthodes
              </span>
              <h2 id="methodologies-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Des approches <span className="text-primary">scientifiquement validées</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                J'utilise des méthodes reconnues pour leur efficacité, adaptées à vos besoins spécifiques.
              </p>
            </div>

            {/* TCC Section */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-primary">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl flex items-center justify-center shadow-lg">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Thérapies Cognitivo-Comportementales (TCC)
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      Approche pragmatique et efficace sur le court/moyen terme
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Les TCC sont des thérapies brèves, structurées et orientées vers l'action. Elles visent à identifier et modifier les pensées négatives et les comportements inadaptés qui maintiennent vos difficultés.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Identifier les pensées automatiques négatives",
                    "Modifier les schémas de pensée dysfonctionnels",
                    "Développer de nouveaux comportements",
                    "Acquérir des outils concrets et durables"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EFT Section */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-[#8B7A98]">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#8B7A98] to-[#A594B3] rounded-2xl flex items-center justify-center shadow-lg">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      EFT (Emotional Freedom Techniques)
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      Technique de libération émotionnelle rapide et efficace
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  L'EFT est une méthode psycho-corporelle qui combine stimulation de points d'acupression et travail cognitif. Elle permet de réduire rapidement l'intensité des émotions négatives et du stress.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Réduction rapide du stress et de l'anxiété",
                    "Traitement des traumatismes émotionnels",
                    "Libération des blocages émotionnels",
                    "Technique simple à pratiquer en autonomie"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Psychologie du Travail Section */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-primary">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl flex items-center justify-center shadow-lg">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Psychologie du Travail
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      Expertise spécialisée dans les problématiques professionnelles
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  La psychologie du travail se concentre sur la relation entre l'individu et son environnement professionnel. Elle vise à améliorer le bien-être au travail et à prévenir les risques psychosociaux.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Prévention et accompagnement du burn-out",
                    "Gestion du stress et des conflits professionnels",
                    "Accompagnement des transitions de carrière",
                    "Amélioration de l'équilibre vie pro/perso"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processus d'Accompagnement Section */}
        <section 
          className="py-16 md:py-24 bg-white"
          aria-labelledby="processus-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                Le déroulement
              </span>
              <h2 id="processus-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comment se déroule <span className="text-primary">un accompagnement ?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un processus structuré en plusieurs étapes pour un accompagnement efficace et personnalisé.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6" role="list" aria-label="Étapes du processus">
              {[
                {
                  number: "01",
                  title: "Premier contact",
                  description: "Prise de contact par téléphone ou email. Je réponds à vos questions et nous fixons un premier rendez-vous si mon accompagnement correspond à vos besoins.",
                  icon: <Clock className="w-6 h-6" />,
                  color: "primary"
                },
                {
                  number: "02",
                  title: "Premier entretien (gratuit - 15 min)",
                  description: "Nous faisons connaissance et vous me présentez votre situation. J'évalue vos besoins et je vous propose un plan d'accompagnement adapté. Aucun engagement à ce stade.",
                  icon: <Users className="w-6 h-6" />,
                  color: "secondary"
                },
                {
                  number: "03",
                  title: "Séances de travail",
                  description: "Séances individuelles d'1h, en cabinet ou en visio. Nous travaillons ensemble sur vos objectifs avec les méthodes adaptées (TCC, EFT, etc.). Rythme flexible selon vos besoins.",
                  icon: <Brain className="w-6 h-6" />,
                  color: "primary"
                },
                {
                  number: "04",
                  title: "Suivi et autonomie",
                  description: "Au fil des séances, vous gagnez en autonomie avec des outils concrets. Nous évaluons régulièrement vos progrès et ajustons l'accompagnement si nécessaire.",
                  icon: <TrendingUp className="w-6 h-6" />,
                  color: "secondary"
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 md:p-8 border border-[#D4C5D9]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${
                        step.color === 'primary' 
                          ? 'from-[#A594B3] to-[#8B7A98]' 
                          : 'from-[#C5B8D0] to-[#A594B3]'
                      } rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-primary">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui me différencie Section */}
        <section 
          className="py-16 md:py-24 bg-gradient-to-br from-[#F9F7F4] via-[#FDFCFB] to-white"
          aria-labelledby="difference-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Ma différence
                </span>
                <h2 id="difference-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Pourquoi choisir <span className="text-primary">mon accompagnement ?</span>
                </h2>
              </div>

              <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#D4C5D9]/30">
                <div className="space-y-6" role="list">
                  {[
                    {
                      icon: <Target className="w-6 h-6 text-primary" />,
                      title: "Double expertise",
                      text: "Psychologue spécialisée en psychologie du travail avec une formation poussée en TCC et EFT. Une combinaison rare qui permet d'aborder vos problématiques sous plusieurs angles."
                    },
                    {
                      icon: <Heart className="w-6 h-6 text-primary" />,
                      title: "Approche humaine avant tout",
                      text: "Au-delà des techniques et des méthodes, je mets l'humain au centre. Chaque personne est unique et mérite un accompagnement bienveillant et respectueux."
                    },
                    {
                      icon: <Lightbulb className="w-6 h-6 text-primary" />,
                      title: "Résultats concrets et durables",
                      text: "Mon objectif n'est pas de créer une dépendance, mais de vous donner les outils pour devenir autonome. Des techniques que vous pourrez utiliser toute votre vie."
                    },
                    {
                      icon: <Clock className="w-6 h-6 text-primary" />,
                      title: "Flexibilité et disponibilité",
                      text: "Consultations en cabinet ou en visio, horaires flexibles adaptés aux contraintes professionnelles. Réponse sous 24h et premier entretien offert."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F3E8F0] rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
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
          className="py-16 md:py-20 bg-gradient-to-r from-primary via-[#A594B3] to-[#8B7A98]"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 id="cta-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt(e) à commencer votre accompagnement ?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Prenons un premier rendez-vous pour échanger sur vos besoins. C'est gratuit, sans engagement et entièrement confidentiel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  aria-label="Réserver un premier entretien gratuit"
                >
                  Premier entretien gratuit
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/qui-suis-je"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border-2 border-white hover:bg-white/30 transition-all duration-300"
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