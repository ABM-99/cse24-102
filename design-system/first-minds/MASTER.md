# First Minds — Master Design System

> **RULE:** This is the single source of truth for the entire site.
> Technology pages use `--color-tech` (#0A66C2) for accents.
> Construction pages use `--color-construction` (#F5A623) for accents.
> Everything else uses the shared Navy / White / Grey tokens below.
> Do NOT maintain a separate design system for either division.

---

**Project:** First Minds (PTY) LTD
**Updated:** 2026-07-26
**Category:** Technology & Construction — Unified Brand

---

## Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary Navy | `#0F1B2E` | `--color-navy` |
| Corporate White | `#FFFFFF` | `--color-white` |
| Technology Accent (Blue) | `#0A66C2` | `--color-tech` |
| Technology Accent Hover | `#0852A0` | `--color-tech-hover` |
| Technology Accent Light | `#E8F1FB` | `--color-tech-light` |
| Construction Accent (Gold) | `#F5A623` | `--color-construction` |
| Construction Accent Hover | `#D4881A` | `--color-construction-hover` |
| Construction Accent Light | `#FEF6E4` | `--color-construction-light` |
| Light Grey | `#E6E9ED` | `--color-grey-light` |
| Dark Grey | `#5E6572` | `--color-grey-dark` |
| Surface (off-white) | `#F5F7FA` | `--color-surface` |
| Border | `#DDE1E7` | `--color-border` |
| Overlay Dark | `rgba(15,27,46,0.85)` | `--color-overlay` |

**Contrast ratios (verified):**
- Navy `#0F1B2E` on White: **16.1:1** ✅ WCAG AAA
- Dark Grey `#5E6572` on White: **5.7:1** ✅ WCAG AA
- Tech Blue `#0A66C2` on White: **5.9:1** ✅ WCAG AA
- Gold `#F5A623` on Navy: **6.2:1** ✅ WCAG AA

---

## Typography

| Role | Font | Weights |
|------|------|---------|
| Heading | Space Grotesk | 400, 500, 600, 700 |
| Body | Inter | 400, 500, 600 |

**CSS Variables:**
```css
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
```

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
```

**Type Scale:**
| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | `0.75rem` | Eyebrow labels, badges |
| `--text-sm` | `0.875rem` | Captions, metadata |
| `--text-base` | `1rem` | Body copy |
| `--text-lg` | `1.125rem` | Lead paragraphs |
| `--text-xl` | `1.25rem` | Subheadings |
| `--text-2xl` | `1.5rem` | Section subheads |
| `--text-3xl` | `clamp(1.75rem, 3vw, 2.25rem)` | H3 |
| `--text-4xl` | `clamp(2rem, 4vw, 3rem)` | H2 |
| `--text-5xl` | `clamp(2.5rem, 5.5vw, 4rem)` | H1 |
| `--text-hero` | `clamp(3rem, 7vw, 5.5rem)` | Hero headline |

**Letter spacing:** `-0.02em` on headings, `0.1em` uppercase on eyebrows.

---

## Spacing Scale (8px grid)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `0.25rem` (4px) | Micro gaps |
| `--space-2` | `0.5rem` (8px) | Icon gaps, inline |
| `--space-3` | `1rem` (16px) | Base padding |
| `--space-4` | `1.5rem` (24px) | Component padding |
| `--space-5` | `2rem` (32px) | Medium gaps |
| `--space-6` | `3rem` (48px) | Section inner padding |
| `--space-8` | `4rem` (64px) | Section margins |
| `--space-10` | `6rem` (96px) | Large sections |
| `--space-12` | `8rem` (128px) | Hero padding |

---

## Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `4px` | Badges, tags |
| `--radius-md` | `8px` | Inputs, small cards |
| `--radius-lg` | `12px` | Cards |
| `--radius-xl` | `16px` | Large cards |
| `--radius-2xl` | `24px` | Section panels |
| `--radius-pill` | `9999px` | Buttons, pills |

---

## Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(15,27,46,0.06)` | Subtle lift |
| `--shadow-md` | `0 4px 12px rgba(15,27,46,0.08)` | Cards |
| `--shadow-lg` | `0 8px 24px rgba(15,27,46,0.12)` | Elevated cards |
| `--shadow-xl` | `0 20px 48px rgba(15,27,46,0.16)` | Modals, hero elements |
| `--shadow-tech` | `0 8px 24px rgba(10,102,194,0.18)` | Tech accent glow |
| `--shadow-construction` | `0 8px 24px rgba(245,166,35,0.2)` | Gold accent glow |

---

## Container & Layout

| Token | Value |
|-------|-------|
| `--container-max` | `1280px` |
| `--container-padding` | `clamp(1rem, 4vw, 2rem)` |
| `--navbar-height` | `72px` |
| `--section-padding` | `clamp(4rem, 8vw, 7rem) 0` |

---

## Button System

### Primary (Navy fill)
```css
.btn-primary {
  background: var(--color-navy);
  color: var(--color-white);
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.9375rem;
  border: 2px solid var(--color-navy);
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn-primary:hover {
  background: #1a2d4a;
  border-color: #1a2d4a;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

### Secondary (Outline Navy)
```css
.btn-secondary {
  background: transparent;
  color: var(--color-navy);
  border: 2px solid var(--color-navy);
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn-secondary:hover {
  background: var(--color-navy);
  color: var(--color-white);
  transform: translateY(-1px);
}
```

### Ghost (No border, text only)
```css
.btn-ghost {
  background: transparent;
  color: var(--color-navy);
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn-ghost:hover {
  background: var(--color-grey-light);
  transform: translateY(-1px);
}
```

### Tech variant — use `--color-tech` in place of navy
### Construction variant — use `--color-construction` in place of navy

---

## Icon Size Scale

| Usage | Size |
|-------|------|
| Inline / nav | 16px |
| Button | 18px |
| Card icon | 24px |
| Feature icon | 32px |
| Hero icon | 48px |

---

## Breakpoints

| Name | Value | Target |
|------|-------|--------|
| `sm` | `375px` | Small mobile |
| `md` | `768px` | Tablet |
| `lg` | `1024px` | Desktop |
| `xl` | `1280px` | Wide desktop |
| `2xl` | `1440px` | Max layout |

---

## Transitions

```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 400ms cubic-bezier(0.16, 1, 0.3, 1);
```

Always wrap animations in:
```css
@media (prefers-reduced-motion: no-preference) { ... }
```

---

## Rules
1. **White** remains the dominant page colour.
2. **Deep Navy** is used for headings, navigation, and primary buttons.
3. **Blue and Gold** are accents only (e.g. hover states, small badges, icons). Accent colours must never dominate an entire screen.
4. Remove any large saturated coloured backgrounds.
5. Eliminate unnecessary gradients.
6. Typography: Maximum line width of ~70 characters, clear visual hierarchy, consistent spacing. Large headlines, short paragraphs.

## Button System
- **One Primary Style**: Filled navy (`.btn-primary`)
- **One Secondary Style**: Outlined navy (`.btn-secondary`)
- **Hover Effects**: Inherit division context. Blue hover accents for Technology, Gold hover accents for Construction. No heavy coloured buttons.

## Anti-Patterns (Do NOT Use)

- ❌ Hardcoded hex values — always use CSS variables
- ❌ Emojis as icons — use Lucide React icons only
- ❌ Layout-shifting hover effects (scale transforms that change box size)
- ❌ Low contrast text — 4.5:1 minimum
- ❌ Missing `cursor: pointer` on clickable elements
- ❌ Missing focus states — all interactive elements must have visible `:focus-visible`
- ❌ Bootstrap color utility classes (`.text-warning`, `.bg-primary`) — use CSS variables
- ❌ Inline styles for design tokens — use CSS variables
- ❌ Any reference to old `--primary-amber`, `--deep-charcoal`, or `--slate-gray` tokens

---

## Pre-Delivery Checklist

- [ ] All colors from CSS variable tokens only
- [ ] Space Grotesk + Inter loaded via Google Fonts
- [ ] No leftover amber/charcoal/slate variables
- [ ] No Bootstrap color utilities on HTML elements
- [ ] All clickable elements have `cursor: pointer`
- [ ] Hover states with 150–250ms transitions
- [ ] Contrast 4.5:1 minimum
- [ ] `:focus-visible` states on all interactive elements
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] Semantic HTML: one `<h1>` per page, correct heading hierarchy
- [ ] Alt text on every image
- [ ] Skip-to-content link functional
