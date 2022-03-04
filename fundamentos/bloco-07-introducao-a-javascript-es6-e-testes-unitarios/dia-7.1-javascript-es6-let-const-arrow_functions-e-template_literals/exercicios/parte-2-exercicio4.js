const array = ['JavaScript', 'HTML', 'CSS', 'DOM', 'Git'];

const changeWords = (string, newWord) => string.replace(/x/g, newWord);

console.log(changeWords('Tryber x aqui!', 'Bebeto'));

const newF = () => `${changeWords('Tryber x aqui!', 'Bebeto')} Minhas cinco principais habilidades são: ${array.sort()}`;

console.log(newF());
