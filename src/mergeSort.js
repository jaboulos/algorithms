// takes an input array, split it into smallest chunks (1 elem) then call divideAndMerge
const mergeSort = (arr) => {
  // divide array into 2 separate and equal halves
  // recursively call mergeSort until input array is split into an array with 1 elem

  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = array.slice(0, center);
  const right = array.slice(mid);

  // recursively call mergeSort with left and right
  return divideAndMerge(mergeSort(left), mergeSort(right)); // this returns the return value from divideAndMerge
};

// helper function takes two sorted arrays and joins them together
const divideAndMerge = (left, right) => {
  const results = [];
  // while loop runs while both arrays have a length
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // takes the first element from left array and pushes to results
      results.push(left.shift());
    } else {
      // otherwise remove the first element in right array and add to results
      results.push(right.shift());
    }
    // arrays are already sorted
    // return everything added to results
    // return remaining values in left or right array inputs
    return [...results, ...left, ...right];
  }
};
