const ProductExceptSelf = require('../../src/Arrays/ProductExceptSelf');

describe('Product Except Self Test Suite', () => {
  test('should return product except self', () => {
    const test = [1, 2, 3, 4];
    const expectation = [24, 12, 8, 6];
    expect(ProductExceptSelf(test)).toEqual(expectation);
  });

  test('should return some value', () => {
    const test = [1, 2, 3, 4];
    const expectation = [24, 12, 8, 6];
    expect(ProductExceptSelf(test)).toEqual(expectation);
  });

  test('should return some value', () => {
    const test = [];
    const expectation = [];
    expect(ProductExceptSelf(test)).toEqual(expectation);
  });

  test('should return some value', () => {
    const test = null;
    const expectation = [];
    expect(ProductExceptSelf(test)).toEqual(expectation);
  });
});
