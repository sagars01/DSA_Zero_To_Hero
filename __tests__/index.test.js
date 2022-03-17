const index = require('../index');

describe('This is the base test of the Project', () => {
  test('Index: Jest Setup Test', () => {
    expect(index(false)).toBe(false);
  });
});
