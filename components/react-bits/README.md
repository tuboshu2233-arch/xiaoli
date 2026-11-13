# Collection component integrations

Build from this directory with `npm ci` then `npm run build`.
The build checks that the four React Bits JSX/CSS files match their saved registry content exactly, then emits six standalone previews under `assets/cases`.

## Sources

- https://reactbits.dev/r/DepthCarousel-JS-CSS.json
- https://reactbits.dev/r/AnimatedList-JS-CSS.json
- https://reactbits.dev/r/ScrollStack-JS-CSS.json
- https://reactbits.dev/r/CardNav-JS-CSS.json
- https://useanimations.com/icons.json
- https://useanimations.com/zh/interactions/click-toggle
- https://useanimations.com/zh/interactions/hover

Registry snapshots are stored alongside each upstream component. Integration wrappers are separate from upstream source. Runtime dependencies are isolated here to keep the existing static collection and the root report app independent.

UseAnimations includes all 37 click-toggle icons and all 21 hover icons listed in the official index on 2026-11-13. The downloaded Lottie JSON files are kept in each case's `icons` directory and bundled via static imports, so sandboxed previews need no network requests. Original forward/reverse interaction is preserved, with keyboard, touch fallback, search, reset, and reduced-motion handling added in the gallery wrapper. Source license metadata is recorded in each case's `source-info.json` (MIT).

DepthCarousel uses the requested settings and five sample photos cached locally. The requested Picsum endpoint returned HTTP 522 during implementation, so the photos use Unsplash sample images recorded in the case's `image-sources.json`. CardNav links show their target inside the local preview instead of opening nonexistent routes.
