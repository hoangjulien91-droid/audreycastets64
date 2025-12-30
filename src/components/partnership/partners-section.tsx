"use client";

import { ExternalLink, Shield, Search, FileCheck, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";

export default function PartnersSection() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          align="center"
          title={
            <>
              Nos <span className="text-primary">Partenaires</span>
            </>
          }
          subtitle="Des experts reconnus dans leur domaine pour un accompagnement professionnel"
          className="mb-16"
        />

        <div className="mx-auto max-w-4xl">
          <div
            className="glass-ghost animate-in fade-in-up rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-10"
          >
            <div className="grid items-start gap-8 md:grid-cols-[200px_1fr]">
              {/* Photo professionnelle */}
              <div className="mx-auto md:mx-0">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl shadow-lg ring-2 ring-primary/20">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/julien-hoang-detective-bayonne-1762105713740.jpg?width=8000&height=8000&resize=contain"
                    alt="Julien Hoang - Détective Privé Victimologue"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 192px, 192px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAI8QM2869vXAAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>

              {/* Informations */}
              <div>
                <div className="mb-4">
                  <h3 className="text-foreground mb-2 text-2xl font-bold sm:text-3xl">
                    Julien Hoang
                  </h3>
                  <p className="text-primary text-lg font-semibold">
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
                        className="bg-primary/10 border-primary/20 flex items-center gap-2 rounded-full border px-3 py-2"
                      >
                        <speciality.icon className="text-primary h-4 w-4" />
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
                        <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                        <span className="text-muted-foreground text-sm">{domain}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg"
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
          </div>
        </div>
      </div>
    </section>
  );
}
