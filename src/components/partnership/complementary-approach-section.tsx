"use client";

import { Brain, Search, Users, FileText, Shield as ShieldIcon, Target } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export default function ComplementaryApproachSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            align="center"
            title={
              <>
                Notre Approche <span className="text-primary">Complémentaire</span>
              </>
            }
            subtitle="Une approche à 360° combinant soutien psychologique et investigation rigoureuse"
            className="mb-16"
          />

          {/* Schéma visuel de collaboration */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Psychologue du travail */}
            <div className="animate-in fade-in-up relative">
              <div className="from-primary/10 to-primary/5 border-primary/20 h-full rounded-3xl border-2 bg-linear-to-br p-8">
                <div className="bg-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-foreground mb-4 text-2xl font-bold">Psychologue du Travail</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Brain, text: "Évaluation psychologique" },
                    { icon: Users, text: "Accompagnement thérapeutique" },
                    { icon: Target, text: "Réinsertion professionnelle" },
                    { icon: ShieldIcon, text: "Prévention des RPS" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Détective victimologue */}
            <div className="animate-in fade-in-up relative [animation-delay:200ms]">
              <div className="from-accent-teal/10 to-accent-teal/5 border-accent-teal/20 h-full rounded-3xl border-2 bg-linear-to-br p-8">
                <div className="bg-accent-teal mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-foreground mb-4 text-2xl font-bold">Détective Victimologue</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Search, text: "Investigation factuelle" },
                    { icon: FileText, text: "Constitution de dossiers" },
                    { icon: Target, text: "Recherche de preuves" },
                    { icon: ShieldIcon, text: "Protection des victimes" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="text-accent-teal mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Synergie */}
          <div className="from-primary/5 via-accent/5 to-accent-teal/5 border-primary/10 animate-in fade-in-up rounded-2xl border bg-linear-to-r p-8 text-center [animation-delay:400ms]">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="text-muted-foreground text-2xl font-bold">+</div>
              <div className="bg-accent-teal flex h-12 w-12 items-center justify-center rounded-full">
                <Search className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-foreground mb-2 text-lg font-semibold">
              La Synergie au Service des Victimes
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Une approche à 360° combinant soutien psychologique et investigation rigoureuse pour
              une reconstruction complète
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
