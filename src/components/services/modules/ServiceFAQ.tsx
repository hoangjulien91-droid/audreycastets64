"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faq: FAQItem[];
  serviceTitle: string;
}

export function ServiceFAQ({ faq, serviceTitle }: ServiceFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!faq || faq.length === 0) return null;

  // JSON-LD Generation for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-10 text-center">
        <span className="bg-primary/5 text-primary mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold">
          <HelpCircle className="h-3 w-3" /> FAQ
        </span>
        <h3 className="font-display text-2xl font-bold">
          Questions fréquentes sur <span className="text-primary">{serviceTitle}</span>
        </h3>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {faq.map((item, index) => (
          <div key={index} className="border-border overflow-hidden rounded-2xl border bg-white">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-zinc-50"
              aria-expanded={activeIndex === index}
            >
              <span className="text-foreground pr-8 font-semibold">{item.question}</span>
              {activeIndex === index ? (
                <Minus className="text-primary h-5 w-5 flex-shrink-0" />
              ) : (
                <Plus className="text-muted-foreground h-5 w-5 flex-shrink-0" />
              )}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="text-muted-foreground p-6 pt-0 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
