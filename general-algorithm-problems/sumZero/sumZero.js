/*
Write a function, sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or
undefined if a pair does not exist
*/

const sumZero = (arr) => {
  if (arr.length < 1) return undefined;

  // iterate forwards and backwards
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      let subArr = [arr[left], arr[right]];
      result.push(subArr);
      left++;
      right--;
    }

    if (sum < 0) left++;
    if (sum > 0) right--;
  }
  if (result.length < 1) return undefined;
  return result;
};

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
