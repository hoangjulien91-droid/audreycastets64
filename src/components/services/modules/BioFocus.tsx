"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
      className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col md:flex-row items-center gap-8 my-12"
    >
      <div className="relative w-32 h-32 flex-shrink-0">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-110" />
        {/* Placeholder pour l'instant, à remplacer par la vraie image d'Audrey si dispo dans assets */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-100">
           {/* Fallback avatar if no image */}
           <div className="w-full h-full flex items-center justify-center text-3xl font-display font-bold text-primary">
             AC
           </div>
        </div>
      </div>

      <div className="text-center md:text-left flex-1">
        <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
          Le mot de votre psychologue
        </h3>
        <p className="text-lg text-foreground italic font-medium mb-4">
          "{text}"
        </p>
        <Link 
          href="/qui-suis-je" 
          className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
        >
          En savoir plus sur mon parcours
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
