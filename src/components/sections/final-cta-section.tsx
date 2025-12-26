"use client";

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const features = [
  "Confidentialité assurée",
  "Réponse sous 24h",
  "Premier entretien offert"
];

export default function FinalCtaSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-spacing-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" aria-hidden="true" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-20 w-32 h-32 opacity-10"
        >
          <Sparkles className="w-full h-full text-white" />
        </motion.div>
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-40 h-40 opacity-10"
        >
          <Sparkles className="w-full h-full text-white" />
        </motion.div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 text-center text-white">
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </motion.div>
          <span className="text-sm font-medium">Commencez votre parcours dès aujourd'hui</span>
        </motion.div>

        <motion.h2 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight mb-6 text-white"
        >
          Votre bien-être commence{' '}
          <span className="relative inline-block">
            aujourd'hui
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 rounded-full" aria-hidden="true" />
          </span>
        </motion.h2>

        <motion.p 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90"
        >
          Ne restez pas seul(e) face à vos difficultés. Ensemble, construisons votre chemin vers l'équilibre et l'épanouissement.
        </motion.p>

        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Prendre contact maintenant
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            href="/services"
            className="group inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-1"
          >
            Découvrir mes services
          </Link>
        </motion.div>

        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center" aria-hidden="true">
                <Check className="w-3 h-3" />
              </div>
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
