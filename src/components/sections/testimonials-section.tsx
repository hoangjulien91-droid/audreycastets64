"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
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
  },
  {
    quote: "J'étais en burn-out complet. Audrey m'a accompagné avec empathie et professionnalisme. Aujourd'hui je vais beaucoup mieux et j'ai appris à poser mes limites au travail.",
    name: "Thomas L.",
    role: "Manager",
    initial: "T",
  },
  {
    quote: "Un accompagnement sur mesure qui a transformé ma vision du travail. Audrey a su identifier mes blocages et m'a donné des outils concrets pour avancer sereinement dans mon projet.",
    name: "Marie D.",
    role: "Entrepreneuse",
    initial: "M",
  },
  {
    quote: "Professionnelle et à l'écoute, Audrey m'a aidé à gérer mes relations conflictuelles au travail. Ses conseils ont été précieux et je recommande vivement ses services.",
    name: "Julien P.",
    role: "Consultant RH",
    initial: "J",
  },
  {
    quote: "Les séances avec Audrey m'ont permis de mieux comprendre mes émotions et de développer une meilleure gestion du stress. Je me sens beaucoup plus équilibrée professionnellement.",
    name: "Émilie R.",
    role: "Chef de projet",
    initial: "É",
  },
  {
    quote: "Un accompagnement personnalisé qui m'a vraiment aidé dans ma prise de poste. Audrey a su m'apporter les clés pour manager mon équipe avec plus de sérénité.",
    name: "Alexandre B.",
    role: "Directeur commercial",
    initial: "A",
  },
];

export default function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Floating quote decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10"
        >
          <Quote className="w-32 h-32 text-primary" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10"
        >
          <Quote className="w-40 h-40 text-accent-teal" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            Témoignages
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ils me font{" "}
            <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de personnes que j'ai eu le plaisir d'accompagner.
          </p>
        </motion.div>

        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="h-full p-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                >
                  <motion.div 
                    className="bg-card text-card-foreground rounded-3xl p-8 border border-primary/10 flex flex-col h-full relative overflow-hidden"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(139, 122, 152, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl" />
                    
                    <div className="flex items-center gap-1 mb-6 relative z-10">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              type: "spring",
                              stiffness: 200,
                              delay: i * 0.05 
                            }}
                          >
                            <Star className="w-5 h-5 text-primary fill-primary" />
                          </motion.div>
                        ))}
                    </div>

                    <blockquote className="text-muted-foreground italic leading-relaxed mb-8 flex-grow relative z-10">
                      "{testimonial.quote}"
                    </blockquote>

                    <motion.div 
                      className="flex items-center gap-4 mt-auto relative z-10"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 rounded-full gradient-soft flex items-center justify-center text-primary font-bold text-xl flex-shrink-0 shadow-md">
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-3 mt-12">
            {Array.from({ length: count }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}