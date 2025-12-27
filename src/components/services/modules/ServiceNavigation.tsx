"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const sections = [
  { id: "comprendre", label: "Comprendre" },
  { id: "methodologie", label: "Méthodologie" },
  { id: "details", label: "En détail" },
  { id: "temoignages", label: "Témoignages" },
  { id: "faq", label: "FAQ" }
];

export function ServiceNavigation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header height approx
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Mobile/Global Progress Bar (Nano-Bar) */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-0.5 bg-linear-to-r from-primary/30 to-primary origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />
      
      {/* Desktop Vertical Navigation (Minimalist) */}
      <div className="hidden lg:block sticky top-32 w-48">
        <nav className="flex flex-col relative">
           {/* Vertical decorative line for the track is optional, but let's keep it really clean: no track, just text. 
               Or maybe a very subtle track. Let's try a subtle track.
           */}
           <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40" />

          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-sm text-left pl-6 py-2 transition-all relative group ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-full bg-primary rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Hover Indicator (Small dot) - Only if not active */}
                {!isActive && (
                   <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-foreground/20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
                )}

                {section.label}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
