# Teal Color Scheme Reference Guide

## Quick Reference

### Color Palette

| Color Name | Hex Code | OKLCH | Usage | Contrast on White |
|------------|----------|-------|-------|-------------------|
| **Teal Light** | `#5c8e85` | `oklch(0.565 0.043 188.2)` | Background accents, decorative | 3.17:1 (Large text only) |
| **Teal Primary** | `#356d63` | `oklch(0.445 0.047 186.8)` | Buttons, links, brand elements | 5.57:1 ✅ AA |
| **Teal Dark** | `#2a5450` | `oklch(0.355 0.043 186.5)` | Headings, emphasis text | 7.93:1 ✅ AAA |

### CSS Variable Usage

```css
/* New teal variables */
var(--teal-light)     /* #5c8e85 - Background accents */
var(--teal-primary)   /* #356d63 - Primary brand color */
var(--teal-dark)      /* #2a5450 - Dark text */
var(--orange-cta)     /* #356d63 - Maps to teal-primary */

/* Backward compatible (auto-mapped) */
var(--purple-primary) /* → maps to --teal-primary */
var(--purple-light)   /* → maps to --teal-light */
var(--purple-dark)    /* → maps to --teal-dark */
```

### Tailwind CSS Classes

```css
/* Background colors */
bg-teal-light
bg-teal-primary
bg-teal-dark

/* Text colors */
text-teal-light
text-teal-primary
text-teal-dark

/* Border colors */
border-teal-light
border-teal-primary
border-teal-dark
border-teal-primary/20   /* 20% opacity */
border-teal-primary/50   /* 50% opacity */

/* Focus ring */
ring-teal-primary
ring-teal-primary/50

/* Legacy classes (still work via CSS mapping) */
bg-purple-primary    /* → uses teal-primary */
text-purple-dark     /* → uses teal-dark */
border-purple-light  /* → uses teal-light */
```

## Component-Specific Examples

### Hero Section V-Shape Background

```tsx
{/* Outer V-shape */}
<div style={{ background: 'var(--teal-light)' }} />

{/* Inner V-shape */}
<div style={{ background: 'var(--teal-primary)' }} />
```

### CTA Buttons

```tsx
<Button
  className="focus:ring-teal-primary/50"
  style={{ backgroundColor: 'var(--teal-primary)', color: 'white' }}
>
  Book Now
</Button>
```

### Pricing Cards

```tsx
{/* Regular card */}
<Card className="border-teal-primary/20 hover:border-teal-primary/40">
  <h3 className="text-teal-dark">Plan Name</h3>
  <Button className="bg-teal-primary hover:bg-teal-light text-white">
    Get Started
  </Button>
</Card>

{/* Highlighted card */}
<Card className="border-teal-primary bg-teal-dark text-white">
  <Badge className="bg-gradient-to-r from-teal-primary to-teal-light">
    Most Popular
  </Badge>
  <Button className="bg-white text-teal-dark hover:bg-white/90">
    Get Started
  </Button>
</Card>
```

### Feature Cards (Bento Grid)

```tsx
<Card style={{ borderTopColor: 'var(--teal-primary)' }}>
  <h3 style={{ color: 'var(--teal-primary)' }}>
    Feature Title
  </h3>
</Card>
```

## Accessibility Guidelines

### ✅ Safe Combinations (WCAG AA Compliant)

| Text Color | Background | Contrast | Use Case |
|------------|------------|----------|----------|
| Teal Primary | White | 5.57:1 | Body text, headings, links |
| Teal Dark | White | 7.93:1 | Headings, emphasis (AAA compliant) |
| White | Teal Primary | 5.57:1 | Buttons, badges |
| White | Teal Dark | 7.93:1 | Highlighted cards, CTAs |
| Teal Light | White | 3.17:1 | Large headings (18pt+) only |

### ⚠️ Use With Caution

| Combination | Contrast | Limitation |
|-------------|----------|------------|
| Teal Light on White | 3.17:1 | ❌ Fails for normal text (use 18pt+ only) |
| White on Teal Light | 3.17:1 | ❌ Fails for normal text (decorative only) |

### ✅ Best Practices

1. **Primary CTAs**: Use Teal Primary background with white text
2. **Secondary CTAs**: Use Teal Primary text on white background
3. **Headings**: Use Teal Dark for maximum readability
4. **Links**: Use Teal Primary for standard links
5. **Hover States**: Lighten to Teal Light or darken to Teal Dark
6. **Focus Indicators**: Use `ring-teal-primary/50` for 4px outline
7. **Decorative Elements**: Teal Light is perfect for backgrounds and accents

## Color Harmony

### Complementary Colors (Optional Accents)

If you need additional accent colors that work well with teal:

- **Warm Accent**: `#d97757` (coral/terracotta) - for special promotions
- **Success**: `#4ade80` (green) - for success states
- **Warning**: `#fbbf24` (amber) - for warnings
- **Error**: `#ef4444` (red) - for errors
- **Info**: `#3b82f6` (blue) - for informational messages

### Gradient Combinations

```css
/* Teal gradient (used in pricing badges) */
background: linear-gradient(to right, var(--teal-primary), var(--teal-light));

/* Teal with transparency */
background: linear-gradient(to bottom, transparent, var(--teal-primary));

/* V-shape hero effect */
background: var(--teal-light);
opacity: 0.9;
```

## Design Tokens Summary

```css
:root {
  /* Primary teal colors */
  --teal-light: oklch(0.565 0.043 188.2);
  --teal-primary: oklch(0.445 0.047 186.8);
  --teal-dark: oklch(0.355 0.043 186.5);

  /* Functional mappings */
  --orange-cta: var(--teal-primary);

  /* Backward compatibility */
  --color-purple-primary: var(--teal-primary);
  --color-purple-light: var(--teal-light);
  --color-purple-dark: var(--teal-dark);
}

@theme inline {
  /* Tailwind CSS v4 integration */
  --color-teal-light: var(--teal-light);
  --color-teal-primary: var(--teal-primary);
  --color-teal-dark: var(--teal-dark);
}
```

## Migration Notes

### If You Need to Update a Component:

1. **Replace inline styles:**
   ```tsx
   // Before
   style={{ backgroundColor: 'var(--purple-primary)' }}

   // After
   style={{ backgroundColor: 'var(--teal-primary)' }}
   ```

2. **Replace Tailwind classes:**
   ```tsx
   // Before
   className="bg-purple-primary text-white"

   // After
   className="bg-teal-primary text-white"
   ```

3. **Note:** Most components will work automatically via CSS variable mapping!

## Quick Copy-Paste Snippets

### Button Component
```tsx
<Button
  className="h-12 px-8 bg-teal-primary hover:bg-teal-dark text-white"
>
  Click Me
</Button>
```

### Card with Accent Border
```tsx
<Card className="border-t-4 border-teal-primary">
  <CardHeader>
    <h3 className="text-teal-dark">Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>Card content here</p>
  </CardContent>
</Card>
```

### Link Style
```tsx
<a href="#" className="text-teal-primary hover:text-teal-dark underline">
  Learn More
</a>
```

### Badge
```tsx
<Badge className="bg-gradient-to-r from-teal-primary to-teal-light border-0 text-white">
  New
</Badge>
```

---

**Last Updated:** 2025-10-22
**Color Scheme Version:** 1.0
**WCAG Compliance:** Level AA ✅
