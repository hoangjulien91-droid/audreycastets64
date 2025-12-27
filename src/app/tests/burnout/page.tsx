import type { Metadata } from 'next';
import { MBIWizard } from '@/components/tests/mbi/mbi-wizard';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Test Burnout (MBI) | Audrey Castets',
  description: 'Évaluation du niveau d\'épuisement professionnel. Test interactif gratuit.',
};

export default function BurnoutTestPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pt-32 pb-20 px-4">
        <MBIWizard />
      </main>
      <Footer />
    </div>
  );
}
