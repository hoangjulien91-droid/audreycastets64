"use client";

import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-[#D4C5D9] hover:bg-[#F3E8F0] transition-all duration-300"
      aria-label="Retourner à la page précédente"
    >
      <ArrowLeft className="w-5 h-5" />
      Page précédente
    </button>
  );
}
