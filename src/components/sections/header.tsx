"use client";

import { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data/navigation";
import { useHaptics } from "@/hooks/use-haptics";

const Logo = () => (
  <div className="relative">
    <div className="bg-primary/20 absolute inset-0 rounded-xl blur-lg" aria-hidden="true" />
    <div className="bg-primary shadow-primary/20 relative flex h-10 w-10 items-center justify-center rounded-xl shadow-lg sm:h-11 sm:w-11">
      <span className="font-display text-lg font-bold text-white sm:text-xl">A</span>
    </div>
  </div>
);

const mainNavLinks = navLinks.filter((link) =>
  ["/qui-suis-je", "/services", "/tests", "/tarifs", "/contact"].includes(link.href)
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const { trigger } = useHaptics();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "animate-in fade-in-down fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-effect-strong border-x-0 border-t-0 py-3 shadow-sm"
            : "border-b border-transparent bg-transparent py-6"
        )}
      >
        <div className="container px-4 sm:px-6">
          <div
            className={cn(
              "mx-auto flex items-center justify-between transition-all duration-500"
              // Remove inner styling that conflicted
            )}
          >
            <Link href="/" className="group relative z-10 flex items-center gap-3">
              <Logo />
              <div className="flex flex-col">
                <span className="text-foreground group-hover:text-primary-dark font-display text-lg leading-none font-bold transition-colors sm:text-xl">
                  Audrey <span className="text-primary-dark">Castets</span>
                </span>
                <span className="text-muted-foreground font-display group-hover:text-primary/80 text-xs leading-snug italic transition-colors sm:text-sm">
                  Psychologue du Travail et TCC
                </span>
              </div>
            </Link>

            <nav
              className="hidden items-center gap-1 lg:flex"
              role="navigation"
              aria-label="Navigation principale"
            >
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group hover:text-primary relative rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="bg-primary/[0.06] border-primary/10 absolute inset-0 -z-10 rounded-full border"
                      layoutId="nav-bg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className="bg-primary/[0.03] absolute inset-0 -z-10 scale-90 rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            <div className="relative z-10 hidden items-center gap-4 lg:flex">
              <a
                href="tel:0743687297"
                className="text-muted-foreground hover:text-primary hover:bg-primary/[0.05] group flex items-center gap-2.5 rounded-full px-3 py-2 text-[15px] font-medium transition-all duration-300"
                aria-label="Appeler le 07 43 68 72 97"
              >
                <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                  <Phone className="text-primary h-3.5 w-3.5" />
                </div>
                <span className="hidden transition-all group-hover:font-semibold xl:inline">
                  07 43 68 72 97
                </span>
              </a>
              <Link
                href="/contact"
                className="btn-premium px-6 py-2.5 text-[15px]"
                onClick={() => trigger("medium")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Prendre RDV
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <button
              className={cn(
                "relative rounded-full p-2.5 transition-all duration-300 lg:hidden",
                "hover:bg-primary/[0.05] text-foreground active:scale-95"
              )}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="text-foreground h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[100] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-background/60 absolute inset-0 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }}
              className="glass-effect-strong absolute top-0 right-0 bottom-0 w-full max-w-sm overflow-hidden border-l border-white/20 shadow-2xl"
            >
              {/* Decorative Orbs */}
              <div className="bg-primary/20 pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[100px]" />
              <div className="bg-violet/20 pointer-events-none absolute bottom-0 left-0 h-[250px] w-[250px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-50 blur-[90px]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="border-primary/10 flex items-center justify-between border-b px-6 py-6">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Logo />
                    <div className="flex flex-col">
                      <span className="text-foreground font-display text-lg leading-none font-bold">
                        Audrey <span className="text-primary-dark">Castets</span>
                      </span>
                      <span className="text-muted-foreground font-display text-xs leading-snug italic">
                        Psychologue du Travail et TCC
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-full p-2.5 transition-colors hover:bg-black/5 active:scale-95"
                    aria-label="Fermer le menu"
                  >
                    <X className="text-muted-foreground h-5 w-5" />
                  </button>
                </div>

                <nav
                  className="flex-1 overflow-y-auto px-6 py-8"
                  role="navigation"
                  aria-label="Menu mobile"
                >
                  <div className="space-y-2">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "flex w-full items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-base font-medium transition-all duration-300",
                            pathname === link.href
                              ? "bg-primary/10 text-primary border-primary/10 shadow-sm"
                              : "text-foreground hover:border-white/40 hover:bg-white/50"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span
                            className={cn(
                              "transition-transform duration-300",
                              pathname === link.href ? "translate-x-1" : "group-hover:translate-x-1"
                            )}
                          >
                            {link.label}
                          </span>
                          {pathname === link.href && (
                            <Sparkles className="text-primary h-4 w-4 animate-pulse" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="border-primary/10 space-y-4 border-t bg-white/30 p-6 backdrop-blur-sm">
                  <a
                    href="tel:0743687297"
                    className="text-foreground hover:border-primary/30 flex w-full items-center justify-center gap-3 rounded-full border border-white bg-white/80 py-4 text-[15px] font-medium shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <Phone className="text-primary h-4 w-4" />
                    07 43 68 72 97
                  </a>
                  <Link
                    href="/contact"
                    className="btn-premium w-full !py-4"
                    onClick={() => {
                      trigger("medium");
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Prendre RDV
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
