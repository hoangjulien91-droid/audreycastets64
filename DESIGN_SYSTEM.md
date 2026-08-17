# 🎨 Design System — Audrey Castets S-Tier+

## 1. Philosophie & Principes Fondamentaux

Le design system repose sur l'esthétique **Ghost-Glass** et les standards de clarté, d'empathie et de rigueur médicale propres à la psychologie du travail, à la thérapie TCC et aux bilans de compétences :

- **Perceptual Uniformity (OKLCH)** : Palette chromatique équilibrée garantissant la même clarté et saturation perçues sur tous les écrans (OLED, Retina, mobile).
- **Accessibilité Maximale (WCAG AAA)** : Contraste minimal de **6.8:1** sur la couleur primaire (`--color-primary`) et supérieur à **14:1** sur le texte principal.
- **SSOT (Single Source of Truth)** : Tous les composants dérivent des tokens sémantiques CSS et de Tailwind v4. Zéro couleur hardcodée dans le code applicatif.
- **Élévation Ghost-Glass Spéculaire** : Réflexion de lumière zénithale (`inset 0 1px 0 rgba(255, 255, 255, 0.9)`) combinée à des ombres chromatiques douces.

---

## 2. Palette Chromatique & Tokens Sémantiques

### 2.1 Teinte Primaire : Deep Plum Thérapeutique

- `--color-primary` : `#7e486c` — Prune profond et chaleureux, symbole de confiance et de rigueur clinique (Contraste 6.8:1 sur fond blanc).
- `--color-primary-dark` : `#663354` — Utilisé pour le gradient des boutons principaux et les titres forts.
- `--color-primary-soft` : `#a87195` — Accents doux et badges.
- `--color-primary-light` : `#d9b8cc` — Bordures et halos subtils.

### 2.2 Teintes Secondaires & Accents Thérapeutiques

- `--color-secondary` : `#f7f2f6` — Surface claire de réassurance.
- `--color-muted-foreground` : `#554d5d` — Corps de texte secondaire (Contraste 7.1:1 sur fond clair).
- `--color-violet` : `#8b68b8` — Améthyste TCC & concentration.
- `--color-rose` : `#c76e93` — Rose Quartz & écoute bienveillante.
- `--color-sage` : `#6f9b84` — Sauge régulatrice du stress & équilibre de vie.
- `--color-background` : `#fdfafc` — Porcelaine chaude anti-fatigue oculaire.

### 2.3 Mode Sombre (Dark Mode Obsidienne)

- `--color-background` : `#120f18` — Noir obsidienne teinté prune.
- `--color-card` : `#1b1624` — Surfaces translucides givrées.
- `--color-border` : `#312840` — Liserés sombres élégants.

---

## 3. Typographie & Rythme Visuel

- **Display & Titres H1/H2** : `Syne` (géométrie moderne, élégance affirmée).
- **Éditorial & Citations** : `Instrument Serif` (sensibilité humaine et posture de praticienne).
- **Corps de Texte** : `Inter` / `Source Sans 3` (clarté clinique et lisibilité optimale sur petits écrans).

---

## 4. Composants & Spécifications Ghost-Glass

### 4.1 Cartes Premium (`.card-premium`)

```tsx
<div className="card-premium p-8">
  <h3 className="text-foreground font-bold">Titre du service</h3>
  <p className="text-muted-foreground">Description détaillée...</p>
</div>
```

- Fond blanc opaque à 98% avec flou d'arrière-plan de 20px.
- Réflexion spéculaire haute : `inset 0 1px 0 0 rgba(255, 255, 255, 0.9)`.
- Élévation dynamique au survol : `-5px` avec courbe `cubic-bezier(0.16, 1, 0.3, 1)`.

### 4.2 Bouton d'Action Principal (`.btn-premium`)

```tsx
<button className="btn-premium">Prendre rendez-vous en ligne</button>
```

- Gradient prune haute intensité avec réflexion de lumière et feedback haptique au toucher.

---

## 5. Gardien Automatisé du Design System

Le script [`scripts/design-system-guard.mjs`](file:///c:/Users/Julien/Documents/audreycastets64/audreycastets64/scripts/design-system-guard.mjs) inspecte l'intégralité du code à chaque build pour garantir :

1. **0 classe arbitraire** `rounded-[...]`.
2. **0 couleur hexadécimale brute** en dehors du fichier de tokens `globals.css`.
3. **100% de conformité** avec le design token Tailwind v4.
