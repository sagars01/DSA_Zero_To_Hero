const index = require('../index');

test('Index: Jest Setup Test', () => {
  expect(index(false)).toBe(false);
});
