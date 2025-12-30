# 🏆 S-Tier God Mode Bible

Ce document récapitule les standards d'excellence appliqués à ce projet. C'est le plan d'action exact pour maintenir ou élever n'importe quel site à ce niveau de performance et de qualité.

## 1. Core Engine (La base technique "Bleeding Edge")

- **React Compiler Activé** : `experimental.reactCompiler = true` dans `next.config.ts`. Optimisation automatique sans `useMemo` ni `useCallback`.
- **Navigation "Zero Flickering"** : Utilisation systématique de `next-view-transitions` pour éliminer le flash blanc et permettre des transitions fluides.
- **Images Avancées** :
  - Format forcé **AVIF** (plus léger que WebP).
  - Attribut `placeholder="blur"` **obligatoire** sur toutes les images (évite le CLS).

## 2. Design System "Ghost-Glass" (L'esthétique Premium)

- **Palette Sémantique** : Interdiction des codes HEX. Utilisation exclusive de tokens sémantiques basés sur l'espace colorimétrique **OKLCH**.
- **Effet "Vitre"** : Généralisation du `backdrop-blur-md` avec des bordures subtiles `border-white/10`.
- **Typographie Unifiée** : Composant `<SectionHeader>` unique pour garantir une hiérarchie et une taille de police millimétrées.

## 3. UX & Animations (Stratégie Hybride "Performance First")

- **Zero Lag Strategy** :
  - **Scroll (Apparition)** : 100% CSS (`.animate-in`). Coût CPU = 0.
  - **Interaction (Hover/Tap)** : JS léger (Physics Spring) pour le détail.
- **Zero Jitter Policy** : Layout calculé côté Serveur (SSR) avec hauteurs fixes pour éviter tout saut au chargement.
- **Feedback Tactile (Haptique)** : Vibrations (`navigator.vibrate`) sur les CTA mobiles pour une sensation d'application native.

## 4. TypeScript "God Mode" (Stabilité Totale)

- **Zero "Any" Policy** : Interdiction stricte du type `any`. Validation stricte via **Zod**.
- **No Unchecked Index** : Activation de `noUncheckedIndexedAccess` pour prévenir techniquement les erreurs `undefined`.

## 5. SEO & Sécurité (Architecture Invisible)

- **Schemas.org Massifs** : Au moins 2 schémas JSON-LD par page (Service, FAQ, Breadcrumbs) pour booster le taux de clic (Rich Snippets).
- **Security Hardening** : Headers de sécurité stricts (HSTS Preload, CSP) via le `middleware.ts`.

## 6. Workflow de "Qualité Totale"

Chaque modification doit valider le rituel suivant :

1. **Lint Strict** (0 warnings).
2. **Type Check** (Compilation complète).
3. **Build de Prod** (Vérification de la taille des bundles).
4. **Tests E2E** (Playwright pour les parcours critiques).

---

_Ce manifeste définit le standard de qualité du projet. Toute déviation doit être justifiée._
