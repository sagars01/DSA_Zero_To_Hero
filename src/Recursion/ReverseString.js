/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = 0;
  let right = s.length - 1;

  while (l < right) {
    const t = s[right];
    s[right] = s[l];
    s[l] = t;
    l++;
    right--;
  }

  return s;
};

var reverseStringRecursive = (s, t = 0) => {
  if (s.length === t) {
    return '';
  }

  return reverseStringRecursive(s, t + 1) + s[t];
};

const reverseWithTwoPtrsNRecursion = (s) => {
  const helper = (s, start, end) => {
    if (start >= end) {
      return s;
    }

    const t = s[start];
    s[start] = s[end];
    s[end] = t;

    const str = helper(s, (start += 1), (end -= 1));
    return str;
  };
  return helper([...s], 0, s.length - 1).join('');
};

module.exports = {
  reverseString,
  reverseStringRecursive,
  reverseWithTwoPtrsNRecursion,
};
