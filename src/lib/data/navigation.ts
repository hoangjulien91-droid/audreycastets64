import type { NavLink } from './types';

export const navLinks: NavLink[] = [
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/mon-approche", label: "Mon approche" },
  { href: "/services", label: "Services" },
  { href: "/tests", label: "Bilans Psychométriques" },
  { href: "/partenariat", label: "Partenariat" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = {
  navigation: navLinks,
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  ],
};
