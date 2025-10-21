"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            style={{ y, opacity }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Bienvenue dans votre espace de bien-être</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-foreground mb-6 leading-tight"
            >
              Audrey{" "}
              <span className="gradient-text">Castets</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <p className="text-xl sm:text-2xl font-semibold text-primary">
                Psychologue du Travail et TCC
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Spécialisée en TCC et EFT, je vous accompagne avec bienveillance dans votre parcours personnel et professionnel vers un bien-être durable.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button asChild size="lg" className="w-full sm:w-auto group shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:bg-primary/5">
                <Link href="/services">Découvrir mes services</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ scale }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c38f5070-6b82-4e11-be55-a586c48aeec5-psychologue-portfolio-nextjs-supaba-vercel-app/assets/images/next-885887-next-992762-audrey-castets-BNy4GS-r-1.jpg?"
                  alt="Audrey Castets - Psychologue du Travail"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-6 -right-6 glass-effect px-6 py-4 rounded-2xl shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+5</p>
                    <p className="text-sm text-muted-foreground">Années d'expérience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-background" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}