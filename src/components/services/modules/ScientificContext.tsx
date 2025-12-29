"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Microscope } from "lucide-react";

interface ScientificContextProps {
  scientificBasis: {
    title: string;
    introduction: string;
    points: { label: string; description: string }[];
    conclusion: string;
  };
}

export function ScientificContext({ scientificBasis }: ScientificContextProps) {
  if (!scientificBasis) return null;

  return (
    <section className="border-border/40 relative overflow-hidden border-y bg-[#FDFCFB] py-16 md:py-24">
      {/* Abstract Background Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 transform rounded-full bg-linear-to-b from-blue-50/50 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 transform rounded-full bg-linear-to-t from-purple-50/50 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          {/* Header Badge */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase">
              <Microscope className="h-3 w-3" />
              Fondements Scientifiques
            </span>
          </div>

          <h2 className="font-display text-foreground mb-8 text-center text-3xl font-bold md:text-4xl">
            {scientificBasis.title}
          </h2>

          <div className="glass-effect relative rounded-3xl border border-white/60 p-8 shadow-lg backdrop-blur-md md:p-12">
            <div className="border-border absolute top-0 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border bg-white shadow-md">
              <BookOpen className="text-primary h-8 w-8" />
            </div>

            <div className="text-muted-foreground mt-6 mb-10 text-center text-lg leading-relaxed">
              {scientificBasis.introduction}
            </div>

            <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {scientificBasis.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/40 bg-white/50 p-4 transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 text-sm font-bold">{point.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary/5 border-primary/10 flex items-start gap-4 rounded-2xl border p-6">
              <GraduationCap className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <p className="text-foreground/80 font-serif text-sm italic">
                "{scientificBasis.conclusion}"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
