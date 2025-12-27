"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
  children?: React.ReactNode;
  align?: "center" | "left";
}

export function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs,
  children,
  align = "center"
}: PageHeroProps) {
  return (
    <section 
      className="relative overflow-hidden bg-linear-to-br from-[#F3E8F0] via-[#E8DFF0]/30 to-background py-16 md:py-24"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#D4C5D9]/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#A594B3]/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Fil d'Ariane">
          <Breadcrumb items={breadcrumbs} />
        </nav>

        {/* Content */}
        <div className={`relative z-10 ${align === "center" ? "max-w-4xl mx-auto text-center" : ""}`}>
          {badge && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-[#D4C5D9]/30 shadow-sm mb-6 ${align === "center" ? "mx-auto" : ""}`}
            >
              <span className="text-primary animate-pulse">
                {badge.icon ? badge.icon : <Sparkles className="w-4 h-4" />}
              </span>
              <span className="text-sm font-medium text-primary">
                {badge.text}
              </span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h1>
          </motion.div>

          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 ${align === "center" ? "mx-auto" : ""} max-w-3xl`}
            >
              {subtitle}
            </motion.p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
