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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
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
  );
}