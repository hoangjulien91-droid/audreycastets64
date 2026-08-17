import { Link } from "next-view-transitions";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  ChevronRight,
  Calendar,
} from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ContactBookingTabs } from "@/components/contact/contact-booking-tabs";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous - Audrey Castets Psychologue du Travail",
  description:
    "Prenez rendez-vous en ligne ou contactez Audrey Castets. Premier entretien de 15 min offert. Consultations en cabinet, visio ou en entreprise. Tél: 07 43 68 72 97",
  alternates: {
    canonical: "https://www.audrey-castets.fr/contact",
  },
  openGraph: {
    title: "Contact & Rendez-vous - Audrey Castets Psychologue",
    description:
      "Prenez rendez-vous en ligne ou envoyez un message. Premier entretien de 15 min gratuit.",
    url: "https://www.audrey-castets.fr/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Contact" }]} />
      <ServiceJsonLd
        name="Prise de contact & Rendez-vous Psychologue"
        description="Contact et prise de rendez-vous avec Audrey Castets, Psychologue du Travail."
      />
      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <Sparkles className="h-4 w-4" />,
              text: "Contact & Rendez-vous",
            }}
            title={
              <>
                Prenons{" "}
                <span className="from-primary to-accent-violet bg-linear-to-r bg-clip-text text-transparent">
                  contact
                </span>
              </>
            }
            subtitle="Réservez directement votre créneau en ligne ou envoyez-moi un message pour échanger sur vos besoins."
            breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
            align="left"
          >
            <div className="mt-8 flex flex-wrap gap-3" role="list" aria-label="Avantages">
              <div
                className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm"
                role="listitem"
              >
                <CheckCircle className="text-primary mr-2 inline h-4 w-4" aria-hidden="true" />
                Premier entretien de 15 min offert
              </div>
              <div
                className="border-accent-violet/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm"
                role="listitem"
              >
                <CheckCircle
                  className="text-accent-violet mr-2 inline h-4 w-4"
                  aria-hidden="true"
                />
                Réservation instantanée
              </div>
              <div
                className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm"
                role="listitem"
              >
                <CheckCircle className="text-primary mr-2 inline h-4 w-4" aria-hidden="true" />
                Confidentialité absolue
              </div>
              <div
                className="border-accent-violet/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm"
                role="listitem"
              >
                <CheckCircle
                  className="text-accent-violet mr-2 inline h-4 w-4"
                  aria-hidden="true"
                />
                Sans engagement
              </div>
            </div>
          </PageHero>

          <section className="bg-white py-16 md:py-24" aria-labelledby="contact-info-heading">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="mb-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Left Side: Contact coordinates */}
                <div className="lg:col-span-4">
                  <h2
                    id="contact-info-heading"
                    className="text-foreground font-display mb-4 text-3xl font-bold md:text-4xl"
                  >
                    Prêt(e) à franchir le pas ?
                  </h2>
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    Je vous accompagne avec bienveillance et professionnalisme dans votre parcours.
                    N'hésitez pas à me contacter ou à réserver directement ci-contre.
                  </p>

                  <div className="mb-8 space-y-4" role="list" aria-label="Coordonnées">
                    <article
                      className="from-bg-soft border-border-soft/30 rounded-2xl border bg-linear-to-br to-white p-5 transition-all duration-300 hover:shadow-md"
                      role="listitem"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="from-primary to-accent-violet rounded-xl bg-linear-to-br p-3 shadow-md"
                          aria-hidden="true"
                        >
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-foreground mb-0.5 font-semibold">Téléphone</h3>
                          <a
                            href="tel:0743687297"
                            className="text-primary font-bold hover:underline"
                          >
                            07 43 68 72 97
                          </a>
                          <p className="text-muted-foreground mt-0.5 text-xs">
                            Premier échange offert (15 min)
                          </p>
                        </div>
                      </div>
                    </article>

                    <article
                      className="from-bg-subtle border-accent-violet/30 rounded-2xl border bg-linear-to-br to-white p-5 transition-all duration-300 hover:shadow-md"
                      role="listitem"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="from-accent-violet to-accent-violet-dark rounded-xl bg-linear-to-br p-3 shadow-md"
                          aria-hidden="true"
                        >
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-foreground mb-0.5 font-semibold">Email</h3>
                          <a
                            href="mailto:audrey.castets@gmail.com"
                            className="text-accent-violet font-bold hover:underline"
                          >
                            audrey.castets@gmail.com
                          </a>
                          <p className="text-muted-foreground mt-0.5 text-xs">
                            Réponse garantie sous 24h
                          </p>
                        </div>
                      </div>
                    </article>

                    <article
                      className="from-bg-soft border-border-soft/30 rounded-2xl border bg-linear-to-br to-white p-5 transition-all duration-300 hover:shadow-md"
                      role="listitem"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="from-primary to-accent-violet rounded-xl bg-linear-to-br p-3 shadow-md"
                          aria-hidden="true"
                        >
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-foreground mb-0.5 font-semibold">Consultations</h3>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            Cabinet à Anglet & Ondres, Visioconférence sécurisée partout en France,
                            ou en entreprise
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="from-bg-subtle to-bg-soft border-border-soft/30 rounded-3xl border bg-linear-to-br p-6 sm:p-7">
                    <h3 className="text-foreground mb-5 text-lg font-bold">
                      Pourquoi me contacter ?
                    </h3>
                    <div className="space-y-4" role="list">
                      <div className="flex items-start gap-3" role="listitem">
                        <div
                          className="mt-0.5 rounded-lg bg-white p-2 shadow-xs"
                          aria-hidden="true"
                        >
                          <Clock className="text-primary h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-foreground text-sm font-semibold">
                            Réponse sous 24h
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            Je réponds rapidement à toutes vos demandes
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3" role="listitem">
                        <div
                          className="mt-0.5 rounded-lg bg-white p-2 shadow-xs"
                          aria-hidden="true"
                        >
                          <MessageCircle className="text-accent-violet h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-foreground text-sm font-semibold">Sans engagement</h4>
                          <p className="text-muted-foreground text-xs">
                            Échangeons en toute liberté sur vos besoins
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3" role="listitem">
                        <div
                          className="mt-0.5 rounded-lg bg-white p-2 shadow-xs"
                          aria-hidden="true"
                        >
                          <CheckCircle className="text-primary h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-foreground text-sm font-semibold">
                            Confidentialité assurée
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            Vos informations sont strictement confidentielles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Interactive Booking Tabs (Zcal / Message Form) */}
                <div className="lg:col-span-8" id="rdv">
                  <ContactBookingTabs />
                </div>
              </div>
            </div>
          </section>

          <section
            className="from-primary via-accent-violet to-primary relative overflow-hidden bg-linear-to-br py-20"
            aria-labelledby="cta-heading"
          >
            <div
              className="from-primary/90 to-accent-violet/90 absolute inset-0 bg-linear-to-r"
              aria-hidden="true"
            />
            <div className="relative z-10 container mx-auto px-4 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 animate-pulse text-white" aria-hidden="true" />
                <span className="text-sm font-medium text-white">Besoin d'aide ?</span>
              </div>

              <h2
                id="cta-heading"
                className="font-display mb-6 text-4xl font-bold text-white md:text-5xl"
              >
                Des questions ? Je suis là pour vous répondre
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
                N'hésitez pas à consulter ma FAQ ou à découvrir mon approche thérapeutique
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/faq"
                  className="text-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold shadow-xl transition-all hover:scale-105"
                  aria-label="Consulter la foire aux questions"
                >
                  Consulter la FAQ
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/mon-approche"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
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
