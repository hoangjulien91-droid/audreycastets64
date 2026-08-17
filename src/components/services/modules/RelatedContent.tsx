"use client";

import { ServiceData } from "@/lib/data/services";
import { Link } from "next-view-transitions";
import { ArrowRight, FileText, Brain, Sparkles, Flame } from "lucide-react";

interface RelatedContentProps {
  relatedServices: ServiceData[];
  relatedTests?: ("mbi" | "diva")[];
}

export function RelatedContent({ relatedServices, relatedTests }: RelatedContentProps) {
  const hasTests = relatedTests && relatedTests.length > 0;

  return (
    <div className="border-border mt-12 border-t py-12">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-display text-xl font-bold">
          Pour aller <span className="text-primary">plus loin</span>
        </h3>
        <Link
          href="/tests"
          className="text-primary hover:text-primary-dark inline-flex items-center gap-1 text-sm font-semibold hover:underline"
        >
          <span>Découvrir tous nos tests</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* TEST MBI BURNOUT */}
        {relatedTests?.includes("mbi") && (
          <Link
            href="/tests/burnout"
            className="group card-premium bg-linear-to-br from-rose-50/70 via-white to-orange-50/50 p-6 transition-all duration-300 hover:border-rose-300 hover:shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-rose-100 p-3.5 text-rose-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Flame className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-bold text-rose-800">
                    Auto-évaluation
                  </span>
                  <span className="text-muted-foreground text-xs">5 min</span>
                </div>
                <h4 className="text-foreground group-hover:text-primary mb-1 text-base font-bold transition-colors">
                  Test Burn-out (MBI)
                </h4>
                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                  Évaluez vos 3 dimensions d'épuisement professionnel avec l'inventaire Maslach.
                </p>
                <span className="flex items-center text-xs font-bold text-rose-600">
                  Passer le test en ligne <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* TEST DIVA TDAH */}
        {relatedTests?.includes("diva") && (
          <Link
            href="/tests/tdah"
            className="group card-premium bg-linear-to-br from-purple-50/70 via-white to-indigo-50/50 p-6 transition-all duration-300 hover:border-purple-300 hover:shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-purple-100 p-3.5 text-purple-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Brain className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-[11px] font-bold text-purple-800">
                    Pré-diagnostic
                  </span>
                  <span className="text-muted-foreground text-xs">8 min</span>
                </div>
                <h4 className="text-foreground group-hover:text-primary mb-1 text-base font-bold transition-colors">
                  Test TDAH (DIVA 2.0)
                </h4>
                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                  Bilan standardisé des symptômes d'inattention et d'impulsivité adulte.
                </p>
                <span className="flex items-center text-xs font-bold text-purple-600">
                  Passer le test en ligne <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* FALLBACK GENERAL TESTS HUB CARD IF NO SPECIFIC TEST */}
        {!hasTests && (
          <Link
            href="/tests"
            className="group card-premium bg-linear-to-br from-primary/5 via-white to-accent-violet/5 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-primary/10 p-3.5 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-1.5">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                    Bilans Gratuits
                  </span>
                </div>
                <h4 className="text-foreground group-hover:text-primary mb-1 text-base font-bold transition-colors">
                  Tests & Auto-évaluation
                </h4>
                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                  Faites le point sur votre situation avec nos outils de pré-diagnostic en ligne.
                </p>
                <span className="flex items-center text-xs font-bold text-primary">
                  Accéder aux bilans <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* RELATED SERVICES */}
        {relatedServices.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group card-premium p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-3">
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                {service.category}
              </span>
            </div>
            <h4 className="text-foreground group-hover:text-primary mb-2 font-bold transition-colors">
              {service.title}
            </h4>
            <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
              {service.shortDescription}
            </p>
            <span className="text-muted-foreground group-hover:text-primary mt-4 flex items-center text-xs font-medium transition-colors">
              En savoir plus <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
