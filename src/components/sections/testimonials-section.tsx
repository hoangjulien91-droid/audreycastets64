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
    quote:
      "Grâce à l'accompagnement d'Audrey, j'ai réussi à clarifier mes objectifs professionnels et à retrouver confiance en moi. Son approche bienveillante et professionnelle m'a vraiment aidée à franchir le cap de la reconversion.",
    name: "Sophie M.",
    role: "Cadre en reconversion",
    initial: "S",
    bgColor: "#9D6B8C",
  },
  {
    quote:
      "J'étais en burn-out complet. Audrey m'a accompagné avec empathie et professionnalisme. Aujourd'hui je vais beaucoup mieux et j'ai appris à poser mes limites au travail.",
    name: "Thomas L.",
    role: "Manager",
    initial: "T",
    bgColor: "#8B7CB3",
  },
  {
    quote:
      "Un accompagnement sur mesure qui a transformé ma vision du travail. Audrey a su identifier mes blocages et m'a donné des outils concrets pour avancer sereinement dans mon projet.",
    name: "Marie D.",
    role: "Entrepreneuse",
    initial: "M",
    bgColor: "#C27B9E",
  },
  {
    quote:
      "Professionnelle et à l'écoute, Audrey m'a aidé à gérer mes relations conflictuelles au travail. Ses conseils ont été précieux et je recommande vivement ses services.",
    name: "Julien P.",
    role: "Consultant RH",
    initial: "J",
    bgColor: "#9B8AA3",
  },
  {
    quote:
      "Les séances avec Audrey m'ont permis de mieux comprendre mes émotions et de développer une meilleure gestion du stress. Je me sens beaucoup plus équilibrée.",
    name: "Émilie R.",
    role: "Chef de projet",
    initial: "É",
    bgColor: "#8FAE9B",
  },
  {
    quote:
      "Un accompagnement personnalisé qui m'a vraiment aidé dans ma prise de poste. Audrey a su m'apporter les clés pour manager mon équipe avec plus de sérénité.",
    name: "Alexandre B.",
    role: "Directeur commercial",
    initial: "A",
    bgColor: "#E8B4C8",
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
    <section className="section-spacing bg-soft-lavender/30 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Quote className="text-primary/5 absolute top-20 left-10 h-32 w-32 rotate-12" />
        <Quote className="text-violet/5 absolute right-10 bottom-20 h-40 w-40 -rotate-12" />
        <div className="orb orb-primary top-0 right-1/4 h-[400px] w-[400px] opacity-15" />
        <div className="orb orb-violet bottom-0 left-1/4 h-[300px] w-[300px] opacity-10" />
      </div>

      <div className="relative z-10 container">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="badge-premium mb-5 inline-flex">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Témoignages</span>
          </div>
          <h2 className="text-foreground mb-5">
            Ils me font <span className="text-primary">confiance</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Découvrez les retours de personnes que j'ai eu le plaisir d'accompagner.
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
              >
                <motion.div
                  className="h-full"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                >
                  <div className="card-premium group relative flex h-full flex-col overflow-hidden p-7">
                    <div
                      className="absolute top-0 right-0 left-0 h-1"
                      style={{ backgroundColor: testimonial.bgColor }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-4 right-4 opacity-10 transition-opacity group-hover:opacity-20"
                      aria-hidden="true"
                    >
                      <Quote className="text-primary h-12 w-12" />
                    </div>

                    <div
                      className="mb-5 flex items-center gap-1"
                      role="img"
                      aria-label="5 étoiles sur 5"
                    >
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="text-primary fill-primary h-4 w-4" />
                        ))}
                    </div>

                    <blockquote className="text-muted-foreground relative z-10 mb-6 flex-grow text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="border-border/50 flex items-center gap-4 border-t pt-5">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-semibold text-white shadow-md"
                        style={{ backgroundColor: testimonial.bgColor }}
                      >
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{testimonial.name}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div
            className="mt-10 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Navigation des témoignages"
          >
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="group flex items-center justify-center p-2 transition-all duration-300"
                role="tab"
                aria-selected={current === index}
                aria-label={`Voir témoignage ${index + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-primary-dark w-8"
                      : "bg-primary/30 group-hover:bg-primary/50 w-2"
                  }`}
                />
              </button>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
