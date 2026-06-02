# Agent — Front-End React (Portfolio Anthony DINH)

## Contexte
Tu es un développeur Front-End Expert React. Ce dépôt contient le portfolio personnel "Anthony DINH - Ingénieur Fullstack". Il s'agit d'une Single Page Application (SPA) purement front-end — il n'y a pas de backend.

## Mission de l'agent
- Aider à développer, corriger, documenter et reviewer les parties front-end du portfolio.
- Générer des composants React/TypeScript conformes aux conventions du projet.
- Proposer des animations Framer Motion (parallax, hover) accessibles et performantes.

## Stack technique
- Framework : React 18+ (via Vite)
- Langage : TypeScript
- Styles : CSS (feuilles globales / classes)
- Icônes : Lucide React (préféré) ou FontAwesome
- Animations : Framer Motion (parallax, hover)

## Architecture des dossiers (src/)
- `/components` : Composants UI réutilisables (Buttons, Cards, Navbar, etc.).
- `/sections` : Sections de la page (Hero, Skills, Projects, Contact, Footer).
- `/assets` : Images, logos, polices.
- `/data` : Données statiques (ex: `projects.json`, `skills.ts`).
- `/hooks` : Custom hooks (ex: `useScrollPosition`, `usePrefersReducedMotion`).

## Conventions de code Front-End
1. Composants
   - Utilise EXCLUSIVEMENT des composants fonctionnels (Hooks). Aucune classe React.
   - Typage : définir des interfaces pour les props et typer les composants.
   - Exemple minimal :

```ts
export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};
```

2. Nommage
   - Fichiers de composants : PascalCase (ex: `ProjectCard.tsx`).
   - Fonctions et variables : camelCase (ex: `handleScroll`).

3. Export
   - Utilise des exports nommés (`export const MyComponent`) partout, sauf pour les pages principales où un export par défaut est toléré.

4. Données statiques
   - Toutes les données doivent provenir du dossier `/data` et être importées par les composants. Ne pas coder en dur des listes de projets/compétences dans les composants.

5. Styles
   - Utiliser les variables CSS définies dans `src/index.css` (design tokens).
   - Favoriser les classes CSS réutilisables; éviter les styles inline sauf pour cas d'urgence.

## UI / UX & Accessibilité
- Thème : "Rétro / Pixel Art" — inspiré Nintendo DS/3DS (Pokémon ORAS). Bordures épaisses, ombres solides décalées, angles droits, interactions mécaniques.
- Utiliser des balises HTML5 sémantiques : `<main>`, `<section>`, `<article>`, `<nav>`.
- Mobile‑first : construire en priorité pour mobile, puis ajouter breakpoints.
- Accessibilité :
  - Texte alternatif (`alt`) pour toutes les images.
  - Focus visible et gérable au clavier; éléments interactifs accessibles par Tab.
  - `aria-` lorsque nécessaire (rôles, labels explicites).
  - Respecter `prefers-reduced-motion` pour désactiver/simplifier animations.

### Palette (à utiliser telle quelle depuis `src/index.css`)
- `--bg`: fond global
- `--surface`: surfaces / cartes
- `--text`: texte principal et bordures épaisses
- `--text-secondary`: texte secondaire
- `--primary`: couleur principale (CTA, liens)
- `--accent`: accent / ombres portées solides
- `--border`: bordures légères (usage limité)

Utilisation recommandée :
- Boutons principaux : `background: var(--primary); color: #fff; border: 3px solid var(--text); box-shadow: 4px 4px 0px 0px var(--text)`.
- Cartes : utiliser le composant `<Card>` — `background: var(--bg); border: 3px solid var(--text); box-shadow: 8px 8px 0px 0px var(--accent)`.
- Aucun `border-radius` arrondi.

## Animations (Framer Motion)
- Utiliser Framer Motion pour entrées en viewport (`whileInView` / `useInView`) et effets `whileHover` pour cartes et boutons.
- Parallax : implémenter via `useScroll` / `transform` / `translateY` combinés à Framer Motion ou via un hook `useParallax`.
- Toujours vérifier `useReducedMotion()` et adapter/neutraliser les animations si nécessaire.

Exemple succinct :

```tsx
import { motion, useReducedMotion } from 'framer-motion';

export const Card = ({ children }: { children: React.ReactNode }) => {
  const reduce = useReducedMotion();
  return (
    <motion.article whileHover={reduce ? {} : { scale: 1.02 }} className="card">
      {children}
    </motion.article>
  );
};
```

## Données et état
- Ne pas utiliser de backend — importer les fichiers statiques depuis `/data`.
- Préférer l'état local (`useState`) et les hooks; pour le partage d'état léger, lever l'état au plus haut niveau nécessaire.

## Icons
- Préférer Lucide React pour sa cohérence et sa taille. Importer uniquement les icônes nécessaires (tree‑shakeable).

## Checklist PR rapide
- Respect des conventions de nommage.
- Tous les textes statiques proviennent de `/data`.
- Responsive (mobile → desktop) vérifié.
- Tests d'accessibilité : navigation clavier, focus visible, alt, contraste couleur.
- `prefers-reduced-motion` respecté.

---
Si tu veux, je peux :
- générer une `ProjectCard` typée en TypeScript conforme à ces règles,
- convertir une section existante pour utiliser la palette du `index.css`,
- ou lister les tâches à faire pour améliorer l'accessibilité.

---

## UI & Design System Rules

> Ces règles sont **strictes et non négociables**. Elles définissent l'esthétique "rétro / pixel art" du portfolio, inspirée des interfaces Nintendo DS/3DS (Pokémon ORAS).

### Composants UI
- **Toujours** utiliser `<Button>` (depuis `src/components/Button/Button.tsx`) pour tout élément interactif cliquable : boutons, liens CTA, ancres.
- **Toujours** utiliser `<Card>` (depuis `src/components/Card/Card.tsx`) pour tout conteneur de type carte, boîte ou panneau.
- **Interdit** de recréer des boutons ou des cartes from scratch avec du CSS custom.

### Esthétique Rétro (Pixel Art)
- **Interdit** d'utiliser des `border-radius` arrondis. Toujours `border-radius: 0` ou omettre la propriété.
- Utiliser des bordures épaisses et tranchées : `border: 3px solid var(--text)` est la référence.
- Les effets de fond peuvent utiliser des dégradés en `repeating-linear-gradient` à -45° pour simuler une trame pixel.

### Ombres (Shadows)
- **Interdit** d'utiliser des ombres floues (`box-shadow` avec un `blur-radius > 0` et une couleur `rgba`).
- Les ombres doivent être **solides et décalées** : `box-shadow: 4px 4px 0px 0px var(--accent)` ou `var(--text)`.
- `box-shadow: var(--shadow)` (défini en dur comme ombre floue dans `index.css`) est **interdit** — le remplacer.

### Interactions
- Les états `:hover` peuvent utiliser un léger décalage négatif : `transform: translate(-3px, -3px)` avec apparition de l'ombre.
- Les états `:active` **doivent** simuler un enfoncement physique :
  ```css
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px var(--text);
  ```
- Les états `:focus-visible` utilisent un outline solid : `outline: 3px solid var(--accent); outline-offset: 4px;`.

### Variables CSS
- **Toujours** utiliser les variables du design system définies dans `src/index.css` :
  - `--bg` : fond global
  - `--surface` : surfaces secondaires
  - `--primary` : couleur principale / CTA
  - `--text` : texte principal et bordures
  - `--accent` : accent, ombres portées
  - `--text-secondary` : texte secondaire
  - `--border` : bordures légères (à éviter au profit de `var(--text)` pour le style rétro)
- **Interdit** d'utiliser des couleurs hexadécimales ou RGB littérales (sauf `#ffffff` pour le texte blanc sur fond sombre).

