import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';
import { getAllBlogPosts } from "@/lib/blog-posts";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { FileText } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog & Changelog - Audrey Castets',
  description: 'Articles, actualités et mises à jour techniques sur la psychologie du travail et les technologies web.',
  alternates: {
    canonical: 'https://www.audrey-castets.fr/blog',
  },
  openGraph: {
    title: 'Blog & Changelog - Audrey Castets',
    description: 'Articles et actualités sur la psychologie du travail',
    url: 'https://www.audrey-castets.fr/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Blog' }
      ]} />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20" id="main-content">
          {/* Hero Section */}
          <section 
            className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50/30 to-background py-16 md:py-24"
            aria-labelledby="blog-heading"
          >
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <nav className="mb-8" aria-label="Fil d'Ariane">
                <Breadcrumb 
                  items={[
                    { label: "Accueil", href: "/" },
                    { label: "Blog" }
                  ]} 
                />
              </nav>
              
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <FileText className="h-4 w-4" />
                  <span>Blog & Changelog</span>
                </div>
                
                <h1 
                  id="blog-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-display"
                >
                  Articles & <span className="text-primary">Actualités</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Découvrez nos articles sur la psychologie du travail, les mises à jour techniques et les actualités du secteur.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>

              {posts.length === 0 && (
                <div className="text-center py-16">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground">Aucun article pour le moment.</p>
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
