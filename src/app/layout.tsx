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
  metadataBase: new URL('https://www.audrey-castets.fr'),
  title: {
    default: "Audrey Castets - Psychologue du Travail | TCC & EFT",
    template: "%s | Audrey Castets - Psychologue"
  },
  description: "Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé pour particuliers et professionnels. Gestion du stress, burn-out, reconversion. Consultations en cabinet ou visio.",
  keywords: ["psychologue", "psychologue du travail", "TCC", "EFT", "thérapie cognitivo-comportementale", "burn-out", "stress", "anxiété", "reconversion professionnelle", "risques psychosociaux", "accompagnement professionnel"],
  authors: [{ name: "Audrey Castets" }],
  creator: "Audrey Castets",
  publisher: "Audrey Castets",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.audrey-castets.fr",
    siteName: "Audrey Castets - Psychologue du Travail",
    title: "Audrey Castets - Psychologue du Travail | TCC & EFT",
    description: "Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé pour particuliers et professionnels.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Audrey Castets - Psychologue du Travail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audrey Castets - Psychologue du Travail | TCC & EFT",
    description: "Psychologue du Travail spécialisée en TCC et EFT. Accompagnement personnalisé.",
    creator: "@audreycastets",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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