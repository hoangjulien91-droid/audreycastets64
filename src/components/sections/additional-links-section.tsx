import Link from 'next/link';
import { Heart, Layers3, MessageCircle, Target, ArrowUpRight } from 'lucide-react';

const links = [
  {
    href: '/mon-approche',
    Icon: Heart,
    title: 'Mon Approche',
    subtitle: 'Découvrez ma méthode',
  },
  {
    href: '/services',
    Icon: Layers3,
    title: 'Services',
    subtitle: 'Particuliers et pros',
  },
  {
    href: '/faq',
    Icon: MessageCircle,
    title: 'FAQ',
    subtitle: 'Questions fréquentes',
  },
  {
    href: '/qui-suis-je',
    Icon: Target,
    title: 'Qui suis-je',
    subtitle: 'Mon parcours & expertise',
  },
];

interface LinkCardProps {
  href: string;
  Icon: React.ElementType;
  title: string;
  subtitle: string;
}

const LinkCard = ({ href, Icon, title, subtitle }: LinkCardProps) => {
  return (
    <Link
      href={href}
      className="group relative block rounded-3xl border border-transparent bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl"
    >
      <div className="relative mx-auto mb-8 h-24 w-24">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 opacity-10 blur-2xl transition-opacity group-hover:opacity-20"></div>
        <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-primary/10 bg-white/50 backdrop-blur-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/5 to-rose-500/5 transition-colors group-hover:bg-primary/5">
            <Icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="mb-2 font-display text-xl font-bold text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="absolute top-6 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ArrowUpRight className="h-5 w-5 text-primary" />
      </div>
    </Link>
  );
};

const AdditionalLinksSection = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Pour aller plus loin
          </h2>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <LinkCard
              key={link.title}
              href={link.href}
              Icon={link.Icon}
              title={link.title}
              subtitle={link.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalLinksSection;