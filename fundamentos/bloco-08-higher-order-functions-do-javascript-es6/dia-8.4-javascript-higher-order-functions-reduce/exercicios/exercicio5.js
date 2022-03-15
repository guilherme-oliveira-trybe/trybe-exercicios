
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, currentValue) => acc + currentValue.split('')
  .reduce((accumulator, curr) => {
    if (curr === 'a' || curr === 'A') return accumulator + 1;
    return accumulator;
  }, 0), 0);
}

console.log(containsA())