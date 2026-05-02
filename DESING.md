---
name: Aetheric Lab
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#c3c6d6'
  on-secondary: '#2c303c'
  secondary-container: '#454956'
  on-secondary-container: '#b5b8c7'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#8691a7'
  on-tertiary-container: '#1f2a3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#dfe2f2'
  secondary-fixed-dim: '#c3c6d6'
  on-secondary-fixed: '#171b27'
  on-secondary-fixed-variant: '#434653'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  sidebar_width: 260px
  container_max: 1440px
---

## Brand & Style

This design system is built on a foundation of "Digital Sophistication." It targets high-end enterprise clients and innovative startups who value precision, technical prowess, and premium aesthetics. The brand personality is authoritative yet visionary, utilizing a blend of **Minimalism** and **Glassmorphism** to create a sense of infinite depth.

The UI should feel like a high-end software cockpit: focused, immersive, and sleek. Visual interest is generated not through clutter, but through the interplay of light, transparency, and vibrant accents against a vast, dark canvas. The emotional response should be one of "calm confidence" and "technological edge."

## Colors

The palette is anchored by a deep blue-black foundation that provides maximum contrast for neon accents.

- **Primary:** Neon Purple (#8B5CF6) is used exclusively for interactive elements, progress indicators, and focal points.
- **Surface:** Surfaces use a translucent Slate (#1E293B) to enable the glassmorphism effect.
- **Typography:** Pure white is avoided to reduce eye strain. Instead, a hierarchy of soft whites (Slate-50/100) and cool grays (Slate-400/500) is used to guide the user's attention.
- **Accents:** Subtle glows using the primary purple are applied to active states to simulate light emission in a dark environment.

## Typography

This design system utilizes **Inter** for its utilitarian, high-readability characteristics, ensuring the interface feels like a modern SaaS platform. To add a touch of "Isa Arbelaez" technicality, **Space Grotesk** is introduced for small labels and metadata to provide a geometric, futuristic counterpoint.

Tighten letter spacing on larger headlines to maintain a premium, editorial feel. Use `body-md` for standard content and `label-caps` for section headers within the sidebar and small UI hints.

## Layout & Spacing

The system follows a **12-column fixed grid** for main content areas, with a persistent minimalist sidebar on the left.

- **Sidebar:** A fixed 260px width, utilizing a deep wash of the background color with a 1px border separation on the right.
- **Rhythm:** An 8px linear scale (4, 8, 16, 24, 40, 64) ensures consistent vertical rhythm.
- **Margins:** Large 64px (xl) padding is preferred for top-level sections to create "breathable" luxury.
- **Gutters:** Standard 24px gutters provide clear separation between cards and grid items.

## Elevation & Depth

Depth is communicated through **Glassmorphism** rather than traditional shadows.

1. **Base Layer:** The solid #0B0F1A background.
2. **Mid Layer (Cards/Panels):** Semi-transparent fills (Slate-800 at 50% opacity) with a `backdrop-blur` of 12px to 20px.
3. **Borders:** Every elevated element must have a 1px "inner-glow" style border. Use a linear gradient for borders (Top-left: White @ 10% to Bottom-right: White @ 0%) to simulate a light source from above.
4. **Active State:** Elements in a focused or active state receive a soft `0px 0px 20px` outer glow using the Primary Neon Purple at 30% opacity.

## Shapes

The shape language is consistently **Rounded**.

Standard components (buttons, input fields) use a 0.5rem (8px) radius. Larger containers and cards use a 1rem (16px) radius. This softening of the edges balances the "cold" nature of the dark blue-black and purple palette, making the interface feel more accessible and modern.

## Components

- **Buttons:** Primary buttons are solid Neon Purple with white text. Secondary buttons use the "Glass" style: transparent background, 1px subtle border, and purple text.
- **Cards:** The core of the UI. Must feature backdrop-blur, a semi-transparent background, and the 1px gradient border. Content inside cards should have ample padding (24px).
- **Sidebar:** Minimalist icons (20px) with labels in `label-caps`. The active state is indicated by a vertical 3px purple line on the far left and a subtle purple tint to the icon.
- **Inputs:** Darker than the surface (#05070A), 1px border. On focus, the border turns Neon Purple with a subtle glow.
- **Chips/Tags:** Small, pill-shaped elements with a low-opacity purple background (15%) and solid purple text.
- **Glow Accents:** Use "Ambient Orbs"—large, blurry circles of Neon Purple (opacity 5-10%) placed behind cards in the background to break up the dark canvas.
