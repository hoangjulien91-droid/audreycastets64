"use client";

import { FolderOpen, ArrowRight, User, CheckCircle2 } from "lucide-react";

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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-bold tracking-wider text-orange-600 uppercase">
              <FolderOpen className="h-3 w-3" />
              Cas Concret
            </div>
            <h2 className="font-display text-foreground mb-6 text-3xl leading-tight font-bold md:text-5xl">
              {caseStudy.title}
            </h2>
            <p className="text-muted-foreground mb-8 border-l-4 border-orange-200 pl-4 text-lg italic">
              "{caseStudy.context}"
            </p>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 md:aspect-video">
              <div className="absolute inset-0 bg-linear-to-br from-orange-50 to-white opacity-80" />
              {/* Abstract Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 animate-pulse rounded-full bg-orange-200/50 blur-3xl" />
                <div className="relative z-10 flex flex-col items-center rounded-2xl border border-orange-100 bg-white p-6 shadow-xl">
                  <User className="mb-2 h-12 w-12 text-orange-400" />
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-orange-900">
                    Anonyme
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="space-y-8">
            {/* Problem */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-red-50 bg-white p-6 shadow-sm transition-colors hover:border-red-100 animate-in fade-in-up delay-200"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-bl-full bg-red-50 opacity-50" />
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-red-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs">
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
              className="group relative ml-4 overflow-hidden rounded-2xl border border-blue-50 bg-white p-6 shadow-sm transition-colors hover:border-blue-100 md:ml-8 animate-in fade-in-up delay-300"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-bl-full bg-blue-50 opacity-50" />
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-blue-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs">
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
              className="relative overflow-hidden rounded-2xl border border-green-100 bg-green-50/50 p-8 shadow-md animate-in fade-in-up delay-400"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-8 w-8 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-green-900">Le Résultat</h3>
                  <p className="text-sm leading-relaxed font-medium text-green-800">
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
