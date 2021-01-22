/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

// first attempt
// sorted array becomes an inorder sequence
const sortedArrayToBST = (nums) => {
  if (!nums || nums.length < 1) return null;
  // these initial inputs are like a range
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

/*
const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // the subtrees are BSTs too
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
*/
