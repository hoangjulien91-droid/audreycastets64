"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
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
            : "py-4 sm:py-5"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "mx-auto flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-500",
              scrolled 
                ? "glass-effect-strong shadow-lg py-3" 
                : "bg-transparent py-2"
            )}
          >
            <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
              <Logo />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-semibold text-foreground transition-colors group-hover:text-primary font-display leading-tight">
                  Audrey Castets
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground font-medium tracking-wide uppercase">
                  Psychologue
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300",
                    pathname === link.href 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:0743687297"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                aria-label="Appeler le 07 43 68 72 97"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">07 43 68 72 97</span>
              </a>
              <Link
                href="/contact"
                className="btn-premium text-sm px-6 py-2.5"
              >
                Prendre RDV
              </Link>
            </div>

            <button
              className={cn(
                "relative p-2.5 rounded-xl transition-all duration-300 lg:hidden",
                scrolled ? "hover:bg-primary/10" : "hover:bg-white/50",
                "text-primary"
              )}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
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
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" 
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
                <div className="flex items-center justify-between px-5 h-20 border-b border-border/50">
                  <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
                    <Logo />
                    <span className="text-lg font-semibold text-foreground font-display">Audrey Castets</span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 rounded-xl hover:bg-muted transition-colors"
                    aria-label="Fermer le menu"
                  >
                    <X className="h-6 w-6 text-muted-foreground" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-5" role="navigation" aria-label="Menu mobile">
                  <div className="space-y-1.5">
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
                            "flex items-center w-full rounded-xl py-3.5 px-4 text-base font-medium transition-all duration-300",
                            pathname === link.href 
                              ? "bg-primary/10 text-primary" 
                              : "text-foreground hover:bg-muted"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-5 space-y-3 border-t border-border/50">
                  <a
                    href="tel:0743687297"
                    className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-base font-medium text-foreground bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    07 43 68 72 97
                  </a>
                  <Link
                    href="/contact"
                    className="btn-premium w-full justify-center text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Prendre RDV
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
