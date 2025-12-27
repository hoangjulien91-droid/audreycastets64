"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface VulgarisationBlockProps {
  title: string;
  description: string;
}

export function VulgarisationBlock({ title, description }: VulgarisationBlockProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-50 via-white to-pink-50 p-8 md:p-10 border border-white/50 shadow-sm"
    >
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-purple-100">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Comprendre en 2 minutes
          </h3>
          <h4 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
            {title}
          </h4>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
