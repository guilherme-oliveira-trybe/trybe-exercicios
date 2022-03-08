const myRemove = require('./myremove');

  it('give arr and remove item', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  });

  it('give arr and remove item', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('give arr and remove item', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });