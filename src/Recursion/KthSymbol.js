/**
 * @example 
 * Input: n = 2, k = 2
  Output: 1
  Explanation: 
  row 1: 0
  row 2: 01
 * 
 * 
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (N, K) {
  if (N === 1 || K === 1) return 0;

  const isEven = K % 2 === 0;
  return kthGrammar(N - 1, Math.ceil(K / 2)) === 0
    ? isEven
      ? 1
      : 0
    : isEven
    ? 0
    : 1;
};

let n = 1,
  k = 1;
console.log(kthGrammar(n, k));
