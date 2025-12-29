"use client";

import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="text-primary inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D4C5D9] bg-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-[#F3E8F0]"
      aria-label="Retourner à la page précédente"
    >
      <ArrowLeft className="h-5 w-5" />
      Page précédente
    </button>
  );
}
