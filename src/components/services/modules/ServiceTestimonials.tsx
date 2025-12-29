"use client";

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
    <div className="relative overflow-hidden py-12">
      {/* Background blobs */}
      <div className="bg-primary/5 absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />

      <h3 className="font-display relative z-10 mb-8 text-center text-2xl font-bold">
        Ce qu'ils en <span className="text-primary">pensent</span>
      </h3>

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="card-premium group relative p-8 animate-in fade-in-up"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Quote className="text-primary/10 group-hover:text-primary/20 absolute top-6 right-6 h-10 w-10 transition-colors" />
            <p className="text-foreground relative z-10 mb-6 leading-relaxed italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="from-primary flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br to-purple-400 text-sm font-bold text-white">
                {t.author.charAt(0)}
              </div>
              <div>
                <p className="text-foreground text-sm font-bold">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
