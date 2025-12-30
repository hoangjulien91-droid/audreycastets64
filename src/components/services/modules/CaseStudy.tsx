"use client";

import { FolderOpen, ArrowRight, User, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

interface CaseStudyProps {
  caseStudy: {
    title: string;
    context: string;
    problem: string;
    approach: string;
    result: string;
  };
}

export function CaseStudy({ caseStudy }: CaseStudyProps) {
  if (!caseStudy) return null;

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Visual & Header */}
          <div className="animate-in slide-in-left">
            <SectionHeader
              badge="Cas Concret"
              badgeIcon={<FolderOpen className="h-3 w-3" />}
              title={caseStudy.title}
              subtitle={undefined}
            />
            <p className="text-muted-foreground mb-8 border-l-4 border-primary/20 pl-4 text-lg italic">
              "{caseStudy.context}"
            </p>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border-soft bg-muted/30 md:aspect-video backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-80" />
              {/* Abstract Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 animate-pulse rounded-full bg-primary/10 blur-3xl" />
                <div className="relative z-10 flex flex-col items-center rounded-2xl border border-white/10 bg-card/60 p-6 shadow-xl backdrop-blur-md">
                  <User className="mb-2 h-12 w-12 text-primary/60" />
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                    Anonyme
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Problem */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-border-soft bg-card/60 p-6 shadow-sm transition-all hover:bg-card/80 backdrop-blur-sm animate-in fade-in-up delay-200"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-bl-full bg-primary/5 opacity-50" />
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                  1
                </span>
                La Problématique
              </h3>
              <p className="text-muted-foreground relative z-10 text-sm leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* Approach */}
            <div
              className="group relative ml-4 overflow-hidden rounded-2xl border border-border-soft bg-card/60 p-6 shadow-sm transition-all hover:bg-card/80 backdrop-blur-sm md:ml-8 animate-in fade-in-up delay-300"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-bl-full bg-primary/5 opacity-50" />
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                  2
                </span>
                L'Approche
              </h3>
              <p className="text-muted-foreground relative z-10 text-sm leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>

            {/* Result */}
            <div
              className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8 shadow-md backdrop-blur-sm animate-in fade-in-up delay-400"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">Le Résultat</h3>
                  <p className="text-sm leading-relaxed font-medium text-foreground/80">
                    {caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
