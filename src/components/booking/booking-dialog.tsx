"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ZcalEmbed } from "@/components/booking/zcal-embed";
import { Calendar, Sparkles, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHaptics } from "@/hooks/use-haptics";

interface BookingDialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerClassName?: string;
  triggerLabel?: string;
  showTrigger?: boolean;
}

export function BookingDialog({
  children,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  triggerClassName,
  triggerLabel = "Prendre Rendez-vous",
  showTrigger = true,
}: BookingDialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const { trigger } = useHaptics();

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;
  const setIsOpen = isControlled ? setControlledOpen : setUncontrolledOpen;

  const handleTriggerClick = () => {
    trigger("medium");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {showTrigger && (
        <DialogTrigger asChild onClick={handleTriggerClick}>
          {children ? (
            children
          ) : (
            <button
              type="button"
              className={cn("btn-premium inline-flex items-center gap-2", triggerClassName)}
            >
              <Calendar className="h-4 w-4" />
              <span>{triggerLabel}</span>
            </button>
          )}
        </DialogTrigger>
      )}

      <DialogContent className="max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#181326] via-[#120e1e] to-[#0f0d1f] p-0 shadow-2xl backdrop-blur-2xl text-white sm:max-h-[94vh]">
        <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          <DialogHeader className="mb-5 text-left">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white">
              <Sparkles className="h-3.5 w-3.5 text-accent-violet-light animate-pulse" />
              <span>Réservation en ligne instantanée</span>
            </div>
            <DialogTitle className="font-display text-2xl font-bold text-white sm:text-3xl">
              Choisissez votre créneau avec{" "}
              <span className="bg-linear-to-r from-primary-light via-violet-light to-white bg-clip-text text-transparent">
                Audrey Castets
              </span>
            </DialogTitle>
            <DialogDescription className="text-sm text-white/80">
              Sélectionnez la date et l'horaire qui vous conviennent. Premier échange téléphonique
              de 15 minutes offert pour faire le point sur votre situation.
            </DialogDescription>
          </DialogHeader>

          {/* Embedded Zcal */}
          <ZcalEmbed minHeight={580} showCardWrapper={false} showReassuranceHeader={true} />

          {/* Help notice */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/80">
            <span>Vous préférez convenir d'un horaire par téléphone ?</span>
            <a
              href="tel:0743687297"
              className="inline-flex items-center gap-1.5 font-bold text-accent-violet-light hover:text-white hover:underline"
            >
              <Phone className="h-3.5 w-3.5" />
              07 43 68 72 97
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
