"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Heart, Star, Shield, Clock } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const floatingBadges = [
  { icon: Star, label: "TCC & EFT", position: "top-20 -left-4 lg:left-8" },
  { icon: Shield, label: "Confidentiel", position: "bottom-32 -left-4 lg:left-4" },
  { icon: Clock, label: "RDV 24h", position: "top-40 -right-4 lg:right-8" },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, shouldReduceMotion ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 1.05]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[100svh] overflow-hidden gradient-mesh noise-overlay"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -40, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="orb orb-primary w-[500px] h-[500px] top-0 left-1/4"
            />
            <motion.div
              animate={{
                x: [0, -60, 0],
                y: [0, 80, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="orb orb-teal w-[600px] h-[600px] bottom-0 right-1/4"
            />
            <motion.div
              animate={{
                x: [0, 40, 0],
                y: [0, -60, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="orb orb-lavender w-[400px] h-[400px] top-1/3 right-0"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="orb orb-rose w-[300px] h-[300px] bottom-1/4 left-0"
            />
          </>
        )}
      </div>

      <div className="container relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100svh-12rem)]">
          <motion.div 
            style={shouldReduceMotion ? {} : { y, opacity }}
            className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="badge-premium mb-6 inline-flex"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Bienvenue dans votre espace de sérénité</span>
            </motion.div>

            <motion.h1 
              id="hero-heading"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-foreground mb-4 text-balance"
            >
              Audrey Castets
            </motion.h1>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" aria-hidden="true" />
              <p className="text-xl sm:text-2xl font-medium text-primary font-display">
                Psychologue du Travail & TCC
              </p>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" aria-hidden="true" />
            </motion.div>

            <motion.p 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Spécialisée en <strong className="text-foreground">Thérapies Cognitivo-Comportementales</strong> et <strong className="text-foreground">EFT</strong>, 
              je vous accompagne avec bienveillance vers un équilibre durable entre vie personnelle et professionnelle.
            </motion.p>

            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/contact" className="btn-premium group w-full sm:w-auto">
                <span>Prendre rendez-vous</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn-secondary-premium w-full sm:w-auto">
                Découvrir mes services
              </Link>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full gradient-soft border-2 border-white flex items-center justify-center text-xs font-semibold text-primary shadow-sm"
                  >
                    {["S", "M", "T", "J"][i]}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">200+</span> patients accompagnés
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            style={shouldReduceMotion ? {} : { scale }}
            className="lg:col-span-6 relative order-1 lg:order-2"
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 gradient-soft rounded-[2.5rem] blur-2xl opacity-60" aria-hidden="true" />
              
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/50">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c38f5070-6b82-4e11-be55-a586c48aeec5-psychologue-portfolio-nextjs-supaba-vercel-app/assets/images/next-885887-next-992762-audrey-castets-BNy4GS-r-1.jpg?"
                  alt="Audrey Castets - Psychologue du Travail spécialisée TCC et EFT"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" aria-hidden="true" />
              </div>

              {!shouldReduceMotion && floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                  className={`absolute ${badge.position} hidden sm:block`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                    className="glass-effect-strong px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2"
                  >
                    <div className="icon-wrapper-primary w-8 h-8 rounded-lg">
                      <badge.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">{badge.label}</span>
                  </motion.div>
                </motion.div>
              ))}

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -bottom-4 -right-4 sm:bottom-8 sm:-right-8 glass-effect-strong px-5 py-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl icon-wrapper-primary flex items-center justify-center">
                      <Heart className="w-7 h-7 fill-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-teal rounded-full border-2 border-white animate-pulse" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground" aria-label="Plus de 5 années d'expérience">+5 ans</p>
                    <p className="text-sm text-muted-foreground">d'expérience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg className="w-full h-20 sm:h-28 text-background" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
