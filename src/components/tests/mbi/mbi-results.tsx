"use client";

import { MBIResult } from "@/types/mbi";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Link } from "next-view-transitions";

interface MBIResultsProps {
  results: MBIResult;
}

export function MBIResults({ results }: MBIResultsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mx-auto w-full max-w-4xl space-y-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header Resultat */}
      <motion.div variants={item} className="space-y-4 text-center">
        <h2 className="font-display text-foreground text-3xl font-bold">Résultats de votre test</h2>
        <div className="from-primary/5 to-secondary/5 border-primary/10 rounded-2xl border bg-gradient-to-br p-6">
          <h3 className="mb-2 text-xl font-semibold">Appréciation Globale</h3>
          <p className="text-foreground/80 text-lg font-medium">{results.globalAssessment}</p>
        </div>
      </motion.div>

      {/* Cartes de dimensions */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* SEP */}
        <motion.div variants={item} className="card-premium relative overflow-hidden p-6">
          <div
            className={`absolute top-0 right-0 h-20 w-20 translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl`}
            style={{ backgroundColor: results.dimensions.SEP.color }}
          />
          <h4 className="mb-2 flex items-center gap-2 text-lg font-bold">
            Épuisement
            <Info className="text-muted-foreground h-4 w-4" />
          </h4>
          <div className="mb-1 text-3xl font-bold" style={{ color: results.dimensions.SEP.color }}>
            {results.dimensions.SEP.score}
          </div>
          <div
            className="inline-block rounded-full px-3 py-1 text-sm font-medium"
            style={{
              backgroundColor: `${results.dimensions.SEP.color}20`,
              color: results.dimensions.SEP.color,
            }}
          >
            {results.dimensions.SEP.label}
          </div>
          <p className="text-muted-foreground mt-4 text-xs">
            Sentiment d'être vidé émotionnellement et physiquement.
          </p>
        </motion.div>

        {/* SD */}
        <motion.div variants={item} className="card-premium relative overflow-hidden p-6">
          <div
            className={`absolute top-0 right-0 h-20 w-20 translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl`}
            style={{ backgroundColor: results.dimensions.SD.color }}
          />
          <h4 className="mb-2 flex items-center gap-2 text-lg font-bold">
            Dépersonnalisation
            <Info className="text-muted-foreground h-4 w-4" />
          </h4>
          <div className="mb-1 text-3xl font-bold" style={{ color: results.dimensions.SD.color }}>
            {results.dimensions.SD.score}
          </div>
          <div
            className="inline-block rounded-full px-3 py-1 text-sm font-medium"
            style={{
              backgroundColor: `${results.dimensions.SD.color}20`,
              color: results.dimensions.SD.color,
            }}
          >
            {results.dimensions.SD.label}
          </div>
          <p className="text-muted-foreground mt-4 text-xs">
            Détachement excessif et cynisme envers les autres.
          </p>
        </motion.div>

        {/* SAP */}
        <motion.div variants={item} className="card-premium relative overflow-hidden p-6">
          <div
            className={`absolute top-0 right-0 h-20 w-20 translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl`}
            style={{ backgroundColor: results.dimensions.SAP.color }}
          />
          <h4 className="mb-2 flex items-center gap-2 text-lg font-bold">
            Accomplissement
            <Info className="text-muted-foreground h-4 w-4" />
          </h4>
          <div className="mb-1 text-3xl font-bold" style={{ color: results.dimensions.SAP.color }}>
            {results.dimensions.SAP.score}
          </div>
          <div
            className="inline-block rounded-full px-3 py-1 text-sm font-medium"
            style={{
              backgroundColor: `${results.dimensions.SAP.color}20`,
              color: results.dimensions.SAP.color,
            }}
          >
            {results.dimensions.SAP.label}
          </div>
          <p className="text-muted-foreground mt-4 text-xs">
            Sentiment de compétence et de réussite au travail.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="border-border/50 space-y-4 rounded-2xl border bg-white/50 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-muted-foreground mx-auto max-w-2xl text-sm">
          Un email contenant le détail de vos résultats vous a été envoyé. Si vos résultats
          indiquent un risque modéré ou élevé, il est recommandé d'en parler à un professionnel de
          santé.
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
