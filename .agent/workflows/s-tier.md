---
description: S-Tier God Mode Bible V2.0 Canonique - Architecture, Standards, Governance, Performance
---

# 📘 S-TIER GOD MODE BIBLE — V2.0 CANONIQUE

**Architecture · Standards · Gouvernance · Performance**

> **Statut** : Source de vérité unique
> **Objectif** : Zéro dérive · Zéro dette · Zéro régression

---

## 🧭 PARTIE 0 — GOUVERNANCE & NON-RÉGRESSION

### 0.1 Principe Fondamental

Ce standard est contractuel, pas indicatif.

- **Toute règle est obligatoire.**
- **Toute exception doit être documentée.**
- **Toute évolution doit renforcer le système.**

### 0.2 Process de Modification du Standard

Toute modification suit ce cycle rigoureux :

1.  **Problème réel identifié.**
2.  **Justification écrite** (Performance, DX, UX, Sécurité).
3.  **Validation.**
4.  **Mise à jour du manifeste.**
5.  **Ajout d’un test de non-régression.**

❌ **Interdit** : Modifier une règle "par confort".

### 0.3 Changelog Obligatoire

Chaque version du standard doit inclure :

- Date
- Règles ajoutées / modifiées
- Motivation technique

---

## 🧠 PARTIE 1 — MANIFESTE S-TIER (RÈGLES IMMUABLES)

### 1.1 Core Engine (Bleeding Edge)

- **React Compiler** : `reactCompiler = true` (root). Plus de `useMemo` manuel. stable en v16.
- **Edge Proxy (God Mode+)** : Toute logique globale (Sécu, GeoIP) dans `proxy.ts`. (Remplace `middleware.ts` en v16+).
- **Navigation** : `<Link>` de `next-view-transitions` **UNIQUEMENT**. Garantit le "Zero Flickering" (pas de flash blanc).
- **Images** : Format `AVIF/WebP` forcé. `placeholder="blur"` pour toutes les images distantes sans exception.
- **LazyMotion (God Mode+)** : Obligatoire. Wrapper global via `MotionProvider.tsx`.

### 1.2 TypeScript God Mode

- **Zero "Any" Policy** : `any` strictement interdit.
- **Validation** : Zod pour tout input externe.
- **Safety First** : `noUncheckedIndexedAccess: true`.
- **Clean Code** : 0 warning ESLint (`max-warnings 0`).

### 1.3 Design System "Ghost-Glass"

- **Philosophie** : Interfaces fluides, transparentes et vivantes.
- **Typographie** : `SectionHeader` obligatoire pour H1/H2/H3. Interdiction des balises brutes.
- **Surfaces** : `bg-card/60 backdrop-blur-md`.
- **CSS Strict** : Pas de `flex-*` shorthand ambigu, utiliser `shrink-0`, `grow`.

### 1.4 Accessibilité (WCAG AA+)

- Skip link, `aria-label`, feedback haptique mobile.

---

## ⚙️ PARTIE 2 — STACK & CONFIGURATION

### 2.1 Stack Technique

- **Core**: Next.js 16 (Canary), React 19, TypeScript 5.
- **Essentials**: `next-view-transitions`, `framer-motion` (m), `lucide-react`, `zod`.
- **PWA (God Mode+)** : `@serwist/next` **UNIQUEMENT**. `next-pwa` est interdit.
- **Tools**: Playwright, Tailwind v4.

### 2.2 Config TS Strict

```json
{
  "strict": true,
  "noImplicitAny": true,
  "noUncheckedIndexedAccess": true
}
```

### 2.3 Config Next.js

- **Core Settings**: `reactCompiler: true`. Plus de bloc `eslint` (CLI-only).
- **Headers**: CSP strict, HSTS.
- **Experimental**: `scrollRestoration`, `optimizePackageImports`.
- **PPR (Partial Prerendering)** : ✅ **Intégré par défaut** (Cache model v16). Plus de flag expérimental requis.

---

## 🧩 PARTIE 3 — ARCHITECTURE RSC & FRONTIÈRES

### 3.1 Règle Absolue

**Tout est Server Component par défaut.**

### 3.2 Client Component

Autorisé **UNIQUEMENT** si :

- Interaction utilisateur (onClick, onChange)
- Animation JS complexe (Framer Motion)
- Accès API navigateur (localStorage, window, geolocation)

```ts
"use client"; // Doit être justifié par un des cas ci-dessus
```

### 3.3 Interdictions Formelles

- ❌ `useEffect` dans `app/page.tsx`
- ❌ `"use client"` "par confort" pour éviter de passer des props
- ❌ Logique métier sensible côté client

---

## 🗂️ PARTIE 4 — ARCHITECTURE DATA (SSOT)

### 3.1 Structure de Dossiers

```
src/
├── app/                      # Routes (RSC)
│   ├── [route]/
│       ├── page.tsx          # Server Component
│       └── PageClient.tsx    # Client Component (si nécessaire)
├── components/               # UI & Features
├── lib/
│   ├── data/                 # SSOT (Single Source of Truth)
│   │   ├── index.ts          # Barrel export unique
│   │   └── [domain].ts       # Max 250 lignes/fichier
│   ├── design-tokens.ts      # Styles constants
│   └── utils.ts
```

### 3.2 Règles Data

1.  **Centralisation** : Tout texte ou donnée statique vit dans `src/lib/data`.
2.  **Atomicité** : Fichiers splittés par domaine.
3.  **Typage** : Interfaces TS explicites exportées.

---

## 🎨 PARTIE 5 — DESIGN SYSTEM & ANTI-DÉRIVE

### 5.1 Principe Anti-One-Off

- **Toute section doit réutiliser un pattern existant.**
- ❌ **Interdit** : Layout unique non réutilable "juste pour une page".

### 5.2 Validation Visuelle

Toute nouvelle page doit :

- Être comparée à une page existante pour cohérence.
- Respecter strictement les tokens (`design-tokens.ts`).

### 5.3 Guidelines Techniques Animation (Legacy God Mode+)

- **Scroll (Entrance)** : CSS Exclusif (`.animate-view`). Pas de JS.
- **Interaction** : Framer Motion (`m.div`) avec Spring physics.
- **Haptique** : `useHaptics` sur tous les boutons interactifs majeurs.
- **Hero** : Morphing (`view-transition-name`) pour les titres, fade-in CSS pour le reste.

---

## ⚡ PARTIE 6 — PERFORMANCE CONTRACTUELLE

### 6.1 Budgets Non-Négociables

| Metric         | Seuil        |
| :------------- | :----------- |
| **LCP**        | ≤ 2.5s       |
| **CLS**        | 0 (Strict)   |
| **TBT**        | ≤ 200ms      |
| **JS initial** | ≤ 128kB      |
| **Fonts**      | ≤ 2 familles |

⚠️ **Tout dépassement = Régression bloquante.**

---

## 🧪 PARTIE 7 — TESTS & CONFORMITÉ

### 7.1 Types de Tests

1.  **E2E UX (Playwright)** : Parcours critiques.
2.  **Tests Contractuels (NOUVEAU)** : Structure du code.
3.  **Tests de Régression Visuelle** : (Optionnel).

### 7.2 Tests Contractuels (OBLIGATOIRES)

Nous testons le code lui-même. Exemples :

- Aucune page sans `PageHero`.
- Aucun `<h1>` brut dans `/components`.
- `next-view-transitions` utilisé partout.

```ts
// Exemple Playwright
expect(await page.locator("h1").count()).toBe(0); // Si on interdit h1 brut
```

Le standard devient auto-exécutable.

---

## 🧬 PARTIE 8 — NAMING & SÉMANTIQUE

### 8.1 Conventions

| Type             | Convention                                      |
| :--------------- | :---------------------------------------------- |
| **Component**    | PascalCase (`ServiceCard`)                      |
| **Hook**         | useCamelCase (`useHaptics`)                     |
| **UI générique** | Prefix UI (`UIH1`, `UIButton`) ou dossier `ui/` |
| **Feature**      | FeatureName\*                                   |
| **Data**         | domainData (`servicesData`)                     |

---

## 🛠️ PARTIE 9 — DX & TOOLING (BLEEDING EDGE)

### 9.1 Linting & Qualité

- **Commande Contractuelle** : `npx eslint "src/**/*.{ts,tsx}"`.
- **Zéro Warning** : Le build échoue au premier warning (`--max-warnings 0`).

---

## 🧯 PARTIE 10 — ERROR & RÉSILIENCE

### 10.1 Obligations

- **`error.tsx`** : Obligatoire sur les routes critiques.
- **`not-found.tsx`** : Stylé via Design System (pas de 404 par défaut Next.js).
- **Logs** : Jamais de stack trace visible en prod.

---

## 🔐 PARTIE 11 — SECURITY & HARDENING

- **CSP** : Strict (`default-src 'self'`).
- **Headers** : HSTS Preload, `nosniff`, `DENY` frames.
- **Zod** : Validation de tous les SearchParams et Server Actions.

---

## 🧼 PARTIE 12 — HYGIÈNE & ANTI-DOUBLONS

- **Check avant création** : `grep` pour voir si ça existe.
- **Patterns** : Privilégier Wrapper ou Variant props.
- **Interdit** : Duplication de code > 3 lignes.

---

## 🤖 PARTIE 13 — AUTOMATION & FEATURES (BONUS)

- **SEO** : Schema.org (2 schemas/page min), OG Images Edge.
- **Bundle** : Analyzer activé en CI.

---

## 🧪 PARTIE 14 — RITUEL DE VÉRIFICATION FINAL

Avant tout push sur `main`, exécuter le workflow suivant :

// turbo-all

1. **Qualité Totale** (Lint + Type-check + Prettier)
   npm run quality

2. **Build Prod** (Vérif build prod + CSP)
   npm run build

3. **Tests E2E** (E2E + Tests Contractuels)
   npx playwright test

4. **Audit Bundle** (Audit Bundle size)
   npm run build:analyze

**Objectif** : Branche main toujours verte.

---

## 🚀 PARTIE 15 — MIGRATION NEXT.JS 16 (NOUVEAU)

### 15.1 Dépendances Obligatoires

```bash
npm install babel-plugin-react-compiler --save-dev
```

⚠️ **CRITIQUE** : Sans cette dépendance, `reactCompiler: true` fait échouer le build.

### 15.2 Configuration Minimale

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};
```

### 15.3 Fichiers à Vérifier

| Fichier              | Emplacement                    | Action                                  |
| -------------------- | ------------------------------ | --------------------------------------- |
| `next-env.d.ts`      | **Racine projet** (pas `/src`) | Déplacer si mal placé                   |
| `MotionProvider.tsx` | `/components/providers/`       | Doit envelopper l'app dans `layout.tsx` |
| `proxy.ts`           | `/src/`                        | Obligatoire pour Edge runtime (v16+)    |

### 15.4 React 19 Patterns

```typescript
// ✅ CORRECT - React 19
const [state, action, isPending] = useActionState(serverAction, initialState);

// ❌ INTERDIT - Deprecated
const [state, formAction] = useFormState(serverAction, initialState);
```

### 15.5 Versions Minimales Compatibles

| Bibliothèque            | Version Min | React 19 |
| ----------------------- | ----------- | -------- |
| `framer-motion`         | 12.x        | ✅       |
| `next-view-transitions` | 0.3.x       | ✅       |
| `lucide-react`          | 0.500+      | ✅       |
| `next-themes`           | 0.4.x       | ✅       |

### 15.6 ESLint Configuration

```javascript
// eslint.config.mjs - Flat Config obligatoire
const eslintConfig = [
  {
    ignores: ["**/next-env.d.ts", "**/*.d.ts"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];
```

### 15.7 Audit Checklist Migration

- [x] `babel-plugin-react-compiler` installé
- [x] `next-env.d.ts` à la racine (pas dans `/src`)
- [x] `MotionProvider` actif (pas commenté)
- [x] `useActionState` utilisé (pas `useFormState`)
- [x] Build 100% statique vérifié
- [x] Turbopack dev fonctionnel

### 15.8 Cache Components (V16.1+)

Le modèle `cacheComponents: true` est actif par défaut en V16.1. Il est **incompatible** avec les anciens Route Segment Configs.

#### ❌ INTERDIT (Provoque un build failure)

```typescript
// Ces exports sont désormais gérés automatiquement par Next.js
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = true;
export const runtime = "edge"; // Pour les API routes
```

#### ✅ SOLUTION

Supprimer ces exports. Le comportement est désormais inféré par Next.js en fonction du contenu du composant (présence de `generateStaticParams`, etc.).

### 15.9 Changelog

| Date       | Modification                                     | Motivation                                 |
| :--------- | :----------------------------------------------- | :----------------------------------------- |
| 2026-01-01 | Suppression Route Segment Configs (V16.1)        | Incompatibilité `cacheComponents`          |
| 2026-01-01 | Migration `middleware.ts` -> `proxy.ts`          | Nouveau standard Next.js 16 (Canary)       |
| 2026-01-01 | Migration `motion` -> `m` (16 composants)        | Réduction bundle size via `LazyMotion`     |
| 2026-01-01 | Migration `next/link` -> `next-view-transitions` | Zero Flickering Navigation                 |
| 2026-01-01 | PWA God Mode (`@serwist/next`)                   | Remplacement `next-pwa` (incompatible)     |
| 2026-01-01 | Certification Compliance Totale                  | Audit Final 100% S-Tier Reached            |
| 2026-01-01 | Mise à jour Canonique 2026                       | Harmonisation Tarifs et Année de Référence |

---

## 📱 PARTIE 16 — PWA GOD MODE

### 16.1 Obligation

La PWA est **OBLIGATOIRE** pour tout projet S-Tier :

- Installable (manifest + icons)
- Offline-capable (Service Worker)
- Cache intelligent (Workbox strategies)

### 16.2 Stack

| Outil           | Version Min | Rôle                    |
| :-------------- | :---------- | :---------------------- |
| `@serwist/next` | 10.x        | Intégration Next.js ESM |
| `serwist`       | 10.x        | Core Workbox moderne    |

❌ **Interdit** : `next-pwa` (incompatible Next.js 16+)

> [!CAUTION]
> **Next.js 16 Canary** : `@serwist/next` génère un `WorkerError` avec Turbopack (Jan 2026). En attendant une correction, la PWA reste en mode "passif" (manifest + installable, sans caching offline). Ce sera corrigé dans une future release stable.

### 16.3 Configuration Minimale

```typescript
// next.config.ts
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts", // Localisation standard App Router
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

export default withSerwist(nextConfig);
```

### 16.4 Fichiers Requis

| Fichier            | Emplacement | Description                     |
| :----------------- | :---------- | :------------------------------ |
| `sw.ts`            | `/src/app/` | Service Worker source (Serwist) |
| `site.webmanifest` | `/public/`  | Manifest PWA                    |
| `android-chrome-*` | `/public/`  | Icons 192x192, 512x512          |

### 16.5 Service Worker Template

```typescript
// src/app/sw.ts
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST ?? [],
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();
```
