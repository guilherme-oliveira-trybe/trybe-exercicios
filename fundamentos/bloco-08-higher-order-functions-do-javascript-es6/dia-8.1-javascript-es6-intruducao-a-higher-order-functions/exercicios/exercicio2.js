// const valorSorteado = () => Math.floor((Math.random() * 5) + 1);

const checkNumbers = (number1, number2) => {
  if (number1 === number2) {
    return 'Parabéns voce ganhou!!!'
  } else {
    return 'Tente Novamente'
  }
}

const sorteio = (number1, callback) => {
  const number2 = Math.floor((Math.random() * 5) + 1);
  return callback(number1, number2);
}

console.log(sorteio(3, checkNumbers));
