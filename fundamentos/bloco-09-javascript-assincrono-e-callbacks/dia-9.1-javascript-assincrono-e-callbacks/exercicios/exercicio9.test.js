// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedResult = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

    function callback(error, result) {
      expect(result).toBe(expectedResult);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
  });
});