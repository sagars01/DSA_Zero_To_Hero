/**
 * Find when all members became friends. The earliest time.
 * @link https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/
 *
 * @example The inputs contain time of becoming friend and the connection
 * Input: logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], n = 6
Output: 20190301
Explanation: 
The first event occurs at timestamp = 20190101 and after 0 and 1 become friends we have the following friendship groups [0,1], [2], [3], [4], [5].
The second event occurs at timestamp = 20190104 and after 3 and 4 become friends we have the following friendship groups [0,1], [2], [3,4], [5].
The third event occurs at timestamp = 20190107 and after 2 and 3 become friends we have the following friendship groups [0,1], [2,3,4], [5].
The fourth event occurs at timestamp = 20190211 and after 1 and 5 become friends we have the following friendship groups [0,1,5], [2,3,4].
The fifth event occurs at timestamp = 20190224 and as 2 and 4 are already friends anything happens.
The sixth event occurs at timestamp = 20190301 and after 0 and 3 become friends we have that all become friends.
 * 
 * @description the idea is again simple with Disjoint Sets:
 * 1. Sort the edges based on timestamp
 * 2. Join the connection,
 *      Note when a connection is built and decrement the count
 *      Once the count of connection becomes 0 
 *      That's the timestamp we are looking for
 *
 *
 */

// Custom Disjoint Set

class DisjointSet {
  constructor(n) {
    this.connections = n;
    this.root = new Array(n).fill(1).map((_, i) => i);
  }

  findConnection(x) {
    if (this.root[x] == x) return x;

    return (this.root[x] = this.findConnection(this.root[x]));
  }

  friendUnion(x, y) {
    const conX = this.find(x);
    const conY = this.find(y);

    if (conX != conY) {
      this.connections--;
      this.root[conX] = conY;
    }

    return this.connections;
  }
}

/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */

var earliestAcq = function (logs, n) {
  const dj = new DisjointSet(n);

  const logsSorted = logs.sort((a, b) => a[0] - b[0]);

  for (const [timestamp, i, j] of logsSorted) {
    if (dj.friendUnion(i, j) === 1) {
      return timestamp;
    }
  }

  return -1;
};

module.exports = earliestAcq;
