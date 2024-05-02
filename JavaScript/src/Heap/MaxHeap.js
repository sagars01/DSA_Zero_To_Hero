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
      this.swap(1, 2);
      return this.root.pop();
    }

    if (this.root.length <= 1) {
      return null;
    }

    this.swap(1, this.root.length - 1);
    const numToPop = this.root.pop();

    let idx = 1;
    let left = 2 * idx;
    let right = 2 * idx + 1;

    while (
      this.root[idx] <= this.root[left] ||
      this.root[idx] <= this.root[right]
    ) {
      if (this.root[left] > this.root[right]) {
        this.swap(left, idx);
        idx = left;
      } else {
        this.swap(right, idx);
        idx = right;
      }

      left = idx * 2;
      right = idx * 2 + 1;

      if (!this.root[left] || !this.root[right]) {
        break;
      }
    }

    if (this.root[left]) {
      if (this.root[left] > this.root[idx]) {
        this.swap(left, idx);
      }
    }

    if (this.root[right]) {
      if (this.root[right] > this.root[idx]) {
        this.swap(right, idx);
      }
    }

    return numToPop;
  }

  swap(i, j) {
    [this.root[i], this.root[j]] = [this.root[j], this.root[i]];
  }
}

module.exports = MaxHeap;
