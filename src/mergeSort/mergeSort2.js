// takes an input arr, split it into smallest chunks (1 elem) then call divideAndMerge
const mergeSort = (arr) => {
  // divide arr into 2 separate and equal halves
  // recursively call mergeSort until input arr is split into an arr with 1 elem

  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // helpful way to see what is actually happening during the recursion
  // is to console.log the left and right like:
  // console.log('split left', left)
  // console.log('split right', right)

  // recursively call mergeSort with left and right
  return divideAndMerge(mergeSort(left), mergeSort(right)); // this returns the return value from divideAndMerge
};

// helper function takes two sorted arrs and joins them together
const divideAndMerge = (left, right) => {
  const results = [];
  // while loop runs while both arrs have a length
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // takes the first element from left arr and pushes to results
      results.push(left.shift());
    } else {
      // otherwise remove the first element in right arr and add to results
      results.push(right.shift());
    }
    // arrs are already sorted
    // return everything added to results
    // return remaining values in left or right arr inputs

    // alternate way for this last line can be written as
    /*
    while(left.length) result.push(left.shift())
    while(right.length) result.push(right.shift())
    */
    return [...results, ...left, ...right];
  }
};
console.log(mergeSort([1, 4, 2, 5, 9, 10, 1]));
