import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { 
  CircleCheck,
  ArrowRight,
  Sparkles,
  Phone,
  Clock,
  Shield,
  Heart,
  Users,
  Building2,
  CreditCard,
  BadgeCheck,
  Info,
  FileText,
  Handshake,
  Calendar
} from "lucide-react";

export default function TarifsPage() {
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
                  { label: "Tarifs" }
                ]} 
              />
            </div>

            {/* Hero Content */}
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-primary/20 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Tarifs Transparents
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Des tarifs <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary-purple">transparents</span> adaptés à vos besoins
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Des tarifs transparents adaptés à vos besoins, avec possibilité de prise en charge selon votre situation.
              </p>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { icon: <BadgeCheck className="w-4 h-4" />, label: "Tarifs clairs" },
                  { icon: <CreditCard className="w-4 h-4" />, label: "Plusieurs moyens de paiement" },
                  { icon: <FileText className="w-4 h-4" />, label: "Factures & reçus" },
                  { icon: <Shield className="w-4 h-4" />, label: "Pas d'engagement" }
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

        {/* Pricing Cards Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/80 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                Grille tarifaire
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choisissez la formule <span className="text-primary">adaptée à votre situation</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-12">
              {/* Card 1: Particuliers */}
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
                      Particuliers
                    </h3>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl font-bold text-primary">65€</span>
                        <span className="text-muted-foreground text-lg">/ séance</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Séance d'environ 50 minutes</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Thérapies TCC et EFT
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Consultation en cabinet ou en visio
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Premier entretien gratuit (15 min)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Facture pour remboursement mutuelle
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Accompagnement personnalisé
                        </span>
                      </li>
                    </ul>
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Prendre rendez-vous
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Professionnels */}
              <div className="group relative">
                <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-1"></div>
                <div className="relative h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-500/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <div className="p-8 md:p-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-purple-600 transition-colors">
                      Professionnels
                    </h3>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-secondary-purple">Sur devis</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Tarif adapté à vos besoins</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Audit RPS et diagnostic organisationnel
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
                          Ateliers et formations sur mesure
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Cellule d'écoute psychologique
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          Suivi et accompagnement RH
                        </span>
                      </li>
                    </ul>
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Demander un devis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Banner */}
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Premier entretien gratuit
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Je vous offre un premier échange téléphonique de 15 minutes pour faire connaissance, comprendre vos besoins et vérifier que mon accompagnement est adapté à votre situation. Sans engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Remboursements Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#FDF8F6] to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Prises en charge
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Possibilités de <span className="text-primary">remboursement</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Mutuelles",
                    description: "De nombreuses mutuelles proposent un remboursement partiel ou total des séances de psychologie. Je vous fournis une facture détaillée à transmettre à votre complémentaire santé.",
                    color: "primary"
                  },
                  {
                    icon: <Building2 className="w-6 h-6" />,
                    title: "Comités d'entreprise",
                    description: "Certains CE prennent en charge tout ou partie des consultations psychologiques. N'hésitez pas à vous renseigner auprès de votre entreprise.",
                    color: "secondary-purple"
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Facturation",
                    description: "Vous recevrez systématiquement une facture avec mon numéro ADELI pour toute demande de remboursement auprès de votre mutuelle ou organisme.",
                    color: "primary"
                  },
                  {
                    icon: <Handshake className="w-6 h-6" />,
                    title: "Situations particulières",
                    description: "Si vous rencontrez des difficultés financières, n'hésitez pas à m'en parler. Des solutions peuvent être envisagées selon votre situation.",
                    color: "secondary-purple"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${
                      item.color === 'primary' 
                        ? 'from-primary to-pink-600' 
                        : 'from-secondary-purple to-purple-600'
                    } rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                  À savoir
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Les consultations chez un psychologue ne sont <span className="font-semibold text-foreground">pas remboursées par la Sécurité Sociale</span>, sauf dispositif MonPsy (sous conditions).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Les remboursements par mutuelles varient généralement <span className="font-semibold text-foreground">de 20€ à 60€ par séance</span> selon votre contrat.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Je vous conseille de <span className="font-semibold text-foreground">vérifier auprès de votre mutuelle</span> avant la première séance pour connaître vos droits.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Modalités de paiement */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Informations pratiques
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Modalités de <span className="text-primary">paiement</span>
                </h2>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {[
                    {
                      icon: <CreditCard className="w-6 h-6 text-primary" />,
                      title: "Moyens acceptés",
                      text: "Espèces, chèque, virement bancaire"
                    },
                    {
                      icon: <Calendar className="w-6 h-6 text-primary" />,
                      title: "Paiement immédiat",
                      text: "Règlement à la fin de chaque séance"
                    },
                    {
                      icon: <FileText className="w-6 h-6 text-primary" />,
                      title: "Facture systématique",
                      text: "Reçu avec numéro ADELI fourni"
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
                  <h3 className="text-xl font-bold text-foreground mb-4">Politique d'annulation</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Annulation gratuite</span> jusqu'à 48h avant le rendez-vous
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Annulation entre 24h et 48h :</span> Facturation de 50% de la séance
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Annulation moins de 24h avant ou absence :</span> Facturation intégrale de la séance
                      </p>
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
                Une question sur les tarifs ?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                N'hésitez pas à me contacter pour toute question concernant les tarifs, les modalités de paiement ou les possibilités de remboursement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Me contacter
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border-2 border-white hover:bg-white/30 transition-all duration-300"
                >
                  Découvrir mes services
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