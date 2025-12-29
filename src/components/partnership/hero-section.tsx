"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, Shield } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function PartnershipHeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      className="relative min-h-[70vh] overflow-hidden bg-linear-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#4a7396]"
      aria-labelledby="partnership-heading"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -50, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl"
            />
          </>
        )}
      </div>

      <div className="relative z-10 container py-24 sm:py-32 lg:py-40">
        <nav className="mb-8" aria-label="Fil d'Ariane">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Partenariat" }]} />
        </nav>

        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            {...animationProps}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <Heart className="h-4 w-4 text-white" aria-hidden="true" />
            <Shield className="h-4 w-4 text-white" aria-hidden="true" />
            <span className="text-sm font-medium text-white">Accompagnement Global</span>
          </motion.div>

          <motion.h1
            id="partnership-heading"
            {...(shouldReduceMotion
              ? {}
              : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } })}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="font-display mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Partenariat Interdisciplinaire
          </motion.h1>

          <motion.h2
            {...(shouldReduceMotion
              ? {}
              : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
            className="mb-8 text-xl leading-relaxed font-medium text-white/90 sm:text-2xl"
          >
            Accompagnement Global des Victimes
          </motion.h2>

          <motion.p
            {...(shouldReduceMotion
              ? {}
              : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.6,
            }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80"
          >
            Quand la psychologie du travail rencontre l'investigation victimologique pour une prise
            en charge complète et rigoureuse
          </motion.p>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0" aria-hidden="true">
        <svg
          className="text-background h-16 w-full sm:h-24"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
