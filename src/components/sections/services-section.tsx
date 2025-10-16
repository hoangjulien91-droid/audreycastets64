import { ArrowRight, CircleCheck, Heart, Users } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/80 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-sm font-semibold !bg-primary/10 !text-primary border-transparent"
          >
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Mes <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un accompagnement professionnel adapté à vos besoins, que vous soyez
            particulier ou professionnel.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Card 1: Pour les Particuliers */}
          <div className="group relative">
            <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-1"></div>
            <div className="relative h-full bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              <div className="p-8 md:p-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                  Pour les Particuliers
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Thérapie Cognitive et Comportementale (TCC) et EFT (Emotional
                  Freedom Techniques) pour vous accompagner dans vos difficultés
                  personnelles et développer des stratégies d'adaptation
                  efficaces.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      Gestion du stress et de l'anxiété
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      EFT - Techniques de libération émotionnelle
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      Burn-out et épuisement professionnel
                    </span>
                  </li>
                </ul>
                <Link
                  href="/services-particuliers"
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Pour les Professionnels */}
          <div className="group relative">
            <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 rounded-3xl transition-all duration-500 transform group-hover:-translate-y-1"></div>
            <div className="relative h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-500/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8 md:p-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-purple-600 transition-colors">
                  Pour les Professionnels
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Expertise en psychologie du travail et ressources humaines
                  pour accompagner les organisations : prévention des RPS,
                  recrutement, tests de personnalité et amélioration du
                  bien-être au travail.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      Diagnostic des risques psychosociaux
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      Recrutement et tests SOSIE
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      Ateliers de prévention du stress
                    </span>
                  </li>
                </ul>
                <Link
                  href="/services-professionnels"
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;