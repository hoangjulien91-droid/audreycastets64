"use client";

import { Phone, Calendar } from "lucide-react"; // Changed FileText to Calendar for "Réserver"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "next-view-transitions";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.8,
          }}
          className="bg-background/80 border-border/50 safe-area-bottom fixed right-0 bottom-0 left-0 z-50 border-t p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-md items-center gap-2">
            {/* Call Button (Left) - Primary */}
            <Link href="tel:0743687297" className="flex-none">
              <div className="bg-primary relative flex h-12 w-12 touch-manipulation items-center justify-center rounded-xl text-white shadow-sm transition-transform active:scale-95">
                <Phone className="h-5 w-5 fill-current" />
              </div>
            </Link>

            {/* Book Button (Middle) - Highlighted */}
            <Link href="/contact" className="flex-1">
              <motion.button
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                className="bg-foreground text-background flex h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl font-bold shadow-sm transition-transform active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                <span>Réserver</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
