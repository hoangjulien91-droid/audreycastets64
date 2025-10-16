import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { 
  Heart, 
  Users, 
  CircleCheck,
  ArrowRight,
  Sparkles,
  Phone,
  Clock,
  Shield,
  Target,
  Briefcase,
  Brain,
  Zap,
  TrendingUp,
  MessageCircle,
  Award,
  UserCheck,
  ClipboardList,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section with Breadcrumb */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#FDF8F6] to-[#FFE3EC] py-16 md:py-24">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: "Accueil", href: "/" },
                  { label: "Mes Services" }
                ]} 
              />
            </div>

            {/* Hero Content */}
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-primary/20 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Mes Services
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Des accompagnements <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary-purple">personnalisés</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Des accompagnements personnalisés pour particuliers et professionnels, alliant expertise clinique et approche bienveillante pour des résultats durables.
              </p>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { icon: <Heart className="w-4 h-4" />, label: "TCC & EFT" },
                  { icon: <Users className="w-4 h-4" />, label: "Psychologie du Travail" },
                  { icon: <Target className="w-4 h-4" />, label: "Accompagnement RH" },
                  { icon: <Shield className="w-4 h-4" />, label: "Confidentiel" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm"
                  >
                    <span className="text-primary">{item.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/80 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                Deux approches complémentaires
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choisissez l'accompagnement <span className="text-primary">qui vous correspond</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {/* Card 1: Pour les Particuliers */}
              <div className="group relative">
                <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-1"></div>
                <div className="relative h-full bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
                  <div className="h-2 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                  <div className="p-8 md:p-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl blur-xl opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                      Pour les Particuliers
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Thérapie Cognitive et Comportementale (TCC) et EFT (Emotional Freedom Techniques) pour vous accompagner dans vos difficultés personnelles et développer des stratégies d'adaptation efficaces.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Gestion du stress et de l'anxiété
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          EFT - Techniques de libération émotionnelle
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Burn-out et épuisement professionnel
                        </span>
                      </li>
                    </ul>
                    <div className="inline-flex items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                      Voir les détails
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Pour les Professionnels */}
              <div className="group relative">
                <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-1"></div>
                <div className="relative h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-500/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <div className="p-8 md:p-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-purple-600 transition-colors">
                      Pour les Professionnels
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Expertise en psychologie du travail et ressources humaines pour accompagner les organisations : prévention des RPS, recrutement, tests de personnalité et amélioration du bien-être au travail.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Diagnostic des risques psychosociaux
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Recrutement et tests SOSIE
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Ateliers de prévention du stress
                        </span>
                      </li>
                    </ul>
                    <div className="inline-flex items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                      Voir les détails
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Détails Services Particuliers */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#FDF8F6] to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Accompagnement individuel
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Services pour les <span className="text-primary">Particuliers</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "Thérapies Cognitivo-Comportementales (TCC)",
                    description: "Approche structurée pour identifier et modifier les pensées et comportements inadaptés. Efficace pour l'anxiété, la dépression, les phobies.",
                    color: "primary"
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "EFT (Emotional Freedom Techniques)",
                    description: "Technique psycho-corporelle combinant stimulation de points d'acupression et travail cognitif pour libérer les émotions négatives rapidement.",
                    color: "secondary-purple"
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Burn-out et épuisement professionnel",
                    description: "Accompagnement spécialisé pour prévenir et traiter l'épuisement professionnel. Stratégies de récupération et de prévention de la rechute.",
                    color: "primary"
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Gestion du stress et de l'anxiété",
                    description: "Techniques concrètes pour gérer le stress quotidien, l'anxiété généralisée et les attaques de panique. Outils pratiques et durables.",
                    color: "secondary-purple"
                  },
                  {
                    icon: <Lightbulb className="w-6 h-6" />,
                    title: "Développement personnel",
                    description: "Travail sur la confiance en soi, l'estime de soi, la gestion des émotions et l'affirmation de soi pour mieux vivre au quotidien.",
                    color: "primary"
                  },
                  {
                    icon: <Briefcase className="w-6 h-6" />,
                    title: "Reconversion professionnelle",
                    description: "Accompagnement dans votre réflexion de changement de carrière. Bilan de compétences, clarification de projet, gestion du stress lié au changement.",
                    color: "secondary-purple"
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${
                      service.color === 'primary' 
                        ? 'from-primary to-pink-600' 
                        : 'from-secondary-purple to-purple-600'
                    } rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Détails Services Professionnels */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-secondary-purple text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Accompagnement en entreprise
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Services pour les <span className="text-secondary-purple">Professionnels</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Prévention des Risques Psychosociaux (RPS)",
                    description: "Diagnostic organisationnel, identification des facteurs de risque, plan d'action sur mesure pour améliorer la qualité de vie au travail.",
                    color: "secondary-purple"
                  },
                  {
                    icon: <UserCheck className="w-6 h-6" />,
                    title: "Recrutement et évaluation",
                    description: "Tests de personnalité SOSIE, entretiens structurés, évaluation des soft skills pour des recrutements réussis et pertinents.",
                    color: "primary"
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6" />,
                    title: "Ateliers de prévention du stress",
                    description: "Formations et ateliers collectifs sur la gestion du stress, la communication, la cohésion d'équipe et le bien-être au travail.",
                    color: "secondary-purple"
                  },
                  {
                    icon: <ClipboardList className="w-6 h-6" />,
                    title: "Audit et diagnostic organisationnel",
                    description: "Analyse approfondie du climat social, des conditions de travail et des facteurs de bien-être. Rapport détaillé avec recommandations.",
                    color: "primary"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Cellule d'écoute et soutien psychologique",
                    description: "Mise en place d'espaces d'écoute confidentiels pour les salariés. Intervention en cas de crise ou d'événement traumatique.",
                    color: "secondary-purple"
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Formation management et RH",
                    description: "Formation des managers à la détection des signaux de souffrance, au management bienveillant et à la prévention du burn-out.",
                    color: "primary"
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${
                      service.color === 'primary' 
                        ? 'from-primary to-pink-600' 
                        : 'from-secondary-purple to-purple-600'
                    } rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modalités pratiques */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#FDF8F6] to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Informations pratiques
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Modalités de <span className="text-primary">consultation</span>
                </h2>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {[
                    {
                      icon: <Phone className="w-6 h-6 text-primary" />,
                      title: "Premier entretien offert",
                      text: "15 minutes pour échanger sur vos besoins"
                    },
                    {
                      icon: <Clock className="w-6 h-6 text-primary" />,
                      title: "Réponse sous 24h",
                      text: "Je m'engage à vous répondre rapidement"
                    },
                    {
                      icon: <Shield className="w-6 h-6 text-primary" />,
                      title: "Confidentialité absolue",
                      text: "Secret professionnel garanti"
                    }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-14 h-14 bg-pink-light-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Formats de consultation</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground"><span className="font-semibold text-foreground">En cabinet :</span> Consultations en présentiel dans un cadre chaleureux et confidentiel</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground"><span className="font-semibold text-foreground">En visio :</span> Séances en ligne via plateforme sécurisée pour plus de flexibilité</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground"><span className="font-semibold text-foreground">En entreprise :</span> Interventions sur site pour les prestations professionnelles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-pink-500 to-secondary-purple">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt(e) à démarrer votre accompagnement ?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Prenons contact pour échanger sur vos besoins et trouver ensemble la solution la plus adaptée à votre situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Prendre contact
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/mon-approche"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border-2 border-white hover:bg-white/30 transition-all duration-300"
                >
                  Découvrir mon approche
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}