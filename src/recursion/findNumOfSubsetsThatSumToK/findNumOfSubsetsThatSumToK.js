/*
  input = [5, 10, 20]
  k = 10
*/

const findNumOfSubsetsThatSumToK = (input, targetSum) => {};

const helper = (input, i, targetSum, sum) => {
  let count = 0;
  if (sum === targetSum) {
    count += 1;
    return count;
  }
  if (sum > targetSum) {
    return;
  }
  if (i === input.length) {
    return;
  }
};
