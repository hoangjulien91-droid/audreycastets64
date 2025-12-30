"use client";

import { Phone, Mail, MapPin, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { SectionHeader } from "@/components/ui/section-header";

export default function PartnershipContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "07 43 68 72 97",
      href: "tel:0743687297",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@audrey-castets.fr",
      href: "mailto:contact@audrey-castets.fr",
    },
    {
      icon: MapPin,
      label: "Consultations",
      value: "Sur rendez-vous - Cabinet et visio",
    },
  ];

  return (
    <section className="from-muted/30 bg-linear-to-b to-white py-20 sm:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            align="center"
            title={
              <>
                Nous <span className="text-primary">Contacter</span>
              </>
            }
            subtitle="Pour toute demande d'accompagnement interdisciplinaire, n'hésitez pas à nous joindre"
            className="mb-12"
          />

          {/* Informations de contact */}
          <div className="border-border animate-in fade-in-up mb-8 rounded-3xl border bg-white p-8 shadow-lg sm:p-10 [animation-delay:200ms]">
            <div className="mb-8 grid gap-6 sm:grid-cols-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl">
                    <info.icon className="text-primary h-6 w-6" />
                  </div>
                  <p className="text-muted-foreground mb-1 text-sm font-semibold">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground hover:text-primary font-medium transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2">
                <a href="tel:0743687297" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>

          {/* Section Confidentialité et Déontologie */}
          <div className="from-primary/5 to-accent-teal/5 border-primary/10 animate-in fade-in-up rounded-2xl border bg-linear-to-br p-8 [animation-delay:400ms]">
            <div className="mb-6 flex items-start gap-4">
              <div className="bg-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-foreground mb-2 text-xl font-bold">Confidentialité Absolue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tous nos échanges sont strictement confidentiels et protégés par le secret
                  professionnel. Nous respectons les codes déontologiques de nos professions
                  respectives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent-teal flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-foreground mb-2 text-xl font-bold">
                  Déontologie Professionnelle
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Notre collaboration interdisciplinaire s'inscrit dans le respect total des règles
                  déontologiques applicables :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    <span className="text-muted-foreground text-sm">
                      <strong>Psychologue :</strong> Code de déontologie des psychologues (ADELI &
                      RPPS)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-accent-teal mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    <span className="text-muted-foreground text-sm">
                      <strong>Détective privé :</strong> Agrément CNAPS et respect du code de
                      déontologie professionnelle
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
