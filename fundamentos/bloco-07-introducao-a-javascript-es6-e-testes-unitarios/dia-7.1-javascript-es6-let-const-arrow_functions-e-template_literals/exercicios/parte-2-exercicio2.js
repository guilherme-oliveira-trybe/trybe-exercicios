const longestWord = (phrase) => {
    let words = phrase.split(' ');
    let biggestWord = '';
    for (const word of words) {
        if (word.trim().length > biggestWord.length) {
            biggestWord = word.trim();
        }
    }
    return biggestWord;
}

console.log(longestWord('Sejam bem vindos')); // O método trim() retorna o texto sem espaços em branco no início e/ou fim da string. O trim() não altera o valor da string original.