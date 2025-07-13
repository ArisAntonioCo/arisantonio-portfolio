# Portfolio Project Structure Guidelines

## Table of Contents
1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [Component Architecture](#component-architecture)
4. [Code Organization Rules](#code-organization-rules)
5. [TypeScript Conventions](#typescript-conventions)
6. [Styling Guidelines](#styling-guidelines)
7. [Performance Best Practices](#performance-best-practices)
8. [Testing Structure](#testing-structure)

## Project Overview

This document outlines the architectural decisions and coding standards for the portfolio project built with Next.js 15, TypeScript, and Tailwind CSS.

### Core Principles
- **Single Responsibility**: Each component should do one thing well
- **Separation of Concerns**: Business logic, UI, and data fetching should be clearly separated
- **Type Safety**: Leverage TypeScript for maximum type safety
- **Performance First**: Optimize for Core Web Vitals
- **Maintainability**: Code should be self-documenting and easy to understand

## Folder Structure

```
aris-portfolio/
├── @docs/                      # Documentation files
├── public/                     # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (single import only)
│   │   ├── globals.css        # Global styles
│   │   └── [route]/           # Dynamic routes
│   ├── components/            # Reusable components
│   │   ├── common/           # Shared components
│   │   ├── sections/         # Page sections
│   │   ├── ui/              # UI primitives
│   │   └── layouts/         # Layout components
│   ├── lib/                  # Utility functions
│   │   ├── utils/           # Helper functions
│   │   ├── constants/       # Constants and configs
│   │   └── api/            # API related utilities
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── styles/              # Additional styles
│   └── data/                # Static data and content
├── tests/                    # Test files
├── .env.local               # Environment variables
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Component Architecture

### 1. Page Components (`app/page.tsx`)
```typescript
// ✅ CORRECT: Page component imports only ONE main component
export default function HomePage() {
  return <HomePageView />
}

// ❌ WRONG: Multiple imports and logic in page component
export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}
```

### 2. View Components (`components/views/`)
View components orchestrate sections and handle page-level logic.

```typescript
// components/views/HomePageView.tsx
export const HomePageView = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
```

### 3. Section Components (`components/sections/`)
Sections are major page divisions with their own context and state.

```typescript
// components/sections/HeroSection.tsx
export const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Heading />
        <SubHeading />
        <CTAButton />
      </Container>
    </section>
  )
}
```

### 4. UI Components (`components/ui/`)
Reusable, atomic UI components.

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

## Code Organization Rules

### 1. Import Order
```typescript
// 1. React/Next.js imports
import { useState, useEffect } from 'react'
import Image from 'next/image'

// 2. Third-party libraries
import { motion } from 'framer-motion'
import clsx from 'clsx'

// 3. Internal imports (absolute paths)
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/hooks/useTheme'

// 4. Types
import type { ButtonProps } from '@/types/components'

// 5. Styles (if any)
import styles from './Component.module.css'
```

### 2. File Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase with `.types.ts` suffix (e.g., `User.types.ts`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScrollPosition.ts`)
- **Constants**: UPPER_SNAKE_CASE in files (e.g., `API_ENDPOINTS.ts`)

### 3. Component Structure
```typescript
// 1. Imports
import { FC } from 'react'

// 2. Types/Interfaces
interface ComponentProps {
  title: string
  description?: string
}

// 3. Constants
const ANIMATION_DURATION = 300

// 4. Component
export const Component: FC<ComponentProps> = ({ title, description }) => {
  // 5. Hooks
  const [state, setState] = useState(false)
  
  // 6. Handlers
  const handleClick = () => {
    setState(!state)
  }
  
  // 7. Effects
  useEffect(() => {
    // Effect logic
  }, [])
  
  // 8. Render
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
```

## TypeScript Conventions

### 1. Type Definitions
```typescript
// types/portfolio.types.ts
export interface Project {
  id: string
  title: string
  description: string
  technologies: Technology[]
  links: ProjectLinks
}

export interface Technology {
  name: string
  icon?: string
}

export interface ProjectLinks {
  github?: string
  live?: string
  demo?: string
}
```

### 2. Component Props
```typescript
// Always use interface for component props
interface ComponentProps {
  children: React.ReactNode
  className?: string
  isActive?: boolean
}

// Use type for unions and intersections
type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonProps = ComponentProps & {
  variant?: ButtonVariant
}
```

### 3. Avoid `any`
```typescript
// ❌ WRONG
const processData = (data: any) => { }

// ✅ CORRECT
const processData = (data: unknown) => {
  // Type guard or assertion
  if (isValidData(data)) {
    // Process data
  }
}
```

## Styling Guidelines

### 1. Tailwind CSS Best Practices
```typescript
// ✅ Use Tailwind utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// ✅ Use cn() utility for conditional classes
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)}>

// ❌ Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

### 2. Component-Specific Styles
```typescript
// For complex animations or specific styling needs
// components/ui/AnimatedCard.module.css
.card {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

### 3. Design Tokens
```typescript
// lib/constants/design-tokens.ts
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
} as const
```

## Performance Best Practices

### 1. Image Optimization
```typescript
import Image from 'next/image'

// ✅ Use Next.js Image component
<Image
  src="/hero-image.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // for above-the-fold images
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>
```

### 2. Code Splitting
```typescript
// Dynamic imports for heavy components
const ProjectGallery = dynamic(
  () => import('@/components/sections/ProjectGallery'),
  { 
    loading: () => <GallerySkeletion />,
    ssr: false // if not needed for SEO
  }
)
```

### 3. Memoization
```typescript
// Memoize expensive computations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])

// Memoize components when needed
const MemoizedComponent = memo(Component, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
```

### 4. Server Components (Default in App Router)
```typescript
// app/projects/page.tsx - Server Component by default
async function ProjectsPage() {
  const projects = await getProjects() // Server-side data fetching
  
  return <ProjectsList projects={projects} />
}

// Mark as client component only when needed
'use client'
```

## Testing Structure

### 1. Unit Tests
```typescript
// tests/components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  
  it('calls onClick handler', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### 2. Integration Tests
```typescript
// tests/integration/contact-form.test.tsx
describe('Contact Form', () => {
  it('submits form with valid data', async () => {
    // Test form submission flow
  })
})
```

### 3. E2E Tests
```typescript
// tests/e2e/navigation.test.ts
describe('Navigation', () => {
  it('navigates between pages', async () => {
    // Test navigation flow
  })
})
```

## Additional Guidelines

### 1. Error Handling
```typescript
// components/ErrorBoundary.tsx
class ErrorBoundary extends Component {
  // Implement error boundary for graceful error handling
}

// For async operations
try {
  const data = await fetchData()
} catch (error) {
  console.error('Failed to fetch data:', error)
  // Handle error appropriately
}
```

### 2. Accessibility
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain proper color contrast
- Test with screen readers

### 3. SEO Optimization
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Portfolio - Your Name',
  description: 'Professional portfolio showcasing my work',
  openGraph: {
    // OG tags
  },
}
```

### 4. Environment Variables
```typescript
// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_API_KEY=your-secret-key

// Access in code
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## Commit Message Convention
Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

Example: `feat: add project gallery section with filtering`

---

This guideline is a living document and should be updated as the project evolves and new patterns emerge.