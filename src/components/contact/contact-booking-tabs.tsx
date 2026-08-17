"use client";

import { useState, useEffect } from "react";
import { Calendar, Mail, Sparkles, CheckCircle2, Shield, Clock, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ZcalEmbed } from "@/components/booking/zcal-embed";
import { ContactForm } from "@/components/contact/contact-form";
import { useHaptics } from "@/hooks/use-haptics";

export function ContactBookingTabs() {
  const [activeTab, setActiveTab] = useState<"zcal" | "form">("zcal");
  const { trigger } = useHaptics();

  useEffect(() => {
    // Check URL search params or hash on load
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      const hash = window.location.hash;

      if (
        tabParam === "message" ||
        tabParam === "form" ||
        hash === "#message" ||
        hash === "#formulaire"
      ) {
        setActiveTab("form");
      } else if (
        tabParam === "rdv" ||
        tabParam === "zcal" ||
        hash === "#rdv" ||
        hash === "#agenda" ||
        hash === "#zcal"
      ) {
        setActiveTab("zcal");
      }
    }
  }, []);

  const handleTabChange = (tab: "zcal" | "form") => {
    trigger("light");
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", tab === "zcal" ? "#rdv" : "#message");
    }
  };

  return (
    <div className="w-full">
      {/* Switcher Tab Pills */}
      <div className="mb-8 flex justify-center">
        <div className="border-primary/20 bg-muted/60 inline-flex rounded-full border p-1.5 shadow-inner backdrop-blur-md">
          <button
            type="button"
            onClick={() => handleTabChange("zcal")}
            className={cn(
              "relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base",
              activeTab === "zcal"
                ? "text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-selected={activeTab === "zcal"}
            role="tab"
          >
            {activeTab === "zcal" && (
              <motion.div
                layoutId="active-contact-tab"
                className="from-primary to-accent-violet absolute inset-0 rounded-full bg-linear-to-r shadow-md"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Calendar className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Prendre RDV en ligne</span>
            <span className="relative z-10 hidden rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold text-white sm:inline-block">
              Instantané
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange("form")}
            className={cn(
              "relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base",
              activeTab === "form"
                ? "text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-selected={activeTab === "form"}
            role="tab"
          >
            {activeTab === "form" && (
              <motion.div
                layoutId="active-contact-tab"
                className="from-primary to-accent-violet absolute inset-0 rounded-full bg-linear-to-r shadow-md"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Mail className="relative z-10 h-4 w-4" />
            <span className="relative z-10">M'envoyer un message</span>
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <AnimatePresence mode="wait">
        {activeTab === "zcal" ? (
          <motion.div
            key="zcal-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
            role="tabpanel"
          >
            <div className="mb-6 text-center">
              <h2 className="font-display text-foreground text-2xl font-bold sm:text-3xl">
                Réservez votre créneau en quelques clics
              </h2>
              <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-sm sm:text-base">
                Choisissez l'horaire qui vous correspond le mieux pour notre premier entretien
                téléphonique de 15 minutes offert ou votre consultation.
              </p>
            </div>

            <ZcalEmbed minHeight={640} showCardWrapper={true} showReassuranceHeader={true} />
          </motion.div>
        ) : (
          <motion.div
            key="form-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-2xl"
            role="tabpanel"
          >
            <div className="mb-6 text-center">
              <h2 className="font-display text-foreground text-2xl font-bold sm:text-3xl">
                Formulaire de Contact
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Pour une demande d'information, un devis d'entreprise ou une question spécifique,
                laissez-moi votre message. Réponse sous 24h.
              </p>
            </div>

            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
