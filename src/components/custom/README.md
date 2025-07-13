# Custom Components

This directory contains app-specific components that are built using the generic UI components. These components:

- **Contain business logic specific to this portfolio**
- **Are composed of UI components**
- **Handle specific data structures**
- **May include external dependencies (e.g., emoji library)**

## Components

- **Clock** - Real-time clock with timezone support (used in Hero and Navbar)
- **Greeting** - Personalized greeting with emoji support
- **Navigation** - App-specific navigation component
- **WorkExperienceCard** - Card component for displaying work experience

## Usage

```tsx
import { Clock, Greeting, Navigation } from "@/components/custom";
```