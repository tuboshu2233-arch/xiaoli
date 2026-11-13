# Browser verification — 2026-11-13

- Existing 24 catalog cases preserved; six new standalone previews added.
- All eight React Bits JSX/CSS source files match their registry snapshots during build.
- All 58 UseAnimations JSON files parse and contain animated layers.
- Browser: third-level navigation renders under icon交互 → 单icon; selecting 悬停 loads the correct 21-icon gallery.
- Click-toggle: Menu aria-pressed changes false → true → false.
- Search: 菜单 filters to four menu variants, clearing restores the gallery.
- Hover: Calendar rendered SVG changes on entry/focus and returns byte-for-byte to its original SVG after exit/blur.
- Mobile: 375px viewport has no horizontal overflow; icon gallery uses two columns and renders all 37 SVG icons; navigation drawer exposes both third-level categories.
- DepthCarousel: all five images load, slide 4 selected by indicator, Next advances to slide 5.
- AnimatedList: selecting Launch hero.png updates the visible selection status.
- CardNav: Menu expands three cards, Careers selection closes navigation and reports /careers locally.
- ScrollStack: contained viewport is 600px high; scrolling reaches scrollTop 992 and scales prior cards to 0.9 and 0.95 behind the third card.
- No error or warning logs observed in the checked previews.

Screenshots: icon-navigation.png, icon-mobile.png, depth-carousel.png, scroll-stack.png.
