const swapNodePairs = require('../../src/Recursion/SwapNodePairs');
describe('Recursion: Swap Node Pairs of Linked List', () => {
  test('should return true', () => {
    const ll = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: null,
          },
        },
      },
    };

    const oll = {
      val: 2,
      next: {
        val: 1,
        next: {
          val: 4,
          next: {
            val: 3,
            next: null,
          },
        },
      },
    };

    expect(swapNodePairs(ll)).toEqual(oll);
  });
});
