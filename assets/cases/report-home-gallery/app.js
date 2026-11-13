'use strict';

const viewport = document.querySelector('.gallery-viewport');
const track = document.querySelector('.gallery-track');
const group = track.querySelector('.gallery-group');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const drag = { active: false, startX: 0, startOffset: 0, offset: 0 };

function updateTrack(offset) {
  const loopWidth = group.getBoundingClientRect().width;
  if (!loopWidth) return;
  const wrapped = (((offset % loopWidth) + loopWidth) % loopWidth) - loopWidth;
  drag.offset = Math.abs(wrapped + loopWidth) < 0.5 ? 0 : wrapped;
  gsap.set(track, { x: drag.offset });
}

if (!motion.matches) {
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('.js-title-line', { yPercent: 112, duration: 1.05, stagger: 0.08 })
    .from('.js-subtitle', { opacity: 0, y: 14, duration: 0.55 }, '-=0.55')
    .from('.gallery-card', { opacity: 0, y: 44, rotate: 0, duration: 0.9, stagger: 0.055 }, '-=0.32')
    .from('.js-footer', { opacity: 0, y: 12, duration: 0.55 }, '-=0.45');
}

updateTrack(0);
gsap.ticker.add((_time, deltaTime) => {
  if (motion.matches || drag.active || document.hidden) return;
  updateTrack(drag.offset - deltaTime / 1000 * 24);
});

viewport.addEventListener('pointerdown', event => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  drag.active = true;
  drag.startX = event.clientX;
  drag.startOffset = drag.offset;
  viewport.setPointerCapture(event.pointerId);
  viewport.dataset.dragging = 'true';
});
viewport.addEventListener('pointermove', event => {
  if (drag.active) updateTrack(drag.startOffset + event.clientX - drag.startX);
});
function endDrag(event) {
  drag.active = false;
  if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  delete viewport.dataset.dragging;
}
viewport.addEventListener('pointerup', endDrag);
viewport.addEventListener('pointercancel', endDrag);
viewport.addEventListener('lostpointercapture', () => {
  drag.active = false;
  delete viewport.dataset.dragging;
});
viewport.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  updateTrack(drag.offset + (event.key === 'ArrowLeft' ? 180 : -180));
});
addEventListener('resize', () => updateTrack(drag.offset));
