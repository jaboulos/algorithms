/*
Write a function that returns all possible combinations of elements
within a given array that add up to given n.

given array: [1,2,3,4,5,6,7,8,9]
given num: 10
output: [ [6,4], [7,3] [8,2] [9,1] ]
*/

const combinationSum = (arr, sum) => {
  let pairs = [];
  let numList = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let diff = sum - currNum;

    if (numList.includes(diff)) {
      pairs.push([currNum, diff]);
    }
    numList.push(currNum);
  }
  return pairs;
};
