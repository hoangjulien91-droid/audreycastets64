"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 sm:h-10 sm:w-10 text-primary transition-transform duration-300 group-hover:scale-110"
  >
    <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.1" />
    <path d="M13.62 28H11L18.5 12H21.5L29 28H26.38L24.5 23.4H15.5L13.62 28ZM16.38 21H23.62L20 14.2L16.38 21Z" fill="currentColor" />
  </svg>
)

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/mon-approche", label: "Mon approche" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background border-b border-border shadow-xl backdrop-blur-md" : "bg-background/95 backdrop-blur-sm"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
          )}
        >
          <Link href="/" className="group flex items-center gap-2 sm:gap-3">
            <Logo />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground transition-colors group-hover:text-primary font-display">
              Audrey Castets
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground hover:bg-primary/5"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Prendre RDV
            </Link>
          </div>

          <button
            className="p-2 rounded-lg transition-all duration-200 hover:bg-primary/10 lg:hidden text-primary"
            aria-label="Ouvrir le menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)} 
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 h-16 sm:h-20 border-b border-border">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <Logo />
                  <span className="text-lg font-bold text-primary font-display">Audrey Castets</span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="h-6 w-6 text-muted-foreground" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                <div className="space-y-1">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center w-full rounded-lg py-3 px-4 text-base font-medium transition-colors",
                          pathname === link.href ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              <div className="p-4 border-t border-border">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full rounded-lg bg-primary py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Prendre RDV
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}