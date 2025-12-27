"use client";

import { DivaResult } from "@/types/diva";
import { motion } from "framer-motion";
import { Info, Brain, Activity, Target } from "lucide-react";
import Link from 'next/link';

interface DivaResultsProps {
  results: DivaResult;
}

export function DivaResults({ results }: DivaResultsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Helper to determine color based on strict DSM (6/9)
  const getScoreColor = (score: number) => score >= 6 ? '#EF4444' : (score >= 4 ? '#F59E0B' : '#10B981');

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto space-y-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="text-center space-y-4">
        <h2 className="text-3xl font-bold font-display text-foreground">
          Bilan Pré-diagnostic TDAH
        </h2>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <h3 className="text-xl font-semibold mb-2">Synthèse</h3>
            <p className="text-lg text-foreground/80 font-medium">
                {results.globalAssessment}
            </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Inattention */}
        <motion.div variants={item} className="card-premium p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-violet-900">Inattention</h3>
            </div>
            
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm mb-1 font-medium text-muted-foreground">
                        <span>Adulte (Actuel)</span>
                        <span style={{ color: getScoreColor(results.inattentionScore.adult) }}>{results.inattentionScore.adult}/9</span>
                    </div>
                    <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <div className="h-full transition-all duration-1000" style={{ width: `${(results.inattentionScore.adult / 9) * 100}%`, backgroundColor: getScoreColor(results.inattentionScore.adult) }} />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1 font-medium text-muted-foreground">
                        <span>Enfance (Souvenirs)</span>
                        <span style={{ color: getScoreColor(results.inattentionScore.child) }}>{results.inattentionScore.child}/9</span>
                    </div>
                    <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <div className="h-full transition-all duration-1000" style={{ width: `${(results.inattentionScore.child / 9) * 100}%`, backgroundColor: getScoreColor(results.inattentionScore.child) }} />
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Hyperactivité */}
        <motion.div variants={item} className="card-premium p-6">
            <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-900">Hyperactivité / Impulsivité</h3>
            </div>
            
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm mb-1 font-medium text-muted-foreground">
                        <span>Adulte (Actuel)</span>
                        <span style={{ color: getScoreColor(results.hyperactivityScore.adult) }}>{results.hyperactivityScore.adult}/9</span>
                    </div>
                    <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <div className="h-full transition-all duration-1000" style={{ width: `${(results.hyperactivityScore.adult / 9) * 100}%`, backgroundColor: getScoreColor(results.hyperactivityScore.adult) }} />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1 font-medium text-muted-foreground">
                        <span>Enfance (Souvenirs)</span>
                        <span style={{ color: getScoreColor(results.hyperactivityScore.child) }}>{results.hyperactivityScore.child}/9</span>
                    </div>
                    <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <div className="h-full transition-all duration-1000" style={{ width: `${(results.hyperactivityScore.child / 9) * 100}%`, backgroundColor: getScoreColor(results.hyperactivityScore.child) }} />
                    </div>
                </div>
            </div>
        </motion.div>
      </div>

       <motion.div variants={item} className="bg-white/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-rose-600 font-bold mb-2">
            <Target className="w-5 h-5" />
            <span>Impact Fonctionnel Identifié</span>
        </div>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Vous avez signalé un impact dans <strong>{results.totalImpactScore.adult} domaines</strong> de votre vie quotidienne.
            <br/>
            Un email détaillé contenant vos réponses a été envoyé. Ce document pourra servir de base pour un entretien avec un psychiatre ou neuropsychologue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact" className="btn-premium">
                Prendre rendez-vous
            </Link>
            <Link href="/tests" className="px-6 py-3 rounded-full font-medium text-foreground hover:bg-black/5 transition-colors">
                Retour aux tests
            </Link>
        </div>
      </motion.div>

    </motion.div>
  );
}
