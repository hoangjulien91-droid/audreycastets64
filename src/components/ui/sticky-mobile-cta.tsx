"use client";

import { Phone, Calendar } from 'lucide-react'; // Changed FileText to Calendar for "Réserver"
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
            mass: 0.8,
          }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden bg-background/80 backdrop-blur-xl border-t border-border/50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom"
        >
          <div className="flex items-center gap-2 max-w-md mx-auto">
            {/* Call Button (Left) - Primary */}
            <Link href="tel:0743687297" className="flex-none">
             <div className="relative flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl shadow-sm active:scale-95 transition-transform touch-manipulation">
                <Phone className="w-5 h-5 fill-current" />
              </div>
            </Link>

            {/* Book Button (Middle) - Highlighted */}
            <Link href="/contact" className="flex-1">
              <motion.button
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  repeatDelay: 1,
                }}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-foreground text-background font-bold shadow-sm active:scale-95 transition-transform touch-manipulation"
              >
                <Calendar className="w-4 h-4" />
                <span>Réserver</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
