let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers); // exercicio 1

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers); // exercicio 2

let numbers2 =[];

for (let index = 0; index < numbers.length; index +=1) {
  if (numbers[(index +1)] === undefined) {
    let result = numbers[index] * 2;
    numbers2.push(result);
  }
  else {
    let result = numbers[index] * numbers[(index +1)];
    numbers2.push(result);
  }    
}

console.log(numbers2); // exercicio 3
