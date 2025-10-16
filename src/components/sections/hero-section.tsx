"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } },
};

export default function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left">
            <motion.p className="text-base font-semibold text-[var(--color-accent-link)] tracking-wider" variants={itemVariants}>
              Audrey Castets - Psychologue Clinicienne
            </motion.p>
            <motion.h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-foreground" variants={itemVariants}>
              Un espace pour vous, une écoute pour avancer
            </motion.h1>
            <motion.p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto lg:mx-0" variants={itemVariants}>
              Je vous accompagne avec bienveillance dans les moments clés de votre vie. Ensemble, explorons les chemins vers un mieux-être durable.
            </motion.p>
            <motion.div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" variants={itemVariants}>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/mon-approche">Découvrir mon approche</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div className="lg:col-span-5 xl:col-span-6 h-80 lg:h-full" variants={imageVariants}>
            <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a22d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Un espace de thérapie serein et accueillant"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}