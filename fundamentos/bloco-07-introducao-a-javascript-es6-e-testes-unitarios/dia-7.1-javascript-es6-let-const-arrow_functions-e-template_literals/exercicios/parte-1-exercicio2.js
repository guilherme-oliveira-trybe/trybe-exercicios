const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const orderNumbers = () => {
//   for (let index = 1; index < oddsAndEvens.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//       if (oddsAndEvens[index2] > oddsAndEvens[index]) {
//         let change = oddsAndEvens[index2];
//         oddsAndEvens[index2] = oddsAndEvens[index];
//         oddsAndEvens[index] = change;
//       }
//     }
//   }
//   return oddsAndEvens
// }

// console.log(`Os números ${orderNumbers()} se encontram ordenados de forma crescente!`);

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);