/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.



Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?



Constraints:

The number of elements of the BST is between 1 to 10^4.
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // want to use inorder traversal to build a sorted array of node values, then return the kth element

  const sortedArr = [];

  // if no root, return empty arr
  if (!root) return sortedArr;

  // recursive function, takes in a node and the sorted array
  // inorder arrays split values left of root and right of root
  const inorderHelper = (node, arr) => {
    // base case
    // if node it traverses to is null return to break out of recursion
    if (node === null) return;

    // traverse down left side of tree, once it hits the end, start pushing things into the array
    inorderHelper(node.left, arr);
    arr.push(node.val);
    inorderHelper(node.right, arr);
  };
  // call helper function
  inorderHelper(root, sortedArr);

  return sortedArr[k - 1];
};
