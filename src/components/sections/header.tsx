"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/mon-approche", label: "Mon approche" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white/95 backdrop-blur-sm shadow-sm",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link href="/" className="group flex items-center space-x-2 sm:space-x-3">
              <div className="relative h-10 w-10 sm:h-[45px] sm:w-[45px] flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c38f5070-6b82-4e11-be55-a586c48aeec5-psychologue-portfolio-nextjs-supaba-vercel-app/assets/images/next-744259-next-339017-logo-audrey-DTe7Xile-1.png?"
                  alt="Logo Audrey Castets"
                  width={45}
                  height={45}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary transition-colors group-hover:text-pink-600 font-display">
                Audrey Castets
              </span>
            </Link>

            <nav className="hidden items-center space-x-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-primary",
                    pathname === link.href
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:bg-primary/5"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-pink-500 rounded-full"></div>
                  )}
                </a>
              ))}
            </nav>

            <div className="hidden items-center lg:flex">
              <Link
                href="/contact"
                className="inline-flex transform items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-pink-500 to-pink-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              >
                Prendre RDV
              </Link>
            </div>

            <button
              className="p-2 rounded-xl transition-all duration-200 hover:bg-primary/10 lg:hidden"
              aria-label="Ouvrir le menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay - Fixed avec z-index élevé */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header du menu */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <div className="relative h-10 w-10">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c38f5070-6b82-4e11-be55-a586c48aeec5-psychologue-portfolio-nextjs-supaba-vercel-app/assets/images/next-744259-next-339017-logo-audrey-DTe7Xile-1.png?"
                      alt="Logo Audrey Castets"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-lg font-bold text-primary font-display">Audrey Castets</span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto px-4 py-8">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center w-full rounded-xl py-3.5 px-4 text-base font-medium transition-all duration-200",
                        pathname === link.href
                          ? "bg-gradient-to-r from-primary/10 to-pink-500/10 text-primary font-semibold shadow-sm border-l-4 border-primary"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
              
              {/* CTA Button */}
              <div className="p-6 border-t border-gray-100 bg-gradient-to-br from-pink-50 to-white">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-primary via-pink-500 to-pink-600 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
  );
}