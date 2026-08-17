# 🤝 Guide de Contribution — S-Tier Audrey Castets

Ce guide décrit le workflow de développement, les conventions de code et les exigences de qualité pour contribuer au projet.

---

## 🛠️ Workflow de Développement

### 1. Installation & Préparation

```bash
# Installer les dépendances
npm install

# Configurer les hooks git automatiques
npm run prepare
```

### 2. Développement Quotidien

- Utiliser des branches descriptives (`feat/nom-fonctionnalite`, `fix/nom-du-bug`, `perf/optimisation`).
- Tester les composants en continu avec `npm run test:watch`.
- Respecter les tokens du design system (validés par `npm run guard`).

---

## 📋 Conventions de Commit

Nous appliquons la spécification **Conventional Commits** :

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction d'un bug
- `perf:` Amélioration des performances
- `refactor:` Refactorisation sans modification de comportement
- `test:` Ajout ou mise à jour de tests
- `docs:` Documentation
- `chore:` Tâches de maintenance, dépendances ou configuration

---

## 🛡️ Checklist Qualité Avant Commit & PR

Avant de soumettre une pull request, exécuter la commande de validation complète :

```bash
npm run verify
```

Ce script vérifie automatiquement :

1. ✅ **Design System Guard** (`npm run guard`) — Zéro rayon arbitraire ou couleur non tokenisée.
2. ✅ **Linting** (`npm run lint`) — 0 erreur, 0 warning.
3. ✅ **Vérification TypeScript** (`npm run typecheck`) — Aucune erreur de typage.
4. ✅ **Formatage du Code** (`npm run format:check`) — Prettier 100% propre.
5. ✅ **Tests Unitaires & Intégration** (`npm run test`) — Tous les tests au vert.
6. ✅ **Build de Production** (`npm run build`) — Compilation Next.js sans régression.
