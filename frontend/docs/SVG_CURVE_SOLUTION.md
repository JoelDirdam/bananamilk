# SVG Decorative Curve - Responsive Solution

## Problem
The SVG curves used in BananaMilk can appear cropped, stretched, or misaligned on different screen sizes, especially mobile devices.

## Solution 1: CSS-Based Fix (Recommended)

### Implementation
Use the `CurvedSection` component wrapper:

```tsx
import CurvedSection from '@/components/bananamilk/CurvedSection'

<CurvedSection 
  backgroundColor="#FFB8CB"
  curveColor="#FFF"
  curvePosition="top"
  className="min-h-[80vh] flex items-center justify-center"
>
  <div className="bm-container">
    {/* Your content here */}
  </div>
</CurvedSection>
```

### How It Works
1. **viewBox**: Defines intrinsic coordinate system (0 0 1500 120)
2. **preserveAspectRatio="none"**: Allows non-uniform scaling
3. **Container positioning**: Absolute positioning with overflow:hidden
4. **Responsive heights**: 
   - Mobile: 150px
   - Tablet: 200px
   - Desktop: 259px

### CSS (in bananamilk.css)
```css
.custom-shape-divider-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top svg {
  position: relative;
  display: block;
  width: 100%; /* Always full width */
  height: 150px; /* Mobile default */
}

@media (min-width: 640px) {
  .custom-shape-divider-top svg {
    height: 200px; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .custom-shape-divider-top svg {
    height: 259px; /* Desktop */
  }
}
```

## Solution 2: Conditional Rendering (Alternative)

For cases where you need completely different curves for mobile vs desktop:

```tsx
'use client'

import { useState, useEffect } from 'react'

export default function AdaptiveCurve() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="custom-shape-divider-top">
      {isMobile ? (
        // Simplified mobile curve
        <svg viewBox="0 0 800 80" preserveAspectRatio="none">
          <path d="M0,40 Q400,80 800,40 L800,0 L0,0 Z" fill="#FFF" />
        </svg>
      ) : (
        // Complex desktop curve
        <svg viewBox="0 0 1500 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86..." fill="#FFF" />
        </svg>
      )}
    </div>
  )
}
```

## Key Principles

1. **Always set viewBox** - Defines SVG's internal coordinate system
2. **Use preserveAspectRatio="none"** - Allows stretching to fit container
3. **Container overflow:hidden** - Prevents visual artifacts
4. **Responsive heights** - Scale curve height at breakpoints
5. **Width: 100%** - Always span full container width

## Testing Checklist

- [ ] No gaps between curve and section on mobile
- [ ] No gaps between curve and section on tablet
- [ ] No gaps between curve and section on desktop
- [ ] Curve scales smoothly during window resize
- [ ] No horizontal scrollbar appears
- [ ] Aspect ratio maintained (no severe distortion)
- [ ] Works in portrait and landscape orientations

## Common Pitfalls to Avoid

❌ **Don't**: Set fixed width and height on SVG
❌ **Don't**: Use `preserveAspectRatio="xMidYMid meet"` (creates gaps)
❌ **Don't**: Forget overflow:hidden on container
❌ **Don't**: Use percentage-based heights (inconsistent)

✅ **Do**: Use viewBox for scaling
✅ **Do**: Use preserveAspectRatio="none" for full stretch
✅ **Do**: Set explicit pixel heights at breakpoints
✅ **Do**: Test on real devices, not just browser resize
