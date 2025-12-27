import type { Metadata } from 'next';
import { DivaWizard } from '@/components/tests/diva/diva-wizard';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Test TDAH Adulte (DIVA 2.0) | Audrey Castets',
  description: 'Entretien diagnostique pour le TDAH chez l\'adulte. Double évaluation symptomatique (adulte/enfance).',
};

export default function TDAHTestPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pt-32 pb-20 px-4">
         <div className="container mx-auto">
             <Breadcrumbs 
                items={[
                    { label: "Bilans Psychométriques", href: "/tests" },
                    { label: "Test TDAH (DIVA 2.0)" }
                ]} 
             />
        </div>
        <DivaWizard />
      </main>
      <Footer />
    </div>
  );
}
