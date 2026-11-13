const DATA = [
  { name: '放松度假', value: 59, colors: ['#bd4c00', '#ffb521'], ink: '#2a1503' },
  { name: '探亲访友', value: 23, colors: ['#12bdc9', '#23efed'], ink: '#062226' },
  { name: '观光游览', value: 12, colors: ['#2750d9', '#3b70ff'], ink: '#eaf2ff' },
  { name: '其他', value: 6, colors: ['#7bcdf5', '#bcecff'], ink: '#062226' }
];
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('pie');
const CX = 210;
const CY = 210;
const R = 168;
const GAP = 1.6;

function polar(radius, angle) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return [CX + radius * Math.cos(rad), CY + radius * Math.sin(rad)];
}

function render() {
  const total = DATA.reduce((sum, item) => sum + item.value, 0);
  svg.textContent = '';
  const defs = document.createElementNS(NS, 'defs');
  DATA.forEach((item, index) => {
    const gradient = document.createElementNS(NS, 'linearGradient');
    gradient.setAttribute('id', `pie-fill-${index}`);
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '50%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '50%');
    const from = document.createElementNS(NS, 'stop');
    from.setAttribute('offset', '0%');
    from.setAttribute('stop-color', item.colors[0]);
    const to = document.createElementNS(NS, 'stop');
    to.setAttribute('offset', '100%');
    to.setAttribute('stop-color', item.colors[1]);
    gradient.append(from, to);
    defs.appendChild(gradient);
  });
  svg.appendChild(defs);
  const labels = [];
  let cursor = -90;

  DATA.forEach((item, index) => {
    const sweep = (item.value / total) * 360;
    const from = cursor + GAP / 2;
    const to = cursor + sweep - GAP / 2;
    const [x0, y0] = polar(R, from);
    const [x1, y1] = polar(R, to);
    const largeArc = to - from > 180 ? 1 : 0;

    const group = document.createElementNS(NS, 'g');
    group.setAttribute('class', 'slice');
    group.style.setProperty('--i', index);

    const path = document.createElementNS(NS, 'path');
    path.setAttribute(
      'd',
      `M ${CX} ${CY} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${R} ${R} 0 ${largeArc} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`
    );
    path.setAttribute('fill', `url(#pie-fill-${index})`);
    group.appendChild(path);
    svg.appendChild(group);

    const mid = (from + to) / 2;
    const [labelX, labelY] = polar(R * 0.62, mid);
    const label = document.createElementNS(NS, 'g');
    label.setAttribute('class', item.value < 10 ? 'label small' : 'label');
    label.style.setProperty('--i', index);
    if (item.value < 10) {
      const text = document.createElementNS(NS, 'text');
      text.setAttribute('x', labelX.toFixed(1));
      text.setAttribute('y', labelY.toFixed(1));
      text.setAttribute('text-anchor', 'middle');
      text.style.fill = item.ink;
      text.textContent = `${item.value}%`;
      label.appendChild(text);
    } else {
      const name = document.createElementNS(NS, 'text');
      name.setAttribute('x', labelX.toFixed(1));
      name.setAttribute('y', (labelY - 4).toFixed(1));
      name.setAttribute('text-anchor', 'middle');
      name.style.fill = item.ink;
      name.textContent = item.name;
      const percent = document.createElementNS(NS, 'text');
      percent.setAttribute('class', 'pct');
      percent.setAttribute('x', labelX.toFixed(1));
      percent.setAttribute('y', (labelY + 10).toFixed(1));
      percent.setAttribute('text-anchor', 'middle');
      percent.style.fill = item.ink;
      percent.textContent = `${item.value}%`;
      label.append(name, percent);
    }
    labels.push(label);

    cursor += sweep;
  });

  labels.forEach(label => svg.appendChild(label));
}

document.getElementById('replay').addEventListener('click', render);
render();
