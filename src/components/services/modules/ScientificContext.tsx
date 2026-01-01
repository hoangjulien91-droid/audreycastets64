"use client";

import { BookOpen, GraduationCap, Microscope } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

interface ScientificContextProps {
  scientificBasis: {
    title: string;
    introduction: string;
    points: { label: string; description: string }[];
    conclusion: string;
  };
}

export function ScientificContext({ scientificBasis }: ScientificContextProps) {
  if (!scientificBasis) return null;

  return (
    <section className="border-border/40 bg-background relative overflow-hidden border-y py-16 md:py-24">
      {/* Abstract Background Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="from-primary/10 absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 transform rounded-full bg-linear-to-b to-transparent blur-3xl" />
        <div className="from-violet/10 absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 transform rounded-full bg-linear-to-t to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="animate-in fade-in-up mx-auto max-w-4xl">
          {/* Header Badge */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="border-primary/20 bg-primary/5 text-primary flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase">
              <Microscope className="h-3 w-3" />
              Fondements Scientifiques
            </span>
          </div>

          <SectionHeader align="center" title={scientificBasis.title} className="mb-8" />

          <div className="glass-effect relative rounded-3xl border border-white/60 p-8 shadow-lg backdrop-blur-md md:p-12">
            <div className="border-border absolute top-0 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border bg-white shadow-md">
              <BookOpen className="text-primary h-8 w-8" />
            </div>

            <div className="text-muted-foreground mt-6 mb-10 text-center text-lg leading-relaxed">
              {scientificBasis.introduction}
            </div>

            <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {scientificBasis.points.map((point, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-left flex items-start gap-4 rounded-2xl border border-white/40 bg-white/50 p-4 transition-all duration-300 hover:bg-white hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 text-sm font-bold">{point.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-primary/10 flex items-start gap-4 rounded-2xl border p-6">
              <GraduationCap className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <p className="text-foreground/80 font-serif text-sm italic">
                "{scientificBasis.conclusion}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
