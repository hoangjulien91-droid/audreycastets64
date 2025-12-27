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
    <section className="py-16 md:py-24 bg-[#FDFCFB] border-y border-border/40 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-b from-blue-50/50 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-t from-purple-50/50 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100 flex items-center gap-2">
              <Microscope className="w-3 h-3" />
              Fondements Scientifiques
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-8">
            {scientificBasis.title}
          </h2>

          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/60 shadow-lg backdrop-blur-md relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-md border border-border flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
             </div>

             <div className="mt-6 text-lg text-muted-foreground leading-relaxed text-center mb-10">
                {scientificBasis.introduction}
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {scientificBasis.points.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start p-4 rounded-2xl bg-white/50 border border-white/40 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">{point.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
             </div>

             <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-foreground/80 italic font-serif">
                   "{scientificBasis.conclusion}"
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
