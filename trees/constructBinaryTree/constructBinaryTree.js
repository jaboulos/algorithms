/*
Inorder traversal - Process all nodes of a binary tree by recursively processing the left subtree, then processing the root, and finally the right subtree.
Preorder traversal - Process all nodes of a binary tree by recursively processing the root, then processing the left subtree, and finally the right subtree.

Given the inorder and preorder traversal of a valid binary tree, you have to construct the binary tree.

[Interesting article to read: http://www.geeksforgeeks.org/if-you-are-given-two-traversal-sequences-can-you-construct-the-binary-tree/]

Input Format:
You are given two integer array named inorder and preorder of size n, containing positive values <= 10^5

Output Format:
Return root pointer of the constructed binary tree.

Constraints:
0 <= n <= 10^5
1 <= inorder[i], preorder[i] <= 10^5
Values stored in the binary tree are unique.
*/

/*
 * Complete the 'constructBinaryTree' function below.
 *
 * The function accepts INTEGER_ARRAY inorder and preorder as parameter and returns Root pointer of constructed binary tree.
 * Definition for Binary tree.
 * function TreeNode(value){
 *     this.value = value
 *     this.left = null
 *     this.right = null
 * }
 */

/* example inputs
 preorder = [3,9,20,15,7] => Root->Left->Right
 inorder = [9,3,15,20,7] => Left->Root->Right
*/

// Definition foor this tree
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function constructBinaryTree(preorder, inorder) {
  // STEP 6
  // Check for null values
  // null values will happen inorder tree runs out of values
  if (!inorder || inorder.length < 1) {
    return null;
  }

  // STEP 1
  // first step is get the val and define the root
  // shift removes 1st elem in array and returns it
  // first elem in preorder array is root
  let root = new TreeNode(preorder.shift());
  // console.log('ROOT', root)

  // STEP 2
  // get index of root val from inorder array
  let rootIndex = inorder.indexOf(root.val);

  // STEP 3
  // identify left tree in inorder
  // anything left of root from inorder is left tree
  let leftTree = inorder.slice(0, rootIndex);

  // STEP 4
  // identify right tree in inorder
  // anything right of root from inorder is right tree
  let rightTree = inorder.slice(rootIndex + 1);

  // STEP 5
  // recursive calls
  root.left = constructBinaryTree(preorder, leftTree);
  root.right = constructBinaryTree(preorder, rightTree);

  return root;
}

constructBinaryTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
