import type { Metadata } from "next";
import { MBIWizard } from "@/components/tests/mbi/mbi-wizard";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Test Burnout (MBI) - Auto-évaluation de l'Épuisement | Audrey Castets",
  description:
    "Évaluez votre niveau d'épuisement professionnel avec l'inventaire de Maslach (MBI). Test psychologique gratuit, confidentiel et immédiat.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/tests/burnout",
  },
};

export default function BurnoutTestPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Tests", url: "/tests" },
          { name: "Test de Burnout (MBI)" },
        ]}
      />
      <div className="bg-background flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col px-4 pt-32 pb-20" id="main-content">
          <div className="container mx-auto">
            <Breadcrumbs
              items={[
                { label: "Bilans Psychométriques", href: "/tests" },
                { label: "Test de Burnout (MBI)" },
              ]}
            />
          </div>
          <MBIWizard />
        </main>
        <Footer />
      </div>
    </>
  );
}
