/**
 * @link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @author sagars01
 * @description you have to reach a stage where you can't go left and can't go right. Because if p and q is less than root.val then you can find the numbers on the right hand side and vice versa. If you can't go either way then current node is your Lowest Common Ancestor
 *
 *
 *
 */

function LCA(root, p, q) {
  if (root.val < p && root.val < q.val) {
    // Traverse right
    return LCA(root.right, p, q);
  }

  if (root.val > p.val && root.val > q.val) {
    // Traverse left
    return LCA(root.left, p, q);
  }

  // No condition satisfied, means we have solution.

  return root;
}
