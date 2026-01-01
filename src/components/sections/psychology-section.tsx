"use client";

import React from "react";
import { Target, MessageCircle, Shield, Brain } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const cards = [
  {
    icon: Target,
    title: "Pour qui ?",
    content:
      "L'accompagnement a pour but d'exprimer ce qui ne va pas, de prendre du recul, et d'identifier des leviers avec des exercices pratiques. L'objectif est de vous donner des clefs pour appréhender les situations de crise ou de tension.",
    bgColorVar: "var(--color-primary)",
  },
  {
    icon: MessageCircle,
    title: "Pourquoi consulter ?",
    content:
      "Il est parfois difficile de comprendre certaines situations qui peuvent provoquer perte de sens, conflits ou isolement professionnel. Les entretiens interrogent le rapport à son travail et questionnent l'organisation.",
    bgColorVar: "var(--color-violet)",
  },
];

export default function PsychologySection() {
  return (
    <section className="section-spacing bg-warm-rose/30 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-primary top-0 right-0 h-[500px] w-[500px] opacity-15" />
        <div className="orb orb-violet bottom-0 left-0 h-[400px] w-[400px] opacity-10" />
      </div>

      <div className="relative z-10 container">
        <SectionHeader
          align="center"
          badge="Psychologie du Travail"
          title={
            <>
              La Psychologie du <span className="text-primary">Travail</span>
            </>
          }
          subtitle="Pour toutes les personnes qui s'interrogent sur leur travail, leur recherche d'emploi ou leur avenir professionnel, quand une situation de malaise voire de souffrance apparaît."
          className="mb-14"
        />

        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group animate-in ${index === 0 ? "slide-in-left" : "slide-in-right"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-premium relative h-full overflow-hidden p-8">
                <div
                  className="absolute top-0 right-0 left-0 h-1"
                  style={{ backgroundColor: card.bgColorVar }}
                  aria-hidden="true"
                />

                <div className="relative mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-xl shadow-lg"
                    style={{ backgroundColor: card.bgColorVar }}
                  >
                    <card.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-foreground font-display mb-4 text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{card.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-in fade-in-up mx-auto max-w-3xl [animation-delay:400ms]">
          <div className="card-premium relative overflow-hidden p-8 text-center">
            <div
              className="absolute top-0 right-0 left-0 h-1"
              style={{ backgroundColor: "var(--color-rose)" }}
              aria-hidden="true"
            />

            <div className="relative mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <div
                className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-xl shadow-lg"
                style={{ backgroundColor: "var(--color-rose)" }}
              >
                <Shield className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
            </div>

            <h3 className="text-foreground font-display mb-4 text-xl font-semibold">
              Éthique et Déontologie
            </h3>

            <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed">
              Dans ce cadre, le psychologue du travail veille à préserver la{" "}
              <strong className="text-foreground">neutralité</strong>,{" "}
              <strong className="text-foreground">confidentialité</strong> des échanges et
              l'anonymat des personnes reçues, conformément au code de déontologie des psychologues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
