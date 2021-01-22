/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */

const diameterOfBinaryTree = (root) => {
  let result = [0];
  if (!root) return result;
  helper(root, result);
  return result[0];
};

const helper = (node, result) => {
  if (!node.left && !node.right) return 0;

  let left = 0;
  let right = 0;
  let diameter = 0;

  // need to know left height
  if (node.left) {
    left = helper(node.left, result);
    diameter += left + 1;
  }

  // need to know right height
  if (node.right) {
    right = helper(node.right, result);
    diameter += right + 1;
  }

  // post order process and return

  // compare current value in result with current diameter and replace value in result if diameter is bigger than current value in result
  result[0] = Math.max(result[0], diameter);

  // to calculate diameter right it is lHeight + rHeight + 1
  return Math.max(left, right) + 1;
};
