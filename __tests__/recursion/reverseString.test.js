const {
  reverseString: mainMethod,
  reverseStringRecursive,
  reverseWithTwoPtrsNRecursion,
} = require('../../src/Recursion/ReverseString');

describe('Recursion: Reverse String Test Suite', () => {
  test('should return reverse', () => {
    const input = ['h', 'e', 'l', 'l', 'o'];
    const o = input.reverse();

    expect(mainMethod(input)).toEqual(o);
  });

  test('should return reverse', () => {
    const input = 'hello';
    const o = input.split('').reverse().join('');

    expect(reverseStringRecursive(input)).toEqual(o);
  });

  test('should return reverse', () => {
    const input = 'hello';
    const o = input.split('').reverse().join('');

    expect(reverseWithTwoPtrsNRecursion(input)).toEqual(o);
  });
});
