/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
But the following [1,2,2,null,3,null,3] is not

Follow up: Solve it both recursively and iteratively.
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
  @param {TreeNode} root
  @return {boolean}
*/

// recursive solution
const isSymmetric = (root) => {
  // null tree with nothing is symmetric
  if (root === null) {
    return true;
  }

  // return recursion output val
  // everything relies on recursive functions input params
  return helper(root.left, root.right);
};

// compare nodes
// compare left and right roots
// if we have left and right subtree, check left subtrees right === right subtrees left
// also check left subtrees left === right subtrees right
const helper = (leftSubtreeRoot, rightSubtreeRoot) => {
  // check subtrees, if both roots are null, structurally they are the same
  if (leftSubtreeRoot === null && rightSubtreeRoot === null) {
    return true;
  }
  // check subtrees values, check if they both have one then check if they are the same
  if (leftSubtreeRoot !== null && rightSubtreeRoot !== null) {
    return (
      // check if the values are the same
      leftSubtreeRoot.val === rightSubtreeRoot.val &&
      // check if child nodes are symmetric, visually drawing the tree out so these checks make sense
      helper(leftSubtreeRoot.right, rightSubtreeRoot.left) &&
      helper(leftSubtreeRoot.left, rightSubtreeRoot.right)
    );
  }
  return false;
};

isSymmetric([1, 2, 2, 3, 4, 4, 3]);
// linear time O(n)
// space O(h)
