---
description: Procédure d'audit complet pour vérifier la conformité S-Tier Next.js 16.
---

# Audit de Conformité S-Tier God Mode

Ce workflow décrit les étapes pour auditer et garantir la conformité S-Tier du projet Audrey Castets.

---

## 📋 1. Vérification Automatisée

Exécuter la suite complète de contrôle :

```bash
# 1. Vérification des tokens du Design System
npm run guard

# 2. Linting strict (0 erreurs, 0 warnings)
npm run lint

# 3. Validation du formatage
npm run format:check

# 4. Type Checking strict TypeScript
npm run typecheck

# 5. Tests unitaires et couverture
npm run test:coverage

# 6. Audits de maillage et de sitemap
npm run audit

# 7. Build de production
npm run build
```

---

## 🔍 2. Critères de Contrôle S-Tier

### 2.1 Performance & Images

- [ ] Toutes les images utilisent `next/image` avec `placeholder="blur"` et attributs `sizes`.
- [ ] Aucune animation lourde JS au scroll : privilégier les classes CSS `.animate-in`.

### 2.2 Design System Ghost-Glass

- [ ] Aucun code HEX ou couleur non tokenisée dans les composants applicatifs.
- [ ] Aucun rayon de bordure arbitraire `rounded-[...]`.

### 2.3 SEO & Schema.org

- [ ] Au moins 1 schéma JSON-LD par page publique (Service, FAQ, BreadcrumbList).
- [ ] Présence des balises OpenGraph et canonical.

---

## 🚀 3. Validation Finale

Exécuter `npm run verify` : si le résultat est 100% vert, la branche est prête pour déploiement.
