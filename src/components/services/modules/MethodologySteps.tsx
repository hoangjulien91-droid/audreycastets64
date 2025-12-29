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
      <h3 className="font-display mb-8 text-center text-2xl font-bold">
        Notre méthodologie <span className="text-primary">étape par étape</span>
      </h3>

      <div className="relative mx-auto max-w-3xl">
        {/* Ligne verticale de fond */}
        <div className="from-primary/20 to-primary/5 absolute top-4 bottom-4 left-[27px] w-1 rounded-full bg-linear-to-b via-purple-200" />

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
              <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-4 border-purple-50 bg-white shadow-sm">
                <span className="font-display text-primary text-xl font-bold">{index + 1}</span>
              </div>

              {/* Contenu */}
              <div className="card-premium flex-1 rounded-2xl p-6 pt-2 transition-transform duration-300 hover:translate-x-2">
                <h4 className="text-foreground mb-2 flex items-center gap-2 text-lg font-bold">
                  {step.title}
                  {index === steps.length - 1 && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
