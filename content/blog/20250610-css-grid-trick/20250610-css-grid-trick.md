---
title: "Cool CSS Grid trick I learned today"
description: "A simple technique for creating responsive layouts without media queries using CSS Grid's auto-fit and minmax functions."
date: 2025-06-10
type: quick
tags:
  - web development
  - CSS
---

## CSS Grid Auto-Responsive Layout

Just discovered this neat trick:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

This creates a responsive grid that:
- Automatically fits as many columns as possible
- Each column is minimum 250px wide
- Remaining space is distributed equally
- No media queries needed!

Perfect for card layouts, image galleries, or any repeated content.

The `auto-fit` vs `auto-fill` difference:
- `auto-fit`: Collapses empty tracks
- `auto-fill`: Keeps empty tracks, maintaining consistent sizing

Small thing, but it's these little discoveries that make CSS feel magical sometimes.
