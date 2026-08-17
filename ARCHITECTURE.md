# 🏛️ Architecture Audrey Castets — S-Tier God Mode

Documentation technique de référence pour l'architecture logicielle, les flux de données et les standards de code.

---

## 🏗️ Structure Globale

Le projet suit les principes de l'**App Router Next.js 16**, du **Server/Client Component Splitting**, et de la séparation stricte logique/UI.

```text
src/
├── app/                     # Next.js 16 App Router (Routes & API)
│   ├── (legal)/             # Pages légales (Mentions, Confidentialité)
│   ├── api/                 # Endpoints API (Contact, Newsletter, Réservations)
│   ├── bilan-de-competences # Silo SEO Bilan de Compétences
│   ├── blog/                # Système d'articles et actualités
│   ├── contact/             # Formulaire de contact sécurisé
│   ├── prendre-rendez-vous/ # Prise de RDV interactive
│   ├── services/            # Hub des expertises & détails
│   ├── tarifs/              # Grille tarifaire transparente
│   ├── layout.tsx           # Root Layout (Theme, Fonts, Analytics)
│   ├── page.tsx             # Homepage Hero & Vitrine
│   ├── sitemap.ts           # Sitemap dynamique XML
│   └── robots.ts            # Directives robots.txt
├── components/              # Architecture UI Composants
│   ├── booking/             # Modules de prise de RDV
│   ├── contact/             # Formulaires & validation
│   ├── providers/           # Providers React (Theme, Motion, A11y)
│   ├── sections/            # Sections de page (Hero, Stats, Services, FAQ)
│   ├── services/            # Composants spécialisés (Animations, Modules)
│   ├── tests/               # Évaluations interactives (DIVA, MBI)
│   └── ui/                  # Primitives UI Radix + Ghost-Glass
├── hooks/                   # Hooks React personnalisés (Haptics, InView, Mobile)
├── lib/                     # Logique métier & Données
│   ├── data/                # Définitions statiques & typages des services
│   ├── types/               # Typages TypeScript métier
│   ├── utils/               # Algorithmes de calcul (DIVA, MBI) & formatage
│   ├── breadcrumbs.ts       # Moteur de fil d'Ariane & JSON-LD
│   ├── email-templates.tsx  # Templates d'e-mails React-Email
│   ├── supabase.ts          # Client Supabase & persistance
│   └── utils.ts             # Utilitaire Tailwind merge (cn)
└── middleware.ts            # Security Headers, CSP & Protection
```

---

## 💎 Standards S-Tier

### 1. Zero `any` & TypeScript Strict

- Typage strict 100% sans `any`.
- Validation des payloads entrants via **Zod**.
- `noUncheckedIndexedAccess: true` activé pour garantir l'absence de régressions `undefined`.

### 2. Performance & Optimisations Next.js 16

- **React Compiler activé** (`experimental.reactCompiler = true`).
- **Images AVIF/WebP automatiques** via `next/image` avec `placeholder="blur"` et dimensionnement responsive.
- **Tree-shaking optimisé** (`experimental.optimizePackageImports` pour Lucide, Framer Motion, Radix UI).
- **Navigation sans flash blanc** via `next-view-transitions`.

### 3. Design System & Ghost-Glass

- Palette sémantique basée sur **OKLCH**.
- Effets de profondeur et transparence `backdrop-blur` avec bordures sémantiques.
- Respect strict des tokens validé par `npm run guard`.

### 4. Sécurité & Conformité

- En-têtes HTTP renforcés via `src/middleware.ts` (Content-Security-Policy, HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy).
- Stockage RGPD compliant sur Supabase avec Row Level Security (RLS).
- Notifications transactionnelles sécurisées avec Resend.

---

## 🛠️ Commandes Principales

```bash
# Développement
npm run dev

# Vérification Qualité Totale
npm run quality

# Tests Unitaires & Couverture
npm run test:coverage

# Pipeline de Vérification Complet
npm run verify
```
