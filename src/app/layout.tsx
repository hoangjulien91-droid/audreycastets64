import type { Metadata } from "next";
import { Syne, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AccessibilityProvider } from "@/components/providers/accessibility-provider";
import { AccessibilityMenu } from "@/components/ui/accessibility-menu";
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';
import StickyMobileCTA from '@/components/ui/sticky-mobile-cta';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Audrey Castets",
  "url": "https://www.audrey-castets.fr",
  "logo": "https://www.audrey-castets.fr/icons/icon-512.png", 
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-7-43-68-72-97",
    "contactType": "customer service"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  "name": "Audrey Castets - Psychologue du Travail",
  "image": "https://www.audrey-castets.fr/og-image.jpg",
  "telephone": "07 43 68 72 97",
  "url": "https://www.audrey-castets.fr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Anglet",
    "postalCode": "64600",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.492949,
    "longitude": -1.512688
  },
  "priceRange": "$$"
};

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
  weight: ["400"],
  style: ["normal", "italic"],
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Audrey Castets - Psychologue",
  },
  other: {
    'geo.region': 'FR-64',
    'geo.placename': 'Biarritz',
    'geo.position': '43.4832; -1.5586', // Coordonnées approximatives Biarritz
    'ICBM': '43.4832, -1.5586',
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
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="fr" suppressHydrationWarning className={`${syne.variable} ${instrumentSerif.variable}`}>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <Script
            id="structured-data-organization"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <Script
            id="structured-data-local-business"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          {/* S-Tier Local SEO Tags */}
          <meta name="geo.region" content="FR-64" />
          <meta name="geo.placename" content="Anglet" />
          <meta name="geo.position" content="43.492949;-1.512688" />
          <meta name="ICBM" content="43.492949, -1.512688" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Audrey Castets" />
        </head>
        <body className="antialiased bg-background">
          <AccessibilityProvider>
            <a href="#main-content" className="skip-to-main">
              Aller au contenu principal
            </a>

            {children}
            <StickyMobileCTA />
            <AccessibilityMenu />
            <Toaster />
          </AccessibilityProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
