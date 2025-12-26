"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { navLinks } from "@/lib/data/navigation"

const Logo = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 w-9 sm:h-10 sm:w-10 transition-all duration-300"
  >
    <rect width="44" height="44" rx="12" className="fill-primary/10" />
    <path 
      d="M14.5 30H11.5L19.5 13H22.5L30.5 30H27.5L25.5 25H16.5L14.5 30ZM17.5 22.5H24.5L21 15.5L17.5 22.5Z" 
      className="fill-primary"
    />
  </svg>
)

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
          scrolled 
            ? "py-2 sm:py-3" 
            : "py-3 sm:py-4"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "mx-auto flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-500",
              scrolled 
                ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-border/50 py-2.5" 
                : "bg-transparent py-2"
            )}
          >
            <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
              <Logo />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-foreground transition-colors group-hover:text-primary font-display leading-tight tracking-tight">
                  Audrey Castets
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  Psychologue
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-0.5 lg:flex" role="navigation" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    pathname === link.href 
                      ? "text-primary bg-primary/5" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="tel:0743687297"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted/50"
                aria-label="Appeler le 07 43 68 72 97"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="hidden xl:inline">07 43 68 72 97</span>
              </a>
              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Prendre RDV
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              className={cn(
                "relative p-2.5 rounded-xl transition-all duration-300 lg:hidden",
                "hover:bg-muted/50 text-foreground"
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
              className="absolute inset-0 bg-foreground/10 backdrop-blur-sm" 
              onClick={() => setIsMenuOpen(false)} 
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-2xl border-l border-border/50"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-5 h-[72px] border-b border-border/50">
                  <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
                    <Logo />
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-foreground font-display">Audrey Castets</span>
                      <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">Psychologue</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-muted transition-colors"
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
                        transition={{ delay: idx * 0.04 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center w-full rounded-xl py-3 px-4 text-[15px] font-medium transition-all duration-300",
                            pathname === link.href 
                              ? "bg-primary/8 text-primary" 
                              : "text-foreground hover:bg-muted/50"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                          {pathname === link.href && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-4 space-y-3 border-t border-border/50 bg-muted/30">
                  <a
                    href="tel:0743687297"
                    className="flex items-center justify-center gap-2.5 w-full rounded-xl py-3 text-[15px] font-medium text-foreground bg-white border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    07 43 68 72 97
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full rounded-xl py-3 text-[15px] font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
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
