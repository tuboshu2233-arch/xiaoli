# Verification — 2026-11-12

- MaskedHeading.jsx and MaskedHeading.css equal the exact content of the fetched registry JSON. Original source unchanged.
- Installed case-local dependencies: GSAP 3.15.1 (satisfies ^3.13.0), React / React DOM 19.2.6, esbuild 0.28.2. Lockfile included.
- Case production build and parent/bundle syntax checks passed. Explicit automatic JSX setting produces the identical browser-verified bundle hash.
- Browser verified desktop 960 × 707 and mobile 390 × 700, collection 1440 × 1250. Mobile horizontal scroll width equals viewport width.
- Video decoded at 960 × 540, readyState 4, playing automatically in standalone and sandboxed iframe. Pausing changes actual video state; replay remounts heading and restarts scale reveal.
- Pointer interaction updates 180px spotlight position and media transform; rendered transform retains scale 1.3. Native pointer check showed translate3d displacement.
- Console warning/error list empty in final browser checks.
- Collection shows this case under 网站交互 → 首页 together with existing gallery and glass cases. Total seed count 23.
- Screenshots: ../../../qa/masked-heading/desktop.png, ../../../qa/masked-heading/mobile.png and ../../../qa/masked-heading/collection.png.
- Temporary viewport override reset; collection preview left open.
- Source video is the official React Bits demo at https://reactbits.dev/assets/video/masked-heading.mp4. Local poster extracted at 0.2 seconds. Media paths use ./reel.mp4 and ./reel-poster.jpg because the case runs in its own subdirectory.
- Physical touch-device and reduced-motion OS preference were not separately exercised; upstream reduced-motion handling remains unchanged.

## Copy revision

Main headline changed to Website Home Style to match the glass case. Report-gallery headline updated to the same words, retaining its two-line title entrance. Both rendered at 960 × 707 and checked in browser; no warnings/errors. Rebuilt masked-heading bundle and refreshed collection source metadata/cache versions. Existing effects and third-party component source unchanged.
