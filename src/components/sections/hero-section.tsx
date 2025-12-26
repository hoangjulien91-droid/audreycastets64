"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Heart, Star, Shield, Clock, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const features = [
  "Thérapies Cognitivo-Comportementales (TCC)",
  "Psychologie du Travail",
  "Technique de libération émotionnelle (EFT)",
];

const floatingBadges = [
  { icon: Star, label: "TCC & EFT", position: "top-16 -left-2 lg:left-4" },
  { icon: Shield, label: "Confidentiel", position: "bottom-36 -left-2 lg:left-0" },
  { icon: Clock, label: "RDV 24h", position: "top-32 -right-2 lg:right-4" },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, shouldReduceMotion ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 1.02]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-background via-warm-beige to-background"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />
        
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-[600px] h-[600px] top-0 left-1/4 rounded-full bg-gradient-to-br from-primary/[0.08] to-transparent blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -40, 0],
                y: [0, 50, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-[700px] h-[700px] bottom-0 right-1/4 rounded-full bg-gradient-to-tl from-accent-teal/[0.06] to-transparent blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-[400px] h-[400px] top-1/3 right-0 rounded-full bg-gradient-to-bl from-gold/[0.05] to-transparent blur-3xl"
            />
          </>
        )}
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,115,85,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,115,85,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100svh-14rem)]">
          <motion.div 
            style={shouldReduceMotion ? {} : { y, opacity }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/10 text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Votre espace de sérénité</span>
            </motion.div>

            <motion.h1 
              id="hero-heading"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-foreground mb-3 text-balance"
            >
              Audrey Castets
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl font-medium text-primary/80 font-display mb-6"
            >
              Psychologue du Travail
            </motion.p>

            <motion.p 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Je vous accompagne avec bienveillance vers un équilibre durable entre vie personnelle et professionnelle.
            </motion.p>

            <motion.ul
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-2.5 mb-10 items-center lg:items-start"
            >
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </motion.ul>

            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <Link 
                href="/contact" 
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Prendre rendez-vous</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link 
                href="/services" 
                className="flex items-center justify-center w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-border text-foreground font-medium hover:border-primary/30 hover:bg-muted/30 transition-all duration-300"
              >
                Découvrir mes services
              </Link>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <div className="flex -space-x-2.5">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-muted to-secondary border-2 border-white flex items-center justify-center text-xs font-semibold text-primary shadow-sm"
                    >
                      {["S", "M", "T", "J"][i]}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">200+</span> patients accompagnés
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            style={shouldReduceMotion ? {} : { scale }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-accent-teal/5 to-gold/5 rounded-[3rem] blur-3xl opacity-60" aria-hidden="true" />
              
              <div className="relative aspect-[4/5] max-w-sm sm:max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c38f5070-6b82-4e11-be55-a586c48aeec5-psychologue-portfolio-nextjs-supaba-vercel-app/assets/images/next-885887-next-992762-audrey-castets-BNy4GS-r-1.jpg?"
                  alt="Audrey Castets - Psychologue du Travail spécialisée TCC et EFT"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" aria-hidden="true" />
              </div>

              {!shouldReduceMotion && floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`absolute ${badge.position} hidden sm:block`}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/95 backdrop-blur-xl px-3.5 py-2 rounded-xl shadow-lg shadow-primary/5 border border-border/50 flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                      <badge.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-foreground whitespace-nowrap">{badge.label}</span>
                  </motion.div>
                </motion.div>
              ))}

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-3 -right-3 sm:bottom-6 sm:-right-6 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-xl shadow-xl shadow-primary/10 border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground" aria-label="Plus de 5 années d'expérience">+5 ans</p>
                    <p className="text-xs text-muted-foreground">d'expérience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg className="w-full h-16 sm:h-24 text-background" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
