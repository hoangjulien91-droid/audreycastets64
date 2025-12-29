"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const features = ["Confidentialité assurée", "Réponse sous 24h", "Premier entretien offert"];

export default function FinalCtaSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-spacing-lg relative overflow-hidden">
      <div className="bg-primary absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-20 h-32 w-32 opacity-10"
        >
          <Sparkles className="h-full w-full text-white" />
        </motion.div>
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotate: [360, 0],
                  scale: [1, 1.3, 1],
                }
          }
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 h-40 w-40 opacity-10"
        >
          <Sparkles className="h-full w-full text-white" />
        </motion.div>
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 container text-center text-white">
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
          className="font-display mb-6 text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl"
        >
          Votre bien-être commence{" "}
          <span className="relative inline-block">
            aujourd'hui
            <span
              className="absolute right-0 -bottom-2 left-0 h-1 rounded-full bg-white/40"
              aria-hidden="true"
            />
          </span>
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90"
        >
          Ne restez pas seul(e) face à vos difficultés. Ensemble, construisons votre chemin vers
          l'équilibre et l'épanouissement.
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
              <div
                className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
                aria-hidden="true"
              >
                <Check className="h-3 w-3" />
              </div>
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
