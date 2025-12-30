"use client";

import { AlertTriangle, HeartCrack, Scale, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export default function InterventionDomainsSection() {
  const domains = [
    {
      icon: AlertTriangle,
      title: "Harcèlement au travail",
      description: "Moral et sexuel",
      color: "primary",
    },
    {
      icon: HeartCrack,
      title: "Violences conjugales et familiales",
      description: "Accompagnement et protection",
      color: "accent-teal",
    },
    {
      icon: Scale,
      title: "Discrimination et rupture abusive",
      description: "Constitution de dossiers solides",
      color: "primary",
    },
    {
      icon: Briefcase,
      title: "Accidents du travail avec préjudice",
      description: "Évaluation et expertise",
      color: "accent-teal",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          align="center"
          title={
            <>
              Domaines d'Intervention <span className="text-primary">Communs</span>
            </>
          }
          subtitle="Une expertise partagée pour une prise en charge globale et efficace"
          className="mb-16"
        />

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="group border-border hover:border-primary/30 animate-in fade-in-up rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                  domain.color === "primary"
                    ? "bg-primary/10 group-hover:bg-primary/20"
                    : "bg-accent-teal/10 group-hover:bg-accent-teal/20"
                } transition-colors duration-300`}
              >
                <domain.icon
                  className={`h-7 w-7 ${
                    domain.color === "primary" ? "text-primary" : "text-accent-teal"
                  }`}
                />
              </div>
              <h3 className="text-foreground mb-2 text-lg font-bold">{domain.title}</h3>
              <p className="text-muted-foreground text-sm">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
