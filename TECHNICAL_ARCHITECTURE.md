# Architecture Technique & Standards "Grade A+"
*Référence pour reproduction de la stack technique haute qualité.*

Ce document recense l'architecture technique, les choix de stack et les configurations clés pour reproduire la qualité "Grade A+" sur un nouveau projet.

## 🏆 Standards Grade S-Tier - IKERKETA (Top 0.1%)
**Ce workflow définit les règles IMMUABLES à respecter pour tout développement sur ce projet.**

### 1. S-Tier Core (Bleeding Edge)
- **Engine & Performance** :
    - React Compiler : `experimental.reactCompiler = true` (Plus de `useMemo`).
    - Middleware Edge : Toute logique globale (Sécu, GeoIP) dans `middleware.ts`.
    - Navigation : `<Link>` de `next-view-transitions` UNIQUEMENT.
- **TypeScript Strict** :
    - `noUncheckedIndexedAccess: true`
    - Pas de `any`. Jamais.
    - Zéro warning ESLint accepté (`max-warnings 0`).

### 2. Architecture RSC
- **Structure** :
    - `src/app/[route]/page.tsx` = Server Component (RSC).
    - `*PageClient.tsx` = Client Component avec `use client`.
- **Data (Strict)** :
    - Centralisation : `src/lib/data/` uniquement.
    - Exports : Via `src/lib/data/index.ts`.
    - Limites : Max 250 lignes par fichier data.

### 3. Design System "Ghost-Glass" (S-Tier)
- **Philosophie** :
    - Morphing : Transitions fluides (`view-transition-name`).
    - Surfaces : `bg-card/60 backdrop-blur-md`.
    - Bordures : `border-white/10` (pas de gris opaque).
- **Tokens & Tailwind v4** :
    - Utiliser tokens CSS (`--primary`, `--accent`).
    - Syntaxe v4 (`bg-linear-to-*`, `aspect-16/9`).

### 4. Accessibilité (WCAG AA+)
- Skip link `#main-content`.
- `aria-label` sur boutons icon-only.
- Contraste 4.5:1.
- Haptique mobile (`navigator.vibrate`).

### 5. SEO & Metadata
- `generateMetadata()` sur chaque page.
- JSON-LD Rich Snippets obligatoires.
- SmartBreadcrumbs sur pages internes.

---

## 1. Core Stack (Legacy Reference)
- **Framework** : Next.js 15+ (App Router)
- **Language** : TypeScript 5.9+ (Mode Strict)
- **UI Library** : React 19+
- **Styling** : Tailwind CSS v4 (Alpha/Beta) + OKLCH Color Space
- **Runtime** : Node.js 22.x

## 2. Dépendances Clés & UI System
### Design System "Glass & Light"
- **Icons** : `lucide-react`
- **Primitives UI** : `shadcn/ui` (basé sur `@radix-ui/*`)
- **Animations** : `framer-motion` (v12+), `tailwindcss-animate`
- **Fonts** : `next/font/google` (Inter ou variable fonts)
- **Utils** : `clsx`, `tailwind-merge`, `class-variance-authority` (CVA)

### Performance & PWA
- **PWA Engine** : `next-pwa` (v5.6.0)
- **Image Optimization** : `sharp` (Support AVIF/WebP)
- **Bundle Analysis** : `@next/bundle-analyzer`
- **Lazy Loading** : `react-intersection-observer`

## 3. Configuration Technique (Fichiers Clés)

### A. Next.js Config (`next.config.ts`)
- **Headers de Sécurité** : CSP Strict, X-Frame-Options, HSTS Preload.
- **Caching Agressif** : Headers `Cache-Control: public, max-age=31536000, immutable` pour fonts/images/static.
- **Optimisations** :
    - `optimizePackageImports`: `['lucide-react', 'framer-motion']`
    - `compress`: `true`
    - `poweredByHeader`: `false`
- **Redirections** : Gestion centralisée des 301 pour préservation du jus SEO.

### B. Tailwind v4 Config (`globals.css`)
Utilisation du moteur v4 avec configuration CSS-first :
- **Color Space** : OKLCH pour des dégradés et transparences ultra-naturels.
- **Variables CSS** : Définition des tokens sémantiques (`--background`, `--card`, `--primary`) compatibles Dark Mode.
- **Utilities Pures** :
    - `.glass` : Backdrop-blur + bordures translucides.
    - `.gpu-accelerate` : `will-change: transform` pour fluidité 60fps.
    - `content-visibility: auto` : Pour le rendu lazy des sections off-screen.

### C. TypeScript (`tsconfig.json`)
- **Target** : ES2022
- **Checks** :
    - `strict: true`
    - `noImplicitAny: true`
    - `noUncheckedIndexedAccess: true` (Sécurité maximale sur les tableaux)
- **Paths** : Alias `@/*` pointant vers `./src/*`

## 4. Structure du Projet (`src/`)
```
src/
├── app/                 # App Router (Pages & Layouts)
│   ├── layout.tsx       # Root Layout (Providers, Analytics, Font)
│   ├── globals.css      # Entry point CSS / Tailwind v4
│   └── (routes)/        # Dossiers de pages
├── components/
│   ├── ui/              # Composants atomiques (Button, Card...)
│   ├── layout/          # Footer, Header, Navigation
│   └── (features)/      # Composants métier spécifiques
├── lib/
│   ├── utils.ts         # cn() helper
│   ├── fonts.ts         # Config Google Fonts
│   └── data/            # Données statiques (SSOT)
├── hooks/               # Custom React Hooks
└── types/               # Définitions TypeScript partagées
```

## 5. Qualité & CI/CD
- **Linter** : ESLint avec `next/core-web-vitals` + règles strictes (max-warnings 0).
- **Format** : Prettier configuré en hook pre-commit.
- **Tests** :
    - Unit : Vitest
    - E2E : Cypress
- **Audit** : Lighthouse CI (`@lhci/cli`) pour scores 100/100.

## 6. PWA & Assets
- **Manifest** : `public/manifest.json`
- **Service Worker** : Généré via `next-pwa` dans `next.config.ts`.
- **Icons** : Favicons SVG, PNG (16/32/192/512) et Apple Touch Icon.

## 7. Workflow "Grade A+"
Pour reproduire ce niveau de qualité :
1. Initialiser avec Next.js 15 + TS + Tailwind.
2. Installer Shadcn UI pour la base de composants.
3. Configurer `globals.css` avec les variables OKLCH et l'effet Glass.
4. Sécuriser via `next.config.ts` (Headers & CSP).
5. Activer la PWA et les analytics.
6. Enforcer le typage strict et le linting "Zero Warning".

## 8. Backend & Services Tiers (Intégrations)
- **Database** : Supabase (PostgreSQL) - Row Level Security (RLS) activé pour le stockage des leads/résultats.
- **Emailing** : Resend API (Transactionnel) pour une délivrabilité maximale.
- **Templates** : HTML Clean ou React Email pour les notifications Admin & Client.
- **Security** : Rate Limiting sur les routes API (`NextResponse`) pour prévenir les abus.

## 9. SEO Technique (S-Tier)
- **JSON-LD** : Schema.org typé (`schema-dts`) pour Rich Snippets (LocalBusiness, MedicalWebPage, FAQPage).
- **Sitemap** : Génération XML dynamique ou statique pour l'indexation rapide.
- **Robots.txt** : Gestion précise des directives d'indexation.
- **Open Graph** : Images dynamiques générées (`@vercel/og`) ou statiques optimisées pour le partage social.
