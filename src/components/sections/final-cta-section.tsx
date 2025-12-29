"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { Sparkles, ArrowRight, Check } from "lucide-react";

const features = ["Confidentialité assurée", "Réponse sous 24h", "Premier entretien offert"];

export default function FinalCtaSection() {
  return (
    <section className="section-spacing-lg relative overflow-hidden">
      <div className="bg-primary absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 right-20 h-32 w-32 animate-[spin_25s_linear_infinite] opacity-10">
          <Sparkles className="h-full w-full text-white" />
        </div>
        <div className="absolute bottom-20 left-10 h-40 w-40 animate-[spin_30s_linear_infinite_reverse] opacity-10">
          <Sparkles className="h-full w-full text-white" />
        </div>
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 container text-center text-white">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm animate-in fade-in-up">
          <div className="animate-[spin_4s_linear_infinite]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </div>
          <span className="text-sm font-medium">Commencez votre parcours dès aujourd'hui</span>
        </div>

        <h2 className="font-display mb-6 text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl animate-in fade-in-up delay-100">
          Votre bien-être commence{" "}
          <span className="relative inline-block">
            aujourd'hui
            <span
              className="absolute right-0 -bottom-2 left-0 h-1 rounded-full bg-white/40"
              aria-hidden="true"
            />
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90 animate-in fade-in-up delay-200">
          Ne restez pas seul(e) face à vos difficultés. Ensemble, construisons votre chemin vers
          l'équilibre et l'épanouissement.
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row animate-in fade-in-up delay-300">
          <Link
            href="/contact"
            className="group text-primary inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Prendre contact maintenant
            <ArrowRight
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/services"
            className="group hover:text-primary inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Découvrir mes services
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium animate-in fade-in-up delay-400">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 animate-in slide-in-left"
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              <div
                className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
                aria-hidden="true"
              >
                <Check className="h-3 w-3" />
              </div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
