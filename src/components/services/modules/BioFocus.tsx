"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";

interface BioFocusProps {
  text: string;
}

export function BioFocus({ text }: BioFocusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="border-border my-12 flex flex-col items-center gap-8 rounded-3xl border bg-white p-8 shadow-sm md:flex-row"
    >
      <div className="relative h-32 w-32 flex-shrink-0">
        <div className="bg-primary/10 absolute inset-0 scale-110 rounded-full blur-xl" />
        {/* Placeholder pour l'instant, à remplacer par la vraie image d'Audrey si dispo dans assets */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-zinc-100 shadow-md">
          {/* Fallback avatar if no image */}
          <div className="font-display text-primary flex h-full w-full items-center justify-center text-3xl font-bold">
            AC
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <h3 className="text-primary mb-2 text-sm font-bold tracking-wider uppercase">
          Le mot de votre psychologue
        </h3>
        <p className="text-foreground mb-4 text-lg font-medium italic">"{text}"</p>
        <Link
          href="/qui-suis-je"
          className="text-muted-foreground hover:text-primary group inline-flex items-center text-sm font-semibold transition-colors"
        >
          En savoir plus sur mon parcours
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
