function hydrate(string) {
  let order = string;
  let reg = /\d+/g;
  let numbers = order.match(reg);
  let numbersOfDrinks = parseInt(numbers[0], 10);

  for (let index = 1; index < numbers.length; index += 1) {
    let number = parseInt(numbers[index], 10);
    numbersOfDrinks += number;
  }
  if (numbersOfDrinks > 1) {
    return `${numbersOfDrinks} copos de água`;
  }
  return `${numbersOfDrinks} copo de água`;
}

module.exports = hydrate;