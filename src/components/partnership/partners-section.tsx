"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, Search, FileCheck, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Nos <span className="text-primary">Partenaires</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Des experts reconnus dans leur domaine pour un accompagnement professionnel
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-border rounded-3xl border bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-10"
          >
            <div className="grid items-start gap-8 md:grid-cols-[200px_1fr]">
              {/* Photo professionnelle */}
              <div className="mx-auto md:mx-0">
                <div className="ring-accent-teal/20 relative h-48 w-48 overflow-hidden rounded-2xl shadow-lg ring-2">
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
                  <h3 className="text-foreground mb-2 text-2xl font-bold sm:text-3xl">
                    Julien Hoang
                  </h3>
                  <p className="text-accent-teal text-lg font-semibold">
                    Détective Privé Victimologue
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-muted-foreground mb-3 text-sm font-semibold tracking-wide uppercase">
                    Spécialités
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Shield, text: "Aide aux victimes" },
                      { icon: Search, text: "Investigations sensibles" },
                      { icon: FileCheck, text: "Constitution de dossiers" },
                      { icon: Database, text: "Collecte d'éléments probatoires" },
                    ].map((speciality, index) => (
                      <div
                        key={index}
                        className="bg-accent-teal/10 border-accent-teal/20 flex items-center gap-2 rounded-full border px-3 py-2"
                      >
                        <speciality.icon className="text-accent-teal h-4 w-4" />
                        <span className="text-foreground text-sm">{speciality.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-muted-foreground mb-3 text-sm font-semibold tracking-wide uppercase">
                    Domaines d'intervention
                  </h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      "Harcèlement moral et sexuel",
                      "Violences conjugales",
                      "Discrimination au travail",
                      "Assistance aux procédures judiciaires",
                    ].map((domain, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="bg-accent-teal h-1.5 w-1.5 rounded-full" />
                        <span className="text-muted-foreground text-sm">{domain}</span>
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
                    href="https://ikerketa.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Detective privé à Anglet
                    <ExternalLink className="h-4 w-4" />
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
