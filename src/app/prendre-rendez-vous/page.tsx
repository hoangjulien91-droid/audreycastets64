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
  CheckCircle,
  Shield,
  Video,
  Building,
  Calendar,
  ChevronRight,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ZcalEmbed } from "@/components/booking/zcal-embed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Prendre Rendez-vous en Ligne - Audrey Castets Psychologue du Travail",
  description:
    "Réservez votre créneau en direct avec Audrey Castets. Premier entretien de 15 min offert. Consultations en visioconférence ou en cabinet (Anglet, Ondres). Tél: 07 43 68 72 97",
  alternates: {
    canonical: "https://www.audrey-castets.fr/prendre-rendez-vous",
  },
  openGraph: {
    title: "Prendre Rendez-vous en Ligne - Audrey Castets Psychologue",
    description:
      "Choisissez votre créneau horaire en toute simplicité. Premier échange de 15 minutes offert sans engagement.",
    url: "https://www.audrey-castets.fr/prendre-rendez-vous",
    type: "website",
  },
};

const steps = [
  {
    step: "01",
    title: "Sélectionnez votre créneau",
    desc: "Choisissez le jour et l'heure qui s'adaptent le mieux à votre emploi du temps sur le calendrier interactif.",
  },
  {
    step: "02",
    title: "Recevez votre confirmation",
    desc: "Vous recevez instantanément un email avec tous les détails et le lien de visioconférence sécurisé si applicable.",
  },
  {
    step: "03",
    title: "Premier échange de 15 min offert",
    desc: "Nous faisons le point sur votre situation, vos objectifs et validons la formule d'accompagnement adéquate.",
  },
  {
    step: "04",
    title: "Accompagnement sur-mesure",
    desc: "Nous débutons nos séances (TCC, EFT, Bilan de compétences ou conseil RH) selon votre rythme.",
  },
];

const rdvFaqs = [
  {
    q: "Comment se déroule le premier entretien gratuit de 15 minutes ?",
    a: "C'est un premier échange téléphonique bienveillant et sans aucun engagement. Il me permet de comprendre vos attentes, de vous expliquer ma méthodologie de travail et de nous assurer que mon accompagnement correspond parfaitement à votre besoin.",
  },
  {
    q: "Proposez-vous des consultations en présentiel et en visio ?",
    a: "Oui, tout à fait ! Les consultations peuvent se dérouler en visioconférence sécurisée (accessible partout en France et à l'international) ou en cabinet dans les Landes et le Pays Basque (Anglet, Ondres, et déplacements entreprise sur demande).",
  },
  {
    q: "Les séances sont-elles prises en charge par la mutuelle ?",
    a: "Oui, de nombreuses mutuelles remboursent les consultations de psychologie. Une facture officielle avec mon numéro ADELI de psychologue vous sera délivrée après chaque séance.",
  },
  {
    q: "Puis-je modifier ou annuler mon créneau ?",
    a: "Oui, vous pouvez décaler ou annuler votre rendez-vous très simplement depuis l'email de confirmation reçu, jusqu'à 48h avant l'horaire convenu sans frais.",
  },
];

export default function PrendreRendezVousPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Prendre Rendez-vous" }]} />
      <ServiceJsonLd
        name="Consultation Psychologie du Travail & Bilan de Compétences"
        description="Prise de rendez-vous en ligne pour consultations et bilan de compétences avec Audrey Castets."
      />

      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <Sparkles className="h-4 w-4" />,
              text: "Agenda en direct",
            }}
            title={
              <>
                Prendre{" "}
                <span className="from-primary to-accent-violet bg-linear-to-r bg-clip-text text-transparent">
                  Rendez-vous
                </span>{" "}
                en ligne
              </>
            }
            subtitle="Sélectionnez votre créneau en toute autonomie. Premier échange téléphonique de 15 minutes offert pour faire connaissance."
            breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Prendre Rendez-vous" }]}
            align="center"
          >
            <div
              className="mt-8 flex flex-wrap justify-center gap-3"
              role="list"
              aria-label="Avantages réservation"
            >
              <div
                className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm"
                role="listitem"
              >
                <CheckCircle className="text-primary mr-2 inline h-4 w-4" aria-hidden="true" />
                Premier échange 15 min offert
              </div>
              <div
                className="border-accent-violet/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm"
                role="listitem"
              >
                <Clock className="text-accent-violet mr-2 inline h-4 w-4" aria-hidden="true" />
                Confirmation instantanée
              </div>
              <div
                className="border-border-soft/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm"
                role="listitem"
              >
                <Video className="text-primary mr-2 inline h-4 w-4" aria-hidden="true" />
                Visio ou Cabinet
              </div>
              <div
                className="border-accent-violet/30 text-foreground rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm"
                role="listitem"
              >
                <Shield className="text-accent-violet mr-2 inline h-4 w-4" aria-hidden="true" />
                Confidentialité médicale
              </div>
            </div>
          </PageHero>

          {/* Booking Calendar Section */}
          <section className="bg-white py-12 md:py-20" aria-labelledby="calendar-heading">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6">
              <div className="mb-10 text-center">
                <span className="text-primary mb-2 block text-xs font-bold tracking-widest uppercase sm:text-sm">
                  Disponibilités en temps réel
                </span>
                <h2
                  id="calendar-heading"
                  className="font-display text-foreground text-3xl font-bold md:text-4xl"
                >
                  Choisissez la date et l'horaire qui vous conviennent
                </h2>
                <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-base">
                  Le calendrier se met à jour en direct. Vous recevrez immédiatement un email de
                  confirmation avec tous les détails.
                </p>
              </div>

              {/* Zcal Embedded Scheduler */}
              <ZcalEmbed minHeight={660} showCardWrapper={true} showReassuranceHeader={true} />

              {/* Alternative Quick Contact Bar */}
              <div className="border-primary/15 from-bg-subtle/50 to-bg-soft/50 mt-12 rounded-3xl border bg-linear-to-br via-white p-6 shadow-lg backdrop-blur-md sm:p-8">
                <div className="grid items-center gap-6 md:grid-cols-3">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-white shadow-md">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold">Par téléphone</p>
                      <a href="tel:0743687297" className="text-primary font-bold hover:underline">
                        07 43 68 72 97
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-accent-violet flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-white shadow-md">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold">Par email</p>
                      <a
                        href="mailto:audrey.castets@gmail.com"
                        className="text-accent-violet block truncate text-sm font-bold hover:underline"
                      >
                        audrey.castets@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary-dark flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-white shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold">Lieux de consultation</p>
                      <p className="text-muted-foreground text-xs">
                        Visio, Anglet (64) & Ondres (40)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="bg-warm-rose/30 py-16 md:py-24" aria-labelledby="steps-heading">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mb-14 text-center">
                <span className="text-primary mb-2 block text-xs font-bold tracking-widest uppercase sm:text-sm">
                  Déroulement
                </span>
                <h2
                  id="steps-heading"
                  className="font-display text-foreground text-3xl font-bold md:text-4xl"
                >
                  Comment se passe la prise de rendez-vous ?
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((item, idx) => (
                  <div
                    key={idx}
                    className="card-premium relative flex flex-col justify-between p-6 sm:p-8"
                  >
                    <div>
                      <span className="font-display text-primary/20 mb-4 block text-4xl font-black">
                        {item.step}
                      </span>
                      <h3 className="font-display text-foreground mb-2 text-lg font-bold">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="bg-white py-16 md:py-24" aria-labelledby="faq-heading">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6">
              <div className="mb-12 text-center">
                <span className="text-primary mb-2 block text-xs font-bold tracking-widest uppercase sm:text-sm">
                  Questions fréquentes
                </span>
                <h2
                  id="faq-heading"
                  className="font-display text-foreground text-3xl font-bold md:text-4xl"
                >
                  Tout ce qu'il faut savoir avant de réserver
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {rdvFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-border-soft/40 rounded-2xl border bg-white px-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <AccordionTrigger className="font-display text-foreground hover:text-primary py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed sm:text-base">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground text-sm">
                  Vous avez une question spécifique ou un besoin particulier ?
                </p>
                <Link
                  href="/contact#message"
                  className="text-primary mt-2 inline-flex items-center gap-1.5 font-semibold hover:underline"
                >
                  M'envoyer un message via le formulaire
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Final Reassurance Banner */}
          <section className="from-primary via-accent-violet to-primary bg-linear-to-r py-16 text-center text-white">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6">
              <Sparkles className="mx-auto mb-4 h-8 w-8 animate-pulse text-white/80" />
              <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">
                Prêt(e) à démarrer votre accompagnement ?
              </h2>
              <p className="mb-8 text-base text-white/90 sm:text-lg">
                Faites le premier pas vers votre sérénité et votre équilibre professionnel dès
                maintenant.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#calendar-heading"
                  className="text-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold shadow-xl transition-all hover:scale-105"
                >
                  <Calendar className="h-5 w-5" />
                  Choisir un horaire
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Découvrir les services
                  <ArrowRight className="h-5 w-5" />
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
