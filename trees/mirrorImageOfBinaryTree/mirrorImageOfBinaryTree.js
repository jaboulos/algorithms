/*
You are given the root node of a binary tree T. You need to modify that tree in place, transform it into the mirror image of the initial tree T.

Example
Input:

        0

      /    \

     1	    2

   /  \    /   \

 3    4    5    6



Output:

        0

      /    \

     2	    1

   /  \    /   \

 6    5    4    3


As we can easily visualise that input binary tree and output binary tree are mirror images of each other. So if A and B are two binary trees which are mirror images of each other then taking a mirror image of A would generate B and vice versa.

Notes
Input Parameters: The function has one parameter of type TreeNode: the root node of binary tree T.
Output: The function doesn’t need to return anything. The tree needs to be modified in place.

Constraints:
1 <= number of nodes <= 100000
Nodes will have unique values between 0 and (number of nodes-1).
*/

///////////////////////////////////////////
///////////////// Problem /////////////////
///////////////////////////////////////////
/*
 * Complete the 'mirror_image' function below.
 *
 * The function accepts root node of binary tree as parameter.
 *
 * Structure of TreeNode will be:
 * class TreeNode
 * {
 *     constructor(data)
 *     {
 *         this.data = data;
 *         this.left = null;
 *         this.right = null;
 *     }
 * }
 */
const mirrorImage = (root) => {
  // check if input has a root - also a basecase
  if (!root) {
    return;
  }

  // traverse the tree and swap leftSubtree.left with rightSubtree.right
  // then swap leftSubtree.right with rightSubtree.left

  // swap left with right for current tree, should happen in this order
  const left = root.left;
  root.left = root.right;
  root.right = left;

  // traverse along the left, and then the right
  mirrorImage(root.left);
  mirrorImage(root.right);
};
