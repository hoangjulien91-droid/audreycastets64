"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnershipContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "07 43 68 72 97",
      href: "tel:0743687297"
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@audrey-castets.fr",
      href: "mailto:contact@audrey-castets.fr"
    },
    {
      icon: MapPin,
      label: "Consultations",
      value: "Sur rendez-vous - Cabinet et visio"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-linear-to-b from-muted/30 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Nous <span className="text-primary">Contacter</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pour toute demande d'accompagnement interdisciplinaire, n'hésitez pas à nous joindre
            </p>
          </div>

          {/* Informations de contact */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-border mb-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="/contact">
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2">
                <a 
                  href="tel:0743687297"
                  className="inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>

          {/* Section Confidentialité et Déontologie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-linear-to-br from-primary/5 to-accent-teal/5 rounded-2xl p-8 border border-primary/10"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Confidentialité Absolue
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tous nos échanges sont strictement confidentiels et protégés par le secret professionnel. Nous respectons les codes déontologiques de nos professions respectives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-teal flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Déontologie Professionnelle
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Notre collaboration interdisciplinaire s'inscrit dans le respect total des règles déontologiques applicables :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Psychologue :</strong> Code de déontologie des psychologues (ADELI & RPPS)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Détective privé :</strong> Agrément CNAPS et respect du code de déontologie professionnelle
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
