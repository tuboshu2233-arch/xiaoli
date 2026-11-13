const DATA = [
  { name: '智能手机', value: 32, colors: ['#bd4c00', '#ffb521'] },
  { name: '笔记本', value: 24, colors: ['#12bdc9', '#23efed'] },
  { name: '平板', value: 18, colors: ['#2750d9', '#3b70ff'] },
  { name: '穿戴设备', value: 15, colors: ['#7bcdf5', '#bcecff'] },
  { name: '配件', value: 11, colors: ['#8a4a12', '#e09a3c'] }
];
const TOTAL = DATA.reduce((sum, item) => sum + item.value, 0);
const LAYERS = 18;
const plate = document.getElementById('plate');
const scene = document.getElementById('scene');
const legend = document.getElementById('legend');

function conicFace(tone = 1) {
  // tone: 1 = 顶面原色；0 = 全黑。中间值按比例把每个扇区颜色压暗。
  const gap = 2.2;
  let cursor = 0;
  const stops = DATA.map(item => {
    const sweep = (item.value / TOTAL) * 360;
    const start = cursor + gap / 2;
    const end = cursor + sweep - gap / 2;
    cursor += sweep;
    const a = mixHex(item.colors[0], '#000000', 1 - tone);
    const b = mixHex(item.colors[1], '#000000', 1 - tone);
    return `${a} ${start.toFixed(2)}deg, ${b} ${end.toFixed(2)}deg, rgba(0,0,0,0) ${end.toFixed(2)}deg ${(end + gap).toFixed(2)}deg`;
  });
  return `conic-gradient(from -90deg, ${stops.join(', ')})`;
}

function mixHex(a, b, t) {
  const pa = parseHex(a), pb = parseHex(b);
  const r = Math.round(pa[0] + (pb[0] - pa[0]) * t);
  const g = Math.round(pa[1] + (pb[1] - pa[1]) * t);
  const bl = Math.round(pa[2] + (pb[2] - pa[2]) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}
function parseHex(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

plate.style.setProperty('--face', conicFace(1));
for (let i = 0; i < LAYERS; i += 1) {
  const layer = document.createElement('span');
  layer.className = i === 0 ? 'layer face' : 'layer';
  layer.style.setProperty('--z', i);
  // z 越深颜色越暗；从 tone=0.92（紧贴顶面几乎原色）线性降到 0.30
  if (i > 0) {
    const tone = 0.92 - (0.92 - 0.30) * (i / (LAYERS - 1));
    layer.style.background = conicFace(tone);
  }
  plate.appendChild(layer);
}

legend.innerHTML = DATA.map(
  item =>
    `<li><span class="swatch" style="background:linear-gradient(90deg,${item.colors[0]},${item.colors[1]})"></span>${item.name}<strong>${item.value}%</strong></li>`
).join('');

let angle = 0;
let speed = 26;
let targetSpeed = 26;
let dragging = false;
let startX = 0;
let startAngle = 0;
let last = performance.now();

scene.addEventListener('pointerenter', () => {
  if (!dragging) targetSpeed = 7;
});
scene.addEventListener('pointerleave', () => {
  if (!dragging) targetSpeed = 26;
});
scene.addEventListener('pointerdown', event => {
  dragging = true;
  startX = event.clientX;
  startAngle = angle;
  targetSpeed = 0;
  scene.classList.add('dragging');
  scene.setPointerCapture(event.pointerId);
});
scene.addEventListener('pointermove', event => {
  if (!dragging) return;
  angle = startAngle + (event.clientX - startX) * 0.55;
});
scene.addEventListener('pointerup', event => {
  dragging = false;
  scene.classList.remove('dragging');
  targetSpeed = 26;
  scene.releasePointerCapture(event.pointerId);
});

function frame(now) {
  const delta = Math.min(64, now - last) / 1000;
  last = now;
  speed += (targetSpeed - speed) * 0.08;
  angle += speed * delta;
  plate.style.transform = `rotateX(60deg) rotateZ(${angle.toFixed(2)}deg)`;
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
