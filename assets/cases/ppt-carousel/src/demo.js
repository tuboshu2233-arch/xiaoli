const SLIDES = [
  {
    "title": "山野之间",
    "sub": "Mountain Light",
    "image": "../depth-carousel/images/a.jpg"
  },
  {
    "title": "森林漫游",
    "sub": "Into the Forest",
    "image": "../depth-carousel/images/c.jpg"
  },
  {
    "title": "湖光山色",
    "sub": "Quiet Reflections",
    "image": "../depth-carousel/images/e.jpg"
  },
  {
    "title": "原野微风",
    "sub": "Open Fields",
    "image": "../depth-carousel/images/d.jpg"
  },
  {
    "title": "自然来信",
    "sub": "Wild Encounters",
    "image": "../depth-carousel/images/b.jpg"
  }
];
const center = document.getElementById('center');
const left = document.getElementById('left');
const right = document.getElementById('right');
const caption = document.getElementById('caption');
let current = 0;

function art(item) {
  return `<img class="art" src="${item.image}" alt="${item.title}" draggable="false"><div class="meta"><strong>${item.title}</strong><span>${item.sub}</span></div>`;
}

function render() {
  const prevIndex = (current - 1 + SLIDES.length) % SLIDES.length;
  const nextIndex = (current + 1) % SLIDES.length;
  left.innerHTML = art(SLIDES[prevIndex]);
  right.innerHTML = art(SLIDES[nextIndex]);
  center.innerHTML = art(SLIDES[current]);
  caption.textContent = `${SLIDES[current].title} · 左右切换选择`;
}

function go(step) {
  current = (current + step + SLIDES.length) % SLIDES.length;
  render();
}

document.getElementById('prev').addEventListener('click', () => go(-1));
document.getElementById('next').addEventListener('click', () => go(1));
document.getElementById('prev-text').addEventListener('click', () => go(-1));
document.getElementById('next-text').addEventListener('click', () => go(1));
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') go(-1);
  if (event.key === 'ArrowRight') go(1);
});

let startX = null;
center.addEventListener('pointerdown', event => {
  startX = event.clientX;
});
center.addEventListener('pointerup', event => {
  if (startX === null) return;
  const delta = event.clientX - startX;
  startX = null;
  if (Math.abs(delta) > 40) go(delta > 0 ? -1 : 1);
});

render();
