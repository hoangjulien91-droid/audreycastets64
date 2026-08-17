"use client";

import { BlogPost } from "@/lib/blog-posts";
import { motion } from "framer-motion";
import { Link as LinkIcon, ArrowRight, Flame, Brain, Calendar, Sparkles } from "lucide-react";
import { Link } from "next-view-transitions";
import { SectionHeader } from "@/components/ui/section-header";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const copyHeadingLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  const isBurnout = post.slug.includes("burnout");
  const isBilan = post.slug.includes("bilan");

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((section, index) => (
              <div key={index} className="mb-12">
                {/* Section Heading with Link */}
                <div className="group relative" id={section.id}>
                  <SectionHeader
                    as="h2"
                    size="subsection"
                    title={
                      <div className="flex items-center gap-2">
                        <Link
                          href={`#${section.id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {section.heading}
                        </Link>
                        <button
                          onClick={() => copyHeadingLink(section.id)}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                          aria-label={`Copier le lien vers ${section.heading}`}
                          title="Copier le lien"
                        >
                          <LinkIcon className="text-muted-foreground hover:text-primary h-5 w-5" />
                        </button>
                      </div>
                    }
                    className="mb-4"
                  />
                </div>

                {/* Paragraphs */}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-foreground/90 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* List */}
                {section.list && (
                  <div className="my-6">
                    {section.list.type === "number" ? (
                      <ol className="text-foreground/90 list-inside list-decimal space-y-2">
                        {section.list.items.map((item, iIndex) => (
                          <li key={iIndex} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="space-y-2">
                        {section.list.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-3">
                            <span className="bg-primary mt-2.5 inline-flex h-1.5 w-1.5 flex-shrink-0 items-center justify-center rounded-full" />
                            <span className="text-foreground/90 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* S-Tier Contextual Callout for Maillage Interne */}
          <div className="mt-12 rounded-3xl border border-primary/20 bg-linear-to-br from-primary/5 via-white to-accent-violet/5 p-6 shadow-md sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {isBurnout ? "Auto-évaluation clinique" : isBilan ? "Accompagnement certifié" : "Tests en ligne"}
                </div>
                <h3 className="font-display text-foreground text-xl font-bold">
                  {isBurnout
                    ? "Mesurez votre niveau d'épuisement avec le test MBI"
                    : isBilan
                    ? "Besoin de faire le point sur votre avenir professionnel ?"
                    : "Faites le point sur votre situation avec nos bilans"}
                </h3>
                <p className="text-muted-foreground text-sm max-w-xl">
                  {isBurnout
                    ? "Passez notre test d'inventaire de burnout de Maslach en 5 minutes. Vos résultats vous sont synthétisés immédiatement."
                    : isBilan
                    ? "Bénéficiez d'un premier entretien de 15 minutes offert pour étudier la faisabilité et le financement CPF de votre bilan."
                    : "Découvrez nos outils de pré-diagnostic gratuits et confidentiels (Burnout MBI & TDAH DIVA 2.0)."}
                </p>
              </div>

              <div className="flex-shrink-0">
                {isBurnout ? (
                  <Link
                    href="/tests/burnout"
                    className="btn-premium inline-flex items-center gap-2 !px-6 !py-3.5 text-sm"
                  >
                    <Flame className="h-4 w-4" />
                    <span>Passer le test Burnout</span>
                  </Link>
                ) : isBilan ? (
                  <Link
                    href="/prendre-rendez-vous"
                    className="btn-premium inline-flex items-center gap-2 !px-6 !py-3.5 text-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Réserver mes 15 min offertes</span>
                  </Link>
                ) : (
                  <Link
                    href="/tests"
                    className="btn-premium inline-flex items-center gap-2 !px-6 !py-3.5 text-sm"
                  >
                    <Brain className="h-4 w-4" />
                    <span>Accéder aux tests</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Back to Blog Link */}
          <div className="border-border mt-10 flex items-center justify-between border-t pt-8">
            <Link
              href="/blog"
              className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-semibold transition-colors"
            >
              ← Retour à la liste des articles
            </Link>

            <Link
              href="/tests"
              className="text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            >
              <span>Tous nos bilans psychométriques</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
