# First Minds — Design System Master Tokens

This file contains the definitive design tokens for the First Minds V1 website. 
First Minds is ONE company with two divisions: Technology and Construction.

## Core Color Palette
- **Primary (Navy):** `#0F1B2E`
- **Corporate White:** `#FFFFFF`
- **Light Grey:** `#E6E9ED`
- **Dark Grey:** `#5E6572`

## Division Accents
- **Technology Accent:** `#0A66C2`
- **Construction Accent:** `#F5A623`

*Note: Blue and Gold are accents only — used for icons, links, small highlights, borders, and hover states. They are never used as large saturated section backgrounds.*

## Typography
- **Heading Font:** `Space Grotesk` (or `Manrope`)
- **Body Font:** `Inter`

## Spacing Scale
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 1rem (16px)
- `--space-4`: 1.5rem (24px)
- `--space-5`: 2rem (32px)
- `--space-6`: 3rem (48px)
- `--space-8`: 4rem (64px)
- `--space-10`: 6rem (96px)
- `--space-12`: 8rem (128px)

## Structural Attributes
- **Container Max-Width:** 1200px
- **Border Radius Scale:**
  - `--radius-sm`: 4px
  - `--radius-md`: 8px
  - `--radius-lg`: 12px
  - `--radius-xl`: 16px
  - `--radius-2xl`: 24px
  - `--radius-pill`: 9999px
- **Shadow Levels:**
  - `--shadow-sm`: `0 2px 8px rgba(15, 27, 46, 0.04)`
  - `--shadow-md`: `0 4px 16px rgba(15, 27, 46, 0.06)`
  - `--shadow-lg`: `0 12px 32px rgba(15, 27, 46, 0.08)`
- **Icon Size:** Standard inline size `18px`, display size `24px`-`48px`.

## Breakpoints
- `--bp-mobile`: 480px
- `--bp-tablet`: 768px
- `--bp-desktop`: 1024px
- `--bp-wide`: 1440px

## UI Components
- **Buttons:** 
  - `Primary`: Filled Navy
  - `Secondary`: Outlined Navy
  - Hover states utilize the division accent dynamically via `data-division` attributes.
- **Background Sections:** Alternating White (`#FFFFFF`) and Navy (`#0F1B2E`) for rhythm.
- **Textures:** Blueprint/Architectural linework is used as a subtle background texture exclusively on Navy sections.
