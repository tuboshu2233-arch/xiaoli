const COINS = [
  { name: 'Bitcoin · BTC', price: '$4,093.26', volume: '$1.49B', cap: '$67.97B', change: -0.63, tone: '#ffb521', letter: 'B' },
  { name: 'XRP', price: '$0.2992', volume: '$83.55M', cap: '$29.91B', change: -1.03, tone: '#23efed', letter: 'X' },
  { name: 'Ethereum · ETH', price: '$133.26', volume: '$584.43M', cap: '$13.75B', change: 0.57, tone: '#3b70ff', letter: 'E' },
  { name: 'Litecoin · LTC', price: '$58.23', volume: '$525.42M', cap: '$3.44B', change: -1.08, tone: '#bcecff', letter: 'L' },
  { name: 'Bitcoin Cash · BCH', price: '$281.39', volume: '$31.10M', cap: '$2.73B', change: 3.58, tone: '#bd4c00', letter: 'B' },
  { name: 'Stellar · XLM', price: '$0.1042', volume: '$4.66M', cap: '$1.90B', change: -2.05, tone: '#ffb521', letter: 'S' },
  { name: 'Tether · USDT', price: '$1.101582', volume: '$1.90B', cap: '$1.73B', change: -1.24, tone: '#23efed', letter: 'T' },
  { name: 'Monero · XMR', price: '$50.52', volume: '$6.62M', cap: '$837.41M', change: 2.09, tone: '#3b70ff', letter: 'M' },
  { name: 'Cardano · ADA', price: '$0.060214', volume: '$31.79M', cap: '$1.56B', change: 1.68, tone: '#bcecff', letter: 'C' },
  { name: 'Maker · MKR', price: '$706.65', volume: '$78.63M', cap: '$514.60M', change: -0.85, tone: '#bd4c00', letter: 'M' },
  { name: 'Tron · TRX', price: '$0.014241', volume: '$1.44M', cap: '$949.56B', change: -4.24, tone: '#ffb521', letter: 'T' }
];

const body = document.getElementById('body');
const search = document.getElementById('search');
const table = document.getElementById('table');
const density = document.getElementById('density');

const GRADS = [
  ['#bd4c00', '#ffb521'],
  ['#12bdc9', '#23efed'],
  ['#2750d9', '#3b70ff'],
  ['#7bcdf5', '#bcecff'],
  ['#8a4a12', '#e09a3c']
];

function rowMarkup(coin, index) {
  const trend = coin.change >= 0 ? 'up' : 'down';
  const sign = coin.change >= 0 ? '+' : '';
  const grad = GRADS[index % GRADS.length];
  return `<div class="row" data-name="${coin.name.toLowerCase()}"><span class="rank">${index + 1}</span><span class="coin"><b style="background:linear-gradient(135deg,${grad[0]},${grad[1]})">${coin.letter}</b><span>${coin.name}</span></span><span>${coin.price}</span><span>${coin.volume}</span><span>${coin.cap}</span><span class="${trend}">${sign}${coin.change.toFixed(2)}%</span></div>`;
}

body.innerHTML = COINS.map(rowMarkup).join('');

search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  body.querySelectorAll('.row').forEach(row => {
    row.hidden = Boolean(query) && !row.dataset.name.includes(query);
  });
});

density.addEventListener('click', event => {
  const button = event.target.closest('[data-density]');
  if (!button) return;
  density.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', item === button));
  table.dataset.density = button.dataset.density;
});
