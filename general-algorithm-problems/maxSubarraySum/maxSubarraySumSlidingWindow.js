/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the max sum of n consecutive elements in the array.

ex1:
arr = [1,2,5,2,8,1,5] n=2
output = 10

ex2:
arr = [1,2,5,2,8,1,5] n = 4
output = 17

ex3:
arr = [4,2,1,6] n = 1
output = 6

ex4:
arr = [4,2,1,6,2] n = 4
output = 13

ex5:
arr = [] n = 4
output = null
*/

const maxSubarraySum = (arr, n) => {
  let max = 0;
  let temp = 0;

  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
};

// index           0  1  2  3  4  5  6
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);
//                    i
//                             j
