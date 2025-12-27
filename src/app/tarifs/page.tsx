import Header from "@/components/sections/header";
import { PageHero } from "@/components/ui/page-hero";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from 'next/link';
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';
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
  Calendar,
  MapPin
} from "lucide-react";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Tarifs - Consultations & Services Psychologie du Travail',
  description: 'Tarifs transparents : 55€ la séance pour particuliers. Devis personnalisé pour professionnels. Premier entretien gratuit. Possibilité de remboursement mutuelle.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/tarifs',
  },
  openGraph: {
    title: 'Tarifs - Consultations & Services Psychologie du Travail',
    description: 'Tarifs transparents : 55€ la séance. Premier entretien gratuit.',
    url: 'https://www.audrey-castets.fr/tarifs',
    type: 'website',
  },
};

export default function TarifsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Tarifs' }
      ]} />
      <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20" id="main-content">
        {/* Hero Section with Breadcrumb */}
      <PageHero
        badge={{
          icon: <Sparkles className="w-4 h-4" />,
          text: "Tarifs Transparents"
        }}
        title={
          <>
            Des tarifs <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A594B3] via-[#8B7A98] to-[#C5B8D0]">transparents</span> adaptés à vos besoins
          </>
        }
        subtitle="Des tarifs transparents adaptés à vos besoins, avec possibilité de prise en charge selon votre situation."
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Tarifs" }
        ]}
        align="center"
      >
        <div className="flex flex-wrap gap-3 justify-center mt-8" role="list" aria-label="Points clés">
          {[
            { icon: <BadgeCheck className="w-4 h-4" />, label: "Tarifs clairs" },
            { icon: <CreditCard className="w-4 h-4" />, label: "Plusieurs moyens de paiement" },
            { icon: <FileText className="w-4 h-4" />, label: "Factures & reçus" },
            { icon: <Shield className="w-4 h-4" />, label: "Pas d'engagement" }
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
      </PageHero>

        {/* Pricing Cards Section */}
        <section 
          className="py-16 md:py-24 bg-white relative overflow-hidden"
          aria-labelledby="pricing-heading"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8DFF0] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4C5D9] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                Grille tarifaire
              </span>
              <h2 id="pricing-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choisissez la formule <span className="text-primary">adaptée à votre situation</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-12" role="list" aria-label="Offres tarifaires">
              {/* Card 1: Particuliers */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-[#F3E8F0]/40 to-[#E8DFF0]/30 group-hover:from-[#F3E8F0]/60 group-hover:to-[#E8DFF0]/50 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-1"></div>
                <div className="relative h-full bg-white rounded-3xl border border-[#D4C5D9]/30 shadow-[0_4px_24px_rgba(139,122,152,0.08)] hover:shadow-[0_8px_32px_rgba(139,122,152,0.12)] transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
                  <div className="h-2 bg-linear-to-r from-[#A594B3] via-[#8B7A98] to-[#C5B8D0]"></div>
                  <div className="p-8 md:p-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-16 h-16 bg-linear-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl blur-xl opacity-30"></div>
                      <div className="relative w-16 h-16 bg-linear-to-br from-[#A594B3] to-[#8B7A98] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                      Particuliers
                    </h3>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl font-bold text-primary">55€</span>
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
                          Déplacement à domicile dans les 20km
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
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center w-full px-6 py-4 bg-linear-to-r from-[#A594B3] to-[#8B7A98] text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Prendre rendez-vous
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Professionnels */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-[#E8DFF0]/40 to-[#F3E8F0]/30 group-hover:from-[#E8DFF0]/60 group-hover:to-[#F3E8F0]/50 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-1"></div>
                <div className="relative h-full bg-white rounded-3xl border border-[#D4C5D9]/30 shadow-[0_4px_24px_rgba(139,122,152,0.08)] hover:shadow-[0_8px_32px_rgba(139,122,152,0.12)] transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
                  <div className="h-2 bg-linear-to-r from-[#8B7A98] via-[#A594B3] to-[#C5B8D0]"></div>
                  <div className="p-8 md:p-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-16 h-16 bg-linear-to-br from-[#8B7A98] to-[#A594B3] rounded-2xl blur-xl opacity-30"></div>
                      <div className="relative w-16 h-16 bg-linear-to-br from-[#8B7A98] to-[#A594B3] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                      Professionnels
                    </h3>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-primary">Sur devis</span>
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
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center w-full px-6 py-4 bg-linear-to-r from-[#8B7A98] to-[#A594B3] text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Demander un devis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Banner */}
            <div className="max-w-4xl mx-auto bg-linear-to-r from-[#F3E8F0] to-[#E8DFF0] rounded-2xl p-6 md:p-8 border border-[#D4C5D9]/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
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
        <section 
          className="py-16 md:py-24 bg-linear-to-br from-[#F9F7F4] via-[#FDFCFB] to-white"
          aria-labelledby="remboursements-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Prises en charge
                </span>
                <h2 id="remboursements-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Possibilités de <span className="text-primary">remboursement</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" role="list" aria-label="Options de remboursement">
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
                    color: "secondary"
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
                    color: "secondary"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-[#D4C5D9]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-linear-to-br ${
                      item.color === 'primary' 
                        ? 'from-[#A594B3] to-[#8B7A98]' 
                        : 'from-[#C5B8D0] to-[#A594B3]'
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

              <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-[#D4C5D9]/30">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BadgeCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                  À savoir
                </h3>
                <ul className="space-y-3" role="list">
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
              </article>
            </div>
          </div>
        </section>

        {/* Modalités de paiement */}
        <section 
          className="py-16 md:py-24 bg-white"
          aria-labelledby="modalites-heading"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-3 block">
                  Informations pratiques
                </span>
                <h2 id="modalites-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Modalités de <span className="text-primary">paiement</span>
                </h2>
              </div>

              <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#D4C5D9]/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" role="list" aria-label="Moyens de paiement">
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
                      <div className="w-14 h-14 bg-[#F3E8F0] rounded-xl flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#D4C5D9]/30 pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Politique d'annulation</h3>
                  <div className="space-y-3" role="list">
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
                Une question sur les tarifs ?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                N'hésitez pas à me contacter pour toute question concernant les tarifs, les modalités de paiement ou les possibilités de remboursement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  aria-label="Me contacter pour des questions sur les tarifs"
                >
                  Me contacter
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
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
