---
description: Guide complet de réplication de l'architecture S-Tier optimisée sur n'importe quel projet Next.js
---

# Guide de Réplication - Architecture S-Tier Optimisée

Ce guide vous permet de reproduire le workflow et l'architecture optimisée **Grade S-Tier** sur n'importe quel projet Next.js, indépendamment du design.

## Phase 1: Configuration Initiale du Projet

### 1.1 Installer Next.js avec React 19

```bash
npx create-next-app@latest mon-projet --typescript --tailwind --app --no-src-dir
cd mon-projet
```

### 1.2 Mettre à jour vers les dernières versions

```bash
npm install next@latest react@latest react-dom@latest
npm install -D typescript@latest @types/react@latest @types/react-dom@latest @types/node@latest
```

### 1.3 Installer les dépendances S-Tier essentielles

```bash
# Navigation avec transitions
npm install next-view-transitions

# Thèmes
npm install next-themes

# Animations
npm install framer-motion

# Icônes
npm install lucide-react

# Utilities
npm install clsx tailwind-merge class-variance-authority

# PWA
npm install next-pwa

# Analytics & Performance
npm install @vercel/analytics @vercel/speed-insights

# Bundle Analyzer
npm install -D @next/bundle-analyzer

# Validations
npm install zod
```

### 1.4 Installer Tailwind CSS v4

```bash
npm install -D tailwindcss@latest @tailwindcss/postcss@latest
```

## Phase 2: Configuration TypeScript Strict (S-Tier God Mode)

### 2.1 Créer/Modifier `tsconfig.json`

Utiliser la configuration stricte S-Tier:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext", "webworker"],
    "baseUrl": ".",
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "checkJs": false,
    "jsx": "preserve",
    "jsxImportSource": "react",

    // STRICT MODE
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "alwaysStrict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "incremental": true,
    "tsBuildInfoFile": ".next/cache/tsconfig.tsbuildinfo",
    "isolatedModules": true,
    "noEmit": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,

    "plugins": [{ "name": "next" }],

    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/app/*": ["./src/app/*"],
      "@/hooks/*": ["./src/hooks/*"]
    },

    "types": ["next", "node"]
  },
  "include": [
    "next-env.d.ts",
    "**/*.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules", ".next", "out", "build", "dist"]
}
```

## Phase 3: Configuration Next.js S-Tier

### 3.1 Créer/Modifier `next.config.ts`

```tsx
import type { NextConfig } from "next";
import withPWA from "next-pwa";
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  trailingSlash: false,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [420, 520, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self';`,
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        ],
      },
      {
        source: "/:all*(svg|jpg|png|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },

  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
    reactCompiler: true, // S-TIER: React Compiler activé
  },

  typedRoutes: false,
};

const withPWAWrapped = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(
  withPWAWrapped(nextConfig as any) as any
) as any;
```

### 3.2 Configurer PostCSS

Créer `postcss.config.mjs`:

```jsx
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## Phase 4: Architecture des Dossiers

### 4.1 Créer la structure de dossiers

```bash
mkdir -p src/{app,components,lib/{data,seo,utils},hooks,types}
```

### 4.2 Structure recommandée

```
src/
├── app/                      # Pages Next.js (App Router)
│   ├── layout.tsx           # Layout racine
│   ├── page.tsx             # Homepage (RSC)
│   ├── globals.css          # Styles globaux
│   └── [route]/
│       ├── page.tsx         # Server Component
│       └── PageClient.tsx   # Client Component
├── components/              # Composants réutilisables
│   ├── ui/                 # Composants UI de base
│   ├── shared/             # Composants partagés
│   └── [feature]/          # Composants spécifiques par feature
├── lib/
│   ├── data/               # Données statiques (max 250 lignes/fichier)
│   │   ├── index.ts       # Barrel export
│   │   └── [domain]-data.ts
│   ├── seo/               # Utils SEO
│   ├── utils.ts           # Utilities générales
│   └── design-tokens.ts   # Design system
├── hooks/                 # Custom hooks
└── types/                 # Types TypeScript
```

## Phase 5: Design System "Ghost-Glass"

### 5.1 Créer `src/lib/design-tokens.ts`

```tsx
import { type VariantProps, cva } from "class-variance-authority";

// Typography scales (adapter selon votre design)
export const TYPOGRAPHY = {
  heading: {
    hero: "text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]",
    page: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight",
    section: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    subsection: "text-3xl md:text-4xl font-bold tracking-tight",
    small: "text-2xl md:text-3xl font-bold tracking-tight",
  },
  body: {
    xl: "text-xl md:text-2xl",
    lg: "text-lg md:text-xl",
    base: "text-base",
    sm: "text-sm",
  },
} as const;

// Spacing scales
export const SPACING = {
  section: "mb-20 md:mb-32",
  sectionSmall: "mb-12 md:mb-16",
  container: "px-6 lg:px-12 max-w-7xl mx-auto",
  containerNarrow: "px-6 lg:px-12 max-w-4xl mx-auto",
  containerWide: "px-6 lg:px-12 max-w-[1600px] mx-auto",
} as const;

// Card variants using CVA
export const cardVariants = cva("rounded-3xl transition-all", {
  variants: {
    variant: {
      default: "bg-secondary/50",
      glass: "bg-background/60 backdrop-blur-md border border-border/50",
      bordered: "bg-card border border-border/40 hover:border-foreground/20",
      elevated: "bg-card shadow-lg hover:shadow-xl",
    },
    padding: {
      sm: "p-6",
      md: "p-8",
      lg: "p-8 md:p-12",
      xl: "p-12 md:p-16",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

// Animation presets
export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    viewport: { once: true },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    viewport: { once: true },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    viewport: { once: true },
  },
} as const;

export type CardVariants = VariantProps<typeof cardVariants>;
```

### 5.2 Créer `src/app/globals.css`

```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Adapter les couleurs selon votre design */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-card: var(--card);
  /* etc. */

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

@plugin "@tailwindcss/typography";

:root {
  --radius: 0.375rem;

  /* ADAPTER SELON VOTRE DESIGN */
  --background: oklch(0.985 0.01 260);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0 / 0.7);
  --card-foreground: oklch(0.145 0 0);
  --primary: oklch(0.145 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --border: oklch(0.145 0 0 / 0.1);
  /* etc. */
}

.dark {
  /* ADAPTER SELON VOTRE DESIGN */
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0 / 0.4);
  --border: oklch(1 0 0 / 0.1);
  /* etc. */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  body {
    @apply bg-background text-foreground overflow-x-hidden;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    letter-spacing: -0.03em;
  }
}

@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .glass {
    @apply backdrop-blur-md bg-card/60 border border-white/10 shadow-lg;
  }

  .glass-hover {
    @apply transition-all duration-300 hover:bg-card/80 hover:border-white/20 hover:shadow-xl;
  }

  .gpu-accelerate {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
}
```

## Phase 6: Architecture RSC (React Server Components)

### 6.1 Pattern de structure de page

Pour chaque route dans `src/app/[route]/`:

**`page.tsx`** (Server Component):

```tsx
import { Metadata } from "next";
import PageClient from "./PageClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Titre de la page",
    description: "Description SEO",
    // ... autres metadata
  };
}

export default function Page() {
  // Fetch data côté serveur si nécessaire
  return <PageClient />;
}
```

**`PageClient.tsx`** (Client Component):

```tsx
"use client";

import { motion } from "framer-motion";

export default function PageClient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Votre contenu */}
    </motion.div>
  );
}
```

### 6.2 Navigation avec transitions

Utiliser `next-view-transitions` au lieu de `next/link`:

```tsx
import { Link } from "next-view-transitions";

export default function Navigation() {
  return (
    <nav>
      <Link href="/about">À propos</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
```

## Phase 7: Data Modularity (Strict)

### 7.1 Règles de gestion des données

1. **Centralisation**: Toutes les données statiques dans `src/lib/data/`
2. **Exports centralisés**: via `src/lib/data/index.ts`
3. **Limite de taille**: Maximum 250 lignes par fichier
4. **Typage strict**: Créer des types TypeScript pour toutes les données

### 7.2 Exemple de structure de données

**`src/lib/data/blog-data.ts`**:

```tsx
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Premier article",
    slug: "premier-article",
    excerpt: "Description courte",
    content: "Contenu complet...",
    publishedAt: "2025-01-01",
  },
  // ... autres posts
];
```

**`src/lib/data/index.ts`** (Barrel export):

```tsx
export * from "./blog-data";
export * from "./nav-data";
export * from "./homepage-data";
// ... autres exports
```

## Phase 8: SEO & Metadata

### 8.1 Créer un générateur de metadata

**`src/lib/seo/metadata-generator.ts`**:

```tsx
import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  slug: string;
  image?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  slug,
  image,
  noIndex = false,
}: PageMetadata): Metadata {
  const url = `https://votresite.com${slug}`;
  const ogImage = image || "/og-default.png";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Votre Site",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex ? "noindex, nofollow" : "index, follow",
  };
}
```

### 8.2 Utiliser dans les pages

```tsx
import { generatePageMetadata } from "@/lib/seo/metadata-generator";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Ma Page",
    description: "Description de ma page",
    slug: "/ma-page",
  });
}
```

## Phase 9: Optimisations Performance

### 9.1 Activer le React Compiler

Dans `next.config.ts`:

```tsx
experimental: {
  reactCompiler: true,
}

```

**Impact**: Plus besoin de `useMemo`, `useCallback` manuels.

### 9.2 Optimiser les imports

```tsx
experimental: {
  optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-*'],
}

```

### 9.3 Lazy loading des composants

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
  loading: () => <div>Chargement...</div>,
  ssr: false, // Si le composant n'a pas besoin d'être SSR
});
```

## Phase 10: Accessibilité (WCAG AA+)

### 10.1 Checklist essentielles

- ✅ Skip link vers `#main-content`
- ✅ `aria-label` sur tous les boutons icon-only
- ✅ Contraste minimum 4.5:1
- ✅ Navigation au clavier
- ✅ Focus visible sur tous les éléments interactifs

### 10.2 Exemple de Skip Link

```tsx
// Dans src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
        >
          Aller au contenu principal
        </a>

        <header>{/* Navigation */}</header>

        <main id="main-content">{children}</main>

        <footer>{/* Footer */}</footer>
      </body>
    </html>
  );
}
```

## Phase 11: Scripts & Workflows

### 11.1 Configurer `package.json`

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --max-warnings 0",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "build:analyze": "cross-env ANALYZE=true next build",
    "quality": "npm run lint && npm run type-check && npm run format:check"
  }
}
```

### 11.2 Workflow de vérification avant commit

```bash
npm run lint
npm run type-check
npm run build
```

## Phase 12: Customisation pour votre projet

### 12.1 Adapter les couleurs

Modifier les variables CSS dans `globals.css` selon votre palette:

- Utiliser OKLCH pour de meilleures transitions
- Maintenir le ratio de contraste WCAG AA
- Tester en mode light et dark

### 12.2 Adapter la typographie

Dans `design-tokens.ts`, ajuster:

- Les scales de heading selon votre hiérarchie
- Les tailles de body selon la lisibilité
- Les font-families selon votre identité

### 12.3 Adapter les composants

- Conserver le pattern RSC (Server/Client)
- Utiliser les design tokens pour la cohérence
- Respecter la limite de 250 lignes par fichier

## Phase 13: Déploiement

### 13.1 Variables d'environnement

Créer `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://votresite.com
# Ajouter vos variables spécifiques
```

### 13.2 Build de production

```bash
npm run build
npm run start
```

### 13.3 Analyse du bundle

```bash
npm run build:analyze
```

Optimiser les imports et lazy-loader si nécessaire.

## Checklist finale S-Tier

- [ ] TypeScript strict activé (`noUncheckedIndexedAccess`, `noImplicitAny`)
- [ ] React Compiler activé
- [ ] Navigation avec `next-view-transitions`
- [ ] Structure RSC (Server/Client séparés)
- [ ] Data modularity (max 250 lignes, barrel exports)
- [ ] Design tokens centralisés
- [ ] Metadata SEO sur toutes les pages
- [ ] Security headers (CSP, HSTS, etc.)
- [ ] Accessibilité WCAG AA (skip links, aria-labels, contraste)
- [ ] PWA configuré
- [ ] Analytics installés
- [ ] Bundle optimisé (analyze, tree-shaking)
- [ ] ESLint max-warnings 0

---

## Phase 14: S-Tier God Mode (Perfectionnement)

Le "God Mode" représente l'état ultime de perfection technique, au-delà du S-Tier standard.

### 14.1 Automation SEO Totale

**`src/app/sitemap.ts`** (Dynamique) :

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://votresite.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Ajouter vos routes dynamiques ici (fetch depuis DB/CMS)
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
```

**`src/app/robots.ts`** :

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
```

### 14.2 Génération d'Images OG Dynamiques

Créer `src/app/og/route.tsx` avec `ImageResponse` pour générer des miniatures sociales à la volée, basées sur le design system.

**`src/app/og/route.tsx`**:

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Mon Site";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
          fontSize: 60,
          fontWeight: 600,
        }}
      >
        <div style={{ marginTop: 40 }}>{title}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

### 14.3 Tolérance Zéro "Hex Code"

Dans le God Mode, **aucune valeur hexadécimale (#000000)** ne doit exister dans les composants (`src/components`). Tout doit passer par les Semantic Tokens (`text-foreground`, `bg-card`, `border-border`) pour garantir une compatibilité Dark Mode parfaite à 100%.

### 14.4 Tests E2E Automatisés

Intégration obligatoire de Playwright :

```bash
npm init playwright@latest
```

Configurer `playwright.config.ts` pour tester les parcours critiques (Contact, Navigation, Chargement).

**`playwright.config.ts`**:

```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],

  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
```

### 14.5 Robustesse Tooling

- Si `@hookform/resolvers` cause des soucis ESM, créer un résolveur Zod custom (`src/lib/zod-resolver.ts`).
- Figer les versions de dépendances critiques (ex: `zod@3.24.1`) pour éviter les régressions silencieuses.

### 14.6 Advanced Performance (Partial Prerendering - PPR)

Dans `next.config.ts`:

```typescript
experimental: {
  ppr: 'incremental',
}
```

---

## Checklist Ultime (God Mode)

- [ ] **Strict TS**: `noUncheckedIndexedAccess` activé et résolu (0 erreurs)
- [ ] **Full Automation**: `sitemap.ts`, `robots.ts`, `og/route.tsx` dynamiques
- [ ] **Semantic Purity**: Zéro code hexadécimal dans les composants UI
- [ ] **Dark Mode Perfect**: Aucun flash, contraste AA validé partout
- [ ] **Advanced Config**: `reactCompiler` activé, `optimizePackageImports` configuré
- [ ] **Security**: CSP Strict, tous headers de sécurité actifs
- [ ] **Resilience**: Tests E2E sur parcours critiques
- [ ] **Build Success**: Build réussi sans erreurs ni warnings
- [ ] **PPR Enabled**: Partial Prerendering activé pour performance maximale

---

## Référence aux Workflows Existants

Ce guide s'intègre avec les workflows suivants:

- `/grade-a-plus` - Standards de qualité code et design
- `/grade-s-tier-ikerketa` - Standards techniques S-Tier immutables

Utilisez ces trois workflows conjointement pour maintenir une architecture de grade S-Tier+.
