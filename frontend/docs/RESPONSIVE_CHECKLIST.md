# BananaMilk Responsive Retrofit - Validation Checklist

## Mobile Navigation (< 640px)
- [ ] Hamburger menu appears on mobile
- [ ] Mobile menu slides in from right
- [ ] Mobile menu overlay darkens background
- [ ] Mobile menu closes when clicking overlay
- [ ] Logo scales appropriately
- [ ] Navigation items stack vertically
- [ ] Action buttons (wishlist, order, contact) display as full-width items

## Product Grid
- [ ] 1 column on mobile (< 640px)
- [ ] 2 columns on tablet (640-1024px)
- [ ] 3 columns on small desktop (1024-1280px)
- [ ] 4 columns on large desktop (≥1280px)
- [ ] Cards maintain aspect ratio across breakpoints
- [ ] Hover states work on desktop
- [ ] Touch states work on mobile

## Hero Section
- [ ] Text scales fluidly with clamp()
- [ ] Text stroke width adapts to screen size
- [ ] CTA button remains readable and tappable (min 44px height)
- [ ] Background image covers properly on all screens
- [ ] Content remains centered and legible

## SVG Curves
- [ ] Curves maintain aspect ratio on mobile
- [ ] No gaps or overflow on any breakpoint
- [ ] Curves scale smoothly during resize
- [ ] viewBox preserveAspectRatio works correctly

## Typography
- [ ] All text uses fluid sizing (clamp())
- [ ] Text stroke effects scale appropriately
- [ ] Minimum font size is 14px for body text
- [ ] Line height provides good readability (1.4-1.6)
- [ ] Custom fonts load correctly on all devices

## Forms & Inputs (if applicable)
- [ ] Inputs are minimum 44px tall for touch targets
- [ ] Form fields stack on mobile
- [ ] Submit buttons are full-width on mobile
- [ ] Labels remain visible and associated

## Footer
- [ ] Three-column layout on desktop
- [ ] Stacks to single column on mobile
- [ ] Social icons remain tappable (min 44x44px)
- [ ] Links have adequate spacing for touch
- [ ] Copyright text remains readable

## Cart/Drawer (if applicable)
- [ ] Cart drawer slides from side on mobile
- [ ] Cart summary stacks vertically on mobile
- [ ] Product images scale appropriately
- [ ] Checkout button remains accessible

## Performance
- [ ] Images use responsive sizes (srcset/sizes)
- [ ] Custom fonts load with font-display: swap
- [ ] No layout shift during load (CLS)
- [ ] Smooth scroll behavior on mobile
- [ ] Touch gestures work smoothly

## Accessibility
- [ ] Keyboard navigation works throughout
- [ ] Focus states visible on all interactive elements
- [ ] Mobile menu has proper ARIA labels
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Color contrast meets WCAG AA standards
- [ ] Touch targets are minimum 44x44px

## Browser Testing
- [ ] Chrome/Edge (desktop & mobile)
- [ ] Safari (desktop & iOS)
- [ ] Firefox (desktop & mobile)
- [ ] Landscape and portrait orientations work
