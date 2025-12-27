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
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1 bg-primary origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />
      
      <div className="hidden lg:block sticky top-32 w-64">
        <nav className="flex flex-col gap-1 p-4 rounded-2xl glass-effect border-none shadow-sm">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-3 mb-2">
            Sommaire
          </span>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`text-sm text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group ${
                activeSection === section.id
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-zinc-50 hover:text-foreground"
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div layoutId="activeDot">
                  <ArrowRight className="w-3 h-3" />
                </motion.div>
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
