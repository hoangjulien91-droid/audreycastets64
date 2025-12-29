"use client";

import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Star,
  Shield,
  Clock,
  CheckCircle2,
  Award,
} from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from "next-view-transitions";
import { useRef } from "react";
import audreyHero from "@/assets/images/audrey-hero.jpg";

const features = [
  "Thérapies Cognitivo-Comportementales (TCC)",
  "Psychologie du Travail & Ressources Humaines",
  "Technique de libération émotionnelle (EFT)",
];

// Floating badges removed - conflicted with sticky mobile CTA

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
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
      <div className="bg-warm-rose/30 absolute inset-0" aria-hidden="true" />

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
              className="bg-primary/10 pointer-events-none absolute -top-20 left-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
              aria-hidden="true"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 30, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(139, 124, 179, 0.1)" }}
              aria-hidden="true"
            />
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(194, 123, 158, 0.08)" }}
              aria-hidden="true"
            />
          </>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(157,107,140,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(157,107,140,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
        <div className="grid min-h-[calc(100svh-14rem)] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            style={shouldReduceMotion ? {} : { y, opacity }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-primary/10 border-primary/10 text-primary-dark mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>Votre espace de sérénité</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-foreground mb-6 text-balance"
            >
              Audrey <span className="text-primary-dark">Castets</span>
              <span className="text-primary-dark font-display mt-2 block text-xl font-bold sm:text-2xl">
                Psychologue du Travail et TCC
              </span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground mx-auto mb-8 max-w-xl text-base leading-relaxed sm:text-lg lg:mx-0"
            >
              Je vous accompagne avec bienveillance et professionnalisme vers un équilibre durable
              entre vie personnelle et professionnelle.
            </motion.p>

            <motion.ul
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 flex flex-col items-center gap-3 lg:items-start"
            >
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-foreground/80 flex items-center gap-3 text-sm sm:text-base"
                >
                  <div className="bg-primary/10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 className="text-primary-dark h-3.5 w-3.5" />
                  </div>
                  {feature}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                href="/contact"
                className="group bg-primary shadow-primary/25 hover:shadow-primary/30 relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 font-semibold text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:w-auto"
              >
                <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]" />
                <span className="relative">Prendre rendez-vous</span>
                <ArrowRight
                  className="relative h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/services"
                className="group border-primary/15 text-foreground hover:border-primary/30 shadow-primary/5 flex w-full items-center justify-center rounded-full border bg-white/80 px-8 py-4 font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white sm:w-auto"
              >
                Découvrir mes services
              </Link>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="border-primary/10 mt-12 border-t pt-8"
            >
              <div className="flex items-center justify-center gap-8 lg:justify-start">
                <div className="flex -space-x-3">
                  <div className="flex -space-x-3">
                    {/* Badges removed as per user request (confusing UI) */}
                  </div>
                </div>
                <div className="text-left">
                  <div className="mb-1 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-primary text-primary h-4 w-4"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <span className="text-foreground font-bold">200+</span> patients accompagnés
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
              <div
                className="bg-primary/10 absolute -inset-4 rounded-[3rem] opacity-70 blur-3xl sm:-inset-8"
                aria-hidden="true"
              />

              <div className="relative mx-auto aspect-[4/5] max-w-sm sm:max-w-md lg:max-w-md">
                {/* Soft ambient glow behind the image */}
                <div
                  className="from-primary/20 via-rose/20 to-violet/20 absolute -inset-4 rounded-[3rem] bg-gradient-to-tr opacity-60 blur-2xl"
                  aria-hidden="true"
                />

                {/* Main container with gradient border */}
                <div className="shadow-primary/10 absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/80 via-white/20 to-white/60 p-[3px] shadow-2xl ring-1 ring-white/40">
                  <div className="relative isolate h-full w-full overflow-hidden rounded-[2.3rem] bg-white/50 backdrop-blur-sm">
                    <Image
                      src={audreyHero}
                      alt="Audrey Castets - Psychologue du Travail spécialisée TCC et EFT"
                      fill
                      className="ease-out-expo object-cover object-top transition-transform duration-700 hover:scale-105"
                      priority
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                    {/* Inner grain/overlay for texture */}
                    <div
                      className="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-white/10 mix-blend-overlay"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[2.3rem] ring-1 ring-black/5 ring-inset"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Floating badges removed - conflicted with sticky mobile CTA */}

                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="shadow-primary/15 border-primary/10 absolute -right-4 -bottom-4 rounded-2xl border bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-right-8 sm:bottom-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary shadow-primary/20 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg">
                      <Heart className="h-7 w-7 fill-white text-white" />
                    </div>
                    <div>
                      <p
                        className="text-foreground text-2xl font-bold"
                        aria-label="Plus de 5 années d'expérience"
                      >
                        +5 ans
                      </p>
                      <p className="text-muted-foreground text-sm font-medium">d'expérience</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0" aria-hidden="true">
        <svg
          className="text-background h-20 w-full sm:h-28"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C360,100 1080,20 1440,60 L1440,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
