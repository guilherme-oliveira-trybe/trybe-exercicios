const { randomNumber, upperCase, firstChar, concatenate, dogFetch } = require('./service');
jest.mock('./service.js');

describe('Exercicios dia 14.2', () => {
  describe('Exercicio 1', () => {
    it('Verifica se a função "randomNumber" foi chamada', () => {
      const randomNumber = jest.fn()

      randomNumber();
      expect(randomNumber).toHaveBeenCalled();
    })

    it('Verifica se a função "randomNumber" tem o retorno igual a 10', () => {
      const randomNumber = jest.fn().mockReturnValue(10);

      expect(randomNumber()).toBe(10)
    })

    it('Verifica quantas vezes a função "randomNumber" foi chamada', () => {
      const randomNumber = jest.fn()

      randomNumber()
      randomNumber()
      expect(randomNumber).toHaveBeenCalledTimes(2)
    })
  })
  describe('Exercicio 2', () => {
    it('Verifica se a função foi chamada e a nova implementação de divisão foi aplicada', () => {
      randomNumber.mockImplementation((a, b) => a / b);

      expect(randomNumber(8, 4)).toBe(2);
      expect(randomNumber).toHaveBeenCalled();
      expect(randomNumber).toHaveBeenCalledTimes(1);
    })
  })
  describe('Exercicio 3', () => {
    it('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
      randomNumber.mockImplementation((a, b, c) => a * b * c);

      randomNumber(2, 2, 2)
      expect(randomNumber).toHaveBeenCalled();
      expect(randomNumber).toHaveBeenCalledTimes(2);
      expect(randomNumber).toHaveBeenCalledWith(2, 2, 2)
      expect(randomNumber(2, 2, 2)).toBe(8);

      randomNumber.mockReset()

      randomNumber.mockImplementation((a) => a * 2);

      randomNumber(2)
      expect(randomNumber).toHaveBeenCalled();
      expect(randomNumber).toHaveBeenCalledTimes(1);
      expect(randomNumber).toHaveBeenCalledWith(2)
      expect(randomNumber(2)).toBe(4);
    })
  })
  describe('Exercicio 4', () => {
    it('Desenvolva novas implementações para as funções "upperCase", "firstChar" e "concatenate"', () => {

      upperCase.mockImplementation((text) => text.toLowerCase());
      firstChar.mockImplementation((text) => {
        const array = text.split('');
        return array[array.length - 1]
      });
      concatenate.mockImplementation((firstText, secondText, thirdText) => {
        return `${firstText} ${secondText} ${thirdText}`
      });

      upperCase('GUILHERME')
      expect(upperCase).toHaveBeenCalled();
      expect(upperCase).toHaveBeenCalledTimes(1);
      expect(upperCase).toHaveBeenCalledWith('GUILHERME')
      expect(upperCase('GUILHERME')).toBe('guilherme');

      firstChar('guilherme')
      expect(firstChar).toHaveBeenCalled();
      expect(firstChar).toHaveBeenCalledTimes(1);
      expect(firstChar).toHaveBeenCalledWith('guilherme')
      expect(firstChar('guilherme')).toBe('e');

      concatenate('olá', 'mundo', 'bão')
      expect(concatenate).toHaveBeenCalled();
      expect(concatenate).toHaveBeenCalledTimes(1);
      expect(concatenate).toHaveBeenCalledWith('olá', 'mundo', 'bão')
      expect(concatenate('olá', 'mundo', 'bão')).toBe('olá mundo bão');

      upperCase.mockRestore()
      firstChar.mockRestore()
      concatenate.mockRestore()

      upperCase('guilherme')
      expect(upperCase).toHaveBeenCalled();
      expect(upperCase).toHaveBeenCalledTimes(1);
      expect(upperCase).toHaveBeenCalledWith('guilherme')
      // expect(upperCase('guilherme')).toBe('GUILHERME');

      firstChar('guilherme')
      expect(firstChar).toHaveBeenCalled();
      expect(firstChar).toHaveBeenCalledTimes(1);
      expect(firstChar).toHaveBeenCalledWith('guilherme')
      // expect(firstChar('guilherme')).toBe('g');

      concatenate('olá', 'mundo')
      expect(concatenate).toHaveBeenCalled();
      expect(concatenate).toHaveBeenCalledTimes(1);
      expect(concatenate).toHaveBeenCalledWith('olá', 'mundo')
      // expect(concatenate('olá', 'mundo')).toBe('olá mundo');
    })
  })
  describe('Exercicio 5', () => {

    const dogFetch = jest.fn();
    afterEach(dogFetch.mockReset);

    it('Deve interpretar que a requisição se resolveu e teve como valor "request sucess".', async () => {
      dogFetch.mockResolvedValue("request sucess");

      dogFetch()
      expect(dogFetch).toHaveBeenCalled();
      expect(dogFetch).toHaveBeenCalledTimes(1);
      await expect(dogFetch()).resolves.toBe("request sucess");
      expect(dogFetch).toHaveBeenCalledTimes(2);
    })

    it('Deve interpretar que a requisição falhou e ter como valor "request failed"..', async () => {
      dogFetch.mockRejectedValue("request failed");

      expect(dogFetch).toHaveBeenCalledTimes(0);
      await expect(dogFetch()).rejects.toMatch("request failed");
      expect(dogFetch).toHaveBeenCalledTimes(1);
    })
  })
})
