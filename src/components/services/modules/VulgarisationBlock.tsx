"use client";

import { Sparkles } from "lucide-react";

interface VulgarisationBlockProps {
  title: string;
  description: string;
}

export function VulgarisationBlock({ title, description }: VulgarisationBlockProps) {
  return (
    <div className="animate-in fade-in-up relative overflow-hidden rounded-3xl border border-white/50 bg-linear-to-br from-purple-50 via-white to-pink-50 p-8 shadow-sm md:p-10">
      <div className="bg-primary/5 absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row">
        <div className="flex-shrink-0">
          <div className="text-primary flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-100 bg-white shadow-sm">
            <Sparkles className="h-6 w-6" />
          </div>
        </div>
        <div>
          <h3 className="text-primary mb-2 text-sm font-bold tracking-wider uppercase">
            Comprendre en 2 minutes
          </h3>
          <h4 className="font-display text-foreground mb-3 text-xl font-bold md:text-2xl">
            {title}
          </h4>
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
