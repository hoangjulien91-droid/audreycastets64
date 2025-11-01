import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';
import { ChevronRight, Sparkles, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ContactForm } from '@/components/contact/contact-form';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Contact - Prendre Rendez-vous avec Audrey Castets',
  description: 'Contactez-moi pour un premier entretien gratuit. Réponse sous 24h. Consultations en cabinet, visio ou en entreprise. Tel: 07 43 68 72 97',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/contact',
  },
  openGraph: {
    title: 'Contact - Prendre Rendez-vous avec Audrey Castets',
    description: 'Contactez-moi pour un premier entretien gratuit. Réponse sous 24h.',
    url: 'https://www.audrey-castets.fr/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Contact' }
      ]} />
      <div className="min-h-screen bg-[var(--color-background)]">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section with Breadcrumb */}
          <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#F3E8F0] via-[#E8DFF0]/30 to-background">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F3E8F0]/40 via-[#E8DFF0]/30 to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4C5D9]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A594B3]/15 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link href="/" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Accueil
                </Link>
                <ChevronRight className="w-4 h-4 text-[var(--color-text-secondary)]" />
                <span className="text-[var(--color-primary)] font-medium">Contact</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#D4C5D9]/30">
                <Sparkles className="w-4 h-4 text-[var(--color-primary)] animate-pulse" />
                <span className="text-sm font-medium text-[var(--color-primary)]">Contact</span>
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                Prenons <span className="bg-gradient-to-r from-[var(--color-primary)] to-[#A594B3] bg-clip-text text-transparent">contact</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mb-10">
                Prenons contact pour échanger sur vos besoins et voir comment je peux vous accompagner dans votre démarche.
              </p>

              {/* Key Features Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#D4C5D9]/30 text-sm text-[var(--color-text-primary)]">
                  <CheckCircle className="w-4 h-4 inline mr-2 text-[var(--color-primary)]" />
                  Réponse sous 24h
                </div>
                <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#A594B3]/30 text-sm text-[var(--color-text-primary)]">
                  <CheckCircle className="w-4 h-4 inline mr-2 text-[#A594B3]" />
                  Premier entretien offert
                </div>
                <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#D4C5D9]/30 text-sm text-[var(--color-text-primary)]">
                  <CheckCircle className="w-4 h-4 inline mr-2 text-[var(--color-primary)]" />
                  Confidentialité absolue
                </div>
                <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#A594B3]/30 text-sm text-[var(--color-text-primary)]">
                  <CheckCircle className="w-4 h-4 inline mr-2 text-[#A594B3]" />
                  Sans engagement
                </div>
              </div>
            </div>
          </section>

          {/* Main Contact Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column - Contact Info & Features */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                    Prêt(e) à franchir le pas ?
                  </h2>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-10">
                    Je vous accompagne avec bienveillance et professionnalisme dans votre parcours. 
                    N'hésitez pas à me contacter pour échanger sur vos besoins.
                  </p>

                  {/* Contact Cards */}
                  <div className="space-y-6 mb-12">
                    <div className="bg-gradient-to-br from-[#F3E8F0] to-white p-6 rounded-2xl border border-[#D4C5D9]/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[#A594B3] p-3 rounded-xl shadow-lg">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                            Téléphone
                          </h3>
                          <a href="tel:0743687297" className="text-[var(--color-primary)] hover:underline font-medium">
                            07 43 68 72 97
                          </a>
                          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                            Premier entretien de 15 min offert
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#E8DFF0] to-white p-6 rounded-2xl border border-[#A594B3]/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-[#A594B3] to-[#8B7A98] p-3 rounded-xl shadow-lg">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                            Email
                          </h3>
                          <a href="mailto:contact@audrey-castets.fr" className="text-[#A594B3] hover:underline font-medium">
                            contact@audrey-castets.fr
                          </a>
                          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                            Réponse garantie sous 24h
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#F3E8F0] to-white p-6 rounded-2xl border border-[#D4C5D9]/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[#A594B3] p-3 rounded-xl shadow-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                            Consultations
                          </h3>
                          <p className="text-[var(--color-text-secondary)]">
                            Cabinet, Visioconférence, ou en entreprise selon vos besoins
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Features */}
                  <div className="bg-gradient-to-br from-[#E8DFF0] to-[#F3E8F0] p-8 rounded-3xl border border-[#D4C5D9]/30">
                    <h3 className="text-xl font-bold mb-6 text-[var(--color-text-primary)]">
                      Pourquoi me contacter ?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-lg mt-1">
                          <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                            Réponse sous 24h
                          </h4>
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            Je réponds rapidement à toutes vos demandes
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-lg mt-1">
                          <MessageCircle className="w-5 h-5 text-[#A594B3]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                            Sans engagement
                          </h4>
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            Échangeons en toute liberté sur vos besoins
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-lg mt-1">
                          <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                            Confidentialité assurée
                          </h4>
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            Vos informations sont strictement confidentielles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <ContactForm />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] via-[#A594B3] to-[var(--color-primary)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/90 to-[#A594B3]/90" />
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
                <span className="text-sm font-medium text-white">Besoin d'aide ?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Des questions ? Je suis là pour vous répondre
              </h2>
              
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
                N'hésitez pas à consulter ma FAQ ou à découvrir mon approche thérapeutique
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl"
                >
                  Consulter la FAQ
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/mon-approche"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  Découvrir mon approche
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}