function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
module.exports = myRemove;

  // implemente seus testes aqui
// const myRemove = require('./myremove');

//   it('give arr and remove item', () => {
//     const arr = [1, 2, 3, 4];
//     expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
//   });