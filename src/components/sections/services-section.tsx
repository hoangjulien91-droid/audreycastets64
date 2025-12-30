"use client";

import { ArrowRight, CircleCheck, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "next-view-transitions";
import { SectionHeader } from "@/components/ui/section-header";
import { useHaptics } from "@/hooks/use-haptics";

const services = [
  {
    id: "particuliers",
    icon: Heart,
    title: "Pour les Particuliers",
    subtitle: "Accompagnement thérapeutique personnalisé",
    description:
      "Thérapie Cognitive et Comportementale (TCC) et EFT pour vous accompagner dans vos difficultés personnelles et développer des stratégies d'adaptation efficaces.",
    features: [
      "Thérapies Cognitivo-Comportementales (TCC)",
      "Gestion du stress et de l'anxiété",
      "EFT - Techniques de libération émotionnelle",
      "Burn-out et épuisement professionnel",
      "Dépression et troubles de l'humeur",
      "Estime et confiance en soi",
      "Bilan de compétences",
    ],
    bgColor: "var(--color-accent-violet)",
    bgColorLight: "var(--color-accent-violet-light)",
    checkColor: "var(--color-accent-violet-dark)",
    link: "/mon-approche",
    linkText: "Découvrir mon approche",
  },
  {
    id: "professionnels",
    icon: Users,
    title: "Pour les Professionnels",
    subtitle: "Expertise RH et bien-être au travail",
    description:
      "Expertise en psychologie du travail et ressources humaines pour accompagner les organisations : prévention des RPS, recrutement, et amélioration du bien-être au travail.",
    features: [
      "Diagnostic des risques psychosociaux",
      "Recrutement et tests SOSIE",
      "Ateliers de prévention du stress",
      "Soutien psychologique individuel et collectif",
    ],
    bgColor: "var(--color-accent-violet-dark)",
    bgColorLight: "var(--color-bg-soft)",
    checkColor: "var(--color-accent-violet-dark)",
    link: "/services#accompagnement-professionnels",
    linkText: "Voir les services entreprise",
  },
];

export default function ServicesSection() {
  const { trigger } = useHaptics();

  return (
    <section id="services" className="section-spacing-lg bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-primary -top-40 -right-40 h-[600px] w-[600px] opacity-30" />
        <div className="orb orb-violet -bottom-40 -left-40 h-[500px] w-[500px] opacity-25" />
      </div>

      <div className="relative z-10 container">
        <SectionHeader
          align="center"
          badge="Services"
          title={
            <>
              Mes <span className="text-primary">Services</span>
            </>
          }
          subtitle="Un accompagnement professionnel adapté à vos besoins, que vous soyez particulier ou professionnel."
          className="mb-16 lg:mb-20"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative animate-in fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="absolute inset-0 rounded-[2rem] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundColor: service.bgColorLight }}
                aria-hidden="true"
              />

              <div className="card-premium relative h-full overflow-hidden p-8 lg:p-10">
                <div
                  className="absolute top-0 right-0 left-0 h-1 opacity-80"
                  style={{ backgroundColor: service.bgColor }}
                  aria-hidden="true"
                />

                <div className="mb-6 flex items-start gap-5">
                  <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <div
                      className="relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                      style={{ backgroundColor: service.bgColor }}
                    >
                      <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-foreground group-hover:text-primary font-display mb-1 text-xl font-semibold transition-colors lg:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

                <ul className="mb-10 space-y-3" role="list">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 animate-in slide-in-left"
                      style={{ animationDelay: `${idx * 50 + 300}ms` }}
                    >
                      <CircleCheck
                        className="mt-0.5 h-5 w-5 flex-shrink-0"
                        style={{ color: service.checkColor }}
                        aria-hidden="true"
                      />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  onClick={() => trigger("medium")}
                  className="group/btn bg-primary inline-flex w-full items-center justify-center rounded-xl px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: service.bgColor }}
                >
                  {service.linkText}
                  <ArrowRight
                    className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
