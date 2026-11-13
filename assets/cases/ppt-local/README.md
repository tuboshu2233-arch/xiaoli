# PPT carousel local effects

Four standalone vanilla HTML/CSS/JS components share `demo.js` and `style.css`; each case's `index.html` selects its configuration. No runtime network requests or build step are needed. Serve the interaction-library directory on the existing local server.

- `ppt-cover`: three persistent regenerated high-resolution image cards, continuous position/scale animation and layer exchange. Side-card clicks, swipe and arrow keys; manual by default.
- `ppt-carousel`: regenerated high-resolution restaurant cards with live navigation lettering and vector previous/next buttons. Five full-resolution restaurant images, each 1254 × 1254.
- `ppt-overlap`: full-width incoming layer enters from the left; previous enters from the right. Regenerated photographs replace the recording's flat color placeholders, preserving the user's earlier request to include images. Includes live arrows, dots, automatic playback and swipe.
- `ppt-mobile`: banner only, retaining the original wide aspect ratio. Three regenerated text-free backgrounds and live HTML headlines/subtitles replace the old frame crops; three native indicator buttons correspond to the local banners. End clones keep the carousel continuous. The original-reference view is also cropped to the banner.

Current image assets are in `assets/generated/carousel-hd/`; complete built-in image_gen prompts, actual dimensions and PNG/WebP paths are recorded in `generation-prompts.json` there. Original source assets remain under `assets/ppt` for movement comparison. Earlier crop/frame provenance is recorded in `verification/ppt-carousel-reference/local-source-assets.json`. Only banner crops are used by this component. No status bar, navigation, feed or other mobile-page content is rendered.

The optional original-animation comparison pauses local autoplay, preserves local selection, and returns to the live component. Auto playback pauses for pointer hover, keyboard focus, hidden pages and comparison mode. Reduced-motion preference disables automatic playback on load and removes animated movement.

Arrow assets were generated from the installed official `@hugeicons/core-free-icons` ArrowLeft01Icon / ArrowRight01Icon data. License is retained in HUGEICONS-LICENSE.md. The earlier per-case `src` folders are retained historical implementations; the current entry points use this shared directory.
