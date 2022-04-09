const {
  reverseString: mainMethod,
} = require('../../src/Recursion/ReverseString');

describe('Recursion: Reverse String Test Suite', () => {
  test('should return reverse', () => {
    const input = ['h', 'e', 'l', 'l', 'o'];
    const o = input.reverse();

    expect(mainMethod(input)).toEqual(o);
  });
});
