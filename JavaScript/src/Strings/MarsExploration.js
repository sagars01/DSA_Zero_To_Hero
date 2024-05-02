/**
 * @link https://www.hackerrank.com/challenges/mars-exploration/problem
 * @example Input: s = SOSSOT
            Output: 3
 * @author sagars01
 * 
 * @type easy
 * @description asked in Bukuwarung interview 25th Mar, 2022
 */

/**
 * @param {String} s
 * @return {number}
 */

function marsExploration(s) {
  const strLen = s.length / 3;
  let distortCount = 0;
  let actualStr = '';
  for (let i = 0; i < strLen; i++) {
    actualStr += 'SOS';
  }

  for (let j = 0; j < s.length; j++) {
    if (s[j] !== actualStr[j]) distortCount++;
  }

  return distortCount;
}

module.exports = marsExploration;
