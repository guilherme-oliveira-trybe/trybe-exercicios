function verificaPalindrome(string) {
  let palindrome = string.split('');
  let compare = palindrome.reverse();
  let newString = compare.join('');

  if (string === newString) {
    return true;
  }
  return false;
}
console.log(verificaPalindrome('arara'));

function indexHigherValue(array) {
  let indexHigherValue = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > indexHigherValue) {
      indexHigherValue = array[index];
    }
  }
  return array.indexOf(indexHigherValue);
}
console.log(indexHigherValue([2, 3, 6, 7, 10, 1]));

function indexSmallerValue(array) {
  let indexSmallerValue = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < indexSmallerValue) {
      indexSmallerValue = array[index];
    }
  }
  return array.indexOf(indexSmallerValue);
}
console.log(indexSmallerValue([2, 4, 6, 7, 10, 0, -3]));

function biggestName(array) {
  let biggestName = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestName.length) {
      biggestName = array[index];
    }
  }
  return biggestName;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function moreTimesRepeat(array) {
  let numberMoreTimesRepeat = array[0];
  let moreTimesRepeat = 0;

  for(let index = 0; index < array.length; index += 1) {
    let repeatTimes = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        repeatTimes += 1;  
      }
    }
    if (repeatTimes > moreTimesRepeat) {
      moreTimesRepeat = repeatTimes;
      numberMoreTimesRepeat = array[index]
    }
  }
  return numberMoreTimesRepeat;
}
console.log(moreTimesRepeat([2, 3, 2, 5, 8, 2, 3]));

function sumAllNumbers (number) {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    sum += index; 
  }
  return sum;
}
console.log(sumAllNumbers(5));