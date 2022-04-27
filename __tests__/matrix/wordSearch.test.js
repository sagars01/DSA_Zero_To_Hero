const WS = require('../../src/Matrix/WordSearch');

describe('Matrix: WordSearch Test Suite', () => {
  test('should return true as word exists', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ],
      word = 'ABCCED';
    expect(WS(board, word)).toBe(true);
  });
});
