import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';
import { 
  AnimatedHeroSection,
  AnimatedServicesParticuliers,
  AnimatedServicesProfessionnels,
  AnimatedPracticalInfo,
  AnimatedFinalCTA
} from "@/components/services/animated-services-content";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Mes Services - Accompagnement Particuliers & Professionnels',
  description: 'Services de psychologie du travail pour particuliers (TCC, EFT, gestion du stress) et professionnels (RPS, recrutement, ateliers). Consultations en cabinet ou visio.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/services',
  },
  openGraph: {
    title: 'Mes Services - Accompagnement Particuliers & Professionnels',
    description: 'Services de psychologie du travail pour particuliers et professionnels.',
    url: 'https://www.audrey-castets.fr/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Mes Services' }
      ]} />
      <ServiceJsonLd 
        name="Accompagnement Particuliers - TCC & EFT"
        description="Thérapie Cognitive et Comportementale (TCC) et EFT pour accompagnement personnel"
        price="55"
      />
      <ServiceJsonLd 
        name="Accompagnement Professionnels - Psychologie du Travail"
        description="Diagnostic RPS, recrutement, ateliers de prévention pour entreprises"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20" id="main-content">
          {/* Hero Section with Breadcrumb */}
          <section 
            className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50/30 to-background py-16 md:py-24"
            aria-labelledby="services-heading"
          >
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <nav className="mb-8" aria-label="Fil d'Ariane">
                <Breadcrumb 
                  items={[
                    { label: "Accueil", href: "/" },
                    { label: "Mes Services" }
                  ]} 
                />
              </nav>
              <AnimatedHeroSection />
            </div>
          </section>

          <AnimatedServicesParticuliers />
          <AnimatedServicesProfessionnels />
          <AnimatedPracticalInfo />
          <AnimatedFinalCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}