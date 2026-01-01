"use client";

import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { Heart, Users, CircleCheck, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function AnimatedServicesCards() {
  return (
    <section className="from-bg-soft to-background relative overflow-hidden bg-linear-to-br via-[var(--color-background)] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="bg-bg-soft absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="bg-bg-subtle absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <SectionHeader
          align="center"
          badge="Deux approches complémentaires"
          title={
            <>
              Choisissez l'accompagnement <span className="text-primary">qui vous correspond</span>
            </>
          }
          className="mb-12"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Card 1 */}
          <div className="group animate-in fade-in-up relative [animation-delay:200ms]">
            <div className="glass-effect border-border-soft/30 relative h-full overflow-hidden rounded-3xl border shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-primary h-2 w-full opacity-50"></div>
              <div className="p-8 md:p-10">
                <div className="relative mb-6">
                  <div className="bg-primary absolute inset-0 h-16 w-16 rounded-2xl opacity-20 blur-xl"></div>
                  <div className="bg-primary relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-display text-foreground group-hover:text-primary mb-4 text-2xl font-bold transition-colors md:text-3xl">
                  Pour les Particuliers
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Thérapie Cognitive et Comportementale (TCC) et EFT (Emotional Freedom Techniques)
                  pour vous accompagner dans vos difficultés personnelles et développer des
                  stratégies d'adaptation efficaces.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Thérapies Cognitivo-Comportementales (TCC)",
                    "Gestion du stress et de l'anxiété",
                    "EFT - Techniques de libération émotionnelle",
                    "Burn-out et épuisement professionnel",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="animate-in slide-in-left flex items-start gap-3"
                      style={{ animationDelay: `${i * 100 + 600}ms` }}
                    >
                      <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/mon-approche"
                  className="bg-primary hover:bg-primary-dark inline-flex w-full items-center justify-center rounded-2xl px-6 py-6 font-semibold text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group animate-in fade-in-up relative [animation-delay:400ms]">
            <div className="glass-effect border-border-soft/30 relative h-full overflow-hidden rounded-3xl border shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-primary/70 h-2 w-full opacity-50"></div>
              <div className="p-8 md:p-10">
                <div className="relative mb-6">
                  <div className="bg-primary/70 absolute inset-0 h-16 w-16 rounded-2xl opacity-20 blur-xl"></div>
                  <div className="bg-primary/70 relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-display text-foreground group-hover:text-primary mb-4 text-2xl font-bold transition-colors md:text-3xl">
                  Pour les Professionnels
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Expertise en psychologie du travail et ressources humaines pour accompagner les
                  organisations : prévention des RPS, recrutement, tests de personnalité et
                  amélioration du bien-être au travail.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Diagnostic des risques psychosociaux",
                    "Recrutement et tests SOSIE",
                    "Ateliers de prévention du stress",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="animate-in slide-in-left flex items-start gap-3"
                      style={{ animationDelay: `${i * 100 + 800}ms` }}
                    >
                      <CircleCheck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="border-primary text-primary hover:bg-primary/5 inline-flex w-full items-center justify-center rounded-2xl border-2 px-6 py-6 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Me contacter pour un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
