/*
Given a positive integer n, return ALL strings of length 2*n with well formed round brackets.

Example
Input: 3
Output:

[

    "((()))",

    "(()())",

    "(())()",

    "()(())",

    "()()()"

]

Any array containing these five strings in any order is a correct output.

Notes
Input Parameters: Function has one argument, integer n.
Output: Return array of strings containing all possible well formed round brackets string of length 2*n. Order of strings in the returned array is insignificant, e.g. for n=2 both ["(())", "()()"] and ["()()", "(())"] will be accepted.

Constraints:

1 <= n <= 13
Only use round brackets. '(' and ')'.
*/

const makeBrackets = (n) => {
  // want to return an array of strings
  const results = [];
  // call helper that returns the array of strings
  helper(n, results, "", 0, 0);
  return results;
};

const helper = (n, results, slate, left, right) => {
  // base case
  if (left === n && right === n) {
    results.push(slate);
    return;
  }

  if (left < n) {
    helper(n, results, slate + "(", left + 1, right);
    left + 1;
  }

  if (right < left) {
    helper(n, results, slate + ")", left, right + 1);
    right + 1;
  }
  return results;
};
