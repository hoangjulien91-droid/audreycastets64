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
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {keyStats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center group hover:border-primary/30 transition-colors"
        >
          <div className="mb-3 inline-flex items-center justify-center p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 gradient-text">
            {stat.value}
          </div>
          <div className="text-sm font-medium text-foreground mb-1">
            {stat.label}
          </div>
          {stat.source && (
             <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Source : {stat.source}
             </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
