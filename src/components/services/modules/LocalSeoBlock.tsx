"use client";

import { MapPin } from "lucide-react";
import { Link } from "next-view-transitions";

export function LocalSeoBlock() {
  return (
    <div className="mt-16 rounded-3xl border border-zinc-100 bg-zinc-50 p-8 text-center">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
        <MapPin className="text-primary h-6 w-6" />
      </div>
      <h3 className="text-foreground mb-2 text-lg font-bold">
        Cabinet de Psychologie du Travail au Pays Basque
      </h3>
      <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-sm">
        J'accompagne les particuliers et les entreprises principalement sur le secteur **Biarritz,
        Anglet, Bayonne (BAB)** et dans tout le Pays Basque et le sud des Landes. Consultations
        possibles en visio pour toute la France.
      </p>
      <div className="text-muted-foreground/60 flex flex-wrap justify-center gap-2 text-xs">
        <span>Psychologue Biarritz</span> •<span>Psychologue Bayonne</span> •
        <span>Psychologue Anglet</span> •<span>Bilan de compétences 64</span> •
        <span>Souffrance au travail Pays Basque</span>
      </div>
    </div>
  );
}
