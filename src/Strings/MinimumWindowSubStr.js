/**
 * @link https://leetcode.com/problems/minimum-window-substring/
 * @example Input: s = "ADOBECODEBANC", t = "ABC"
            Output: "BANC"
            Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 * @author sagars01
 * 
 * @type HARD
 * @description 
 * 
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 
var minWindow = function (s, t) {
  let left = 0;
  let right = t.length - 1;
  const tlen = t.length;
  const tMap = {};
  const findSub = (subStr) => {
    if (Object.keys(tMap).length === 0) {
      t.split('').forEach((char) => {
        if (tMap[char]) {
          tMap[char] += 1;
        } else {
          tMap[char] = 1;
        }
      });
    }
    const tMapCopy = { ...tMap };
    for (let char of subStr) {
      if (tMapCopy[char]) {
        tMapCopy[char]--;
        if (tMapCopy[char] <= 0) {
          delete tMapCopy[char];
        }
      }
    }

    return Object.keys(tMapCopy).length === 0;
  };
  let max = s;
  let minString;
  let isFound = false;
  while (right < s.length) {
    // 1. Check if the substring contains all the characters
    const st = s;
    // console.log(st.substring(left, right + 1));
    const currentSubString = st.substring(left, right + 1);
    const doesHaveAllCharacters = findSub(currentSubString);

    if (doesHaveAllCharacters) {
      // console.log('Match Found');
      // console.log(currentSubString);
      // Match is found and now we have to shorten the window size from left
      if (!minString) {
        minString = currentSubString;
      } else if (currentSubString.length < minString.length) {
        minString = currentSubString;
      }
      isFound = true;
      while (left < right - tlen + 1) {
        const subStrDecreasingWindow = st.substring(left + 1, right + 1);
        const anotherStringWindow = findSub(subStrDecreasingWindow);

        if (anotherStringWindow) {
          // if I found another window which is smaller in length then I update minString;
          minString = subStrDecreasingWindow;
        }
        left++;
      }
    }

    right++;
  }
  return isFound ? minString : '';
};
*/
var minWindow = function (s, t) {
  // `right` is -1 since every loop, we start by expanding the right boundary
  // setting this to -1 ensures that we will check the first char on the first time
  let min = '',
    left = 0,
    right = -1;
  let map = {};

  // this creates a map for the characters we need to include in the substring
  // we store the character and its count since it can be repeated
  // for example: "BAAC"
  t.split('').forEach((element) => {
    if (map[element] == null) map[element] = 1;
    else map[element] = map[element] + 1;
  });

  // sets how many different characters we still have
  // for example: given the input "BAAC", we still have 3 different characters need to check
  let count = Object.keys(map).length;

  while (right <= s.length) {
    // found a valid substring
    if (count == 0) {
      // try to shift left boudary to the right, this means the very left character will be removed
      // because of this, we need to check whats the affect by removing that character,
      let current = s[left];

      // if this chacter is in our map, it means we ll need to find another one in the future
      if (map[current] != null) map[current]++;

      // * we must have the condition `>0` because for case like "BBBA...", count for B could be negative
      if (map[current] > 0) count++;

      let temp = s.substring(left, right + 1);
      if (min == '') min = temp;
      else min = min.length < temp.length ? min : temp;

      left++;
    } else {
      right++;
      let current = s[right];

      // decrease the count for this character
      if (map[current] != null) map[current]--;

      if (map[current] == 0) count--;
    }
  }
  return min;
};

let s = 'acbbaca',
  t = 'aba';
console.log(minWindow(s, t));

// module.exports = minWindow;
