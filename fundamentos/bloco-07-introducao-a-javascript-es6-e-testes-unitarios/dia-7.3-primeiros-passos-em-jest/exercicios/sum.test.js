const sum = require('./sum');

it(`sum 4 + 5 is 9`, () => {
    expect(sum(4, 5)).toBe(9);
});

it(`sum 0 + 0 is 0`, () => {
    expect(sum(0, 0)).toBe(0);
});

it(`sum 4 + '5'`, () => {
    expect(() => { sum() }).toThrow();
});

it(`sum 4 + '5'`, () => {
    expect(sum).toThrowError(new Error('parameters must be numbers'));
});