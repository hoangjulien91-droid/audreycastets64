"use client";

import { useState, useEffect, useRef } from "react";
import { Loader2, Shield, Clock, ExternalLink, Sparkles } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [iframeHeight, setIframeHeight] = useState<number>(minHeight);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Listen for iframe-resizer or Zcal postMessage height updates if emitted
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data === "string" && event.data.startsWith("[iFrameSizer]")) {
        const parts = event.data.split(":");
        if (parts.length >= 2) {
          const newHeight = parseInt(parts[1] ?? "", 10);
          if (!isNaN(newHeight) && newHeight > 300) {
            setIframeHeight(newHeight);
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    const timeout = setTimeout(() => {
      // If after 10s it's still loading, gracefully reveal iframe
      setIsLoading(false);
    }, 10000);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timeout);
    };
  }, []);

  const content = (
    <div className="relative w-full overflow-hidden">
      {/* Reassurance top bar */}
      {showReassuranceHeader && (
        <div className="border-primary/10 text-muted-foreground mb-6 flex flex-wrap items-center justify-between gap-3 border-b pb-4 text-xs sm:text-sm">
          <div className="text-foreground flex items-center gap-2 font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>Créneaux disponibles en temps réel</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="text-primary inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              15 min offertes
            </span>
            <span className="text-violet-dark inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Sans engagement
            </span>
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {isLoading && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/90 p-8 backdrop-blur-sm transition-opacity duration-500"
          style={{ minHeight: `${minHeight}px` }}
          aria-live="polite"
          aria-busy="true"
        >
          <div className="from-primary/20 via-violet/15 to-rose/20 relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br p-3 shadow-inner">
            <Loader2 className="text-primary h-8 w-8 animate-spin" />
            <Sparkles className="text-accent-violet absolute -top-1 -right-1 h-4 w-4 animate-pulse" />
          </div>
          <p className="font-display text-foreground text-base font-semibold">
            Chargement du calendrier en direct...
          </p>
          <p className="text-muted-foreground mt-1 text-xs">
            Connexion sécurisée avec l'agenda d'Audrey Castets
          </p>
        </div>
      )}

      {/* Zcal Iframe */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        <iframe
          ref={iframeRef}
          src="https://zcal.co/emb/audrey-castets?embed=1&embedType=iframe"
          title="Prendre rendez-vous avec Audrey Castets"
          loading="lazy"
          scrolling="no"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={cn(
            "w-full border-0 transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          style={{
            border: "none",
            width: "100%",
            height: `${iframeHeight}px`,
            minHeight: `${minHeight}px`,
          }}
        />
      </div>

      {/* Fallback if user blocks iframes */}
      {hasError && (
        <div className="border-destructive/20 bg-destructive/5 mt-4 rounded-2xl border p-6 text-center">
          <p className="text-foreground text-sm font-medium">
            Le module de réservation n'a pas pu se charger directement.
          </p>
          <a
            href="https://zcal.co/audrey-castets"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium mt-4 inline-flex items-center gap-2 text-sm"
          >
            Ouvrir la page de réservation Zcal
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}

      {/* Footer reassurance */}
      <div className="border-primary/10 text-muted-foreground mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-xs">
        <span className="flex items-center gap-1.5">
          <Shield className="text-primary h-3.5 w-3.5" />
          Confidentialité médicale & respect du secret professionnel
        </span>
        <a
          href="https://zcal.co/audrey-castets"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
        >
          Ouvrir dans un nouvel onglet
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
        "border-border-soft/40 relative rounded-3xl border bg-white/95 p-6 shadow-xl backdrop-blur-md transition-all duration-300 md:p-8",
        "ring-primary/5 hover:border-primary/20 ring-1 hover:shadow-2xl",
        className
      )}
    >
      {/* Subtle decorative gradient glow behind card */}
      <div
        className="bg-primary/10 pointer-events-none absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full blur-2xl"
        aria-hidden="true"
      />
      <div
        className="bg-violet/10 pointer-events-none absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full blur-2xl"
        aria-hidden="true"
      />

      {content}
    </div>
  );
}
