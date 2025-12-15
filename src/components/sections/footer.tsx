"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-warm-beige pt-16 pb-8 font-body relative overflow-hidden">
      {/* Subtle animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-accent-teal/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-primary">Contact</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <a href="tel:0743687297" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  07 43 68 72 97
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <a href="mailto:contact@audrey-castets.fr" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  contact@audrey-castets.fr
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">
                  Consultations sur rendez-vous
                  <br />
                  Disponibilités flexibles (midi, soir)
                </p>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-primary">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: "/qui-suis-je", label: "Qui suis-je" },
                { href: "/services", label: "Services" },
                { href: "/mon-approche", label: "Mon approche" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground transition-all hover:text-primary hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Audrey Castets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-primary">Audrey Castets</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Psychologue du travail avec +5 ans d'expérience en RH, spécialisée en TCC et EFT pour l'accompagnement thérapeutique individuel. Expertise internationale en ressources humaines et conseil.
            </p>
          </motion.div>

          {/* Column 4: Déontologie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-primary">Déontologie</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">Confidentialité garantie</p>
              </motion.li>
              <motion.li 
                className="flex items-start gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <FileText className="mt-1 h-5 w-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Code déontologique</p>
                  <p className="text-sm text-muted-foreground">N° ADELI: 409307198</p>
                  <p className="text-sm text-muted-foreground">RPPS: 10009709337</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border-t border-primary/20 pt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © 2025 Audrey Castets - Psychologue du Travail. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            <a 
              href="https://ikerketa.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              IKERKETA détective privé Bayonne
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;