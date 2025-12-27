"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

export function ServiceTestimonials({ testimonials }: ServiceTestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="py-12 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <h3 className="text-2xl font-display font-bold mb-8 text-center relative z-10">
        Ce qu'ils en <span className="text-primary">pensent</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card-premium p-8 relative group"
          >
            <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
            <p className="text-foreground italic mb-6 leading-relaxed relative z-10">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                {t.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
