"use client";

import { Link } from "next-view-transitions";
import { Phone, Mail, MapPin, Shield, FileText, Heart } from "lucide-react";

const footerLinks = [
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/services", label: "Services" },
  { href: "/mon-approche", label: "Mon approche" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/tarifs", label: "Tarifs" },
];

export default function Footer() {
  return (
    <footer className="bg-soft-lavender/30 render-lazy relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-primary -top-40 left-1/4 h-[400px] w-[400px] opacity-10" />
        <div className="orb orb-violet right-1/3 bottom-0 h-[300px] w-[300px] opacity-10" />
      </div>

      <div className="relative z-10 container pt-16 pb-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="animate-in fade-in-up">
            <div className="mb-5 flex items-center gap-3">
              <div className="bg-primary shadow-primary/20 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-foreground font-display text-lg font-semibold">
                Audrey Castets
              </span>
            </div>
            <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
              Psychologue du travail avec +5 ans d'expérience, spécialisée en TCC et EFT pour
              l'accompagnement thérapeutique individuel et professionnel.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:0743687297"
                className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-xl shadow-sm transition-all duration-300 hover:text-white"
                aria-label="Appeler"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@audrey-castets.fr"
                className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-xl shadow-sm transition-all duration-300 hover:text-white"
                aria-label="Envoyer un email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            className="animate-in fade-in-up"
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-foreground mb-5 text-sm font-semibold tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary group inline-flex items-center gap-2 text-sm transition-colors"
                  >
                    <span
                      className="bg-primary/40 group-hover:bg-primary h-1 w-1 rounded-full transition-colors"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="animate-in fade-in-up"
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-foreground mb-5 text-sm font-semibold tracking-wider uppercase">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href="tel:0743687297"
                  className="text-muted-foreground hover:text-primary group flex items-start gap-3 text-sm transition-colors"
                >
                  <Phone className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>07 43 68 72 97</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@audrey-castets.fr"
                  className="text-muted-foreground hover:text-primary group flex items-start gap-3 text-sm transition-colors"
                >
                  <Mail className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>contact@audrey-castets.fr</span>
                </a>
              </li>
              <li className="text-muted-foreground flex items-start gap-3 text-sm">
                <MapPin className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>
                  Consultations sur rendez-vous
                  <br />
                  Disponibilités flexibles (midi, soir)
                </span>
              </li>
            </ul>
          </div>

          <div
            className="animate-in fade-in-up"
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-foreground mb-5 text-sm font-semibold tracking-wider uppercase">
              Déontologie
            </h3>
            <ul className="space-y-4" role="list">
              <li className="text-muted-foreground flex items-start gap-3 text-sm">
                <Shield className="text-violet mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>Confidentialité garantie</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-3 text-sm">
                <FileText className="text-violet mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-foreground font-medium">Code déontologique</p>
                  <p>N° ADELI: 409307198</p>
                  <p>RPPS: 10009709337</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gradient mb-8" aria-hidden="true" />

        <div
          className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left animate-in fade-in-up delay-400"
        >
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Audrey Castets - Psychologue du Travail. Tous droits
            réservés.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Créé en collaboration avec{" "}
            <a
              href="https://ikerketa.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              IKERKETA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
