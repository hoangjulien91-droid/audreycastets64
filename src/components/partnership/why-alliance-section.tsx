"use client";

import { CheckCircle, Clock, FileCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export default function WhyAllianceSection() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Cohérence entre soutien émotionnel et démarches factuelles",
      description:
        "Une prise en charge harmonisée qui prend en compte tous les aspects de votre situation",
    },
    {
      icon: Clock,
      title: "Gain de temps et d'efficacité",
      description:
        "Coordination optimale entre les différentes expertises pour avancer plus rapidement",
    },
    {
      icon: FileCheck,
      title: "Dossiers solidement construits",
      description: "Des preuves tangibles associées à une évaluation psychologique rigoureuse",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          align="center"
          title={
            <>
              Pourquoi Cette <span className="text-primary">Alliance ?</span>
            </>
          }
          subtitle="Des avantages concrets pour les victimes"
          className="mb-16"
        />

        <div className="mx-auto max-w-5xl">
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="to-muted/30 border-border hover:border-primary/30 animate-in fade-in-up rounded-2xl border bg-linear-to-br from-white p-6 transition-all duration-300 hover:shadow-lg sm:p-8"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <advantage.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-3 text-lg font-bold sm:text-xl">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>

          {/* Citation en exergue */}
          <div className="from-primary/5 via-accent/5 to-accent-teal/5 border-primary animate-in fade-in-up rounded-2xl border-l-4 bg-linear-to-r p-8 sm:p-10 [animation-delay:600ms]">
            <div className="flex items-start gap-4">
              <div className="text-primary/20 hidden font-serif text-6xl leading-none sm:block">
                "
              </div>
              <div>
                <p className="text-foreground mb-4 text-lg font-medium italic sm:text-xl">
                  L'alliance interdisciplinaire permet une prise en charge complète qui respecte la
                  complexité de chaque situation. Soutien psychologique et investigation factuelle
                  se renforcent mutuellement pour offrir aux victimes les meilleures chances de
                  reconstruction et de reconnaissance de leurs droits.
                </p>
                <div className="text-muted-foreground flex items-center gap-4 text-sm">
                  <div className="bg-primary h-0.5 w-12" />
                  <span className="font-semibold">Approche interdisciplinaire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
