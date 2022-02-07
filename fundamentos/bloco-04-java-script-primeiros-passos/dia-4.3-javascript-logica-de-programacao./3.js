let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';

// console.log(array[1].length);

for (let index = 0; index < array.length; index += 1) {
    if (maior.length < array[index].length) {
        maior = array[index];
    }
}

for (let index2 = array.length -1; index2 >=0; index2 -= 1) {
    if (menor.length < array[index2].length) {
        menor = array[(index2 +1)];
    }
}
console.log(maior);
console.log(menor);

