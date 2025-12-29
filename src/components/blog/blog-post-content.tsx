"use client";

import { BlogPost } from "@/lib/blog-posts";
import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import { Link } from "next-view-transitions";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const copyHeadingLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

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
                  <h2 className="text-foreground font-display mb-4 flex items-center gap-2 text-2xl font-bold md:text-3xl">
                    <Link href={`#${section.id}`} className="hover:text-primary transition-colors">
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
                  </h2>
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

          {/* Back to Blog Link */}
          <div className="border-border mt-12 border-t pt-8">
            <Link
              href="/blog"
              className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium transition-colors"
            >
              ← Retour au blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
