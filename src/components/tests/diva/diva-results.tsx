"use client";

import { DivaResult } from "@/types/diva";
import { motion } from "framer-motion";
import { Info, Brain, Activity, Target } from "lucide-react";
import { Link } from "next-view-transitions";

interface DivaResultsProps {
  results: DivaResult;
}

export function DivaResults({ results }: DivaResultsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Helper to determine color based on strict DSM (6/9)
  const getScoreColor = (score: number) =>
    score >= 6 ? "#EF4444" : score >= 4 ? "#F59E0B" : "#10B981";

  return (
    <motion.div
      className="mx-auto w-full max-w-4xl space-y-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="space-y-4 text-center">
        <h2 className="font-display text-foreground text-3xl font-bold">
          Bilan Pré-diagnostic TDAH
        </h2>
        <div className="from-primary/5 to-secondary/5 border-primary/10 rounded-2xl border bg-gradient-to-br p-6">
          <h3 className="mb-2 text-xl font-semibold">Synthèse</h3>
          <p className="text-foreground/80 text-lg font-medium">{results.globalAssessment}</p>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Inattention */}
        <motion.div variants={item} className="card-premium p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
              <Brain className="h-5 w-5 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold text-violet-900">Inattention</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-muted-foreground mb-1 flex justify-between text-sm font-medium">
                <span>Adulte (Actuel)</span>
                <span style={{ color: getScoreColor(results.inattentionScore.adult) }}>
                  {results.inattentionScore.adult}/9
                </span>
              </div>
              <div className="bg-secondary/30 h-2 overflow-hidden rounded-full">
                <div
                  className="h-full transition-all duration-1000"
                  style={{
                    width: `${(results.inattentionScore.adult / 9) * 100}%`,
                    backgroundColor: getScoreColor(results.inattentionScore.adult),
                  }}
                />
              </div>
            </div>

            <div>
              <div className="text-muted-foreground mb-1 flex justify-between text-sm font-medium">
                <span>Enfance (Souvenirs)</span>
                <span style={{ color: getScoreColor(results.inattentionScore.child) }}>
                  {results.inattentionScore.child}/9
                </span>
              </div>
              <div className="bg-secondary/30 h-2 overflow-hidden rounded-full">
                <div
                  className="h-full transition-all duration-1000"
                  style={{
                    width: `${(results.inattentionScore.child / 9) * 100}%`,
                    backgroundColor: getScoreColor(results.inattentionScore.child),
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hyperactivité */}
        <motion.div variants={item} className="card-premium p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <Activity className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-amber-900">Hyperactivité / Impulsivité</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-muted-foreground mb-1 flex justify-between text-sm font-medium">
                <span>Adulte (Actuel)</span>
                <span style={{ color: getScoreColor(results.hyperactivityScore.adult) }}>
                  {results.hyperactivityScore.adult}/9
                </span>
              </div>
              <div className="bg-secondary/30 h-2 overflow-hidden rounded-full">
                <div
                  className="h-full transition-all duration-1000"
                  style={{
                    width: `${(results.hyperactivityScore.adult / 9) * 100}%`,
                    backgroundColor: getScoreColor(results.hyperactivityScore.adult),
                  }}
                />
              </div>
            </div>

            <div>
              <div className="text-muted-foreground mb-1 flex justify-between text-sm font-medium">
                <span>Enfance (Souvenirs)</span>
                <span style={{ color: getScoreColor(results.hyperactivityScore.child) }}>
                  {results.hyperactivityScore.child}/9
                </span>
              </div>
              <div className="bg-secondary/30 h-2 overflow-hidden rounded-full">
                <div
                  className="h-full transition-all duration-1000"
                  style={{
                    width: `${(results.hyperactivityScore.child / 9) * 100}%`,
                    backgroundColor: getScoreColor(results.hyperactivityScore.child),
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="border-border/50 space-y-4 rounded-2xl border bg-white/50 p-6 text-center backdrop-blur-sm"
      >
        <div className="mb-2 flex items-center justify-center gap-2 font-bold text-rose-600">
          <Target className="h-5 w-5" />
          <span>Impact Fonctionnel Identifié</span>
        </div>
        <p className="text-muted-foreground mx-auto max-w-2xl text-sm">
          Vous avez signalé un impact dans{" "}
          <strong>{results.totalImpactScore.adult} domaines</strong> de votre vie quotidienne.
          <br />
          Un email détaillé contenant vos réponses a été envoyé. Ce document pourra servir de base
          pour un entretien avec un psychiatre ou neuropsychologue.
        </p>

        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
          <Link href="/contact" className="btn-premium">
            Prendre rendez-vous
          </Link>
          <Link
            href="/tests"
            className="text-foreground rounded-full px-6 py-3 font-medium transition-colors hover:bg-black/5"
          >
            Retour aux tests
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
