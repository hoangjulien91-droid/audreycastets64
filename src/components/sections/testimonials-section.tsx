"use client";

import * as React from "react";
import { Star, Quote, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Grâce à l'accompagnement d'Audrey, j'ai réussi à clarifier mes objectifs professionnels et à retrouver confiance en moi. Son approche bienveillante et professionnelle m'a vraiment aidée à franchir le cap de la reconversion.",
    name: "Sophie M.",
    role: "Cadre en reconversion",
    initial: "S",
    gradient: "from-primary to-primary-soft",
  },
  {
    quote: "J'étais en burn-out complet. Audrey m'a accompagné avec empathie et professionnalisme. Aujourd'hui je vais beaucoup mieux et j'ai appris à poser mes limites au travail.",
    name: "Thomas L.",
    role: "Manager",
    initial: "T",
    gradient: "from-violet to-violet-soft",
  },
  {
    quote: "Un accompagnement sur mesure qui a transformé ma vision du travail. Audrey a su identifier mes blocages et m'a donné des outils concrets pour avancer sereinement dans mon projet.",
    name: "Marie D.",
    role: "Entrepreneuse",
    initial: "M",
    gradient: "from-rose to-rose-soft",
  },
  {
    quote: "Professionnelle et à l'écoute, Audrey m'a aidé à gérer mes relations conflictuelles au travail. Ses conseils ont été précieux et je recommande vivement ses services.",
    name: "Julien P.",
    role: "Consultant RH",
    initial: "J",
    gradient: "from-mauve to-mauve-light",
  },
  {
    quote: "Les séances avec Audrey m'ont permis de mieux comprendre mes émotions et de développer une meilleure gestion du stress. Je me sens beaucoup plus équilibrée.",
    name: "Émilie R.",
    role: "Chef de projet",
    initial: "É",
    gradient: "from-sage to-sage-light",
  },
  {
    quote: "Un accompagnement personnalisé qui m'a vraiment aidé dans ma prise de poste. Audrey a su m'apporter les clés pour manager mon équipe avec plus de sérénité.",
    name: "Alexandre B.",
    role: "Directeur commercial",
    initial: "A",
    gradient: "from-blush to-blush-light",
  },
];

export default function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="section-spacing bg-gradient-to-b from-background via-soft-lavender/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Quote className="absolute top-20 left-10 w-32 h-32 text-primary/5 rotate-12" />
        <Quote className="absolute bottom-20 right-10 w-40 h-40 text-violet/5 -rotate-12" />
        <div className="orb orb-primary w-[400px] h-[400px] top-0 right-1/4 opacity-15" />
        <div className="orb orb-violet w-[300px] h-[300px] bottom-0 left-1/4 opacity-10" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-premium mb-5 inline-flex">
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Témoignages</span>
          </div>
          <h2 className="text-foreground mb-5">
            Ils me font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les retours de personnes que j'ai eu le plaisir d'accompagner.
          </p>
        </motion.div>

        <Carousel 
          setApi={setApi} 
          opts={{ loop: true, align: "start" }} 
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="h-full"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                >
                  <div className="card-premium relative h-full p-7 flex flex-col overflow-hidden group">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} aria-hidden="true" />
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
                      <Quote className="w-12 h-12 text-primary" />
                    </div>
                    
                    <div className="flex items-center gap-1 mb-5" role="img" aria-label="5 étoiles sur 5">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow relative z-10">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4 pt-5 border-t border-border/50">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-lg shadow-md`}>
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-2 mt-10" role="tablist" aria-label="Navigation des témoignages">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index 
                    ? "bg-gradient-to-r from-primary to-violet w-8" 
                    : "bg-primary/20 w-2 hover:bg-primary/40"
                }`}
                role="tab"
                aria-selected={current === index}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
