# Components Directory Structure

This directory follows a clear separation of concerns:

## `/ui`
Generic, reusable UI components that could be used in any project. These are your building blocks.

## `/custom`
App-specific components that use the UI components and contain business logic specific to this portfolio.

## `/sections`
Page sections that compose multiple UI and custom components together.

## `/common`
Shared components used across multiple pages (e.g., Navbar, Footer).

## `/views`
Full page views that compose sections together.

## `/icons`
SVG icon components.

## Architecture Flow
```
ui components → custom components → sections → views → pages
```

This structure promotes:
- **Reusability**: UI components can be extracted to a design system
- **Maintainability**: Clear separation between generic and specific code
- **Scalability**: Easy to add new components in the appropriate category
- **Testability**: UI components can be tested in isolation