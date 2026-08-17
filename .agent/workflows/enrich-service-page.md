---
description: Guide pas-à-pas pour enrichir ou créer une nouvelle page de service S-Tier.
---

# Procédure d'Enrichissement d'une Page Service

Ce workflow détaille la méthode contractuelle pour créer ou enrichir une page de service (particulier ou entreprise).

---

## 📝 1. Définition des Données (SSOT)

1. Créer ou mettre à jour la définition dans `src/lib/data/definitions/`.
2. S'assurer que tous les champs obligatoires sont renseignés :
   - Titre, accroche, description détaillée.
   - Piliers méthodologiques (étapes de l'accompagnement).
   - FAQ dédiée au service.
   - Témoignages ou cas pratiques.
   - Mots-clés SEO locaux (Landes / Pays Basque / Dax / Bayonne / Mont-de-Marsan).

---

## 🎨 2. Intégration Visuelle

1. Utiliser les composants standardisés :
   - `<SectionHeader>` pour la hiérarchie H1/H2/H3.
   - `<ServiceDetails>` ou sections animées existantes.
   - Cartes Ghost-Glass avec tokens `bg-card` et `border-border/10`.
2. Ajouter le fil d'Ariane via `generateBreadcrumbs()` et le schéma JSON-LD associé.

---

## 🧪 3. Validation de la Page

1. Mettre à jour `src/app/sitemap.ts` si une nouvelle route a été créée.
2. Lancer les audits :
   ```bash
   npm run audit
   npm run quality
   ```
