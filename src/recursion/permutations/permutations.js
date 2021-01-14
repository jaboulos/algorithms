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

// shouldnt need a helper for this
const permute = (nums, combos = [], results = []) => {
  // bc
  // if nums length is 0
  if (nums.length === 0) {
    // push a copy of combos subArr into results // can spread it too
    results.push(combos.slice());
  }
  for (let i = 0; i < nums.length; i++) {
    // we want to remove the number from our nums input
    // pass in a copy of nums so we dont mutate our input
    // grab all the numbers that dont have this current indexed value
    const numsCopy = nums.filter((_, idx) => idx !== i);
    // push in the current number into our combos
    combos.push(nums[i]);
    // make recursive call to self
    permute(numsCopy, combos, results);
    // remove number after we return from function call
    combos.pop(); // tricky
  }
  return results;
};

// TC: O(N!)
