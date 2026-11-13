# Regenerated high-resolution carousel imagery — QA

Date: 2026-11-13. Scope: user requested fresh images because the PPT frame crops were blurry. Motion, carousel layout and Banner-only scope retained.

## Findings resolved

- P1: original photo crops were only 170–337px wide and blurred when enlarged. Replaced all 11 consumed images with newly generated assets: mountains 1672 × 941; restaurants 1254 × 1254; banner backgrounds 2172 × 724 or 2243 × 701.
- P1: Chinese Banner headings and restaurant navigation copy were baked into low-resolution bitmaps. They are now live HTML lettering; restaurant controls use licensed vector arrows. No low-resolution indicator mask is needed on the new text-free backgrounds.
- P2: the regenerated home illustration's roof approached the crop edge. Its image uses top alignment to preserve the roof; inspected in the desktop rendering.

## Source / output records

Generation mode: built-in image_gen. Complete exact prompts and actual dimensions: `assets/generated/carousel-hd/generation-prompts.json`. Original generated PNG files are copied into the workspace under `assets/generated/carousel-hd/source/`. Served WebP files retain native generated dimensions at quality 96.

All eleven full-size generation outputs were inspected for subject, framing, sharpness and text. The five restaurant signs read 海鲜小馆 / 螺蛳粉 / 串串香 / 煎饼铺 / 街角食堂. The banner backgrounds contain no baked copy, controls or logos. New content is intentional under the regeneration request; the PPT remains a motion reference.

## Browser evidence

- `verification/carousel-hd/restaurant.png`: 900 × 700 CSS viewport, sharp restaurant imagery and live HTML/vector navigation inspected together. Next changes selection from 螺蛳粉餐厅 to 串串香餐厅.
- `verification/carousel-hd/banner-mobile.png`: 375px-wide viewport; live Chinese title fits, no horizontal overflow, banner-only display preserved.
- `verification/carousel-hd/banner-library.png`: 1280 × 1000 CSS viewport, final surrounding site with regenerated background and crisp live copy.
- All four local cases checked at 375px width: body width equals viewport, all images load. Natural dimensions confirmed from rendered img elements; no low-resolution frame crop is consumed.
- All banner headings have scrollWidth <= clientWidth in narrow rendering. Dots and Next still switch selection. Desktop home composition inspected; roof and headline remain visible.
- No browser errors or warnings observed. Temporary viewport override reset for handoff.

## Fidelity surfaces

Typography uses normal browser-rendered Chinese text, with correct copy and no baked blur. Image subjects retain the earlier mountain/restaurant/shopping themes while becoming new AI-generated demonstration assets. Native image dimensions exceed the displayed card sizes. Existing layout, aspect ratios, white canvas, controls and motion remain consistent. Banner ink colors retain readable contrast on the three backgrounds. Source metadata now explicitly says AI-generated imagery.

No actionable P0/P1/P2 issues remain.

final result: passed

---

# Earlier QA reports (retained)

# PPT local carousel effects — Design QA

Date: 2026-11-13. Latest scope: user confirmed the PPT animations as the reference and requested real local interactions. Additional instruction: mobile case must contain only the Banner.

## Findings and fixes

- Resolved P1: original-media playback did not provide live card controls. Four cases now use native HTML/CSS/JS components with persistent image nodes and real interactions.
- Resolved P1: mobile original included the complete homepage. Both local and reference modes now clip to the 582 × 180 Banner; status bar, search, shortcuts and feed are absent.
- Resolved P1 from the earlier implementation: center images previously swapped without continuous movement; cards now translate, scale and exchange layer positions. Incoming covering slides span the entire viewport and enter from the left; reverse uses the opposite direction.
- Resolved P2 during implementation: switching reference mode midway through a Banner transition could leave a pending transition. Reference switching now settles the track and clears queued movement before hiding it; returning and clicking Next verified.
- Resolved P2: hidden/offscreen cards and loop clones were exposed as duplicate images to screen readers. Hidden cards and decorative preload/track content now use aria-hidden; the current slide is named on the carousel region and controls retain accessible labels.

## Visual truth, capture and comparison

Source: `/Users/liyiheng/Desktop/分享.pptx`, slides 24–26; original assets `assets/ppt/image23.webp` through `image26.webp`.

Traceable frame/crop manifest: `verification/ppt-carousel-reference/local-source-assets.json`. Original animated assets remain unchanged.

Implementation: `assets/cases/ppt-local/demo.js` / `style.css`, selected by each existing case's index.html.

Opened and inspected combined source/local comparison: `verification/ppt-local/source-local-comparison.jpg`.

| Case | Browser full screenshot | Source content / browser content | CSS viewport |
| --- | --- | --- | --- |
| Mountain card carousel | cover-initial-full.png | 500 × 216 / 500 × 216 | 540 × 320 |
| Restaurant carousel | restaurant-initial-full.png | 744 × 447 / 744 × 447 | 784 × 551 |
| Banner only | banner-initial-full.png | 582 × 180 crop / 582 × 180 | 622 × 284 |

All screenshots above live under `verification/ppt-local/`. Content crops remove the 44px toolbar, 28px footer and 16/20px canvas padding, and normalize to equal 1× pixels before comparison. `cover-initial.png`, `restaurant-initial.png`, `banner-initial.png` are these normalized crops.

Full-view comparison covers the complete source canvas at native size. Focused image/overlap/control and Banner lettering/indicator regions are directly readable in that same paired image; no separate enlargement was needed. `covering-transition-full.png` captures the full-width incoming-image layer in motion. Final surrounding-site capture: `banner-library.png`; narrow Banner: `banner-mobile.png`.

## Fidelity surfaces

- Typography: source image lettering, restaurant signage and original restaurant control artwork retained. Host toolbar/footer use the existing neutral collection style.
- Layout: measured main/side image centers, scale ratios, card aspect ratios, restaurant control placement and covering viewport bounds. First mountain layout and restaurant layout align with the source. Banner intentionally excludes the rest of the page.
- Colors: source imagery and light background retained. Covering demo intentionally uses source photographs in place of abstract color cards, preserving the earlier instruction to fill cases with images. This is an intentional content substitution, not a new movement pattern.
- Image quality: every picture is a real crop from the provided PPT animation. Two restaurant side images only exist at smaller resolution in the source. Source compression is preserved rather than substituting invented art. Arrows use the installed official Hugeicons library with license retained.
- Copy/content: no added headings inside the source cards. Banner has three actual source images and three corresponding live indicators; original recorded indicators are covered. Product instructions describe controls, not implementation steps.

## Interaction verification

- Mountain: side-card click updates selection; measured intermediate card widths 152.9px / 207.1px demonstrate simultaneous translation and scale, settling to 144px / 216px. Native Right key changes slide. Real mouse drag changes slide once and suppresses a stray click.
- Restaurant: Next changes current image from 螺蛳粉餐厅 to 串串与鸭肠餐厅 and updates 02/05 to 03/05.
- Covering: incoming layer equals the 488px-wide viewport and begins translated -488px. After completion the incoming layer hides and the base becomes the selected photograph.
- Banner: direct third-indicator selection works; Next from third reaches first via the end clone and then resets track from -400% to -100% without a visible reverse jump. Reference mode returns to a functional local slider. Automatic playback advances the current selection; manual pause works.
- Embedded site Banner Next changes the current slide and counter inside the sandboxed iframe.
- All four cases at 375px width have no horizontal overflow and all local images load.
- Checked browser console: no warnings or errors. Temporary viewport override reset at handoff.

## Comparison history

1. Earlier original-media build matched source appearance but lacked real controls for the newly requested scope; current local build removes that functional gap.
2. Source-derived component first frames captured and compared at equal dimensions; Banner reference is cropped per latest instruction.
3. Transition/reference accessibility fixes applied and checked again. No remaining actionable P0/P1/P2 findings.

## Follow-up polish

P3: recorded source image resolution and side-image crops limit sharpness when enlarged. Timing/easing is reconstructed from the reference rather than recovered authoring code. These do not block the requested local controls or source composition.

final result: passed

---

# Earlier QA reports (retained for history)

# PPT carousel source restoration — Design QA

Date: 2026-11-13. Scope: four original PPT carousel cases, preserving the two React Bits cases and the collection navigation.

## Findings and corrections

- Resolved P1: generic image swaps and entrance animation replaced the source's continuous translation, scaling, and front/back exchange. The old cover capture is `verification/ppt-carousel-reference/before-cover.png`; source is image25.
- Resolved P1: a permanent right-side picture replaced full-width covering motion. Original image26 shows the incoming layer covering the complete frame.
- Resolved P1: generic landscape images and a standalone banner replaced the source restaurant images and complete mobile-page context.
- Fix: use the exact four original animated WebP files from the PPTX, rather than approximating their animation. Existing stable case IDs and source links are retained. A visible original-animation label explains that actions inside the recording are recorded, while the player provides working pause/play.

## Source and implementation evidence

Source file: `/Users/liyiheng/Desktop/分享.pptx`.

Source visual truth and browser captures under `verification/ppt-carousel-reference/`:

| Case | Source first frame | Browser capture | CSS viewport | Content pixels |
| --- | --- | --- | --- | --- |
| Main/side images | image25-first.png | after-ppt-cover.png | 500 × 284 | 500 × 216 |
| Button carousel | image24-first.png | after-ppt-carousel.png | 744 × 515 | 744 × 447 |
| Covering carousel | image26-first.png | after-ppt-overlap.png | 640 × 388 | 640 × 320 |
| Mobile banner | image23-first.png | after-ppt-mobile.png | 582 × 1104 | 582 × 1036 |

State: paused first frame, all four cases. Source and browser images normalized to equal 1× pixel dimensions. Browser viewer header 44px and footer 24px excluded from content-only comparison. A clipping-capture artifact in the third case was discarded; recaptured the complete browser viewport and cropped its measured image region.

Full-view paired comparison opened and inspected: `source-browser-comparison.jpg`. Focused paired comparison opened and inspected: `focused-comparison.jpg`, showing the mobile banner text/dots and mountain-card overlap.

## Required fidelity surfaces

- Typography: source lettering stays in the original raster asset, including restaurant signage, source control labels and mobile text; no substituted fonts or added captions inside the source image.
- Spacing/layout: original composition and front/back proportions preserved; contain fitting prevents distortion or cropped source content. Complete mobile page is shown.
- Colors/tokens: original pixel palette and backgrounds retained; surrounding website remains unchanged.
- Images: asset bytes and hashes match the PPTX entries exactly, with 34 / 13 / 97 / 181 frames retained. Hash manifest: `original-assets.json`.
- Content/copy: all source content preserved; player and gallery captions clearly state original animation and recorded interactions.

## Browser verification

Four gallery cases load their original assets at natural dimensions. Gallery pause switches to first-frame poster, play restores the original WebP. Standalone player pause/play and replay inspected. Original covering motion observed during playback. Console errors checked; none observed. Temporary viewport overrides reset.

## Comparison history

1. Before: mismatched images, dark themed source canvas, fixed side overlay and substitute movement — blocked (P1).
2. Restored exact source animations, captured equal-size first frames, compared full views and focused details — no remaining actionable P0/P1/P2 findings.

## Follow-up polish

Source assets include the original recording's limited resolution/compression. This is retained rather than inventing higher-resolution replacement content. No unresolved implementation issue.

final result: passed

---

# Earlier QA reports (retained)

# Glass homepage — Design QA

Date: 2026-11-12. Scope: new glass homepage case and 网站交互 navigation.

## Source and capture conditions

- Visual source: `/Users/liyiheng/Desktop/design-world-a0fb7dcdc477.mp4`, approximately 6.93 seconds. Inspected extracted 960 × 707 frames from throughout the recording.
- Local case: `http://127.0.0.1:4317/assets/cases/glass-home/index.html`.
- Collection: `http://127.0.0.1:4317/#category=首页&example=glass-home`.
- Desktop comparison: 960 × 707 CSS px, density 1; first title, paused rotation.
- Narrow case: 390 × 700 CSS px. Collection checked at 390 × 844 and 1440 × 1250 CSS px. Temporary viewport overrides reset at handoff.

## Visual evidence

- `qa/glass-home/comparison.png`: source and actual browser rendering side by side, same viewport.
- `qa/glass-home/glass-detail.png`: corresponding central glass regions.
- `qa/glass-home/desktop.png`, `mobile.png`: standalone browser captures.
- `qa/glass-home/collection-desktop.png`, `collection-mobile.png`: integration with surrounding collection UI.

The comparison preserves the black field, three large centered white lines, upper brand/navigation, circular arrows, right dots, bottom manifesto/button/rule and clipped outlined number. Header and footer are live UI; the center uses sharp canvas typography so the glass can refract it. Supplied logo/arrow crops retain their aspect ratios. The heavy sans-serif typography, title scale, spacing and monochrome palette were compared together with the source. Copy intentionally changes to Website / Home / Style, Design Index, Home / Work / About, and a website-focused footer, as authorized by the user.

The cube is a live beveled glass mesh with transmission and blue/yellow dispersion. Its face warping, exact orientation and refraction pattern are an approximation of the recording, rather than an identical recovered source model or shader. This remains a P3 visual fidelity limitation for later refinement; the source recording is retained beside the case.

## Findings resolved

- P1: keyboard focus could scroll the clipped hero internally and displace the layout. Replaced overflow hidden with overflow clip; recaptured after focusing controls.
- P2: initial cube too large and reflective. Reduced size and reflection, adjusted glass transmission/dispersion, recaptured desktop comparison.
- P1: resizing reused a GPU texture allocation with different canvas dimensions, producing stale/compressed text. Recreate and dispose the texture when its dimensions change; verified 390 → 960 and collection resizes.
- P1: narrow collection iframe could collapse to intrinsic height and center within the preview. Position the case iframe against the preview bounds; verified complete 390 px embedded hero without internal scroll clipping.

## Interaction and runtime checks

- Website navigation expands to 首页 then 交互. Both categories can be selected; the empty interaction category renders its empty state.
- Home/Work/About, next, Explore and keyboard left arrow change the title and corresponding indicators. The cycle wraps from the third title to the first.
- Drag visibly rotates the glass. Double-click resets drag orientation; pause/resume updates the visible motion control. Auto movement restored for handoff.
- Work also switches the title within the sandboxed collection iframe. The iframe reports the WebGL renderer initialized.
- Browser console returned no warnings or errors at final integration check.
- Main bundle and parent app syntax checks passed. Motion-function checks covered slide wrapping, finite responsive typography and changing rotation input.
- Parent page, scripts/styles, new case and its three image assets/reference video returned HTTP 200.
- No external CDN/runtime API dependency. Original recording is accessible as the WebGL-unavailable fallback.

Final result: passed for the requested local prototype. No unresolved P0/P1/P2 findings in this scope. P3: exact source glass optics remain approximate, and touch behavior was checked through narrow browser layout rather than a physical phone.

## Readability revision — 2026-11-12

User requested clearer underlying text. Reduced material IOR from 1.43 to 1.08, optical thickness from 2.65 to 0.65, and dispersion from 3.2 to 1.3. Kept cube geometry and motion unchanged. Browser inspection of the embedded desktop case shows the three title lines readable through the glass with substantially less duplication. Evidence: `qa/glass-home/refraction-readable.png`. Final browser warning/error list empty; viewport override reset. The lighter refraction intentionally supersedes the stronger optics shown in the original comparison screenshots.

## Volume sampling revision — 2026-11-12

Supersedes the low-IOR revision above. Restored IOR 1.43; dispersion 1.6. Added `src/glass-optics.js` to intersect the rounded volume and refract at entry/exit, then intersect the actual title plane and sample its full-resolution texture directly. Matrix and title-plane uniforms follow object motion, resizing and texture replacement. Removed the artificial sinusoidal face deformation. Raised renderer pixel-ratio cap to 2; title sampling bypasses the reduced transmission framebuffer.

A fully solid-prism rendering was tested but produced large unreadable regions from internally reflected/outgoing rays. The final homepage uses deliberate graphical constraints: smooth handling of critical exit angles, a single transmitted title instead of internal-reflection copies, and bounded displacement in title UV coordinates (horizontal 0.045, vertical 0.016). Blue/yellow spectral offsets strengthen at grazing angles. These are art-direction choices for legible typography, not a claim of an exact physical reconstruction of the source.

Evidence: `volume-comparison.png` at matched 960 × 707 dimensions, `volume-desktop.png`, `volume-drag.png`, `volume-mobile.png` (390 × 700) and `volume-collection.png` (1440 × 1250). Current white letter cores remain on their original line while faces and bevels distort them. Typeface/layout/copy unchanged. The source still differs in exact cube orientation, highlights and optical pattern; the revised sampling addresses the large wrong-row repetitions rather than claiming pixel identity.

Verified in browser: drag changes view, double-click resets view, next title updates title/indicators, Home restores initial title, resizing rebuilds the title texture, and the collection iframe loads bundle v12. Final v12 warning/error list empty. An early development v8 shader failed compilation due to missing declarations; declarations fixed before final validation. Bundle syntax check passed. Temporary viewport override reset; collection left running automatically.

Result: passed for the requested prototype revision. P3: exact reference optics and frame-rate behavior on a physical phone remain unverified.

## Optical softness revision — 2026-11-12

Finding P2: the prior title texture was sampled sharply, the displacement bound was overly tight, and roughness was zero. User feedback identified an overly clear pane rather than thick refracting glass. Added a normalized nine-tap optical blur to the transmitted title only; its CSS-pixel radius varies with traversed depth, view angle and bevel location. Increased allowable displacement with stronger deformation at bevels, roughness to 0.065, clearcoat to 0.22, and environment/specular response. IOR remains 1.43. Outside text remains sharp. The blur kernel weights total one, maintaining title brightness.

Evidence: `optical-soft-comparison.png` pairs the 960 × 707 reference and browser capture; `optical-soft-detail.png` pairs corresponding center/lower regions. New `optical-soft-desktop.png` and `optical-soft-mobile.png` show the actual implementation. Same title, black theme, 960 × 707 desktop and 390 × 700 mobile CSS dimensions at density 1; rotation phase is approximate. Reviewed full composition and focused letter edges: visible soft transmission and spectral borders now differ from the crisp outside type; the bottom word remains recognizable. Font family/weight, spacing, header/footer layout and copy unchanged. Exact highlight shape, blue hue and geometry orientation remain P3 reference differences.

Checked paused view, drag to a second angle, double-click reset, mobile resize, and automatic playback in collection iframe. v13 renderer returned no warning/error entries; bundle syntax passed; iframe script src confirmed v13. Temporary viewport override reset. Result: passed for this requested optical-softness adjustment. Physical-phone performance remains unverified.

## Larger corners — 2026-11-12

User requested larger cube corner radii. Increased radius from 0.11 to 0.28 and rounding segments from 5 to 8. Geometry and optical SDF now share shape constants through uniforms, so the refraction exit boundary matches the visible mesh. Verified the 960 × 707 paused browser view (`qa/glass-home/rounded-desktop.png`): noticeably rounder silhouette and smooth bevel reflections, existing typography/layout unchanged. v14 console contained no warnings/errors; bundled JS syntax check passed. Collection restored to automatic playback and viewport override reset. Result: passed for the requested corner adjustment.
