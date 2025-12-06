"use client";

import { BlogPost } from "@/lib/blog-posts";
import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const copyHeadingLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground font-display flex items-center gap-2">
                    <Link href={`#${section.id}`} className="hover:text-primary transition-colors">
                      {section.heading}
                    </Link>
                    <button
                      onClick={() => copyHeadingLink(section.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Copier le lien vers ${section.heading}`}
                      title="Copier le lien"
                    >
                      <LinkIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </button>
                  </h2>
                </div>

                {/* Paragraphs */}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-foreground/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}

                {/* List */}
                {section.list && (
                  <div className="my-6">
                    {section.list.type === 'number' ? (
                      <ol className="list-decimal list-inside space-y-2 text-foreground/90">
                        {section.list.items.map((item, iIndex) => (
                          <li key={iIndex} className="leading-relaxed">{item}</li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="space-y-2">
                        {section.list.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
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

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              ← Retour au blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
