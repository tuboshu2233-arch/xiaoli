const RANGES = {
  all: { bars: [46, 52, 34, 42, 38, 96, 82], efficacy: 95, metrics: [37, 175, 212] },
  7: { bars: [24, 38, 30, 44, 22, 70, 58], efficacy: 92, metrics: [12, 48, 60] },
  30: { bars: [88, 74, 66, 58, 48, 40, 32], efficacy: 96, metrics: [30, 160, 190] }
};
const DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const week = document.getElementById('week');
const metrics = document.getElementById('metrics');
const ring = document.getElementById('ring');
const efficacy = document.getElementById('efficacy');
const filters = document.getElementById('filters');

week.innerHTML = DAYS.map(
  day => `<li><span class="day">${day}</span><span class="bar"><i style="width:0%"></i></span></li>`
).join('');

function render(rangeKey) {
  const data = RANGES[rangeKey];
  week.querySelectorAll('.bar i').forEach((bar, index) => {
    bar.style.width = `${data.bars[index]}%`;
  });
  metrics.innerHTML = [
    [data.metrics[0], '进行中任务'],
    [data.metrics[1], '已完成任务'],
    [data.metrics[2], '已创建任务']
  ]
    .map(([value, label]) => `<li><b>${value}</b><span>${label}</span></li>`)
    .join('');
  efficacy.textContent = `${data.efficacy}%`;
  const circumference = 2 * Math.PI * 34;
  ring.style.strokeDashoffset = String(circumference * (1 - data.efficacy / 100));
}

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-range]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  render(button.dataset.range);
});

render('all');
