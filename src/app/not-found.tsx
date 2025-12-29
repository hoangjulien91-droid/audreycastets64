import { Link } from "next-view-transitions";
import { Metadata } from "next";
import { Home, Search, FileQuestion } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Page non trouvée - 404",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <div className="to-background flex min-h-screen flex-col bg-linear-to-br from-[#F3E8F0] via-[#E8DFF0]/30">
        <Header />

        <main className="flex flex-grow items-center justify-center px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            {/* Illustration */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <FileQuestion className="text-primary h-64 w-64" />
              </div>
              <div className="relative">
                <h1 className="font-display bg-linear-to-r from-[#A594B3] via-[#8B7A98] to-[#C5B8D0] bg-clip-text text-9xl leading-none font-bold text-transparent md:text-[12rem]">
                  404
                </h1>
              </div>
            </div>

            {/* Content */}
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Page non trouvée
            </h2>

            <p className="text-muted-foreground mx-auto mb-8 max-w-md text-lg">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Peut-être
              pouvez-vous trouver ce que vous cherchez dans les liens ci-dessous.
            </p>

            {/* Action Buttons */}
            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#A594B3] to-[#8B7A98] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Home className="h-5 w-5" />
                Retour à l'accueil
              </Link>

              <BackButton />
            </div>

            {/* Quick Links */}
            <div className="rounded-3xl border border-[#D4C5D9]/30 bg-white p-8 shadow-xl">
              <h3 className="text-foreground mb-6 flex items-center justify-center gap-2 text-xl font-bold">
                <Search className="text-primary h-5 w-5" />
                Pages populaires
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { href: "/services", label: "Mes Services", icon: "💼" },
                  { href: "/qui-suis-je", label: "Qui suis-je", icon: "👋" },
                  { href: "/mon-approche", label: "Mon Approche", icon: "🎯" },
                  { href: "/tarifs", label: "Tarifs", icon: "💰" },
                  { href: "/faq", label: "FAQ", icon: "❓" },
                  { href: "/contact", label: "Contact", icon: "📧" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:border-primary/30 group flex items-center gap-3 rounded-xl border border-[#D4C5D9]/30 p-4 transition-all duration-300 hover:bg-[#F3E8F0]"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-foreground group-hover:text-primary font-medium transition-colors">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Text */}
            <p className="text-muted-foreground mt-8 text-sm">
              Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                me contacter
              </Link>
              .
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
