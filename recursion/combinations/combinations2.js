/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

You may return the answer in any order.



Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2:

Input: n = 1, k = 1
Output: [[1]]


Constraints:

1 <= n <= 20
1 <= k <= n

*/

const combine = (n, k) => {
  // return helper()
  const results = [];
  helper(n, k, 0, [], results);
  return results;
};

const helper = (n, k, i, subArr, results) => {
  // base case
  if (subArray.length === k) {
    results.push(subArr);
    return;
  }

  const numArr = [];

  for (let i = 1; i <= n; i++) {
    numArray.push(i);
  }

  // base case 2, both pointer values are ===
  let leftPointer = numArr[0];
  let rightPointer = numArr[numArr.length - 1];
  // return results
  /*
  ??? need to generate an array like this [1,2,3,4]
  for(let i = position; i <= n; i++) {

  }
  */
  // k = 2
  //        *
  //           *
  //  1, 2, 3, 4 => new Array(n).fill()

  //  [1, 4] X
  //  [1, 3] X
  //  [1, 2] X
  //  [2, 4] X
  //  [2, 3] X
  //  [3, 4] X
};
