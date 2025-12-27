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
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="text-center mb-10">
         <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-xs font-bold text-primary mb-3">
             <HelpCircle className="w-3 h-3" /> FAQ
         </span>
        <h3 className="text-2xl font-display font-bold">
          Questions fréquentes sur <span className="text-primary">{serviceTitle}</span>
        </h3>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faq.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl border border-border overflow-hidden">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
                aria-expanded={activeIndex === index}
            >
              <span className="font-semibold text-foreground pr-8">{item.question}</span>
              {activeIndex === index ? (
                <Minus className="w-5 h-5 text-primary flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
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
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
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
