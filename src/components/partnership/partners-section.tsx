"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, Search, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Nos <span className="text-primary">Partenaires</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des experts reconnus dans leur domaine pour un accompagnement professionnel
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              {/* Photo professionnelle */}
              <div className="mx-auto md:mx-0">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-lg ring-2 ring-accent-teal/20">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/julien-hoang-detective-bayonne-1762105713740.jpg?width=8000&height=8000&resize=contain"
                    alt="Julien Hoang - Détective Privé Victimologue"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
              </div>

              {/* Informations */}
              <div>
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Julien Hoang
                  </h3>
                  <p className="text-lg text-accent-teal font-semibold">
                    Détective Privé Victimologue
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Spécialités
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Shield, text: "Aide aux victimes" },
                      { icon: Search, text: "Investigations sensibles" },
                      { icon: FileCheck, text: "Constitution de dossiers" }
                    ].map((speciality, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-accent-teal/10 rounded-full border border-accent-teal/20"
                      >
                        <speciality.icon className="w-4 h-4 text-accent-teal" />
                        <span className="text-sm text-foreground">{speciality.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Domaines d'intervention
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "Harcèlement moral et sexuel",
                      "Violences conjugales",
                      "Discrimination au travail",
                      "Expertise judiciaire"
                    ].map((domain, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                        <span className="text-sm text-muted-foreground">{domain}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-accent-teal hover:bg-accent-teal/90 text-white shadow-lg"
                >
                  <a 
                    href="https://detective-conseil.fr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Visiter le site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}