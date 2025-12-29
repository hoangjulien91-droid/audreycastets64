"use client";

import { motion } from "framer-motion";
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
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="border-border group hover:border-primary/30 rounded-2xl border bg-white p-6 text-center shadow-sm transition-colors"
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
        </motion.div>
      ))}
    </div>
  );
}
