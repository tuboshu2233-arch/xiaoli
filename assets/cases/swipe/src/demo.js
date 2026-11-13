const EVENTS = [
  { title: "Alice's Graduation", color: '#bd4c00' },
  { title: "Dylan's Birthday", color: '#ffb521' },
  { title: "John & Mary's Wedding", color: '#23efed' },
  { title: "Norman's Funeral", color: '#3b70ff' }
];
const ACTION_WIDTH = 132;
const OPEN_AT = 52;
const list = document.getElementById('list');
const toast = document.getElementById('toast');

const GRADS = [
  ['#bd4c00', '#ff8f2e'],
  ['#ffb521', '#ffe08a'],
  ['#12bdc9', '#23efed'],
  ['#2750d9', '#3b70ff']
];

list.innerHTML = EVENTS.map(
  (event, index) => `<li class="item" data-index="${index}">
    <div class="actions"><button type="button" data-action="edit">编辑</button><button type="button" class="delete" data-action="delete">删除</button></div>
    <div class="face" style="background:linear-gradient(135deg,${GRADS[index % GRADS.length][0]},${GRADS[index % GRADS.length][1]})" tabindex="0" role="button" aria-label="${event.title}，向左滑动可编辑">${event.title}</div>
  </li>`
).join('');

let openItem = null;
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

function setOffset(item, offset, animate = true) {
  const face = item.querySelector('.face');
  face.classList.toggle('dragging', !animate);
  face.style.transform = `translateX(${offset}px)`;
}

function closeItem(item) {
  if (!item) return;
  setOffset(item, 0);
  if (openItem === item) openItem = null;
}

function openItemAt(item) {
  if (openItem && openItem !== item) closeItem(openItem);
  setOffset(item, -ACTION_WIDTH);
  openItem = item;
}

list.querySelectorAll('.item').forEach(item => {
  const face = item.querySelector('.face');
  let startX = 0;
  let startOffset = 0;
  let dragging = false;
  let moved = false;

  face.addEventListener('pointerdown', event => {
    dragging = true;
    moved = false;
    startX = event.clientX;
    startOffset = item === openItem ? -ACTION_WIDTH : 0;
    face.classList.add('dragging');
    face.setPointerCapture(event.pointerId);
  });

  face.addEventListener('pointermove', event => {
    if (!dragging) return;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 5) moved = true;
    const offset = Math.min(0, Math.max(-ACTION_WIDTH, startOffset + delta));
    face.style.transform = `translateX(${offset}px)`;
  });

  face.addEventListener('pointerup', event => {
    if (!dragging) return;
    dragging = false;
    face.classList.remove('dragging');
    face.releasePointerCapture(event.pointerId);
    const delta = event.clientX - startX;
    const offset = startOffset + delta;

    if (!moved) {
      if (item === openItem) closeItem(item);
      else openItemAt(item);
      return;
    }
    if (offset < -OPEN_AT) openItemAt(item);
    else {
      closeItem(item);
      if (offset < 0) setOffset(item, 0);
    }
  });

  face.addEventListener('pointercancel', () => {
    dragging = false;
    face.classList.remove('dragging');
    setOffset(item, item === openItem ? -ACTION_WIDTH : 0);
  });
});

list.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const item = button.closest('.item');
  const title = item.querySelector('.face').textContent;
  if (button.dataset.action === 'delete') {
    item.style.height = '0px';
    item.style.opacity = '0';
    item.style.marginBottom = '-2px';
    if (openItem === item) openItem = null;
    showToast(`已删除「${title}」`);
    setTimeout(() => item.remove(), 320);
  } else {
    closeItem(item);
    showToast(`编辑「${title}」`);
  }
});
