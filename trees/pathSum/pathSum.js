/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.



Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Example 3:

Input: root = [1,2], targetSum = 0
Output: false


Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
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
 * @param {number} targetSum
 * @return {boolean}
 */

// returns true or false
const hasPathSum = (root, targetSum) => {
  // Step 1
  let result = false;

  // Step 2
  // checks for root
  if (!root) return false;

  // Step 3 just create the recursive function, fill in later
  // helper function for recursion
  const dfs = (node, target) => {
    // Step 7 base case
    // each time we recurse we want to do 2 things
    // -> keep modifying the target in dfs until it is === 0
    // -> check to see if we are at a leaf node
    target -= node.val;
    if (isLeaf(node) && target === 0) result = true;

    // step 6 recursion case
    if (node.left) {
      // if node.left is true, its not a leaf, so, call function again (1:05)
      // after you check node.left, you call it with node.left
      dfs(node.left, target);
    }

    if (node.right) {
      // if node.right is true, its not a leaf, so, call function again (1:05)
      // after you check node.right, you call it with node.right
      dfs(node.right, target);
    }
  };

  // step 4 call recursive function
  dfs(root, targetSum);

  return result;
};

// Step 5 create helper function to check whether a node is a leaf or not
const isLeaf = (node) => {
  // if the current node has no children, it is not a leaf
  return !node.left && !node.left;
};
