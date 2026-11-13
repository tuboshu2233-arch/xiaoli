const APPS = [
  { id: 'a1', name: 'Advanced Search Pro', letter: 'A', color: '#14a9ff', on: true, spend: 9893.12, impressions: 983124, taps: 3892, conversions: 1034, cpa: 1.54, ttr: 21.78, cr: 1.99, budget: 45784.0 },
  { id: 'a2', name: 'Lock My Phone', letter: 'L', color: '#3b70ff', on: true, spend: 5900.21, impressions: 1032384, taps: 5893, conversions: 1083, cpa: 0.65, ttr: 10.32, cr: 2.89, budget: 23900.0 },
  { id: 'a3', name: 'Invoice2DO · Simple Invoice', letter: 'I', color: '#23efed', on: true, spend: 123.32, impressions: 19032, taps: 593, conversions: 104, cpa: 1.03, ttr: 5.32, cr: 4.78, budget: 7000.0 },
  { id: 'a4', name: 'Photo Editor pro', letter: 'P', color: '#bcecff', on: false, spend: 0, impressions: 0, taps: 0, conversions: 0, cpa: 0, ttr: 0, cr: 0, budget: 25000.0 },
  { id: 'a5', name: 'Pocket Calculator', letter: 'P', color: '#ffb521', on: true, spend: 9893.12, impressions: 983124, taps: 3892, conversions: 1034, cpa: 1.54, ttr: 21.78, cr: 1.99, budget: 45784.0 },
  { id: 'a6', name: 'Some application name', letter: 'S', color: '#3b70ff', on: true, spend: 5900.21, impressions: 1032384, taps: 5893, conversions: 1083, cpa: 0.65, ttr: 10.32, cr: 2.89, budget: 23900.0 },
  { id: 'a7', name: 'Invoice2DO · Simple Invoice', letter: 'I', color: '#23efed', on: true, spend: 123.32, impressions: 19032, taps: 593, conversions: 104, cpa: 1.03, ttr: 5.32, cr: 4.78, budget: 7000.0 },
  { id: 'a8', name: 'Finger Scanner', letter: 'F', color: '#bcecff', on: false, spend: 0, impressions: 0, taps: 0, conversions: 0, cpa: 0, ttr: 0, cr: 0, budget: 25000.0 }
];

const rowsHost = document.getElementById('rows');
const batch = document.getElementById('batch');
const countLabel = document.getElementById('selected-count');
const checkAll = document.getElementById('check-all');
const popover = document.getElementById('popover');
const manage = document.getElementById('manage');
const selected = new Set();
let sorted = null;

const money = value => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const num = value => value.toLocaleString('en-US');
const pct = value => `${value.toFixed(2)}%`;

const COLUMNS = [
  { key: 'conversions', label: '转化' },
  { key: 'cpa', label: 'CPA' },
  { key: 'ttr', label: 'TTR' },
  { key: 'cr', label: 'CR' },
  { key: 'budget', label: '预算' }
];

function cellFor(app, key) {
  if (key === 'spend') return money(app.spend);
  if (key === 'impressions') return num(app.impressions);
  if (key === 'taps') return num(app.taps);
  if (key === 'conversions') return num(app.conversions);
  if (key === 'cpa') return money(app.cpa);
  if (key === 'ttr') return pct(app.ttr);
  if (key === 'cr') return pct(app.cr);
  return money(app.budget);
}

const GRADS = [
  ['#2750d9', '#3b70ff'],
  ['#12bdc9', '#23efed'],
  ['#bd4c00', '#ffb521'],
  ['#7bcdf5', '#bcecff']
];

function render() {
  const list = sorted
    ? [...APPS].sort((a, b) => (sorted.dir === 'asc' ? a[sorted.key] - b[sorted.key] : b[sorted.key] - a[sorted.key]))
    : APPS;
  rowsHost.innerHTML = list
    .map((app, index) => {
      const dim = app.on ? '' : ' muted';
      const grad = GRADS[index % GRADS.length];
      return `<tr data-id="${app.id}" class="${selected.has(app.id) ? 'selected' : ''}">
        <td class="c-check sticky"><input type="checkbox" ${selected.has(app.id) ? 'checked' : ''} aria-label="选择 ${app.name}"></td>
        <td class="c-status sticky"><button class="switch" type="button" aria-pressed="${app.on}" aria-label="切换 ${app.name} 状态"></button></td>
        <td class="c-app sticky"><span class="app-cell"><span class="app-icon" style="background:linear-gradient(135deg,${grad[0]},${grad[1]})">${app.letter}</span><span>${app.name}</span></span></td>
        <td class="${dim}">${cellFor(app, 'spend')}</td>
        <td class="${dim}">${cellFor(app, 'impressions')}</td>
        <td class="${dim}">${cellFor(app, 'taps')}</td>
        <td class="${dim}" data-col="conversions">${cellFor(app, 'conversions')}</td>
        <td class="${dim}" data-col="cpa">${cellFor(app, 'cpa')}</td>
        <td class="${dim}" data-col="ttr">${cellFor(app, 'ttr')}</td>
        <td class="${dim}" data-col="cr">${cellFor(app, 'cr')}</td>
        <td class="${dim}" data-col="budget">${cellFor(app, 'budget')}</td>
      </tr>`;
    })
    .join('');
  applyColumnVisibility();
  syncSelection();
}

function applyColumnVisibility() {
  const hidden = COLUMNS.filter(column => column.hidden).map(column => column.key);
  document.querySelectorAll('[data-col]').forEach(cell => {
    cell.hidden = hidden.includes(cell.dataset.col);
  });
}

function syncSelection() {
  countLabel.textContent = String(selected.size);
  batch.hidden = selected.size === 0;
  checkAll.checked = selected.size > 0 && selected.size === APPS.length;
  checkAll.indeterminate = selected.size > 0 && selected.size < APPS.length;
}

function toggleRow(id) {
  if (selected.has(id)) selected.delete(id);
  else selected.add(id);
  render();
}

rowsHost.addEventListener('click', event => {
  const row = event.target.closest('tr');
  if (!row) return;
  const id = row.dataset.id;
  if (event.target.closest('.switch')) {
    const app = APPS.find(item => item.id === id);
    app.on = !app.on;
    render();
    return;
  }
  if (event.target.matches('input[type="checkbox"]')) {
    toggleRow(id);
    return;
  }
  if (event.target.closest('.app-cell')) toggleRow(id);
});

checkAll.addEventListener('change', () => {
  selected.clear();
  if (checkAll.checked) APPS.forEach(app => selected.add(app.id));
  render();
});

batch.addEventListener('click', event => {
  const button = event.target.closest('[data-batch]');
  if (!button) return;
  const action = button.dataset.batch;
  if (action === 'remove') {
    for (let index = APPS.length - 1; index >= 0; index -= 1) {
      if (selected.has(APPS[index].id)) APPS.splice(index, 1);
    }
    selected.clear();
  } else {
    APPS.forEach(app => {
      if (selected.has(app.id)) app.on = action === 'on';
    });
  }
  render();
});

document.querySelectorAll('th[data-sort]').forEach(header => {
  header.addEventListener('click', () => {
    const key = header.dataset.sort;
    if (sorted && sorted.key === key) {
      sorted = sorted.dir === 'asc' ? { key, dir: 'desc' } : null;
    } else {
      sorted = { key, dir: 'asc' };
    }
    document.querySelectorAll('th').forEach(item => item.classList.remove('sorted'));
    if (sorted) header.classList.add('sorted');
    render();
  });
});

popover.innerHTML = COLUMNS.map(
  column =>
    `<label><input type="checkbox" data-column="${column.key}" ${column.hidden ? '' : 'checked'}>${column.label}</label>`
).join('');

manage.addEventListener('click', () => {
  popover.hidden = !popover.hidden;
  manage.setAttribute('aria-expanded', String(!popover.hidden));
});

popover.addEventListener('change', event => {
  const key = event.target.dataset.column;
  if (!key) return;
  const column = COLUMNS.find(item => item.key === key);
  column.hidden = !event.target.checked;
  applyColumnVisibility();
});

document.addEventListener('click', event => {
  if (popover.hidden) return;
  if (popover.contains(event.target) || manage.contains(event.target)) return;
  popover.hidden = true;
  manage.setAttribute('aria-expanded', 'false');
});

render();
