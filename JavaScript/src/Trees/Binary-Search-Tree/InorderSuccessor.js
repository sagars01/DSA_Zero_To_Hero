/**
 * @link https://leetcode.com/problems/inorder-successor-in-bst/
 * @author sagars01
 * @description Keep track of your parent node while you're traversing left.
 *
 *
 */

function INOS(node, t) {
  let s = null;

  const dfs = (root) => {
    if (root.val === t.val) return;

    if (root.val <= t.val) {
      dfs(root.right);
    } else {
      s = root;
      dfs(root.right);
    }
  };
  dfs(node);

  return s;
}
