const SLIDES = [
  {
    "image": "../depth-carousel/images/a.jpg",
    "title": "山野之间"
  },
  {
    "image": "../depth-carousel/images/c.jpg",
    "title": "森林漫游"
  },
  {
    "image": "../depth-carousel/images/e.jpg",
    "title": "湖光山色"
  },
  {
    "image": "../depth-carousel/images/d.jpg",
    "title": "原野微风"
  },
  {
    "image": "../depth-carousel/images/b.jpg",
    "title": "自然来信"
  }
];
const card = document.getElementById('card');
const pane = document.getElementById('pane');
const overlay = document.getElementById('overlay');
const dots = document.getElementById('dots');
const index = document.getElementById('index');
let current = 0;

function render(animate) {
  const slide = SLIDES[current];
  document.getElementById('paneImage').src=slide.image;
  document.getElementById('paneImage').alt=slide.title;
  const next=SLIDES[(current+1)%SLIDES.length];
  document.getElementById('overlayImage').src=next.image;
  document.getElementById('overlayImage').alt=next.title;
  index.textContent = `${String(current + 1).padStart(2, '0')} / ${String(SLIDES.length).padStart(2, '0')}`;
  dots.innerHTML = SLIDES.map(
    (_, i) => `<button type="button" data-dot="${i}" aria-pressed="${i === current}" aria-label="第 ${i + 1} 张"></button>`
  ).join('');
  if (animate) {
    overlay.classList.remove('slide');
    void overlay.offsetWidth;
    overlay.classList.add('slide');
  }
}

function go(step) {
  current = (current + step + SLIDES.length) % SLIDES.length;
  render(true);
}

document.getElementById('prev').addEventListener('click', () => go(-1));
document.getElementById('next').addEventListener('click', () => go(1));
dots.addEventListener('click', event => {
  const dot = event.target.closest('[data-dot]');
  if (!dot || Number(dot.dataset.dot) === current) return;
  current = Number(dot.dataset.dot);
  render(true);
});

let startX = null;
card.addEventListener('pointerdown', event => {
  startX = event.clientX;
});
card.addEventListener('pointerup', event => {
  if (startX === null) return;
  const delta = event.clientX - startX;
  startX = null;
  if (Math.abs(delta) > 40) go(delta > 0 ? -1 : 1);
});

render(false);
