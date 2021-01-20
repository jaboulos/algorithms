/*
3 Sum
Given an integer array arr of size n, find all magic triplets in it.

Magic triplet is a group of three numbers whose sum is zero.
Note that magic triplets may or may not be made of consecutive numbers in arr.


Example One

Input: arr = [10, 3, -4, 1, -6, 9]
Output: [“10,-4,-6”, “3,-4,1”]


Example Two

Input: arr = [12, 34, -46]
Output: [“12,-46,34”]


Example Three

Input: arr = [0, 0, 0];
Output: [“0,0,0”]


Example Four

Input: arr = [-2, 2, 0 -2, 2];
Output: [“2,-2,0”]


Notes

Input Parameters: Function has one argument: array of integers arr.

Output: Function must return an array of strings. Each string (if any) in the array must represent a unique magic triplet and strictly follow this format: “1,2,-3” (no whitespace, one comma between numbers).

Order of the strings in the array is insignificant. Order of the integers in any string is also insignificant. For example, if [“1,2,-3”, “1,-1,0”] is a correct answer, then [“0,1,-1”, “1,-3,2”] is also a correct answer.
Triplets that only differ by order of numbers are considered duplicates, and duplicates must not be returned. For example, if “1,2,-3” is a part of an answer, then “1,-3,2”, “-3,2,1” or any permutation of the same numbers may not appear in the same answer (though any one of them may appear instead of “1,2,-3”).


Constraints:

1 <= n <= 2000
-1000 <= any element of arr <= 1000
arr may contain duplicate numbers.
arr is not necessarily sorted.
*/

// brute force approach
const threeSum = (arr) => {
  // check length
  if (arr.length < 3) {
    return [];
  }
  let result = [];

  // sort array
  // sorted arrays lets you do a binary search (logn speed)
  nums = arr.sort((a, b) => a - b);

  // loop to find sums of 0
  for (let i = 0; i < nums.length; i++) {
    // if 2 concurrent elements are the same, skip it
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // loop again and start with the 'second' number in the array
    for (let j = i + 1; j < nums.length; j++) {
      // if the 'second' number is the same as the previous, skip it
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      // loop again and start with the 'third' number in the array
      for (let k = j + 1; k < nums.length; k++) {
        // if the 'third' number is the same as the previous, skip it
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        // check to see if the sum of the 3 indexed values sum to 0, if so push to results array as a string
        if (nums[i] + nums[j] + nums[k] === 0) {
          let str = "";
          str = `${nums[i]}, ${nums[j]}, ${nums[k]}`;
          result.push(str);
        }
      }
    }
  }
  return result;
};
