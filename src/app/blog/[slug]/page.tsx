import { notFound } from "next/navigation";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { ShareButton } from "@/components/blog/share-button";
import { Calendar, Clock, User } from "lucide-react";

export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} - Blog Audrey Castets`,
    description: post.summary,
    alternates: {
      canonical: `https://www.audrey-castets.fr/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://www.audrey-castets.fr/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: post.authors,
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title }
      ]} />
      <ArticleJsonLd 
        title={post.title}
        description={post.summary}
        datePublished={post.date}
        authors={post.authors}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20" id="main-content">
          <section 
            className="relative overflow-hidden bg-linear-to-br from-pink-50 via-purple-50/30 to-background py-12 md:py-16"
            aria-labelledby="article-heading"
          >
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <nav className="mb-8" aria-label="Fil d'Ariane">
                <Breadcrumb 
                  items={[
                    { label: "Accueil", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: post.title }
                  ]} 
                />
              </nav>
              
              <article className="max-w-4xl mx-auto">
                <header className="mb-12">
                  <h1 
                    id="article-heading"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-display"
                  >
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-6" role="list" aria-label="Informations de l'article">
                    <div className="flex items-center gap-2" role="listitem">
                      <User className="h-4 w-4" aria-hidden="true" />
                      <span className="font-medium">{post.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2" role="listitem">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={post.date}>{formattedDate}</time>
                    </div>
                    <div className="flex items-center gap-2" role="listitem">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Tags de l'article">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          role="listitem"
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>
                </header>

                <div className="mb-8">
                  <ShareButton title={post.title} summary={post.summary} />
                </div>
              </article>
            </div>
          </section>

          <BlogPostContent post={post} />
        </main>

        <Footer />
      </div>
    </>
  );
}
