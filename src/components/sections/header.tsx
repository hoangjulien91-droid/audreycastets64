"use client";

import { useState, useEffect } from "react"
import { Link } from 'next-view-transitions';
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { navLinks } from "@/lib/data/navigation"

const Logo = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg" />
    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
      <span className="text-white font-display font-bold text-lg sm:text-xl">A</span>
    </div>
  </div>
)

const mainNavLinks = navLinks.filter(link => 
  ["/qui-suis-je", "/services", "/tests", "/tarifs", "/contact"].includes(link.href)
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => { document.body.style.overflow = "auto" }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        initial={prefersReducedMotion ? {} : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "glass-effect-strong border-t-0 border-x-0 py-3 shadow-sm" 
            : "bg-transparent py-6 border-b border-transparent"
        )}
      >
        <div className="container px-4 sm:px-6">
          <div
            className={cn(
              "mx-auto flex items-center justify-between transition-all duration-500",
              // Remove inner styling that conflicted
            )}
          >
            <Link href="/" className="group flex items-center gap-3 relative z-10">
              <Logo />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-primary font-display leading-none">
                  Audrey <span className="text-primary">Castets</span>
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-display italic leading-snug group-hover:text-primary/80 transition-colors">
                  Psychologue du Travail et TCC
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Navigation principale">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[15px] font-medium transition-all duration-300 rounded-full group hover:text-primary",
                    pathname === link.href 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute inset-0 bg-primary/[0.06] rounded-full -z-10 border border-primary/10"
                      layoutId="nav-bg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-primary/[0.03] -z-10" />
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex relative z-10">
              <a
                href="tel:0743687297"
                className="flex items-center gap-2.5 px-3 py-2 text-[15px] font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/[0.05] group"
                aria-label="Appeler le 07 43 68 72 97"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="hidden xl:inline group-hover:font-semibold transition-all">07 43 68 72 97</span>
              </a>
              <Link
                href="/contact"
                className="btn-premium py-2.5 px-6 text-[15px]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Prendre RDV
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <button
              className={cn(
                "relative p-2.5 rounded-full transition-all duration-300 lg:hidden",
                "hover:bg-primary/[0.05] text-foreground active:scale-95"
              )}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navigation">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-background/60 backdrop-blur-sm" 
              onClick={() => setIsMenuOpen(false)} 
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm glass-effect-strong shadow-2xl border-l border-white/20 overflow-hidden"
            >
              {/* Decorative Orbs */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-violet/20 blur-[90px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-50 pointer-events-none" />

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between px-6 py-6 border-b border-primary/10">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                    <Logo />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-foreground font-display leading-none">Audrey <span className="text-primary">Castets</span></span>
                      <span className="text-xs text-muted-foreground font-display italic leading-snug">Psychologue du Travail et TCC</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 rounded-full hover:bg-black/5 transition-colors active:scale-95"
                    aria-label="Fermer le menu"
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 py-8" role="navigation" aria-label="Menu mobile">
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
                            "flex items-center justify-between w-full rounded-2xl py-4 px-5 text-base font-medium transition-all duration-300 border border-transparent",
                            pathname === link.href 
                              ? "bg-primary/10 text-primary border-primary/10 shadow-sm" 
                              : "text-foreground hover:bg-white/50 hover:border-white/40"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className={cn(
                            "transition-transform duration-300", 
                            pathname === link.href ? "translate-x-1" : "group-hover:translate-x-1"
                          )}>
                            {link.label}
                          </span>
                          {pathname === link.href && (
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-6 space-y-4 border-t border-primary/10 bg-white/30 backdrop-blur-sm">
                  <a
                    href="tel:0743687297"
                    className="flex items-center justify-center gap-3 w-full rounded-full py-4 text-[15px] font-medium text-foreground bg-white/80 border border-white hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    07 43 68 72 97
                  </a>
                  <Link
                    href="/contact"
                    className="btn-premium w-full !py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Prendre RDV
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
