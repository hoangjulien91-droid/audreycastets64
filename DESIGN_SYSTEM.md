# 🎨 Design System — Audrey Castets S-Tier

## 1. Philosophie & Principes

Le design system repose sur l'esthétique **Ghost-Glass** et les standards de clarté, de douceur et de rigueur médicale propres à la psychologie du travail et à l'accompagnement RH.

- **SSOT (Single Source of Truth)** : Toutes les classes dérivent des tokens sémantiques CSS et de Tailwind v4.
- **Accessibilité (A11y)** : Conforme WCAG 2.1 AA (contraste minimal de 4.5:1 sur le texte, focus visible, navigation clavier).
- **Zéro Code Couleur Brut** : Interdiction des codes hexadécimaux et des couleurs brutes non tokenisées dans les composants métier.

---

## 2. Palette Colorimétrique & Tokens

### 2.1 Couleurs Sémantiques

- `--background` : Fond principal doux et apaisant.
- `--foreground` : Texte principal avec contraste élevé.
- `--primary` / `--primary-foreground` : Couleur d'accentuation et de call-to-action.
- `--muted` / `--muted-foreground` : Surfaces secondaires et textes d'explication.
- `--card` / `--card-foreground` : Surfaces de cartes avec translucidité Ghost-Glass.
- `--border` : Liserés et séparateurs discrets (`border-white/10` ou `border-primary/10`).

### 2.2 Règles d'Usage

```tsx
// ✅ RECOMMANDÉ : Utilisation des tokens sémantiques
<div className="bg-card text-card-foreground border border-border/10 rounded-2xl p-6 backdrop-blur-md shadow-sm">
  <h3 className="text-foreground font-semibold">Titre de section</h3>
  <p className="text-muted-foreground">Description du service...</p>
</div>

// ❌ INTERDIT : Valeurs brutes ou hexadécimales hardcodées
<div className="bg-[#f8fafc] text-[#0f172a] border border-[#e2e8f0] rounded-[24px]">
```

---

## 3. Typographie

- **Police Principale** : Sans-serif géométrique lisible (Inter / Geist).
- **Hiérarchie** :
  - **H1 (Hero)** : `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight`
  - **H2 (Section Header)** : `text-3xl sm:text-4xl font-bold`
  - **H3 (Card / Subsection)** : `text-xl sm:text-2xl font-semibold`
  - **Body** : `text-base sm:text-lg leading-relaxed text-muted-foreground`

---

## 4. Animations & Micro-interactions

- **Entrée de page** : Classes CSS `.animate-in` avec delays échelonnés.
- **Survol de cartes** : Élévation discrète (`transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`).
- **Haptique Mobile** : Utilisation du hook `useHaptics()` sur les interactions critiques (boutons de prise de rendez-vous).

---

## 5. Gardien Automatisé

Le script `scripts/design-system-guard.mjs` vérifie automatiquement à chaque commit :

- L'absence de rayons de bordure arbitraires `rounded-[...]`.
- La conformité des tokens de style.
