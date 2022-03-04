const button = document.getElementById('button')
const display = document.getElementById('counter');

let counter = 0;
// const clickCount = () => display.innerHTML = counter += 1;

button.addEventListener('click', () => display.innerHTML = counter += 1);
