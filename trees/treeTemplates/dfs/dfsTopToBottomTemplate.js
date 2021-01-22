// returns true or false
const dfsTopToBottom = (root, x) => {
  // Step 1
  let result = [];

  // Step 2
  // checks for root
  if (!root) return [];

  // Step 3 just create the recursive function, fill in later
  // helper function for recursion
  const dfs = (node, x) => {
    // Step 7 base case
    // define base case, do some manipulations to node or x here
    // do stuff to result

    // step 6 recursion case
    if (node.left) {
      dfs(node.left, x);
    }

    if (node.right) {
      dfs(node.right, x);
    }
  };

  // step 4 call recursive function
  dfs(root, x);

  return result;
};
