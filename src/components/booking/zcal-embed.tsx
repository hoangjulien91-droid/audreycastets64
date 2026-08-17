"use client";

import { useEffect, useRef } from "react";
import { Shield, Clock, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZcalEmbedProps {
  className?: string;
  minHeight?: number;
  showCardWrapper?: boolean;
  showReassuranceHeader?: boolean;
}

export function ZcalEmbed({
  className,
  minHeight = 565,
  showCardWrapper = true,
  showReassuranceHeader = true,
}: ZcalEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load official Zcal embed script for responsive resizing
    const scriptId = "zcal-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://static.zcal.co/embed/v1/embed.js";
      document.body.appendChild(script);
    }
  }, []);

  const content = (
    <div className="relative w-full">
      {/* Reassurance top bar */}
      {showReassuranceHeader && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-primary/10 pb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>Agenda en direct • Disponibilités temps réel</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 font-semibold text-primary">
              <Clock className="h-3.5 w-3.5" />
              15 min offertes
            </span>
            <span className="inline-flex items-center gap-1 font-medium text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-accent-violet" />
              Sans engagement
            </span>
          </div>
        </div>
      )}

      {/* Zcal Iframe Container */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-inner">
        <iframe
          ref={iframeRef}
          id="zcal-iframe"
          src="https://zcal.co/emb/audrey-castets?embed=1&embedType=iframe"
          title="Agenda en ligne - Audrey Castets"
          loading="eager"
          scrolling="no"
          allow="camera; microphone; autoplay; fullscreen"
          className="w-full border-none transition-all duration-300"
          style={{
            border: "none",
            width: "100%",
            height: "565px",
            minHeight: `${minHeight}px`,
          }}
        />
      </div>

      {/* Footer reassurance */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-primary/10 pt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CheckCircle className="h-3.5 w-3.5 text-primary" />
          Confirmation instantanée par email
        </span>
        <a
          href="https://zcal.co/audrey-castets"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
        >
          <span>Ouvrir dans un nouvel onglet</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );

  if (!showCardWrapper) {
    return <div className={className}>{content}</div>;
  }

  return (
    <div
      className={cn(
        "relative rounded-3xl border border-border-soft/50 bg-white p-5 shadow-xl backdrop-blur-md transition-all duration-300 sm:p-7",
        "ring-1 ring-primary/5 hover:border-primary/20 hover:shadow-2xl",
        className
      )}
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -top-8 -right-8 -z-10 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-full bg-violet/10 blur-2xl"
        aria-hidden="true"
      />

      {content}
    </div>
  );
}
