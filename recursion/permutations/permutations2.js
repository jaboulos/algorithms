/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Examples:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]


Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

const permutations = (nums) => {
  const results = [];
  helper(nums, [], results);
  return results;
};

helper = (nums, combos, results) => {
  // base case
  if (nums.length === 0) {
    // hit the end of the tree
    // push combos into results
    results.push([...combos]);
  }

  // idea is to make a copy of the input array of nums, take the current index value while iterating over it, add it to a sub array, remove it from the iterable array]
  // --> hit the base case, push the combo array into results, pop the last number out so we can add the next number in
  for (let i = 0; i < nums.length; i++) {
    let copyNums = nums.filter((_, index) => index !== i); // copy of input array where the current indexed item is excluded
    combos.push(nums[i]); // push current item iterated over into the combos array
    helper(copyNums, combos, results); // recursive call to helper function here
    combos.pop(); // pop the last number off so the next number can be added in
  }
  return results;
};

permutations([1, 2, 3]);
