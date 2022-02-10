console.log(document.getElementById('elementoOndeVoceEsta'));

let pai = document.getElementById('elementoOndeVoceEsta').parentNode;

pai.style.background = "green";

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

primeiroFilhoDoFilho.innerHTML = 'adicione um texto a ele';

console.log(document.querySelector('#pai').firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

console.log(document.querySelector('#pai').children[2]);

let paiDeTodos = document.querySelector('#pai');

let irmaoDoElementoOndeVoceEsta = document.createElement('section');

paiDeTodos.appendChild(irmaoDoElementoOndeVoceEsta);

console.log(document.querySelector('#pai').children);

let paiElementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let terceiroFilhoDoFilho = document.createElement('section');

paiElementoOndeVoceEsta.appendChild(terceiroFilhoDoFilho);

console.log(document.querySelector('#elementoOndeVoceEsta').children)

let paiPrimeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let primeiroFilhoDoPaiPrimeiroFilhoDoFilho = document.createElement('section');

paiPrimeiroFilhoDoFilho.appendChild(primeiroFilhoDoPaiPrimeiroFilhoDoFilho);

console.log(document.querySelector('#primeiroFilhoDoFilho').children);

console.log(document.querySelector('#primeiroFilhoDoFilho').children[0].parentNode.parentNode.nextElementSibling);