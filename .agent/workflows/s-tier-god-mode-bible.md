# S-Tier God Mode Bible (Manifeste & Setup)

Ce document est la source de vérité unique pour tout développement sur ce projet. Il fusionne les standards **Grade A+** et le guide de réplication **S-Tier**.

---

## 🏗️ PARTIE 1 : MANIFESTE S-TIER (Règles Immuables)

### 1.1 Core Engine (Bleeding Edge)

- **React Compiler** : `experimental.reactCompiler = true`. Plus de `useMemo` manuel.
- **Middleware Edge** : Toute logique globale (Sécu, GeoIP) dans `middleware.ts`.
- **Navigation** : `<Link>` de `next-view-transitions` **UNIQUEMENT**.
- **Images** : Format `AVIF/WebP` forcé. `placeholder="blur"` pour toutes les images distantes sans exception (BlurHash/LQIP).

### 1.2 TypeScript God Mode

- **Zero "Any" Policy** : L'utilisation de `any` est strictement interdite. Utiliser `unknown` ou des generics.
- **Safety First** : `noUncheckedIndexedAccess: true` activé.
- **Clean Code** : 0 warning ESLint (`max-warnings 0`) avant tout commit.

### 1.3 Design System "Ghost-Glass"

- **Philosophie** : Interfaces fluides, transparentes et vivantes.
- **Surfaces** : `bg-card/60 backdrop-blur-md` (Profondeur).
- **Bordures** : `border-white/10` (Les "vitres" ne sont pas grises).
- **Morphing** : `view-transition-name` sur les éléments persistants pour navigation fluide.
- **Tailwind v4** : Syntaxe moderne (`bg-linear-to-*`, `aspect-16/9`).
- **Semantic Only** : Pas de code HEX dans les composants. Utiliser les variables CSS (--primary, --card).
- **CSS Strict** : Utiliser `shrink-0` (pas `flex-shrink-0`), `grow` (pas `flex-grow`), `basis-*` (pas `flex-basis`).

### 1.4 Accessibilité (WCAG AA+)

- **Navigation** : Skip link vers `#main-content` obligatoire.
- **Interactions** : `aria-label` sur tous les boutons icon-only.
- **Haptique** : Feedback tactile sur mobile pour actions clés (`navigator.vibrate`).

---

## 🛠️ PARTIE 2 : SETUP & CONFIGURATION

### 2.1 Stack Technique

```bash
# Core
npm install next@latest react@latest react-dom@latest
npm install -D typescript@latest @types/react@latest @types/react-dom@latest

# S-Tier Essentials
npm install next-view-transitions next-themes framer-motion lucide-react
npm install clsx tailwind-merge class-variance-authority
npm install next-pwa @vercel/analytics @vercel/speed-insights
npm install zod

# Testing & Quality
npm install -D @playwright/test
npm install -D tailwindcss@latest @tailwindcss/postcss@latest
```

### 2.2 Config TS (`tsconfig.json`)

Utiliser le preset strict avec :

```json
"checkJs": false,
"strict": true,
"noImplicitAny": true,
"noUncheckedIndexedAccess": true,
"noImplicitOverride": true,
"paths": { "@/*": ["./src/*"] }
```

### 2.3 Config Next.js (`next.config.ts`)

- **Headers** : CSP strict, HSTS, X-Content-Type-Options.
- **Experimental** :
  ```ts
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  }
  ```

### 2.4 Config IDE (.vscode/settings.json)

Pour éviter les faux positifs CSS avec Tailwind v4 (`@theme`, `@plugin`), désactiver la validation native :

```json
{
  "css.validate": false,
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

---

## 🏛️ PARTIE 3 : ARCHITECTURE & DATA

### 3.1 Structure de Dossiers

```
src/
├── app/                      # Routes (RSC)
│   ├── [route]/
│       ├── page.tsx          # Server Component
│       └── PageClient.tsx    # Client Component
├── components/               # UI & Features
├── lib/
│   ├── data/                 # SSOT (Single Source of Truth)
│   │   ├── index.ts          # Barrel export unique
│   │   └── [domain].ts       # Max 250 lignes/fichier
│   ├── design-tokens.ts      # Styles constants
│   └── utils.ts
```

### 3.2 Règles Data

1. **Centralisation** : Tout texte ou donnée statique vit dans `src/lib/data`.
2. **Atomicité** : Fichiers splittés par domaine (ex: `services-data.ts`, `blog-data.ts`).
3. **Typage** : Interfaces TS explicites pour chaque objet data.

---

## 🤖 PARTIE 4 : AUTOMATION & FEATURES

### 4.1 Social & SEO (Auto)

- **OG Images** : Route dynamique `src/app/og/route.tsx` (Edge Runtime).
- **Sitemap/Robots** : Générés dynamiquement (`sitemap.ts`, `robots.ts`).
- **Metadata** : Fonction helper `generatePageMetadata` centralisée.

### 4.2 Testing Strategy

- **E2E (Playwright)** : Validation des parcours critiques (Contact, Navigation, Chargement).
  - Config: `playwright.config.ts`
  - Run: `npx playwright test`
  - Fichiers: `e2e/core-journeys.spec.ts`

### 4.3 Schema.org Exhaustif (God Tier++)

Maximiser la visibilité SERP avec des schémas structurés complets:

| Schema         | Usage                                     | Génération                         |
| -------------- | ----------------------------------------- | ---------------------------------- |
| `Service`      | Pages de services avec tarifs, zone, avis | Auto via `JsonLd type='Service'`   |
| `HowTo`        | Guides et tutoriels (étapes, outils)      | `JsonLd type='HowTo'` avec steps[] |
| `Product`      | Offres packagées (Livre, Formations)      | `JsonLd type='Product'`            |
| `Event`        | Webinaires, promotions temporaires        | `JsonLd type='Event'`              |
| `FAQPage`      | Toute page avec FAQ                       | Auto via prop `faq`                |
| `OfferCatalog` | Services multi-tarifs                     | Auto via prop `hasOfferCatalog`    |

> **Règle** : Chaque page doit avoir au minimum 2 schemas (ex: `Service` + `FAQPage` ou `BreadcrumbList`).

---

## ⚡ PARTIE 5 : GOD MODE+ (Animations & UX)

### 5.1 Stratégie Hybride "Performance First"

> **IMPORTANT** : Pour éviter le TBT (Total Blocking Time) et le Jitter au chargement, nous utilisons une stratégie hybride.

- **Entrance Animations (Scroll)** : **CSS Exclusif**.

  - Utiliser la classe utilitaire `.animate-in` (fadeInUp).
  - Ajouter `[data-in-view="true"]` via `IntersectionObserver` léger si nécessaire, ou simplement `.animate-[fadeInUp_0.5s_ease-out_forwards]` avec `animation-delay` pour le stagger.
  - ❌ INTERDIT : `whileInView` de Framer Motion sur les listes d'éléments (trop lourd).

- **Interaction Animations (Hover/Tap)** : **Framer Motion**.
  - **Cards** : `whileHover={{ y: -8, scale: 1.02 }}` (Spring physics OK sur interaction).
  - **Icons** : `group-hover:scale-110` (CSS preferred) ou Motion si complexe.

### 5.2 Micro-Animations Standards

- **Shadows** : `hover:shadow-2xl hover:shadow-foreground/5` pour glow effect.
- **Spring Config** : `{ type: 'spring', stiffness: 400, damping: 25 }` (Pour interactions seulement).

### 5.3 Haptic Feedback (Mobile)

- **Hook** : `useHaptics` depuis `@/hooks/use-haptics`
- **Patterns** : `light` (10ms), `medium` (40ms), `heavy` (70ms), `success`, `error`
- **Obligatoire sur** :
  - Menu burger (open/close)
  - Accordions (toggle)
  - CTA buttons (click)
  - Navigation links critiques

### 5.4 Accessibilité Motion

- Respecter `prefers-reduced-motion: reduce`
- Le hook `useHaptics` vérifie automatiquement cette préférence

---

## 🧹 PARTIE 6 : HYGIÈNE CODE (Anti-Doublons)

### 6.1 Checklist Avant Création de Composant

1. ❓ Ce composant existe-t-il déjà ? (`grep -r "export.*ComponentName"`)
2. ❓ Puis-je étendre un composant existant avec une prop ?
3. ❓ Dois-je créer un wrapper ou modifier l'original ?

### 6.2 Patterns Autorisés

- **Wrapper/Facade** : `ServiceCard` → `UniversalServiceCard` (OK si simplifie l'API)
- **Variants** : Via props (`isGlass`, `variant`) sur composant unique

### 6.3 Patterns Interdits

- ❌ Deux fichiers avec le même nom dans des dossiers différents
- ❌ Copier-coller d'un composant pour "légères modifications"
- ❌ Imports inutilisés ou fichiers orphelins

```bash
# Vérifier les imports non utilisés
npx ts-prune

# Audit radical des dépendances (Ghost Dependencies)
npm list --depth=0
```

---

## 🔒 PARTIE 7 : SECURITY & OPTIMIZATION (God Mode++)

### 7.1 Security Hardening

- **CSP (Strict)** : `Content-Security-Policy` avec `default-src 'self'`.
- **Headers** : `HSTS` (Preload), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
- **Zod** : Validation stricte de tous les inputs et searchParams.

### 7.2 Bundle Intelligence

- **Analyzer** : `@next/bundle-analyzer` configuré (env `ANALYZE=true`).
- **Budget** : Pas de "Large Page Data" (> 128kB) sur les pages critiques.
- **Tree-Shaking** : Vérifier imports `lucide-react` et `framer-motion` (via `optimizePackageImports`).

### 7.3 Image Perfection

- **Audits Sizes** : `next/image` doit avoir une prop `sizes` réaliste (pas de `100vw` par défaut sur mobile).
- **Format** : AVIF > WebP.

---

## 📊 PARTIE 8 : IMPACT PERFORMANCE (Mesures Concrètes)

### 8.1 Optimisations Next.js (`next.config.ts`)

| Modification                                                                         | Impact                                                       |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `reactCompiler: true`                                                                | Supprime `useMemo`/`useCallback` manuels → bundle plus léger |
| `optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion']` | Lucide: ~100kB → ~5kB                                        |
| `poweredByHeader: false`                                                             | Réduction latence (header inutile supprimé)                  |
| `compress: true`                                                                     | Compression gzip/brotli activée                              |
| `images.formats: ['image/webp', 'image/avif']`                                       | -30-50% vs JPEG/PNG                                          |
| Headers `Cache-Control: immutable` sur assets                                        | Cache agressif 1 an                                          |

### 8.2 TypeScript Strict Mode (`tsconfig.json`)

| Option                                | Impact                                |
| ------------------------------------- | ------------------------------------- |
| `noUncheckedIndexedAccess: true`      | Code plus sûr, moins runtime errors   |
| `incremental: true` + tsBuildInfoFile | Rebuild 50-70% plus rapide            |
| `skipLibCheck: true`                  | Build plus rapide (skip node_modules) |
| `isolatedModules: true`               | Compatible Turbopack/esbuild          |

### 8.3 Stratégie Animations S-Tier

| Avant                                  | Après                                    | Gain                               |
| -------------------------------------- | ---------------------------------------- | ---------------------------------- |
| `whileInView` Framer Motion sur listes | CSS `.animate-in` + IntersectionObserver | Réduit TBT, supprime jitter scroll |
| Framer Motion pour tout                | FM uniquement hover/tap                  | Bundle FM allégé                   |

### 8.4 Résumé Gains Mesurables

| Métrique                | Avant S-Tier    | Après S-Tier      |
| ----------------------- | --------------- | ----------------- |
| lucide-react chunk      | ~100kB          | ~5-10kB           |
| framer-motion chunk     | ~150kB          | ~30-50kB          |
| Build incrémental       | ~30s            | ~10-15s           |
| TBT (scroll animations) | Variable/jitter | Stable (CSS-only) |

---

## ✅ PARTIE 9 : RITUEL DE VÉRIFICATION

Avant tout push, exécuter ce workflow :

// turbo-all

1. **Qualité Totale** : `npm run quality` (Lint + Type-check + Format).
2. **Build Prod** : `npm run build` (Validation Bundle + CSP).
3. **Tests E2E** : `npx playwright test` (Validation UX multi-navigateurs).
4. **Audit Doublons** : Vérifier qu'aucun composant n'est dupliqué.
5. **Audit Bundle** : `npm run build:analyze` pour vérifier l'absence de chunks monstrueux (>150kB).

---

## 🚀 PARTIE 10 : UNIVERSE++++ (Performance Extreme & UX)

### 10.1 Micro-Optimisations HTTP

- `poweredByHeader: false` (Sécurité/Perf)
- `images.formats: ['image/avif', 'image/webp']` (Compression max)

### 10.2 UX Mobile Tactile

- Utiliser `useHaptics` pour tout feedback critique
- Patterns: `light` (tap), `success` (form submit), `error` (validation)
- Obligatoire sur : Menu Burger, Accordions, CTA Primaires

### 10.3 Morphing Transitions

- Elements persistants (Logo, CTA) doivent avoir `view-transition-name` unique
- Transition fluide entre pages sans flash blanc

### 10.4 Card Lift Physics

- Standard Cards: `hover:-translate-y-2 hover:scale-[1.02]`
- Shadow: `hover:shadow-2xl hover:shadow-ocean/10`

---

## 🏆 PARTIE 11 : VICTORY LAP (PWA & Reliability)

### 11.1 PWA Native (Mobile First)

- **Engine**: `next-pwa` configuré avec cache `StaleWhileRevalidate`.
- **Installabilité**: Manifest valide + Icons + Meta tags (`apple-mobile-web-app-capable`).
- **Offline**: Fallback réseau transparent.

### 11.2 Ghost UI (Perceived Performance)

- **Skeletons**: Pas de loaders spinners. Utiliser des `Skeleton` (shimmer) pour le contenu.
- **Variable**: Utiliser `--primary/10` pour les placeholders pour rester dans le thème.

### 11.3 Reliability (E2E Obligatoire)

- **Suite Critique**: `e2e/core-journeys.spec.ts` doit exister.
- **Coverage**:
  1. Homepage Load (Hero)
  2. Navigation (Menu & Links)
  3. Formulaires (Contact)
  4. Mobile UX (Burger Menu)
