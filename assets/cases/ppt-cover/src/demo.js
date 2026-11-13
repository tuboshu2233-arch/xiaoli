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
const deck = document.getElementById('deck');
const dots = document.getElementById('dots');
let current = 0;
let timer = null;

function slideMarkup(index, role) {
  const item = SLIDES[index];
  return `<div class="slide ${role}" data-index="${index}" role="${role === 'main' ? 'img' : 'button'}"${
    role === 'main' ? ` aria-label="${item.title}"` : ` tabindex="0" aria-label="切换到${item.title}"`
  }><img class="art" src="${item.image}" alt="${item.title}" draggable="false"><div class="veil"></div><div class="meta"><strong>${item.title}</strong><span>${item.sub}</span></div></div>`;
}

function render() {
  const prev = (current - 1 + SLIDES.length) % SLIDES.length;
  const next = (current + 1) % SLIDES.length;
  deck.innerHTML =
    slideMarkup(prev, 'side') + slideMarkup(current, 'main') + slideMarkup(next, 'side');
  dots.innerHTML = SLIDES.map(
    (item, index) =>
      `<button type="button" data-dot="${index}" aria-pressed="${index === current}" aria-label="${item.title}"></button>`
  ).join('');
}

function go(index) {
  current = (index + SLIDES.length) % SLIDES.length;
  render();
}

function start() {
  stop();
  timer = setInterval(() => go(current + 1), 3000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

deck.addEventListener('click', event => {
  const target = event.target.closest('.slide.side');
  if (!target) return;
  go(Number(target.dataset.index));
  start();
});
deck.addEventListener('keydown', event => {
  const target = event.target.closest('.slide.side');
  if (!target || (event.key !== 'Enter' && event.key !== ' ')) return;
  event.preventDefault();
  go(Number(target.dataset.index));
  start();
});
dots.addEventListener('click', event => {
  const dot = event.target.closest('[data-dot]');
  if (!dot) return;
  go(Number(dot.dataset.dot));
  start();
});
deck.addEventListener('pointerenter', stop);
deck.addEventListener('pointerleave', start);

render();
start();
