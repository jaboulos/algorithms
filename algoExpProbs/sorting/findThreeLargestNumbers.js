/*
Write a function that takes in an arr of at least 3 ints and,
without sorting the input arr, returns a sorted arr of the three
largets ints in the input arr.  The function should return
duplicates as well

ex:
input = [141,1,17,-7,-17,-27,18,541,8,7,7]
output = [18,141,541]
*/

function findThreeLargestNumbers(array) {
  if (array.length <= 2) return array;
  // Write your code here.
  // merge sort
  // slice the 3 last elems in output arr
  const test = mergeSort(array);
  return test.slice(array.length - 3);
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, mid);
  const rightSide = arr.slice(mid);

  const left = mergeSort(leftSide);
  const right = mergeSort(rightSide);

  return merge(left, right);
};

const merge = (l, r) => {
  let aux = [];

  while (l.length && r.length) {
    if (l[0] < r[0]) {
      aux.push(l.shift());
    } else {
      aux.push(r.shift());
    }
  }
  return [...aux, ...l, ...r];
};

// time: O(nlogn) => can be optimized further to O(n) time
