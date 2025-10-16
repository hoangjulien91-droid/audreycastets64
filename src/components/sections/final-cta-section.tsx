import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

const UnderlineSvg = () => (
  <svg className="h-full w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
    <path
      d="M0.5,4.5 C25,12 75,-4 99.5,4.5"
      stroke="white"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    ></path>
  </svg>
);

const FeatureBullet = () => (
  <svg width="4" height="4" className="fill-current text-white/50">
    <circle cx="2" cy="2" r="2" />
  </svg>
);

const FinalCtaSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#EB6FA4] to-[#EC86A8] py-24">
      <div className="container mx-auto px-6 text-center text-white lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Commencez votre parcours dès aujourd'hui</span>
        </div>
        <h2 className="font-display text-5xl font-bold leading-tight md:text-6xl mb-6">
          Votre bien-être commence <br className="block md:hidden" />
          <span className="relative inline-block">
            aujourd'hui
            <span className="absolute -bottom-2 left-0 right-0 h-2">
              <UnderlineSvg />
            </span>
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          Ne restez pas seul(e) face à vos difficultés. Ensemble, construisons votre chemin vers l'équilibre et l'épanouissement.
        </p>
        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex transform items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Prendre contact maintenant
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex transform items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary"
          >
            Découvrir mes services
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4 gap-x-8 text-sm font-medium md:flex-row">
          <div className="flex items-center gap-2">
            <FeatureBullet />
            Confidentialité assurée
          </div>
          <div className="flex items-center gap-2">
            <FeatureBullet />
            Réponse sous 24h
          </div>
          <div className="flex items-center gap-2">
            <FeatureBullet />
            Premier entretien offert
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;