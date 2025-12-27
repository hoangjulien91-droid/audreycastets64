"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface MethodologyStepsProps {
  steps: Step[];
}

export function MethodologySteps({ steps }: MethodologyStepsProps) {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-display font-bold mb-8 text-center">
        Notre méthodologie <span className="text-primary">étape par étape</span>
      </h3>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Ligne verticale de fond */}
        <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-linear-to-b from-primary/20 via-purple-200 to-primary/5 rounded-full" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex gap-6"
            >
              {/* Point de la timeline */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-4 border-purple-50 shadow-sm flex items-center justify-center relative z-10">
                <span className="font-display font-bold text-primary text-xl">
                  {index + 1}
                </span>
              </div>

              {/* Contenu */}
              <div className="flex-1 pt-2 card-premium p-6 rounded-2xl hover:translate-x-2 transition-transform duration-300">
                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  {step.title}
                  {index === steps.length - 1 && (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  )}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
