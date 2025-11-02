import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import PartnershipHeroSection from '@/components/partnership/hero-section';
import ComplementaryApproachSection from '@/components/partnership/complementary-approach-section';
import PartnersSection from '@/components/partnership/partners-section';
import InterventionDomainsSection from '@/components/partnership/intervention-domains-section';
import CollaborativeProcessSection from '@/components/partnership/collaborative-process-section';
import WhyAllianceSection from '@/components/partnership/why-alliance-section';
import PartnershipContactSection from '@/components/partnership/partnership-contact-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partenariat Interdisciplinaire - Audrey Castets & Julien Hoang',
  description: 'Une approche à 360° combinant soutien psychologique et investigation rigoureuse pour l\'accompagnement global des victimes.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/partenariat',
  },
  openGraph: {
    title: 'Partenariat Interdisciplinaire - Accompagnement Global des Victimes',
    description: 'Quand la psychologie du travail rencontre l\'investigation victimologique',
    url: 'https://www.audrey-castets.fr/partenariat',
    type: 'website',
  },
};

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20" id="main-content">
        <PartnershipHeroSection />
        <ComplementaryApproachSection />
        <PartnersSection />
        <InterventionDomainsSection />
        <CollaborativeProcessSection />
        <WhyAllianceSection />
        <PartnershipContactSection />
      </main>
      <Footer />
    </div>
  );
}
