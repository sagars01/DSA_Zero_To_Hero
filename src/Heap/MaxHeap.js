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

  remove() {
    if (this.root.length === 2) {
      return this.root.pop();
    }

    if (this.root.length === 3) {
      swap(this.root.length - 1, 1);
      return this.root.pop();
    }

    let idx = this.root.length - 1;

    swap(idx, this.root[1]);

    const numToPop = this.root.pop();

    while (this.root[idx] > this.root[Math.floor(idx / 2)]) {
      swap(idx, Math.floor(idx / 2));

      if (Math.floor(idx / 2) > 1) {
        idx = Math.floor(idx / 2);
      }
    }

    return numToPop;
  }

  swap(i, j) {
    [this.root[i], this.root[j]] = [this.root[j], this.root[i]];
  }
}

module.exports = MaxHeap;
