"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shield,
  Clock,
  ExternalLink,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
  Mail,
  Phone,
  FileCheck,
  ArrowRight,
  Info,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showNextSteps, setShowNextSteps] = useState(false);

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

    // Listen to postMessages from Zcal iframe
    const handleMessage = (event: MessageEvent) => {
      try {
        if (
          typeof event.data === "string" &&
          (event.data.includes("booking_confirmed") ||
            event.data.includes("booking_successful") ||
            event.data.includes("zcal:booking"))
        ) {
          setBookingConfirmed(true);
        } else if (
          typeof event.data === "object" &&
          event.data !== null &&
          (event.data.type === "zcal:booking:created" ||
            event.data.event === "booking_successful")
        ) {
          setBookingConfirmed(true);
        }
      } catch {
        // Ignore parsing errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const content = (
    <div className="relative w-full">
      {/* S-Tier Confirmation Banner when a booking is completed */}
      <AnimatePresence>
        {bookingConfirmed && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="mb-6 rounded-3xl border border-emerald-500/20 bg-linear-to-br from-emerald-50 via-white to-emerald-50/30 p-6 shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-800">
                    <Sparkles className="h-3 w-3" /> Réservation validée
                  </span>
                </div>
                <h3 className="font-display text-foreground mt-2 text-xl font-bold">
                  Votre rendez-vous est bien confirmé !
                </h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Un email récapitulatif contenant tous les détails et le lien de visioconférence sécurisé vous a été envoyé instantanément par Zcal.
                </p>

                {/* Next Steps Grid */}
                <div className="mt-4 grid gap-3 rounded-2xl border border-emerald-200/60 bg-white/90 p-4 sm:grid-cols-3">
                  <div className="flex items-start gap-2.5">
                    <Mail className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <div className="text-xs">
                      <strong className="text-foreground block">Email de confirmation</strong>
                      <span className="text-muted-foreground">Vérifiez vos courriers indésirables si besoin.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <div className="text-xs">
                      <strong className="text-foreground block">Rappel automatique</strong>
                      <span className="text-muted-foreground">Un rappel vous sera transmis 24h avant.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FileCheck className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <div className="text-xs">
                      <strong className="text-foreground block">100% Sans engagement</strong>
                      <span className="text-muted-foreground">Modification possible en 1 clic.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/tests"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-700"
                  >
                    <span>Faire un bilan pré-diagnostic en attendant</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(false)}
                    className="text-muted-foreground hover:text-foreground text-xs font-medium underline"
                  >
                    Retourner au calendrier
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reassurance top bar */}
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 font-semibold text-primary shadow-2xs">
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

      {/* Footer reassurance & help */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-primary/10 pt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-medium text-emerald-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Confirmation & lien visio envoyés par email
          </span>
          <button
            type="button"
            onClick={() => setShowNextSteps(!showNextSteps)}
            className="text-primary hover:text-primary-dark inline-flex items-center gap-1 font-semibold underline ml-2"
          >
            <Info className="h-3.5 w-3.5" />
            Comment ça se passe ?
          </button>
        </div>

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

      {/* Collapsible Next Steps Info */}
      <AnimatePresence>
        {showNextSteps && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden rounded-2xl border border-primary/15 bg-primary/5 p-4 text-xs leading-relaxed text-foreground"
          >
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Ce qui se passe après votre réservation :
            </h4>
            <ol className="list-decimal pl-4 space-y-1.5 text-muted-foreground">
              <li><strong>Email immédiat :</strong> Vous recevez un récapitulatif avec invitation Google Calendar / Outlook et lien sécurisé de visioconférence.</li>
              <li><strong>Premier contact bienveillant :</strong> Audrey Castets vous accueille pendant 15 minutes pour écouter votre situation et vos attentes.</li>
              <li><strong>Liberté absolue :</strong> Aucun engagement financier, vous décidez ensuite librement de poursuivre ou non l'accompagnement.</li>
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
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
