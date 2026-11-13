const APPS = [
  { id: 'q1', name: 'Advanced Search Pro', letter: 'A', color: '#14a9ff', on: true, spend: 9893.12, impressions: 983124, taps: 3892, conversions: 1034, cpa: 1.54 },
  { id: 'q2', name: 'Lock My Phone', letter: 'L', color: '#3b70ff', on: true, spend: 5900.21, impressions: 1032384, taps: 5893, conversions: 1083, cpa: 0.65 },
  { id: 'q3', name: 'Invoice2DO · Simple Invoice', letter: 'I', color: '#23efed', on: true, spend: 123.32, impressions: 19032, taps: 593, conversions: 104, cpa: 1.03 },
  { id: 'q4', name: 'Photo Editor pro', letter: 'P', color: '#bcecff', on: false, spend: 0, impressions: 0, taps: 0, conversions: 0, cpa: 0 },
  { id: 'q5', name: 'Pocket Calculator', letter: 'P', color: '#ffb521', on: true, spend: 9893.12, impressions: 983124, taps: 3892, conversions: 1034, cpa: 1.54 },
  { id: 'q6', name: 'Finger Scanner', letter: 'F', color: '#bcecff', on: false, spend: 0, impressions: 0, taps: 0, conversions: 0, cpa: 0 }
];

const rows = document.getElementById('rows');
const drawer = document.getElementById('drawer');
const fade = document.getElementById('fade');
const money = value => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const num = value => value.toLocaleString('en-US');

const GRADS = [
  ['#2750d9', '#3b70ff'],
  ['#12bdc9', '#23efed'],
  ['#bd4c00', '#ffb521'],
  ['#7bcdf5', '#bcecff']
];

rows.innerHTML = APPS.map(
  (app, index) => {
    const grad = GRADS[index % GRADS.length];
    return `<tr data-id="${app.id}">
    <td class="c-check"><input type="checkbox" aria-label="选择 ${app.name}"></td>
    <td class="c-status"><span class="${app.on ? 'dot-on' : 'dot-off'}"></span></td>
    <td class="c-app"><span class="app-cell"><span class="app-icon" style="background:linear-gradient(135deg,${grad[0]},${grad[1]})">${app.letter}</span><span>${app.name}</span></span></td>
    <td>${money(app.spend)}</td>
    <td>${num(app.impressions)}</td>
    <td>${num(app.taps)}</td>
    <td>${num(app.conversions)}</td>
    <td>${money(app.cpa)}</td>
  </tr>`;
  }
).join('');

function openDrawer(app, row) {
  document.querySelectorAll('tbody tr').forEach(item => item.classList.remove('active'));
  row.classList.add('active');
  document.getElementById('drawer-icon').textContent = app.letter;
  const grad = GRADS[APPS.indexOf(app) % GRADS.length];
  document.getElementById('drawer-icon').style.background = `linear-gradient(135deg,${grad[0]},${grad[1]})`;
  document.getElementById('drawer-name').textContent = app.name;
  document.getElementById('drawer-status').textContent = app.on ? '投放中 · 最近 7 天' : '已暂停 · 最近 7 天';
  document.getElementById('drawer-stats').innerHTML = [
    ['花费', money(app.spend)],
    ['展示', num(app.impressions)],
    ['点击', num(app.taps)],
    ['转化', num(app.conversions)]
  ]
    .map(([label, value]) => `<div class="stat"><span>${label}</span><b>${value}</b></div>`)
    .join('');
  const base = app.spend || 120;
  const bars = [0.42, 0.68, 0.35, 0.86, 0.6, 0.74, 0.52];
  document.getElementById('drawer-sum').textContent = money(app.spend);
  document.getElementById('drawer-bars').innerHTML = bars
    .map(ratio => `<i style="height:${Math.round(ratio * 100)}%"></i>`)
    .join('');
  document.title = `${app.name} · 详情`;
  fade.hidden = false;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  void base;
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  fade.hidden = true;
  document.querySelectorAll('tbody tr').forEach(item => item.classList.remove('active'));
}

rows.addEventListener('click', event => {
  const row = event.target.closest('tr');
  if (!row) return;
  if (event.target.matches('input[type="checkbox"]')) return;
  const app = APPS.find(item => item.id === row.dataset.id);
  if (app) openDrawer(app, row);
});

document.getElementById('close').addEventListener('click', closeDrawer);
document.getElementById('drawer-close').addEventListener('click', closeDrawer);
fade.addEventListener('click', closeDrawer);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeDrawer();
});
