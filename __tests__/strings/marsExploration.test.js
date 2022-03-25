const mars = require('../../src/Strings/MarsExploration.js');

describe('String: Mars exploration Test Suite', () => {
  test('should return 3', () => {
    const input = 'SOSSOT';
    expect(mars(input)).toBe(1);
  });

  test('should return 0', () => {
    const input = 'SOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOS';
    expect(mars(input)).toBe(0);
  });

  test('should return 0', () => {
    const input = '';
    expect(mars(input)).toBe(0);
  });
});
