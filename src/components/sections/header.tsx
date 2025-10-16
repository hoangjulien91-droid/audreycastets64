"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { applyTheme, getStoredTheme, storeTheme, type ThemeName } from "@/lib/utils"
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
  const [theme, setTheme] = useState<ThemeName>("system")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  useEffect(() => {
    const stored = getStoredTheme() ?? "system"
    setTheme(stored)
  }, [])

  useEffect(() => {
    applyTheme(theme)
    storeTheme(theme)
  }, [theme])

  const cycleTheme = () => {
    setTheme((prev) => (prev === "system" ? "light" : prev === "light" ? "dark" : "system"))
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-background/95"
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
            <button
              onClick={cycleTheme}
              aria-label="Changer le thème"
              className="p-2 rounded-full transition-all duration-200 text-muted-foreground hover:text-primary hover:bg-primary/10"
              title={theme === "system" ? "Thème système" : theme === "light" ? "Mode clair" : "Mode sombre"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
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
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-2xl animate-slide-in-right">
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
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center w-full rounded-lg py-3 px-4 text-base font-medium transition-colors",
                        pathname === link.href ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="p-4 border-t border-border">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full rounded-lg bg-primary py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Prendre RDV
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}