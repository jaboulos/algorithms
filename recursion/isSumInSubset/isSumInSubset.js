/*
Given a set of integers and a target value k, find a non-empty subset that sums up to k.

Example One
Input: [2 4 8], k = 6
Output: True
Because 2+4=6.

Example Two
Input: [2 4 6], k = 5
Output: False
Because no subset of numbers from the input sums up to 5.

Notes
Input Parameters: Function has two arguments: an array of integers (their order doesn’t matter) and the target value  k.
Output: Function must return a boolean value.

Constraints:

1 <= size of the input array <= 18
-10^12 <= elements of the array, k <= 10^12
*/

const check_if_sum_possible = (arr, k) => {
  // return the return value of the helper function
  // pass in, input, index, targetSum, currentSum
  // currSum cannot start at as 0
  return helper(arr, k, null, 0); // should return true or false
};

const helper = (arr, k, currSum, i) => {
  // base case
  // currSum cannot start at 0 bc of this check
  if (currSum === k) {
    return true;
  }
  // targetSum === sumSoFar ? true : false;
  if (i === arr.length) {
    return false;
  }

  // what to do?
  // call helper function, take arr[i] and add to arr[i+1] and check to see if that sum = target val
  let check1 = helper(arr, k, currSum + arr[i], i + 1); // sum of combined elements
  let check2 = helper(arr, k, currSum, i + 1); // sum of individual element
  // if either calls evaluates to true, we want to return true
  return check1 || check2;
};

check_if_sum_possible([2, 4, 8], 6);
