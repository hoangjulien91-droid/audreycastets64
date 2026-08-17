import type { Metadata } from "next";
import { DivaWizard } from "@/components/tests/diva/diva-wizard";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Test TDAH Adulte (DIVA 2.0) - Pré-évaluation Clinique | Audrey Castets",
  description:
    "Entretien diagnostique pour le TDAH chez l'adulte (DIVA 2.0). Double évaluation des symptômes à l'âge adulte et durant l'enfance.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/tests/tdah",
  },
};

export default function TDAHTestPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Tests", url: "/tests" },
          { name: "Test TDAH (DIVA 2.0)" },
        ]}
      />
      <div className="bg-background flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col px-4 pt-32 pb-20" id="main-content">
          <div className="container mx-auto">
            <Breadcrumbs
              items={[
                { label: "Bilans Psychométriques", href: "/tests" },
                { label: "Test TDAH (DIVA 2.0)" },
              ]}
            />
          </div>
          <DivaWizard />
        </main>
        <Footer />
      </div>
    </>
  );
}
