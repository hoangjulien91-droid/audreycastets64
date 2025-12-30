"use client";

import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { Sparkles, ArrowRight } from "lucide-react";

export function AnimatedFinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#FDFCFB] to-[#F9F7F4]/50" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="from-primary/5 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br via-violet-500/5 to-rose-400/5 opacity-60 blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="animate-in fade-in-up mx-auto max-w-4xl text-center">
          <div className="card-premium relative overflow-hidden p-10 md:p-14">
            {/* Gradient Border Glow */}
            <div className="from-primary/10 via-violet/10 to-rose/10 pointer-events-none absolute inset-0 bg-gradient-to-r opacity-50" />

            <div className="relative z-10">
              <div className="animate-in zoom-in mx-auto mb-8 flex h-16 w-16 transform items-center justify-center rounded-2xl border border-white bg-linear-to-br from-[#F8F5F7] to-[#FFFFFF] shadow-sm transition-transform duration-500 hover:scale-110 [animation-delay:200ms]">
                <Sparkles className="text-primary h-8 w-8" />
              </div>

              <h2 className="font-display animate-in fade-in-up mb-6 text-4xl leading-tight font-bold md:text-5xl [animation-delay:300ms]">
                Prêt(e) à démarrer <br className="hidden md:block" />
                <span className="gradient-text">votre accompagnement ?</span>
              </h2>

              <p className="text-muted-foreground animate-in fade-in-up mx-auto mb-10 max-w-2xl text-xl leading-relaxed [animation-delay:400ms]">
                Prenons contact pour échanger sur vos besoins et trouver ensemble la solution la
                plus adaptée à votre situation.
              </p>

              <div className="animate-in fade-in-up flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:500ms]">
                <Link href="/contact" className="group w-full sm:w-auto">
                  <div className="btn-premium w-full min-w-[200px] sm:w-auto transition-transform duration-300 group-hover:scale-105 active:scale-95">
                    Prendre contact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </Link>

                <Link href="/mon-approche" className="group w-full sm:w-auto">
                  <div className="btn-secondary-premium w-full min-w-[200px] sm:w-auto transition-transform duration-300 group-hover:scale-105 active:scale-95">
                    Découvrir mon approche
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
