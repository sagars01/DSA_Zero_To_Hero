const MaxHeap = require('../../src/Heap/MaxHeap');

describe('Heap Suite', () => {
  describe('MaxHeap: Implementation Test Suite', () => {
    test('should insert in correct position', () => {
      const heap = new MaxHeap();
      for (let element of [0, 1, 2, 3, 4, 5]) {
        heap.insert(element);
      }

      console.log(heap.getHeap());
    });
  });
});
