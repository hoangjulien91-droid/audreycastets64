"use client";

import { motion } from "framer-motion";
import { FolderOpen, ArrowRight, User, CheckCircle2 } from "lucide-react";

interface CaseStudyProps {
  caseStudy: {
    title: string;
    context: string;
    problem: string;
    approach: string;
    result: string;
  };
}

export function CaseStudy({ caseStudy }: CaseStudyProps) {
  if (!caseStudy) return null;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           {/* Left Column: Visual & Header */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider border border-orange-100 mb-6">
                <FolderOpen className="w-3 h-3" />
                Cas Concret
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                 {caseStudy.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 border-l-4 border-orange-200 pl-4 italic">
                 "{caseStudy.context}"
              </p>
              
              <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-50 to-white opacity-80" />
                  {/* Abstract Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-orange-200/50 blur-3xl animate-pulse" />
                      <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-orange-100 flex flex-col items-center">
                         <User className="w-12 h-12 text-orange-400 mb-2" />
                         <span className="text-xs font-bold text-orange-900 bg-orange-100 px-2 py-1 rounded-full">Anonyme</span>
                      </div>
                  </div>
              </div>
           </motion.div>

           {/* Right Column: Steps */}
           <div className="space-y-8">
              {/* Problem */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl border border-red-50 shadow-sm relative overflow-hidden group hover:border-red-100 transition-colors"
              >
                 <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-8 -mt-8 opacity-50" />
                 <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-xs">1</span>
                    La Problématique
                 </h3>
                 <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {caseStudy.problem}
                 </p>
              </motion.div>

              {/* Approach */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm relative overflow-hidden group hover:border-blue-100 transition-colors ml-4 md:ml-8"
              >
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50" />
                 <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">2</span>
                    L'Approche
                 </h3>
                 <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {caseStudy.approach}
                 </p>
              </motion.div>

              {/* Result */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-green-50/50 p-8 rounded-2xl border border-green-100 shadow-md relative overflow-hidden"
              >
                 <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-green-900 mb-2">Le Résultat</h3>
                        <p className="text-green-800 text-sm leading-relaxed font-medium">
                            {caseStudy.result}
                        </p>
                    </div>
                 </div>
              </motion.div>

           </div>
        </div>

      </div>
    </section>
  );
}
