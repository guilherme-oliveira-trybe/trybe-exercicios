function quadrado(n) {
  for (let index = 1; index <= n; index += 1) {
    console.log('*'.repeat(n));
  }
}
quadrado(5);

function triangulo(n) {
  for (let index = 1; index <= n; index += 1) {
    console.log('*'.repeat(index));
  }
}
triangulo(5);

function trianguloInvertido(n) {
  for (let index = 1; index <= n; index += 1) {
    console.log(' '.repeat(n - index) + '*'.repeat(index));
  }
}
trianguloInvertido(5);

function piramide(n) {
  for (let index = 1; index <= n; index += 2) {
    console.log(' '.repeat((n - index) / 2) + '*'.repeat(index) + ' '.repeat((n - index) / 2));
  }
}
piramide(5);

function piramide2(n) {
  for (let index = 1; index <= n; index += 2) {
    console.log(' '.repeat((n - index) / 2) + '*'.repeat(index) + ' '.repeat((n - index) / 2));
  }
}
piramide2(7); // ainda sem resolução

function isPrime(n) {
  let isPrime = 1;
  for (let index = 2; index <= n; index += 1) {
    if (n % index === 0) {
      isPrime += 1;
    }
  }
  if (isPrime === 2) {
    return 'é primo'
  }
  return 'não é primo'
}
console.log(isPrime(8));
