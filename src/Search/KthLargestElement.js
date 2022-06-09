/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * @author sagars01
 * @desc This can be done by multiple ways
 * 1. Use a MAX HEAP to store the values and extract the top K: O(Klogn)
 * 2. Use a MAX HEAP to store the values and extract the last K: O(Klogn)
 * 3. Use a PRIORITY QUEUE to store the values and extract the largest K: O(Klogn)
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heap = new MaxPriorityQueue();

  for (let num of nums) {
    heap.enqueue(num);
  }

  while (k-- > 1) {
    heap.dequeue();
  }

  return heap.front().element;
};
