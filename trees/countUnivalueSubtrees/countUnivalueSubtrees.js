/*
Given the root of a binary tree, return the number of uni-value subtrees.
A uni-value subtree means all nodes of the subtree have the same value.


Example 1:
Input: root = [5,1,5,5,5,null,5]
Output: 4

Example 2:
Input: root = []
Output: 0

Example 3:
Input: root = [5,5,5,5,5,null,5]
Output: 6


Constraints:

The numbrt of the node in the tree will be in the range [0, 1000].
-1000 <= Node.val <= 1000
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

// this is bottom up
const countUnivalSubtrees = (root) => {
  const result = [0];
  if (!root) return result[0];
  helper(root, result);
  return result[0];
};

// because its bottom up, assign left and right
// children want to tell parents if they are univalue
const helper = (node, result) => {
  // base case
  // create flag to indicate if child subtree is univalue
  let isUnivalue = true;

  let left;
  let right;

  // recursion
  if (node.left) {
    left = helper(node.left, result);
    // if left is not a univalue, self will not be an univalue either
    if (!left || node.val !== node.left.val) {
      isUnivalue = false;
    }
  }

  if (node.right) {
    right = helper(node.right, result);
    if (!right || node.val !== node.right.val) {
      isUnivalue = false;
    }
  }

  // postorder process and return
  // if univaule is true, increase count
  if (isUnivalue) {
    result[0]++;
  }

  // after the recursive stack, return true or false for if subtree is univalue
  // tell parent node if it is univalue or not
  return isUnivalue;
};
