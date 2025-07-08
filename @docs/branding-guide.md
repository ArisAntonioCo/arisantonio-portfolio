# Portfolio Branding Guide

## Table of Contents
1. [Brand Colors](#brand-colors)
2. [Typography](#typography)
3. [Button Styles](#button-styles)
4. [Spacing System](#spacing-system)
5. [Component Variants](#component-variants)
6. [Design Principles](#design-principles)

## Brand Colors

### Primary Palette
```css
--color-dark: #0F0F0F;      /* Primary Background */
--color-light: #FFFFFF;     /* Primary Text on Dark */
--color-muted: #8C8C8C;     /* Secondary Text */
--color-accent: #FF5500;    /* CTA & Highlights */
```

### Extended Palette
```css
/* Dark Mode (Default) */
--bg-primary: #0F0F0F;
--bg-secondary: #1A1A1A;
--bg-tertiary: #242424;

/* Text Colors */
--text-primary: #FFFFFF;
--text-secondary: #8C8C8C;
--text-accent: #FF5500;

/* Accent Variations */
--accent-hover: #E64D00;    /* Darker on hover */
--accent-light: #FF6B1A;    /* Lighter variant */
--accent-muted: #FF550033;  /* 20% opacity */

/* Utility Colors */
--border-color: #2A2A2A;
--shadow-color: rgba(0, 0, 0, 0.5);
--overlay: rgba(15, 15, 15, 0.8);
```

### Color Usage Guidelines
- **Dark (#0F0F0F)**: Main background, primary surfaces
- **Light (#FFFFFF)**: Primary text, icons on dark backgrounds
- **Muted (#8C8C8C)**: Secondary text, subtitles, metadata, disabled states
- **Accent (#FF5500)**: CTAs, links, active states, important highlights

## Typography

### Font Family
```css
@font-face {
  font-family: 'Object Sans';
  src: url('/fonts/ObjectSans-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

--font-primary: 'Object Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale
```css
/* Headings */
--text-h1: clamp(2.5rem, 5vw, 4rem);      /* 40-64px */
--text-h2: clamp(2rem, 4vw, 3rem);        /* 32-48px */
--text-h3: clamp(1.5rem, 3vw, 2rem);      /* 24-32px */
--text-h4: clamp(1.25rem, 2.5vw, 1.5rem); /* 20-24px */
--text-h5: 1.125rem;                       /* 18px */
--text-h6: 1rem;                           /* 16px */

/* Body */
--text-body-lg: 1.125rem;  /* 18px */
--text-body: 1rem;         /* 16px */
--text-body-sm: 0.875rem;  /* 14px */
--text-caption: 0.75rem;   /* 12px */

/* Line Heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Letter Spacing */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.02em;
--tracking-wider: 0.04em;
```

### Typography Classes
```css
/* Headings */
.heading-1 {
  font-size: var(--text-h1);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  font-weight: 400;
}

/* Body Text */
.body-text {
  font-size: var(--text-body);
  line-height: var(--leading-normal);
  color: var(--text-primary);
}

/* Muted Text */
.text-muted {
  color: var(--color-muted);
}

/* Accent Text */
.text-accent {
  color: var(--color-accent);
}
```

## Button Styles

### Button Variants

#### 1. Solid Button
```css
.btn-solid {
  background: var(--color-accent);
  color: var(--color-light);
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-solid:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 85, 0, 0.3);
}

.btn-solid:active {
  transform: translateY(0);
}
```

#### 2. Outline Button
```css
.btn-outline {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  padding: 10px 22px; /* Adjusted for border */
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: var(--color-accent);
  color: var(--color-light);
  transform: translateY(-2px);
}
```

#### 3. Glass Button
```css
.btn-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-light);
  padding: 12px 24px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### Button Sizes
```css
/* Small */
.btn-sm {
  padding: 8px 16px;
  font-size: 0.875rem;
}

/* Medium (Default) */
.btn-md {
  padding: 12px 24px;
  font-size: 1rem;
}

/* Large */
.btn-lg {
  padding: 16px 32px;
  font-size: 1.125rem;
}
```

### Button States
```css
/* Disabled */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Loading */
.btn-loading {
  position: relative;
  color: transparent;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid var(--color-light);
  border-top-color: transparent;
  border-radius: 50%;
  animation: button-loading-spinner 0.8s linear infinite;
}
```

## Spacing System

### Base Unit: 4px
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Container Widths
```css
--container-xs: 475px;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

## Component Variants

### Cards
```css
/* Solid Card */
.card-solid {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: var(--space-6);
}

/* Glass Card */
.card-glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: var(--space-6);
}
```

### Inputs
```css
/* Base Input */
.input {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: var(--space-3) var(--space-4);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--accent-muted);
}

/* Glass Input */
.input-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-caption);
  border-radius: 100px;
  font-weight: 500;
}

.badge-accent {
  background: var(--accent-muted);
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
}

.badge-muted {
  background: rgba(140, 140, 140, 0.1);
  color: var(--color-muted);
  border: 1px solid rgba(140, 140, 140, 0.2);
}
```

## Design Principles

### 1. Minimalism
- Clean, uncluttered layouts
- Generous white space
- Focus on content over decoration

### 2. Consistency
- Uniform spacing using the 4px grid
- Consistent color usage
- Predictable interaction patterns

### 3. Accessibility
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- Focus indicators on all interactive elements
- Keyboard navigation support

### 4. Motion & Interaction
```css
/* Standard Transitions */
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease;

/* Hover Effects */
--hover-scale: scale(1.02);
--hover-lift: translateY(-2px);

/* Standard Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 5. Dark Theme First
- Designed primarily for dark backgrounds
- Light elements provide contrast
- Accent color draws attention

## Implementation Examples

### Tailwind CSS Config
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: '#0F0F0F',
        light: '#FFFFFF',
        muted: '#8C8C8C',
        accent: {
          DEFAULT: '#FF5500',
          hover: '#E64D00',
          light: '#FF6B1A',
        }
      },
      fontFamily: {
        sans: ['Object Sans', 'system-ui', 'sans-serif'],
      }
    }
  }
}
```

### CSS Variables Setup
```css
:root {
  /* Colors */
  --color-dark: #0F0F0F;
  --color-light: #FFFFFF;
  --color-muted: #8C8C8C;
  --color-accent: #FF5500;
  
  /* Font */
  --font-primary: 'Object Sans', sans-serif;
}
```

## Usage Guidelines

### Do's
- Use accent color sparingly for maximum impact
- Maintain consistent spacing throughout
- Ensure text is readable with appropriate contrast
- Use glass effects on dark backgrounds only

### Don'ts
- Don't use more than one accent color
- Avoid using pure black (#000000)
- Don't mix different button styles in the same context
- Avoid small text (< 14px) in muted color