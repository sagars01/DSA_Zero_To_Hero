const ProductExceptSelf = require('../../src/Arrays/ProductExceptSelf');

describe('Product Except Self Test Suite', () => {
  test('should return some value', () => {
    expect(ProductExceptSelf(10)).toBeTruthy();
  });
});
