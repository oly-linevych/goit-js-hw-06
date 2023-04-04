const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

function increment() {
currentValue += 1;
counterValue.textContent = currentValue;
}

function decrement() {
currentValue -= 1;
counterValue.textContent = currentValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);