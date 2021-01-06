const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = array.slice(0, center);
  const right = array.slice(mid);

  return divideAndMerge(mergeSort(left), mergeSort(right));
};

const divideAndMerge = (left, right) => {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
    return [...results, ...left, ...right];
  }
};

// time complexity is O(nlogn)