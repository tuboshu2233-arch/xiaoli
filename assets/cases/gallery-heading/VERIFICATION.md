# Verification — 2026-11-12

- Read the complete three-file source bundle before project implementation; all supplied SHA-256 hashes matched on retrieval and after integration. Build verifies the exact registered files before bundling.
- Configured props match the user request. Caption customization and pointer forwarding live in src/main.tsx, outside the original registered files.
- Production build succeeded. Parent catalog and new JS bundle syntax checks passed. Parent HTML, catalog script, case HTML, bundle JS and CSS returned HTTP 200.
- Browser at 960 × 707: title reads Website / Home Style, matte procedural plates, original tilt, grain and front/back text occlusion render correctly. Source-authored 400 sans typography and size retained, with width adapted proportionally for the shorter text.
- Browser at 390 × 700: entire source composition remains visible, no horizontal overflow. Evidence: ../../../qa/gallery-heading/mobile.png.
- Early pointer checks inside nested iframe did not start animation. Added the application-level forwarding surface, using the source's existing runtime message channel. No motion algorithm was replaced.
- After correction, actual browser screenshots before and during interaction differ over scene bounds (239,184)–(721,561). Evidence: ../../../qa/gallery-heading/desktop-rest.png and desktop-active.png.
- Escape updates the accessible control to stopped, and two captures after spring settling are pixel-identical: stopped-a.png and stopped-b.png. This verifies stopping independently from button state.
- In collection iframe: activating preview changes aria-pressed to true; moving focus outside to the collection heading changes it back to false. Parent collection shows four homepage cases and 24 total built-in cases.
- Final warning/error list empty. Temporary viewport override reset and the collection tab retained.
- Collection proof: ../../../qa/gallery-heading/collection.png. The original first-pass desktop-hover.png was captured before pointer forwarding was fixed; it is not successful-motion evidence.
- Physical phone input and operating-system reduced-motion preference were not separately tested. The source's rendering and spring constants remain unchanged.

Result: passed for local implementation, source integrity, rendered scene and tested start/stop interactions.

## Direct drag and card slowdown — 2026-11-13

User clarification supersedes the initial speed-boost interpretation: dragging must move the orbit with the pointer, upward and downward, rather than merely increase automatic speed.

`src/motion-extension.mjs` now extends the generated clock while original vendor files remain hash-identical. While dragging, the automatic clock yields control and pointer coordinates are inverse-projected into the ring plane. Unwrapped pointer-angle differences update orbit phase directly. Both drag directions work on either side of the projected ring; a centre dead zone and wrapped seam avoid full-revolution jumps. Release reconnects to the authored spring, respecting the last drag direction. Pointer capture, cancellation, blur and Escape cleanup are handled in the application layer.

Card hit testing uses the same projected tangent/axis basis, 4:3 aspect and rounded silhouette as drawing. Hovering a card sets a smooth signed target speed of 0.24; off-card speed remains 1.0. The runtime report exposes the real current motion mode and speed in the visible preview footer, rather than test-only hidden state.

Checks passed:

- Mathematical tests for up/down signs on left and right halves, angular seam continuity, perspective inverse mapping at six phases, centre dead zone, rounded-corner exclusion and directional slowdown targets.
- Browser drag from (315,392) to (315,302) moved the muted red card from the left/lower part of the ring to the upper/left. Reverse drag from (265,280) to (265,400) returned the same card downward. Escape froze each view for evidence capture.
- Evidence at 960 × 707: `../../../qa/gallery-heading/drag-before.png`, `drag-up.png`, `drag-down.png`, combined as `directional-drag-proof.png`.
- Visible feedback read `卡片减速 · 0.24×` after hovering the card. Screenshot: `card-slowdown.png`.
- Narrow browser layout checked at 390 × 700; screenshot `drag-mobile.png`. Physical phone gestures were not separately exercised.
- Browser warning/error list empty. Parent collection loads child index v4 and displays the updated caption. Temporary viewport override reset and preview tab retained.
- Production build, JS syntax checks, and all three registered source hashes passed.

Result: passed for direct bidirectional dragging and card-hover slowdown. Earlier notes about an unmodified motion algorithm describe the original integration; the requested custom clock extension is now explicitly applied at build time.
