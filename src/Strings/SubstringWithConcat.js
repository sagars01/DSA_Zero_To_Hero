/***
@link https://leetcode.com/problems/substring-with-concatenation-of-all-words/
@author sagars01
@kind String
@type Hard
@description
Idea: 
0. Word is Words arrray is of same length.
1. Create a map (dmap) to store each word from words array(param);
2. Store the word length - wLen -> this will be required in the future.
3. Create a function check which accepts an index (i) and try test from that window
    this is the main function which returns true or false;
    
    3.1: Create a clone of the dmap 
    3.2: Loop through the string (s) starting from i, hopping length of each word
        3.2.2: Slice word (w) till wordLength wLen 
        3.2.3: If the slice (w) is found from the map then reduce the counter by 1
                3.2.3.1: If the same word is found to be zero in the map then delete it.
        3.2.4 ELSE return false
        3.2.5 Meanwhile while looping if the map clone size is 0 it means we have found all
              the matches.
              
    3.3 If after the loop completion the map is still not empty it means there's some
        word that was not part of the WINDOW so we return false
    3.4 
4. If Check is true, then push the index to the answer collection.

**/

var findSubstring = function (s, words) {
  // 1
  const d = new Map();

  words.forEach((o) => {
    const val = d.get(o);
    if (d.has(o)) {
      d.set(o, val + 1);
    } else {
      d.set(o, 1);
    }
  });

  // 2
  const wLen = words[0].length;

  // 3
  function check(i) {
    if (s.length - wLen < i) {
      return false;
    }

    const dClone = new Map(d); // 3.1
    for (let j = i; j < s.length; j += wLen) {
      // 3.2

      const w = s.slice(j, j + wLen);
      const val = dClone.get(w);
      if (dClone.has(w)) {
        dClone.set(w, val - 1); // 3.2.3
        if (dClone.get(w) == 0) {
          dClone.delete(w); // 3.2.3.1
        }
      } else {
        // 3.2.4
        return false;
      }

      if (!dClone.size) {
        // 3.2.5
        return true;
      }
    }

    if (dClone.size) {
      // 3.3
      return false;
    }

    return true;
  }

  const ans = [];
  for (let i = 0; i < s.length; i++) {
    if (check(i)) {
      ans.push(i);
    }
  }

  return ans;
};
