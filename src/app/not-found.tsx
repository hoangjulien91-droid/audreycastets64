import Link from 'next/link';
import { Metadata } from 'next';
import { Home, ArrowLeft, Search, FileQuestion } from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Page non trouvée - 404',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#F3E8F0] via-[#E8DFF0]/30 to-background flex flex-col">
        <Header />
        
        <main className="flex-grow flex items-center justify-center px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Illustration */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <FileQuestion className="w-64 h-64 text-primary" />
              </div>
              <div className="relative">
                <h1 className="font-display text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A594B3] via-[#8B7A98] to-[#C5B8D0] leading-none">
                  404
                </h1>
              </div>
            </div>

            {/* Content */}
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page non trouvée
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Peut-être pouvez-vous trouver ce que vous cherchez dans les liens ci-dessous.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#A594B3] to-[#8B7A98] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-[#D4C5D9] hover:bg-[#F3E8F0] transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Page précédente
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#D4C5D9]/30">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Pages populaires
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { href: '/services', label: 'Mes Services', icon: '💼' },
                  { href: '/qui-suis-je', label: 'Qui suis-je', icon: '👋' },
                  { href: '/mon-approche', label: 'Mon Approche', icon: '🎯' },
                  { href: '/tarifs', label: 'Tarifs', icon: '💰' },
                  { href: '/faq', label: 'FAQ', icon: '❓' },
                  { href: '/contact', label: 'Contact', icon: '📧' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[#D4C5D9]/30 hover:bg-[#F3E8F0] hover:border-primary/30 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Text */}
            <p className="mt-8 text-sm text-muted-foreground">
              Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à{' '}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                me contacter
              </Link>
              .
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
