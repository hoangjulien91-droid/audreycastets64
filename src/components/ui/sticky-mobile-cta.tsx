"use client";

import { Phone, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { useHaptics } from "@/hooks/use-haptics";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const { trigger } = useHaptics();

  // Hide sticky CTA when user is already on the booking or contact page to avoid overlap
  const isBookingPage = pathname === "/prendre-rendez-vous" || pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isBookingPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 28,
            mass: 0.8,
          }}
          className="fixed right-0 bottom-0 left-0 z-40 border-t border-white/20 bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_30px_rgba(133,82,114,0.15)] backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-md items-center gap-2.5">
            {/* Call Button (Left) */}
            <a
              href="tel:0743687297"
              aria-label="Appeler Audrey Castets au 07 43 68 72 97"
              onClick={() => trigger("light")}
              className="flex-none"
            >
              <div className="border-primary/20 bg-primary/10 text-primary relative flex h-12 w-12 touch-manipulation items-center justify-center rounded-2xl border shadow-xs transition-transform active:scale-95">
                <Phone className="h-5 w-5" />
              </div>
            </a>

            {/* Book Button (Right) - Direct Link to /prendre-rendez-vous */}
            <div className="flex-1">
              <Link
                href="/prendre-rendez-vous"
                onClick={() => trigger("medium")}
                className="btn-premium flex h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-2xl font-bold text-white shadow-lg transition-transform active:scale-95 !py-0"
              >
                <Calendar className="h-4 w-4" />
                <span>Prendre RDV</span>
                <Sparkles className="text-accent-violet-light h-3.5 w-3.5 animate-pulse" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
