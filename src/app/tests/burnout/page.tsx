import type { Metadata } from "next";
import { MBIWizard } from "@/components/tests/mbi/mbi-wizard";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Test Burnout (MBI) | Audrey Castets",
  description: "Évaluation du niveau d'épuisement professionnel. Test interactif gratuit.",
};

export default function BurnoutTestPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col px-4 pt-32 pb-20">
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
  );
}
