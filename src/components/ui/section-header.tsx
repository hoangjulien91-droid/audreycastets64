"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeaderProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "page" | "section" | "subsection" | "small";
  badge?: string;
  badgeIcon?: ReactNode;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  badgeClassName?: string;
}

export function SectionHeader({
  as: Tag = "h2",
  size = "section",
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  badgeClassName,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const sizeClasses = {
    page: "text-4xl md:text-5xl lg:text-6xl leading-tight font-bold",
    section: "text-3xl md:text-4xl lg:text-5xl leading-tight font-bold",
    subsection: "text-xl md:text-2xl lg:text-3xl leading-snug font-semibold",
    small: "text-lg md:text-xl font-semibold",
  };

  return (
    <div className={cn("flex flex-col space-y-4 mb-8", alignmentClasses[align], className)}>
      {badge && (
        <div
          className={cn(
            "glass-ghost inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase shadow-sm transition-all hover:scale-105 animate-in fade-in-up",
            badgeClassName
          )}
        >
          {badgeIcon && <span className="text-primary">{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}

      <div className="animate-in fade-in-up [animation-delay:100ms]">
        <Tag
          className={cn(
            "font-display text-foreground tracking-tight",
            sizeClasses[size],
            titleClassName
          )}
        >
          {title}
        </Tag>
      </div>

      {subtitle && (
        <div className="animate-in fade-in-up [animation-delay:200ms]">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
