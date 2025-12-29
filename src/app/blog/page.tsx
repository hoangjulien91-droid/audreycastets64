import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { FileText } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog & Changelog - Audrey Castets",
  description:
    "Articles, actualités et mises à jour techniques sur la psychologie du travail et les technologies web.",
  alternates: {
    canonical: "https://www.audrey-castets.fr/blog",
  },
  openGraph: {
    title: "Blog & Changelog - Audrey Castets",
    description: "Articles et actualités sur la psychologie du travail",
    url: "https://www.audrey-castets.fr/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: "Blog" }]} />
      <div className="bg-background min-h-screen">
        <Header />

        <main className="pt-20" id="main-content">
          {/* Hero Section */}
          <section
            className="to-background relative overflow-hidden bg-linear-to-br from-pink-50 via-purple-50/30 py-16 md:py-24"
            aria-labelledby="blog-heading"
          >
            <div className="relative z-10 container mx-auto px-6 lg:px-8">
              <nav className="mb-8" aria-label="Fil d'Ariane">
                <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog" }]} />
              </nav>

              <div className="mx-auto max-w-3xl text-center">
                <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                  <FileText className="h-4 w-4" />
                  <span>Blog & Changelog</span>
                </div>

                <h1
                  id="blog-heading"
                  className="text-foreground font-display mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
                >
                  Articles & <span className="text-primary">Actualités</span>
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
                  Découvrez nos articles sur la psychologie du travail, les mises à jour techniques
                  et les actualités du secteur.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>

              {posts.length === 0 && (
                <div className="py-16 text-center">
                  <FileText className="text-muted-foreground mx-auto mb-4 h-16 w-16" />
                  <p className="text-muted-foreground text-lg">Aucun article pour le moment.</p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
