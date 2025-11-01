import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import PsychologySection from '@/components/sections/psychology-section';
import StatsSection from '@/components/sections/stats-section';
import ValuesSection from '@/components/sections/values-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactCtaSection from '@/components/sections/contact-cta-section';
import FaqSection from '@/components/sections/faq-section';
import FinalCtaSection from '@/components/sections/final-cta-section';
import AdditionalLinksSection from '@/components/sections/additional-links-section';
import Footer from '@/components/sections/footer';
import { OrganizationJsonLd, LocalBusinessJsonLd, PersonJsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Audrey Castets - Psychologue du Travail | TCC & EFT',
  description: 'Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé pour particuliers et professionnels. Gestion du stress, burn-out, reconversion professionnelle.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr',
  },
  openGraph: {
    title: 'Audrey Castets - Psychologue du Travail | TCC & EFT',
    description: 'Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé pour particuliers et professionnels.',
    url: 'https://www.audrey-castets.fr',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <PersonJsonLd />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20" id="main-content">
          <HeroSection />
          <ServicesSection />
          <PsychologySection />
          <StatsSection />
          <ValuesSection />
          <TestimonialsSection />
          <ContactCtaSection />
          <FaqSection />
          <FinalCtaSection />
          <AdditionalLinksSection />
        </main>
        <Footer />
      </div>
    </>
  );
}