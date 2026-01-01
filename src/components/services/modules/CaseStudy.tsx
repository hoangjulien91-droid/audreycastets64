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
            <p className="text-muted-foreground border-primary/20 mb-8 border-l-4 pl-4 text-lg italic">
              "{caseStudy.context}"
            </p>

            <div className="border-border-soft bg-muted/30 relative aspect-square overflow-hidden rounded-3xl border backdrop-blur-sm md:aspect-video">
              <div className="from-primary/5 absolute inset-0 bg-linear-to-br to-transparent opacity-80" />
              {/* Abstract Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/10 h-32 w-32 animate-pulse rounded-full blur-3xl" />
                <div className="bg-card/60 relative z-10 flex flex-col items-center rounded-2xl border border-white/10 p-6 shadow-xl backdrop-blur-md">
                  <User className="text-primary/60 mb-2 h-12 w-12" />
                  <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-bold">
                    Anonyme
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Problem */}
            <div className="group border-border-soft bg-card/60 hover:bg-card/80 animate-in fade-in-up relative overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-all delay-200">
              <div className="bg-primary/5 absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-bl-full opacity-50" />
              <h3 className="text-foreground mb-3 flex items-center gap-2 text-lg font-bold">
                <span className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full text-xs">
                  1
                </span>
                La Problématique
              </h3>
              <p className="text-muted-foreground relative z-10 text-sm leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* Approach */}
            <div className="group border-border-soft bg-card/60 hover:bg-card/80 animate-in fade-in-up relative ml-4 overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-all delay-300 md:ml-8">
              <div className="bg-primary/5 absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-bl-full opacity-50" />
              <h3 className="text-foreground mb-3 flex items-center gap-2 text-lg font-bold">
                <span className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full text-xs">
                  2
                </span>
                L'Approche
              </h3>
              <p className="text-muted-foreground relative z-10 text-sm leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>

            {/* Result */}
            <div className="border-primary/20 bg-primary/5 animate-in fade-in-up relative overflow-hidden rounded-2xl border p-8 shadow-md backdrop-blur-sm delay-400">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary mt-1 h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-foreground mb-2 text-xl font-bold">Le Résultat</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed font-medium">
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
