const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

// pass inputs arr, start, end (define starting vals)
const getPivot = (arr) => {
  // define pivot as the first item in arr
  // define variable swapIdx, initial value is start
  //
  // for loop, i = start+1, i <= end, i++
  // check if pivot is greater than arr[i]
  // if true, increase swapIdx by 1
  // if true, call swap and pass in arr, swapIdx, i
  //
  // after for loop call swap and pass in arr, start, swapIdx
  // return swapIdx
};

// gets inputs arr, left, right (definte starting vals)
const quickSort = (arr) => {
  // check if l < r (base case)
  // if true define var pivotIndex by setting it = to getPivot function call with arr, left and right as its inputs
  // call quicksort, pass in arr, left, pivotIndex -1
  // call quicksort pass in arr, pivotindex+1, right
  //
  // outside of if check return arr
};
