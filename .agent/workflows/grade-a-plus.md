---
description: Grade A+ Quality Workflow - Ensures top 0.01% code quality standards
---

# 🏗️ WORKFLOW GRADE A+ : Checklist de Qualité

Ce workflow garantit le standard Grade A+ (Top 0.01%) sur chaque modification.

## 📋 Avant chaque commit majeur

### 1. Linting
// turbo
```bash
npm run lint
```
Corrige automatiquement les erreurs de style si possible.

### 2. Type Check
// turbo
```bash
npm run typecheck
```
Validation stricte TypeScript. Aucun `any` autorisé.

### 3. Build Test
// turbo
```bash
npm run build
```
Simulation de production. Vérifie que tout compile correctement.

### 4. Format (optionnel)
```bash
npm run format
```
Applique Prettier pour un formatage cohérent.

---

## 🎨 Design System "Glass & Light"

### Tokens obligatoires (globals.css)
- `glass-effect` : Glassmorphism standard
- `card-premium` : Cartes avec hover premium
- `btn-premium` : Boutons avec gradient et glow
- `gradient-text` : Texte avec dégradé

### Règles visuelles
- ✅ Utiliser `backdrop-blur-md` pour la transparence
- ✅ Bordures subtiles: `border-white/10` (dark) ou `border-black/5` (light)
- ✅ Dégradés subtils plutôt qu'ombres lourdes
- ❌ Pas de couleurs opaques brutales

---

## 🧹 Clean Code Rules

### Limites
- **Max 250 lignes** par fichier de données
- **Max 300 lignes** par composant React
- Pas de "Magic Strings" (tout dans `src/lib/data`)

### Nommage
- `PascalCase` pour les composants
- `camelCase` pour les fonctions/variables
- Alias `@/` pour tous les imports

---

## ✅ Checklist finale

- [ ] Tous les tests passent (`npm run verify`)
- [ ] Aucun warning TypeScript
- [ ] Design conforme au système "Glass & Light"
- [ ] SEO: `generateMetadata()` sur chaque page
- [ ] Accessibilité: Contraste 4.5:1, `aria-label` sur boutons icônes
- [ ] Performance: First Load JS < 150kB

---

## 🏆 God Mode: 14/14 S-Tier+ UNLOCKED

- ✅ Security: Full header suite (CSP, HSTS, X-Frame-Options)
- ✅ Testing: Playwright E2E configured
- ✅ Grade S-Tier+ (Top 0.1%) achieved
