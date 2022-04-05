const sum = (...operands) => operands.reduce((a, b) => a + b, 0);

console.log(sum(5,5,4,6))

const sum2 = (...operands) => {
  let sum = 0;
  operands.forEach(operand => {
    sum += operand
  })
  return sum;
}

console.log(sum2(5,5,5,5));