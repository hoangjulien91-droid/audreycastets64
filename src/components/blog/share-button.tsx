"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  summary: string;
}

export function ShareButton({ title, summary }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
    >
      <Share2 className="h-4 w-4" />
      <span>Copier l'URL</span>
    </button>
  );
}
