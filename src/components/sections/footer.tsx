import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F9F5F5] pt-16 pb-8 font-body">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-primary">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:0743687297" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  07 43 68 72 97
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:contact@audrey-castets.fr" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  contact@audrey-castets.fr
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Consultations sur rendez-vous
                  <br />
                  Disponibilités flexibles (midi, soir)
                </p>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-primary">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/qui-suis-je" className="text-sm text-muted-foreground transition-colors hover:text-primary">Qui suis-je</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">Services</Link></li>
              <li><Link href="/mon-approche" className="text-sm text-muted-foreground transition-colors hover:text-primary">Mon approche</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-primary">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Audrey Castets */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-primary">Audrey Castets</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Psychologue du travail avec +5 ans d'expérience en RH, spécialisée en TCC et EFT pour l'accompagnement thérapeutique individuel. Expertise internationale en ressources humaines et conseil.
            </p>
          </div>

          {/* Column 4: Déontologie */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-primary">Déontologie</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">Confidentialité garantie</p>
              </li>
              <li className="flex items-start gap-4">
                <FileText className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Code déontologique</p>
                  <p className="text-sm text-muted-foreground">N° ADELI: 409307198</p>
                  <p className="text-sm text-muted-foreground">RPPS: 10009709337</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary/20 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Audrey Castets - Psychologue du Travail. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;