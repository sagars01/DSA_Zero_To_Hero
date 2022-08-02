/**
 * @link https://leetcode.com/problems/open-the-lock/
 * @author sagars01
 * @type Medium
 * @description The main idea is to try all the combination from 0000 and calculate the distance in achieving so.
 *
 */

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const dead = new Set(deadends);
  const visited = new Set();
  visited.add('0000');

  if (dead.has('0000')) return -1;

  let q = ['0000'];
  let dist = 0;

  while (q.length) {
    const nextQ = [];
    for (let comb of q) {
      if (comb === target) {
        return dist;
      }
      for (let i = 0; i < comb.length; i++) {
        let up = (+comb[i] + 1) % 10;
        let down = (+comb[i] + 9) % 10;

        let nextUp = comb.slice(0, i) + up + comb.slice(i + 1);
        let nextDown = comb.slice(0, i) + down + comb.slice(i + 1);

        if (!visited.has(nextUp) && !dead.has(nextUp)) {
          nextQ.push(nextUp);
          visited.add(nextUp);
        }

        if (!visited.has(nextDown) && !dead.has(nextDown)) {
          nextQ.push(nextDown);
          visited.add(nextDown);
        }
      }
    }

    q = nextQ;
    dist++;
  }

  return -1;
};

module.exports = openLock;
