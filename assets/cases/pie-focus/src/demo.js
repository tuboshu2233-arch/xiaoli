const DATA = [
  { name: '住宿', value: 34, tone: ['#13293c', '#1c3d55'] },
  { name: '交通', value: 27, tone: ['#16304a', '#1f4460'] },
  { name: '餐饮', value: 23, tone: ['#142e42', '#1a3f58'] },
  { name: '门票', value: 16, tone: ['#183550', '#214a66'] }
];
const FOCUS = ['#2750d9', '#3b70ff'];
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('pie');

function gradient(id, colors) {
  const grad = document.createElementNS(NS, 'linearGradient');
  grad.setAttribute('id', id);
  grad.setAttribute('x1', '0%');
  grad.setAttribute('y1', '0%');
  grad.setAttribute('x2', '100%');
  grad.setAttribute('y2', '100%');
  colors.forEach((color, index) => {
    const stop = document.createElementNS(NS, 'stop');
    stop.setAttribute('offset', index === 0 ? '0%' : '100%');
    stop.setAttribute('stop-color', color);
    grad.appendChild(stop);
  });
  return grad;
}
const defs = document.createElementNS(NS, 'defs');
DATA.forEach((item, index) => defs.appendChild(gradient(`idle-${index}`, item.tone)));
defs.appendChild(gradient('focus-grad', FOCUS));
svg.appendChild(defs);
const readout = document.getElementById('readout');
const figure = document.getElementById('figure');
const CX = 230;
const CY = 230;
const R = 186;
const INNER_R = 110;
const GAP = 4;
const TOTAL = DATA.reduce((sum, item) => sum + item.value, 0);

let active = 0;
let timer = null;
let hovered = false;

function polar(radius, angle) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return [CX + radius * Math.cos(rad), CY + radius * Math.sin(rad)];
}

const slices = [];

DATA.forEach((item, index) => {
  const start = DATA.slice(0, index).reduce((sum, entry) => sum + entry.value, 0);
  const sweep = item.value / TOTAL * 360;
  const boundary = start / TOTAL * 360 - 90;
  const pad = Math.asin(GAP / 2 / R) * 180 / Math.PI;
  const innerPad = Math.asin(GAP / 2 / INNER_R) * 180 / Math.PI;
  const from = boundary + pad;
  const to = boundary + sweep - pad;
  const [x0, y0] = polar(R, from);
  const [x1, y1] = polar(R, to);
  const largeArc = to - from > 180 ? 1 : 0;
  const [innerEndX, innerEndY] = polar(INNER_R, boundary + sweep - innerPad);
  const [innerStartX, innerStartY] = polar(INNER_R, boundary + innerPad);
  const innerLargeArc = sweep - 2 * innerPad > 180 ? 1 : 0;

  const group = document.createElementNS(NS, 'g');
  group.setAttribute('class', 'slice');
  group.setAttribute('role', 'button');
  group.setAttribute('tabindex', '0');
  group.setAttribute('aria-label', `${item.name}，占比${item.value}%`);

  const path = document.createElementNS(NS, 'path');
  path.setAttribute(
    'd',
    `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${R} ${R} 0 ${largeArc} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} L ${innerEndX.toFixed(2)} ${innerEndY.toFixed(2)} A ${INNER_R} ${INNER_R} 0 ${innerLargeArc} 0 ${innerStartX.toFixed(2)} ${innerStartY.toFixed(2)} Z`
  );
  path.setAttribute('fill', `url(#idle-${index})`);
  group.appendChild(path);
  group.addEventListener('click', () => {
    setActive(index);
    restart();
  });
  group.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActive(index);
      restart();
    }
  });
  svg.appendChild(group);
  slices.push({ group, path, mid: (from + to) / 2 });
});

function setActive(index) {
  active = index;
  slices.forEach((slice, i) => {
    const focused = i === index;
    slice.group.setAttribute('aria-pressed', String(focused));
    slice.path.setAttribute('fill', focused ? 'url(#focus-grad)' : `url(#idle-${i})`);
    if (focused) {
      const [dx, dy] = polar(10, slice.mid).map((value, axis) => value - (axis === 0 ? CX : CY));
      slice.group.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
    } else {
      slice.group.style.transform = 'translate(0px, 0px)';
    }
  });
  const item = DATA[index];
  readout.innerHTML = `<strong>${item.name}</strong><span>${item.value}%</span>`;
  svg.setAttribute('aria-label', `环形图扇区聚焦，当前${item.name}，占比${item.value}%`);
}

function start() {
  stop();
  if (hovered || figure.contains(document.activeElement)) return;
  timer = setInterval(() => setActive((active + 1) % DATA.length), 1600);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function restart() {
  stop();
  start();
}

figure.addEventListener('pointerenter', () => { hovered = true; stop(); });
figure.addEventListener('pointerleave', () => { hovered = false; start(); });
figure.addEventListener('focusin', stop);
figure.addEventListener('focusout', event => { if (!figure.contains(event.relatedTarget)) start(); });

setActive(0);
start();
