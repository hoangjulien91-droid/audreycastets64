import { notFound } from "next/navigation";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import type { Metadata } from 'next';
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { Calendar, Clock, User, Share2 } from "lucide-react";

export const revalidate = 3600;

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
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
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50/30 to-background py-12 md:py-16">
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
                {/* Post Header */}
                <header className="mb-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-display">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium">{post.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>{formattedDate}</time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
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

                {/* Share Button */}
                <div className="mb-8">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.summary,
                          url: window.location.href,
                        }).catch(() => {});
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Copier l'URL</span>
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* Post Content */}
          <BlogPostContent post={post} />
        </main>

        <Footer />
      </div>
    </>
  );
}
