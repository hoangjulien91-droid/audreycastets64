import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import {
  ArrowRight,
  Brain,
  Flame,
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Calendar,
  Phone,
} from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { PageHero } from "@/components/ui/page-hero";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bilans Psychométriques & Tests en Ligne - Audrey Castets Psychologue",
  description:
    "Évaluez votre niveau d'épuisement professionnel (Burnout MBI) ou effectuez un pré-diagnostic TDAH Adulte (DIVA 2.0). Outils d'évaluation gratuits et confidentiels.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/tests",
  },
};

export default function TestsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Tests & Bilans" }]} />
      <div className="bg-background min-h-screen">
        <Header />
        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <Sparkles className="h-4 w-4" />,
              text: "Auto-évaluation clinique",
            }}
            title={
              <>
                Bilans &{" "}
                <span className="from-primary to-accent-violet bg-linear-to-r bg-clip-text text-transparent">
                  Tests en ligne
                </span>
              </>
            }
            subtitle="Faites le point sur votre situation grâce à des questionnaires scientifiques standardisés. Résultats immédiats et accompagnement sur-mesure."
            breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Tests & Bilans" }]}
            align="center"
          >
            <div className="mt-8 flex flex-wrap justify-center gap-3" role="list">
              <div className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm">
                <CheckCircle2 className="text-primary mr-2 inline h-4 w-4" />
                100% Gratuit & Sans engagement
              </div>
              <div className="border-accent-violet/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm">
                <ShieldCheck className="text-accent-violet mr-2 inline h-4 w-4" />
                Confidentialité médicale garantie
              </div>
              <div className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm">
                <Clock className="text-primary mr-2 inline h-4 w-4" />
                5 à 10 minutes
              </div>
            </div>
          </PageHero>

          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <span className="text-primary mb-2 block text-xs font-bold tracking-widest uppercase">
                  Outils de dépistage
                </span>
                <h2 className="font-display text-foreground text-3xl font-bold md:text-4xl">
                  Choisissez le bilan adapté à vos interrogations
                </h2>
                <p className="text-muted-foreground mt-3 text-base">
                  Ces outils de dépistage standardisés permettent d'objectiver vos ressentis et de préparer un échange constructif lors de notre premier entretien.
                </p>
              </div>

              <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                {/* Burnout Card */}
                <div className="card-premium group relative flex flex-col justify-between overflow-hidden p-8 sm:p-10">
                  <div className="absolute top-0 right-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-3xl" />

                  <div>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-rose-500/20 to-rose-500/5 text-rose-600 shadow-inner transition-transform duration-300 group-hover:scale-110">
                      <Flame className="h-8 w-8" />
                    </div>

                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-rose-100 px-3 py-0.5 text-xs font-bold text-rose-800">
                        Épuisement Professionnel
                      </span>
                      <span className="text-muted-foreground text-xs font-medium">5-7 min</span>
                    </div>

                    <h3 className="font-display text-foreground mb-3 text-2xl font-bold">
                      Test Burnout (MBI)
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      Inventaire de Burnout de Maslach (MBI) — Mesurez scientifiquement votre niveau d'épuisement émotionnel, de dépersonnalisation / cynisme et votre sentiment d'accomplissement personnel.
                    </p>

                    <ul className="mb-8 space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        Calcul automatique des 3 dimensions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        Synthèse personnalisée transmise par email
                      </li>
                    </ul>
                  </div>

                  <Link href="/tests/burnout" className="btn-premium group w-full !py-3.5">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Passer le test Burnout
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>

                {/* TDAH Card */}
                <div className="card-premium group relative flex flex-col justify-between overflow-hidden p-8 sm:p-10">
                  <div className="absolute top-0 right-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />

                  <div>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500/20 to-purple-500/5 text-purple-600 shadow-inner transition-transform duration-300 group-hover:scale-110">
                      <Brain className="h-8 w-8" />
                    </div>

                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-purple-100 px-3 py-0.5 text-xs font-bold text-purple-800">
                        Attention & Impulsivité
                      </span>
                      <span className="text-muted-foreground text-xs font-medium">8-10 min</span>
                    </div>

                    <h3 className="font-display text-foreground mb-3 text-2xl font-bold">
                      Test TDAH (DIVA 2.0)
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      Entretien diagnostique standardisé DIVA 2.0 pour adulte — Évaluez les symptômes d'inattention, d'hyperactivité et de retentissement fonctionnel au quotidien depuis l'enfance.
                    </p>

                    <ul className="mb-8 space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        Critères DSM standardisés Adulte / Enfant
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        Rapport pré-clinique détaillé
                      </li>
                    </ul>
                  </div>

                  <Link href="/tests/tdah" className="btn-premium group w-full !py-3.5">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Passer le test TDAH
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Consultation Reassurance */}
          <section className="from-primary via-accent-violet to-primary bg-linear-to-r py-16 text-center text-white">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6">
              <Sparkles className="mx-auto mb-4 h-8 w-8 animate-pulse text-white/80" />
              <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">
                Besoin d'analyser vos résultats ensemble ?
              </h2>
              <p className="mb-8 text-base text-white/90 sm:text-lg">
                Profitez d'un premier entretien de 15 minutes offert pour échanger de vive voix sur votre situation.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/prendre-rendez-vous"
                  className="text-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold shadow-xl transition-all hover:scale-105"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous en ligne
                </Link>
                <a
                  href="tel:0743687297"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" />
                  07 43 68 72 97
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
