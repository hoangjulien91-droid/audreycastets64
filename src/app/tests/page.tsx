import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { ArrowRight, Brain, AlertTriangle } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Tests & Pré-diagnostic | Audrey Castets - Psychologue du Travail",
  description:
    "Évaluez votre niveau de Burnout ou de TDAH grâce à nos outils de pré-diagnostic en ligne.",
};

export default function TestsPage() {
  return (
    <>
      <div className="bg-background min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container">
            <Breadcrumbs items={[{ label: "Bilans Psychométriques" }]} className="mb-8" />
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl">
                Tests & <span className="text-primary">Pré-diagnostic</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ces questionnaires sont des outils de dépistage et ne remplacent pas un diagnostic
                médical. Ils vous permettent de faire le point sur votre situation actuelle.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {/* Burnout Card */}
              <div className="card-premium group relative flex flex-col items-start overflow-hidden p-8">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-3xl" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 transition-transform duration-300 group-hover:scale-110">
                  <AlertTriangle className="h-7 w-7 text-rose-600" />
                </div>

                <h2 className="font-display text-foreground mb-3 text-2xl font-bold">
                  Test Burnout
                </h2>
                <p className="text-muted-foreground mb-8 flex-1">
                  Test d'inventaire de burnout de Maslach - MBI. Ce test analyse la fatigue
                  émotionnelle, la dépersonnalisation et l'accomplissement personnel.
                </p>

                <Link href="/tests/burnout" className="btn-premium group w-full">
                  <span className="relative z-10 flex items-center gap-2">
                    Commencer le test
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>

              {/* TDAH Card */}
              <div className="card-premium group relative flex flex-col items-start overflow-hidden p-8">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 transition-transform duration-300 group-hover:scale-110">
                  <Brain className="h-7 w-7 text-violet-600" />
                </div>

                <h2 className="font-display text-foreground mb-3 text-2xl font-bold">Test TDAH</h2>
                <p className="text-muted-foreground mb-8 flex-1">
                  Échelle auto-rapportée pour le TDAH adulte (ASRS v1.1). Identifiez les symptômes
                  potentiels de trouble du déficit de l'attention.
                </p>

                <Link href="/tests/tdah" className="btn-premium group w-full">
                  <span className="relative z-10 flex items-center gap-2">
                    Commencer le test
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
