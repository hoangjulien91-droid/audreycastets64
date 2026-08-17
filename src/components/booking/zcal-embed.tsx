"use client";

import { useEffect, useRef } from "react";
import { Shield, Clock, ExternalLink, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZcalEmbedProps {
  className?: string;
  minHeight?: number;
  showCardWrapper?: boolean;
  showReassuranceHeader?: boolean;
}

export function ZcalEmbed({
  className,
  minHeight = 650,
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
      {/* Reassurance top bar in Design System style */}
      {showReassuranceHeader && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-primary/10 pb-3.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold text-foreground">Agenda en direct • Disponibilités temps réel</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 font-semibold text-primary-dark shadow-2xs">
              <Clock className="h-3.5 w-3.5 text-primary" />
              15 min offertes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 font-medium text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" />
              Sans engagement
            </span>
          </div>
        </div>
      )}

      {/* Zcal Iframe Container with scroll support and Design System shadow/border */}
      <div 
        className="relative w-full overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-inner border border-primary/10"
        style={{
          WebkitOverflowScrolling: "touch",
          maxHeight: "750px",
        }}
      >
        <iframe
          ref={iframeRef}
          id="zcal-iframe"
          src="https://zcal.co/emb/audrey-castets?embed=1&embedType=iframe"
          title="Agenda en ligne - Audrey Castets"
          loading="eager"
          scrolling="auto"
          allow="camera; microphone; autoplay; fullscreen"
          className="w-full border-none bg-white transition-all duration-300"
          style={{
            border: "none",
            width: "100%",
            height: "650px",
            minHeight: `${minHeight}px`,
            backgroundColor: "#ffffff",
            overflowY: "auto",
          }}
        />
      </div>

      {/* Footer reassurance */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-primary/10 pt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircle className="h-3.5 w-3.5 text-primary" />
          Confirmation instantanée par email
        </span>
        <a
          href="https://zcal.co/audrey-castets"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
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
        "relative rounded-3xl border border-primary/15 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 sm:p-7",
        "ring-1 ring-primary/5 hover:border-primary/25 hover:shadow-2xl",
        className
      )}
    >
      {content}
    </div>
  );
}
