// const a = 22;
// const b = 15;

function soma (a, b) {
  let soma = a + b;
  return soma;
}

function subtracao (a, b) {
  let subtracao = a - b;
  return subtracao;
}

function multiplicacao (a, b) {
  let multiplicacao = a * b;
  return multiplicacao;
}

function divisao (a, b) {
  let divisao = a / b;
  return divisao;
}

function modulo (a, b) {
  let modulo = a % b;
  return modulo;
}

console.log(soma(20,10));
console.log(subtracao(20,10));
console.log(multiplicacao(20,10));
console.log(divisao(20,10));
console.log(modulo(20,10));

function maiorNumero (a, b) {
  if (a > b) {
    return a + ' é maior que ' + b;
  } else if (b > a) {
    return b + ' é maior que ' + a;
  } else {
    return 'Os número são iguais'
  }
}

console.log(maiorNumero(20, 10));

