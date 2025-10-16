"use client";

import * as React from "react";
import { Star } from "lucide-react";
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
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ils me font{" "}
            <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
              confiance
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de personnes que j'ai eu le plaisir d'accompagner.
          </p>
        </div>

        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <div className="bg-card text-card-foreground rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10 flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-6">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                        ))}
                    </div>
                    <blockquote className="text-muted-foreground italic leading-relaxed mb-8 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-3 mt-12">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  current === index ? "bg-primary" : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}