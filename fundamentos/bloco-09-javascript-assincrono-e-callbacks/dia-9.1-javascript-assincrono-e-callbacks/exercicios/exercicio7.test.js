const { it, expect } = require('@jest/globals');
const uppercase = require('./exercicio7.js');
const { describe } = require('yargs');

it('retorna em letra maiuscula', (done) => {
  uppercase('guilherme', (str) => {
    try {
      expect(str).toEqual('GUILHERME')
      done();
    } catch (error) {
      done(error);
    }
  });
});
