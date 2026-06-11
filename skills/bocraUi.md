---
name: bocra-frontend
description: Premium front-end design system and component library extracted from the BOCRA Connect government portal. Covers floating pill navbar, page loader, hero sections, footer, cards, modals, badges, buttons, inputs, toasts, chatbot bubble, auth flows, glassmorphism, scroll-aware animations, and the full color/typography system. Use this skill to replicate or adapt the same premium look-and-feel in any new React + Vite project.
---

# BOCRA Connect — Front-End Design System Skill

> **Purpose**: This skill captures every front-end pattern, component, design token, animation, and architectural decision from the BOCRA Connect project so you never have to redo it. When building a new project, follow this skill to instantly replicate the same premium government-portal aesthetic.

---

## 1. Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | **React 19** + **Vite 8** | `type: "module"`, JSX |
| Routing | **react-router-dom v7** | Lazy-loaded pages with `Suspense` |
| Icons | **lucide-react** | Tree-shakeable, consistent 24px grid |
| Charts | **chart.js** + **react-chartjs-2** | For QoS dashboards |
| Maps | **leaflet** + **react-leaflet** | Coverage maps |
| Forms | **react-hook-form** | Complex multi-step forms |
| Styling | **Inline JSX styles** (primary) + **CSS-in-JSX `<style>` blocks** (for hover/media queries) + minimal Tailwind base reset |
| Fonts | **Google Fonts** via `<link>` in `index.html` |
| Build | Vite with `@vitejs/plugin-react` |

### Key Dependencies
```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-router-dom": "^7.13.1",
  "lucide-react": "^0.577.0",
  "chart.js": "^4.5.1",
  "react-chartjs-2": "^5.3.1",
  "leaflet": "^1.9.4",
  "react-leaflet": "^5.0.0",
  "react-hook-form": "^7.71.2",
  "axios": "^1.13.6"
}
```

---

## 2. Design Tokens & Color System

### 2.1 Brand Colors
```
Primary Navy:     #1A3A6B   — Main brand, nav links, CTAs, profile avatar bg
Accent Blue:      #2E5FA3   — Secondary accents
Light Blue:       #D6E4F7   — Pill backgrounds, hover states, icon bg
Teal:             #0F6E56   — Success actions, secondary CTAs, timeline done state
Deep Black:       #050505   — CTA buttons ("File Complaint"), nav CTA
Near Black:       #0b1f3a   — Headings, text emphasis
```

### 2.2 Neutral Palette
```
#111827  — Primary text, headings
#0f172a  — Darkest text (card titles)
#1e293b  — Secondary dark text
#334155  — Form labels
#374151  — Muted headings
#475569  — Chip/meta text
#4b5563  — Modal body text
#64748b  — Descriptions, subtitles
#6b7280  — Secondary body text
#94a3b8  — Placeholders, kicker text
#9ca3af  — Light labels, loading text
#cbd5e1  — Hover borders
#d1d5db  — Default borders (light)
#d8e0ea  — Input borders
#e2e8f0  — Card borders, dividers
#e5e7eb  — Section dividers
#f1f5f9  — Light backgrounds, hover fills
#f3f4f6  — Image placeholder bg
#f8f9fa  — Icon box bg
#f8fafc  — Page background, chip bg
#fbfdff  — Input background
#ffffff  — Card bg, modal bg
```

### 2.3 Semantic Colors
```
Success:   bg #f0fdf4, text #166534, border #bbf7d0
Warning:   bg #fefce8, text #854d0e, border #fef08a
Info:      bg #eff6ff, text #1e40af, border #bfdbfe
Error:     bg #fef2f2, text #991b1b, border #fecaca
Danger:    bg #dc2626 (buttons), text #dc2626 (logout)
Closed:    bg #f9fafb, text #374151, border #e5e7eb
```

### 2.4 PageLoader Dot Colors (Brand Identity Animation)
```
Red:       #E63946
Amber:     #F4A261
Teal:      #2A9D8F
Navy:      #1A3A6B
```

### 2.5 Hero Sector Dot Colors
```
Telecom:   #3498db (blue)
Broadcast: #2ecc71 (green)
Postal:    #e74c3c (red)
Internet:  #f39c12 (amber)
```

### 2.6 Footer Background
```css
background: radial-gradient(circle at top left, rgba(20,77,116,0.55), transparent 34%),
            linear-gradient(180deg, #0b1016 0%, #05080c 100%);
```

---

## 3. Typography System

### 3.1 Font Stack
```html
<!-- index.html preconnect + load -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

Also loaded via CSS `@import` in Navbar:
```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
```

### 3.2 Font Usage Rules
| Usage | Font Family | Weight | Size |
|-------|------------|--------|------|
| **Hero h1** | Plus Jakarta Sans | 800 | `clamp(2.6rem, 5vw, 4.5rem)` |
| **Section h2** | Plus Jakarta Sans | 800 | `clamp(32px, 4vw, 52px)` |
| **Card titles** | Plus Jakarta Sans | 700 | 16–20px |
| **Stat numbers** | Plus Jakarta Sans | 800 | `clamp(48px, 6vw, 72px)` |
| **Body text** | Inter | 400 | 14–18px |
| **Labels** | Inter | 500–700 | 12–14px |
| **Kicker/eyebrow** | Inter | 600–700 | 11–12px, `uppercase`, `letter-spacing: 0.08–0.14em` |
| **Nav links** | DM Sans | 500 | 13px |
| **Footer tagline** | Syne | 700 | 28px |
| **Nav CTA** | DM Sans | 600 | 12–14px |
| **Loader brand name** | Plus Jakarta Sans | 800 | 28px, `letter-spacing: -0.03em` |

### 3.3 Letter Spacing Conventions
```
Headings:     -0.025em to -0.05em (tight)
Eyebrows:     0.08em to 0.14em (wide, uppercase)
Nav links:    0.01em
CTA buttons:  0.01em
```

---

## 4. Component Library

### 4.1 Navbar (Floating Pill Nav)
**Pattern**: Fixed position, centered, pill-shaped with glassmorphism. Scroll-aware transparency.

**Key Features**:
- Floats at `top: 22px` (rests) → `top: 14px` (scrolled)
- `borderRadius: 999` (full pill on desktop), `28` on mobile
- `backdropFilter: blur(18px) saturate(180%)`
- Background alpha fades from 1.0 → 0.22 as user scrolls (first 180px)
- Shadow intensifies on scroll
- Dropdown menus animate with `dropIn` keyframe
- Mobile hamburger with slide-down menu
- Language switcher (EN/TN toggle)
- Search button (circular, `#eef2f7` bg)
- CTA button: `#050505` bg, `999` border-radius, hover lifts `-1px`
- Profile avatar with initials (logged in) or guest icon
- Profile dropdown: `borderRadius: 20`, `boxShadow: 0 16px 48px rgba(0,0,0,0.12)`

**Scroll Progress Calculation**:
```js
const navBackgroundAlpha = 1 - scrollProgress * 0.78;
const navBorderAlpha = 0.07 - scrollProgress * 0.03;
const navShadowAlpha = 0.09 - scrollProgress * 0.04;
```

**Breakpoint**: `1024px` for mobile/desktop switch.

---

### 4.2 PageLoader (Full-Screen Brand Loader)
**Pattern**: Full-screen white overlay with branded dot animation + progress bar.

**Features**:
- 4 colored dots (`#E63946`, `#F4A261`, `#2A9D8F`, `#1A3A6B`) animate in with `dotReveal` keyframe (staggered 120ms)
- Brand name "BOCRA" fades in at 500ms, "Connect" at 700ms
- Progress bar: thin (120px × 2px), gradient fill matching dot colors
- Timer logic: min 1800ms (initial) / 500ms (subsequent), waits for images, 6s safety timeout
- Fade-out transition: `opacity 0.4s ease`

**Progress Ramp**:
```
0ms    → 0%
100ms  → 30%
800ms  → 60% + "Almost ready..."
Done   → 100% + "Done."
```

---

### 4.3 Footer
**Pattern**: Dark gradient footer with large logo watermark.

**Styling**:
```js
background: 'radial-gradient(circle at top left, rgba(20,77,116,0.55), transparent 34%), linear-gradient(180deg, #0b1016 0%, #05080c 100%)'
borderTop: '1px solid rgba(255,255,255,0.08)'
boxShadow: '0 -24px 60px rgba(2,6,23,0.45)'
```

**Structure**:
1. Thin gradient fade bar at top (18px)
2. Grid: Brand column (tagline + address) + Services links + Organisation links
3. Trust badges row (SSL, DPA, WCAG, ISO, Verified) — pill-shaped, `rgba(255,255,255,0.08)` bg
4. Legal links row
5. Copyright + tagline
6. Giant logo watermark: `filter: grayscale(1) brightness(2.2)`, `opacity: 0.9`, `width: min(860px, 96vw)`

**Link Style**: `color: rgba(255,255,255,0.68)`, `fontSize: 14`, no decoration, `lineHeight: 1.8`

---

### 4.4 Button Component
**Variants**:
```js
primary:   { background: '#1A3A6B', color: 'white' }
secondary: { background: '#D6E4F7', color: '#1A3A6B' }
ghost:     { background: 'transparent', color: '#1A3A6B', border: '1px solid #1A3A6B' }
danger:    { background: '#dc2626', color: 'white' }
teal:      { background: '#0F6E56', color: 'white' }
```

**Sizes**: `sm: 6px 12px`, `md: 10px 20px`, `lg: 14px 28px`
**Font sizes**: `sm: 12`, `md: 14`, `lg: 16`
**Props**: `variant`, `size`, `loading` (shows Loader2 spinner), `disabled`, `fullWidth`, `icon`
**Style**: `borderRadius: 10`, `fontWeight: 600`, loading spinner uses `@keyframes spin`

---

### 4.5 Card Component
**Base**: `background: white`, `borderRadius: 16`, `border: 1px solid #e2e8f0`
**Hover** (optional): `boxShadow: 0 4px 12px rgba(0,0,0,0.08)`, border darkens to `#cbd5e1`
**Sub-components**: `Card.Header`, `Card.Body`, `Card.Footer` — all `padding: 16px 24px`, separated by `#f1f5f9` borders

---

### 4.6 Badge Component
**Status → Color mappings**:
```
active/approved/resolved → green: bg #f0fdf4, text #166534, border #bbf7d0
pending                  → amber: bg #fefce8, text #854d0e, border #fef08a
under_review/received/open → blue: bg #eff6ff, text #1e40af, border #bfdbfe
rejected                 → red:   bg #fef2f2, text #991b1b, border #fecaca
closed/draft             → gray:  bg #f9fafb, text #374151, border #e5e7eb
```
**Style**: `borderRadius: 20`, `padding: 2px 10px`, `fontSize: 12`, `fontWeight: 500`

---

### 4.7 Input Component
- Label: `fontSize: 14`, `fontWeight: 500`, `color: #374151`
- Input: `border: 1px solid #d1d5db`, `borderRadius: 8`, `padding: 10px 12px`
- Focus: `borderColor: #1A3A6B`, `boxShadow: 0 0 0 2px #D6E4F7`
- Error: `borderColor: #f87171`, error message: `fontSize: 12`, `color: #dc2626`
- Icon support: absolute positioned left, input gets `paddingLeft: 34px`

---

### 4.8 Modal Component
- Backdrop: `rgba(0,0,0,0.4)`, click to close
- Container: `borderRadius: 16`, `boxShadow: 0 20px 60px rgba(0,0,0,0.15)`
- Header: flex row with title + X close button, bottom border `#f1f5f9`
- Sizes: `sm: 440px`, `md: 540px`, `lg: 720px`, `xl: 960px`

---

### 4.9 GuestAuthModal
**Pattern**: Branded authentication gate with glassmorphism backdrop.

- Backdrop: `rgba(5,8,22,0.65)`, `backdropFilter: blur(8px)`
- Card: `borderRadius: 24`, `boxShadow: 0 24px 64px rgba(0,0,0,0.2)`
- Animation: `scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)` — scale from 0.95 + translateY(10px)
- Logo in rounded box: 80×80, `borderRadius: 24`, subtle border + shadow
- CTA button: `#1A3A6B`, `borderRadius: 16`, hover lifts 2px + deepens shadow
- Secondary button: `#f8fafc` bg, `#e2e8f0` border, `#64748b` text

---

### 4.10 KPICard
- Icon box: colored bg (translucent) + matching icon color
- Color presets: `blue`, `teal`, `amber`, `red`
- Value: `fontSize: 32`, `fontWeight: 700`
- Change indicator: green for positive, red for negative

---

### 4.11 Spinner
- `border: 3px solid #e2e8f0`, `borderTopColor: #1A3A6B`, `borderRadius: 50%`
- `animation: spin 0.8s linear infinite`
- Sizes: `sm: 16px`, `md: 32px`, `lg: 48px`

---

### 4.12 StatusTimeline
- Vertical timeline with connected dots
- Done state: `#0F6E56` bg with Check icon
- Pending state: `#e5e7eb` bg with step number
- Connector line: 2px wide, color matches done/pending state

---

### 4.13 Breadcrumb
- Flex row, `gap: 4`, `fontSize: 14`, `color: #6b7280`
- Separator: `ChevronRight` icon at 14px, `color: #d1d5db`
- Active (last item): `color: #111827`, `fontWeight: 500`

---

### 4.14 EmptyState
- Centered layout, `padding: 64px 24px`
- Icon box: `#f1f5f9` bg, `borderRadius: 16`, `Inbox` icon at `#94a3b8`
- Title: `fontWeight: 600`, `color: #374151`
- Description: `fontSize: 14`, `color: #9ca3af`, `maxWidth: 280`

---

### 4.15 Toast Notifications
- Fixed top-right, `zIndex: 9999`, stacked with `gap: 8`
- Auto-dismiss after 4 seconds
- Colored by type: success/error/info (same semantic colors as Badge)
- `borderRadius: 12`, `padding: 10px 16px`, `fontSize: 13`, `fontWeight: 500`
- `boxShadow: 0 2px 8px rgba(0,0,0,0.1)`

---

### 4.16 PageWrapper (Layout Shell)
**Pattern**: Full-page flex column layout with Navbar + main + Footer.

```jsx
<div style={{
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: '#f8fafc',
  width: '100%',
  overflowX: 'hidden',
}}>
  <Navbar />
  <main style={{ flex: 1, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '40px 24px' }}>
    {children}
  </main>
  <Footer />
</div>
```

**Props**: `fullWidth` (removes maxWidth constraint), `hideChat`, `wrapperStyle` overrides

---

### 4.17 HeroImagePanel
**Pattern**: Rounded image panel with overlay gradients and floating pills.

- `borderRadius: 28`, `overflow: hidden`
- Three overlay layers: tinted gradient, image cover, radial glow (screen blend)
- Bottom pills: `borderRadius: 999`, glass effect (`rgba(3,7,18,0.62)` bg, `backdropFilter: blur(10px)`)
- Three theme variants: `light`, `dark`, `navy`

---

### 4.18 PlaceholderHeroPage
**Pattern**: Split-grid hero with text left + HeroImagePanel right.

- Eyebrow pill: `#D6E4F7` bg, `#1A3A6B` text, `borderRadius: 999`, uppercase
- Title: `clamp(2.6rem, 5vw, 4.5rem)`, `fontWeight: 800`, `letterSpacing: -0.05em`
- Description: `#6b7280`, `fontSize: 18`, `lineHeight: 1.75`
- Two CTA buttons: primary (dark, `#111111`) + ghost (border only, `#1A3A6B`)

---

### 4.19 GovTaskbar (Services Overlay)
**Pattern**: Full-screen services directory with giant search input.

- Trigger: Fixed circular button top-right (`44×44`, `borderRadius: 50%`)
- Overlay: `rgba(255,255,255,0.98)`, `animation: slideDown 0.8s cubic-bezier(0.22,1,0.36,1)`
- Giant search: `fontSize: 28`, centered, bottom border only, focus color `#0f766e`
- Service cards: `borderRadius: 20`, `padding: 24`, hover lift (`translateY(-6px)`)
- Close button: `54×54`, rotates 90° on hover

---

### 4.20 ChatBubble (AI Chatbot)
**Pattern**: Fixed bottom-right floating chat widget with full conversation UI.

**Key UI**:
- Bubble trigger: Circular with bot avatar, hint tooltip on scroll trigger
- Chat window: `width: 320px`, `borderRadius: 20`, dark theme (`#0b0d12`)
- Header: `#050505`, logo + title
- Messages: bot bubbles `#1a1d24`, user bubbles `#1A3A6B`
- Rich messages: sections, source citations, action buttons, complaint drafts
- Input: bottom-pinned with send button
- Animation: `bubbleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)`

---

## 5. Page Layout Patterns

### 5.1 HomePage Hero
- Full-viewport background image with dark overlay (`rgba(0,0,0,0.45)`)
- Scroll-driven morph: width/height shrink, borderRadius grows to circle
- Sector list: vertical stack with colored dots, border-top dividers, hover bg highlight
- Responsive: smaller text + padding on mobile

### 5.2 Login Page
- Two-column grid: left = hero copy panel (dark gradient over image), right = sticky form card
- Hero copy: glassmorphism feature panel with icon rows
- Form card: `borderRadius: 30`, `backdrop-filter: blur(14px)`, sticky at `top: 132px`
- Submit button: gradient `linear-gradient(135deg, #0f172a 0%, #1a3a6b 100%)`, deep shadow
- Trust badge: lock emoji + SSL/DPA text

### 5.3 Content Pages
- `PageWrapper` with `fullWidth` for hero sections
- Section pattern: `padding: 80px 0`, `maxWidth: 1280`, `margin: 0 auto`, `padding: 0 24px`
- Section label/kicker: `fontSize: 12`, uppercase, `letterSpacing: 0.14em`, `color: #94a3b8`

### 5.4 Stats Section
- Background image with overlay
- 4-column flex row, dividers between columns
- Animated count-up using `requestAnimationFrame` + `easeOutCubic`
- `IntersectionObserver` triggers animation when 35% visible

### 5.5 Services Grid
- Two-column grid layout
- Each service: icon box (44×44, `borderRadius: 10`) + title + description + arrow
- Hover: icon bg changes to `#D6E4F7`, title color changes to `#1A3A6B`, arrow slides right

### 5.6 News Cards
- 3-column grid
- Accent color bar at top (6px height)
- Image section (180px height)
- Category pill + title + date + "Read more" with arrow

---

## 6. Animation Library

### 6.1 Keyframe Animations
```css
/* Dot reveal (PageLoader) */
@keyframes dotReveal {
  from { opacity: 0; transform: translateY(12px) scale(0.6); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Generic fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Spinner */
@keyframes spin { to { transform: rotate(360deg); } }

/* Dropdown menus */
@keyframes dropIn {
  from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* Mobile nav dropdown */
@keyframes mobileNavDropIn {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* GovTaskbar overlay */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Auth modal */
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* Chat bubble */
@keyframes bubbleIn {
  from { opacity: 0; transform: scale(0.9) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
```

### 6.2 Transition Patterns
```
Standard:        transition: all 0.2s ease
Nav background:  transition: background 0.3s ease, box-shadow 0.3s ease
Hover lift:      transform: translateY(-1px) to translateY(-6px)
Premium easing:  cubic-bezier(0.16, 1, 0.3, 1)  — spring-like
Smooth easing:   cubic-bezier(0.22, 1, 0.36, 1)  — overlay slides
Link hover:      0.18s for nav items, 0.15s for dropdown items
```

### 6.3 Scroll-Driven Effects
- **Navbar**: opacity/shadow/position changes based on `window.scrollY / 180`
- **Hero morph**: width/height/borderRadius morph based on `window.scrollY / 600`
- **Stats count-up**: `IntersectionObserver` triggers `requestAnimationFrame` counter
- **Chat hint**: `IntersectionObserver` on stats section shows chatbot hint

---

## 7. Responsive Breakpoints

```
≤ 480px  — Tighter padding (12px)
≤ 640px  — Mobile hero text, smaller step numbers
≤ 768px  — Container padding reduces to 16px
≤ 960px  — Stats grid 2-col, services/news single column, steps vertical
≤ 1024px — Navbar switches to mobile mode (hamburger)
≤ 1080px — Login page goes single column
```

**Max content width**: `1280px` everywhere.

---

## 8. Architecture Patterns

### 8.1 Context Providers (wrap order)
```jsx
<BrowserRouter>
  <AuthProvider>
    <ApplicationProvider>
      <ComplaintProvider>
        <LanguageProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </LanguageProvider>
      </ComplaintProvider>
    </ApplicationProvider>
  </AuthProvider>
</BrowserRouter>
```

### 8.2 Auth Pattern
- `AuthContext` stores user in `localStorage` with key `bocra_user`
- `requireAuth(targetUrl)` checks login → if not, opens `GuestAuthModal` with redirect
- `ProtectedRoute` wraps `<Outlet>`, redirects on auth failure
- Login accepts any email/password (demo mode) or provides "Skip to Demo Mode"

### 8.3 Lazy Loading
All page components loaded with `React.lazy()` + `<Suspense fallback={<Spinner />}>`.

### 8.4 Hooks Pattern
Simple context accessor hooks:
```js
export const useAuth = () => useContext(AuthContext)
export const useLanguage = () => useContext(LanguageContext)
export const useToast = () => useContext(ToastContext)
```

### 8.5 Barrel Exports
```js
// components/shared/index.js
export { default as PageWrapper } from './PageWrapper'
export { default as Navbar } from './Navbar'
export { default as Footer } from './Footer'
export { default as Button } from './Button'
export { default as Badge } from './Badge'
export { default as Card } from './Card'
export { default as KPICard } from './KPICard'
export { default as Input } from './Input'
export { default as Spinner } from './Spinner'
export { default as EmptyState } from './EmptyState'
export { default as StatusTimeline } from './StatusTimeline'
export { default as Breadcrumb } from './Breadcrumb'
export { default as Modal } from './Modal'
export { default as ProtectedRoute } from './ProtectedRoute'
```

### 8.6 Utility Functions
```js
// formatDate.js
export const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-BW', { day:'numeric', month:'short', year:'numeric' }) : '—'
export const timeAgo = (d) => { /* returns 'Today', 'Yesterday', 'X days ago', or formatted date */ }

// formatCurrency.js
export const formatBWP = (n) => new Intl.NumberFormat('en-BW', {style:'currency', currency:'BWP'}).format(n)

// sanitize.js
export const sanitize = (input) => /* HTML entity encoding */
export const validateOmang = (omang) => /^\d{9}$/.test(omang.replace(/\s/g, ''))
export const validatePhone = (phone) => /^[0-9]{7,8}$/.test(phone.replace(/\s/g, ''))
export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// mockFetch.js — cached dynamic import from JSON data files
export const mockFetch = async (resource) => { /* imports from src/data/${resource}.json */ }
```

---

## 9. Global CSS Reset

```css
html { zoom: 0.9; }

@layer base {
  body { font-family: 'Inter', sans-serif; }
  h1,h2,h3,h4,h5,h6 { font-family: 'Plus Jakarta Sans', sans-serif; }
}

*, *::before, *::after { box-sizing: border-box; }
body { overflow-x: hidden; width: 100%; }

.page-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) { .page-container { padding: 0 16px; } }
@media (max-width: 480px) { .page-container { padding: 0 12px; } }
```

---

## 10. Design Principles (Extracted)

1. **Glassmorphism everywhere**: `backdropFilter: blur(10-18px)`, semi-transparent backgrounds, subtle borders
2. **Pill shapes**: `borderRadius: 999` for buttons, eyebrows, pills, nav items, search bar
3. **Layered shadows**: Multi-layer box-shadows (e.g. `0 32px 70px rgba(...), inset 0 1px 0 rgba(...)`)
4. **Scroll-aware UI**: Navbar fades, hero morphs, stats animate on viewport entry
5. **Micro-interactions on everything**: hover lifts, arrow slides, icon color changes, border emphasis
6. **Consistent spacing**: 24px page padding, 32-40px grid gaps, 16-24px card padding
7. **Premium easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (spring) for entrances, `ease` for hover states
8. **White-first design**: Clean white backgrounds with subtle gray borders, dark text
9. **Brand color restraint**: Navy (#1A3A6B) is accent, not dominant — used for CTAs, hover states, icons only
10. **Mobile-first responsive**: Components degrade gracefully with stacked layouts and reduced padding

---

## 11. Quick-Start Checklist for New Projects

When building a new project using this design system:

1. [ ] Set up Vite + React with the same dependencies
2. [ ] Add Google Fonts link in `index.html` (Plus Jakarta Sans + Inter)
3. [ ] Copy `globals.css` reset
4. [ ] Copy the shared component library (Button, Card, Badge, Input, Modal, Spinner, etc.)
5. [ ] Implement PageWrapper with Navbar + Footer
6. [ ] Add AuthContext + ToastContext + LanguageContext
7. [ ] Create hooks (useAuth, useToast, useLanguage)
8. [ ] Add PageLoader with branded dot animation
9. [ ] Set up react-router-dom with lazy loading + Suspense
10. [ ] Add lucide-react for icons
11. [ ] Apply the color tokens and typography rules throughout
12. [ ] Add scroll-aware effects and micro-interactions
13. [ ] Make everything responsive at the documented breakpoints

---

## 12. File Structure Reference

```
src/
├── App.jsx                          # Routes + lazy loading
├── main.jsx                         # Entry + context providers
├── styles/
│   └── globals.css                  # Reset + keyframes
├── components/
│   ├── shared/
│   │   ├── index.js                 # Barrel exports
│   │   ├── Navbar.jsx               # Floating pill nav
│   │   ├── Footer.jsx               # Dark gradient footer
│   │   ├── PageWrapper.jsx          # Layout shell
│   │   ├── PageLoader.jsx           # Full-screen loader
│   │   ├── GuestAuthModal.jsx       # Auth gate modal
│   │   ├── GovTaskbar.jsx           # Services overlay
│   │   ├── HeroImagePanel.jsx       # Themed image panel
│   │   ├── PlaceholderHeroPage.jsx  # Hero template page
│   │   ├── Button.jsx               # Multi-variant button
│   │   ├── Card.jsx                 # Card + sub-components
│   │   ├── Badge.jsx                # Status badges
│   │   ├── Input.jsx                # Form input with icon
│   │   ├── Modal.jsx                # Generic modal
│   │   ├── KPICard.jsx              # Metric display card
│   │   ├── Spinner.jsx              # Loading spinner
│   │   ├── EmptyState.jsx           # Empty data state
│   │   ├── StatusTimeline.jsx       # Vertical step timeline
│   │   ├── Breadcrumb.jsx           # Navigation breadcrumb
│   │   ├── ScrollToTop.jsx          # Route change scroll reset
│   │   └── ProtectedRoute.jsx       # Auth route guard
│   ├── home/
│   │   └── HomePageSections.jsx     # Quick actions, stats, services, steps, news
│   └── BocraHeroAnimation.jsx       # SVG logo + map orbit animation
├── chatbot/
│   ├── ChatBubble.jsx               # Full chatbot UI + logic
│   ├── intentData.js                # Intent definitions
│   ├── intentRouter.js              # Intent matching
│   ├── kbData.js                    # Knowledge base entries
│   └── kbRouter.js                  # KB matching
├── context/
│   ├── AuthContext.jsx              # Auth state + localStorage
│   ├── ApplicationContext.jsx       # Licence application state
│   ├── ComplaintContext.jsx          # Complaint state
│   ├── LanguageContext.jsx          # i18n (EN/TN)
│   └── ToastContext.jsx             # Toast notifications
├── hooks/
│   ├── useAuth.js
│   ├── useLanguage.js
│   └── useToast.js
├── utils/
│   ├── formatDate.js
│   ├── formatCurrency.js
│   ├── sanitize.js
│   └── mockFetch.js
├── data/                            # Static JSON datasets
│   ├── news.json
│   ├── documents.json
│   ├── licenceTypes.json
│   └── ...
└── pages/                           # All route pages
    ├── HomePage.jsx
    ├── AboutPage.jsx
    ├── LoginPage.jsx (auth/)
    └── ...
```
