import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { PageHero } from "@/components/ui/page-hero";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ShieldCheck, Lock, Eye, FileText, Database, UserCheck } from "lucide-react";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Politique de Confidentialité & RGPD - Audrey Castets",
  description:
    "Engagement d'Audrey Castets concernant la protection de vos données personnelles, le secret médical et la conformité au RGPD.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/politique-confidentialite",
  },
  openGraph: {
    title: "Politique de Confidentialité - Audrey Castets Psychologue",
    description: "Protection de vos données personnelles et respect du secret professionnel.",
    url: "https://www.audrey-castets.fr/politique-confidentialite",
    type: "website",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Accueil", url: "/" }, { name: "Politique de confidentialité" }]}
      />

      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <ShieldCheck className="h-4 w-4" />,
              text: "Protection des Données & RGPD",
            }}
            title={
              <>
                Politique de{" "}
                <span className="from-primary to-accent-violet bg-gradient-to-r bg-clip-text text-transparent">
                  Confidentialité
                </span>
              </>
            }
            subtitle="Notre engagement absolu pour la sécurité de vos informations et le respect strict du secret professionnel."
            breadcrumbs={[
              { label: "Accueil", href: "/" },
              { label: "Politique de confidentialité" },
            ]}
            align="center"
          />

          <div className="container mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <div className="space-y-12">
              {/* 1. Engagement & Secret Professionnel */}
              <section className="bg-card text-card-foreground border-border/10 rounded-2xl border p-8 shadow-sm backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">
                    1. Secret Professionnel & Cadre Clinique
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  En tant que psychologue du travail diplômée d'État (ADELI : 409307198 / RPPS :
                  10009709337), l'ensemble de vos échanges, notes d'entretien, bilans de compétences
                  et auto-évaluations sont protégés par le{" "}
                  <strong className="text-foreground">secret professionnel</strong> absolu. Aucune
                  information à caractère confidentiel n'est transmise à un tiers ou à votre
                  employeur sans votre accord formel écrit.
                </p>
              </section>

              {/* 2. Données Collectées */}
              <section className="bg-card text-card-foreground border-border/10 rounded-2xl border p-8 shadow-sm backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <Database className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">2. Données Collectées</h2>
                </div>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    Nous limitons la collecte des données au strict nécessaire pour assurer le suivi
                    de votre demande :
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong className="text-foreground">Formulaire de contact :</strong> Nom,
                      prénom, email, numéro de téléphone, message/motif de consultation.
                    </li>
                    <li>
                      <strong className="text-foreground">Prise de rendez-vous :</strong> Créneau
                      choisi, coordonnées de contact, modalité de rendez-vous (visio ou cabinet).
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Questionnaires d'évaluation (DIVA, MBI) :
                      </strong>{" "}
                      Réponses calculées instantanément côté client ou transmises sur votre demande
                      expresse pour votre suivi.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. Finalités & Durée de Conservation */}
              <section className="bg-card text-card-foreground border-border/10 rounded-2xl border p-8 shadow-sm backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">
                    3. Finalités du Traitement & Durée
                  </h2>
                </div>
                <div className="text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    Vos données sont exclusivement utilisées pour la gestion de vos rendez-vous, la
                    réponse à vos questions et la tenue de vos dossiers d'accompagnement (Bilan de
                    compétences, TCC, coaching).
                  </p>
                  <p>
                    Les données sont conservées pour une durée n'excédant pas celle nécessaire aux
                    finalités pour lesquelles elles ont été collectées, conformément aux
                    recommandations de la CNIL et aux obligations légales des professionnels de
                    santé.
                  </p>
                </div>
              </section>

              {/* 4. Vos Droits RGPD */}
              <section className="bg-card text-card-foreground border-border/10 rounded-2xl border p-8 shadow-sm backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">
                    4. Vos Droits d'Accès, Rectification & Suppression
                  </h2>
                </div>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                    disposez à tout moment d'un droit d'accès, de rectification, de portabilité et
                    de suppression de vos données personnelles.
                  </p>
                  <p>
                    Pour exercer vos droits, adressez simplement votre demande par email à :{" "}
                    <a
                      href="mailto:contact@audrey-castets.fr"
                      className="text-primary font-semibold hover:underline"
                    >
                      contact@audrey-castets.fr
                    </a>{" "}
                    ou par téléphone au{" "}
                    <a href="tel:0743687297" className="text-primary font-semibold hover:underline">
                      07 43 68 72 97
                    </a>
                    .
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
