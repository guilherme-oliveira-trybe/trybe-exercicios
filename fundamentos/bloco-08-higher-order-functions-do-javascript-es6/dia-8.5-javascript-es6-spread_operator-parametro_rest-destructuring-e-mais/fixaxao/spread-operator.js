// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Pêra', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Morango', 'Uva', 'Manga'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFrutas = [...fruit, ...additional];
  return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));