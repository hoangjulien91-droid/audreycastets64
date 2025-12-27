import Header from "@/components/sections/header";
import { PageHero } from "@/components/ui/page-hero";
import Footer from "@/components/sections/footer";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { Sparkles } from "lucide-react";
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
          <PageHero
            badge={{
              icon: <Sparkles className="w-4 h-4" />,
              text: "Accompagnement Psychologique"
            }}
            title={
              <>
                Expertise & <span className="text-primary">Services</span>
              </>
            }
            subtitle="Des accompagnements adaptés à vos besoins, que vous soyez un particulier en quête de mieux-être ou une entreprise soucieuse de la qualité de vie au travail."
            breadcrumbs={[
              { label: "Accueil", href: "/" },
              { label: "Mes Services" }
            ]}
            align="center"
          />

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