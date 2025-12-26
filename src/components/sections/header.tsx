"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { navLinks } from "@/lib/data/navigation"

const Logo = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet/20 rounded-xl blur-lg" />
    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary via-primary to-violet flex items-center justify-center shadow-lg shadow-primary/20">
      <span className="text-white font-display font-bold text-lg sm:text-xl">A</span>
    </div>
  </div>
)

const mainNavLinks = navLinks.filter(link => 
  ["/qui-suis-je", "/services", "/tarifs", "/contact"].includes(link.href)
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-4 sm:py-5"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "mx-auto flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-500",
              scrolled 
                ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(157,107,140,0.08)] border border-primary/5 py-3" 
                : "bg-transparent py-2"
            )}
          >
            <Link href="/" className="group flex items-center gap-3">
              <Logo />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-foreground transition-colors group-hover:text-primary font-display leading-tight tracking-tight">
                  Audrey Castets
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  Psychologue du Travail
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Navigation principale">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-full",
                    pathname === link.href 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute inset-0 bg-primary/[0.08] rounded-full -z-10"
                      layoutId="nav-bg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:0743687297"
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/[0.05]"
                aria-label="Appeler le 07 43 68 72 97"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-violet/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="hidden xl:inline">07 43 68 72 97</span>
              </a>
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-soft text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Prendre RDV</span>
                <ArrowRight className="w-4 h-4 relative transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              className={cn(
                "relative p-2.5 rounded-xl transition-all duration-300 lg:hidden",
                "hover:bg-primary/[0.05] text-foreground"
              )}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
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
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-foreground/20 backdrop-blur-md" 
              onClick={() => setIsMenuOpen(false)} 
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-5 py-5 border-b border-border/50">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                    <Logo />
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-foreground font-display">Audrey Castets</span>
                      <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">Psychologue</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 rounded-xl hover:bg-primary/[0.05] transition-colors"
                    aria-label="Fermer le menu"
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-6" role="navigation" aria-label="Menu mobile">
                  <div className="space-y-1">
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
                            "flex items-center justify-between w-full rounded-xl py-3.5 px-4 text-[15px] font-medium transition-all duration-300",
                            pathname === link.href 
                              ? "bg-gradient-to-r from-primary/10 to-violet/5 text-primary" 
                              : "text-foreground hover:bg-muted/50"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                          {pathname === link.href && (
                            <Sparkles className="w-4 h-4 text-primary" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-5 space-y-3 border-t border-border/50 bg-gradient-to-b from-muted/30 to-muted/50">
                  <a
                    href="tel:0743687297"
                    className="flex items-center justify-center gap-2.5 w-full rounded-xl py-3.5 text-[15px] font-medium text-foreground bg-white border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    07 43 68 72 97
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-primary to-primary-soft shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Prendre RDV
                    <ArrowRight className="w-4 h-4" />
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
