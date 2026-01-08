# CSS + Tailwind Coexistence Convention for BananaMilk

## File Structure

```
/styles
  └── bananamilk.css          # Scoped BananaMilk styles (complex patterns)
  
/src
  ├── index.css               # Global styles, fonts, base utilities
  └── components/
      ├── Home/
      │   └── Home-styles.css # DEPRECATED - migrate to bananamilk.css
      ├── Navbar/
      │   └── Navbar-styles.css # DEPRECATED - migrate to bananamilk.css
      └── bananamilk/         # New component library
          ├── BananaMilkLayout.tsx
          ├── ProductGrid.tsx
          ├── ProductCard.tsx
          └── ...
```

## What Goes Where

### Raw CSS (styles/bananamilk.css)
Use raw CSS for:
- **Complex gradient definitions** (gradient-text1, gradient-text2)
- **SVG curve positioning and sizing**
- **Custom keyframe animations** (@keyframes waves)
- **Text stroke effects** (webkit-text-stroke patterns)
- **Complex hover states with ::before/::after**
- **CSS variables / design tokens** (:root)
- **Browser-specific fixes** (-webkit-, -moz-)

### Tailwind Utilities (in JSX/TSX)
Use Tailwind for:
- **Layout spacing** (p-4, mx-auto, gap-6)
- **Responsive breakpoints** (sm:, md:, lg:, xl:)
- **Flexbox/Grid** (flex, grid, items-center)
- **Colors** (bg-[#FF96B2], text-white)
- **Typography** (text-2xl, font-bold)
- **Simple states** (hover:scale-105, active:opacity-80)
- **Borders and shadows** (rounded-full, shadow-lg)

## Migration Strategy

### Phase 1: Consolidate (Current)
Move existing component CSS into `styles/bananamilk.css`:
- Home-styles.css → bananamilk.css (gradient-text, custom-shape-divider)
- Navbar-styles.css → bananamilk.css (hover-underline-animation)

### Phase 2: Component Library
Build new TypeScript components in `/components/bananamilk/`:
- BananaMilkLayout (replaces Navbar + Footer)
- ProductGrid (responsive grid utility)
- ProductCard (standardized card with hover)
- Button (consistent button styles)
- HeroSection (reusable hero patterns)
- CurvedSection (SVG curve wrapper)

### Phase 3: Refactor Existing Pages
Update existing pages to use new components:
- Home.jsx → use HeroSection, ProductGrid, ProductCard
- Shop.jsx → use ProductGrid, ProductCard
- Maintain visual identity while improving structure

## Import Pattern

```tsx
// In component files
import '../../styles/bananamilk.css' // For complex CSS patterns
// Then use Tailwind utilities inline for layout/spacing

// Example:
<div className="bm-container py-8 sm:py-12"> {/* Tailwind spacing */}
  <h1 className="gradient-text1 text-7xl font-sanggar"> {/* CSS gradient + Tailwind size */}
    Heading
  </h1>
</div>
```

## CSS Modules Alternative (Future Consideration)

If scoping becomes an issue, consider CSS Modules:
```tsx
// styles/BananaMilk.module.css
.gradientText1 { /* complex gradient */ }

// Component
import styles from './BananaMilk.module.css'
<h1 className={`${styles.gradientText1} text-7xl`}>Heading</h1>
```

Benefits:
- Automatic scoping prevents conflicts
- Co-locate styles with components
- Type safety with TypeScript

## Naming Convention

### CSS Classes (bananamilk.css)
- Prefix with `bm-` for BananaMilk-specific: `.bm-container`, `.bm-product-grid`
- Use kebab-case: `.gradient-text1`, `.text-stroke-white`
- Utility classes: `.hide-mobile`, `.hide-desktop`

### Tailwind Classes
- Use default Tailwind naming
- Extend in tailwind.config.js for brand colors:
  ```js
  colors: {
    'banana-milk-pink': '#FF96B2',
    'banana-milk-blue': '#7AA9FF'
  }
  ```

## Best Practices

1. **Start with Tailwind** - Use utilities first for simple styles
2. **Extract to CSS** - Move complex patterns to bananamilk.css when:
   - Pattern repeats 3+ times
   - Involves pseudo-elements (::before, ::after)
   - Requires vendor prefixes
   - Uses keyframe animations
3. **Document decisions** - Add comments explaining why custom CSS was needed
4. **Maintain consistency** - Don't duplicate styles between CSS and Tailwind
5. **Responsive first** - Always design mobile-first, enhance for desktop
