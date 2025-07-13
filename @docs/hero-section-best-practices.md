# Hero Section Best Practices

## Overview

This document outlines the implementation and best practices for creating a full-viewport hero section with a navbar, video background, and headline text. The approach ensures proper spacing, responsive design, and optimal viewport utilization.

## Table of Contents
1. [Layout Architecture](#layout-architecture)
2. [Component Structure](#component-structure)
3. [Spacing System](#spacing-system)
4. [Implementation Details](#implementation-details)
5. [Common Pitfalls](#common-pitfalls)
6. [Code Examples](#code-examples)

## Layout Architecture

### Viewport-Based Layout System

The key to a properly fitting hero section is establishing a flex-based layout hierarchy from the root:

```tsx
// app/layout.tsx
<body className="antialiased gap-0 min-h-screen flex flex-col">
  <Navbar />
  <main className="flex-1 flex flex-col">
    {children}
  </main>
</body>
```

**Key Principles:**
- `min-h-screen` ensures the body fills at least the viewport height
- `flex flex-col` creates a vertical flex container
- Navbar takes its natural height
- `main` with `flex-1` fills remaining space

### Component Hierarchy

```
body (min-h-screen, flex-col)
├── Navbar (relative positioning, natural height)
└── main (flex-1, flex-col)
    └── HeroSection (flex-1, fills available space)
        └── Content Container (flex-col with gaps)
            ├── Video Container (flex-1)
            └── Headline (shrink-0)
```

## Component Structure

### HeroSection Component

```tsx
export const HeroSection = () => {
  return (
    <section className="flex-1 bg-dark overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 gap-4 sm:gap-5 lg:gap-6">
        {/* Video Container */}
        <div className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-dark/50 min-h-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          >
            <source src="/videos/HeroVideo.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Headline */}
        <div className="shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
            <span className="text-light">Aris Antonio</span>
            <span className="text-[#8C8C8C]"> brings ideas to life</span>
            <br/>
            <span className="text-[#8C8C8C]">through code and Intuitive design</span>
          </h1>
        </div>
      </div>
    </section>
  );
};
```

### Navbar Component

```tsx
<nav className="relative z-50 px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
  {/* Navbar content */}
</nav>
```

**Important:** Use `relative` positioning, not `absolute`, to ensure the navbar is part of the document flow.

## Spacing System

### Padding Strategy

1. **Navbar Padding**: `px-6 py-4` (24px horizontal, 16px vertical on mobile)
2. **Hero Content Padding**: 
   - Top: None (video starts immediately after navbar)
   - Horizontal: `px-4 sm:px-5 lg:px-6` (16px → 20px → 24px)
   - Bottom: `pb-4 sm:pb-5 lg:pb-6` (matches horizontal for visual balance)

### Gap Management

Use Flexbox gaps for consistent spacing between elements:
- `gap-4 sm:gap-5 lg:gap-6` (16px → 20px → 24px)
- This creates equal spacing between video and headline

### Visual Balance Formula

```
Bottom padding = Gap between elements = Base spacing unit
Horizontal padding ≈ Navbar vertical padding (for visual consistency)
```

## Implementation Details

### Video Container Best Practices

```tsx
<div className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-dark/50 min-h-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover object-bottom"
  >
    <source src="/videos/HeroVideo.mp4" type="video/mp4" />
  </video>
</div>
```

**Key Points:**
- `flex-1` allows video container to grow
- `min-h-0` prevents flexbox overflow bug
- `overflow-hidden` ensures video stays within rounded corners
- `object-bottom` shows the bottom portion of the video (useful for showing specific content)
- `bg-dark/50` provides fallback while video loads

### Video Attributes

- `autoPlay`: Starts playing immediately
- `loop`: Continuous playback
- `muted`: Required for autoplay in most browsers
- `playsInline`: Prevents fullscreen on mobile

### Responsive Typography

```tsx
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
```

Scales from 24px to 60px across breakpoints for optimal readability.

## Common Pitfalls

### 1. Absolute Positioning Navbar
**Problem:** Using `absolute` positioning causes overlay issues and spacing calculations.
**Solution:** Use `relative` positioning to keep navbar in document flow.

### 2. Fixed Heights
**Problem:** Using `h-screen` on components when navbar is present.
**Solution:** Use flex-based sizing (`flex-1`) to fill available space.

### 3. Overflow Issues
**Problem:** Video overflowing its container in flex layouts.
**Solution:** Add `min-h-0` to flex containers and `overflow-hidden` to video container.

### 4. Inconsistent Spacing
**Problem:** Different padding/margin values creating visual imbalance.
**Solution:** Use consistent spacing scale and flexbox gaps.

### 5. Top Padding on Hero
**Problem:** Adding top padding creates double spacing with navbar.
**Solution:** Remove top padding; let content start immediately after navbar.

## Code Examples

### Complete Implementation

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased gap-0 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}

// components/views/HomePageView.tsx
export const HomePageView = () => {
  return <HeroSection />;
};

// components/sections/HeroSection.tsx
export const HeroSection = () => {
  return (
    <section className="flex-1 bg-dark overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 gap-4 sm:gap-5 lg:gap-6">
        <div className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-dark/50 min-h-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          >
            <source src="/videos/HeroVideo.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
            <span className="text-light">Aris Antonio</span>
            <span className="text-[#8C8C8C]"> brings ideas to life</span>
            <br/>
            <span className="text-[#8C8C8C]">through code and Intuitive design</span>
          </h1>
        </div>
      </div>
    </section>
  );
};
```

### Alternative Layouts

#### With CTA Buttons
```tsx
<div className="shrink-0 space-y-4">
  <h1>{/* Headline */}</h1>
  <div className="flex gap-4">
    <Button variant="solid">View Work</Button>
    <Button variant="outline">Contact</Button>
  </div>
</div>
```

#### With Overlay Content
```tsx
<div className="flex-1 relative">
  <video>{/* Video */}</video>
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-center">{/* Centered headline */}</h1>
  </div>
</div>
```

## Testing Checklist

- [ ] Hero section fills exactly the viewport height (no scroll on load)
- [ ] Video maintains aspect ratio and doesn't overflow
- [ ] Spacing is visually balanced on all sides
- [ ] Responsive scaling works across all breakpoints
- [ ] Video loads and plays automatically
- [ ] Fallback background color visible while video loads
- [ ] No layout shift when content loads

## Performance Considerations

1. **Video Optimization**
   - Use MP4 format with H.264 codec
   - Compress video (aim for < 5MB for hero videos)
   - Consider using poster image for first frame
   - Implement lazy loading for below-fold sections

2. **Loading States**
   ```tsx
   const [videoLoaded, setVideoLoaded] = useState(false);
   
   <video
     onLoadedData={() => setVideoLoaded(true)}
     className={cn(
       "absolute inset-0 w-full h-full object-cover object-bottom",
       "transition-opacity duration-500",
       videoLoaded ? "opacity-100" : "opacity-0"
     )}
   />
   ```

3. **Mobile Considerations**
   - Some mobile devices don't support autoplay
   - Consider static image fallback for mobile
   - Test on various devices and browsers

---

This approach creates a clean, maintainable hero section that properly utilizes viewport space while maintaining visual harmony through consistent spacing and proper layout hierarchy.