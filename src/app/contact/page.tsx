import { Link } from 'next-view-transitions';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { PageHero } from "@/components/ui/page-hero";
import { Sparkles, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, ChevronRight } from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ContactForm } from '@/components/contact/contact-form';

export const dynamic = 'force-static';
export const revalidate = 3600;

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
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <Sparkles className="w-4 h-4" />,
              text: "Contact"
            }}
            title={
              <>
                Prenons <span className="bg-linear-to-r from-primary to-[#A594B3] bg-clip-text text-transparent">contact</span>
              </>
            }
            subtitle="Prenons contact pour échanger sur vos besoins et voir comment je peux vous accompagner dans votre démarche."
            breadcrumbs={[
              { label: "Accueil", href: "/" },
              { label: "Contact" }
            ]}
            align="left"
          >
            <div className="flex flex-wrap gap-3 mt-8" role="list" aria-label="Avantages">
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#D4C5D9]/30 text-sm text-foreground" role="listitem">
                <CheckCircle className="w-4 h-4 inline mr-2 text-primary" aria-hidden="true" />
                Réponse sous 24h
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#A594B3]/30 text-sm text-foreground" role="listitem">
                <CheckCircle className="w-4 h-4 inline mr-2 text-[#A594B3]" aria-hidden="true" />
                Premier entretien offert
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#D4C5D9]/30 text-sm text-foreground" role="listitem">
                <CheckCircle className="w-4 h-4 inline mr-2 text-primary" aria-hidden="true" />
                Confidentialité absolue
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#A594B3]/30 text-sm text-foreground" role="listitem">
                <CheckCircle className="w-4 h-4 inline mr-2 text-[#A594B3]" aria-hidden="true" />
                Sans engagement
              </div>
            </div>
          </PageHero>

          <section className="py-20 bg-white" aria-labelledby="contact-info-heading">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div>
                  <h2 id="contact-info-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
                    Prêt(e) à franchir le pas ?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-10">
                    Je vous accompagne avec bienveillance et professionnalisme dans votre parcours. 
                    N'hésitez pas à me contacter pour échanger sur vos besoins.
                  </p>

                  <div className="space-y-6 mb-12" role="list" aria-label="Coordonnées">
                    <article className="bg-linear-to-br from-[#F3E8F0] to-white p-6 rounded-2xl border border-[#D4C5D9]/30 hover:shadow-lg transition-all duration-300" role="listitem">
                      <div className="flex items-start gap-4">
                        <div className="bg-linear-to-br from-primary to-[#A594B3] p-3 rounded-xl shadow-lg" aria-hidden="true">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Téléphone
                          </h3>
                          <a href="tel:0743687297" className="text-primary hover:underline font-medium">
                            07 43 68 72 97
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Premier entretien de 15 min offert
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="bg-linear-to-br from-[#E8DFF0] to-white p-6 rounded-2xl border border-[#A594B3]/30 hover:shadow-lg transition-all duration-300" role="listitem">
                      <div className="flex items-start gap-4">
                        <div className="bg-linear-to-br from-[#A594B3] to-[#8B7A98] p-3 rounded-xl shadow-lg" aria-hidden="true">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Email
                          </h3>
                          <a href="mailto:contact@audrey-castets.fr" className="text-[#A594B3] hover:underline font-medium">
                            contact@audrey-castets.fr
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Réponse garantie sous 24h
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="bg-linear-to-br from-[#F3E8F0] to-white p-6 rounded-2xl border border-[#D4C5D9]/30 hover:shadow-lg transition-all duration-300" role="listitem">
                      <div className="flex items-start gap-4">
                        <div className="bg-linear-to-br from-primary to-[#A594B3] p-3 rounded-xl shadow-lg" aria-hidden="true">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Consultations
                          </h3>
                          <p className="text-muted-foreground">
                            Cabinet, Visioconférence, ou en entreprise selon vos besoins
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="bg-linear-to-br from-[#E8DFF0] to-[#F3E8F0] p-8 rounded-3xl border border-[#D4C5D9]/30">
                    <h3 className="text-xl font-bold mb-6 text-foreground">
                      Pourquoi me contacter ?
                    </h3>
                    <div className="space-y-4" role="list">
                      <div className="flex items-start gap-3" role="listitem">
                        <div className="bg-white p-2 rounded-lg mt-1" aria-hidden="true">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            Réponse sous 24h
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Je réponds rapidement à toutes vos demandes
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3" role="listitem">
                        <div className="bg-white p-2 rounded-lg mt-1" aria-hidden="true">
                          <MessageCircle className="w-5 h-5 text-[#A594B3]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            Sans engagement
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Échangeons en toute liberté sur vos besoins
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3" role="listitem">
                        <div className="bg-white p-2 rounded-lg mt-1" aria-hidden="true">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            Confidentialité assurée
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Vos informations sont strictement confidentielles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </section>

          <section 
            className="py-20 bg-linear-to-br from-primary via-[#A594B3] to-primary relative overflow-hidden"
            aria-labelledby="cta-heading"
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-[#A594B3]/90" aria-hidden="true" />
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-white">Besoin d'aide ?</span>
              </div>
              
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Des questions ? Je suis là pour vous répondre
              </h2>
              
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
                N'hésitez pas à consulter ma FAQ ou à découvrir mon approche thérapeutique
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl"
                  aria-label="Consulter la foire aux questions"
                >
                  Consulter la FAQ
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/mon-approche"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                  aria-label="Découvrir mon approche thérapeutique"
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
