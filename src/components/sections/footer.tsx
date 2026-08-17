"use client";

import { Link } from "next-view-transitions";
import { Phone, Mail, MapPin, Shield, FileText, Heart, Sparkles, Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { footerLinks } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-soft-lavender/30 render-lazy relative overflow-hidden border-t border-primary/10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-primary -top-40 left-1/4 h-[400px] w-[400px] opacity-10" />
        <div className="orb orb-violet right-1/3 bottom-0 h-[300px] w-[300px] opacity-10" />
      </div>

      <div className="relative z-10 container pt-16 pb-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Identity & Direct Contact */}
          <div className="animate-in fade-in-up">
            <div className="mb-5 flex items-center gap-3">
              <div className="bg-primary shadow-primary/20 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-foreground font-display text-lg font-bold">
                Audrey Castets
              </span>
            </div>
            <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
              Psychologue du Travail & Thérapeute certifiée TCC / EFT. Accompagnement bienveillant et sur-mesure pour les particuliers, salariés et entreprises.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:0743687297"
                className="text-muted-foreground hover:text-primary group inline-flex items-center gap-2.5 text-sm font-medium transition-colors"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary flex h-8 w-8 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <span>07 43 68 72 97</span>
              </a>
              <a
                href="mailto:contact@audrey-castets.fr"
                className="text-muted-foreground hover:text-primary group inline-flex items-center gap-2.5 text-sm font-medium transition-colors"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary flex h-8 w-8 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <span>contact@audrey-castets.fr</span>
              </a>
              <div className="text-muted-foreground flex items-start gap-2.5 pt-1 text-xs">
                <MapPin className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Anglet (64), Ondres (40) & Téléconsultation France</span>
              </div>
            </div>
          </div>

          {/* Column 2: Accompagnements & Services */}
          <div className="animate-in fade-in-up" style={{ transitionDelay: "100ms" }}>
            <h3 className="text-foreground mb-5 text-sm font-bold tracking-wider uppercase">
              Accompagnements
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary group inline-flex items-center gap-2 text-sm transition-colors"
                  >
                    <span
                      className="bg-primary/40 group-hover:bg-primary h-1.5 w-1.5 rounded-full transition-colors"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Bilans Psychométriques & Tests */}
          <div className="animate-in fade-in-up" style={{ transitionDelay: "200ms" }}>
            <h3 className="text-foreground mb-5 text-sm font-bold tracking-wider uppercase">
              Tests & Auto-évaluation
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.tests.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary group inline-flex items-center gap-2 text-sm transition-colors"
                  >
                    <Brain className="text-primary/60 group-hover:text-primary h-3.5 w-3.5 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-primary/15 bg-white/70 p-4 shadow-xs">
              <p className="text-foreground text-xs font-semibold">1er Entretien de 15 min offert</p>
              <p className="text-muted-foreground mt-1 text-[11px]">Sans aucun engagement, par téléphone ou visio.</p>
              <Link
                href="/prendre-rendez-vous"
                className="text-primary mt-2 inline-flex items-center gap-1 text-xs font-bold hover:underline"
              >
                Réserver mon créneau
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Column 4: Déontologie & Liens Utiles */}
          <div className="animate-in fade-in-up" style={{ transitionDelay: "300ms" }}>
            <h3 className="text-foreground mb-5 text-sm font-bold tracking-wider uppercase">
              Déontologie & Cadre
            </h3>
            <ul className="space-y-3.5" role="list">
              <li className="text-muted-foreground flex items-start gap-2.5 text-xs">
                <Shield className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>Confidentialité et secret professionnel médical respectés</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-2.5 text-xs">
                <FileText className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-foreground font-semibold">Psychologue Enregistrée</p>
                  <p>ADELI : 409307198 • RPPS : 10009709337</p>
                </div>
              </li>
            </ul>

            <div className="border-border-soft/40 mt-6 space-y-2 border-t pt-4 text-xs">
              <Link
                href="/partenariat"
                className="text-muted-foreground hover:text-primary block transition-colors"
              >
                Partenariat Interdisciplinaire (Cabinet Ikerketa)
              </Link>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-primary block transition-colors"
              >
                Questions Fréquentes (FAQ)
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary block transition-colors"
              >
                Articles & Ressources Blog
              </Link>
            </div>
          </div>
        </div>

        <div className="divider-gradient mb-8" aria-hidden="true" />

        <div className="animate-in fade-in-up flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Audrey Castets — Psychologue du Travail. Tous droits réservés.
          </p>
          <div className="text-muted-foreground/80 flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions Légales
            </Link>
            <span>•</span>
            <Link
              href="/politique-confidentialite"
              className="hover:text-primary transition-colors"
            >
              Politique de Confidentialité (RGPD)
            </Link>
            <span>•</span>
            <span className="text-muted-foreground/60">
              Collaboration{" "}
              <a
                href="https://ikerketa.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary font-medium transition-colors"
              >
                IKERKETA
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
