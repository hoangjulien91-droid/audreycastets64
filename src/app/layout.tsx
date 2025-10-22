import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import Script from "next/script";
import ErrorReporter from "@/components/ErrorReporter";
import ThemeInitializer from "@/components/ThemeInitializer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Audrey Castets - Psychologue du Travail et TCC",
  description: "Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé pour particuliers et professionnels. Prévention RPS, gestion du stress, burn-out.",
  keywords: ["psychologue", "TCC", "EFT", "psychologie du travail", "burn-out", "stress", "RPS", "accompagnement professionnel"],
  authors: [{ name: "Audrey Castets" }],
  openGraph: {
    title: "Audrey Castets - Psychologue du Travail et TCC",
    description: "Accompagnement personnalisé pour particuliers et professionnels. TCC, EFT, prévention RPS.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audrey Castets - Psychologue du Travail et TCC",
    description: "Accompagnement personnalisé pour particuliers et professionnels.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <ErrorReporter />
        <ThemeInitializer />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}