import type { NavLink } from "./types";

export const navLinks: NavLink[] = [
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/bilan-de-competences", label: "Bilan de compétences" },
  { href: "/services", label: "Services" },
  { href: "/tests", label: "Tests & Bilans" },
  { href: "/mon-approche", label: "Mon approche" },
  { href: "/partenariat", label: "Partenariat" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const testLinks = [
  { href: "/tests", label: "Tous les bilans" },
  { href: "/tests/burnout", label: "Test Burnout (MBI)" },
  { href: "/tests/tdah", label: "Test TDAH Adulte (DIVA 2.0)" },
];

export const footerLinks = {
  navigation: navLinks,
  services: [
    { href: "/services", label: "Tous les services" },
    { href: "/bilan-de-competences", label: "Bilan de compétences (CPF)" },
    { href: "/services/therapies-cognitivo-comportementales-tcc", label: "Thérapie TCC" },
    { href: "/services/eft-emotional-freedom-techniques", label: "Technique EFT" },
    { href: "/services/burnout-epuisement-professionnel", label: "Burnout & Épuisement" },
    { href: "/tarifs", label: "Tarifs & Prise en charge" },
  ],
  tests: [
    { href: "/tests", label: "Hub Bilans & Auto-évaluation" },
    { href: "/tests/burnout", label: "Test Burnout (MBI)" },
    { href: "/tests/tdah", label: "Test TDAH Adulte (DIVA 2.0)" },
    { href: "/prendre-rendez-vous", label: "Prendre RDV en direct" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité (RGPD)" },
  ],
};
