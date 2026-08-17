import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { PageHero } from "@/components/ui/page-hero";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Shield, Scale, Building, Mail, Phone, Lock, Heart, Award } from "lucide-react";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Mentions Légales & Déontologie - Audrey Castets Psychologue",
  description:
    "Mentions légales, identification professionnelle (ADELI, RPPS), cadre déontologique et hébergement du site d'Audrey Castets, Psychologue du Travail.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/mentions-legales",
  },
  openGraph: {
    title: "Mentions Légales - Audrey Castets Psychologue du Travail",
    description: "Informations légales, cadre d'exercice et déontologie.",
    url: "https://www.audrey-castets.fr/mentions-legales",
    type: "website",
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Mentions légales" }]} />

      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          <PageHero
            badge={{
              icon: <Scale className="h-4 w-4" />,
              text: "Cadre Légal & Réglementaire",
            }}
            title={
              <>
                Mentions{" "}
                <span className="from-primary to-accent-violet bg-gradient-to-r bg-clip-text text-transparent">
                  Légales
                </span>
              </>
            }
            subtitle="Informations légales relatives à l'éditrice du site, aux qualifications professionnelles et aux conditions d'exercice."
            breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
            align="center"
          />

          <div className="container mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <div className="space-y-12">
              {/* 1. Éditeur du Site */}
              <section className="bg-card text-card-foreground border-border/10 rounded-2xl border p-8 shadow-sm backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <Building className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">1. Éditeur du Site</h2>
                </div>
                <div className="text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    <strong className="text-foreground">Éditrice :</strong> Audrey Castets
                  </p>
                  <p>
                    <strong className="text-foreground">Profession :</strong> Psychologue du Travail
                    et des Organisations
                  </p>
                  <p>
                    <strong className="text-foreground">Lieux d'exercice :</strong> Anglet (64600) &
                    Ondres (40440), consultations en présentiel et téléconsultations.
                  </p>
                  <p>
                    <strong className="text-foreground">Téléphone :</strong>{" "}
                    <a href="tel:0743687297" className="text-primary hover:underline">
                      07 43 68 72 97
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Email :</strong>{" "}
                    <a
                      href="mailto:contact@audrey-castets.fr"
                      className="text-primary hover:underline"
                    >
                      contact@audrey-castets.fr
                    </a>
                  </p>
                </div>
              </section>

              {/* 2. Titre Professionnel & Autorisations */}
              <section className="bg-card text-card-foreground border-border/10 rounded-2xl border p-8 shadow-sm backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <Award className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">
                    2. Enregistrement Professionnel & Déontologie
                  </h2>
                </div>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    Le titre de psychologue est un titre protégé par la loi n° 85-772 du 25 juillet
                    1985. Audrey Castets est titulaire d’un diplôme d'État de Psychologue du Travail
                    (Master 2) et enregistrée auprès de l'Agence Régionale de Santé (ARS).
                  </p>
                  <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                    <div className="bg-background/50 border-border/10 rounded-xl border p-4">
                      <span className="text-muted-foreground text-xs font-semibold uppercase">
                        Numéro ADELI
                      </span>
                      <p className="text-foreground text-lg font-bold">409307198</p>
                    </div>
                    <div className="bg-background/50 border-border/10 rounded-xl border p-4">
                      <span className="text-muted-foreground text-xs font-semibold uppercase">
                        Identifiant RPPS
                      </span>
                      <p className="text-foreground text-lg font-bold">10009709337</p>
                    </div>
                  </div>
                  <p className="pt-2">
                    L'exercice professionnel respecte strictement le{" "}
                    <strong className="text-foreground">
                      Code de Déontologie des Psychologues
                    </strong>
                    , garantissant la neutralité, l'absence de jugement et le respect absolu du{" "}
                    <strong className="text-foreground">secret professionnel</strong>.
                  </p>
                </div>
              </section>

              {/* 3. Hébergement */}
              <section className="bg-card text-card-foreground border-border/10 rounded-2xl border p-8 shadow-sm backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">3. Hébergement du Site</h2>
                </div>
                <div className="text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    <strong className="text-foreground">Hébergeur :</strong> Vercel Inc.
                  </p>
                  <p>
                    <strong className="text-foreground">Adresse :</strong> 440 N Barranca Ave #4133,
                    Covina, CA 91723, États-Unis
                  </p>
                  <p>
                    <strong className="text-foreground">Infrastructure :</strong> Serveurs européens
                    hautement sécurisés, conformes aux standards RGPD.
                  </p>
                </div>
              </section>

              {/* 4. Propriété Intellectuelle & Données */}
              <section className="bg-card text-card-foreground border-border/10 rounded-2xl border p-8 shadow-sm backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">
                    4. Propriété Intellectuelle & Données Personnelles
                  </h2>
                </div>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    L’ensemble des contenus (textes, visuels, logos, architectures et outils
                    d'évaluation interactifs) présents sur ce site est la propriété exclusive
                    d'Audrey Castets, sauf mention contraire explicite. Toute reproduction ou
                    diffusion sans accord préalable est interdite.
                  </p>
                  <p>
                    Pour en savoir plus sur la protection de vos données et l'exercice de vos
                    droits, consultez notre{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="text-primary font-medium hover:underline"
                    >
                      Politique de Confidentialité
                    </Link>
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
