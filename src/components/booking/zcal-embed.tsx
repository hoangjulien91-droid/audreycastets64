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
  minHeight = 580,
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
      {/* Reassurance top bar with high contrast */}
      {showReassuranceHeader && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-medium text-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold text-white">Agenda en direct • Disponibilités en temps réel</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-semibold text-white">
              <Clock className="h-3.5 w-3.5 text-accent-violet-light" />
              15 min offertes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-medium text-white/80">
              <Shield className="h-3.5 w-3.5 text-accent-violet-light" />
              Sans engagement
            </span>
          </div>
        </div>
      )}

      {/* Zcal Iframe Container with explicit dark background for high contrast */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-[#0f0d1f] shadow-2xl border border-white/10">
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
            height: "600px",
            minHeight: `${minHeight}px`,
            backgroundColor: "#0f0d1f",
            colorScheme: "dark",
          }}
        />
      </div>

      {/* Footer reassurance */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 text-xs text-white/75">
        <span className="flex items-center gap-1.5 font-medium text-white/80">
          <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
          Confirmation instantanée par email & lien de visio
        </span>
        <a
          href="https://zcal.co/audrey-castets"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-accent-violet-light transition-colors hover:text-white hover:underline"
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
        "relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#181326] to-[#0f0d1f] p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:p-7 text-white",
        "ring-1 ring-white/10 hover:border-primary/40",
        className
      )}
    >
      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 -z-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-48 w-48 rounded-full bg-violet/20 blur-3xl"
        aria-hidden="true"
      />

      {content}
    </div>
  );
}
