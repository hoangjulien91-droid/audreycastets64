# 🧪 Guide des Tests S-Tier — Audrey Castets

Guide complet de la stratégie et de l'exécution des tests du projet.

---

## 📊 Stack de Test

- **Tests Unitaires & Intégration** : Vitest 4.x + React Testing Library + JSDOM
- **Tests End-to-End (E2E)** : Playwright 1.57+
- **Accessibilité (A11y)** : axe-core (`@axe-core/playwright`)
- **Performance & SEO** : Lighthouse CI (`lhci.config.cjs`)
- **Garde du Design System** : `scripts/design-system-guard.mjs`
- **Intégration Continue (CI)** : GitHub Actions

---

## 🚀 Commandes de Test

### Tests Unitaires (Vitest)

```bash
# Lancer les tests unitaires
npm run test

# Mode surveillance (développement actif)
npm run test:watch

# Interface visuelle Vitest UI
npm run test:ui

# Rapport de couverture de code
npm run test:coverage
```

### Tests E2E & Accessibilité (Playwright)

```bash
# Lancer tous les tests E2E
npm run test:e2e

# Interface visuelle Playwright
npm run test:e2e:ui

# Mode débogage pas-à-pas
npm run test:e2e:debug

# Tests d'accessibilité uniquement (axe-core)
npm run test:a11y

# Exécuter l'ensemble de la suite (Lint + Unitaires + E2E)
npm run test:all
```

---

## 📁 Organisation des Tests

```text
├── src/
│   ├── lib/
│   │   ├── breadcrumbs.test.ts          # Tests des fils d'Ariane & JSON-LD
│   │   └── utils/
│   │       ├── diva-calculations.test.ts # Tests calculs questionnaire DIVA
│   │       └── mbi-calculations.test.ts  # Tests inventaire Burnout MBI
└── tests/
    ├── critical-flows.spec.ts           # Navigation & parcours critiques
    └── e2e/
        ├── accessibility.spec.ts        # Audit axe-core WCAG 2.1 AA
        ├── booking.spec.ts              # Prise de rendez-vous
        ├── contact.spec.ts              # Formulaire de contact
        └── homepage.spec.ts             # Éléments clés de la page d'accueil
```

---

## 🎯 Seuils & Critères de Validation

- **Couverture de code** : > 80% sur la logique métier critique (`src/lib/`).
- **Accessibilité** : 0 violation critique ou sévère selon le référentiel WCAG 2.1 AA.
- **Lighthouse CI** :
  - Accessibilité : ≥ 90
  - SEO : ≥ 90
  - Bonnes Pratiques : ≥ 85
  - Performance : ≥ 80
