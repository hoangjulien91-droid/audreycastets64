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
  align = "center",
}: PageHeroProps) {
  return (
    <section className="to-background relative overflow-hidden bg-linear-to-br from-[#F3E8F0] via-[#E8DFF0]/30 py-16 md:py-24">
      {/* Background decorative elements */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 select-none"
        aria-hidden="true"
      >
        <div className="animate-blob absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-[#D4C5D9]/40 blur-3xl"></div>
        <div className="animate-blob animation-delay-2000 absolute bottom-20 left-20 h-96 w-96 rounded-full bg-[#A594B3]/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Fil d'Ariane">
          <Breadcrumb items={breadcrumbs} />
        </nav>

        {/* Content */}
        <div
          className={`relative z-10 ${align === "center" ? "mx-auto max-w-4xl text-center" : ""}`}
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4C5D9]/30 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md ${align === "center" ? "mx-auto" : ""}`}
            >
              <span className="text-primary animate-pulse">
                {badge.icon ? badge.icon : <Sparkles className="h-4 w-4" />}
              </span>
              <span className="text-primary text-sm font-medium">{badge.text}</span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="font-display text-foreground mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </motion.div>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-muted-foreground mb-8 text-xl leading-relaxed md:text-2xl ${align === "center" ? "mx-auto" : ""} max-w-3xl`}
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
