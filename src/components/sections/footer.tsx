"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, FileText, Heart } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const footerLinks = [
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/services", label: "Services" },
  { href: "/mon-approche", label: "Mon approche" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/tarifs", label: "Tarifs" },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-warm-rose/30 to-soft-lavender/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-primary w-[400px] h-[400px] -top-40 left-1/4 opacity-10" />
        <div className="orb orb-violet w-[300px] h-[300px] bottom-0 right-1/3 opacity-10" />
      </div>

      <div className="container relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-12">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-violet flex items-center justify-center shadow-lg shadow-primary/20">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-foreground font-display">Audrey Castets</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Psychologue du travail avec +5 ans d'expérience, spécialisée en TCC et EFT pour l'accompagnement thérapeutique individuel et professionnel.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:0743687297"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-violet/10 flex items-center justify-center text-primary hover:from-primary hover:to-violet hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Appeler"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@audrey-castets.fr"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-violet/10 flex items-center justify-center text-primary hover:from-primary hover:to-violet hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Envoyer un email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Navigation</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4" role="list">
              <li>
                <a href="tel:0743687297" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>07 43 68 72 97</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@audrey-castets.fr" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>contact@audrey-castets.fr</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <span>Consultations sur rendez-vous<br />Disponibilités flexibles (midi, soir)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Déontologie</h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet" aria-hidden="true" />
                <span>Confidentialité garantie</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Code déontologique</p>
                  <p>N° ADELI: 409307198</p>
                  <p>RPPS: 10009709337</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="divider-gradient mb-8" aria-hidden="true" />

        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Audrey Castets - Psychologue du Travail. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Créé en collaboration avec{' '}
            <a 
              href="https://ikerketa.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              IKERKETA
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
