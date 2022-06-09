/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * @link https://leetcode.com/problems/top-k-frequent-elements/
 * @author sagars01
 * @desc Use a map to store the number: frequency
 *      Use another bucket (array) to put the elements based on their order of frequency low to high;
 * Loop through the array from back to get the last K elements;
 *
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Bucket Sort

  let bucket = [];
  let freq = new Map();
  let results = [];
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let [num, frq] of freq) {
    bucket[frq] = (bucket[frq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) results.push(...bucket[i]);
    if (results.length === k) break;
  }

  return results;
};
