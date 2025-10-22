"use client";

import { ArrowRight, CircleCheck, Heart, Users } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/80 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-sm font-semibold !bg-primary/10 !text-primary border-transparent"
          >
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Mes <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un accompagnement professionnel adapté à vos besoins, que vous soyez
            particulier ou professionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Card 1: Pour les Particuliers */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 rounded-3xl transition-all duration-500"></div>
            <motion.div 
              className="relative h-full gradient-soft rounded-3xl border border-primary/10 shadow-lg overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(139, 122, 152, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-2 gradient-primary"></div>
              <div className="p-8 md:p-10">
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 w-16 h-16 gradient-primary rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

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
                  {[
                    "Gestion du stress et de l'anxiété",
                    "EFT - Techniques de libération émotionnelle",
                    "Burn-out et épuisement professionnel"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/services-particuliers"
                    className="group/btn inline-flex items-center justify-center w-full px-6 py-6 gradient-primary text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Pour les Professionnels */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-accent-teal/5 group-hover:bg-accent-teal/10 rounded-3xl transition-all duration-500"></div>
            <motion.div 
              className="relative h-full bg-gradient-to-br from-[#E8F5F4] to-[#D4EDE9] rounded-3xl border border-accent-teal/10 shadow-lg overflow-hidden"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(95, 171, 166, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-2 gradient-accent"></div>
              <div className="p-8 md:p-10">
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 w-16 h-16 gradient-accent rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-accent-teal transition-colors">
                  Pour les Professionnels
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Expertise en psychologie du travail et ressources humaines
                  pour accompagner les organisations : prévention des RPS,
                  recrutement, tests de personnalité et amélioration du
                  bien-être au travail.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Diagnostic des risques psychosociaux",
                    "Recrutement et tests SOSIE",
                    "Ateliers de prévention du stress"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <CircleCheck className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/services-professionnels"
                    className="group/btn inline-flex items-center justify-center w-full px-6 py-6 gradient-accent text-white font-semibold rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;