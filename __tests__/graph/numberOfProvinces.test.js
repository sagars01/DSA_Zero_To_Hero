const NOP = require('../../src/Graph/NumberOfProvinces');

describe('Graph: NumberOfProvinces', () => {
  test('should return correct answer', () => {
    const isConnected = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];
    const output = 2;

    expect(NOP(isConnected)).toBe(output);
  });

  test('should return correct answer', () => {
    const isConnected = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const output = 3;

    expect(NOP(isConnected)).toBe(output);
  });
});
