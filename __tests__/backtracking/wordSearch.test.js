const ws = require('../../src/Backtracking/WordSearch');

describe('Backtracking: Word Search Test Suite', () => {
  test('should return true as word exists', () => {
    let board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    let word = 'SEE';
    expect(ws(board, word)).toBe(true);
  });

  test('should return false as word does not exists', () => {
    let board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    let word = 'AQA';
    expect(ws(board, word)).toBe(false);
  });
});
