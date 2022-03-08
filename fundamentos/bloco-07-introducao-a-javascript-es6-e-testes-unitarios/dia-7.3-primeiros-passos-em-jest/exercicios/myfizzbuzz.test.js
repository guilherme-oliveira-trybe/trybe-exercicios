const myFizzBuzz = require('./myfizzbuzz');

it('divisivel por 3 e 5 is fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

it('divisivel por 3 is fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
})

it('divisivel por 5 is buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
})

it('não divisivel por 3 e 5 is number', () => {
    const number = 7;
    expect(myFizzBuzz(number)).toBe(number);
})

it('typeof !== number', () => {
    expect(myFizzBuzz('teste')).toBe(false);
})