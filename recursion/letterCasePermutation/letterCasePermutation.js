/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.

Example 1:
Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:
Input: S = "3z4"
Output: ["3z4","3Z4"]

Example 3:
Input: S = "12345"
Output: ["12345"]

Example 4:
Input: S = "0"
Output: ["0"]


Constraints:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.
*/

const letterCasePermutation = (S) => {
  // create array to hold constructed strings
  const result = [];

  // call helper function
  // pass input str, result arr, empty str to begin with, starting index of 0
  helper(S, result, "", 0);

  // when the base case in helper function hits, it will have results arr with all constructed strings
  return result;
};

// takes input S, result arr, str, index
const helper = (S, result, resultStr, i) => {
  // define base case
  // base case hits when you traverse the tree and hit out of bounds which is the length of the str
  if (i === S.length) {
    // push the constructured striing into arr
    return result.push(resultStr);
  }

  // JS 'trick', use charAt to identify the str value at the given index, see if its within a range of A - Z

  // dont need a for loop, imagine traversing a tree, this is the given trees node you are checking

  // first traversal, going down left nodes, construct a lower case str
  if (S.charAt(i) >= "A" && S.charAt(i) <= "Z") {
    // helper recursively calls itself, constructing a string, when it reaches the length of the input S, it will be out of bounds, base case hits, constructed string gets pushed into results array

    // make S[i] lowercase
    // increase index i each time so base case can hit
    helper(S, result, resultStr + S.charAt(i).toLowerCase(), i + 1);
  }

  // Think of the tree again, traversing the right side, want to construct all combinations and return uppercase results
  if (S.charAt(i) >= "a" && S.charAt(i) <= "z") {
    helper(S, result, resultStr + S.charAt(i).toUpperCase(), i + 1);
  }
  // if neither of the above checks hit, the current string index isnt within A - Z or a - z, probably a number, add its value to the resultStr and move on to the next index value
  helper(S, result, resultStr + S[i], i + 1);
};

console.log(letterCasePermutation("a1b2"));

// Time complexity : O(2^n) // order of branching factor per height // 2 is the branches per height // n is the number of letters in string
// Space complexity: O(n) // depth is n, n is height
