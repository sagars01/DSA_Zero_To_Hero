const MaxHeap = require('../../src/Heap/MaxHeap');

describe('Heap Suite', () => {
  describe('MaxHeap: Implementation Test Suite', () => {
    test('should insert in correct position', () => {
      const heap = new MaxHeap();
      for (let element of [0, 1, 2, 3, 4, 5, 6]) {
        heap.insert(element);
      }

      console.log(heap.getHeap());
      expect(heap.getHeap()).toEqual([null, 6, 3, 5, 0, 2, 1, 4]);
    });

    test('should insert in correct position jumbled', () => {
      const heap = new MaxHeap();
      for (let element of [0, 1, 2, 3, 6, 4, 5]) {
        heap.insert(element);
      }

      console.log(heap.getHeap());
      expect(heap.getHeap()).toEqual([null, 6, 3, 5, 0, 2, 1, 4]);
    });
  });
});
