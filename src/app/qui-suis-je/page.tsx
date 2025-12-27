import Link from "next/link";
import Header from "@/components/sections/header";
import { PageHero } from "@/components/ui/page-hero";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { BreadcrumbJsonLd, PersonJsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';
import { 
  Award, 
  Heart, 
  Target, 
  BookOpen, 
  Briefcase, 
  Globe, 
  GraduationCap,
  Users,
  CheckCircle,
  Sparkles,
  Star
} from "lucide-react";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Qui suis-je ? Audrey Castets - Psychologue du Travail',
  description: 'Découvrez mon parcours, mes formations et mon approche en psychologie du travail. Plus de 5 ans d\'expérience en TCC, EFT et accompagnement professionnel.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/qui-suis-je',
  },
  openGraph: {
    title: 'Qui suis-je ? Audrey Castets - Psychologue du Travail',
    description: 'Découvrez mon parcours, mes formations et mon approche en psychologie du travail.',
    url: 'https://www.audrey-castets.fr/qui-suis-je',
    type: 'profile',
    images: [{
      url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c38f5070-6b82-4e11-be55-a586c48aeec5-psychologue-portfolio-nextjs-supaba-vercel-app/assets/images/next-885887-next-992762-audrey-castets-BNy4GS-r-1.jpg',
      width: 500,
      height: 500,
      alt: 'Audrey Castets - Psychologue du Travail'
    }]
  },
};

export default function QuiSuisJePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Qui suis-je' }
      ]} />
      <PersonJsonLd />
      <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20" id="main-content">
        {/* Hero Section with Breadcrumb */}
        {/* Hero Section with Breadcrumb */}
        <PageHero
          title={null}
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Qui suis-je" }
          ]}
          align="left"
        >
          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-[#D4C5D9]/30 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">
                  Mon parcours & expertise
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Audrey <span className="text-primary">Castets</span>
              </h1>

              <div className="flex items-center gap-2.5 mb-6">
                <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" aria-hidden="true" />
                <p className="text-xl md:text-2xl text-primary font-semibold font-display">
                  Psychologue du Travail
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Passionnée par l'accompagnement humain, j'ai construit mon expertise autour de la <strong className="text-foreground">psychologie du travail</strong>, des <strong className="text-foreground">thérapies cognitivo-comportementales (TCC)</strong> et de <strong className="text-foreground">l'EFT</strong>. Mon objectif : vous aider à retrouver un équilibre entre vie professionnelle et bien-être personnel.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4" role="list" aria-label="Statistiques clés">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-[#D4C5D9]/30 shadow-md" role="listitem">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#A594B3] to-[#8B7A98] rounded-full mb-2 mx-auto" aria-hidden="true">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-primary text-center" aria-label="Plus de 5 ans">+5 ans</p>
                  <p className="text-xs text-muted-foreground text-center">Expérience</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-[#D4C5D9]/30 shadow-md" role="listitem">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C5B8D0] to-[#A594B3] rounded-full mb-2 mx-auto" aria-hidden="true">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-primary text-center" aria-label="Plus de 200">200+</p>
                  <p className="text-xs text-muted-foreground text-center">Accompagnements</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-[#D4C5D9]/30 shadow-md" role="listitem">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#A594B3] to-[#8B7A98] rounded-full mb-2 mx-auto" aria-hidden="true">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-primary text-center" aria-label="95 pourcent">95%</p>
                  <p className="text-xs text-muted-foreground text-center">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-[#C5B8D0] via-[#A594B3] to-[#8B7A98] opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-700" aria-hidden="true"></div>
                <div className="relative">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c38f5070-6b82-4e11-be55-a586c48aeec5-psychologue-portfolio-nextjs-supaba-vercel-app/assets/images/next-885887-next-992762-audrey-castets-BNy4GS-r-1.jpg"
                    alt="Audrey Castets - Psychologue du Travail"
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 400px"
                    className="w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] object-cover rounded-full shadow-2xl ring-8 ring-white/60 group-hover:ring-[#D4C5D9]/40 transition-all duration-500"
                    priority
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </PageHero>

        {/* Mon Parcours Section */}
        <section 
          className="py-16 md:py-24 bg-white"
          aria-labelledby="parcours-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Mon histoire
                </span>
                <h2 id="parcours-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Un parcours au service de <span className="text-primary">votre bien-être</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  De mes études en psychologie à mon expertise internationale, découvrez le chemin qui m'a menée vers l'accompagnement professionnel et personnel.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-8" role="list" aria-label="Parcours professionnel">
                {/* Formation */}
                <article className="flex gap-6 group" role="listitem">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">Formation académique</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Master 2 en Psychologie du Travail et des Organisations, complété par des formations spécialisées en TCC (Thérapies Cognitivo-Comportementales) et EFT (Emotional Freedom Techniques).
                    </p>
                  </div>
                </article>

                {/* Expérience */}
                <article className="flex gap-6 group" role="listitem">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C5B8D0] to-[#A594B3] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">+5 années d'expérience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Plus de 5 ans d'accompagnement auprès de particuliers et d'entreprises, avec une expertise reconnue dans la gestion du stress, la prévention du burn-out et l'optimisation du bien-être au travail.
                    </p>
                  </div>
                </article>

                {/* International */}
                <article className="flex gap-6 group" role="listitem">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">Expérience internationale</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Collaborations avec des organisations internationales, enrichissant ma pratique par une approche multiculturelle et des méthodologies variées d'accompagnement.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Ma Philosophie Section */}
        <section 
          className="py-16 md:py-24 bg-gradient-to-br from-[#F9F7F4] via-[#FDFCFB] to-white"
          aria-labelledby="philosophie-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Ma philosophie
                </span>
                <h2 id="philosophie-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Une approche <span className="text-primary">humaine et personnalisée</span>
                </h2>
              </div>

              <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#D4C5D9]/30">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Pour moi, chaque personne est unique et mérite un accompagnement sur mesure. Je crois profondément en une approche bienveillante, sans jugement, où l'écoute active et l'empathie sont au cœur de ma pratique.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Mon rôle n'est pas de vous dire quoi faire, mais de vous accompagner dans la découverte de vos propres ressources intérieures. Ensemble, nous travaillons à identifier les blocages, à comprendre les schémas répétitifs et à développer des stratégies concrètes pour avancer.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Que vous soyez confronté à un burn-out, à des difficultés relationnelles au travail, ou simplement en quête de sens dans votre carrière professionnelle, je suis là pour vous guider vers un mieux-être durable.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Mes Spécialités Section */}
        <section 
          className="py-16 md:py-24 bg-white"
          aria-labelledby="specialites-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                Domaines d'expertise
              </span>
              <h2 id="specialites-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mes <span className="text-primary">spécialités</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list" aria-label="Liste des spécialités">
              {/* Specialty Cards */}
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Thérapies Cognitivo-Comportementales (TCC)",
                  description: "Approche pragmatique pour identifier et modifier les pensées négatives et comportements inadaptés.",
                  color: "from-[#A594B3] to-[#8B7A98]"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "EFT (Emotional Freedom Techniques)",
                  description: "Technique de libération émotionnelle pour réduire le stress et les traumatismes émotionnels.",
                  color: "from-[#C5B8D0] to-[#A594B3]"
                },
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: "Psychologie du Travail",
                  description: "Accompagnement des transitions professionnelles, reconversion, burn-out et équilibre vie pro/perso.",
                  color: "from-[#A594B3] to-[#8B7A98]"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Interventions en entreprise",
                  description: "Diagnostic RPS, tests SOSIE, ateliers de prévention du stress et cohésion d'équipe.",
                  color: "from-[#C5B8D0] to-[#A594B3]"
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Orientation professionnelle",
                  description: "Bilan de compétences, aide à la décision et construction de projet professionnel.",
                  color: "from-[#A594B3] to-[#8B7A98]"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Développement personnel",
                  description: "Confiance en soi, gestion des émotions, affirmation de soi et relations interpersonnelles.",
                  color: "from-[#C5B8D0] to-[#A594B3]"
                }
              ].map((specialty, index) => (
                <article
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  role="listitem"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                    {specialty.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {specialty.title}
                  </h3>
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
          className="py-16 md:py-24 bg-gradient-to-br from-[#F9F7F4] via-[#FDFCFB] to-white"
          aria-labelledby="deontologie-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Éthique professionnelle
                </span>
                <h2 id="deontologie-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Un engagement <span className="text-primary">déontologique fort</span>
                </h2>
              </div>

              <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-primary">
                <ul className="space-y-6" role="list" aria-label="Engagements déontologiques">
                  {[
                    {
                      icon: <CheckCircle className="w-6 h-6 text-primary" />,
                      text: "Respect absolu de la confidentialité et du secret professionnel"
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6 text-primary" />,
                      text: "Neutralité et non-jugement dans l'accompagnement"
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6 text-primary" />,
                      text: "Formation continue pour une pratique toujours actualisée"
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6 text-primary" />,
                      text: "Respect du code de déontologie des psychologues"
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6 text-primary" />,
                      text: "Numéro ADELI et RPPS à jour pour exercice légal"
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span aria-hidden="true">{item.icon}</span>
                      <p className="text-muted-foreground text-lg">{item.text}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Numéro ADELI :</strong> 409307198 • <strong className="text-foreground">RPPS :</strong> 10009709337
                  </p>
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
                Prêt(e) à commencer votre parcours ?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contactez-moi dès aujourd'hui pour un premier échange confidentiel et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  aria-label="Prendre contact avec Audrey Castets"
                >
                  Prendre contact
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border-2 border-white hover:bg-white/30 transition-all duration-300"
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