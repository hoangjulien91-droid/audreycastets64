"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Heart, Star, Shield, Clock, CheckCircle2, Award } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from 'next-view-transitions';
import { useRef } from "react";
import audreyHero from "@/assets/images/audrey-hero.jpg";

const features = [
  "Thérapies Cognitivo-Comportementales (TCC)",
  "Psychologie du Travail & Ressources Humaines",
  "Technique de libération émotionnelle (EFT)",
];

const floatingBadges = [
  { icon: Award, label: "Certifiée TCC", position: "top-12 -left-4 lg:left-0", delay: 0.8 },
  { icon: Shield, label: "100% Confidentiel", position: "bottom-32 -left-6 lg:-left-4", delay: 0.9 },
  { icon: Clock, label: "RDV sous 48h", position: "top-28 -right-4 lg:right-0", delay: 1 },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, shouldReduceMotion ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 1.02]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[100svh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-warm-rose/30" aria-hidden="true" />
      
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[500px] h-[500px] -top-20 left-1/4 rounded-full bg-primary/10 blur-3xl"
            />
<motion.div
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[600px] h-[600px] bottom-0 right-1/4 rounded-full blur-3xl"
                style={{ backgroundColor: 'rgba(139, 124, 179, 0.1)' }}
              />
              <motion.div
                animate={{
                  x: [0, 20, 0],
                  y: [0, -30, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[400px] h-[400px] top-1/3 right-0 rounded-full blur-3xl"
                style={{ backgroundColor: 'rgba(194, 123, 158, 0.08)' }}
              />
          </>
        )}
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(157,107,140,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(157,107,140,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100svh-14rem)]">
          <motion.div 
            style={shouldReduceMotion ? {} : { y, opacity }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
<motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/10 text-primary text-sm font-medium mb-8"
              >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Votre espace de sérénité</span>
            </motion.div>

            <motion.h1 
              id="hero-heading"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-foreground mb-4 text-balance"
            >
              Audrey{" "}
              <span className="text-primary">Castets</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl font-medium text-primary/90 font-display mb-6"
            >
              Psychologue du Travail
            </motion.p>

            <motion.p 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Je vous accompagne avec bienveillance et professionnalisme vers un équilibre durable entre vie personnelle et professionnelle.
            </motion.p>

            <motion.ul
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-3 mb-10 items-center lg:items-start"
            >
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </motion.ul>

            <motion.div 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
<Link 
                  href="/contact" 
                  className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Prendre rendez-vous</span>
                <ArrowRight className="w-4 h-4 relative transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link 
                href="/services" 
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-primary/15 text-foreground font-semibold hover:border-primary/30 hover:bg-white transition-all duration-300 shadow-lg shadow-primary/5"
              >
                Découvrir mes services
              </Link>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-primary/10"
            >
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
<div
                        key={i}
                        className="w-10 h-10 rounded-full bg-primary/15 border-2 border-white flex items-center justify-center text-xs font-semibold text-primary shadow-md"
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
                    <span className="font-bold text-foreground">200+</span> patients accompagnés
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
              <div className="absolute -inset-4 sm:-inset-8 bg-primary/10 rounded-[3rem] blur-3xl opacity-70" aria-hidden="true" />
              
              <div className="relative aspect-[4/5] max-w-sm sm:max-w-md mx-auto lg:max-w-md">
                {/* Soft ambient glow behind the image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-rose/20 to-violet/20 rounded-[3rem] blur-2xl opacity-60" aria-hidden="true" />
                
                {/* Main container with gradient border */}
                <div className="absolute inset-0 rounded-[2.5rem] p-[3px] bg-gradient-to-br from-white/80 via-white/20 to-white/60 shadow-2xl shadow-primary/10 ring-1 ring-white/40">
                  <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-white/50 backdrop-blur-sm relative isolate">
                    <Image
                      src={audreyHero}
                      alt="Audrey Castets - Psychologue du Travail spécialisée TCC et EFT"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out-expo"
                      priority
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                    {/* Inner grain/overlay for texture */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-white/10 mix-blend-overlay pointer-events-none" aria-hidden="true" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.3rem] pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                {!shouldReduceMotion && floatingBadges.map((badge) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: badge.delay }}
                    className={`absolute ${badge.position} hidden sm:block`}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-white/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl shadow-primary/10 border border-primary/10 flex items-center gap-2.5"
                    >
                      <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                        <badge.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-foreground whitespace-nowrap">{badge.label}</span>
                    </motion.div>
                  </motion.div>
                ))}

                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-4 -right-4 sm:bottom-8 sm:-right-8 bg-white/95 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-2xl shadow-primary/15 border border-primary/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Heart className="w-7 h-7 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground" aria-label="Plus de 5 années d'expérience">+5 ans</p>
                      <p className="text-sm text-muted-foreground font-medium">d'expérience</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg className="w-full h-20 sm:h-28 text-background" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C360,100 1080,20 1440,60 L1440,100 L0,100 Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
