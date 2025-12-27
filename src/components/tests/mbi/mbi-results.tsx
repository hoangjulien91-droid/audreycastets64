"use client";

import { MBIResult } from "@/types/mbi";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Link } from 'next-view-transitions';

interface MBIResultsProps {
  results: MBIResult;
}

export function MBIResults({ results }: MBIResultsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto space-y-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header Resultat */}
      <motion.div variants={item} className="text-center space-y-4">
        <h2 className="text-3xl font-bold font-display text-foreground">
          Résultats de votre test
        </h2>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
          <h3 className="text-xl font-semibold mb-2">Appréciation Globale</h3>
          <p className="text-lg text-foreground/80 font-medium">
            {results.globalAssessment}
          </p>
        </div>
      </motion.div>

      {/* Cartes de dimensions */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* SEP */}
        <motion.div variants={item} className="card-premium p-6 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-20`} style={{ backgroundColor: results.dimensions.SEP.color }} />
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                Épuisement
                <Info className="w-4 h-4 text-muted-foreground" />
            </h4>
            <div className="text-3xl font-bold mb-1" style={{ color: results.dimensions.SEP.color }}>
                {results.dimensions.SEP.score}
            </div>
            <div className="text-sm font-medium px-3 py-1 rounded-full inline-block" style={{ backgroundColor: `${results.dimensions.SEP.color}20`, color: results.dimensions.SEP.color }}>
                {results.dimensions.SEP.label}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
                Sentiment d'être vidé émotionnellement et physiquement.
            </p>
        </motion.div>

        {/* SD */}
        <motion.div variants={item} className="card-premium p-6 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-20`} style={{ backgroundColor: results.dimensions.SD.color }} />
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                Dépersonnalisation
                <Info className="w-4 h-4 text-muted-foreground" />
            </h4>
            <div className="text-3xl font-bold mb-1" style={{ color: results.dimensions.SD.color }}>
                {results.dimensions.SD.score}
            </div>
            <div className="text-sm font-medium px-3 py-1 rounded-full inline-block" style={{ backgroundColor: `${results.dimensions.SD.color}20`, color: results.dimensions.SD.color }}>
                {results.dimensions.SD.label}
            </div>
             <p className="text-xs text-muted-foreground mt-4">
                Détachement excessif et cynisme envers les autres.
            </p>
        </motion.div>

        {/* SAP */}
        <motion.div variants={item} className="card-premium p-6 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-20`} style={{ backgroundColor: results.dimensions.SAP.color }} />
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                Accomplissement
                <Info className="w-4 h-4 text-muted-foreground" />
            </h4>
            <div className="text-3xl font-bold mb-1" style={{ color: results.dimensions.SAP.color }}>
                {results.dimensions.SAP.score}
            </div>
            <div className="text-sm font-medium px-3 py-1 rounded-full inline-block" style={{ backgroundColor: `${results.dimensions.SAP.color}20`, color: results.dimensions.SAP.color }}>
                {results.dimensions.SAP.label}
            </div>
             <p className="text-xs text-muted-foreground mt-4">
                Sentiment de compétence et de réussite au travail.
            </p>
        </motion.div>
      </div>

      <motion.div variants={item} className="bg-white/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center space-y-4">
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Un email contenant le détail de vos résultats vous a été envoyé. 
            Si vos résultats indiquent un risque modéré ou élevé, il est recommandé d'en parler à un professionnel de santé.
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
