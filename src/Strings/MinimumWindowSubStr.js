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
 */
var minWindow = function (s, t) {
  let left = 0;
  let right = t.length - 1;
  const tlen = t.length;
  const q = t.split('');
  const tMap = new Map();
  const findSub = (subStr) => {
    // The order of the string is also important
    // bac !== aba
    if (tMap.size === 0) {
      for (const char of t) {
        if (tMap.has(char)) {
          let count = tMap.get(char);
          tMap.set(char, count++);
        } else {
          tMap.set(char, 1);
        }
      }
    }

    // Now your map is ready, now you have to check if the count of characters is same or not.

    let isMatch = true;
    q.forEach((char) => {
      if (subStr.indexOf(char) < 0) {
        isMatch = false;
      }
    });

    return isMatch;
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
      minString = currentSubString;
      while (left < right - tlen) {
        left++;
        const anotherStringWindow = findSub(st.substring(left, right + 1));

        if (anotherStringWindow) {
          // if I found another window which is smaller in length then I update minString;
          minString = s.substring(left, right + 1);
        }
      }
    }

    right++;
  }
  // console.log(minString);
  return isFound ? max : '';
};

let s = 'ADOBECODEBANC',
  t = 'ABC';
console.log(minWindow(s, t));

// module.exports = minWindow;
