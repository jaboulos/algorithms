/*
Given two integers n and k,
return all possible combinations of k numbers out of 1 ... n.

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

var combine = function (n, k) {
  const results = [];
  helper(n, k, results, [], 1);
  return results;
};

const helper = (n, k, results, slate, position) => {
  if (slate.length === k) {
    results.push(slate);
    return;
  }

  for (let i = position; i <= n; i++) {
    helper(n, k, results, [...slate, i], i + 1);
  }
};

console.log(combine(4, 2));
