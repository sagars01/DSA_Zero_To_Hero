/**
 * @link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @author sagars01
 *
 *
 */

function LCA(root, p, q) {
  if (!root || root.val === p || root.q === q) {
    return root;
  }

  const left = LCA(root.left, p, q);
  const right = LCA(root.right, p, q);

  if (!left) return right;
  if (!right) return left;

  return root;
}
