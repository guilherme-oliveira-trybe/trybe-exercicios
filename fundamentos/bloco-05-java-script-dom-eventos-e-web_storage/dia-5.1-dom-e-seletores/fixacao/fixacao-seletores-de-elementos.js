document.querySelector('#page-title').innerText = 'Million Dollar Baby';

document.querySelector('#second-paragraph').innerText = "Afastado da sua filha, Frankie (Clint Eastwood) revela uma grande dificuldade na aproximação aos outros, e apenas lhe resta o amigo Scrap (Morgan Freeman), um ex-lutador de boxe que cuida do ginásio de Frankie. É então que entra em cena, em seu ginásio, Maggie Fitzgerald (Hilary Swank), que sempre teve pouco da vida, mas que ao contrário de muitos, sabe bem o que quer e tem a determinação necessária para o alcançar."

document.querySelector('#subtitle').innerText = 'Sinopse';

let paragrafo = document.querySelectorAll('.paragrafo')[1];
paragrafo.style.color = "blue";

let primeiroParagrafo = document.querySelectorAll('.paragrafo')[0];
primeiroParagrafo.style.color = 'green';

let subtitulo = document.querySelectorAll('h4')[0];
subtitulo.style.color = "red";

// console.log(document.querySelector('h4'));