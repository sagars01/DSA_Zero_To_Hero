/**
 * Implement Max Heap data structure.
 *
 *
 */

class MaxHeap {
  constructor(capacity) {
    this.capacity = capacity;
    this.root = [null];
  }

  getHeap() {
    return this.root;
  }

  insert(num) {
    this.root.push(num);
    if (this.root.length > 2) {
      let heap = this.root;

      let idx = heap.length - 1;

      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }

  remove() {}
}

module.exports = MaxHeap;
