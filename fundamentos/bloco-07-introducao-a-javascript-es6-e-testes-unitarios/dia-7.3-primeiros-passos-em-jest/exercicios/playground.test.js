const {encode, decode} = require('./playground');

it('encode is fuctions', () => {
    expect(typeof encode).toBe('function');
});

it('decode is fuctions', () => {
    expect(typeof decode).toBe('function');
}); 

it('replace vogals in encode', () => {
    expect(encode('hello')).toBe('h2ll4');
}); 

it('replace number in decode', () => {
    expect(decode('1b1c1x3')).toBe('abacaxi');
});

it('replace vogals in encode', () => {
    expect(encode('hllp')).toBe('hllp');
}); 

it('replace number in decode', () => {
    expect(decode('7896')).toBe('7896');
});

it('count characteres', () => {
    const text = 'Be Trybe';
    expect(encode(text)).toHaveLength(text.length);
});