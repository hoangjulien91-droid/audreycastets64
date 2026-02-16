import { Link } from "next-view-transitions";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
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
} from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ContactForm } from "@/components/contact/contact-form";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contact - Prendre Rendez-vous avec Audrey Castets",
  description:
    "Contactez-moi pour un premier entretien gratuit. Réponse sous 24h. Consultations en cabinet, visio ou en entreprise. Tel: 07 43 68 72 97",
  alternates: {
    canonical: "https://www.audrey-castets.fr/contact",
  },
  openGraph: {
    title: "Contact - Prendre Rendez-vous avec Audrey Castets",
    description: "Contactez-moi pour un premier entretien gratuit. Réponse sous 24h.",
    url: "https://www.audrey-castets.fr/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Contact" }]} />
      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <Sparkles className="h-4 w-4" />,
              text: "Contact",
            }}
            title={
              <>
                Prenons{" "}
                <span className="from-primary to-accent-violet bg-linear-to-r bg-clip-text text-transparent">
                  contact
                </span>
              </>
            }
            subtitle="Prenons contact pour échanger sur vos besoins et voir comment je peux vous accompagner dans votre démarche."
            breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
            align="left"
          >
            <div className="mt-8 flex flex-wrap gap-3" role="list" aria-label="Avantages">
              <div
                className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm backdrop-blur-sm"
                role="listitem"
              >
                <CheckCircle className="text-primary mr-2 inline h-4 w-4" aria-hidden="true" />
                Réponse sous 24h
              </div>
              <div
                className="border-accent-violet/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm backdrop-blur-sm"
                role="listitem"
              >
                <CheckCircle
                  className="text-accent-violet mr-2 inline h-4 w-4"
                  aria-hidden="true"
                />
                Premier entretien offert
              </div>
              <div
                className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm backdrop-blur-sm"
                role="listitem"
              >
                <CheckCircle className="text-primary mr-2 inline h-4 w-4" aria-hidden="true" />
                Confidentialité absolue
              </div>
              <div
                className="border-accent-violet/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm backdrop-blur-sm"
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

          <section className="bg-white py-20" aria-labelledby="contact-info-heading">
            <div className="container mx-auto px-4">
              <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2
                    id="contact-info-heading"
                    className="text-foreground font-display mb-6 text-4xl font-bold md:text-5xl"
                  >
                    Prêt(e) à franchir le pas ?
                  </h2>
                  <p className="text-muted-foreground mb-10 text-lg">
                    Je vous accompagne avec bienveillance et professionnalisme dans votre parcours.
                    N'hésitez pas à me contacter pour échanger sur vos besoins.
                  </p>

                  <div className="mb-12 space-y-6" role="list" aria-label="Coordonnées">
                    <article
                      className="from-bg-soft border-border-soft/30 rounded-2xl border bg-linear-to-br to-white p-6 transition-all duration-300 hover:shadow-lg"
                      role="listitem"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="from-primary to-accent-violet rounded-xl bg-linear-to-br p-3 shadow-lg"
                          aria-hidden="true"
                        >
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-foreground mb-1 font-semibold">Téléphone</h3>
                          <a
                            href="tel:0743687297"
                            className="text-primary font-medium hover:underline"
                          >
                            07 43 68 72 97
                          </a>
                          <p className="text-muted-foreground mt-1 text-sm">
                            Premier entretien de 15 min offert
                          </p>
                        </div>
                      </div>
                    </article>

                    <article
                      className="from-bg-subtle border-accent-violet/30 rounded-2xl border bg-linear-to-br to-white p-6 transition-all duration-300 hover:shadow-lg"
                      role="listitem"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="from-accent-violet to-accent-violet-dark rounded-xl bg-linear-to-br p-3 shadow-lg"
                          aria-hidden="true"
                        >
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-foreground mb-1 font-semibold">Email</h3>
                          <a
                            href="mailto:audrey.castets@gmail.com"
                            className="text-accent-violet font-medium hover:underline"
                          >
                            audrey.castets@gmail.com
                          </a>
                          <p className="text-muted-foreground mt-1 text-sm">
                            Réponse garantie sous 24h
                          </p>
                        </div>
                      </div>
                    </article>

                    <article
                      className="from-bg-soft border-border-soft/30 rounded-2xl border bg-linear-to-br to-white p-6 transition-all duration-300 hover:shadow-lg"
                      role="listitem"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="from-primary to-accent-violet rounded-xl bg-linear-to-br p-3 shadow-lg"
                          aria-hidden="true"
                        >
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-foreground mb-1 font-semibold">Consultations</h3>
                          <p className="text-muted-foreground">
                            Cabinet, Visioconférence, ou en entreprise selon vos besoins
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="from-bg-subtle to-bg-soft border-border-soft/30 rounded-3xl border bg-linear-to-br p-8">
                    <h3 className="text-foreground mb-6 text-xl font-bold">
                      Pourquoi me contacter ?
                    </h3>
                    <div className="space-y-4" role="list">
                      <div className="flex items-start gap-3" role="listitem">
                        <div className="mt-1 rounded-lg bg-white p-2" aria-hidden="true">
                          <Clock className="text-primary h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-foreground mb-1 font-semibold">Réponse sous 24h</h4>
                          <p className="text-muted-foreground text-sm">
                            Je réponds rapidement à toutes vos demandes
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3" role="listitem">
                        <div className="mt-1 rounded-lg bg-white p-2" aria-hidden="true">
                          <MessageCircle className="text-accent-violet h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-foreground mb-1 font-semibold">Sans engagement</h4>
                          <p className="text-muted-foreground text-sm">
                            Échangeons en toute liberté sur vos besoins
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3" role="listitem">
                        <div className="mt-1 rounded-lg bg-white p-2" aria-hidden="true">
                          <CheckCircle className="text-primary h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-foreground mb-1 font-semibold">
                            Confidentialité assurée
                          </h4>
                          <p className="text-muted-foreground text-sm">
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
