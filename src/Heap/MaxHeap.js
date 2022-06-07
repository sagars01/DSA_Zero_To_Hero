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
    if (this.root.length > 2) {
      const heap = [...this.root];

      let idx = heap.length - 1;

      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[idx], heap[Math.floor(idx / 2)]] = [
            heap[Math.floor(idx / 2)],
            heap[idx],
          ];
          // If there's another parent to the node is question
          // Continue moving up;
          if (Math.floor(idx / 2) >= 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }

      this.root = [...heap];
      return this.root;
    } else {
      this.root.push(num);
    }
  }
}

module.exports = MaxHeap;
