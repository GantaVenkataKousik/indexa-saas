# Maramujungu CRM - Styling Schema & Standards

## 🎨 Color System

### Primary Color Palette
The CRM uses OKLCH color space for better perceptual uniformity and accessibility.

#### Light Theme Colors
```css
/* Primary Colors */
--primary: oklch(0.55 0.22 264)           /* Slate Blue #6366f1 */
--primary-foreground: oklch(1 0 0)        /* Pure White */

/* Secondary Colors */
--secondary: oklch(0.96 0 0)              /* Very Light Gray #f8f9fa */
--secondary-foreground: oklch(0.15 0 0)   /* Very Dark Gray #262626 */

/* Background & Surface */
--background: oklch(0.99 0 0)             /* Off White #fcfcfc */
--card: oklch(1 0 0)                      /* Pure White */
--muted: oklch(0.96 0 0)                  /* Light Gray #f8f9fa */

/* Interactive States */
--border: oklch(0.93 0 0)                 /* Border Gray #e5e7eb */
--input: oklch(0.93 0 0)                  /* Input Border Gray */
--ring: oklch(0.55 0.22 264)              /* Focus Ring - Same as Primary */
```

#### Dark Theme Colors
```css
/* Primary Colors */
--primary: oklch(0.985 0 0)               /* Near White */
--primary-foreground: oklch(0.205 0 0)    /* Dark Gray */

/* Secondary Colors */
--secondary: oklch(0.269 0 0)             /* Medium Dark Gray */
--secondary-foreground: oklch(0.985 0 0)  /* Near White */

/* Background & Surface */
--background: oklch(0.145 0 0)            /* Very Dark Gray */
--card: oklch(0.145 0 0)                  /* Same as Background */
--muted: oklch(0.269 0 0)                 /* Medium Dark Gray */
```

#### Semantic Colors
```css
/* Status Colors */
--destructive: oklch(0.577 0.245 27.325)  /* Red for errors/delete */
--success: oklch(0.6 0.15 142)           /* Green for success states */
--warning: oklch(0.8 0.15 85)            /* Orange for warnings */
--info: oklch(0.7 0.15 250)              /* Blue for information */
```

#### Sidebar-Specific Colors
```css
/* Sidebar Theme */
--sidebar: oklch(1 0 0)                   /* White Background (Light) */
--sidebar-foreground: oklch(0.15 0 0)     /* Dark Text */
--sidebar-primary: oklch(0.55 0.22 264)   /* Same as Main Primary */
--sidebar-accent: oklch(0.96 0 0)         /* Light Gray for Hover */
--sidebar-border: oklch(0.96 0 0)         /* Subtle Border */
```

## 📦 Box Shadow System

### Shadow Hierarchy & Usage

#### 1. `shadow-xs` - Extra Small (Most Common)
```css
/* Usage: Buttons, inputs, form elements, subtle elevation */
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
```
**Used on:**
- All button variants
- Input fields and form elements
- Toggle switches
- Radio buttons and checkboxes
- Select dropdowns

#### 2. `shadow-sm` - Small
```css
/* Usage: Cards, active tabs, minor elevation */
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
```
**Used on:**
- Card components
- Active navigation items
- Sidebar elements
- Slider thumbs
- Avatar components

#### 3. `shadow-md` - Medium
```css
/* Usage: Dropdowns, popovers, moderate elevation */
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
```
**Used on:**
- Dropdown menus
- Popover content
- Select option lists
- Hover cards
- Context menus

#### 4. `shadow-lg` - Large
```css
/* Usage: Modals, toasts, significant elevation */
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
```
**Used on:**
- Toast notifications
- Sheet components
- Modal overlays
- Important elevated content

### Special Shadow Implementations

#### Colored Shadows for Branding
```css
/* Logo/Brand Shadow */
box-shadow: 0 10px 15px -3px rgb(99 102 241 / 0.3);  /* Indigo shadow */

/* Button Hover Enhancement */
.button-primary:hover {
  box-shadow: 0 4px 12px rgb(99 102 241 / 0.15);
}
```

#### Custom Sidebar Shadows
```css
/* Sidebar border simulation */
box-shadow: 0 0 0 1px hsl(var(--sidebar-border));

/* Sidebar hover state */
box-shadow: 0 0 0 1px hsl(var(--sidebar-accent));
```

## 🎯 Button Color System

### Button Variants & Color Usage

#### 1. Primary Button (`default`)
```css
.button-primary {
  background-color: hsl(var(--primary));           /* Slate Blue */
  color: hsl(var(--primary-foreground));          /* White */
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);     /* shadow-xs */
}

.button-primary:hover {
  background-color: hsl(var(--primary) / 0.9);    /* 90% opacity */
}

.button-primary:focus-visible {
  outline: 3px solid hsl(var(--ring) / 0.5);      /* Focus ring */
  border-color: hsl(var(--ring));
}
```

#### 2. Secondary Button
```css
.button-secondary {
  background-color: hsl(var(--secondary));        /* Light Gray */
  color: hsl(var(--secondary-foreground));        /* Dark Gray */
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);     /* shadow-xs */
}

.button-secondary:hover {
  background-color: hsl(var(--secondary) / 0.8);  /* 80% opacity */
}
```

#### 3. Outline Button
```css
.button-outline {
  background-color: transparent;
  border: 1px solid hsl(var(--border));
  color: hsl(var(--foreground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);     /* shadow-xs */
}

.button-outline:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}
```

#### 4. Destructive Button
```css
.button-destructive {
  background-color: hsl(var(--destructive));      /* Red */
  color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);     /* shadow-xs */
}

.button-destructive:hover {
  background-color: hsl(var(--destructive) / 0.9); /* 90% opacity */
}

.button-destructive:focus-visible {
  outline: 3px solid hsl(var(--destructive) / 0.2); /* Red focus ring */
}
```

#### 5. Ghost Button
```css
.button-ghost {
  background-color: transparent;
  border: none;
  color: hsl(var(--foreground));
}

.button-ghost:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}
```

### Button Sizes & Spacing
```css
/* Size Variants */
.button-sm {
  height: 2rem;        /* h-8 */
  padding: 0 0.75rem;  /* px-3 */
  gap: 0.375rem;       /* gap-1.5 */
}

.button-default {
  height: 2.25rem;     /* h-9 */
  padding: 0.5rem 1rem; /* py-2 px-4 */
  gap: 0.5rem;         /* gap-2 */
}

.button-lg {
  height: 2.5rem;      /* h-10 */
  padding: 0.5rem 1.5rem; /* py-2 px-6 */
  gap: 0.5rem;         /* gap-2 */
}

.button-icon {
  width: 2.25rem;      /* size-9 */
  height: 2.25rem;
  padding: 0;
}
```

## 📐 Border Radius Standards

### Radius Scale
```css
:root {
  --radius: 0.75rem;  /* 12px base radius */
}

/* Calculated Variants */
--radius-sm: calc(var(--radius) - 4px);  /* 8px */
--radius-md: calc(var(--radius) - 2px);  /* 10px */
--radius-lg: var(--radius);              /* 12px */
--radius-xl: calc(var(--radius) + 4px);  /* 16px */
```

### Component Usage
```css
/* Cards & Major Containers */
.card { border-radius: 1rem; }           /* rounded-xl (16px) */

/* Buttons & Form Elements */
.button { border-radius: 0.375rem; }     /* rounded-md (6px) */
.input { border-radius: 0.375rem; }      /* rounded-md (6px) */

/* Navigation Items */
.nav-item { border-radius: 1rem; }       /* rounded-xl (16px) */

/* Small Interactive Elements */
.badge { border-radius: 0.25rem; }       /* rounded (4px) */
.avatar { border-radius: 50%; }          /* rounded-full */
```

## 🎨 Typography Scale

### Font Family
```css
:root {
  --font-poppins: "Poppins", ui-sans-serif, system-ui, sans-serif;
}

body {
  font-family: var(--font-poppins);
}
```

### Font Weights
```css
.font-normal { font-weight: 400; }    /* Regular text */
.font-medium { font-weight: 500; }    /* Slightly emphasized */
.font-semibold { font-weight: 600; }  /* Headings, labels */
.font-bold { font-weight: 700; }      /* Important headings */
```

### Text Sizes
```css
.text-xs { font-size: 0.75rem; }      /* 12px - Small labels */
.text-sm { font-size: 0.875rem; }     /* 14px - Body text */
.text-base { font-size: 1rem; }       /* 16px - Default */
.text-lg { font-size: 1.125rem; }     /* 18px - Large text */
.text-xl { font-size: 1.25rem; }      /* 20px - Headings */
.text-2xl { font-size: 1.5rem; }      /* 24px - Page titles */
.text-3xl { font-size: 1.875rem; }    /* 30px - Major headings */
```

## 🎭 Interactive States

### Focus States
```css
.focus-visible {
  outline: none;
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
}
```

### Hover States
```css
/* Subtle hover for interactive elements */
.hover-subtle:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

/* Button hover with enhanced shadow */
.button:hover {
  box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
}
```

### Disabled States
```css
.disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
```

## 🔄 Transitions

### Standard Transitions
```css
/* General transitions */
.transition-all {
  transition: all 0.2s ease-out;
}

/* Color and shadow transitions */
.transition-colors-shadow {
  transition: color 0.2s ease-out, box-shadow 0.2s ease-out;
}

/* Navigation transitions */
.nav-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📱 Responsive Breakpoints

### Breakpoint System
```css
/* Mobile First Approach */
/* Base: 0px - 1023px (Mobile) */
/* lg: 1024px+ (Desktop) */

.mobile-hidden {
  display: none;
}

@media (min-width: 640px) {
  .mobile-hidden {
    display: block;
  }
}

.mobile-only {
  display: block;
}

@media (min-width: 640px) {
  .mobile-only {
    display: none;
  }
}
```

## 🎪 Sidebar Color Scheme

### Sidebar Visual Hierarchy
```css
/* Sidebar Background */
.sidebar {
  background-color: white;
  border-right: 1px solid #f3f4f6;  /* gray-100 */
}

/* Logo Container */
.sidebar-logo {
  background-color: #6366f1;  /* indigo-600 */
  box-shadow: 0 10px 15px -3px rgb(99 102 241 / 0.3);  /* indigo shadow */
}

/* Navigation Items */
.nav-item {
  color: #6b7280;  /* gray-600 */
}

.nav-item:hover {
  background-color: #f9fafb;  /* gray-50 */
  color: #111827;             /* gray-900 */
}

.nav-item.active {
  background-color: #eef2ff;  /* indigo-50 */
  color: #6366f1;             /* indigo-600 */
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);  /* shadow-sm */
}

/* Badges */
.nav-badge {
  background-color: #fed7aa;  /* orange-100 */
  color: #c2410c;             /* orange-700 */
}

/* Promo Card */
.promo-card {
  background-color: #fefbf2;  /* amber-50 */
  border: 1px solid #fcd34d;  /* amber-200 */
}
```

## 🔍 Usage Examples

### Card Component Styling
```tsx
<Card className="border-0 shadow-sm bg-white rounded-xl">
  <CardContent className="p-6">
    {/* Card content */}
  </CardContent>
</Card>
```

### Button Implementation
```tsx
{/* Primary Action */}
<Button className="bg-indigo-600 hover:bg-indigo-700 shadow-xs">
  Add Client
</Button>

{/* Secondary Action */}
<Button variant="outline" className="border-gray-200 hover:bg-gray-50 shadow-xs">
  Cancel
</Button>
```

### Form Element Styling
```tsx
<Input className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/50 shadow-xs" />
```

This styling schema ensures consistency, accessibility, and a professional appearance throughout the Maramujungu CRM application.