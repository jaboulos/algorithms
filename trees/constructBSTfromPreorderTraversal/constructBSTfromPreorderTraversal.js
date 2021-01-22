/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]



Constraints:

1 <= preorder.length <= 100
1 <= preorder[i] <= 10^8
The values of preorder are distinct.
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = (preorder) => {
  if (!preorder || preorder.length < 1) return null;
  // these initial inputs are like a range
  const nums = preorder.sort();
  return helper(nums, 0, nums.length - 1);
};

// help to construct tree
// need left index and right index and build tree in between
// bottom up approach
const helper = (nums, l, r) => {
  // base case
  if (l > r) return null;

  const mid = Math.floor((l + r) / 2);
  const node = new TreeNode(nums[mid]); // this is the root between the two subtrees

  // recursion
  node.left = helper(nums, l, mid - 1); // this is the left side
  node.right = helper(nums, mid + 1, r); // this is the right side

  return node;
};
