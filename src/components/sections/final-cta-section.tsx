"use client";

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

const features = [
  "Confidentialité assurée",
  "Réponse sous 24h",
  "Premier entretien offert"
];

const FinalCtaSection = () => {
  return (
    <section className="gradient-primary py-24 relative overflow-hidden">
      {/* Animated sparkles and blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-20 w-32 h-32"
        >
          <Sparkles className="w-full h-full text-white/10" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-40 h-40"
        >
          <Sparkles className="w-full h-full text-white/10" />
        </motion.div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center text-white lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm animate-pulse-soft"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
          <span className="text-sm font-medium">Commencez votre parcours dès aujourd'hui</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-tight md:text-6xl mb-6"
        >
          Votre bien-être commence <br className="block md:hidden" />
          <span className="relative inline-block">
            aujourd'hui
            <span className="absolute -bottom-2 left-0 right-0 h-2">
              <UnderlineSvg />
            </span>
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
        >
          Ne restez pas seul(e) face à vos difficultés. Ensemble, construisons votre chemin vers l'équilibre et l'épanouissement.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              Prendre contact maintenant
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Découvrir mes services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-y-4 gap-x-8 text-sm font-medium md:flex-row"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-2"
            >
              <FeatureBullet />
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;