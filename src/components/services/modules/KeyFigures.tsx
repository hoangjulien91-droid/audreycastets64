"use client";

import { TrendingUp } from "lucide-react";

interface KeyFiguresProps {
  keyStats: {
    value: string;
    label: string;
    source?: string;
  }[];
}

export function KeyFigures({ keyStats }: KeyFiguresProps) {
  if (!keyStats || keyStats.length === 0) return null;

  return (
    <div className="my-12 grid grid-cols-2 gap-6 lg:grid-cols-3">
      {keyStats.map((stat, index) => (
        <div
          key={index}
          className="border-border group hover:border-primary/30 animate-in scale-in rounded-2xl border bg-white p-6 text-center shadow-sm transition-colors"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="bg-primary/5 text-primary group-hover:bg-primary/10 mb-3 inline-flex items-center justify-center rounded-lg p-2 transition-colors">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="font-display text-foreground gradient-text mb-2 text-3xl font-bold md:text-4xl">
            {stat.value}
          </div>
          <div className="text-foreground mb-1 text-sm font-medium">{stat.label}</div>
          {stat.source && (
            <div className="text-muted-foreground text-[10px] tracking-wider uppercase">
              Source : {stat.source}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
