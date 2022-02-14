const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const list = document.getElementsByClassName('container');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado..

function addClass(event) {
    event.target.className = 'tech';
}

firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);

// firstLi.addEventListener('click', function() {
//     firstLi.className = 'tech';
// } )

// secondLi.addEventListener('click', function() {
//     secondLi.className = 'tech';
// } )

// thirdLi.addEventListener('click', function() {
//     thirdLi.className = 'tech';
// } )

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClass(event) {
    let li = document.getElementsByTagName('li');
    
    for (let index = 0; index < li.length; index += 1) {
        li[index].classList.remove('tech');
    }
    
    event.target.className = 'tech';
}

firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);

// firstLi.addEventListener('click', function() {
//     firstLi.className = 'tech';
//     secondLi.classList.remove('tech');
//     thirdLi.classList.remove('tech');
// } )

// secondLi.addEventListener('click', function() {
//     secondLi.className = 'tech';
//     firstLi.classList.remove('tech');
//     thirdLi.classList.remove('tech');
// } )

// thirdLi.addEventListener('click', function() {
//     thirdLi.className = 'tech';
//     firstLi.classList.remove('tech');
//     secondLi.classList.remove('tech');
// } )


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function chanceText() {
    let text = document.querySelector('.tech');
    text.innerText = input.value;
}

input.addEventListener('keyup', chanceText);



// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

function goTo(link) {
    window.location.href = link;
}

myWebpage.addEventListener('dblclick', goTo);

// 4.1. Que tal redirecionar para seu portfólio?

function goTo() {
    window.location.href = 'https://guilherme-oliveira-trybe.github.io/';
}

myWebpage.addEventListener('dblclick', goTo);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor(event) {
    event.target.style.color = 'red'
}

myWebpage.addEventListener('mousemove', changeColor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.