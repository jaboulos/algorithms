/*
Given an integer array nums, return all possible subsets (the power set).
The solution set must not contain duplicate subsets.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

const powerset = (nums) => {
  const results = [];
  helper(nums, results, [], 0);
  return results;
};

const helper = (nums, results, slate, i) => {
  if (i === nums.length) {
    results.push(slate.slice());
    return;
  }
  slate.push(nums[i]); //
  helper(nums, results, slate, i + 1);
  slate.pop();
  helper(nums, results, slate, i + 1);
};

powerset([1, 2, 3]);
