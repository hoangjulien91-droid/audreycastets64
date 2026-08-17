import Header from "@/components/sections/header";
import { PageHero } from "@/components/ui/page-hero";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Link } from "next-view-transitions";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
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
  MapPin,
  Award,
} from "lucide-react";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "Tarifs - Consultations & Services Psychologie du Travail",
  description:
    "Tarifs transparents : 55€ la séance pour particuliers. Devis personnalisé pour professionnels. Premier entretien gratuit. Possibilité de remboursement mutuelle.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/tarifs",
  },
  openGraph: {
    title: "Tarifs - Consultations & Services Psychologie du Travail",
    description: "Tarifs transparents : 55€ la séance. Premier entretien gratuit.",
    url: "https://www.audrey-castets.fr/tarifs",
    type: "website",
  },
};

export default function TarifsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Tarifs" }]} />
      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          {/* Hero Section with Breadcrumb */}
          <PageHero
            badge={{
              icon: <Sparkles className="h-4 w-4" />,
              text: "Tarifs Transparents",
            }}
            title={
              <>
                Des tarifs{" "}
                <span className="from-primary via-primary to-accent-violet bg-linear-to-r bg-clip-text text-transparent">
                  transparents
                </span>{" "}
                adaptés à vos besoins
              </>
            }
            subtitle="Des tarifs transparents adaptés à vos besoins, avec possibilité de prise en charge selon votre situation."
            breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Tarifs" }]}
            align="center"
          >
            <div
              className="mt-8 flex flex-wrap justify-center gap-3"
              role="list"
              aria-label="Points clés"
            >
              {[
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Tarifs clairs" },
                { icon: <CreditCard className="h-4 w-4" />, label: "Plusieurs moyens de paiement" },
                { icon: <FileText className="h-4 w-4" />, label: "Factures & reçus" },
                { icon: <Shield className="h-4 w-4" />, label: "Pas d'engagement" },
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
          </PageHero>

          {/* Pricing Cards Section */}
          <section
            className="relative overflow-hidden bg-white py-16 md:py-24"
            aria-labelledby="pricing-heading"
          >
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden opacity-20"
              aria-hidden="true"
            >
              <div className="bg-bg-soft absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"></div>
              <div className="bg-border-soft absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-8">
              <div className="mb-12 text-center">
                <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                  Grille tarifaire
                </span>
                <h2
                  id="pricing-heading"
                  className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                >
                  Choisissez la formule{" "}
                  <span className="text-primary">adaptée à votre situation</span>
                </h2>
              </div>

              <div
                className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8"
                role="list"
                aria-label="Offres tarifaires"
              >
                {/* Card 1: Particuliers */}
                <div className="group relative">
                  <div className="from-bg-soft/40 to-bg-soft/30 group-hover:from-bg-soft/60 group-hover:to-bg-soft/50 absolute inset-0 transform rounded-3xl bg-linear-to-br transition-all duration-500 group-hover:-translate-y-1"></div>
                  <div className="border-border-soft/30 relative flex h-full flex-col justify-between transform overflow-hidden rounded-3xl border bg-white shadow-[0_4px_24px_var(--shadow-color-sm)] transition-all duration-500 group-hover:-translate-y-2 hover:shadow-[0_8px_32px_var(--shadow-color-lg)]">
                    <div className="from-primary via-primary to-accent-violet h-2 bg-linear-to-r"></div>
                    <div className="p-8">
                      <div className="relative mb-6">
                        <div className="from-primary to-primary absolute inset-0 h-16 w-16 rounded-2xl bg-linear-to-br opacity-30 blur-xl"></div>
                        <div className="from-primary to-primary relative flex h-16 w-16 transform items-center justify-center rounded-2xl bg-linear-to-br shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Heart className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="font-display text-foreground group-hover:text-primary mb-3 text-2xl font-bold transition-colors">
                        Particuliers
                      </h3>
                      <div className="mb-6">
                        <div className="mb-2 flex items-baseline gap-2">
                          <span className="text-primary text-4xl font-bold">55€</span>
                          <span className="text-muted-foreground text-sm">/ séance</span>
                        </div>
                        <p className="text-muted-foreground text-xs">Séance individuelle d'environ 50 min</p>
                      </div>
                      <ul className="mb-8 space-y-3">
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">Thérapies TCC et EFT</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            En cabinet ou en visioconférence
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Déplacement à domicile (rayon 20km)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Premier échange offert (15 min)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Facture avec n° ADELI pour mutuelle
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 pt-0">
                      <Link
                        href="/contact"
                        className="from-primary to-primary inline-flex w-full transform cursor-pointer items-center justify-center rounded-2xl bg-linear-to-r px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        Prendre rendez-vous
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 2: Bilan de compétences (CPF) */}
                <div className="group relative">
                  <div className="from-primary/20 to-accent-violet/20 group-hover:from-primary/30 group-hover:to-accent-violet/30 absolute inset-0 transform rounded-3xl bg-linear-to-br transition-all duration-500 group-hover:-translate-y-1"></div>
                  <div className="border-primary/40 relative flex h-full flex-col justify-between transform overflow-hidden rounded-3xl border-2 bg-white shadow-[0_8px_32px_var(--shadow-color-md)] transition-all duration-500 group-hover:-translate-y-2 hover:shadow-[0_12px_40px_var(--shadow-color-lg)]">
                    <div className="bg-primary absolute top-0 right-0 rounded-bl-xl px-3 py-1 text-xs font-bold text-white shadow-xs">
                      100% Éligible CPF
                    </div>
                    <div className="from-primary via-accent-violet to-primary h-2 bg-linear-to-r"></div>
                    <div className="p-8">
                      <div className="relative mb-6">
                        <div className="from-primary to-accent-violet absolute inset-0 h-16 w-16 rounded-2xl bg-linear-to-br opacity-30 blur-xl"></div>
                        <div className="from-primary to-accent-violet relative flex h-16 w-16 transform items-center justify-center rounded-2xl bg-linear-to-br shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <FileText className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="font-display text-foreground group-hover:text-primary mb-3 text-2xl font-bold transition-colors">
                        Bilan de Compétences
                      </h3>
                      <div className="mb-6">
                        <div className="mb-2 flex items-baseline gap-2">
                          <span className="text-primary text-3xl font-bold">1 050€ - 1 886€</span>
                        </div>
                        <p className="text-muted-foreground text-xs">Formules de 15h, 20h ou 24h • Finançable CPF</p>
                      </div>
                      <ul className="mb-8 space-y-3">
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            <strong>Prise en charge CPF</strong> (Mon Compte Formation)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Organisme partenaire certifié Qualiopi
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Parcours structuré en 3 phases légales
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Tests & questionnaires d'aide à la réflexion
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Document de synthèse officiel & suivi 6 mois
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 pt-0">
                      <Link
                        href="/bilan-de-competences"
                        className="btn-premium inline-flex w-full transform cursor-pointer items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        Découvrir le Bilan CPF
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 3: Professionnels */}
                <div className="group relative">
                  <div className="from-bg-soft/40 to-bg-soft/30 group-hover:from-bg-soft/60 group-hover:to-bg-soft/50 absolute inset-0 transform rounded-3xl bg-linear-to-br transition-all duration-500 group-hover:-translate-y-1"></div>
                  <div className="border-border-soft/30 relative flex h-full flex-col justify-between transform overflow-hidden rounded-3xl border bg-white shadow-[0_4px_24px_var(--shadow-color-sm)] transition-all duration-500 group-hover:-translate-y-2 hover:shadow-[0_8px_32px_var(--shadow-color-lg)]">
                    <div className="from-primary via-primary to-accent-violet h-2 bg-linear-to-r"></div>
                    <div className="p-8">
                      <div className="relative mb-6">
                        <div className="from-primary to-primary absolute inset-0 h-16 w-16 rounded-2xl bg-linear-to-br opacity-30 blur-xl"></div>
                        <div className="from-primary to-primary relative flex h-16 w-16 transform items-center justify-center rounded-2xl bg-linear-to-br shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Building2 className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="font-display text-foreground group-hover:text-primary mb-3 text-2xl font-bold transition-colors">
                        Professionnels
                      </h3>
                      <div className="mb-6">
                        <div className="mb-2 flex items-baseline gap-2">
                          <span className="text-primary text-3xl font-bold">Sur devis</span>
                        </div>
                        <p className="text-muted-foreground text-xs">Accompagnement sur-mesure pour entreprises</p>
                      </div>
                      <ul className="mb-8 space-y-3">
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Audit RPS et diagnostic organisationnel
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Recrutement et passation tests SOSIE
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Ateliers prévention du stress & QVT
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Cellule d'écoute et soutien psychologique
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground/80 text-xs sm:text-sm">
                            Conseil et accompagnement managérial RH
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 pt-0">
                      <Link
                        href="/contact"
                        className="from-primary to-primary inline-flex w-full transform cursor-pointer items-center justify-center rounded-2xl bg-linear-to-r px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="mx-auto max-w-4xl rounded-2xl border border-[#D4C5D9]/30 bg-linear-to-r from-[#F3E8F0] to-[#E8DFF0] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white"
                    aria-hidden="true"
                  >
                    <Info className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-bold">
                      Premier entretien gratuit
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Je vous offre un premier échange téléphonique de 15 minutes pour faire
                      connaissance, comprendre vos besoins et vérifier que mon accompagnement est
                      adapté à votre situation. Sans engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Remboursements Section */}
          <section
            className="bg-linear-to-br from-[#F9F7F4] via-[#FDFCFB] to-white py-16 md:py-24"
            aria-labelledby="remboursements-heading"
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                    Prises en charge
                  </span>
                  <h2
                    id="remboursements-heading"
                    className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                  >
                    Possibilités de <span className="text-primary">remboursement</span>
                  </h2>
                </div>

                <div
                  className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2"
                  role="list"
                  aria-label="Options de remboursement"
                >
                  {[
                    {
                      icon: <Award className="h-6 w-6" />,
                      title: "Compte Formation (CPF)",
                      description:
                        "Financement possible jusqu'à 100% pour votre Bilan de compétences via notre organisme partenaire certifié Qualiopi sur Mon Compte Formation.",
                      color: "primary",
                    },
                    {
                      icon: <Shield className="h-6 w-6" />,
                      title: "Mutuelles & Complémentaires",
                      description:
                        "De nombreuses mutuelles remboursent les séances de psychologie (forfait annuel ou par séance). Une facture avec n° ADELI vous est systématiquement remise.",
                      color: "secondary",
                    },
                    {
                      icon: <Building2 className="h-6 w-6" />,
                      title: "Comités d'entreprise (CSE)",
                      description:
                        "Certains CSE ou employeurs prennent en charge tout ou partie des consultations ou des bilans. Renseignez-vous auprès de votre entreprise.",
                      color: "primary",
                    },
                    {
                      icon: <Handshake className="h-6 w-6" />,
                      title: "Situations particulières",
                      description:
                        "Si vous rencontrez des difficultés financières, n'hésitez pas à m'en parler lors de notre premier échange pour adapter les modalités.",
                      color: "secondary",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group rounded-2xl border border-[#D4C5D9]/30 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div
                        className={`h-12 w-12 bg-linear-to-br ${
                          item.color === "primary"
                            ? "from-[#A594B3] to-[#8B7A98]"
                            : "from-[#C5B8D0] to-[#A594B3]"
                        } mb-4 flex items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-foreground mb-2 text-lg font-bold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <article className="rounded-2xl border border-[#D4C5D9]/30 bg-white p-6 shadow-lg md:p-8">
                  <h3 className="text-foreground mb-4 flex items-center gap-2 text-xl font-bold">
                    <BadgeCheck className="text-primary h-6 w-6" aria-hidden="true" />À savoir
                  </h3>
                  <ul className="space-y-3" role="list">
                    <li className="flex items-start gap-3">
                      <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Les consultations chez un psychologue ne sont{" "}
                        <span className="text-foreground font-semibold">
                          pas remboursées par la Sécurité Sociale
                        </span>
                        , sauf dispositif MonPsy (sous conditions).
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Les remboursements par mutuelles varient généralement{" "}
                        <span className="text-foreground font-semibold">
                          de 20€ à 60€ par séance
                        </span>{" "}
                        selon votre contrat.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Je vous conseille de{" "}
                        <span className="text-foreground font-semibold">
                          vérifier auprès de votre mutuelle
                        </span>{" "}
                        avant la première séance pour connaître vos droits.
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* Modalités de paiement */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="modalites-heading">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <span className="text-primary mb-3 block text-sm font-semibold tracking-wide uppercase">
                    Informations pratiques
                  </span>
                  <h2
                    id="modalites-heading"
                    className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl"
                  >
                    Modalités de <span className="text-primary">paiement</span>
                  </h2>
                </div>

                <article className="rounded-3xl border border-[#D4C5D9]/30 bg-white p-8 shadow-xl md:p-12">
                  <div
                    className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3"
                    role="list"
                    aria-label="Moyens de paiement"
                  >
                    {[
                      {
                        icon: <CreditCard className="text-primary h-6 w-6" />,
                        title: "Moyens acceptés",
                        text: "Espèces, chèque, virement bancaire",
                      },
                      {
                        icon: <Calendar className="text-primary h-6 w-6" />,
                        title: "Paiement immédiat",
                        text: "Règlement à la fin de chaque séance",
                      },
                      {
                        icon: <FileText className="text-primary h-6 w-6" />,
                        title: "Facture systématique",
                        text: "Reçu avec numéro ADELI fourni",
                      },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F3E8F0]">
                          {item.icon}
                        </div>
                        <h3 className="text-foreground mb-2 text-lg font-bold">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#D4C5D9]/30 pt-8">
                    <h3 className="text-foreground mb-4 text-xl font-bold">
                      Politique d'annulation
                    </h3>
                    <div className="space-y-3" role="list">
                      <div className="flex items-start gap-3">
                        <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <p className="text-muted-foreground">
                          <span className="text-foreground font-semibold">Annulation gratuite</span>{" "}
                          jusqu'à 48h avant le rendez-vous
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <p className="text-muted-foreground">
                          <span className="text-foreground font-semibold">
                            Annulation entre 24h et 48h :
                          </span>{" "}
                          Facturation de 50% de la séance
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <p className="text-muted-foreground">
                          <span className="text-foreground font-semibold">
                            Annulation moins de 24h avant ou absence :
                          </span>{" "}
                          Facturation intégrale de la séance
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
            className="from-primary bg-linear-to-r via-[#A594B3] to-[#8B7A98] py-16 md:py-20"
            aria-labelledby="cta-heading"
          >
            <div className="container mx-auto px-6 text-center lg:px-8">
              <div className="mx-auto max-w-3xl">
                <h2
                  id="cta-heading"
                  className="font-display mb-6 text-3xl font-bold text-white md:text-4xl"
                >
                  Une question sur les tarifs ?
                </h2>
                <p className="mb-8 text-lg text-white/90">
                  N'hésitez pas à me contacter pour toute question concernant les tarifs, les
                  modalités de paiement ou les possibilités de remboursement.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="text-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    aria-label="Me contacter pour des questions sur les tarifs"
                  >
                    Me contacter
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/services"
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
