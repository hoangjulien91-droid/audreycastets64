"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

export function LocalSeoBlock() {
  return (
    <div className="mt-16 p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4">
        <MapPin className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">
        Cabinet de Psychologie du Travail au Pays Basque
      </h3>
      <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
        J'accompagne les particuliers et les entreprises principalement sur le secteur 
        **Biarritz, Anglet, Bayonne (BAB)** et dans tout le Pays Basque et le sud des Landes. 
        Consultations possibles en visio pour toute la France.
      </p>
      <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground/60">
        <span>Psychologue Biarritz</span> • 
        <span>Psychologue Bayonne</span> • 
        <span>Psychologue Anglet</span> • 
        <span>Bilan de compétences 64</span> • 
        <span>Souffrance au travail Pays Basque</span>
      </div>
    </div>
  );
}
