const AUTHORS = [
  { name: '博主名称信息1', reads: '9872万', likes: '987万', comments: '99万', score: 100, tone: '#ffb521' },
  { name: '博主名称信息2', reads: '9654万', likes: '965万', comments: '97万', score: 99, tone: '#23efed' },
  { name: '博主名称信息3', reads: '8765万', likes: '877万', comments: '88万', score: 98, tone: '#3b70ff' },
  { name: '博主名称信息4', reads: '8754万', likes: '875万', comments: '88万', score: 97, tone: '#bcecff' },
  { name: '博主名称信息5', reads: '8543万', likes: '854万', comments: '85万', score: 96, tone: '#bd4c00' },
  { name: '博主名称信息6', reads: '8321万', likes: '831万', comments: '82万', score: 95, tone: '#ffb521' },
  { name: '博主名称信息7', reads: '8102万', likes: '806万', comments: '79万', score: 94, tone: '#23efed' },
  { name: '博主名称信息8', reads: '7887万', likes: '784万', comments: '76万', score: 93, tone: '#3b70ff' },
  { name: '博主名称信息9', reads: '7604万', likes: '759万', comments: '74万', score: 92, tone: '#bcecff' },
  { name: '博主名称信息10', reads: '7420万', likes: '736万', comments: '71万', score: 91, tone: '#bd4c00' }
];
const ROW_HEIGHT = 50;
const rows = document.getElementById('rows');
const viewport = document.getElementById('viewport');
let offset = 0;
let timer = null;

const GRADS = [
  ['#bd4c00', '#ffb521'],
  ['#12bdc9', '#23efed'],
  ['#2750d9', '#3b70ff'],
  ['#7bcdf5', '#bcecff'],
  ['#8a4a12', '#e09a3c']
];
function rowMarkup(item, index) {
  const grad = GRADS[index % GRADS.length];
  return `<div class="row" data-row="${index}"><span class="rank">${index + 1}</span><span class="author"><span class="avatar" style="background:linear-gradient(135deg,${grad[0]},${grad[1]})"></span><b>${item.name}</b></span><span>${item.reads}</span><span>${item.likes}</span><span>${item.comments}</span><span class="score">${item.score}</span></div>`;
}

const list = AUTHORS.map(rowMarkup).join('');
rows.innerHTML = list + list;

function step() {
  offset += 1;
  rows.style.transform = `translateY(${-offset * ROW_HEIGHT}px)`;
  if (offset === AUTHORS.length) {
    setTimeout(() => {
      rows.style.transition = 'none';
      offset = 0;
      rows.style.transform = 'translateY(0)';
      void rows.offsetHeight;
      rows.style.transition = '';
    }, 560);
  }
}

function start() {
  stop();
  timer = setInterval(step, 1800);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

viewport.addEventListener('pointerenter', stop);
viewport.addEventListener('pointerleave', start);
rows.addEventListener('click', event => {
  const row = event.target.closest('.row');
  if (!row) return;
  rows.querySelectorAll('.row').forEach(item => item.classList.remove('active'));
  row.classList.add('active');
});

start();
