let fatorando = 10
let fatorial10 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let resultado = 0;

for (let index = 0; index < fatorial10.length; index += 1) {
    resultado = fatorando * fatorial10[index];
    fatorando = resultado;
}
console.log(resultado);