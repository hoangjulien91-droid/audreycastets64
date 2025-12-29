import { Link } from 'next-view-transitions';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';
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
  CheckCircle
} from 'lucide-react';

export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Qui Suis-Je ? - Audrey Castets | Psychologue & Coach',
  description: 'Découvrez mon parcours, mes diplômes et ma philosophie. Psychologue du travail et praticienne TCC, je vous accompagne avec bienveillance.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/qui-suis-je',
  },
  openGraph: {
    title: 'Qui Suis-Je ? - Audrey Castets | Psychologue & Coach',
    description: 'Découvrez mon parcours et mon approche.',
    url: 'https://www.audrey-castets.fr/qui-suis-je',
    type: 'profile',
  },
};

export default function QuiSuisJePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Qui suis-je' }
      ]} />
      
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <Sparkles className="w-4 h-4" />,
              text: "Mon Parcours"
            }}
            title={
              <>
                Psychologue, mais <span className="bg-linear-to-r from-primary to-accent-violet bg-clip-text text-transparent">avant tout humaine</span>
              </>
            }
            subtitle="Mon parcours est guidé par une passion : comprendre l'humain pour mieux l'accompagner vers son épanouissement."
            breadcrumbs={[
              { label: "Accueil", href: "/" },
              { label: "Qui suis-je" }
            ]}
            align="left"
          >
             <div className="flex flex-wrap gap-3 mt-8">
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-border-soft/30 text-sm text-foreground">
                <GraduationCap className="w-4 h-4 inline mr-2 text-primary" />
                Diplômée d'État
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-accent-violet/30 text-sm text-foreground">
                <Award className="w-4 h-4 inline mr-2 text-accent-violet" />
                Spécialisée TCC & Travail
              </div>
            </div>
          </PageHero>

          {/* Section Histoire */}
          <section className="py-20 bg-white relative overflow-hidden">
             {/* Background decorative elements */}
             <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-bg-soft/50 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-tr from-primary to-accent-violet rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
                  <img 
                    src="/images/audrey-portrait-pro.jpg" 
                    alt="Audrey Castets" 
                    className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.01]"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Ma Philosophie Section */}
        <section 
          className="py-16 md:py-24 bg-linear-to-br from-[#F9F7F4] via-[#FDFCFB] to-white"
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
                  <div className={`w-14 h-14 bg-linear-to-br ${specialty.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
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
          className="py-16 md:py-24 bg-linear-to-br from-[#F9F7F4] via-[#FDFCFB] to-white"
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
          className="py-16 md:py-20 bg-linear-to-r from-primary via-[#A594B3] to-[#8B7A98]"
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
