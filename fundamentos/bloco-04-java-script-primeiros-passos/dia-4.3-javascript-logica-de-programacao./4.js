// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let biggestPrime = 0;

for (let index = 0; index <= 50; index += 1) {
    let isPrime = true;
    for (let index2 = 2; index2 < index; index2 += 1) {
        if (index % index2 === 0){
            isPrime = false;
        }        
    }
    if (isPrime) {
        biggestPrime = index;
    }
}
console.log(biggestPrime);