const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const pairs = (number) => number % 2 === 0;
// const sumPairs = (currentValue, number) => currentValue + number;

// const sumNumbers = (array) => array.filter(pairs).reduce(sumPairs);
const sumNumbers = (array) => array.filter((elemento) => elemento % 2 === 0).reduce((currentValue, numbers) => currentValue + numbers);

console.log(sumNumbers(numbers));

const anotherAway = (currentValue, number) => ((number % 2 === 0) ? currentValue + number : currentValue);

const sumNumbers2 = (array) => array.reduce(anotherAway, 0);

console.log(sumNumbers2(numbers));

