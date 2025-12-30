"use client";

import { Link } from "next-view-transitions";
import { Heart, Layers3, MessageCircle, Target, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const links = [
  {
    href: "/mon-approche",
    Icon: Heart,
    title: "Mon Approche",
    subtitle: "Découvrez ma méthode",
  },
  {
    href: "/services",
    Icon: Layers3,
    title: "Services",
    subtitle: "Particuliers et pros",
  },
  {
    href: "/faq",
    Icon: MessageCircle,
    title: "FAQ",
    subtitle: "Questions fréquentes",
  },
  {
    href: "/qui-suis-je",
    Icon: Target,
    title: "Qui suis-je",
    subtitle: "Mon parcours & expertise",
  },
];

interface LinkCardProps {
  href: string;
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  index: number;
}

const LinkCard = ({ href, Icon, title, subtitle, index }: LinkCardProps) => {
  return (
    <div
      className="animate-in fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link
        href={href}
        className="group hover:border-primary/20 relative block rounded-3xl border border-transparent bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative mx-auto mb-8 h-24 w-24 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <div className="bg-primary absolute inset-0 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20"></div>
          <div className="border-primary/10 relative flex h-full w-full items-center justify-center rounded-full border-2 bg-white/50 backdrop-blur-sm">
            <div className="bg-primary/10 group-hover:bg-primary/15 flex h-20 w-20 items-center justify-center rounded-full transition-colors">
              <Icon className="text-primary h-10 w-10 transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-display text-foreground mb-2 text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>

        <div className="absolute top-6 right-6 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100">
          <ArrowUpRight className="text-primary h-5 w-5" />
        </div>
      </Link>
    </div>
  );
};

const AdditionalLinksSection = () => {
  return (
    <section className="bg-warm-rose/30 py-20 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          align="center"
          title={
            <>
              Pour aller <span className="text-primary">plus loin</span>
            </>
          }
          className="mb-16"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link, index) => (
            <LinkCard
              key={link.title}
              href={link.href}
              Icon={link.Icon}
              title={link.title}
              subtitle={link.subtitle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalLinksSection;
