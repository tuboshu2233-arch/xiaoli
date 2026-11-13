const digits = document.getElementById('digits');
const slider = document.getElementById('slider');
let current = '004';

function render(value) {
  const next = String(value).padStart(3, '0').slice(-3);
  digits.innerHTML = next
    .split('')
    .map((digit, index) => {
      const turning = digit !== current[index] ? ' turning' : '';
      return `<span class="flip${turning}" style="animation-delay:${index * 60}ms">${digit}</span>`;
    })
    .join('');
  current = next;
  digits.setAttribute('aria-label', `当前数值 ${value}`);
}

slider.addEventListener('input', () => render(Number(slider.value)));

render(Number(slider.value));
