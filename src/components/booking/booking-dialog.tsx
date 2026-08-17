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

      <DialogContent className="border-border-soft/40 max-w-4xl overflow-hidden rounded-3xl bg-white/95 p-0 shadow-2xl backdrop-blur-xl sm:max-h-[92vh]">
        <div className="max-h-[88vh] overflow-y-auto p-6 sm:p-8">
          <DialogHeader className="mb-6 text-left">
            <div className="border-primary/20 bg-primary/10 text-primary mb-2 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Réservation en ligne instantanée</span>
            </div>
            <DialogTitle className="font-display text-foreground text-2xl font-bold sm:text-3xl">
              Choisissez votre créneau avec{" "}
              <span className="from-primary to-accent-violet bg-linear-to-r bg-clip-text text-transparent">
                Audrey Castets
              </span>
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Sélectionnez la date et l'horaire qui vous conviennent. Premier échange téléphonique
              de 15 minutes offert pour faire le point sur votre situation.
            </DialogDescription>
          </DialogHeader>

          {/* Embedded Zcal */}
          <ZcalEmbed minHeight={580} showCardWrapper={false} showReassuranceHeader={true} />

          {/* Help notice */}
          <div className="border-primary/10 bg-muted/40 text-muted-foreground mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4 text-xs">
            <span>Vous préférez convenir d'un horaire par téléphone ?</span>
            <a
              href="tel:0743687297"
              className="text-primary inline-flex items-center gap-1.5 font-semibold hover:underline"
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
