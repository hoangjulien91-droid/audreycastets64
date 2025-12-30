"use client";

import { Link } from "next-view-transitions";
import { Calendar, Clock, User } from "lucide-react";
import { BlogPost } from "@/lib/blog-posts";
import { motion } from "framer-motion";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-card border-border flex h-full flex-col overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          {/* Card Header */}
          <div className="flex-1 p-6">
            <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>

            <h2 className="text-foreground group-hover:text-primary font-display mb-3 text-xl font-bold transition-colors md:text-2xl">
              {post.title}
            </h2>

            <p className="text-muted-foreground mb-4 leading-relaxed">{post.summary}</p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="border-border bg-muted/30 border-t px-6 py-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="text-muted-foreground flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{post.authors.join(", ")}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
