/**
 * @link https://leetcode.com/problems/group-anagrams/
 * @example 
 *  Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * @implements O(nklog(k))
 * @type Easy, String
 * @author sagars01
 * @description this can be further optimized
 *
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let str of strs) {
    const aChar = str.split('').sort().join();
    if (map.has(aChar)) {
      const data = map.get(aChar);
      data.push(str);
    } else {
      const data = [str];
      map.set(aChar, data);
    }
  }

  return [...map.values()];
};

module.exports = groupAnagrams;
